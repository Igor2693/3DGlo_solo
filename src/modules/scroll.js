'use strict'

const scroll = () => {
    const scrollImg = document.querySelector('.img_scroll')
    let count = 0
    let idAnimation


    const animationScroll = () => {
        count++
        idAnimation = requestAnimationFrame(animationScroll)
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop <= 776) {
            console.log(document.documentElement.scrollTop);
            document.documentElement.scrollTop = (count * 10)
        } else {
            cancelAnimationFrame(idAnimation)
            count = 0
            console.log(document.documentElement.scrollTop);
        }
        console.log(document.documentElement.scrollTop);


    }

    scrollImg.addEventListener('click', () => {
        animationScroll()


    })



}

export default scroll