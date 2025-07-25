const altMap = {
  figma: "Figma logo",
  creativecloud: "Adobe Creative Cloud logo",
  miro: "Miro logo",
  notion: "Notion logo",
  meet: "Google Meet logo",
  analytics: "Analytics logo",
  zapier: "Zapier logo",
  webflow: "Webflow logo",
  framer: "Framer logo",
  wordpress: "WordPress logo",
  chatgpt: "ChatGPT logo",
  copilot: "GitHub Copilot logo",
  midjourney: "Midjourney logo",
}

export function renderTools(container, toolsList) {
  container.innerHTML = `
    <h3>Tools</h3>
    ${toolsList
      .map(
        (category) => `
      <div class="tools-block">
        <span class="tools-title">${category.title}</span>
        ${category.icons
          .map(
            (icon) =>
              `<img class="icon" src="${icon.src}" alt="${
                altMap[icon.alt] || icon.alt
              }">`
          )
          .join("")}
      </div>
    `
      )
      .join("")}
  `
}
