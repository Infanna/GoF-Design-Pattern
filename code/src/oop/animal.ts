export abstract class Animal {
    private breed: string = 'unknow';

    constructor(breed: string) {
        this.breed = breed
    }

    abstract eat(): string;
}

export class Dog extends Animal implements Pet {
    eat() {
        return 'I am eating like dog';
    }

    bark() {
        return 'Whoof! Whoof!'
    }

    play(): string {
        return this.bark();
    }
}

export class Cat extends Animal {

    eat(): string {
        return 'I am eatimg like cat'
    }
    cry() {
        return 'Meow!';
    }

    play(): string {
        return this.cry();
    }
}

export interface Pet {
    play(): string;
}

export class Owner {
    private pet: Pet | undefined

    have(pet: Pet) {
        this.pet = pet;
    }

    play() {
        if (this.pet) {
            return this.pet.play();
        }
        return 'I do not have a pet';
    }
}