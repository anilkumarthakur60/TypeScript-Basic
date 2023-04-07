"use strict";
//utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//partials
console.log('-----------fifth started ');
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Math',
    grade: 100
};
console.log(updateAssignment(assign1, {
    grade: 90,
    verified: true
}));
const assignGraded = updateAssignment(assign1, {
    grade: 95,
});
console.log(assignGraded);
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 99;
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
console.log(hexColorMap.red);
const finalGrade = {
    Sara: "A",
    Kelly: "B"
};
const studentGrades = {
    Sara: {
        assign1: 100,
        assign2: 100
    },
    Kelly: {
        assign1: 90,
        assign2: 90
    }
};
const score = {
    studentId: '123',
    grade: 100
};
const preview = {
    studentId: '123',
    title: 'Math',
};
// type newAssign = {
//     title: string,
//     point: number
// }
// const createNewAssign = (title: string, point: number): newAssign => {
//     return {
//         title,
//         point
//     }
// }
// type newAssign = {
//     title: string,
//     point: number
// }
const createNewAssign = (title, point) => {
    return {
        title,
        point
    };
};
console.log('----------logging data----------', createNewAssign('jkdgfs', 23));
const assignArgs = ["generic", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log('----------logging data------tsAssign2----', tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(error => {
        if (error instanceof Error) {
            console.log('error', error.message);
        }
    }).finally(() => {
        console.log('finally');
    });
    console.log('----------logging data----------', data);
    return data;
});
fetchUser().then(users => console.log('---', users));
console.log('------------finish fifthe');
