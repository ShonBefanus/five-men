import {Person} from "./Person";
import {Animals, Cigarette, Color, Drink, Nationality, Order} from "./const";

export const conditions: Array<Person> = [];

const c1: Person = new Person();
c1.nationality = Nationality.Englishman;
c1.color = Color.Red;

conditions.push(c1);

const c2: Person = new Person();
c2.nationality = Nationality.Swede;
c2.animal = Animals.Dog;

conditions.push(c2);

const c3: Person = new Person();
c3.nationality = Nationality.Dane;
c3.drink = Drink.Tea;
conditions.push(c3);

const c4: Person = new Person();
c4.color = Color.Green;
c4.right = new Person();
c4.right.color = Color.White;
conditions.push(c4);

const c5: Person = new Person();
c5.color = Color.Green;
c5.drink = Drink.Coffee;
conditions.push(c5);

const c6: Person = new Person();
c6.cigarette = Cigarette.PallMall;
c6.animal = Animals.Bird;
conditions.push(c6);

const c7: Person = new Person();
c7.color = Color.Yellow;
c7.cigarette = Cigarette.Dunhill;
conditions.push(c7);

const c8: Person = new Person();
c8.order = Order.Third;
c8.drink = Drink.Milk;
conditions.push(c8);

const c9: Person = new Person();
c9.nationality = Nationality.Norwegian;
c9.order = Order.First;
conditions.push(c9);

const c10: Person = new Person();
c10.cigarette = Cigarette.Blend;
c10.right = new Person();
c10.left = new Person();
c10.left.animal = Animals.Cat;
c10.right.animal = Animals.Cat;
conditions.push(c10);

const c11: Person = new Person();
c11.cigarette = Cigarette.BlueMaster;
c11.drink = Drink.Bier;
conditions.push(c11);

const c12: Person = new Person();
c12.animal = Animals.Horse;
c12.right = new Person();
c12.left = new Person();
c12.left.cigarette = Cigarette.Dunhill;
c12.right.cigarette = Cigarette.Dunhill;
conditions.push(c12);

const c13: Person = new Person();
c13.nationality = Nationality.German;
c13.cigarette = Cigarette.Prince;
conditions.push(c13);

const c14: Person = new Person();
c14.nationality = Nationality.Norwegian;
c14.right = new Person();
c14.left = new Person();
c14.left.color = Color.Blue;
c14.right.color = Color.Blue;
conditions.push(c14);

const c15: Person = new Person();
c15.cigarette = Cigarette.Blend;
c15.right = new Person();
c15.left = new Person();
c15.left.drink = Drink.Water;
c15.right.drink = Drink.Water;

conditions.push(c15);
