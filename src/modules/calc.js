'use strict'

const calc = () => {
    'use strict'

    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    const price = 100


    const calculation = () => {
        let calcCountValue = 1
        let calcDayValue = 1
        if (calcCount.value > 1) {
            calcCountValue = +calcCount.value + (+calcCount.value / 10)
            console.log(calcCountValue);

        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const result = calcTypeValue * price * calcSquare.value * calcCountValue * calcDayValue
        total.textContent = result

    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            calculation()
        }

    })


}

export default calc