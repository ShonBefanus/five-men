import {Animals, Cigarette, Color, Drink, Nationality, Order, props} from "./const";

let id:number = 0;
export class Person {
    id: string;
    nationality: Nationality | null = null;
    cigarette: Cigarette | null = null;
    animal: Animals | null = null;
    color: Color | null = null;
    order: Order | null = null;
    drink: Drink | null = null;
    left: Person | null = null;
    right: Person | null = null;


    constructor(message: string = '') {
        this.id = `${message} - ${id++}`;
    }

    greet(showNeighbor = true) {
        const greeting = showNeighbor ? `Hello, I'm person ${this.id}` : '';
        const neighbor = showNeighbor ?  `\n\r neighbors
            - left ${this.left.greet(false)}
            - right ${this.right.greet(false)}
            ` : '';
        return `${greeting}
        nationality = ${Nationality[this.nationality]},
        animal = ${Animals[this.animal]},
        color = ${Color[this.color]},
        order = ${Order[this.order]},
        cigarette = ${Cigarette[this.cigarette]},
        drink = ${Drink[this.drink]}${neighbor}`;
    }
    clone(){
        const newPerson = new Person();
        newPerson.drink =this.drink;
        newPerson.nationality = this.nationality;
        newPerson.color =this.color;
        newPerson.animal =this.animal;
        newPerson.cigarette=this.cigarette;
        newPerson.order=this.order;
        if(this.right) newPerson.right = this.right.clone();
        if(this.left) newPerson.left = this.left.clone();
        return newPerson;
    }
    validate(person:Person){
        let match: boolean = false;
        props.forEach((prop: string)=>{
            if (this[prop] !== null && person[prop] !== null && this[prop] !==  person[prop]) return false;
            if (this[prop] ===  person[prop]) {
                match = true;
            }
        });
        if(match){
            const left = person.left ? person.left.clone(): null;
            const right = person.right ? person.right.clone(): null;
            props.forEach((props:string) => {
                if(person[props] !== null) {
                    this[props] = person[props];
                }
                if(left){
                    if(!this.left) this.left =  new Person();
                    if(left[props] !== null) {
                        this.left[props] = left[props];
                    }
                }
                if(right){
                    if(!this.right) this.right =  new Person();
                    if(right[props] !== null) {
                        this.right[props] = right[props];
                    }
                }
            })

        }
        return true;
    }
    neighbor(person:Person, side:string){
        let match: boolean = false;
        if(person === null || this[side] === null ) return true;
        props.forEach((prop: string)=>{
            if (this[side][prop] !== null && person[prop] !== null && this[side][prop] !==  person[prop]) return false;
            if (this[side][prop] ===  person[prop]) {
                match = true;
            }
        });
        return true;
    }
    apply(persons:Array<Person>){
        const one = this.clone();
        persons.forEach((person:Person) => {
            if (!this.validate(person)) return false;
            if (!this.neighbor(person.left, 'left')) return false;
            if (!this.neighbor(person.right, 'right')) return false;
        });
        return true;
    }
}