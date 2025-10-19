// Simple HTML partial include loader
// Looks for elements with data-include and replaces with fetched HTML.
document.addEventListener("DOMContentLoaded", async () => {
  const includeTargets = Array.from(document.querySelectorAll("[data-include]"))

  await Promise.all(
    includeTargets.map(async (el) => {
      const url = el.getAttribute("data-include")
      if (!url) return
      try {
        const res = await fetch(url, { cache: "no-cache" })
        const html = await res.text()
        el.outerHTML = html
      } catch (err) {
        console.error("[v0] Failed to include:", url, err)
      }
    }),
  )
})
