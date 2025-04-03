'use strict'

const scroll = () => {
    const scrollImg = document.querySelector('.img_scroll')
    let count = 0
    let idAnimation


    const animationScroll = () => {
        count++
        idAnimation = requestAnimationFrame(animationScroll)

        if (document.documentElement.scrollTop <= 776) {

            document.documentElement.scrollTop = (count * 10)
        } else {
            cancelAnimationFrame(idAnimation)
            count = 0

        }



    }

    scrollImg.addEventListener('click', () => {
        animationScroll()


    })



}

export default scroll