const MissionComander = require("./../app/missionCommander")

describe("Suites de pruebas para el primer proyecto de la semana 3", () => {
    test('Validación de la clase missionCommander', () => {
      const Carlos =  new MissionComander('Carlos')
      expect(Carlos.name).toBe('Carlos');
    });
  })