/* Dumpster Rental Indiana — estimator + booking wizard. No frameworks, no tracking. */
(function () {
  "use strict";

  /* ---- Size estimator ----
     Market ranges are published Indiana ranges from Dumpsters.com, verified
     2026-11-10 (Indianapolis $425-$995 avg $676; Fort Wayne $423-$859 avg $634;
     South Bend $440-$828 avg $576; Evansville $605-$838 avg $733). They are
     MARKET ranges, not our prices. Our exact prices are [TO CONFIRM]. */
  var SIZES = {
    "10": { name: "10-yard", loads: "about 3 pickup loads", fits: "small cleanouts, single room, small bathroom, roofing tear-off of one layer", range: "$330-$599", tons: "1-2 tons included is typical" },
    "20": { name: "20-yard", loads: "about 6 pickup loads", fits: "kitchen remodel, multi-room cleanout, flooring, roofing", range: "$400-$775", tons: "2-4 tons included is typical" },
    "30": { name: "30-yard", loads: "about 9 pickup loads", fits: "whole-house cleanout, major renovation, large construction", range: "$590-$885", tons: "3-5 tons included is typical" },
    "40": { name: "40-yard", loads: "about 12 pickup loads", fits: "major demolition, large construction, light bulky debris only", range: "$650-$999", tons: "4-6 tons included is typical" }
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
        "<p>Indiana market range for this size: <strong>" + s.range + "</strong> for a typical 7-day rental (" + s.tons + "). Source: published Indiana ranges, Dumpsters.com, verified Nov 10, 2026. This is the market range, not our price. Our exact price is confirmed when you book.</p>" +
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
})();
