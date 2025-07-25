export function renderExperience(container, experienceList) {
  container.innerHTML = `
    <h3>Experience</h3>
    <div class="experience-grid">
      ${experienceList
        .map(
          (job, idx) => `
        <div class="card flex-col gap-1 job${idx === 0 ? " accent-bg" : ""}">
          <div class="date" contenteditable="true" id="date${idx + 1}">${
            job.date
          }</div>
          <div class="content">
            <div>
              <h4 contenteditable="true" id="job${idx + 1}">${job.title}</h4>
              <p contenteditable="true" id="company${idx + 1}">${
            job.company
          }</p>
            </div>
            <ul>
              ${job.descriptions
                .map(
                  (desc, dIdx) =>
                    `<li contenteditable="true" id="job${idx + 1}description${
                      dIdx + 1
                    }">${desc}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `
}
