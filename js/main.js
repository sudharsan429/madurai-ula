// =========================================================================
// Madurai Explorer — Core Application Controller
// Navigation, Ken Burns Slider, Live Multi-Category Search,
// Interactive Leaflet Maps, Geolocation & Distance Sorting
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const toggleBtn = document.querySelector(".nav-toggle") || document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggleBtn.classList.toggle("open", isOpen);
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Header scroll state
  const header = document.querySelector(".site-header");
  if (header) {
    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});

// =========================================================================
// Image Graceful Fallback Helper
// =========================================================================
function handleImageFallback(img, title) {
  if (!img) return;
  const parent = img.parentElement;
  if (!parent) return;
  img.style.display = "none";
  if (parent.querySelector(".img-fallback-badge")) return;
  const badge = document.createElement("div");
  badge.className = "img-fallback-badge";
  badge.innerHTML = `<span>${title || 'Madurai Landmark'}</span>`;
  parent.appendChild(badge);
}
window.handleImageFallback = handleImageFallback;

// =========================================================================
// 1. LIVE MULTI-CATEGORY SEARCH ENGINE (Home Page)
// =========================================================================
function initLiveMultiSearch() {
  const searchInput = document.querySelector("#globalSearchInput");
  const searchDrawer = document.querySelector("#searchLiveDrawer");
  const clearBtn = document.querySelector("#searchClearBtn");
  const chipContainer = document.querySelector("#searchCategoryChips");

  if (!searchInput || !searchDrawer) return;

  let activeCategory = "all";

  // Category chip listeners
  if (chipContainer) {
    chipContainer.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        chipContainer.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeCategory = chip.dataset.category || "all";
        performLiveSearch();
      });
    });
  }

  function performLiveSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchDrawer.classList.remove("open");
      searchDrawer.innerHTML = "";
      if (clearBtn) clearBtn.classList.remove("visible");
      // Reset map markers if map exists
      if (window.filterMapMarkers) window.filterMapMarkers(null);
      return;
    }

    if (clearBtn) clearBtn.classList.add("visible");
    searchDrawer.classList.add("open");

    // Gather and match items across all categories
    const results = {
      tourism: [],
      foods: [],
      restaurants: [],
      cafes: [],
      modern: [],
      stays: []
    };

    function matches(item) {
      const hay = [
        item.name,
        item.tagline,
        item.description,
        item.area,
        item.taluk,
        item.address,
        item.categoryLabel,
        item.specialties,
        item.ingredients,
        item.whereToTry,
        item.type,
        item.facilities,
        (item.tags || []).join(" ")
      ].filter(Boolean).join(" ").toLowerCase();
      return hay.includes(query);
    }

    if (typeof PLACES !== "undefined" && (activeCategory === "all" || activeCategory === "tourism")) {
      results.tourism = PLACES.filter(matches);
    }
    if (typeof FOODS !== "undefined" && (activeCategory === "all" || activeCategory === "foods")) {
      results.foods = FOODS.filter(matches);
    }
    if (typeof RESTAURANTS !== "undefined" && (activeCategory === "all" || activeCategory === "restaurants")) {
      results.restaurants = RESTAURANTS.filter(matches);
    }
    if (typeof CAFES !== "undefined" && (activeCategory === "all" || activeCategory === "cafes")) {
      results.cafes = CAFES.filter(matches);
    }
    if (typeof MODERN_SPOTS !== "undefined" && (activeCategory === "all" || activeCategory === "modern")) {
      results.modern = MODERN_SPOTS.filter(matches);
    }
    if (typeof STAYS !== "undefined" && (activeCategory === "all" || activeCategory === "stays")) {
      results.stays = STAYS.filter(matches);
    }

    const totalMatches = results.tourism.length + results.foods.length + results.restaurants.length + results.cafes.length + results.modern.length + results.stays.length;

    // Update map markers to match search query
    if (window.filterMapMarkers) {
      const allMatchedIds = [
        ...results.tourism.map(i => i.id),
        ...results.restaurants.map(i => i.id),
        ...results.cafes.map(i => i.id),
        ...results.modern.map(i => i.id),
        ...results.stays.map(i => i.id)
      ];
      window.filterMapMarkers(allMatchedIds);
    }

    if (totalMatches === 0) {
      searchDrawer.innerHTML = `
        <div class="search-empty-state">
          <p style="margin-bottom:0.5rem; opacity:0.6;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </p>
          <h4>No results found matching "${searchInput.value}"</h4>
          <p style="font-size:0.88rem; color:var(--muted); margin-top:0.3rem;">Try searching for "Jigarthanda", "Kalaignar", "Chocolate Room", "Alanganallur", "Melur", "Waffle", or "Mall".</p>
        </div>`;
      return;
    }

    function renderItem(item, linkUrl, linkText = "View details") {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;
      return `
        <div class="search-result-item">
          <img src="${item.image}" alt="${item.imageAlt || item.name}" class="search-result-thumb" loading="lazy" onerror="handleImageFallback(this, '${item.name.replace(/'/g, "\\'")}')" />
          <div class="search-result-info">
            <div class="search-result-name">${item.name}</div>
            <div class="search-result-meta">
              <span>${item.area} (${item.taluk})</span>
              <span>·</span>
              <span>★ ${item.rating || '4.8'}</span>
            </div>
            <div class="search-result-desc">${item.tagline || item.description || ''}</div>
          </div>
          <div class="search-result-actions">
            <a href="${linkUrl}" class="btn btn-orange" style="padding:0.3rem 0.75rem; font-size:0.78rem;">${linkText} &rarr;</a>
            <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions" style="font-size:0.75rem; padding:0.3rem 0.65rem;">Directions</a>
          </div>
        </div>`;
    }

    let html = `<div style="font-size:0.82rem; color:var(--muted); margin-bottom:0.75rem;">Showing ${totalMatches} matching result${totalMatches > 1 ? 's' : ''}:</div>`;

    if (results.tourism.length > 0) {
      html += `<div class="search-group-title"><span>Tourism Places</span> <span class="badge" style="position:static;">${results.tourism.length}</span></div>`;
      html += results.tourism.map(item => renderItem(item, `place-details.html?id=${item.id}`)).join("");
    }

    if (results.foods.length > 0) {
      html += `<div class="search-group-title"><span>Local Foods & Dishes</span> <span class="badge" style="position:static;">${results.foods.length}</span></div>`;
      html += results.foods.map(item => renderItem(item, `food-details.html?id=${item.id}`)).join("");
    }

    if (results.restaurants.length > 0) {
      html += `<div class="search-group-title"><span>Restaurants & Messes</span> <span class="badge" style="position:static;">${results.restaurants.length}</span></div>`;
      html += results.restaurants.map(item => renderItem(item, `restaurants.html`)).join("");
    }

    if (results.cafes.length > 0) {
      html += `<div class="search-group-title"><span>Cafes & Desserts</span> <span class="badge" style="position:static;">${results.cafes.length}</span></div>`;
      html += results.cafes.map(item => renderItem(item, `cafes.html`)).join("");
    }

    if (results.modern.length > 0) {
      html += `<div class="search-group-title"><span>Modern Madurai & Malls</span> <span class="badge" style="position:static;">${results.modern.length}</span></div>`;
      html += results.modern.map(item => renderItem(item, `modern.html`)).join("");
    }

    if (results.stays.length > 0) {
      html += `<div class="search-group-title"><span>Stays & Resorts</span> <span class="badge" style="position:static;">${results.stays.length}</span></div>`;
      html += results.stays.map(item => renderItem(item, `stays.html`)).join("");
    }

    searchDrawer.innerHTML = html;
  }

  searchInput.addEventListener("input", performLiveSearch);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      performLiveSearch();
      searchInput.focus();
    });
  }

  // Close drawer on clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-engine-wrap")) {
      searchDrawer.classList.remove("open");
    }
  });

  // Re-open on focus if input has value
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length > 0) {
      searchDrawer.classList.add("open");
    }
  });
}

// =========================================================================
// 2. KEN BURNS HERO IMAGE SLIDER
// =========================================================================
function initKenBurnsSlider() {
  const wrap = document.querySelector("#heroSliderWrap");
  if (!wrap) return;

  const slides = wrap.querySelectorAll(".slider-slide");
  const dotsContainer = wrap.querySelector("#sliderDots");
  const prevBtn = wrap.querySelector("#sliderPrev");
  const nextBtn = wrap.querySelector("#sliderNext");

  if (slides.length === 0) return;

  let current = 0;
  let timer = null;

  // Build dots with landmark title tooltips
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((slide, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      const title = slide.dataset.title || `Slide ${i + 1}`;
      dot.setAttribute("aria-label", title);
      dot.setAttribute("title", title);
      dot.addEventListener("click", () => {
        goToSlide(i);
        startAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides[current].classList.remove("active");
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      if (dots[current]) dots[current].classList.remove("active");
    }

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      if (dots[current]) dots[current].classList.add("active");
    }
  }

  function nextSlide() { goToSlide(current + 1); }
  function prevSlide() { goToSlide(current - 1); }

  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoplay(); });

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 5500);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  wrap.addEventListener("mouseenter", stopAutoplay);
  wrap.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

// =========================================================================
// 3. INTERACTIVE LEAFLET DISTRICT MAP & UNIVERSAL "VIEW ON MAP" ENGINE
// =========================================================================

// Global references for active page map and modal map
window._activeDistrictMap = null;
window._activeDistrictContainer = null;
window._activeDistrictMarkers = {};
window._modalLeafletMap = null;
window._modalMarkerGroup = null;

// Reusable custom marker pin generator
function createMapPinIcon(color) {
  if (!window.L) return null;
  return L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="background:${color}; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.35); border:2.5px solid #fff; cursor:pointer;">
        <div style="width:8px; height:8px; background:#fff; border-radius:50%;"></div>
      </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  });
}

// Find item across all data pools (PLACES, RESTAURANTS, CAFES, MODERN_SPOTS, STAYS, FOODS)
function findPlaceOrFoodItem(id) {
  if (!id) return null;
  const pools = [
    typeof PLACES !== "undefined" ? PLACES : [],
    typeof RESTAURANTS !== "undefined" ? RESTAURANTS : [],
    typeof CAFES !== "undefined" ? CAFES : [],
    typeof MODERN_SPOTS !== "undefined" ? MODERN_SPOTS : [],
    typeof STAYS !== "undefined" ? STAYS : [],
    typeof FOODS !== "undefined" ? FOODS : [],
    typeof CSR_MAP_LOCATIONS !== "undefined" ? CSR_MAP_LOCATIONS : []
  ];
  for (const pool of pools) {
    if (Array.isArray(pool)) {
      const match = pool.find(item => item && item.id === id);
      if (match) return match;
    }
  }
  return null;
}

// Get theme color based on category
function getCategoryPinColor(category) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("restaurant") || cat.includes("food") || cat.includes("drink") || cat.includes("mess")) return "#D4AF37"; // Gold
  if (cat.includes("cafe") || cat.includes("coffee") || cat.includes("bakery")) return "#8D6E63"; // Brown
  if (cat.includes("modern") || cat.includes("mall") || cat.includes("park") || cat.includes("library")) return "#0288D1"; // Blue
  if (cat.includes("stay") || cat.includes("hotel") || cat.includes("resort") || cat.includes("nature")) return "#2E7D32"; // Green
  return "#7A2E1D"; // Maroon (Tourism/Temples/Heritage)
}

