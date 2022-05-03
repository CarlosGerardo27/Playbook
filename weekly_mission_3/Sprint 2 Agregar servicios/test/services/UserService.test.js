const UserService = require('./../../app/services/UserService')

describe("test for UserServices", () => {
    test('1. Create a new user using UserServices', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")

        expect(user._username).toBe("CarlosRocha");
        expect(user._name).toBe("Carlos");
        expect(user._id).toBe(1);
        expect(user._bio).not.toBeUndefined()
      });
  });