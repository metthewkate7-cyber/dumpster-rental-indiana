/* Dumpster Rental Indiana — estimator + booking wizard. No frameworks, no tracking. */
(function () {
  "use strict";

  /* ---- Size estimator ----
     Market ranges are published Indiana ranges from Ultimate Dumpsters,
     Nov 2026 (Indianapolis ladder $399-$995; statewide typical $475-$950),
     corroborated by Dumpsters.com city averages verified 2026-11-10
     (Indianapolis $425-$995 avg $676; Fort Wayne $423-$859 avg $634;
     Evansville $605-$838 avg $733). They are MARKET ranges, not our prices.
     Our exact prices are [TO CONFIRM]. */
  var SIZES = {
    "10": { name: "10-yard", loads: "about 3 pickup loads", fits: "small cleanouts, single room, small bathroom, roofing tear-off of one layer", range: "$399-$599", mid: "$499", tons: "1 ton included" },
    "20": { name: "20-yard", loads: "about 6 pickup loads", fits: "kitchen remodel, multi-room cleanout, flooring, roofing", range: "$550-$750", mid: "$650", tons: "2 tons included" },
    "30": { name: "30-yard", loads: "about 9 pickup loads", fits: "whole-house cleanout, major renovation, large construction", range: "$685-$885", mid: "$785", tons: "3 tons included" },
    "40": { name: "40-yard", loads: "about 12 pickup loads", fits: "major demolition, large construction, light bulky debris only", range: "$795-$995", mid: "$895", tons: "4 tons included" }
  };
  var JOBS = {
    garage: "10", bathroom: "10", kitchen: "20", cleanout: "20",
    roofing: "20", renovation: "30", construction: "30", demolition: "40", yard: "20", concrete: "10"
  };
  var form = document.getElementById("estimator");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var job = document.getElementById("est-job").value;
      var heavy = document.getElementById("est-heavy").value === "yes";
      var key = heavy ? "10" : (JOBS[job] || "20");
      var s = SIZES[key];
      var out = document.getElementById("estimator-result");
      var heavyNote = heavy
        ? "<p><strong>Heavy debris?</strong> Yes. Use a 10-yard box for concrete, dirt, brick, or tile. Heavy loads hit the weight limit long before the box looks full.</p>" : "";
      out.innerHTML =
        "<h3>Your match: " + s.name + " dumpster</h3>" +
        "<p>It holds " + s.loads + " and fits " + s.fits + ".</p>" +
        "<p>Indiana market range for this size: <strong>" + s.range + "</strong> for a typical 7-day rental (" + s.tons + "). Typical midpoint about <strong>" + s.mid + "</strong>. Source: Ultimate Dumpsters Indiana ladder, Nov 2026. This is the market range, not our price. Our exact price is confirmed when you book.</p>" +
        heavyNote +
        '<p><a class="btn" href="/book/?size=' + key + '">Book a ' + s.name + ' dumpster</a></p>';
      out.hidden = false;
      out.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* ---- Booking wizard ---- */
  var wizard = document.getElementById("booking-wizard");
  if (wizard) {
    var panels = wizard.querySelectorAll(".step-panel");
    var stepItems = wizard.querySelectorAll(".steps li");
    var current = 0;
    var summary = document.getElementById("booking-summary");
    var params = new URLSearchParams(window.location.search);
    var preSize = params.get("size");
    if (preSize && wizard.querySelector('[data-size="' + preSize + '"]')) {
      selectSize(preSize);
    }
    function show(n) {
      current = n;
      panels.forEach(function (p, i) { p.classList.toggle("active", i === n); });
      stepItems.forEach(function (li, i) { li.classList.toggle("active", i <= n); });
      wizard.scrollIntoView({ behavior: "smooth", block: "start" });
      updateSummary();
    }
    function selectSize(v) {
      wizard.querySelectorAll(".size-pick button").forEach(function (b) {
        b.classList.toggle("selected", b.getAttribute("data-size") === v);
      });
      var input = document.getElementById("bk-size");
      if (input) input.value = v;
    }
    wizard.querySelectorAll(".size-pick button").forEach(function (b) {
      b.addEventListener("click", function () { selectSize(b.getAttribute("data-size")); });
    });
    wizard.querySelectorAll("[data-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current === 0 && !document.getElementById("bk-size").value) {
          alert("Please pick a dumpster size first.");
          return;
        }
        if (current < panels.length - 1) show(current + 1);
      });
    });
    wizard.querySelectorAll("[data-prev]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current > 0) show(current - 1);
      });
    });
    function updateSummary() {
      if (!summary) return;
      var size = document.getElementById("bk-size").value || "not picked yet";
      var city = document.getElementById("bk-city") ? document.getElementById("bk-city").value : "";
      var date = document.getElementById("bk-date") ? document.getElementById("bk-date").value : "";
      summary.innerHTML = "<strong>Your booking:</strong> " + size + "-yard dumpster" +
        (city ? " in " + city : "") + (date ? " delivered " + date : "") +
        ". Exact price is confirmed before you pay. No payment is taken on this page.";
    }
    ["bk-city", "bk-date"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener("change", updateSummary);
    });
    wizard.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("bk-name").value.trim();
      var phone = document.getElementById("bk-phone").value.trim();
      if (!name || !phone) {
        alert("Please add your name and phone number so we can confirm your booking.");
        return;
      }
      try {
        localStorage.setItem("dri-booking", JSON.stringify({
          size: document.getElementById("bk-size").value,
          city: document.getElementById("bk-city").value,
          date: document.getElementById("bk-date").value,
          name: name, phone: phone, ts: new Date().toISOString()
        }));
      } catch (err) { /* storage unavailable; booking still shows below */ }
      document.getElementById("booking-done").hidden = false;
      document.getElementById("booking-done").scrollIntoView({ behavior: "smooth" });
    });
    show(0);
  }

  /* ---- Before/after sliders ----
     Range input drives the --pos custom property (keyboard + touch).
     Pointer drag on the photo frame updates the same value. */
  document.querySelectorAll(".ba-slider").forEach(function (slider) {
    var frame = slider.querySelector(".ba-frame");
    var range = slider.querySelector(".ba-range");
    if (!frame || !range) return;
    function setPos(pct) {
      pct = Math.max(0, Math.min(100, pct));
      slider.style.setProperty("--pos", pct + "%");
      if (range.value !== String(pct)) range.value = pct;
    }
    range.addEventListener("input", function () { setPos(Number(range.value)); });
    var dragging = false;
    function posFromEvent(e) {
      var rect = frame.getBoundingClientRect();
      return ((e.clientX - rect.left) / rect.width) * 100;
    }
    frame.addEventListener("pointerdown", function (e) {
      dragging = true;
      frame.setPointerCapture(e.pointerId);
      setPos(posFromEvent(e));
    });
    frame.addEventListener("pointermove", function (e) {
      if (dragging) setPos(posFromEvent(e));
    });
    ["pointerup", "pointercancel"].forEach(function (evt) {
      frame.addEventListener(evt, function () { dragging = false; });
    });
  });

  /* ---- City directory search + region filter ---- */
  var citySearch = document.getElementById("city-search");
  var cityGroups = document.querySelectorAll(".city-group");
  var cityNoResults = document.getElementById("city-no-results");
  var activeRegion = "all";
  if (citySearch && cityGroups.length) {
    function filterCities() {
      var q = citySearch.value.trim().toLowerCase();
      var anyVisible = false;
      cityGroups.forEach(function (group) {
        var regionMatch = activeRegion === "all" || group.getAttribute("data-region") === activeRegion;
        var groupVisible = false;
        group.querySelectorAll("li").forEach(function (li) {
          var match = regionMatch && li.textContent.toLowerCase().indexOf(q) !== -1;
          li.hidden = !match;
          if (match) groupVisible = true;
        });
        group.hidden = !groupVisible;
        if (groupVisible) anyVisible = true;
      });
      if (cityNoResults) cityNoResults.hidden = anyVisible;
    }
    citySearch.addEventListener("input", filterCities);
    document.querySelectorAll(".city-filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeRegion = btn.getAttribute("data-region");
        document.querySelectorAll(".city-filter-btn").forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        filterCities();
      });
    });
  }

  /* ---- Header dropdowns + mobile menu ----
     Tap/click toggles (touch + keyboard); hover also opens on desktop via CSS. */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.getElementById("main-nav");
  function closeAllDrops() {
    document.querySelectorAll(".nav-item.open").forEach(function (item) {
      item.classList.remove("open");
      var b = item.querySelector(".nav-drop-btn");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }
  function closeMobileMenu(returnFocus) {
    if (!mainNav) return;
    mainNav.classList.remove("nav-open");
    document.body.classList.remove("menu-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      if (returnFocus) navToggle.focus();
    }
  }
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("nav-open");
      document.body.classList.toggle("menu-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (!open) closeAllDrops();
    });
    /* Tapping any menu link closes the panel (same-page anchors especially). */
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMobileMenu(false); });
    });
  }
  document.querySelectorAll(".nav-drop-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var item = btn.closest(".nav-item");
      var wasOpen = item.classList.contains("open");
      closeAllDrops();
      item.classList.toggle("open", !wasOpen);
      btn.setAttribute("aria-expanded", !wasOpen ? "true" : "false");
    });
  });
  /* Desktop hover: only one dropdown open at a time. */
  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      if (!window.matchMedia("(min-width:761px)").matches) return;
      document.querySelectorAll(".nav-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var b = other.querySelector(".nav-drop-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item")) closeAllDrops();
    /* Outside-tap closes the mobile menu (tap on page content, hero, etc.). */
    if (mainNav && mainNav.classList.contains("nav-open") && !e.target.closest(".site-header")) {
      closeMobileMenu(false);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllDrops();
      if (mainNav && mainNav.classList.contains("nav-open")) closeMobileMenu(true);
    }
  });
})();