// Lazy-inject and wire the universal map modal
function ensurePlaceMapModal() {
  let modal = document.getElementById("placeMapModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "placeMapModal";
    modal.className = "map-modal-backdrop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="map-modal-card">
        <div class="map-modal-header">
          <div class="map-modal-title-group">
            <span class="map-modal-badge" id="modalPlaceCategory">Place</span>
            <h3 id="modalPlaceTitle">Location</h3>
            <p id="modalPlaceSubtitle">Madurai District</p>
          </div>
          <button type="button" class="map-modal-close" id="modalCloseBtn" aria-label="Close Map">&times;</button>
        </div>
        <div class="map-modal-body">
          <div id="modalMapCanvas" class="modal-map-canvas"></div>
        </div>
        <div class="map-modal-footer">
          <div class="modal-footer-left">
            <a id="modalDirectionsBtn" href="#" target="_blank" rel="noopener" class="btn-directions">Get Directions</a>
            <a id="modalMasterMapBtn" href="index.html" class="btn-master-map">Open in Full District Map &rarr;</a>
          </div>
          <button type="button" class="btn-modal-dismiss" id="modalDismissBtn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    modal.querySelector("#modalCloseBtn").addEventListener("click", closeModal);
    modal.querySelector("#modalDismissBtn").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
  return modal;
}

// Open in-page Leaflet Map Modal for any section
function openPlaceMapModal(id, lat, lng) {
  const item = findPlaceOrFoodItem(id);
  const finalLat = parseFloat(lat) || (item && parseFloat(item.latitude)) || (item && parseFloat(item.lat)) || 9.9252;
  const finalLng = parseFloat(lng) || (item && parseFloat(item.longitude)) || (item && parseFloat(item.lng)) || 78.1198;

  const name = (item && item.name) || "Madurai Destination";
  const area = (item && (item.area || item.address)) || "Madurai District";
  const categoryLabel = (item && (item.categoryLabel || item.category || "LOCATION")).toUpperCase();
  const image = (item && item.image) || "images/meenakshi-temple.jpg";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${finalLat},${finalLng}`;
  const masterMapUrl = `index.html?place=${encodeURIComponent(id || '')}`;

  const modal = ensurePlaceMapModal();
  document.getElementById("modalPlaceCategory").textContent = categoryLabel;
  document.getElementById("modalPlaceTitle").textContent = name;
  document.getElementById("modalPlaceSubtitle").textContent = area;
  document.getElementById("modalDirectionsBtn").href = directionsUrl;
  document.getElementById("modalMasterMapBtn").href = masterMapUrl;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (window.L) {
    if (!window._modalLeafletMap) {
      window._modalLeafletMap = L.map("modalMapCanvas", {
        scrollWheelZoom: true
      }).setView([finalLat, finalLng], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
      }).addTo(window._modalLeafletMap);

      window._modalMarkerGroup = L.layerGroup().addTo(window._modalLeafletMap);
    } else {
      window._modalLeafletMap.setView([finalLat, finalLng], 15);
      window._modalMarkerGroup.clearLayers();
    }

    const pinColor = getCategoryPinColor(item && item.category);
    const pinIcon = createMapPinIcon(pinColor);

    const safeName = name.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const safeArea = area.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const popupHtml = `
      <div class="popup-card">
        <img src="${image}" alt="${safeName}" loading="lazy" onerror="handleImageFallback(this, '${safeName}')" />
        <h4>${safeName}</h4>
        <p>${safeArea}</p>
        <div class="popup-card-links">
          <a href="${directionsUrl}" target="_blank" rel="noopener" style="background:var(--gold); color:var(--brown);">Directions</a>
        </div>
      </div>
    `;

    const marker = L.marker([finalLat, finalLng], { icon: pinIcon }).bindPopup(popupHtml);
    window._modalMarkerGroup.addLayer(marker);

    setTimeout(() => {
      if (window._modalLeafletMap) {
        window._modalLeafletMap.invalidateSize();
        marker.openPopup();
      }
    }, 180);
  } else {
    const canvas = document.getElementById("modalMapCanvas");
    if (canvas) {
      canvas.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:2rem; text-align:center; background:#faf7f2;">
          <h4 style="color:var(--maroon); margin-bottom:0.4rem; font-size:1.15rem;">${name}</h4>
          <p style="color:var(--muted); font-size:0.9rem; margin-bottom:1.2rem;">${area} (${finalLat}, ${finalLng})</p>
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions" style="padding:0.6rem 1.3rem; font-size:0.9rem;">Open in Google Maps</a>
        </div>
      `;
    }
  }
}

// Universal Global zoomToMapMarker function for all cards across every page
window.zoomToMapMarker = function(id, lat, lng) {
  const item = findPlaceOrFoodItem(id);
  const finalLat = parseFloat(lat) || (item && parseFloat(item.latitude)) || (item && parseFloat(item.lat));
  const finalLng = parseFloat(lng) || (item && parseFloat(item.longitude)) || (item && parseFloat(item.lng));

  // Case 1: An inline district map is active on the current page (e.g. index.html or about.html)
  if (window._activeDistrictMap && window._activeDistrictContainer && document.body.contains(window._activeDistrictContainer)) {
    window._activeDistrictContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const m = window._activeDistrictMarkers && window._activeDistrictMarkers[id];
    const targetCoord = (finalLat && finalLng) ? [finalLat, finalLng] : (m ? m.getLatLng() : null);
    if (targetCoord) {
      window._activeDistrictMap.setView(targetCoord, 15, { animate: true });
    }
    if (m) {
      setTimeout(() => { m.openPopup(); }, 350);
    }
    return;
  }

  // Case 2: In-page interactive modal lightbox
  openPlaceMapModal(id, finalLat, finalLng);
};

// =========================================================================
// UNIVERSAL DIRECT BOOKING & ORDERING SYSTEM
// =========================================================================

