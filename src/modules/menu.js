'use strict'

import { log } from "neo-async"

const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const links = menu.querySelectorAll('ul>li>a')

    const actionMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = `translateX(50%)`
        } else {
            menu.style.transform = ''
        }
    }


    menuBtn.addEventListener('click', actionMenu)

    closeBtn.addEventListener('click', actionMenu)

    links.forEach(function (link) {
        link.addEventListener('click', actionMenu)
    })

}

export default menu