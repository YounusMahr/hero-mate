// Header interactions: mobile menu toggle
;(() => {
  function qs(sel, root = document) {
    return root.querySelector(sel)
  }
  function qsa(sel, root = document) {
    return Array.from(root.querySelectorAll(sel))
  }

  function initHeader() {
    const header = qs(".c-header")
    if (!header) return

    const toggleBtn = header.querySelector(".c-header__toggle")
    const drawer = qs("#mobile-menu")

    if (!toggleBtn || !drawer) return

    function open() {
      toggleBtn.setAttribute("aria-expanded", "true")
      drawer.hidden = false
      drawer.setAttribute("aria-hidden", "false")
      document.body.style.overflow = "hidden"
    }
    function close() {
      toggleBtn.setAttribute("aria-expanded", "false")
      drawer.setAttribute("aria-hidden", "true")
      drawer.hidden = true
      document.body.style.overflow = ""
    }
    function toggle() {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true"
      expanded ? close() : open()
    }

    toggleBtn.addEventListener("click", toggle)
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) close()
    })

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close()
    })

    // Close on resize to desktop
    let lastIsDesktop = window.matchMedia("(min-width: 1024px)").matches
    window.addEventListener("resize", () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches
      if (isDesktop && !lastIsDesktop) close()
      lastIsDesktop = isDesktop
    })

    // Optional: set focus styles for keyboard nav on links
    qsa(".link, .pill, .btn", header).forEach((el) => {
      el.addEventListener("focus", () => el.classList.add("is-focus"))
      el.addEventListener("blur", () => el.classList.remove("is-focus"))
    })
  }

  // Wait until include loader finishes injecting header.html
  document.addEventListener("DOMContentLoaded", () => {
    // Slight delay to ensure header.html is placed by include.js
    setTimeout(initHeader, 0)
  })
})()
