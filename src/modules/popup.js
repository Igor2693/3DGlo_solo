'use strict'

const popup = () => {
    const links = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')

    const media = window.matchMedia('(min-width: 768px)')
    console.log(media);




    let count = 0
    let idAnimation

    if (media.matches) {
        links.forEach(function (item) {
            item.addEventListener('click', () => {

                const modalOn = () => {
                    count++
                    idAnimation = requestAnimationFrame(modalOn)
                    console.log(count);
                    modal.style.display = 'block'

                    if (count < 100) {
                        modal.style.opacity = count * 2 + '%'
                        console.log(count);

                    } else {
                        cancelAnimationFrame(idAnimation)
                    }
                }
                modalOn()
            })
        })


        closeBtn.addEventListener('click', () => {


            const modalOff = () => {
                count--
                idAnimation = requestAnimationFrame(modalOff)
                console.log(count);


                if (count > 0) {
                    modal.style.opacity = count + '%'
                    console.log(count);

                } else {
                    cancelAnimationFrame(idAnimation)
                    modal.style.display = 'none'

                }
            }
            modalOff()

        })


    } else {
        links.forEach(function (btn) {
            btn.addEventListener('click', () => {
                if (modal.style.display = 'none') {
                    modal.style.display = 'block'
                }
            })

        })

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        })


    }

    // links.forEach(function (item) {
    //     item.addEventListener('click', () => {

    //         const modalOn = () => {
    //             count++
    //             idAnimation = requestAnimationFrame(modalOn)
    //             console.log(count);
    //             modal.style.display = 'block'

    //             if (count < 100) {
    //                 modal.style.opacity = count * 2 + '%'
    //                 console.log(count);

    //             } else {
    //                 cancelAnimationFrame(idAnimation)
    //             }
    //         }
    //         modalOn()
    //     })
    // })

    // closeBtn.addEventListener('click', () => {


    //     const modalOff = () => {
    //         count--
    //         idAnimation = requestAnimationFrame(modalOff)
    //         console.log(count);


    //         if (count > 0) {
    //             modal.style.opacity = count + '%'
    //             console.log(count);

    //         } else {
    //             cancelAnimationFrame(idAnimation)
    //             modal.style.display = 'none'

    //         }
    //     }
    //     modalOff()



    //     // modal.style.display = 'none'
    // })


}

export default popup