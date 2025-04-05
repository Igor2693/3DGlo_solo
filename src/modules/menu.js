'use strict'

const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const links = menu.querySelectorAll('ul > li > a')


    const menuActive = () => {
        if (!menu.style.transform) {
            document.body.style.overflow = 'hidden'
            menu.style.transform = `translateX(50%)`
        } else {
            menu.style.transform = ''
            document.body.style.overflow = ''
        }
    }

    menuBtn.addEventListener('click', menuActive)

    closeBtn.addEventListener('click', menuActive)

    links.forEach(function (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            if (!menu.style.transform) {
                document.body.style.overflow = 'hidden'
                menu.style.transform = `translateX(50%)`
            } else {
                menu.style.transform = ''
                document.body.style.overflow = ''
            }
            const block = event.target.getAttribute('href').substr(1)

            document.getElementById(block).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

        })

    })
}

export default menu