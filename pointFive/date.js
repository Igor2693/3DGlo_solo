'use strict'


let air = document.getElementById('animation')
const start = document.getElementById('start')
const reser = document.getElementById('reset')


let active = true
let count = 0
let idAnimation
const logger = () => {
    if (count < 500) {
        count++
        air.style.left = count * 2 + 'px'
    } else {
        cancelAnimationFrame(idAnimation)
    }
    idAnimation = requestAnimationFrame(logger)

}


start.addEventListener('click', () => {
    // active = !active
    if (active) {
        idAnimation = requestAnimationFrame(logger)
        active = false
    } else {
        cancelAnimationFrame(idAnimation)
        active = true
    }
})

reset.addEventListener('click', () => {
    air.style.left = 0 + 'px'
    count = 0
})
