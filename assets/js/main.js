(function () {
  var cfg = window.SITE_CONFIG || {};

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      document.body.classList.toggle("nav-open", !open);
    });
  }

  /* ---------- Toast for links that aren't set up yet ---------- */
  function toast(msg) {
    var el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 4200);
  }

  function wire(selector, url, pendingMsg) {
    document.querySelectorAll(selector).forEach(function (a) {
      if (url) {
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
      } else {
        a.href = "#";
        a.addEventListener("click", function (e) {
          e.preventDefault();
          toast(pendingMsg);
        });
      }
    });
  }

  wire("[data-portal-link]", cfg.portalUrl,
    "Our patient portal link is coming soon. Please call 402-249-0377 for help.");

  /* ---------- Weave Text Connect chat bubble ---------- */
  if (cfg.weaveTextConnectSrc) {
    var s = document.createElement("script");
    s.src = cfg.weaveTextConnectSrc;
    s.defer = true;
    document.head.appendChild(s);
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
