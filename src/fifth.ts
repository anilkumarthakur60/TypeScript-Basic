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


const recordAssignment = (assign: Required<Assignment>): Assignment => {

    return assign
}


const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true
}

// assignVerified.grade = 99;


recordAssignment({ ...assignGraded, verified: true })



const hexColorMap: Record<string, string> = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
}

console.log(hexColorMap.red);

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrade: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "B"
}

interface Grades {
    assign1: number
    assign2: number
}

const studentGrades: Record<Students, Grades> = {
    Sara: {
        assign1: 100,
        assign2: 100
    },
    Kelly: {
        assign1: 90,
        assign2: 90
    }
}


//Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">


const score: AssignResult = {
    studentId: '123',
    grade: 100
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: '123',
    title: 'Math',
}


type adjustedGrade = Exclude<LetterGrades, "U">


type highGrades = Extract<LetterGrades, "A" | "B">

type AllPossibleGrade = "Dave" | "John" | null | undefined

type NameOnly = NonNullable<AllPossibleGrade>

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


const createNewAssign = (title: string, point: number) => {

    return {
        title,
        point
    }
}

type NewAssignss = ReturnType<typeof createNewAssign>

console.log('----------logging data----------', createNewAssign('jkdgfs', 23))

//parameters

type AssignParameters = Parameters<typeof createNewAssign>


const assignArgs: AssignParameters = ["generic", 100];

const tsAssign2: NewAssignss = createNewAssign(...assignArgs);
console.log('----------logging data------tsAssign2----', tsAssign2)


console.log('------------finish fifthe');


