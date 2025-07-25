export function renderInterests(container, interestsList) {
  container.innerHTML = `
    <h4>Interests</h4>
    <ul class="badges" contenteditable="true" id="badges">
      ${interestsList.map((interest) => `<li>${interest}</li>`).join("")}
    </ul>
  `
}
