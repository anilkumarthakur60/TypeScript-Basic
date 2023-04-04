//utility types

//partials


console.log('-----------fifth started ');


interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
        ...assign,
        ...propsToUpdate
    }
}



const assign1: Assignment = {
    studentId: '123',
    title: 'Math',
    grade: 100
}


console.log(updateAssignment(assign1, {
    grade: 90,
    verified: true

}));


const assignGraded: Assignment = updateAssignment(assign1, {
    grade: 95,
})


console.log(assignGraded);



console.log('------------finish fifthe');
