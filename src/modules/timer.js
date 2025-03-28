

const oneFunc = () => {
    let hoursTimer = document.getElementById('timer-hours')
    let minutesTimer = document.getElementById('timer-minutes')
    let secondsTimer = document.getElementById('timer-seconds')

    let idInterval
    let zero = '0'

    const logger = () => {
        let dedline = new Date('29 march 2025').getTime()
        let dateNow = new Date().getTime()
        let dateTimer = dedline - dateNow
        // console.log(dateTimer);

        let seconds = Math.floor(dateTimer / 1000 % 60)
        let minutes = Math.floor(dateTimer / 1000 / 60 % 60)
        let hours = Math.floor(dateTimer / 1000 / 60 / 60 % 60)

        secondsTimer.textContent = seconds
        minutesTimer.textContent = minutes
        hoursTimer.textContent = hours
        // console.log(hoursTimer.textContent.length);
        // console.log(secondsTimer.textContent.length);

        if (secondsTimer.textContent.length === 1) {
            secondsTimer.textContent = zero + seconds
        }
        if (minutesTimer.textContent.length === 1) {
            minutesTimer.textContent = zero + minutes
        }
        if (hoursTimer.textContent.length === 1) {
            hoursTimer.textContent = zero + hours
        }

        if (dedline < dateNow) {
            clearInterval(idInterval)
            secondsTimer.textContent = '00'
            minutesTimer.textContent = '00'
            hoursTimer.textContent = '00'
        }

    }

    idInterval = setInterval(logger, 1000)

}


export default oneFunc