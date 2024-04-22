const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const token = "46578"
const datosprueba = {
    nombre_juego:"cuphead", 
    genero:"accion"
}
const juegosId = 3;

describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
    });

     test('respuesta json', async () => {   
       const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
       expect(response.headers['Content-Type'])
       
    });
});

describe("post /api/users", () => {

    test("guardar juego", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre_juego=body.nombre_juego;
            
        })
    });

    test("Se puede crear juego", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
        
    });
})


describe("put /api/users/:id", () => {

    test("actualizacion de juego", async () => {
        return request(server.app)
        .put(`/api/users/${juegosId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })
})

describe("Delete /api/users/:id", () => {

    test("Eliminacion juego", async () => {
        return request(server.app)
        .delete(`/api/users/${juegosId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

describe("post /api/users", () => {

    const datosusuario = {nombre_usuario:"kelthuzad", id_usuario:"7"}
    test("creacion de jugador", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosusuario)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosusuario.nombre_usuario=body.nombre_usuario;
        
        })
     });
});
    


describe("post /api/users", () => {

    const datosmapa = {nombre_mapa:"sabana", id_mapa:"412"}
    test("creacion de jugador", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosmapa)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosmapa.nombre_mapa=body.nombre_mapa;
        
        })
     });
});

describe("put /api/users/:id", () => {

    test("modificacion datos usuario", async () => {
        return request(server.app)
        .put(`/api/users/${juegosId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })
})

describe("Delete /api/users/:id", () => {

    test("Eliminacion  usuario", async () => {
        return request(server.app)
        .delete(`/api/users/${juegosId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

describe("post /api/users", () => {

    test("dar informacion juego", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre_juego=body.nombre_juego;
            
        })
    });

    test("se puede acceder datos juego", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
        
    });
})












