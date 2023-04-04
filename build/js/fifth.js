"use strict";
//utility types
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
    title: 'Math'
};
console.log('------------finish fifthe');
