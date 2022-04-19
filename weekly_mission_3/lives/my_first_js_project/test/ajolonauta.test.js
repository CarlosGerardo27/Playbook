const Ajolonauta = require('./../app/ajolonauta')

describe("Pruebas de unidad Ajolonauta", ()=>{
    test('caso de prueba 1: creación de objeto', ()=>{
        
        const woopa = new Ajolonauta('Woopa') 


        expect(woopa.name).toBe('Woopa')
    })
})