export function renderEducation(container, educationList) {
  container.innerHTML = `
    <h4>Education</h4>
    <div class="expertise-grid">
      ${educationList
        .map(
          (edu, idx) => `
        <div class="card flex-col gap-1 expertise${
          idx === 0 ? " accent-bg" : ""
        }">
          <div class="years" contenteditable="true" id="years${idx + 1}">${
            edu.years
          }</div>
          <div class="position" contenteditable="true" id="position${
            idx + 1
          }">${edu.position}</div>
          <div class="tags" contenteditable="true" id="tags${idx + 1}">
            ${edu.tags.map((tag) => `<span>${tag}</span>`).join(" ")}
          </div>
          <div class="institute" contenteditable="true" id="institute${
            idx + 1
          }">${edu.institute}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `
}
