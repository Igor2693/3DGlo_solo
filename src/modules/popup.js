'use strict'

const popup = () => {
    const popupBtn = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const popupClose = popup.querySelector('.popup-close')

    popupBtn.forEach(function (btn) {
        btn.addEventListener('click', () => {
            if (popup.style.display = 'none') {
                popup.style.display = 'block'
            }
        })

    })

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none'
    })


}

export default popup