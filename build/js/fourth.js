"use strict";
console.log('---------fourth.ts file start utility function ');
const echo = (arg) => arg;
echo(12);
console.log('--------a');
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj({}));
console.log('--------aa');
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false
        };
    }
    return {
        arg,
        is: !!arg
    };
};
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
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            value: arg,
            is: false
        };
    }
    return {
        value: arg,
        is: !!arg
    };
};
console.log('--------aaaa');
const processUser = (user) => {
    return user;
};
console.log(processUser({
    id: 1,
    name: 'Anil'
}));
// console.log(processUser({
//     name: 'Anil'
// }));
console.log('--------aaaas');
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log('--------', getUserProperty(users, "father"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const state = new StateObject('dsaf');
console.log('----------a-------', state.state);
const myState = new StateObject([true]);
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
]);
console.log('----------b-------', state.state);
console.log('--------b');
