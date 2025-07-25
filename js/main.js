import { downloadPDF } from "./downloadButton.js"
import { renderEducation } from "./components/Education.js"
import { renderExperience } from "./components/Experience.js"
import { renderLanguages } from "./components/Languages.js"
import { renderInterests } from "./components/Interests.js"
import { renderTools } from "./components/Tools.js"

document
  .querySelector("#downloadResume")
  .addEventListener("click", () => downloadPDF())

const handleBlur = (event) => {
  localStorage.setItem(event.target.id, event.target.innerHTML)
  event.target.classList.add("saved-flash")
  event.target.addEventListener("animationend", function handler() {
    event.target.classList.remove("saved-flash")
    event.target.removeEventListener("animationend", handler)
  })
}

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
      { src: "./public/figma.svg", alt: "figma" },
      { src: "./public/creativecloud.svg", alt: "creativecloud" },
      { src: "./public/miro.svg", alt: "miro" },
      { src: "./public/notion.svg", alt: "notion" },
      { src: "./public/meet.svg", alt: "meet" },
      { src: "./public/analytics.svg", alt: "analytics" },
    ],
  },
  {
    title: "no-code",
    icons: [
      { src: "./public/zapier.svg", alt: "zapier" },
      { src: "./public/webflow.svg", alt: "webflow" },
      { src: "./public/framer.svg", alt: "framer" },
      { src: "./public/wordpress.svg", alt: "wordpress" },
    ],
  },
  {
    title: "artificial intelligence",
    icons: [
      { src: "./public/chatgpt.svg", alt: "chatgpt" },
      { src: "./public/copilot.svg", alt: "copilot" },
      { src: "./public/midjourney.svg", alt: "midjourney" },
    ],
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const educationContainer = document.querySelector(".education")
  if (educationContainer) {
    renderEducation(educationContainer, educationList)
  }
  const experienceContainer = document.querySelector(".experience")
  if (experienceContainer) {
    renderExperience(experienceContainer, experienceList)
  }
  const languagesContainer = document.querySelector(".languages")
  if (languagesContainer) {
    renderLanguages(languagesContainer, languagesList)
  }
  const interestsContainer = document.querySelector(".interests")
  if (interestsContainer) {
    renderInterests(interestsContainer, interestsList)
  }
  const toolsContainer = document.querySelector(".tools")
  if (toolsContainer) {
    renderTools(toolsContainer, toolsList)
  }
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    element.addEventListener("blur", handleBlur)
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
  })
  const loadFromLocalStorage = () => {
    document.querySelectorAll("[contenteditable]").forEach((element) => {
      element.innerHTML = localStorage.getItem(element.id) || element.innerHTML
    })
  }
  loadFromLocalStorage()
})
