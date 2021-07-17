window.addEventListener('load', handlePlan)
const content = document.querySelector('#container .plan-type')

function handlePlan () {
  if(localStorage.planType) {
    let text = localStorage.planType.toString()
    createLine(text)
  } else {
    setTimeout(() => {
      window.location.assign('../index.html')
    }, 500)
  }

  handleSubmit()
}

function createLine(text) {
  let line = document.createElement('p')
  let textLine = document.createTextNode('Plano ' + text)

  line.appendChild(textLine)
  content.appendChild(line);
}

function handleSubmit() {
  const form = document.forms.checkout

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    alert('Sua compra está sendo processada. Em breve enviaremos informações por email ;)')
  })
}