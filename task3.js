function dayConvert(days, format) {
    let num
    if (format == 'min') { num = days * 24 * 60 }
    else if (format == 'hour') { num = days * 24 }
    else if (format == 'week') { Math.floor(num = days / 7) }
    else if (format == 'month') { Math.floor(mun = days / 30.4) }
    else if (format == 'year') { Math.floor(num = days / 365) }
    else { return 'ERROR: wrong format' }
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
    let fr = (text.length % 2 == 0)
    return fr
}
console.log(checkText('bingCho'))

function pickChar(text, num) {
    let length = text.length
    if (length >= Math.abs(num) && num != 0) {
        if (num < 0) { num = length + num + 1 }
        char = text[num - 1]
        return `${text} ${num} character is ${char}`
    }
    else {
        return `ERROR: ${text} has ${length} symbols, your number is too big or is 0`
    }
}
console.log(pickChar('LihmanTodle', -8))





