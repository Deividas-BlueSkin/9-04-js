
function dayConvert(days, format) {
    let num
    if (format == 'min') { num = days * 24 * 60 }
    if (format == 'hour') { num = days * 24 }
    if (format == 'week') { Math.floor(num = days / 7) }
    if (format == 'month') { Math.floor(mun = days / 30.4) }
    if (format == 'year') { Math.floor(num = days / 365) }
    return `${days} days --> ${num} ${format}s`
}

console.log(dayConvert(50, 'min'))

function checkFraction(num1, num2) {
    let output
    let liek = num1 % num2
    if (liek == 0) { output = `${num1} dalijas is ${num2}` }
    else { output = `${num1} nesidalija is ${num2}, liekana ${liek}` }
    return output
}

console.log(checkFraction(13, 10))

function checkText(text = 'text') {
    let por = (text.length % 2 == 0)
    return por
}

console.log(checkText('bingCho'))

function pickChar(text, num) {
    let length = text.length
    if (length >= Math.abs(num) && num != 0) {
        if (num < 0) { num = Length + num +1}
        char = text[num - 1]
        return `${text} ${num} character is ${char}`
    }
    else {
        return `ERROR: ${text} has ${Length} symbols, your number is too big or is 0`
    }
}

console.log(pickChar('LihmanTodle', -8))
