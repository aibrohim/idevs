const projects = [
  {
    type: "Telegram-Bot",
    name: "YouTube video downloader",
    img: "https://picsum.photos/264/250?random=1"
  },
  {
    type: "Telegram-Bot",
    name: "TikTok video downloader",
    img: "https://picsum.photos/264/250?random=2"
  },
  {
    type: "e-commerce",
    name: "E-Commerce",
    img: "https://picsum.photos/264/250?random=3"
  },
  {
    type: "CRM",
    name: "WIUT intranet",
    img: "https://picsum.photos/264/250?random=4"
  },
]

const projectsWrapper = document.querySelector(".portfolio-full__list")

projects.forEach(project => {
  const projectWrapper = document.createElement("li")
  projectWrapper.className = "portfolio-full__item portfolio-item"
  const projectLink = document.createElement("a")
  projectLink.href = "single-portfolio.html"
  projectLink.className = "portfolio-item__link"

  const projectImg = document.createElement("img")
  projectImg.src = project.img
  projectImg.className = "portfolio-item__img"

  const projectContent = document.createElement("div")
  projectContent.className = "portfolio-item__wrapper"
  
  const projectTitleWrapper = document.createElement("div")
  projectTitleWrapper.className = "portfolio-item__text-wrapper"
  const projectTitle = document.createElement("h2")
  projectTitle.className = "portfolio-item__project-name"
  projectTitle.textContent = project.name
  const projectTypeWrapper = document.createElement("div")
  projectTypeWrapper.className = "portfolio-item__text-wrapper"
  const projectType = document.createElement("p")
  projectType.className = "portfolio-item__project-description"
  projectType.textContent = project.type

  // Appending all createdElements

  projectTypeWrapper.append(projectType)
  projectTitleWrapper.append(projectTitle)
  projectContent.append(projectTitleWrapper)
  projectContent.append(projectTypeWrapper)
  projectLink.append(projectImg)
  projectLink.append(projectContent)
  projectWrapper.append(projectLink)

  //  Appending createdProject to list

  projectsWrapper.append(projectWrapper)
})