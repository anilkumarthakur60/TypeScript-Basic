//index Signature 
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Jobs: number,
// }

// interface TransactionObj {
//     readonly [index: string]: number
// }


interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Jobs: number,
}



const todayTransactions: TransactionObj = {
    Pizza: 100,
    Books: 200,
    Jobs: 300,
    // Cars: 400,
}

console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);

let prop: string = 'Pizza'
console.log(todayTransactions[prop]);


const todaysNet = (transactions: TransactionObj): number => {
    let total: number = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todayTransactions));
todayTransactions.Pizza = 40

console.log(todayTransactions['Dave']);


interface Student {
    // [index: string]: string | number | number[] | undefined
    name: string
    age: number
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: 'Anil',
    age: 30,
    GPA: 3.5,
    classes: [1, 2, 3, 4, 5]
}
// console.log(student.test);



console.log('-------');

for (const key in student) {
    console.debug(`${key}: ${student[key as keyof Student]}`);
}

console.log('-------------a------------');

Object.keys(student).map(key => {
    console.log(`${key}: ${student[key as keyof typeof student]}`);
})
console.log('-------------aaa------------');


const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`${key}: ${student[key]}`);
}

logStudentKey(student, 'name')

console.log('-------------aaaa------------');


// interface Incomes{
//     [index: string]: number

// }

type Streams = 'salary' | 'bonus' | 'sitehustle'

type Incomes = Record<Streams, number | string>  //salary can be number or string , bonus can be string or number

const monthlyIncome: Incomes = {
    salary: 1000,
    bonus: 2000,
    sitehustle: 3000
}

for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof Incomes]);
}

console.log('-------------aaaa----ss--------');
