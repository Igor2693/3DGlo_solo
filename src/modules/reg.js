'use strict'

const reg = () => {
    const inputItem = document.querySelectorAll('input.calc-item')
const selectItem = document.querySelector('select.calc-item')

const formName = document.querySelectorAll('[name=user_name]')
const formEmail = document.querySelectorAll('[name=user_email]')
const formPhone = document.querySelectorAll('[name=user_phone]')

inputItem.forEach(function(item) {
    item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '')
    })
})

selectItem.addEventListener('input', () => {
    console.log(selectItem.options[selectItem.selectedIndex].textContent);
})

formName.forEach(function(name){
    name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, '')
    })
})
formEmail.forEach(function(email){
    email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w\d\@\-\_\.\!\~\*\']/gi, '')
    })
})
formPhone.forEach(function(phone){
    phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, '')
    })
})

    
}

export default reg