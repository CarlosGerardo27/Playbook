const User = require('./../app/models/users')

describe("Pruebas de nuevo usuario", () => {
    test('Prueba de clase Usuario', () => {

        const user1 = new User (1,'Carlos27','Carlos Rocha','Aqui va la bio', 'dateCreated', 'lastUpdate')

        expect(user1.name).toBe(1);
      });
  });