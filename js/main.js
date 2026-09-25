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

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
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
    timer = setInterval(nextSlide, 5000);
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
    typeof FOODS !== "undefined" ? FOODS : []
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

  // 3. MODERN ATTRACTIONS / THEME PARKS / MALLS
  if (type === "modern" || (item.category && item.category === "parks") || name.toLowerCase().includes("athisayam")) {
    const isAthisayam = name.toLowerCase().includes("athisayam");
    return [
      isAthisayam ? {
        platform: "Athisayam Official",
        badge: "Official Ticket Portal",
        tagClass: "badge-govt",
        title: "Book Water Park Tickets",
        desc: "Official e-ticketing portal for entry tickets, family packages, water rides, and amusement park passes.",
        actionUrl: "https://athisayam.in/",
        actionText: "Book Official Tickets ↗",
        btnClass: "btn-booking-blue"
      } : {
        platform: "BookMyShow",
        badge: "Movies & Events",
        tagClass: "badge-bms",
        title: "BookMyShow Madurai",
        desc: "Book movie theater tickets, mall entertainment, and local weekend events.",
        actionUrl: "https://in.bookmyshow.com/explore/home/madurai",
        actionText: "Book on BookMyShow ↗",
        btnClass: "btn-booking-red"
      },
      {
        platform: "Direct Cab & Transit",
        badge: "Door-to-door Transport",
        tagClass: "badge-transit",
        title: "Book Cab to Venue",
        desc: `Hail an auto or cab directly to ${area} with upfront pricing and zero parking hassle.`,
        actionUrl: `https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=${item.latitude || 9.9252}&dropoff[longitude]=${item.longitude || 78.1198}&dropoff[nickname]=${encName}`,
        actionText: "Book Taxi / Cab ↗",
        btnClass: "btn-booking-green"
      },
      {
        platform: "TTDC Tourism",
        badge: "State Sightseeing",
        tagClass: "badge-ttdc",
        title: "TTDC Madurai Day Packages",
        desc: "Curated sightseeing and transport packages operated by Tamil Nadu Tourism Development Corporation.",
        actionUrl: "https://www.ttdconline.com/",
        actionText: "View TTDC Packages ↗",
        btnClass: "btn-booking-gold"
      }
    ];
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
function initDistanceControls(gridSelector) {
  const sortSelect = document.querySelector("#sortSelect");
  const nearMeBtn = document.querySelector("#nearMeBtn");
  const grid = document.querySelector(gridSelector);
  if (!grid) return;

  function reorderCards(comparator) {
    const cards = Array.from(grid.querySelectorAll(".card"));
    cards.sort(comparator);
    cards.forEach(card => grid.appendChild(card));
  }

  // Sort by Distance from Meenakshi Temple
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const val = sortSelect.value;
      if (val === "distance") {
        reorderCards((a, b) => {
          const distA = parseFloat(a.dataset.distance || (a.dataset.name.match(/(\d+\.?\d*)\s*km/) || [0, 999])[1]);
          const distB = parseFloat(b.dataset.distance || (b.dataset.name.match(/(\d+\.?\d*)\s*km/) || [0, 999])[1]);
          return distA - distB;
        });
      } else if (val === "rating") {
        reorderCards((a, b) => {
          const rA = parseFloat(a.querySelector(".rating") ? a.querySelector(".rating").textContent.replace("★", "") : 0);
          const rB = parseFloat(b.querySelector(".rating") ? b.querySelector(".rating").textContent.replace("★", "") : 0);
          return rB - rA;
        });
      }
    });
  }

  // "Near Me" Geolocation Button
  if (nearMeBtn) {
    nearMeBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
      }
      nearMeBtn.textContent = "Locating you...";
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLat = pos.coords.latitude;
          const userLng = pos.coords.longitude;
          nearMeBtn.textContent = "✓ Sorted by proximity to you";
          nearMeBtn.style.background = "var(--maroon)";
          nearMeBtn.style.color = "var(--white)";

          // Re-sort cards using user's GPS
          if (typeof calculateHaversineDistance === "function") {
            const cards = Array.from(grid.querySelectorAll(".card"));
            cards.forEach(card => {
              const placeId = (card.querySelector("a.view") ? card.querySelector("a.view").getAttribute("href").split("=")[1] : null);
              const allItems = [
                ...(window.PLACES || []),
                ...(window.RESTAURANTS || []),
                ...(window.CAFES || []),
                ...(window.MODERN_SPOTS || []),
                ...(window.STAYS || []),
                ...(window.FOODS || [])
              ];
              const item = allItems.find(p => p.id === placeId);
              if (item) {
                const distKm = calculateHaversineDistance(userLat, userLng, item.latitude, item.longitude);
                card.dataset.userDist = distKm;
                const locRow = card.querySelector(".card-location-row .pin-text");
                if (locRow) {
                  locRow.innerHTML = `${item.area} <span style="color:var(--maroon); font-weight:700;">(Nearest to you)</span>`;
                }
              }
            });
            cards.sort((a, b) => parseFloat(a.dataset.userDist || 999) - parseFloat(b.dataset.userDist || 999));
            cards.forEach(card => grid.appendChild(card));
          }
        },
        (err) => {
          console.warn("Geolocation error", err);
          nearMeBtn.textContent = "Near Me (Enable Location)";
          alert("Could not access your location. Please ensure location permissions are enabled.");
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
  }
}

// =========================================================================
// 5. TALUK & AREA DROPDOWN FILTER
// =========================================================================
function wireTalukFilter(selectSelector, cardSelector, onChange) {
  const select = document.querySelector(selectSelector);
  if (!select) return;
  select.addEventListener("change", () => {
    const taluk = select.value.toLowerCase();
    document.querySelectorAll(cardSelector).forEach(card => {
      const cardTaluk = (card.dataset.taluk || "").toLowerCase();
      const matches = taluk === "all" || cardTaluk.includes(taluk);
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
