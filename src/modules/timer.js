

const timer = (deadline) => {
    let hoursTimer = document.getElementById('timer-hours')
    let minutesTimer = document.getElementById('timer-minutes')
    let secondsTimer = document.getElementById('timer-seconds')
    let daysTimer = document.getElementById('timer-days')


    let idInterval
    let zero = '0'

    const logger = () => {
        let dedline = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let dateTimer = (dedline - dateNow) / 1000
        // console.log(dateTimer);

        let seconds = Math.floor(dateTimer % 60)
        let minutes = Math.floor((dateTimer / 60) % 60)
        let hours = Math.floor((dateTimer / 60 / 60) % 24)
        let days = Math.floor((dateTimer / 60 / 60 / 24))
        // console.log(days);

        return { dateTimer, days, hours, minutes, seconds }

        // secondsTimer.textContent = seconds
        // minutesTimer.textContent = minutes
        // hoursTimer.textContent = hours
        // daysTimer.textContent = days

        if (secondsTimer.textContent.length === 1) {
            secondsTimer.textContent = zero + seconds
        }
        if (minutesTimer.textContent.length === 1) {
            minutesTimer.textContent = zero + minutes
        }
        if (hoursTimer.textContent.length === 1) {
            hoursTimer.textContent = zero + hours
        }
        if (daysTimer.textContent.length === 1) {
            daysTimer.textContent = zero + days
        }

        if (dedline < dateNow) {
            clearInterval(idInterval)
            secondsTimer.textContent = '00'
            minutesTimer.textContent = '00'
            hoursTimer.textContent = '00'
        }

    }


    const countTimer = () => {
        const getTime = logger()

        secondsTimer.textContent = getTime.seconds
        minutesTimer.textContent = getTime.minutes
        hoursTimer.textContent = getTime.hours
        daysTimer.textContent = getTime.days


        if (secondsTimer.textContent.length === 1) {
            secondsTimer.textContent = '0' + getTime.seconds
        }
        if (minutesTimer.textContent.length === 1) {
            minutesTimer.textContent = '0' + getTime.minutes
        }
        if (hoursTimer.textContent.length === 1) {
            hoursTimer.textContent = '0' + getTime.hours
        }
        if (daysTimer.textContent.length === 1) {
            daysTimer.textContent = '0' + getTime.days
        }

        if (getTime.dateTimer < 0) {
            clearInterval(idInterval)
            secondsTimer.textContent = '00'
            minutesTimer.textContent = '00'
            hoursTimer.textContent = '00'
        }

        idInterval = setInterval(countTimer, 1000)
    }
    countTimer()


}


export default timer