import {Person} from './src/Person';
import {conditions} from './src/Conditions';
import {Animals, Nationality} from "./src/const";

console.log('Resolving ...');
const person1 = new Person("one");
//console.log(person1.greet());
//console.log(conditions);

const nationalities: Array<string> = [];

for (const race in Nationality) {
    if (race) {
        nationalities.push(race);
    }
}
nationalities.forEach((nationality) => {
    const person1 = new Person(nationality);
    person1.nationality = Nationality[nationality];
    person1.animal = Animals.Fish;
    if (person1.apply(conditions)) {
        if (person1.left) {
            //console.log(person1.left.apply(conditions));
        }
        if (person1.right) {
            //console.log(person1.right.apply(conditions));
        }

        console.log(person1.greet());
    }
});



