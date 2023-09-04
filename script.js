
let lord = 'gu'
let element = 'necro'
let item = `gummy`

let size = 98
let und = true

console.group()

console.log(lord + ' ' + element)

size = size * 10

console.log(item, typeof item)


console.log(`${lord}` + ' ' + element)

console.log(`1 \`1\` 1`)

let logu = 'poupuoupoupuoupuoupuoupoupuoupuoupoupuoupouup'

console.log(logu.length)
console.log(logu[5])
console.log(logu)
console.log(logu.toLocaleUpperCase())

console.groupEnd()

console.group('Math PEPPER')

let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

console.log(num1 + num3)




console.groupEnd()

console.group('fuufu')

console.log(1 == 1)
console.log('1' == 1)
console.log('10' == 10)
console.log('10' != 10)
console.log('10' === 10)
console.log('10' !== 10)
console.log('1' > 10)
console.log('1' < 10)
console.log('1' >= 10)
console.log('1' <= 10)


let originLight = 'green'
let light = originLight.toLocaleLowerCase()

let action = true
if (light === 'green'){
    action = true
    console.log('action ' + action)
}
else if (light === 'red'){
    action = true
    console.log('die action' + action)
}
else{
    action = false
    console.log('action ' + action)
}

let word = 'bubble'
if (word[0] === 't'){}
else{}

console.groupEnd()
