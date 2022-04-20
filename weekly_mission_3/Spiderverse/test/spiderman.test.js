/* const Spiderman = require('../app/spiderman') */


describe("Test Suite for spiderman Class", () => {
    test('Create of a spiderman object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31 , "Andrew Garfield", 2 , "Sony")

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")


    });
  })