const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const appTag = document.querySelector("div.app")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")
const menuTag = document.querySelector("menu")

// update the pixels tag to be how far we've scrolled
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  // console.log(pixels)
  pixelsTag.innerHTML = pixels
})

// make a progress bar that track of the distance when scroll the page
// get the height of the page
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  
  const percentage = pixels / totalScrollableDistance
  
  progressTag.style.width = `${100 * percentage}%`
})

// when scroll the page, see how far down the page we've scrolled
// then for each section, check whether we've passed it and if we have...
// then updated the text in the header
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      appTag.innerHTML = section.getAttribute("data-app")
      pageTag.innerHTML = section.getAttribute("data-page")
      
      if (section.hasAttribute("data-is-light")) {
        headerTag.classList.add("black")
        menuTag.classList.add("black")
        // progressTag.classList.add("black")
      } else {
        headerTag.classList.remove("black")
        menuTag.classList.remove("black")
        // progressTag.classList.remove("black")
      }
    }
  })
})

// make parallax or movement when scroll the page, 
// move certain shape tags, based on how far they are from an anchor point which is the middle of the section
// how far should we parallax, it's a ratio of the middle distance scrolled to the middle point of the anchor
document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  
  // console.log(midViewport)
  // console.log(midSection)

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    
    const distanceToSection = midViewport - midSection
    
    const parallaxTags = section.querySelectorAll(`[data-parallax]`)
    
    // loop over each parallaxed tag
    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
})
