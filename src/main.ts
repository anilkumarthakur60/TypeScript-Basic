type Guitarist = {
    name: string,
    active?: boolean,
    album: (string | number)[]
}
interface Guitarists {
    name: string,
    active?: boolean,
    album: (string | number)[]
}


let evh: Guitarist = {
    name: 'Eddie Van Halen',
    album: [263, 32, 'jasdj']
}

let jp: Guitarist = {
    name: 'Jimi Hendrix',
    album: ['Are You Experienced', 'Axis: Bold as Love', 'Electric Ladyland']
}

const greetGuitarist = (guitarist: {
    name: string,
    active?: boolean,
    album: (string | number)[]
}) => {
    console.log(`Hello ${guitarist.name}`)
}


const greetGuitarists = (guitarist: Guitarists) => {
    console.log(`Hellos ${guitarist.name}`)
}


const createError = (errorMsg: string): never => {
    throw new Error(errorMsg)
}


const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}



const numberOrString = (value: number | string): string => {
    console.log(value);

    if (typeof value === 'string') return 'string'
    // if (typeof value === 'number') return 'number'
    if (isNumber(value)) return 'number'
    return createError('invalid type')
}


greetGuitarist(evh)
greetGuitarists(jp)
console.log(numberOrString(12));


type One = string
type Two = number | string
type Three = 'hello' //lateral type


let a: One = 'hello' //lateral type
let b = a as Two
let c = a as Three


let d = <One>'world'
let e = <string | number>'world'
// console.log(e);


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string //assertion

let myVal1: number = addOrConcat(2, 2, 'concat') as number //assertion
console.log(myVal1);


(10 as unknown) as string

let subtract = (a: number, n: number): number => {

    return a + n;
}
console.log(subtract(1, 3));


type mathFunction = (a: number, b: number) => number

let multiplys: mathFunction = function (c, d) {
    return c * d
}


const add = (a: number, b: number): number => {
    return a + b
}
const substract = (a: number, b: number): number => {
    return a - b
}
const multiply = (a: number, b: number): number => {
    return a * b
}
const divide = (a: number, b: number): number => {
    return a / b
}

const calculate = (a: number, b: number, operation: string): number => {
    switch (operation) {
        case 'add':
            return add(a, b)
        case 'substract':
            return substract(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'divide':
            return divide(a, b)
        default:
            throw new Error('operation not supported')
    }
}

console.log(calculate(5, 10, 'add'));

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
console.log(total(1, 2, 3, 5, 6, 7));



const myImg = document.querySelector('#myId')!

const img = document.querySelector('img') as HTMLImageElement

const nextImage = <HTMLImageElement>document.querySelector('img')


const myImg1 = document.querySelector('#myId') as HTMLImageElement

img.src
myImg1.src