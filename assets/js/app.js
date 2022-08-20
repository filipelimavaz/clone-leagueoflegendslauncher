const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login__button')

const handleFocus = (event) => {
    const span = event.target.previousElementSibling
    span.classList.add('span-active')
}

const handleFocusOut = (event) => {
    const span = event.target.previousElementSibling
    if(event.target.value === ''){
        span.classList.remove('span-active')
    }
}

const handleChange = () => {
    const [username, password] = inputs;
    if(username.value && password.value.length >= 8) {
        button.removeAttribute('disabled')
        button.children[0].src='./assets/images/right-arrow-white.png'
    } else {
        button.children[0].src='./assets/images/right-arrow-grey.png'
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus)
})

inputs.forEach((input) => {
    input.addEventListener('focusout', handleFocusOut)
})

inputs.forEach((input) => {
    input.addEventListener('input', handleChange)
})