const UserService = require('./../../app/services/UserService')

describe("test for UserServices", () => {
    test('1. Create a new user using UserServices', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")

        expect(user._username).toBe("CarlosRocha");
        expect(user._name).toBe("Carlos");
        expect(user._id).toBe(1);
        expect(user._bio).not.toBeUndefined()
      });

      test('2. Gat all user data in a list', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("CarlosRocha");
        expect(userInfoList[2]).toBe("Carlos");
        expect(userInfoList[3]).toBe("sin bio");
      });
  });