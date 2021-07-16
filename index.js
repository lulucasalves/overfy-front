window.addEventListener('load', activeToggle)

function activeToggle() {
  let menuToggle = document.querySelector('#container .menu-toggle-container')
  let menuNav = document.querySelector('#container .menu')

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    menuNav.classList.toggle('active')
  })

  disableToggle()
}

function disableToggle() {
  let linkHome = document.querySelector('#container #a-home')
  let linkDestinations = document.querySelector('#container #a-destinations')
  let linkPrices = document.querySelector('#container #a-prices')
  let linkButton = document.querySelector('#container #button')

  let links = []
  links.push(linkHome, linkDestinations, linkPrices, linkButton)

  links.map((element) => {
    eventDisable(element)
  })
}

function eventDisable(element) {
  element.addEventListener('click', () => {
    let menuToggle = document.querySelector('#container .menu-toggle-container')
    let menuNav = document.querySelector('#container .menu')

    menuToggle.classList.toggle('active')
    menuNav.classList.toggle('active')
  })
}
