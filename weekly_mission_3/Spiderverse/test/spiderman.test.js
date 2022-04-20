const Spiderman = require('./../app/spiderman')


describe("Test Suite for spiderman Class", () => {
    test('Create of a spiderman object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31 , "Andrew Garfield", 2 , "Sony")

        expect(andrewGarfield._name).toBe("Spiderman Sony")
        expect(andrewGarfield._age).toBe(31)
        expect(andrewGarfield._actor).toBe("Andrew Garfield")
        expect(andrewGarfield._movies).toBe(2)
        expect(andrewGarfield._studio).toBe("Sony")


    });

    test('metodo getInfo from Spiderman Class', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31 , "Andrew Garfield", 2 , "Sony")

        expect(andrewGarfield.getInfo()).toBe("Hey! im Andrew Garfield from Sony")

    });

    
  })