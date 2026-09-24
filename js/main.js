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
  badge.innerHTML = `<span>🏛️</span><span>${title || 'Madurai Landmark'}</span>`;
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
          <p style="font-size:1.8rem; margin-bottom:0.5rem;">🔍</p>
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
              <span>📍 ${item.area} (${item.taluk})</span>
              <span>·</span>
              <span>★ ${item.rating || '4.8'}</span>
            </div>
            <div class="search-result-desc">${item.tagline || item.description || ''}</div>
          </div>
          <div class="search-result-actions">
            <a href="${linkUrl}" class="btn btn-orange" style="padding:0.3rem 0.75rem; font-size:0.78rem;">${linkText} &rarr;</a>
            <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions" style="font-size:0.75rem; padding:0.3rem 0.65rem;">🗺️ Directions</a>
          </div>
        </div>`;
    }

    let html = `<div style="font-size:0.82rem; color:var(--muted); margin-bottom:0.75rem;">Showing ${totalMatches} matching result${totalMatches > 1 ? 's' : ''}:</div>`;

    if (results.tourism.length > 0) {
      html += `<div class="search-group-title"><span>🛕 Tourism Places</span> <span class="badge" style="position:static;">${results.tourism.length}</span></div>`;
      html += results.tourism.map(item => renderItem(item, `place-details.html?id=${item.id}`)).join("");
    }

    if (results.foods.length > 0) {
      html += `<div class="search-group-title"><span>🍛 Local Foods & Dishes</span> <span class="badge" style="position:static;">${results.foods.length}</span></div>`;
      html += results.foods.map(item => renderItem(item, `food-details.html?id=${item.id}`)).join("");
    }

    if (results.restaurants.length > 0) {
      html += `<div class="search-group-title"><span>🍽 Restaurants & Messes</span> <span class="badge" style="position:static;">${results.restaurants.length}</span></div>`;
      html += results.restaurants.map(item => renderItem(item, `restaurants.html`)).join("");
    }

    if (results.cafes.length > 0) {
      html += `<div class="search-group-title"><span>☕ Cafes & Desserts</span> <span class="badge" style="position:static;">${results.cafes.length}</span></div>`;
      html += results.cafes.map(item => renderItem(item, `cafes.html`)).join("");
    }

    if (results.modern.length > 0) {
      html += `<div class="search-group-title"><span>🏢 Modern Madurai & Malls</span> <span class="badge" style="position:static;">${results.modern.length}</span></div>`;
      html += results.modern.map(item => renderItem(item, `modern.html`)).join("");
    }

    if (results.stays.length > 0) {
      html += `<div class="search-group-title"><span>🏨 Stays & Resorts</span> <span class="badge" style="position:static;">${results.stays.length}</span></div>`;
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
// 3. INTERACTIVE LEAFLET DISTRICT MAP ENGINE
// =========================================================================
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

  // Custom marker pin colors:
  // Tourism: Maroon (#7A2E1D), Food/Restaurant: Gold (#D4AF37), Stays: Green (#2E7D32)
  function createPinIcon(color, emoji) {
    return L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="background:${color}; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 3px 10px rgba(0,0,0,0.35), 0 0 10px rgba(255,220,80,0.45); border:2px solid #FFF8CC; cursor:pointer;">
          ${emoji}
        </div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });
  }

  const icons = {
    tourism: createPinIcon("#7A2E1D", "🛕"),
    restaurants: createPinIcon("#D4AF37", "🍽"),
    cafes: createPinIcon("#8D6E63", "☕"),
    modern: createPinIcon("#0288D1", "🏢"),
    stays: createPinIcon("#2E7D32", "🏨")
  };

  const enabledCategories = {
    tourism: true,
    restaurants: true,
    cafes: true,
    modern: true,
    stays: true
  };

  // Build marker list
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
      const popupHtml = `
        <div class="popup-card">
          <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="handleImageFallback(this, '${item.name.replace(/'/g, "\\'")}')" />
          <h4>${item.name}</h4>
          <p>📍 ${item.area}</p>
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

  // Category Checkboxes in Map Legend
  document.querySelectorAll("[data-map-category]").forEach(chk => {
    chk.addEventListener("change", () => {
      const cat = chk.dataset.mapCategory;
      enabledCategories[cat] = chk.checked;
      renderMapMarkers();
    });
  });

  // Global helper to center map on marker
  window.zoomToMapMarker = function(id, lat, lng) {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (lat && lng) {
      map.setView([lat, lng], 15, { animate: true });
    }
    const m = allMarkersMap[id];
    if (m) {
      setTimeout(() => { m.openPopup(); }, 300);
    }
  };

  // Expose filter function for search sync
  window.filterMapMarkers = function(idList) {
    renderMapMarkers(idList);
  };
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
      nearMeBtn.textContent = "📍 Locating you...";
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
                  locRow.innerHTML = `📍 ${item.area} <span style="color:var(--maroon); font-weight:700;">(Nearest to you)</span>`;
                }
              }
            });
            cards.sort((a, b) => parseFloat(a.dataset.userDist || 999) - parseFloat(b.dataset.userDist || 999));
            cards.forEach(card => grid.appendChild(card));
          }
        },
        (err) => {
          console.warn("Geolocation error", err);
          nearMeBtn.textContent = "📍 Near Me (Enable Location)";
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
