import { Animal, Cat, Dog, Owner, Pet } from "./animal";

describe('Animal', () => {

    // it('should be able to eat', () => {
    //     const animal = new Animal('Dog');
    //     expect(animal.eat()).toBe('I am eating');
    // });

});

describe('Dog', () => {
    it('should be ale to eat like animal', () => {
        let animal: Animal = new Dog('Poodle');
        expect(animal.eat()).toBe('I am eating like dog');
        (animal as Dog).eat();

        // animal = new Animal('Poolde')
        // expect(animal.eat()).toBe('I am eating');
    })
})

describe('Owner', () => {
    it('should be able to play with dog', () => {
        const owner = new Owner();
        const pet: Pet = new Dog('Poodle');

        owner.have(pet);

        expect(owner.play()).toBe('Whoof! Whoof!');
    })

    it('should be able to play with cat', () => {
        const owner = new Owner();
        const pet: Pet = new Cat('Thai');

        owner.have(pet);

        expect(owner.play()).toBe('Meow!');
    })
})