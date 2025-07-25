import { downloadPDF } from "./downloadButton.js"
import { renderEducation } from "./Education.js"
import { renderExperience } from "./Experience.js"
import { renderLanguages } from "./Languages.js"
import { renderInterests } from "./Interests.js"
import { renderTools } from "./Tools.js"
import { attachRippleEffect } from "../utils/ripple.js"
import { saveOnBlur, loadFromLocalStorage } from "../utils/storage.js"

document
  .querySelector("#downloadResume")
  .addEventListener("click", () => downloadPDF())

const educationList = [
  {
    years: "2024",
    position: "UX/UI",
    tags: [
      "#ux",
      "#ui",
      "#research",
      "#designSystem",
      "#Agile",
      "#wireframing",
      "#figma",
    ],
    institute: "Neoland",
  },
  {
    years: "2022",
    position: "Product designer",
    tags: ["#analytics", "#research", "#prototype", "#wireframes"],
    institute: "Coursera",
  },
  {
    years: "2017-2021",
    position: "Graphic design",
    tags: ["#branding", "#illustration", "#web", "#adobe"],
    institute: "Cali Institute of the Arts",
  },
]

const experienceList = [
  {
    date: "Jul. 2023 - Aug. 2023",
    title: "Senior Graphic Designer",
    company: 'Pinnacle <span class="separator">|</span> Full-time',
    descriptions: [
      "Research and brainstorm various design ideas for content and marketing.",
      "Review the work submitted by Junior Designers and sharing feedback.",
    ],
  },
  {
    date: "Jan. 2023 - Jul. 2023",
    title: "Graphic Web designer",
    company: 'Double Square <span class="separator">|</span> Full-time',
    descriptions: [
      "Development of internal projects from scratch, product design of brands.",
      "Landing page, webapps and hybrid apps",
      "Taking decisions with stakeholders for the future of products such as Beagle labs, Pinnacle, etc.",
    ],
  },
  {
    date: "Feb. 2021 - Jan. 2023",
    title: "Graphic Designer",
    company: "Freelance",
    descriptions: [
      "Visual design for Events, Brands and Products.",
      "Product design, Packaging Design",
      "Logo Design",
    ],
  },
]

const languagesList = [
  { name: "English", level: 100 },
  { name: "Spanish", level: 70 },
  { name: "French", level: 60 },
]

const interestsList = [
  "branding",
  "brand identity",
  "logo",
  "typography",
  "photography",
  "designing",
  "poster design",
  "research",
  "social networks",
  "illustration",
]

const toolsList = [
  {
    title: "design",
    icons: [
      { src: "/figma.svg", alt: "figma" },
      { src: "/creativecloud.svg", alt: "creativecloud" },
      { src: "/miro.svg", alt: "miro" },
      { src: "/notion.svg", alt: "notion" },
      { src: "/meet.svg", alt: "meet" },
      { src: "/analytics.svg", alt: "analytics" },
    ],
  },
  {
    title: "no-code",
    icons: [
      { src: "/zapier.svg", alt: "zapier" },
      { src: "/webflow.svg", alt: "webflow" },
      { src: "/framer.svg", alt: "framer" },
      { src: "/wordpress.svg", alt: "wordpress" },
    ],
  },
  {
    title: "artificial intelligence",
    icons: [
      { src: "/chatgpt.svg", alt: "chatgpt" },
      { src: "/copilot.svg", alt: "copilot" },
      { src: "/midjourney.svg", alt: "midjourney" },
    ],
  },
]

window.addEventListener("DOMContentLoaded", () => {
  const educationContainer = document.getElementById("education-block")
  if (educationContainer) {
    renderEducation(educationContainer, educationList)
  }
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    saveOnBlur(element)
    attachRippleEffect(element)
  })
  loadFromLocalStorage()
  const experienceContainer = document.getElementById("experience-block")
  if (experienceContainer) {
    renderExperience(experienceContainer, experienceList)
  }
  const languagesContainer = document.getElementById("languages-block")
  if (languagesContainer) {
    renderLanguages(languagesContainer, languagesList)
  }
  const interestsContainer = document.getElementById("interests-block")
  if (interestsContainer) {
    renderInterests(interestsContainer, interestsList)
  }
  const toolsContainer = document.getElementById("tools-block")
  if (toolsContainer) {
    renderTools(toolsContainer, toolsList)
  }
})
