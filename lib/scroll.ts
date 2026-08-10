import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("lenis:ready"));
  }
}

export function getLenisInstance() {
  return lenisInstance;
}

export function getScrollY() {
  return lenisInstance?.scroll ?? window.scrollY ?? document.documentElement.scrollTop;
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, {
      force: true,
      lock: true,
      onComplete: () => {
        window.dispatchEvent(new Event("scroll"));
      },
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

export function scrollToSection(hash: string) {
  const id = hash.replace("#", "");
  if (!id || id === "home") {
    scrollToTop();
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset: -88,
      force: true,
    });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
