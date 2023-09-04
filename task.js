// let age = prompt('type age')

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// Password
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

console.group('pass')
let pass = '11111111111111111100000001123'

if (pass.length < 16) {
    console.log('short')
}
if (pass.length > 15) {


    if (pass.length > 20) {
        console.log('perfec')
    }
    if (pass.length < 20) {
        console.log('Hmm, I prefer longer')
    }
    if (!pass.includes('#')) {
        console.log('you forgot octothorpe')
    }


}

console.groupEnd()
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// Age
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
console.group('skull')

let age = 0
// let age = prompt('type you chronological age')

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


console.groupEnd()

console.group('game')

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 1
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

let q11 = 'where'
let q12 = 'who'
let a11 = 'blo'
let a12 = 'who'

let points1 = 0
if (q11 == a11) { points1++; console.log('1 is good') } else { console.log('1 is bad') }
if (q12 == a12) { points1++; console.log('2 is good') } else { console.log('2 is bad') }
if (points1 >= 1) { console.log('pass lvl 1') }

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 2
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

let q21 = 'when'
let q22 = 'whom'
let a21 = 'when'
let a22 = 'whom'

let points2 = 0
if (q21 == a21) { points2++; console.log('1 is good') } else { console.log('1 is bad') }
if (q22 == a22) { points2++; console.log('2 is good') } else { console.log('2 is bad') }
if (points2 >= 2) { console.log('pass lvl 2') }

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// lvl 3 
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

let q31 = 'bloom'
let q32 = 'seed'
let q33 = 'feed'
let a31 = 'blood'
let a32 = 'seed'
let a33 = 'feed'

let points3 = 0
if (q31 == a31) { points3++; console.log('1 is good') } else { console.log('1 is bad') }
if (q32 == a32) { points3++; console.log('2 is good') } else { console.log('2 is bad') }
if (q33 == a33) { points3++; console.log('3 is good') } else { console.log('3 is bad') }
if (points3 >= 2) { console.log('pass lvl 3') }

console.groupEnd()

console.group('Guten Tag')

let online = true
let name = "Warlock"
let time = 23
let originDay = true

if(online){
    if(time <=12 && time >=5){console.log('mornin')}
    if(time <=18 && time >=13){console.log('afernoon')}
    if(time <=23 && time >=19 || time <=4 && time >=0){console.log('eve')}
    if(originDay){console.log('bloody origin dear say, from the breeding pit oth come!!!')}
}


console.groupEnd




