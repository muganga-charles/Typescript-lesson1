// ++++++++++++++++++++++++++
// ++++++++++++++++++++++++++
class Animal {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    walk(distance: number){
        console.log(`Hi, my name is ${this.name} and I am walking ${distance} meter`)
    }
}
let dog = new Animal("Roko");
dog.walk(10);

// ++++++++++++++++++++++++++
// ++++++++++++++++++++++++++
class Car{
    constructor(public brand:string){}
    run(distance: number){
        console.log(`Hi, my car brand is ${this.brand} and I am running ${distance} meter`)
    }
}
let car = new Car("Mazda");
car.run(10);

// ++++++++++++++++++++++++++
// ++++++++++++++++++++++++++
abstract class AbstractCar{
    constructor(public brand:string){}
    run(distance: number){
        console.log(`Hi, my car brand is ${this.brand} and I am running ${distance} meter`)
    }
}

class Mercedez extends AbstractCar{
    constructor(){
        super("Mercedez")
    }
}
let mercedez = new Mercedez();
mercedez.run(10);


