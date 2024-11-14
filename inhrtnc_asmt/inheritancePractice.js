class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }


eat(){
console.log(`${this.name} is eating`)
}
}

class Dog extends Animal{
    constructor(name,age){
        super(name,age)
    }

    bark(){
        console.log(`${this.name} is barking`)
    }
}

const myDog = new Dog (`tommy` , 3);
myDog.eat();
myDog.bark();
