const formEl = document.querySelector('form.login-form')

formEl.addEventListener('submit', submitForm)

function submitForm(form) {
    form.preventDefault()

    const formElements = form.currentTarget.elements

    if (formElements.email.value.length === 0) {
        showErrMsg()
        return null
    }
    if (formElements.password.value.length === 0) {
        showErrMsg()
        return null
    }
    function showErrMsg() {
        alert('All form fields must be filled in')
    }

    const formElementsValue = {
        email: formElements.email.value,
        password: formElements.password.value
    }

    console.log(formElementsValue)

    form.currentTarget.reset()
}
