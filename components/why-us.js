;(() => {
  const video = document.getElementById("aboutVideo")
  const btn = document.getElementById("aboutPlay")
  if (!video || !btn) return

  function showBtn(show) {
    btn.style.display = show ? "grid" : "none"
  }

  btn.addEventListener("click", () => {
    try {
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    } catch (e) {
      console.log("[v0] video error:", e?.message || e)
    }
  })

  video.addEventListener("play", () => showBtn(false))
  video.addEventListener("pause", () => showBtn(true))
  video.addEventListener("ended", () => showBtn(true))
})()