function getBookingOptionsFor(item, itemType) {
  if (!item) return [];
  const name = item.name || "Madurai Spot";
  const area = item.area || item.address || "Madurai";
  const encName = encodeURIComponent(name);
  const type = (itemType || item.category || "").toLowerCase();

  // 1. STAYS (Hotels, Resorts, Lodges)
  if (type === "stay" || type === "stays" || item.tier) {
    return [
      {
        platform: "MakeMyTrip",
        badge: "India's #1 Hotel Site",
        tagClass: "badge-mmt",
        title: "Book on MakeMyTrip",
        desc: "Instant room confirmation with zero booking fee, flexible dates, and special discounts.",
        actionUrl: `https://www.makemytrip.com/hotels/madurai-hotels.html?hotelName=${encName}`,
        actionText: "Book on MakeMyTrip ↗",
        btnClass: "btn-booking-mmt"
      },
      {
        platform: "Booking.com",
        badge: "Best Price Guarantee",
        tagClass: "badge-booking",
        title: "Book on Booking.com",
        desc: "Compare live room rates, verified traveler reviews, and free cancellation options.",
        actionUrl: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(name + ' Madurai')}`,
        actionText: "Book on Booking.com ↗",
        btnClass: "btn-booking-blue"
      },
      {
        platform: "Agoda",
        badge: "Special Mobile Rates",
        tagClass: "badge-agoda",
        title: "Book on Agoda",
        desc: "Exclusive partner deals, insider savings, and instant mobile voucher check-in.",
        actionUrl: `https://www.agoda.com/search?text=${encodeURIComponent(name + ' Madurai')}`,
        actionText: "Book on Agoda ↗",
        btnClass: "btn-booking-agoda"
      },
      {
        platform: "Direct Reception",
        badge: "Front Desk & Inquiries",
        tagClass: "badge-direct",
        title: "Call Hotel Direct",
        desc: `Connect with front desk at ${area}, Madurai for special banquet and room requests.`,
        actionUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + area + ' Madurai')}`,
        actionText: "View Direct Contact ↗",
        btnClass: "btn-booking-green"
      }
    ];
  }

  // 2. FOOD / RESTAURANTS / MESSES / CAFES
  if (type === "restaurant" || type === "restaurants" || type === "cafe" || type === "cafes" || type === "food" || type === "foods") {
    return [
      {
        platform: "Swiggy",
        badge: "Fast Doorstep Delivery",
        tagClass: "badge-swiggy",
        title: "Order Online on Swiggy",
        desc: "Get fresh piping-hot dishes delivered straight to your hotel or residence across Madurai.",
        actionUrl: `https://www.swiggy.com/city/madurai/search?query=${encName}`,
        actionText: "Order on Swiggy ↗",
        btnClass: "btn-booking-orange"
      },
      {
        platform: "Zomato",
        badge: "Menu & Table Booking",
        tagClass: "badge-zomato",
        title: "Order or Reserve on Zomato",
        desc: "Explore verified customer food reviews, photo menus, table reservations, and discounts.",
        actionUrl: `https://www.zomato.com/madurai/restaurants?q=${encName}`,
        actionText: "View on Zomato ↗",
        btnClass: "btn-booking-red"
      },
      {
        platform: "Direct Dine-In & Takeaway",
        badge: "Authentic Kitchen Fresh",
        tagClass: "badge-direct",
        title: "Dine-in at Eatery",
        desc: `Visit directly at ${area}, Madurai for the authentic local banana-leaf dining experience.`,
        actionUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + area + ' Madurai')}`,
        actionText: "Directions & Dine-in Info ↗",
        btnClass: "btn-booking-maroon"
      }
    ];
  }

  // 3. MODERN ATTRACTIONS / THEME PARKS / MALLS / LIBRARIES
  if (type === "modern" || (item.category && item.category === "parks") || name.toLowerCase().includes("athisayam")) {
    const isAthisayam = name.toLowerCase().includes("athisayam");
    const isLibrary = item.id === "kalaignar-library" || /library|books|centenary/i.test(name);
    const isPark = item.id === "eco-park" || item.id === "rajaji-park" || /eco park|rajaji|waterfall/i.test(name);
    const isMall = item.id === "vishaal-de-mall" || item.id === "milan-mall" || /mall|shopping/i.test(name);

    if (isLibrary) {
      return [
        {
          platform: "Kalaignar Centenary Library Portal",
          badge: "Official Govt Portal",
          tagClass: "badge-govt",
          title: "Library Digital Archives & Catalog",
          desc: "Official Government of Tamil Nadu portal for book catalog, membership registration, and 3.5 lakh reading collections across 6 floors.",
          actionUrl: "https://kalaignarcentenarylibrary.tn.gov.in/",
          actionText: "Visit Library Portal ↗",
          btnClass: "btn-booking-blue"
        },
        {
          platform: "Free Public Admission",
          badge: "100% Free Entry",
          tagClass: "badge-direct",
          title: "Public Walk-in Guidelines",
          desc: "Entry is completely free. Open 8:00 AM – 8:00 PM daily. Air-conditioned study halls, children's interactive theatre, science park, and Braille section are open to all without booking.",
          actionUrl: `https://maps.google.com/?q=${item.latitude || 9.9472},${item.longitude || 78.1368}`,
          actionText: "View Timings & Location ↗",
          btnClass: "btn-booking-green"
        },
        {
          platform: "Direct Cab & Transit",
          badge: "Door-to-door Transport",
          tagClass: "badge-transit",
          title: "Book Cab to New Natham Road",
          desc: `Direct vehicle transport to ${area}, Madurai with upfront pricing and zero parking hassle.`,
          actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9472}&dropoff[longitude]=${item.longitude || 78.1368}&dropoff[nickname]=${encName}`,
          actionText: "Book Cab to Library ↗",
          btnClass: "btn-booking-orange"
        }
      ];
    }

    if (isPark) {
      const isEco = item.id === "eco-park" || /eco/i.test(name);
      return [
        {
          platform: "Gate Ticket Counter",
          badge: "On-Spot Ticketing",
          tagClass: "badge-direct",
          title: isEco ? "Entry: ₹10 (Adults) · ₹5 (Children)" : "Entry: ₹15 per person",
          desc: isEco
            ? "Counter tickets issued at the gate. Evening musical dancing fountain shows held every evening at 6:30 PM & 7:45 PM."
            : "Tickets available at the entrance counter. Toy train rides and carousel rides available inside for ₹10–₹20.",
          actionUrl: `https://maps.google.com/?q=${item.latitude || 9.9345},${item.longitude || 78.1382}`,
          actionText: "View Park Hours & Location ↗",
          btnClass: "btn-booking-maroon"
        },
        {
          platform: "Direct Cab & Transit",
          badge: "Door-to-door Transport",
          tagClass: "badge-transit",
          title: `Book Cab to ${name}`,
          desc: `Hail an auto or cab directly to ${area} with upfront pricing and zero parking hassle.`,
          actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9345}&dropoff[longitude]=${item.longitude || 78.1382}&dropoff[nickname]=${encName}`,
          actionText: "Book Cab to Spot ↗",
          btnClass: "btn-booking-green"
        },
        {
          platform: "Madurai City Corporation",
          badge: "Civic Amenities",
          tagClass: "badge-govt",
          title: "Public Recreation Guidelines",
          desc: "Maintained by the Madurai City Municipal Corporation with landscaped pathways and children's play area.",
          actionUrl: `https://www.google.com/maps/search/?api=1&query=${encName}+Madurai`,
          actionText: "View Reviews & Photos ↗",
          btnClass: "btn-booking-blue"
        }
      ];
    }

    if (isMall) {
      const isVishaal = item.id === "vishaal-de-mall" || /vishaal/i.test(name);
      return [
        isVishaal ? {
          platform: "BookMyShow (INOX Cinemas)",
          badge: "Multiplex Movies",
          tagClass: "badge-bms",
          title: "Book INOX Movie Tickets",
          desc: "5-screen multiplex showing latest Tamil, English, Telugu and Hindi movies with Dolby Atmos sound.",
          actionUrl: "https://in.bookmyshow.com/explore/cinemas-madurai/inox-vishaal-de-mall-chokkikulam/INMA",
          actionText: "Book Movie Tickets on BMS ↗",
          btnClass: "btn-booking-red"
        } : {
          platform: "Free Mall Entry",
          badge: "100% Free Entry",
          tagClass: "badge-direct",
          title: "Free Walk-in Shopping & Dining",
          desc: "No admission charge for general entry, department stores, retail shops, and dessert parlours.",
          actionUrl: `https://maps.google.com/?q=${item.latitude || 9.9288},${item.longitude || 78.1482}`,
          actionText: "View Mall Location & Stores ↗",
          btnClass: "btn-booking-blue"
        },
        {
          platform: "Direct Cab & Transit",
          badge: "Door-to-door Transport",
          tagClass: "badge-transit",
          title: `Book Cab to ${name}`,
          desc: `Direct pickup and drop right at the main entrance in ${area}.`,
          actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9392}&dropoff[longitude]=${item.longitude || 78.1365}&dropoff[nickname]=${encName}`,
          actionText: "Book Cab to Mall ↗",
          btnClass: "btn-booking-green"
        },
        {
          platform: "Food Court & Dining",
          badge: "Multi-Cuisine",
          tagClass: "badge-swiggy",
          title: "Food Court & Kiosks",
          desc: "Explore dining options, global fast-food chains, South Indian tiffin, and dessert counters.",
          actionUrl: `https://www.google.com/maps/search/?api=1&query=${encName}+Madurai`,
          actionText: "View Dining Options ↗",
          btnClass: "btn-booking-orange"
        }
      ];
    }

    if (isAthisayam) {
      return [
        {
          platform: "Athisayam Official Website",
          badge: "Official Website Portal",
          tagClass: "badge-govt",
          title: "Book Water Park Tickets",
          desc: "Official website for Athisayam Theme Park: explore water rides, wave pools, entry passes (₹700–₹900), and seasonal packages.",
          actionUrl: "https://athisayampark.com/",
          actionText: "Open Official Website ↗",
          btnClass: "btn-booking-blue"
        },
        {
          platform: "Ticket Office & Booking Helpline",
          badge: "Phone Booking & Rates",
          tagClass: "badge-direct",
          title: "Call Ticket Helpline (+91 97869 66881)",
          desc: "Official ticket helpline: +91 97869 66881 / 0452-2463848. Tap to call directly to confirm current ticket pricing (₹700–₹900), water slide timings, and group/family packages.",
          actionUrl: "tel:+919786966881",
          actionText: "Call Ticket Office 📞",
          btnClass: "btn-booking-maroon"
        },
        {
          platform: "Entrance Gate Counter",
          badge: "On-Spot Gate Ticketing",
          tagClass: "badge-govt",
          title: "Buy Tickets at Entrance Counter",
          desc: "Tickets are issued directly at the Paravai entrance counter on Madurai-Dindigul Road. Open daily 10:30 AM – 6:00 PM for giant wave pools and water slides.",
          actionUrl: `https://www.google.com/maps/dir/?api=1&destination=${item.latitude || 9.9925},${item.longitude || 78.0742}`,
          actionText: "Directions to Entrance ↗",
          btnClass: "btn-booking-gold"
        },
        {
          platform: "Direct Highway Cab",
          badge: "Door-to-door Transport",
          tagClass: "badge-transit",
          title: "Book Highway Cab to Paravai (12 km)",
          desc: "Comfortable AC transit along Madurai-Dindigul Road directly to the water park gate.",
          actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9925}&dropoff[longitude]=${item.longitude || 78.0742}&dropoff[nickname]=${encName}`,
          actionText: "Book Highway Cab ↗",
          btnClass: "btn-booking-green"
        }
      ];
    }
  }

  // 4. TOURISM / TEMPLES / HISTORICAL MONUMENTS / MUSEUMS
  const isTemple = (item.category === "temples") || /temple|kovil|murugan|alagar|azhagar|sundareswarar|meenakshi/i.test(name);
  const isMuseumOrPalace = /palace|museum|keeladi|excavation|nayakkar|nayak/i.test(name);

  if (isTemple) {
    return [
      {
        platform: "TN HR&CE Official E-Seva",
        badge: "Official Govt Portal",
        tagClass: "badge-govt",
        title: "Online Darshan & Archanai Booking",
        desc: "Official Tamil Nadu HR&CE portal for Special Entry Darshan (₹100/₹50), Archanai, and temple accommodation.",
        actionUrl: "https://hrce.tn.gov.in/hrcehome/index.php",
        actionText: "Book Darshan & Seva ↗",
        btnClass: "btn-booking-maroon"
      },
      {
        platform: "TTDC Temple Tour",
        badge: "Govt Guided Tours",
        tagClass: "badge-ttdc",
        title: "TTDC Guided Temple Circuit",
        desc: "Official Tamil Nadu Tourism AC bus tours covering Meenakshi Temple, Thirupparankundram, and Azhagar Kovil.",
        actionUrl: "https://www.ttdconline.com/",
        actionText: "Book TTDC Pilgrimage Tour ↗",
        btnClass: "btn-booking-gold"
      },
      {
        platform: "Cab & Transit Booking",
        badge: "Direct Pickup & Drop",
        tagClass: "badge-transit",
        title: "Book Cab to Temple Entrance",
        desc: "Get dropped directly at temple gopuram entrances without worrying about vehicle parking in old city lanes.",
        actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9195}&dropoff[longitude]=${item.longitude || 78.1193}&dropoff[nickname]=${encName}`,
        actionText: "Book Cab to Temple ↗",
        btnClass: "btn-booking-green"
      }
    ];
  }

  if (isMuseumOrPalace) {
    return [
      {
        platform: "TN Archaeology Department",
        badge: "Official Entry Booking",
        tagClass: "badge-govt",
        title: "Museum & Monument E-Pass",
        desc: "Official Department of Archaeology portal for museum exhibits, sound & light show, and heritage site passes.",
        actionUrl: "https://www.tnarch.gov.in/",
        actionText: "Book Museum / Palace Entry ↗",
        btnClass: "btn-booking-maroon"
      },
      {
        platform: "ASI Monument Ticketing",
        badge: "National Heritage",
        tagClass: "badge-asi",
        title: "ASI Govt E-Tickets",
        desc: "Archaeological Survey of India cashless e-ticket booking for ancient excavated sites and protected monuments.",
        actionUrl: "https://asi.payumoney.com/",
        actionText: "Book ASI E-Ticket ↗",
        btnClass: "btn-booking-blue"
      },
      {
        platform: "TTDC Heritage Circuit",
        badge: "Guided Day Excursion",
        tagClass: "badge-ttdc",
        title: "Book Guided Heritage Tour",
        desc: "State-certified tourist guide packages with transport covering Thirumalai Palace, Keeladi, and Gandhi Museum.",
        actionUrl: "https://www.ttdconline.com/",
        actionText: "Book TTDC Tour ↗",
        btnClass: "btn-booking-gold"
      }
    ];
  }

  // Generic place fallback
  return [
    {
      platform: "TTDC Tourism",
      badge: "Official Tourism Portal",
      tagClass: "badge-ttdc",
      title: "Tamil Nadu Tourism Packages",
      desc: "Curated sightseeing and transport packages operated by Tamil Nadu Tourism Development Corporation.",
      actionUrl: "https://www.ttdconline.com/",
      actionText: "Book Official Tour ↗",
      btnClass: "btn-booking-gold"
    },
    {
      platform: "Direct Cab & Transit",
      badge: "Convenient Transport",
      tagClass: "badge-transit",
      title: "Book Cab to Location",
      desc: `Direct vehicle transport to ${area}, Madurai with verified drivers and upfront rates.`,
      actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9252}&dropoff[longitude]=${item.longitude || 78.1198}&dropoff[nickname]=${encName}`,
      actionText: "Book Cab to Spot ↗",
      btnClass: "btn-booking-green"
    },
    {
      platform: "TripAdvisor / Viator",
      badge: "Verified Experiences",
      tagClass: "badge-tripadvisor",
      title: "Explore Madurai Experiences",
      desc: "Browse traveler ratings, private walking tours, photography trails, and local guide bookings.",
      actionUrl: `https://www.tripadvisor.in/Search?q=${encName}+Madurai`,
      actionText: "View Experiences & Reviews ↗",
      btnClass: "btn-booking-blue"
    }
  ];
}

function ensureBookingModal() {
  let modal = document.getElementById("directBookingModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "directBookingModal";
    modal.className = "booking-modal-backdrop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="booking-modal-card">
        <div class="booking-modal-header">
          <div class="booking-modal-title-group">
            <span class="booking-modal-badge" id="modalBookingCategory">Direct Booking</span>
            <h3 id="modalBookingTitle">Place Name</h3>
            <p id="modalBookingSubtitle">Madurai District</p>
          </div>
          <button type="button" class="map-modal-close" id="modalBookingCloseBtn" aria-label="Close Booking Options">&times;</button>
        </div>
        <div class="booking-modal-body">
          <div class="booking-notice">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gold); flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>Official and verified direct booking partners. All options open directly on partner portals in a new tab.</span>
          </div>
          <div class="booking-options-grid" id="modalBookingOptionsList"></div>
        </div>
        <div class="booking-modal-footer">
          <button type="button" class="btn-modal-dismiss" id="modalBookingDismissBtn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    modal.querySelector("#modalBookingCloseBtn").addEventListener("click", closeModal);
    modal.querySelector("#modalBookingDismissBtn").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
  return modal;
}

