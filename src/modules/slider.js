'use strict'

const slider = () => {
    const blockSlider = document.querySelector('.portfolio-content')
const portfolioItem = document.querySelectorAll('.portfolio-item')
let blockDots = document.querySelector('.portfolio-dots')
let dots 
let idIntervall

let count = 0

const dotsList = () => {

    for(let i = 0; i < portfolioItem.length; i++) {
        const newDot = document.createElement('li')
        newDot.classList.add('dot')
        blockDots.append(newDot)
        dots = document.querySelectorAll('.dot')
        dots[0].classList.add('dot-active')
    }  
}
dotsList()

const auto = () => {
    portfolioItem[count].classList.remove('portfolio-item-active')
    dots[count].classList.remove('dot-active')
    count++
    if(count >= portfolioItem.length) {
        count = 0
    }
    portfolioItem[count].classList.add('portfolio-item-active')
    dots[count].classList.add('dot-active')
}
idIntervall = setInterval(auto, 3000)


blockSlider.addEventListener('click', (e) => {
    e.preventDefault()

    portfolioItem[count].classList.remove('portfolio-item-active')
    dots[count].classList.remove('dot-active')

    if(e.target.matches('#arrow-right')) {
        count++
        if(count >= portfolioItem.length) {
            count = 0
        }
    }
    if(e.target.matches('#arrow-left')) {
        count--
        if(count < 0) {
            count = portfolioItem.length - 1
        }
    }
    if(e.target.classList.contains('dot')) {
        dots.forEach(function(item, index) {
            if (e.target === item) {
                count = index
            }
            
        })
    }

    portfolioItem[count].classList.add('portfolio-item-active')
    dots[count].classList.add('dot-active')
    
    
})


blockSlider.addEventListener('mouseover', (e) => {
    if(e.target.matches('.next, .prev, .dot')) {
        clearInterval(idIntervall)   
    }    
})
blockSlider.addEventListener('mouseout', (e) => {
    if(e.target.matches('.next, .prev, .dot')) {
        idIntervall = setInterval(auto, 3000)
        
    }
    
})


}

export default slider