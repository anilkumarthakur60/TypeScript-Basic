"use strict";
//index Signature 
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Jobs: number,
// }
const todayTransactions = {
    Pizza: 100,
    Books: 200,
    Jobs: 300,
    // Cars: 400,
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
todayTransactions.Pizza = 40;
console.log(todayTransactions['Dave']);
const student = {
    name: 'Anil',
    age: 30,
    GPA: 3.5,
    classes: [1, 2, 3, 4, 5]
};
// console.log(student.test);
console.log('-------');
for (const key in student) {
    console.debug(`${key}: ${student[key]}`);
}
console.log('-------------a------------');
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`);
});
console.log('-------------aaa------------');
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
console.log('-------------aaaa------------');
const monthlyIncome = {
    salary: 1000,
    bonus: 2000,
    sitehustle: 3000
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
console.log('-------------aaaa----ss--------');
