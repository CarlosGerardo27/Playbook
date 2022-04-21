const User = require('./../app/models/users')

describe("Pruebas de nuevo usuario", () => {
    test('Prueba de clase Usuario', () => {

        const user1 = new User (1,'Carlos27','Carlos Rocha','Aqui va la bio')

        expect(user1._id).toBe(1);
        expect(user1._username).toBe('Carlos27');
        expect(user1._name).toBe('Carlos Rocha');
        expect(user1._bio).toBe('Aqui va la bio');
        expect(user1._dateCreated).not.toBeUndefined();
        expect(user1._lastUpdate).not.toBeUndefined();
      
    });
  });