window.getBookingOptionsFor = getBookingOptionsFor;

window.openBookingModal = function(id, itemType) {
  const item = findPlaceOrFoodItem(id);
  if (!item) {
    console.warn("Item not found for booking:", id);
    return;
  }
  const modal = ensureBookingModal();
  const name = item.name || "Destination";
  const area = item.area || item.address || "Madurai";
  const cat = (itemType || item.categoryLabel || item.category || "BOOKING").toUpperCase();

  document.getElementById("modalBookingCategory").textContent = cat;
  document.getElementById("modalBookingTitle").textContent = name;
  document.getElementById("modalBookingSubtitle").textContent = `${area} · Direct Booking & Reservation Portals`;

  const options = getBookingOptionsFor(item, itemType);
  const listEl = document.getElementById("modalBookingOptionsList");
  if (listEl) {
    listEl.innerHTML = options.map(opt => `
      <div class="booking-option-card">
        <div class="booking-option-info">
          <div class="booking-option-top">
            <span class="platform-badge ${opt.tagClass}">${opt.badge}</span>
            <h4 class="booking-option-title">${opt.title}</h4>
          </div>
          <p class="booking-option-desc">${opt.desc}</p>
        </div>
        <a href="${opt.actionUrl}" target="_blank" rel="noopener noreferrer" class="btn-booking-action ${opt.btnClass}">
          ${opt.actionText}
        </a>
      </div>
    `).join("");
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

// =========================================================================
// SUPPORT LOCAL & CSR COMMUNITY IMPACT CONTROLLER
// =========================================================================
function getSupportLocalDetails(item, itemType) {
  const type = (itemType || item.category || "").toLowerCase();
  const name = item.name || "Local Establishment";
  const area = item.area || item.address || "Madurai";

  // Specific tailored details for key landmarks and foods
  if (item.id === "jigarthanda" || name.toLowerCase().includes("jigarthanda")) {
    return {
      pillar1: "Direct Dairy & Herbal Supply Chain",
      desc1: "Supports local dairy farmers supplying fresh full-cream milk, rural gum collectors harvesting badam pisin (almond gum), and indigenous herbal extractors of nannari (sarsaparilla) roots.",
      pillar2: "Culinary GI Heritage",
      desc2: "Recognized as Madurai's distinct culinary icon, preserving a 50+ year legacy founded by local micro-entrepreneurs on East Marret Street and Simmakkal.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Drink from reusable glass tumblers at physical counters rather than disposable plastic cups. Pay directly via UPI/Cash to eliminate third-party commission."
    };
  }

  if (item.id === "paruthi-paal" || name.toLowerCase().includes("paruthi")) {
    return {
      pillar1: "Cotton Farmer & Spice Livelihoods",
      desc1: "Raw cottonseeds are sourced directly from Tamil Nadu cotton farmers, sweetened with unrefined country jaggery and dry ginger (sukku) milled by small local traders.",
      pillar2: "Ancient Tamil Wellness Drink",
      desc2: "Centuries-old indigenous recipe passed down through generations of roadside vendors in Simmakkal, offering natural cooling and wellness without industrial preservatives.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Savor it warm in traditional brass tumblers or earthenware cups. Support evening street vendors whose livelihood depends on daily sales."
    };
  }

  if (item.id === "kari-dosai" || item.id === "bun-parotta" || name.toLowerCase().includes("parotta") || name.toLowerCase().includes("dosai") || name.toLowerCase().includes("mess")) {
    return {
      pillar1: "Family-Owned Heritage Kitchens",
      desc1: "Madurai's messes are generational micro-enterprises employing master parotta/dosai masters, shallot peelers, and local staff across South and North taluks.",
      pillar2: "Indigenous Food Culture",
      desc2: "Cast-iron griddle cooking, fresh stone-ground spice masalas, and country gingelly oil sustain the uncommercialized gastronomic fabric of Madurai.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Dine on traditional fresh banana leaves; banana leaves are 100% biodegradable and enrich local farmers while reducing single-use plastic waste."
    };
  }

  if (type.includes("food") || type.includes("restaurant") || type.includes("cafe")) {
    return {
      pillar1: "Direct Local Economic Retention",
      desc1: "Over 88% of your spend stays within the local Madurai economy, sustaining cooks, helpers, and market vendors in Masi and Marret streets.",
      pillar2: "Living Culinary Traditions",
      desc2: "Authentic regional flavors prepared using locally sourced country spices, cold-pressed oils, and fresh grains rather than processed global foods.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Order directly at the establishment or call their direct counter to save 25–30% intermediary commission for the local business family."
    };
  }

  if (item.id === "meenakshi-temple" || item.id === "thirupparankundram-temple" || item.id === "alagar-kovil" || type.includes("tourism") || type.includes("temple") || type.includes("heritage")) {
    return {
      pillar1: "Temple Artisan & Vendor Ecosystem",
      desc1: "Sustains hundreds of garland knotters stringing GI Madurai Malli (jasmine), brass lamp makers in Puthu Mandapam, and local heritage guides.",
      pillar2: "2,500+ Years Living Heritage",
      desc2: "Protects ancient Pandya, Nayak, and Sangam stone architecture, intricate granite gopurams, and traditional ritual ecosystems.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Adhere to the traditional dress code, deposit shoes at official stands, avoid disposable plastic around temple perimeters, and purchase authentic flower garlands."
    };
  }

  if (type.includes("artisan") || type.includes("craft") || type.includes("pottery") || type.includes("textile") || item.id.includes("artisan") || item.id.includes("pottery") || item.id.includes("sungudi")) {
    return {
      pillar1: "100% Direct Fair Value to Artisans",
      desc1: "Your support directly reaches master clay sculptors, Sungudi weavers, and metal casters without intermediary commercial markups.",
      pillar2: "Living Cultural Heritage",
      desc2: "Preserves centuries of generational knowledge in GI-tagged Sungudi textile knotting, Vilachery terracotta clay molding, and temple brass casting.",
      pillar3: "Responsible Traveler Tip",
      desc3: "Visit village workshops directly, respect the time invested in slow craftsmanship, and choose authentic handcrafted pieces over machine replicas."
    };
  }

  if (type.includes("eco") || item.id.includes("eco") || item.id.includes("river") || item.id.includes("walk")) {
    return {
      pillar1: "Vaigai Basin & Urban Ecology Protection",
      desc1: "Helps maintain green buffer zones, public riverside pedestrian paths, and clean micro-habitats in Madurai.",
      pillar2: "Low-Carbon Sustainable Mobility",
      desc2: "Reduces vehicular emissions, promotes slow walkable exploration, and protects ancient sacred water tanks (theppakulam).",
      pillar3: "Responsible Traveler Tip",
      desc3: "Carry a reusable water bottle, leave no plastic waste behind, and respect native flora along water bodies."
    };
  }

  return {
    pillar1: "Local Employment & Community Value",
    desc1: `Visiting ${name} directly sustains indigenous jobs and community livelihoods across ${area}, keeping economic resources in Madurai.`,
    pillar2: "Cultural Preservation",
    desc2: "Contributes to protecting Madurai's unique cultural landscape, architectural identity, and regional pride.",
    pillar3: "Conscious Visitor Tip",
    desc3: "Travel respectfully, utilize walking trails or shared green transit, and support indigenous artisans and vendors located nearby."
  };
}

function ensureSupportLocalModal() {
  let modal = document.getElementById("supportLocalModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "supportLocalModal";
    modal.className = "support-local-backdrop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="support-local-card">
        <div class="support-local-header">
          <div class="support-local-title-group">
            <span class="support-local-badge"><span class="badge-leaf">🌱</span> CSR & LOCAL COMMUNITY</span>
            <h3 id="modalSupportTitle">Support Local</h3>
            <p id="modalSupportSubtitle">Discover and support local restaurants, artisans and small businesses in Madurai.</p>
          </div>
          <button type="button" class="support-modal-close" id="modalSupportCloseBtn" aria-label="Close">&times;</button>
        </div>
        <div class="support-local-body">
          <div class="support-banner">
            <div class="support-banner-icon">🤝</div>
            <div class="support-banner-text">
              <strong>Direct Community Impact & CSR</strong>
              <p>When you discover and support local establishments, over 90% of your spend directly sustains Madurai families, generational artisans, and regional farmers.</p>
            </div>
          </div>
          <div class="support-impact-pillars" id="modalSupportPillars"></div>
          <div class="support-actions-row">
            <a href="csr.html" class="btn-support-portal">Explore CSR & Community Guide &rarr;</a>
            <a href="#" id="modalSupportDirectionsBtn" target="_blank" rel="noopener" class="btn-support-nav">Get Directions &rarr;</a>
          </div>
        </div>
        <div class="support-local-footer">
          <button type="button" class="btn-modal-dismiss" id="modalSupportDismissBtn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    modal.querySelector("#modalSupportCloseBtn").addEventListener("click", closeModal);
    modal.querySelector("#modalSupportDismissBtn").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
  return modal;
}

window.openSupportLocalModal = function(id, itemType) {
  const item = findPlaceOrFoodItem(id);
  if (!item) {
    console.warn("Item not found for support local:", id);
    return;
  }
  const modal = ensureSupportLocalModal();
  const name = item.name || "Local Destination";
  const area = item.area || item.address || "Madurai";

  document.getElementById("modalSupportTitle").textContent = name;
  document.getElementById("modalSupportSubtitle").textContent = `${area} · Direct Local Community & Heritage Support`;

  const details = getSupportLocalDetails(item, itemType);
  const pillarsEl = document.getElementById("modalSupportPillars");
  if (pillarsEl) {
    pillarsEl.innerHTML = `
      <div class="support-impact-pillar">
        <div class="support-pillar-icon">👨‍👩‍👧‍👦</div>
        <div class="support-pillar-content">
          <h4>${details.pillar1}</h4>
          <p>${details.desc1}</p>
        </div>
      </div>
      <div class="support-impact-pillar">
        <div class="support-pillar-icon">🏛️</div>
        <div class="support-pillar-content">
          <h4>${details.pillar2}</h4>
          <p>${details.desc2}</p>
        </div>
      </div>
      <div class="support-impact-pillar">
        <div class="support-pillar-icon">💡</div>
        <div class="support-pillar-content">
          <h4>${details.pillar3}</h4>
          <p>${details.desc3}</p>
        </div>
      </div>
    `;
  }

  const dirBtn = document.getElementById("modalSupportDirectionsBtn");
  if (dirBtn) {
    dirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

// =========================================================================
// =========================================================================
// CSR LOCATIONS DATASET FOR COMMUNITY MAP & CSR MODULE
// =========================================================================
const CSR_MAP_LOCATIONS = [
  // 🟢 Local Businesses
  {
    id: "famous-jigarthanda",
    name: "Famous Jigarthanda",
    category: "business",
    badgeLabel: "Local Business",
    badgeIcon: "🟢",
    color: "#1B5E20",
    location: "East Marret Street",
    lat: 9.9180,
    lng: 78.1235,
    description: "Madurai's iconic cooling herbal milk drink supporting tribal badam pisin harvesters and native dairy farmers.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9180,78.1235"
  },
  {
    id: "murugan-idli-shop",
    name: "Murugan Idli Shop",
    category: "business",
    badgeLabel: "Local Business",
    badgeIcon: "🟢",
    color: "#1B5E20",
    location: "West Masi Street",
    lat: 9.9155,
    lng: 78.1139,
    description: "World-famed cloud-soft idlis served on fresh banana leaves with four signature stone-ground chutneys.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9155,78.1139"
  },
  {
    id: "amma-mess",
    name: "Amma Mess",
    category: "business",
    badgeLabel: "Local Business",
    badgeIcon: "🟢",
    color: "#1B5E20",
    location: "West Perumal Maistry Street",
    lat: 9.9160,
    lng: 78.1180,
    description: "Iconic family mess famous for Kari Dosa and authentic banana leaf meals supporting regional spice growers.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9160,78.1180"
  },
  {
    id: "konar-kadai",
    name: "Konar Kadai",
    category: "business",
    badgeLabel: "Local Business",
    badgeIcon: "🟢",
    color: "#1B5E20",
    location: "North Veli Street, Simmakkal",
    lat: 9.9275,
    lng: 78.1250,
    description: "Eight-decade-old heritage tiffin institution sustaining indigenous agrarian and sheep farming livelihoods.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9275,78.1250"
  },
  {
    id: "nagalakshmi-sweets",
    name: "Nagalakshmi Traditional Sweets",
    category: "business",
    badgeLabel: "Local Business",
    badgeIcon: "🟢",
    color: "#1B5E20",
    location: "South Avani Moola Street",
    lat: 9.9172,
    lng: 78.1192,
    description: "Generational sweet-makers crafting handmade murukku, seedai, and halwa with native country butter.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9172,78.1192"
  },

  // 🟡 Artisans
  {
    id: "vilachery-pottery",
    name: "Vilachery Pottery",
    category: "artisan",
    badgeLabel: "Local Artisan",
    badgeIcon: "🎨",
    color: "#F59E0B",
    location: "Vilachery",
    lat: 9.8824,
    lng: 78.0718,
    description: "Traditional clay crafts & terracotta Golu dolls crafted by 200+ artisan households.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.8824,78.0718"
  },
  {
    id: "vilachery-pottery-village",
    name: "Vilachery Terracotta & Doll Kilns",
    category: "artisan",
    badgeLabel: "Local Artisan",
    badgeIcon: "🎨",
    color: "#F59E0B",
    location: "Vilachery Village",
    lat: 9.8835,
    lng: 78.0730,
    description: "Hand-sculpted Navarathri Golu dolls, clay lamps, and sacred Ayyanar terracotta horses.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.8835,78.0730"
  },
  {
    id: "kaithari-sungudi",
    name: "Kaithari Nagar Sungudi Weavers",
    category: "artisan",
    badgeLabel: "Local Artisan",
    badgeIcon: "🎨",
    color: "#F59E0B",
    location: "South Masi Street",
    lat: 9.9150,
    lng: 78.1150,
    description: "Authentic GI-tagged tie-and-dye handloom cotton sarees crafted using traditional knot-tying.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9150,78.1150"
  },
  {
    id: "puthu-mandapam-crafts",
    name: "Puthu Mandapam Brass Artisans",
    category: "artisan",
    badgeLabel: "Local Artisan",
    badgeIcon: "🎨",
    color: "#F59E0B",
    location: "Opposite Meenakshi East Tower",
    lat: 9.9198,
    lng: 78.1215,
    description: "17th-century Nayakkar-era bronze, bell-metal casting, devotional idols and brass oil lamps.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9198,78.1215"
  },
  {
    id: "mattuthavani-jasmine",
    name: "Mattuthavani Jasmine Knotters",
    category: "artisan",
    badgeLabel: "Local Artisan",
    badgeIcon: "🎨",
    color: "#F59E0B",
    location: "Integrated Flower Market",
    lat: 9.9392,
    lng: 78.1610,
    description: "Generational garland knotters weaving GI-tagged Madurai Malli jasmine into exquisite garlands.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9392,78.1610"
  },

  // 🔵 Heritage Sites
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    category: "heritage",
    badgeLabel: "Heritage Site",
    badgeIcon: "🔵",
    color: "#0288D1",
    location: "Madurai City Center",
    lat: 9.9195,
    lng: 78.1193,
    description: "2,500-year-old living architectural marvel with 14 towering gopurams and thousands of sculpted deities.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9195,78.1193"
  },
  {
    id: "thirumalai-nayak-palace",
    name: "Thirumalai Nayakkar Palace",
    category: "heritage",
    badgeLabel: "Heritage Site",
    badgeIcon: "🔵",
    color: "#0288D1",
    location: "Palace Road, Madurai",
    lat: 9.9150,
    lng: 78.1235,
    description: "1636 AD Indo-Saracenic royal wonder featuring majestic stucco-ornamented pillars and royal courtyards.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9150,78.1235"
  },
  {
    id: "samanar-malai",
    name: "Samanar Malai Jain Caverns",
    category: "heritage",
    badgeLabel: "Heritage Site",
    badgeIcon: "🔵",
    color: "#0288D1",
    location: "Keelakuyilkudi Hills",
    lat: 9.9304,
    lng: 78.0550,
    description: "1st-century BCE Jain ascetic rock-cut beds, Tamil-Brahmi script inscriptions, and peaceful rock hillock.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9304,78.0550"
  },
  {
    id: "theppakulam",
    name: "Vandiyur Mariamman Theppakulam",
    category: "heritage",
    badgeLabel: "Heritage Site",
    badgeIcon: "🔵",
    color: "#0288D1",
    location: "Theppakulam, Madurai",
    lat: 9.9161,
    lng: 78.1528,
    description: "Gigantic 1645 AD sacred square reservoir connected to Vaigai river by underground masonry channels.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9161,78.1528"
  },
  {
    id: "koodal-azhagar",
    name: "Koodal Azhagar Temple",
    category: "heritage",
    badgeLabel: "Heritage Site",
    badgeIcon: "🔵",
    color: "#0288D1",
    location: "Near Madurai Junction",
    lat: 9.9142,
    lng: 78.1132,
    description: "Ancient Divya Desam temple dedicated to Lord Vishnu in three divine postures: standing, sitting, and reclining.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9142,78.1132"
  },

  // 🌿 Eco-Friendly Places
  {
    id: "vaigai-river-walk",
    name: "Vaigai River Ecological Corridor",
    category: "eco",
    badgeLabel: "Eco-Friendly Place",
    badgeIcon: "🌿",
    color: "#10B981",
    location: "Albert Victor Bridge Bank",
    lat: 9.9248,
    lng: 78.1230,
    description: "Protected historic river corridor with native riparian flora, community cleanup points, and bird trails.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9248,78.1230"
  },
  {
    id: "rajaji-park-greens",
    name: "Rajaji Park & Botanical Grove",
    category: "eco",
    badgeLabel: "Eco-Friendly Place",
    badgeIcon: "🌿",
    color: "#10B981",
    location: "Goripalayam, Madurai",
    lat: 9.9298,
    lng: 78.1325,
    description: "Urban biodiversity park with century-old shade trees, solar walkways, and rainwater percolation pits.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9298,78.1325"
  },
  {
    id: "concentric-lotus-walk",
    name: "Concentric Lotus Walking Circuit",
    category: "eco",
    badgeLabel: "Eco-Friendly Place",
    badgeIcon: "🌿",
    color: "#10B981",
    location: "Chithirai & Masi Streets",
    lat: 9.9192,
    lng: 78.1198,
    description: "Zero-emission pedestrian-only heritage walk tracing ancient town planning around Meenakshi Temple.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=9.9192,78.1198"
  },
  {
    id: "kutladampatti-falls",
    name: "Kutladampatti Eco-Forest Falls",
    category: "eco",
    badgeLabel: "Eco-Friendly Place",
    badgeIcon: "🌿",
    color: "#10B981",
    location: "Sirumalai Reserve Foothills",
    lat: 10.1118,
    lng: 78.0125,
    description: "Natural freshwater cascade surrounded by biodiverse dry-deciduous forest with strict plastic-ban rules.",
    directions: "https://www.google.com/maps/dir/?api=1&destination=10.1118,78.0125"
  }
];
window.CSR_MAP_LOCATIONS = CSR_MAP_LOCATIONS;

// =========================================================================
// CSR POINTS & BADGES GAMIFICATION CONTROLLER
// =========================================================================
const CSR_BADGES = [
  { id: "pilgrim", min: 0, max: 40, icon: "🥉", title: "Conscious Pilgrim", next: "🌱 Responsible Explorer", nextTarget: 41 },
  { id: "explorer", min: 41, max: 75, icon: "🌱", title: "Responsible Explorer", next: "🌿 Sustainable Champion", nextTarget: 76 },
  { id: "champion", min: 76, max: 115, icon: "🌿", title: "Sustainable Champion", next: "🏆 Madurai Heritage Guardian", nextTarget: 116 },
  { id: "guardian", min: 116, max: 99999, icon: "🏆", title: "Madurai Heritage Guardian", next: "Master Rank Achieved!", nextTarget: 116 }
];

function getCsrPoints() {
  const val = localStorage.getItem("madurai_csr_points");
  if (val === null) {
    // Initial score per user prompt: 65 (🌱 Responsible Explorer)
    localStorage.setItem("madurai_csr_points", "65");
    return 65;
  }
  return parseInt(val, 10) || 65;
}

function getCsrBadgeInfo(points) {
  for (let i = 0; i < CSR_BADGES.length; i++) {
    const b = CSR_BADGES[i];
    if (points >= b.min && points <= b.max) {
      return b;
    }
  }
  return CSR_BADGES[CSR_BADGES.length - 1];
}

function showCsrToast(msg) {
  let toast = document.getElementById("csrToastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "csrToastNotification";
    toast.className = "csr-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.classList.add("active");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

function updateCsrGamifyUI(prevPoints, currentPoints) {
  const ptsEl = document.getElementById("csrPointsValue");
  const iconEl = document.getElementById("csrBadgeIcon");
  const titleEl = document.getElementById("csrBadgeTitle");
  const nextLabelEl = document.getElementById("csrTierNextLabel");
  const percentEl = document.getElementById("csrTierPercent");
  const barFillEl = document.getElementById("csrTierBarFill");

  if (!ptsEl) return;

  // Number counter animation
  const duration = 600;
  const start = prevPoints;
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(start + (currentPoints - start) * eased);
    ptsEl.textContent = val;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      ptsEl.textContent = currentPoints;
    }
  }
  requestAnimationFrame(step);

  const badge = getCsrBadgeInfo(currentPoints);
  if (iconEl) iconEl.textContent = badge.icon;
  if (titleEl) titleEl.textContent = badge.title;

  // Progress Bar computation
  let pct = 100;
  if (badge.id === "pilgrim") {
    pct = Math.round((currentPoints / 40) * 100);
    if (nextLabelEl) nextLabelEl.textContent = `Progress to 🌱 Responsible Explorer (${41 - currentPoints} pts to go)`;
  } else if (badge.id === "explorer") {
    // Range 41 - 75
    pct = Math.min(100, Math.round(((currentPoints - 40) / (75 - 40)) * 100));
    if (nextLabelEl) nextLabelEl.textContent = `Progress to 🌿 Sustainable Champion (${76 - currentPoints} pts to go)`;
  } else if (badge.id === "champion") {
    // Range 76 - 115
    pct = Math.min(100, Math.round(((currentPoints - 75) / (115 - 75)) * 100));
    if (nextLabelEl) nextLabelEl.textContent = `Progress to 🏆 Madurai Heritage Guardian (${116 - currentPoints} pts to go)`;
  } else {
    pct = 100;
    if (nextLabelEl) nextLabelEl.textContent = "🏆 Master Guardian Rank Achieved!";
  }

  if (percentEl) percentEl.textContent = `${pct}%`;
  if (barFillEl) barFillEl.style.width = `${pct}%`;

  // Update tier mark active styling
  const tMarks = {
    pilgrim: document.getElementById("tmPilgrim"),
    explorer: document.getElementById("tmExplorer"),
    champion: document.getElementById("tmChampion"),
    guardian: document.getElementById("tmGuardian")
  };
  Object.keys(tMarks).forEach(k => {
    if (tMarks[k]) tMarks[k].classList.remove("active");
  });
  if (tMarks[badge.id]) tMarks[badge.id].classList.add("active");
}

window.earnCsrPoints = function(actionKey, points, label) {
  const current = getCsrPoints();
  const next = current + points;
  localStorage.setItem("madurai_csr_points", String(next));

  const prevBadge = getCsrBadgeInfo(current);
  const nextBadge = getCsrBadgeInfo(next);

  updateCsrGamifyUI(current, next);

  if (nextBadge.id !== prevBadge.id) {
    showCsrToast(`🎉 <strong>LEVEL UP!</strong> You unlocked ${nextBadge.icon} <strong>${nextBadge.title}</strong>! (+${points} PTS)`);
  } else {
    showCsrToast(`✨ <strong>+${points} CSR Points!</strong> ${label}`);
  }

  // Record in action log
  const logEl = document.getElementById("csrActionsLog");
  if (logEl) {
    const item = document.createElement("div");
    item.className = "csr-log-item";
    item.innerHTML = `<span>✓ ${label}</span> <span class="log-pts">+${points} PTS</span>`;
    logEl.insertBefore(item, logEl.firstChild);
  }
};

window.scrollToPledgeSection = function() {
  const el = document.getElementById("pledge-section");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// =========================================================================
// CSR COMMUNITY MAP CONTROLLER (Leaflet + OpenStreetMap)
// =========================================================================
function createCsrCategoryPinIcon(category, color) {
  let iconEmoji = "🟢";
  if (category === "artisan") iconEmoji = "🟡";
  else if (category === "heritage") iconEmoji = "🔵";
  else if (category === "eco") iconEmoji = "🌿";

  return L.divIcon({
    className: 'csr-custom-marker-wrapper',
    html: `
      <div class="csr-pin-bubble" style="background:${color};" title="${category}">
        <span class="csr-pin-inner">${iconEmoji}</span>
      </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28]
  });
}

window.handleMapSupportClick = function(id, category) {
  let pts = 10;
  let label = "Local Business Support";
  if (category === "artisan") {
    pts = 20;
    label = "Artisan Supported";
  } else if (category === "eco") {
    pts = 15;
    label = "Eco Travel";
  }

  if (window.earnCsrPoints) {
    window.earnCsrPoints(`map_${id}`, pts, label);
  }

  if (window.openSupportLocalModal) {
    window.openSupportLocalModal(id, category);
  }
};

function initCsrCommunityMap() {
  const container = document.getElementById("csrCommunityMap");
  if (!container || !window.L) return;

  // Madurai central coordinates
  const mapCenter = [9.922, 78.119];
  const map = L.map("csrCommunityMap", {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView(mapCenter, 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  }).addTo(map);

  const markerLayerGroup = L.layerGroup().addTo(map);
  const markers = [];

  CSR_MAP_LOCATIONS.forEach(loc => {
    const pinIcon = createCsrCategoryPinIcon(loc.category, loc.color);
    const marker = L.marker([loc.lat, loc.lng], { icon: pinIcon });

    const badgeClass = `badge-${loc.category}`;
    const popupContent = `
      <div class="csr-map-popup">
        <h4>${loc.name}</h4>
        <div class="csr-popup-badge ${badgeClass}">${loc.badgeIcon} ${loc.badgeLabel}</div>
        <div class="csr-popup-loc">📍 ${loc.location}</div>
        <p class="csr-popup-desc">${loc.description}</p>
        <div class="csr-popup-actions">
          <button type="button" class="btn-popup-support" onclick="window.handleMapSupportClick('${loc.id}', '${loc.category}')">Support Local</button>
          <a class="btn-popup-directions" href="${loc.directions}" target="_blank" rel="noopener">Get Directions</a>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent, {
      className: 'csr-leaflet-popup',
      maxWidth: 280
    });

    marker.locData = loc;
    markerLayerGroup.addLayer(marker);
    markers.push(marker);
  });

  // Filter Buttons Handler
  const filterBtns = document.querySelectorAll("#csrMapFilters .csr-map-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category || "all";
      markerLayerGroup.clearLayers();

      const visibleLatLngs = [];
      markers.forEach(m => {
        if (category === "all" || m.locData.category === category) {
          markerLayerGroup.addLayer(m);
          visibleLatLngs.push([m.locData.lat, m.locData.lng]);
        }
      });

      if (visibleLatLngs.length > 0) {
        map.fitBounds(L.latLngBounds(visibleLatLngs), { padding: [40, 40], maxZoom: 14 });
      }
    });
  });
}

// =========================================================================
// CSR IMPACT DASHBOARD CONTROLLER (Animated Stats)
// =========================================================================
function initCsrImpactDashboard() {
  const dashBizEl = document.getElementById("dashLocalBiz");
  const dashArtisanEl = document.getElementById("dashArtisans");
  const dashPledgeEl = document.getElementById("dashVisitorPledges");

  const storedPledges = parseInt(localStorage.getItem("madurai_csr_pledges") || "0", 10);
  const basePledges = 120;
  const totalPledges = basePledges + storedPledges;

  function runCounter(el, target) {
    if (!el) return;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  runCounter(dashBizEl, 25);
  runCounter(dashArtisanEl, 40);
  runCounter(dashPledgeEl, totalPledges);
}

// =========================================================================
// MASTER CSR & COMMUNITY PAGE INITIALIZATION
// =========================================================================
function initCsrPage() {
  // 1. Initialize Impact Dashboard
  initCsrImpactDashboard();

  // 2. Initialize Community Map
  initCsrCommunityMap();

  // 3. Initialize Points & Badges
  const pts = getCsrPoints();
  updateCsrGamifyUI(pts, pts);

  // 4. Interactive Visitor Pledge Controller
  const pledgeBtn = document.getElementById("btnTakePledge");
  const pledgeCountEl = document.getElementById("pledgeCounterNum");
  const pledgeCertEl = document.getElementById("pledgeCertBadge");
  const dashPledgeEl = document.getElementById("dashVisitorPledges");
  const baseCount = 1482;
  const storedPledges = parseInt(localStorage.getItem("madurai_csr_pledges") || "0", 10);
  const totalPledges = baseCount + storedPledges;

  if (pledgeCountEl) {
    pledgeCountEl.textContent = totalPledges.toLocaleString();
  }

  if (localStorage.getItem("madurai_visitor_pledged") === "1" && pledgeCertEl) {
    pledgeCertEl.classList.add("active");
    if (pledgeBtn) {
      pledgeBtn.textContent = "✓ Pledge Taken (Thank You!)";
      pledgeBtn.disabled = true;
      pledgeBtn.style.background = "#2E7D32";
    }
  }

  if (pledgeBtn) {
    pledgeBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll(".csr-pledge-item input[type='checkbox']");
      let allChecked = true;
      checkboxes.forEach(cb => {
        if (!cb.checked) allChecked = false;
      });

      if (!allChecked) {
        alert("Please tick all 5 responsible visitor commitments to sign the official pledge.");
        return;
      }

      const newStored = storedPledges + 1;
      localStorage.setItem("madurai_csr_pledges", String(newStored));
      localStorage.setItem("madurai_visitor_pledged", "1");

      if (pledgeCountEl) {
        pledgeCountEl.textContent = (baseCount + newStored).toLocaleString();
      }

      if (dashPledgeEl) {
        dashPledgeEl.textContent = (120 + newStored);
      }

      if (pledgeCertEl) {
        pledgeCertEl.classList.add("active");
      }

      pledgeBtn.textContent = "✓ Pledge Signed Successfully!";
      pledgeBtn.disabled = true;
      pledgeBtn.style.background = "#2E7D32";

      // Award +20 Points for Taking Pledge
      if (window.earnCsrPoints) {
        window.earnCsrPoints("pledge_signed", 20, "Signed Responsible Visitor Pledge");
      }
    });
  }

  // 5. Economic Impact Calculator Controller
  const slider = document.getElementById("csrSpendSlider");
  const spendValEl = document.getElementById("csrSpendVal");
  const retainedValEl = document.getElementById("csrRetainedVal");
  const familiesValEl = document.getElementById("csrFamiliesVal");
  const co2ValEl = document.getElementById("csrCo2Val");

  function updateCalculator(val) {
    if (spendValEl) spendValEl.textContent = `₹${val.toLocaleString()}`;
    const retained = Math.round(val * 0.91);
    if (retainedValEl) retainedValEl.textContent = `₹${retained.toLocaleString()}`;
    const families = Math.max(1, Math.round(val / 650));
    if (familiesValEl) familiesValEl.textContent = `${families} Families`;
    const co2Saved = Math.min(95, Math.round(15 + (val / 150)));
    if (co2ValEl) co2ValEl.textContent = `${co2Saved} kg CO₂`;
  }

  if (slider) {
    slider.addEventListener("input", (e) => {
      updateCalculator(parseInt(e.target.value, 10));
    });
    updateCalculator(parseInt(slider.value, 10));
  }

  // 6. Artisan Directory Filter Chips
  const chips = document.querySelectorAll(".artisan-filters .chip");
  const artisanCards = document.querySelectorAll(".artisan-card");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.dataset.filter || "all";
      artisanCards.forEach(card => {
        const cat = card.dataset.category || "";
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
window.initCsrPage = initCsrPage;

// Full Master Leaflet District Map (Used on Home and About pages)
function initLeafletDistrictMap(containerId = "districtMap", options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !window.L) return;

  // Madurai District Center: [9.9252, 78.1198]
  const defaultCenter = [9.9252, 78.1198];
  const initialZoom = options.zoom || 11;

  const map = L.map(containerId, {
    scrollWheelZoom: false
  }).setView(defaultCenter, initialZoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  }).addTo(map);

  const markersGroup = L.layerGroup().addTo(map);
  const allMarkersMap = {};

  const icons = {
    tourism: createMapPinIcon("#7A2E1D"),
    restaurants: createMapPinIcon("#D4AF37"),
    cafes: createMapPinIcon("#8D6E63"),
    modern: createMapPinIcon("#0288D1"),
    stays: createMapPinIcon("#2E7D32")
  };

  const enabledCategories = {
    tourism: true,
    restaurants: true,
    cafes: true,
    modern: true,
    stays: true
  };

  // Build master marker list
  const markerData = [];

  if (typeof PLACES !== "undefined") {
    PLACES.forEach(p => {
      markerData.push({
        id: p.id,
        category: "tourism",
        name: p.name,
        area: p.area,
        taluk: p.taluk,
        distance: p.distanceFromMeenakshiTemple,
        lat: p.latitude,
        lng: p.longitude,
        image: p.image,
        link: `place-details.html?id=${p.id}`,
        tagline: p.tagline
      });
    });
  }

  if (typeof RESTAURANTS !== "undefined") {
    RESTAURANTS.forEach(r => {
      markerData.push({
        id: r.id,
        category: "restaurants",
        name: r.name,
        area: r.area,
        taluk: r.taluk,
        distance: r.distanceFromMeenakshiTemple,
        lat: r.latitude,
        lng: r.longitude,
        image: r.image,
        link: "restaurants.html",
        tagline: r.tagline
      });
    });
  }

  if (typeof FOODS !== "undefined") {
    FOODS.forEach(f => {
      markerData.push({
        id: f.id,
        category: "restaurants",
        name: f.name,
        area: f.area,
        taluk: f.taluk,
        distance: f.distanceFromMeenakshiTemple,
        lat: f.latitude,
        lng: f.longitude,
        image: f.image,
        link: `food-details.html?id=${f.id}`,
        tagline: f.tagline
      });
    });
  }

  if (typeof CAFES !== "undefined") {
    CAFES.forEach(c => {
      markerData.push({
        id: c.id,
        category: "cafes",
        name: c.name,
        area: c.area,
        taluk: c.taluk,
        distance: c.distanceFromMeenakshiTemple,
        lat: c.latitude,
        lng: c.longitude,
        image: c.image,
        link: "cafes.html",
        tagline: c.tagline
      });
    });
  }

  if (typeof MODERN_SPOTS !== "undefined") {
    MODERN_SPOTS.forEach(m => {
      markerData.push({
        id: m.id,
        category: "modern",
        name: m.name,
        area: m.area,
        taluk: m.taluk,
        distance: m.distanceFromMeenakshiTemple,
        lat: m.latitude,
        lng: m.longitude,
        image: m.image,
        link: "modern.html",
        tagline: m.tagline
      });
    });
  }

  if (typeof STAYS !== "undefined") {
    STAYS.forEach(s => {
      markerData.push({
        id: s.id,
        category: "stays",
        name: s.name,
        area: s.area,
        taluk: s.taluk,
        distance: s.distanceFromMeenakshiTemple,
        lat: s.latitude,
        lng: s.longitude,
        image: s.image,
        link: "stays.html",
        tagline: s.tagline
      });
    });
  }

  function renderMapMarkers(filterIdList = null) {
    markersGroup.clearLayers();

    markerData.forEach(item => {
      if (!enabledCategories[item.category]) return;
      if (filterIdList && !filterIdList.includes(item.id)) return;

      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}`;
      const safeName = item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;");
      const safeArea = item.area.replace(/'/g, "\\'").replace(/"/g, "&quot;");
      const popupHtml = `
        <div class="popup-card">
          <img src="${item.image}" alt="${safeName}" loading="lazy" onerror="handleImageFallback(this, '${safeName}')" />
          <h4>${safeName}</h4>
          <p>${safeArea}</p>
          <div class="popup-card-links">
            <a href="${item.link}" style="background:var(--maroon); color:#fff;">Details</a>
            <a href="${directionsUrl}" target="_blank" rel="noopener" style="background:var(--gold); color:var(--brown);">Directions</a>
          </div>
        </div>`;

      const marker = L.marker([item.lat, item.lng], {
        icon: icons[item.category] || icons.tourism
      }).bindPopup(popupHtml);

      markersGroup.addLayer(marker);
      allMarkersMap[item.id] = marker;
    });
  }

  renderMapMarkers();

  // Save active district map globally for in-page scroll & zoom
  window._activeDistrictMap = map;
  window._activeDistrictContainer = container;
  window._activeDistrictMarkers = allMarkersMap;

  // Category Checkboxes in Map Legend
  document.querySelectorAll("[data-map-category]").forEach(chk => {
    chk.addEventListener("change", () => {
      const cat = chk.dataset.mapCategory;
      enabledCategories[cat] = chk.checked;
      renderMapMarkers();
    });
  });

  // Expose filter function for search sync
  window.filterMapMarkers = function(idList) {
    renderMapMarkers(idList);
  };

  // Deep linking: auto-focus marker if URL has ?place=... or ?id=...
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const targetPlace = urlParams.get("place") || urlParams.get("id");
    if (targetPlace) {
      setTimeout(() => {
        window.zoomToMapMarker(targetPlace);
      }, 500);
    }
  } catch (e) {}
}

// =========================================================================
// 4. DISTANCE SORTING & GEOLOCATION ("Near Me")
// =========================================================================

// Ensure Haversine Distance is globally available
if (typeof window.calculateHaversineDistance !== "function") {
  window.calculateHaversineDistance = function(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  };
}

const MADURAI_LANDMARKS = [
  { id: "meenakshi", name: "Meenakshi Amman Temple", shortName: "Meenakshi Temple", area: "Madurai Main (City Center)", lat: 9.9195, lng: 78.1193, icon: "🏛️" },
  { id: "junction", name: "Madurai Railway Junction", shortName: "Madurai Junction", area: "West Veli St / Railway Station", lat: 9.9167, lng: 78.1120, icon: "🚆" },
  { id: "mattuthavani", name: "Mattuthavani Bus Stand (MGR)", shortName: "Mattuthavani", area: "Integrated Bus Terminus, East", lat: 9.9472, lng: 78.1540, icon: "🚌" },
  { id: "arappalayam", name: "Arappalayam Bus Stand", shortName: "Arappalayam", area: "North-West Madurai Bus Stand", lat: 9.9328, lng: 78.1065, icon: "🚌" },
  { id: "simmakkal", name: "Simmakkal & North Veli", shortName: "Simmakkal", area: "River Bridge / Food Streets", lat: 9.9298, lng: 78.1262, icon: "🍨" },
  { id: "goripalayam", name: "Goripalayam & Tamukkam", shortName: "Goripalayam", area: "Gandhi Museum / Collectorate", lat: 9.9315, lng: 78.1325, icon: "🏛️" },
  { id: "annanagar", name: "Anna Nagar & Teppakulam", shortName: "Anna Nagar", area: "East Madurai / Vandiyur Tank", lat: 9.9160, lng: 78.1480, icon: "🏢" },
  { id: "kknagar", name: "KK Nagar & Court Area", shortName: "KK Nagar", area: "Cafes & Shopping District", lat: 9.9322, lng: 78.1495, icon: "☕" },
  { id: "tirupparankundram", name: "Tirupparankundram Temple", shortName: "Tirupparankundram", area: "South Madurai (Hill Shrine)", lat: 9.8762, lng: 78.0720, icon: "🛕" },
  { id: "airport", name: "Madurai Airport", shortName: "Airport", area: "South-East (Avaniyapuram)", lat: 9.8345, lng: 78.0934, icon: "✈️" },
  { id: "alanganallur", name: "Alanganallur / Vadipatti", shortName: "Alanganallur", area: "North Madurai (Jallikattu Arena)", lat: 10.0465, lng: 78.0845, icon: "🌾" }
];

function showLocationPickerModal(options = {}) {
  const { reason = "", onSelect, onReset, onGps } = options;
  let backdrop = document.getElementById("nearMeModalBackdrop");

  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "nearMeModalBackdrop";
    backdrop.className = "near-me-modal-backdrop";
    document.body.appendChild(backdrop);
  }

  const subMessage = reason || "Choose your starting point in Madurai or auto-detect using device GPS:";

  const landmarkButtonsHtml = MADURAI_LANDMARKS.map(l => `
    <button type="button" class="near-me-landmark-btn" data-lat="${l.lat}" data-lng="${l.lng}" data-name="${l.shortName}" data-full="${l.name}">
      <span class="near-me-landmark-icon">${l.icon}</span>
      <span class="near-me-landmark-info">
        <span class="near-me-landmark-name">${l.name}</span>
        <span class="near-me-landmark-area">${l.area}</span>
      </span>
    </button>
  `).join("");

  backdrop.innerHTML = `
    <div class="near-me-modal-card" role="dialog" aria-modal="true" aria-labelledby="nearMeModalTitle">
      <div class="near-me-modal-header">
        <div>
          <h3 id="nearMeModalTitle">📍 Find Places Near You</h3>
          <p id="nearMeModalDesc">${subMessage}</p>
        </div>
        <button type="button" class="near-me-modal-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="near-me-modal-body">
        <button type="button" class="near-me-gps-btn" id="nearMeModalGpsBtn">
          <span>📡</span> Auto-Detect My Current Device GPS Location
        </button>
        <div class="near-me-modal-divider"><span>Or Choose a Madurai Landmark</span></div>
        <div class="near-me-landmark-grid">
          ${landmarkButtonsHtml}
        </div>
      </div>
      <div class="near-me-modal-footer">
        <button type="button" class="near-me-modal-reset-btn" id="nearMeModalResetBtn">↩️ Reset to Default Order</button>
        <button type="button" class="chip" id="nearMeModalCancelBtn" style="padding:0.4rem 1rem;">Close</button>
      </div>
    </div>
  `;

  // Animate open
  requestAnimationFrame(() => {
    backdrop.classList.add("active");
  });

  function closeModal() {
    backdrop.classList.remove("active");
  }

  backdrop.querySelector(".near-me-modal-close").addEventListener("click", closeModal);
  backdrop.querySelector("#nearMeModalCancelBtn").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  backdrop.querySelector("#nearMeModalGpsBtn").addEventListener("click", () => {
    closeModal();
    if (onGps) onGps();
  });

  backdrop.querySelector("#nearMeModalResetBtn").addEventListener("click", () => {
    closeModal();
    if (onReset) onReset();
  });

  backdrop.querySelectorAll(".near-me-landmark-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lat = parseFloat(btn.dataset.lat);
      const lng = parseFloat(btn.dataset.lng);
      const shortName = btn.dataset.name;
      const fullName = btn.dataset.full;
      closeModal();
      if (onSelect) onSelect(lat, lng, shortName, fullName);
    });
  });
}

function initDistanceControls(gridSelector) {
  const sortSelect = document.querySelector("#sortSelect");
  const nearMeBtn = document.querySelector("#nearMeBtn");
  const grid = document.querySelector(gridSelector);
  if (!grid) return;

  // 1. Tag default DOM order on cards
  const initialCards = Array.from(grid.querySelectorAll(".card"));
  initialCards.forEach((card, idx) => {
    if (!card.dataset.defaultIndex) {
      card.dataset.defaultIndex = String(idx);
    }
  });

  function reorderCards(comparator) {
    const cards = Array.from(grid.querySelectorAll(".card"));
    cards.sort(comparator);
    cards.forEach(card => grid.appendChild(card));
  }

  // 2. Sort Select (Featured / Distance / Rating)
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const val = sortSelect.value;
      if (val === "default") {
        resetNearMe();
      } else if (val === "distance") {
        clearNearMeState();
        reorderCards((a, b) => {
          const distA = parseFloat(a.dataset.distance || (a.dataset.name.match(/(\d+\.?\d*)\s*km/) || [0, 999])[1]);
          const distB = parseFloat(b.dataset.distance || (b.dataset.name.match(/(\d+\.?\d*)\s*km/) || [0, 999])[1]);
          return distA - distB;
        });
      } else if (val === "rating") {
        clearNearMeState();
        reorderCards((a, b) => {
          const rA = parseFloat(a.querySelector(".rating") ? a.querySelector(".rating").textContent.replace("★", "") : 0);
          const rB = parseFloat(b.querySelector(".rating") ? b.querySelector(".rating").textContent.replace("★", "") : 0);
          return rB - rA;
        });
      }
    });
  }

  function clearNearMeState() {
    window._currentNearMeLocation = null;
    grid.querySelectorAll(".user-proximity-badge").forEach(el => el.remove());
    if (nearMeBtn) {
      nearMeBtn.classList.remove("active");
      nearMeBtn.innerHTML = "Near Me";
      nearMeBtn.title = "Sort places by proximity to your location";
    }
    if (window._activeDistrictMap && window.L) {
      if (window._userLocationMarker) {
        window._activeDistrictMap.removeLayer(window._userLocationMarker);
        window._userLocationMarker = null;
      }
      if (window._userLocationCircle) {
        window._activeDistrictMap.removeLayer(window._userLocationCircle);
        window._userLocationCircle = null;
      }
    }
  }

  function resetNearMe() {
    clearNearMeState();
    reorderCards((a, b) => parseFloat(a.dataset.defaultIndex || 0) - parseFloat(b.dataset.defaultIndex || 0));
    if (sortSelect) sortSelect.value = "default";
    if (window._activeDistrictMap) {
      window._activeDistrictMap.setView([9.9252, 78.1198], 11);
    }
  }

  function updateClosestBadge(cards) {
    const visibleCards = cards.filter(c => c.style.display !== "none" && parseFloat(c.dataset.userDist || 9999) < 9999);
    const closestCard = visibleCards[0] || cards.find(c => parseFloat(c.dataset.userDist || 9999) < 9999);

    cards.forEach(card => {
      const badge = card.querySelector(".user-proximity-badge");
      if (!badge) return;
      const dist = parseFloat(card.dataset.userDist || 9999);
      if (dist >= 9999) return;

      const isClosest = (card === closestCard);
      const formattedDist = dist < 1 ? `${Math.round(dist * 1000)} m` : `${dist.toFixed(1)} km`;

      badge.classList.toggle("is-closest", isClosest);
      badge.innerHTML = isClosest
        ? `⭐ Nearest (${formattedDist})`
        : `📍 ${formattedDist} away`;
    });
  }

  function applyNearMe(userLat, userLng, locationLabel) {
    const calcDist = (typeof calculateHaversineDistance === "function") 
      ? calculateHaversineDistance 
      : window.calculateHaversineDistance;

    const cards = Array.from(grid.querySelectorAll(".card"));
    
    // Master data items fallback
    const allItems = [
      ...(window.PLACES || []),
      ...(window.RESTAURANTS || []),
      ...(window.CAFES || []),
      ...(window.MODERN_SPOTS || []),
      ...(window.STAYS || []),
      ...(window.FOODS || [])
    ];

    cards.forEach(card => {
      let lat = parseFloat(card.dataset.lat);
      let lng = parseFloat(card.dataset.lng);

      if (isNaN(lat) || isNaN(lng)) {
        const placeId = card.dataset.id || (card.querySelector("a.view") ? card.querySelector("a.view").getAttribute("href").split("=")[1] : null);
        const cardTitle = card.querySelector("h3") ? card.querySelector("h3").textContent.trim().toLowerCase() : "";
        const item = allItems.find(p => (placeId && p.id === placeId) || (cardTitle && p.name.toLowerCase() === cardTitle));
        if (item) {
          lat = item.latitude;
          lng = item.longitude;
          card.dataset.lat = lat;
          card.dataset.lng = lng;
          card.dataset.id = item.id;
        }
      }

      if (!isNaN(lat) && !isNaN(lng) && typeof calcDist === "function") {
        const distKm = calcDist(userLat, userLng, lat, lng);
        card.dataset.userDist = distKm;
      } else {
        card.dataset.userDist = 9999;
      }

      // Add or update proximity badge
      let badge = card.querySelector(".user-proximity-badge");
      const thumb = card.querySelector(".thumb");
      if (!badge && thumb) {
        badge = document.createElement("span");
        badge.className = "user-proximity-badge";
        thumb.appendChild(badge);
      }
    });

    // Sort cards ascending by proximity
    cards.sort((a, b) => parseFloat(a.dataset.userDist || 9999) - parseFloat(b.dataset.userDist || 9999));
    cards.forEach(card => grid.appendChild(card));

    // Update closest highlight
    updateClosestBadge(cards);

    // Update Near Me Button
    if (nearMeBtn) {
      nearMeBtn.classList.add("active");
      nearMeBtn.innerHTML = `📍 Near: ${locationLabel} <span style="font-size:0.75rem;">▾</span>`;
      nearMeBtn.title = "Click to change location or reset sorting";
    }

    // Save active reference
    window._currentNearMeLocation = { lat: userLat, lng: userLng, label: locationLabel };

    // Update interactive Leaflet District Map if loaded
    if (window._activeDistrictMap && window.L) {
      const map = window._activeDistrictMap;

      if (window._userLocationMarker) {
        map.removeLayer(window._userLocationMarker);
      }
      if (window._userLocationCircle) {
        map.removeLayer(window._userLocationCircle);
      }

      const userIcon = L.divIcon({
        className: "user-gps-marker-wrap",
        html: `
          <div class="user-gps-marker-pulse"></div>
          <div class="user-gps-marker-pin">📍</div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 30]
      });

      window._userLocationMarker = L.marker([userLat, userLng], {
        icon: userIcon,
        zIndexOffset: 2500
      }).addTo(map);

      window._userLocationMarker.bindPopup(`
        <div style="font-family:var(--font-sans); padding:0.25rem; min-width:180px;">
          <div style="font-weight:700; color:var(--maroon); font-size:0.95rem; margin-bottom:0.2rem;">
            📍 Your Reference Point
          </div>
          <div style="font-size:0.85rem; color:#444; margin-bottom:0.4rem;">
            ${locationLabel}
          </div>
          <div style="font-size:0.78rem; color:var(--brown); background:var(--cream-deep); padding:0.25rem 0.5rem; border-radius:4px; font-weight:600;">
            Places sorted by distance from here
          </div>
        </div>
      `).openPopup();

      window._userLocationCircle = L.circle([userLat, userLng], {
        radius: 1400,
        color: "#7A2E1D",
        fillColor: "#D4AF37",
        fillOpacity: 0.16,
        weight: 2,
        dashArray: "4, 6"
      }).addTo(map);

      // Fit bounds to user location + top 3 nearest items
      const bounds = L.latLngBounds([[userLat, userLng]]);
      cards.slice(0, 3).forEach(c => {
        const cLat = parseFloat(c.dataset.lat);
        const cLng = parseFloat(c.dataset.lng);
        if (!isNaN(cLat) && !isNaN(cLng)) bounds.extend([cLat, cLng]);
      });
      map.fitBounds(bounds, { padding: [55, 55], maxZoom: 15 });
    }
  }

  function startGpsLocate() {
    if (!navigator.geolocation) {
      showLocationPickerModal({
        reason: "Device GPS is not supported by your browser. Please select a spot in Madurai below to find places near you:",
        onSelect: (lat, lng, name) => applyNearMe(lat, lng, name),
        onReset: resetNearMe,
        onGps: startGpsLocate
      });
      return;
    }

    if (nearMeBtn) nearMeBtn.innerHTML = "<span>⏳</span> Locating...";

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        const calcDist = (typeof calculateHaversineDistance === "function") 
          ? calculateHaversineDistance 
          : window.calculateHaversineDistance;

        const distFromMadurai = typeof calcDist === "function" 
          ? calcDist(userLat, userLng, 9.9252, 78.1198) 
          : 0;

        if (distFromMadurai <= 75) {
          applyNearMe(userLat, userLng, "Your Location (GPS)");
        } else {
          // User is outside Madurai
          applyNearMe(userLat, userLng, `GPS (~${Math.round(distFromMadurai)}km)`);
          showLocationPickerModal({
            reason: `📍 We detected your device at ~${Math.round(distFromMadurai)} km from Madurai. Places are sorted from your position, or choose a Madurai spot below for local distances:`,
            onSelect: (lat, lng, name) => applyNearMe(lat, lng, name),
            onReset: resetNearMe,
            onGps: startGpsLocate
          });
        }
      },
      (err) => {
        console.warn("Geolocation notice:", err.message || err);
        if (nearMeBtn) {
          nearMeBtn.classList.remove("active");
          nearMeBtn.innerHTML = "Near Me";
        }
        showLocationPickerModal({
          reason: "📍 Device GPS was unavailable or blocked. Choose your location in Madurai below to immediately find places near you:",
          onSelect: (lat, lng, name) => applyNearMe(lat, lng, name),
          onReset: resetNearMe,
          onGps: startGpsLocate
        });
      },
      { enableHighAccuracy: false, timeout: 4500, maximumAge: 120000 }
    );
  }

  // 3. Near Me Button Click
  if (nearMeBtn) {
    nearMeBtn.addEventListener("click", () => {
      if (nearMeBtn.classList.contains("active")) {
        // Already active -> open picker to allow switching or resetting
        const currentLabel = window._currentNearMeLocation ? window._currentNearMeLocation.label : "";
        showLocationPickerModal({
          reason: currentLabel ? `Currently sorted near: <strong>${currentLabel}</strong>. Choose another spot or reset:` : "",
          onSelect: (lat, lng, name) => applyNearMe(lat, lng, name),
          onReset: resetNearMe,
          onGps: startGpsLocate
        });
      } else {
        startGpsLocate();
      }
    });
  }

  // Hook into card visibility changes so ⭐ Nearest stays on closest visible card
  const observer = new MutationObserver(() => {
    if (window._currentNearMeLocation) {
      updateClosestBadge(Array.from(grid.querySelectorAll(".card")));
    }
  });
  observer.observe(grid, { attributes: true, subtree: true, attributeFilter: ["style", "class"] });
}

