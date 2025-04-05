'use strict'

const scroll = () => {

    const scrollLink = document.getElementById('scroll_link')


    scrollLink.addEventListener('click', (event) => {
        event.preventDefault()

        const block = event.target.getAttribute('href').substr(1)

        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })



    // const scrollImg = document.querySelector('.img_scroll')
    // let count = 0
    // let idAnimation

    // попытка через requestAnimationFrame

    // const animationScroll = () => {
    //     count++
    //     idAnimation = requestAnimationFrame(animationScroll)

    //     if (document.documentElement.scrollTop <= 776) {

    //         document.documentElement.scrollTop = (count * 10)
    //     } else {
    //         cancelAnimationFrame(idAnimation)
    //         count = 0

    //     }

    // }

    // Через scrollTo

    // scrollImg.addEventListener('click', () => {
    //     // animationScroll()
    //     window.scrollTo({
    //         top: 776,
    //         left: 0,
    //         behavior: "smooth"
    //     })


    // })



}

export default scroll