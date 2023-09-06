
// its not 7.
function ageToDog(age) {
    let ageDog = 0
    if (age >= 1) ageDog += 15
    if (age >= 2) ageDog += 9
    if (age > 2) ageDog += (age - 2) * 5
    return 'Human age: ' + age + ' is Dog Age: ' + ageDog
}
console.log(ageToDog(8))

function book(num) {
    let days = 365
    days = Math.round(days / num) - 1
    return 'To read ' + num + ' books in a year, you need to read ' + days + ' days per book'
}

console.log(book(10))

function dayToWeek(day) {
    let week = 0
    week += Math.round(day / 7)
    return day + ' days is ' + week + ' weeks'
}

console.log(dayToWeek(68))


function dayToYear(day) {
    let year = 0
    year += Math.round(day / 365)
    return day + ' days is ' + year + ' years'
}

console.log(dayToYear(8409784123))


function yearToHour(year) {
    let hour = 0
    hour += Math.round(year * 365 * 24)
    return year + ' years is ' + hour + ' hours'
}

console.log(yearToHour(84))

function monthToHour(month) {
    let hour = 0
    hour += Math.round(month * 30.4 * 24)
    return month + ' months is ' + hour + ' hours'
}

console.log(monthToHour(11))


function monthToMin(month) {
    let hour = 0
    hour += Math.round(month * 30.4 * 24 * 60)
    return month + ' months is ' + hour + ' minutes'
}

console.log(monthToMin(8))