// =========================================================================
// 5. TALUK & AREA DROPDOWN FILTER
// =========================================================================
function wireTalukFilter(selectSelector, cardSelector, onChange) {
  const select = document.querySelector(selectSelector);
  if (!select) return;
  select.addEventListener("change", () => {
    const taluk = select.value.toLowerCase().trim();
    document.querySelectorAll(cardSelector).forEach(card => {
      const cardTaluk = (card.dataset.taluk || "").toLowerCase().trim();
      let matches = taluk === "all" || cardTaluk.includes(taluk);
      if (!matches && (taluk.includes("tirupparankundram") || taluk.includes("thirupparankundram"))) {
        matches = cardTaluk.includes("tirupparankundram") || cardTaluk.includes("thirupparankundram");
      }
      if (!matches && (taluk.includes("thirumangalam") || taluk.includes("tirumangalam"))) {
        matches = cardTaluk.includes("thirumangalam") || cardTaluk.includes("tirumangalam");
      }
      card.dataset.matchesTaluk = matches ? "1" : "0";
    });
    if (onChange) onChange();
  });
}

// =========================================================================
// REUSABLE HELPERS (Preserved for compatibility)
// =========================================================================
function wireSearch(inputSelector, cardSelector, nameSelector, onChange) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    document.querySelectorAll(cardSelector).forEach(card => {
      const name = (card.querySelector(nameSelector) ? card.querySelector(nameSelector).textContent : (card.dataset.name || "")).toLowerCase();
      card.dataset.matchesSearch = name.includes(keyword) ? "1" : "0";
    });
    if (onChange) onChange();
  });
}

function wireFilters(filterSelector, cardSelector, onChange) {
  const buttons = document.querySelectorAll(filterSelector);
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      document.querySelectorAll(cardSelector).forEach(card => {
        const matches = category === "all" || card.dataset.category === category || card.dataset.tier === category;
        card.dataset.matchesFilter = matches ? "1" : "0";
      });
      if (onChange) onChange();
    });
  });
}

function applyVisibility(cardSelector, emptyStateSelector) {
  let visibleCount = 0;
  document.querySelectorAll(cardSelector).forEach(card => {
    const searchOk = card.dataset.matchesSearch !== "0";
    const filterOk = card.dataset.matchesFilter !== "0";
    const talukOk = card.dataset.matchesTaluk !== "0";
    const show = searchOk && filterOk && talukOk;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });
  const empty = document.querySelector(emptyStateSelector);
  if (empty) empty.classList.toggle("show", visibleCount === 0);
}

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
