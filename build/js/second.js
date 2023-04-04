"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello i am  ${this.age}`;
    }
}
const Anil = new Coder('Anil', 'Rock', 30);
// console.log(Anil.getAge);
// console.log(Anil.lang);
// console.log(Anil.name);
// console.log(Anil.age);
class WebDeb extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello i am lang file   ${this.lang}`;
    }
}
const Sara = new WebDeb('Mac', 'Sara', 'Rock', 30);
class HelloGuitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} on ${this.instrument}`;
    }
}
const Page = new HelloGuitarist('Jimmy Page', 'Guitar');
console.log(Page.play('New page '));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
        // console.log(this.id);
        // this.id = Peeps.count;
        // console.log(this.id);
    }
}
Peeps.count = 0;
const Anils = new Peeps('Anil');
const Saras = new Peeps('Sara');
const John = new Peeps('John');
console.log(Peeps.count);
console.log(Saras.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Params is ');
    }
}
const MyBand = new Bands();
MyBand.data = ['Anil', 'Sara', 'John'];
console.log(MyBand.data);
MyBand.data = [...MyBand.data, 'kjkj'];
console.log(MyBand.data);
MyBand.data = ['kajskajs', '897435'];
console.log(MyBand.data);
