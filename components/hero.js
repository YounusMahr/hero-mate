/* basic hero interactions: handle search submit and optional smooth scroll on chevrons */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".hero__search")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const q = new FormData(form).get("q")?.toString().trim()
      if (!q) {
        form.querySelector("input")?.focus()
        return
      }
      // Replace with real navigation/integration later
      console.log("[v0] Search submitted:", q)
      alert(`Searching for: ${q}`)
    })
  }

  const chevrons = document.querySelector(".hero__chevrons")
  if (chevrons) {
    chevrons.addEventListener("click", () => {
      const next = document.querySelector(".content-placeholder")
      if (next) next.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }
})
