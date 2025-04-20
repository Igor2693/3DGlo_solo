'use strict'

const tabs = () => {
    const header = document.querySelector('.service-header')
const tabs = document.querySelectorAll('.service-header-tab')
const serviceTab = document.querySelectorAll('.service-tab')


header.addEventListener('click', (e) => {
    if(e.target.closest('.service-header-tab')) {
        tabs.forEach(function(tab, index) {
            const allTab = e.target.closest('.service-header-tab') 
            if(tab === allTab) {
                tab.classList.add('active')
                serviceTab[index].classList.remove('d-none')

            } else {
                tab.classList.remove('active')
                serviceTab[index].classList.add('d-none')
            }
        })
    }
})

}

export default tabs