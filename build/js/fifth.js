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
console.log('------------finish fifthe');
