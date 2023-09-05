// let age = prompt('type age')

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// Password
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

console.group('pass')

function password(pass) {

    if (pass.length < 16) {
        console.log('short')
    }
    else if (pass.length > 15) {


        if (pass.length > 20) {
            console.log('perfec')
        }
        else if (pass.length <= 20) {
            console.log('Hmm, I prefer longer')
        }
        if (!pass.includes('#')) {
            console.log('you forgot octothorpe')
        }
    }
}

console.groupEnd()
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// Age
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
console.group('skull')

// let age = prompt('type you chronological age')
function age(age) {
    if (isNaN(age)) { console.log('number is needed, you bloody pillock') }
    else if (age > 0 && age < 120) {

        if (age <= 6) {
            console.log('todler')
            if (age == 6) { console.log('neina, bet gal pirmokas?') }
        }
        else if (age <= 10) {
            console.log('brat')
            if (age == 10) { console.log('pradine?, penktoKAS?') }
        }
        else if (age <= 14) {
            console.log('GAKI')
            if (age == 14) { console.log('pradine?, devintoKAS?') }
        }
        else if (age <= 18) {
            console.log('where souse?')
            if (age == 18) { console.log('mokosi?, Cyao?') }
        }
        else { console.log('Cyao') }
    } else {
        if (age <= 0) { console.log('no bebe?') }
        if (age >= 120) { console.log('no place for you on this mortal plane, sir') }
    }
}


console.groupEnd()

console.group('game')

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 1
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

function game1(a1, a2) {
    let q1 = 'where'
    let q2 = 'who'
    let points = 0
    if (q1 == a1) { points++; console.log('1 is good') } else { console.log('1 is bad') }
    if (q2 == a2) { points++; console.log('2 is good') } else { console.log('2 is bad') }
    if (points >= 1) { console.log('pass lvl 1') }
}

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 2
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

function game2(a1, a2) {

    let q1 = 'when'
    let q2 = 'whom'

    let points = 0
    if (q1 == a1) { points++; console.log('1 is good') } else { console.log('1 is bad') }
    if (q2 == a2) { points++; console.log('2 is good') } else { console.log('2 is bad') }
    if (points >= 2) { console.log('pass lvl 2') }
}

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 3 
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-


function game3(a1, a2, a3) {

    let q1 = 'bloom'
    let q2 = 'seed'
    let q3 = 'feed'

    let points = 0
    if (q1 == a1) { points++; console.log('1 is good') } else { console.log('1 is bad') }
    if (q2 == a2) { points++; console.log('2 is good') } else { console.log('2 is bad') }
    if (q3 == a3) { points++; console.log('3 is good') } else { console.log('3 is bad') }
    if (points >= 2) { console.log('pass lvl 3') }
}

console.groupEnd()

console.group('Guten Tag')

// let online = true
// let name = "Warlock"
// let time = 23
// let originDay = true

// let greeting = 'Welcome'

// if (online) {
//     if (time <= 12 && time >= 5) { console.log('mornin') }
//     else if (time <= 18 && time > 12) { console.log('afernoon') }
//     else if (time > 18 || time < 5) { console.log('eve') }
//     if (originDay) { console.log('birthday!!!') }
// } else { console.log('Welcome') }
function greeting(online, name, time, originDay, greeting) {

    if (online) {
        if (time <= 12 && time >= 5) { greeting += ' good morning ' }
        else if (time <= 18 && time > 12) { greeting += ' good afternoon ' }
        else if (time > 18 || time < 5) { greeting += ' good eve ' }
        if (originDay) { greeting += 'and good birthday!!! ' }
    }

    console.log(name + ' ' + greeting)
}
greeting(true, 'gruut', 23, true, 'Welcome')


console.groupEnd()

function hello(name = 'unnamed', faction = 'none') {
    console.log(name + ' ' + faction)
}

hello('Go', 'Harper')



