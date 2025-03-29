'use strict'

let dateNow = new Date()
let hourNow = dateNow.getHours()
let daysNow = dateNow.getDay()
let arrDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dateNow.getDay()]
console.log(arrDay);
// console.log(arrDay[dateNow - 1]);

console.log(daysNow);

if (hourNow > 18 && hourNow <= 22) {
    console.log('Добрый вечер');
} else if (hourNow > 22 && hourNow <= 5) {
    console.log('Доброй ночи');
} else if (hourNow > 5 && hourNow < 8) {
    console.log('Доброе утро');
} else if (hourNow > 8 && hourNow <= 18) {
    console.log('Добрый день');
} else {
    console.log('я диспетчер');

}

if (daysNow === 1) {
    console.log('Понедельник');
} else if (daysNow === 2) {
    console.log('Вторник');
} else if (daysNow === 3) {
    console.log('Среда');
} else if (daysNow === 4) {
    console.log('Четверг');
} else if (daysNow === 5) {
    console.log('Пятница');
} else if (daysNow === 6) {
    console.log('Суббота');
} else if (daysNow === 0) {
    console.log('Воскресенье');
} else {
    console.log('Другого дня нет');
}



console.log('Текущее время: ' + dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds());

let newYear = new Date('31 december 2025').getTime()
console.log(newYear);

let howToNewYear = (newYear - dateNow) / 1000

let daysToNewYear = Math.floor(howToNewYear / 60 / 60 / 24)

console.log(`Дней до нового года: ${daysToNewYear}`);
