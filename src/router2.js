window.addEventListener('load', checkoutButton)

function checkoutButton() {
  let checkoutButton = document.querySelector('#return #btn')

  let buttonsElements = []
  buttonsElements.push(checkoutButton)

  buttonsElements.map(element => {
    handleRouter(element)
  })
}

function handleRouter(element) {
  element.addEventListener('click', () => {
    window.location.assign('./index.html')
    localStorage.planType = element.value
  })
}
