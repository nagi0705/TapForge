// Language switching utilities for TapForge
import { type Language, languages } from "./i18n";

/**
 * Gets the current language from URL parameters and localStorage
 */
export function getCurrentLanguage(): Language {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang") as Language;
  const storedLang = localStorage.getItem("preferred-language") as Language;
  return urlLang || storedLang || "ja";
}

/**
 * Updates the language display in language switcher
 */
export function updateLanguageDisplay(lang: Language): void {
  const languageButton = document.querySelector("#language-menu-button span");
  if (languageButton) {
    languageButton.textContent = languages[lang] || "日本語";
  }

  // Update language menu active state
  const languageMenu = document.querySelector("#language-menu");
  if (languageMenu) {
    const menuItems = languageMenu.querySelectorAll("a");
    menuItems.forEach((item) => {
      const href = item.getAttribute("href");
      const langMatch = href?.match(/lang=([^&]+)/);
      if (langMatch) {
        const itemLang = langMatch[1];
        if (itemLang === lang) {
          item.classList.add(
            "bg-blue-50",
            "text-blue-700",
            "border-r-2",
            "border-blue-500",
          );
          item.classList.remove("text-gray-700", "hover:bg-gray-50");
        } else {
          item.classList.remove(
            "bg-blue-50",
            "text-blue-700",
            "border-r-2",
            "border-blue-500",
          );
          item.classList.add("text-gray-700", "hover:bg-gray-50");
        }
      }
    });
  }
}

/**
 * Updates page content with language-specific translations
 */
export function updatePageContent(
  lang: Language,
  translations: Record<string, any>,
): void {
  const t = translations[lang] || translations["ja"];

  // Update navigation menu
  const navItems = document.querySelectorAll(".nav-link");
  const navKeys = [
    "home",
    "features",
    "pricing",
    "testimonials",
    "faq",
    "contact",
  ];

  navItems.forEach((item, index) => {
    if (navKeys[index] && t.nav && t.nav[navKeys[index]]) {
      item.textContent = t.nav[navKeys[index]];

      // Update href with language parameter for home link
      if (navKeys[index] === "home") {
        const currentHref = item.getAttribute("href");
        if (currentHref === "/" || currentHref?.startsWith("/?")) {
          item.setAttribute("href", lang !== "ja" ? `/?lang=${lang}` : "/");
        }
      }
    }
  });
}

/**
 * Updates links with language parameters
 */
export function updateLinksWithLanguage(
  lang: Language,
  linkSelectors: string[],
): void {
  linkSelectors.forEach((selector) => {
    const link = document.querySelector(selector) as HTMLAnchorElement;
    if (link) {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("#")) {
        // Extract base path without language parameter
        const basePath = href.split("?")[0];
        link.href = lang !== "ja" ? `${basePath}?lang=${lang}` : basePath;
      }
    }
  });
}

/**
 * Sets up smooth scroll functionality for anchor links
 */
export function setupSmoothScroll(): void {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach((link) => {
    // Remove any existing listeners to avoid duplicates
    const newLink = link.cloneNode(true) as HTMLElement;
    link.parentNode?.replaceChild(newLink, link);

    newLink.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href",
      );
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

/**
 * DOM initialization utility that handles different ready states
 */
export function initializeOnDOMReady(callback: () => void): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }

  // Also initialize immediately as fallback
  setTimeout(callback, 0);

  // Reinitialize on page navigation for SPA
  document.addEventListener("astro:after-swap", callback);
}

/**
 * Sets up language change event listeners
 */
export function setupLanguageChangeListeners(
  updateCallback: (lang: Language) => void,
): void {
  // Listen for language change events
  window.addEventListener("languagechange", function () {
    const newLang = getCurrentLanguage();
    updateCallback(newLang);
  });

  // Listen for storage changes (when language is changed in another tab)
  window.addEventListener("storage", function (e) {
    if (e.key === "preferred-language") {
      const newLang = (e.newValue as Language) || "ja";
      updateCallback(newLang);
    }
  });
}

/**
 * Generic content updater for any element
 */
export function updateElementContent(elementId: string, content: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  }
}

/**
 * Updates multiple elements with translations
 */
export function updateMultipleElements(
  updates: Array<{ id: string; content: string }>,
): void {
  updates.forEach((update) => {
    updateElementContent(update.id, update.content);
  });
}
