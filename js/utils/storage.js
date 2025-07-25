export function saveOnBlur(element) {
  element.addEventListener("blur", (event) => {
    localStorage.setItem(event.target.id, event.target.innerHTML)
  })
}

export function loadFromLocalStorage() {
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    element.innerHTML = localStorage.getItem(element.id) || element.innerHTML
  })
}
