console.log('---------fourth.ts file start utility function ');

const echo = <T>(arg: T): T => arg

echo(12)
console.log('--------a');

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj({}));

console.log('--------aa');


const isTrue = <T>(arg: T): {
    arg: T, is: boolean
} => {

    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        }
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {
            arg,
            is: false
        }
    }
    return {
        arg,
        is: !!arg
    }
}

console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(''));
console.log(isTrue(0));
console.log(isTrue(false));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
console.log(isTrue(Infinity));
console.log(isTrue(-Infinity));
console.log(isTrue(1));
console.log(isTrue('a'));
console.log(isTrue(true));
console.log(isTrue({ a: 1 }));
console.log('--------aaa');



interface BoolCheck<T> {
    value: T,
    is: boolean

}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {

    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        }
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {
            value: arg,
            is: false
        }
    }
    return {
        value: arg,
        is: !!arg
    }
}

console.log('--------aaaa');



interface HasId {
    id: number
}


const processUser = <T extends HasId>(user: T): T => {
    return user
}
console.log(processUser({
    id: 1,
    name: 'Anil'
}));


// console.log(processUser({
//     name: 'Anil'
// }));

console.log('--------aaaas');


const getUserProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])

}

const users = [
    {
        id: 1,
        name: 'Anil',
        age: 30,
        father: {
            name: 'Raj',
            age: 60,
            wife: {
                name: 'Sita',
                age: 55,
                sisters: {
                    name: 'Sitaa',
                    age: 552,

                }
            }
        }
    },
    {
        id: 2,
        name: 'Dave'
    },
    {
        id: 3,
        name: 'John'
    }
]

console.log('--------', getUserProperty(users, "father"))

class StateObject<T>{
    private data: T
    constructor(
        value: T
    ) {
        this.data = value
    }


    get state(): T {
        return this.data
    }
    set state(value: T) {
        this.data = value
    }


}


const state = new StateObject<string>('dsaf')

console.log('----------a-------', state.state);

const myState = new StateObject<(string | number | object | boolean)[]>([true])

console.log('---------sdf---------', myState.state);

// state.state = {
//     name: 'Dave',
//     age: 40
// }

myState.state = ([

    {
        name: 'Dave',
        age: 40,
        wife: {
            name: 'Sita',
            age: 40
        }
    },
])

console.log('----------b-------', state.state);
console.log('--------b');

