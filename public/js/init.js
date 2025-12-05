// Client-side initialization script
// This runs after all scripts are loaded

(function () {
  "use strict";

  function waitForjQuery(callback, maxAttempts) {
    maxAttempts = maxAttempts || 20; // Max 1 second wait
    if (typeof window !== "undefined" && (window.jQuery || window.$)) {
      callback();
    } else if (maxAttempts > 0) {
      setTimeout(function () {
        waitForjQuery(callback, maxAttempts - 1);
      }, 50);
    } else {
      console.error("jQuery failed to load");
    }
  }

  function init() {
    // Ensure jQuery is loaded
    if (
      typeof window.jQuery === "undefined" &&
      typeof jQuery === "undefined" &&
      typeof window.$ === "undefined"
    ) {
      console.warn("jQuery not loaded yet, waiting...");
      waitForjQuery(init);
      return;
    }

    var $ = window.jQuery || window.$ || jQuery;

    // Wait for DOM if needed
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        initializePlugins($);
      });
    } else {
      initializePlugins($);
    }
  }

  function initializePlugins($) {
    // Initialize WOW.js if available
    if (typeof WOW !== "undefined") {
      new WOW().init();
    }

    // Initialize Magnific Popup if jQuery and plugin are available
    if ($ && $.fn.magnificPopup) {
      // Popup video
      $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
      });

      // Gallery
      $(".gallery-items").magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom",
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element) {
            return element.find("img");
          },
        },
      });
    }

    // Initialize SlickNav if available and not already initialized
    if ($ && $.fn.slicknav) {
      // Check if SlickNav is already initialized by looking for existing slicknav menu
      const existingSlickNav = document.querySelector(".slicknav_menu");
      const menuElement = document.getElementById("menu");

      // Only initialize if menu exists and SlickNav hasn't been initialized yet
      if (menuElement && !existingSlickNav) {
        try {
          $("#menu").slicknav({
            label: "",
            prependTo: ".responsive-menu",
          });
        } catch (e) {
          console.warn("SlickNav initialization error:", e);
        }
      }
    }

    // Initialize Bootstrap components if needed
    if (typeof bootstrap !== "undefined") {
      // Initialize tooltips
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });

      // Initialize popovers
      const popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
      });
    }
  }

  // Wait for DOM and scripts to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOM already ready, but wait a bit for scripts
    setTimeout(init, 100);
  }
})();
