export function renderLanguages(container, languagesList) {
  container.innerHTML = `
    <h4>Languages</h4>
    <div class="language-grid">
      ${languagesList
        .map((lang, idx) => {
          const savedLevel = localStorage.getItem(`languageLevel${idx + 1}`)
          const level = savedLevel !== null ? savedLevel : lang.level
          return `
          <div class="language" contenteditable="true" id="language${
            idx + 1
          }">${lang.name}</div>
          <div class="bar" style="position: relative;">
            <div class="fill" id="fill${
              idx + 1
            }" style="width: ${level}%"></div>
            <input type="range" min="0" max="100" value="${level}" id="range${
            idx + 1
          }" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;">
          </div>
        `
        })
        .join("")}
    </div>
  `

  languagesList.forEach((lang, idx) => {
    const range = container.querySelector(`#range${idx + 1}`)
    const fill = container.querySelector(`#fill${idx + 1}`)
    if (range && fill) {
      range.addEventListener("input", (e) => {
        fill.style.width = `${e.target.value}%`
        localStorage.setItem(`languageLevel${idx + 1}`, e.target.value)
      })
    }
  })
}
