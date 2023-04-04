class Coder {


    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }


    public getAge() {
        return `Hello i am  ${this.age}`
    }

}

const Anil = new Coder(
    'Anil',
    'Rock',
    30
)
// console.log(Anil.getAge);
// console.log(Anil.lang);
// console.log(Anil.name);
// console.log(Anil.age);


class WebDeb extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {

        return `Hello i am lang file   ${this.lang}`
    }
}


const Sara = new WebDeb(
    'Mac',
    'Sara',
    'Rock',
    30
)

// console.log(Sara.getLang());
// console.log(Sara.getAge());


interface Musician {
    name: string,
    instrument: string,
    play(action: string): string


}

class HelloGuitarist implements Musician {
    name: string;
    instrument: string;
    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} is ${action} on ${this.instrument}`
    }


}


const Page = new HelloGuitarist(
    'Jimmy Page',
    'Guitar'
)

console.log(Page.play('New page '));


class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(
        public name: string
    ) {
        this.name = name
        this.id = ++Peeps.count
        // console.log(this.id);
        // this.id = Peeps.count;
        // console.log(this.id);



    }
}

const Anils = new Peeps('Anil')
const Saras = new Peeps('Sara')
const John = new Peeps('John')

console.log(Peeps.count);
console.log(Saras.id);




class Bands {

    private dataState: string[]


    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {

        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Params is ')
    }

}


const MyBand = new Bands()

MyBand.data = ['Anil', 'Sara', 'John']

console.log(MyBand.data);
MyBand.data = [...MyBand.data, 'kjkj']
console.log(MyBand.data);
MyBand.data = ['kajskajs', '897435']
console.log(MyBand.data);

