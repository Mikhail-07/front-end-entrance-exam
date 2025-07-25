export function attachRippleEffect(element) {
  element.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    ripple.classList.add("ripple-effect")
    this.appendChild(ripple)
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x - size / 2}px`
    ripple.style.top = `${y - size / 2}px`
    ripple.addEventListener("animationend", () => ripple.remove())
  })
}
