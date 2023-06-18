const form = document.getElementById('formCalculoMedia')
const inputs = document.querySelectorAll('input[required]')
const messages = document.querySelectorAll('.message')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const cepRegex = /^\d{2}\d{3}[-]\d{3}$/

function setError(index) {
  inputs[index].classList.add('is-invalid')
  messages[index].style.display = 'block';
}

function removeError(index) {
  inputs[index].classList.remove('is-invalid')
  messages[index].style.display = 'none';
}

function nameValidate() {
  if (inputs[0].value.length < 3) {
    setError(0)
  } else {
    removeError(0)
  }
}

function emailValidate() {
  if (!emailRegex.test(inputs[1].value)) {
    setError(1)
  } else {
    removeError(1)
  }
}

function cepValidate() {
  if (!cepRegex.test(inputs[2].value)) {
    setError(2)
  } else {
    removeError(2)
  }
}