const UserService = require('./../../app/services/UserService')

describe("test for UserServices", () => {
    test('1. Create a new user using UserServices', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")

        expect(user._username).toBe("CarlosRocha");
        expect(user._name).toBe("Carlos");
        expect(user._id).toBe(1);
        expect(user._bio).not.toBeUndefined()
      });

      test('2. Get all user data in a list', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("CarlosRocha");
        expect(userInfoList[2]).toBe("Carlos");
        expect(userInfoList[3]).toBe("sin bio");
      });

      test('3. Update Username', () => {
        const user = UserService.create(1,"CarlosRocha","Carlos")
        UserService.UpdateUserUsername(user, 'Gerardo')

        expect(user._username).toBe('Gerardo');
      });

      test('4. Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1,"CarlosRocha1","Carlos")
        const user2 = UserService.create(2,"CarlosRocha2","Carlos")
        const user3 = UserService.create(3,"CarlosRocha3","Carlos")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain('CarlosRocha1');
        expect(usernames).toContain('CarlosRocha2');
        expect(usernames).toContain('CarlosRocha3');

      });

  });