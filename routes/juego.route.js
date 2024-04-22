const  { Router } = require('express');

const {viewUsers, juegoPost, juegoPut, juegoDelete, juegoPut, mostrar_idjuegoget } = require('../controllers/juego.controller');


const routerUser = Router();

routerUser.get('', viewUsers);
routerUser.post('', juegoPost);
routerUser.put('/:id', juegoPut);
routerUser.delete('/:id', juegoDelete);
routerUser.get('/:id7', mostrar_idjuegoget);
module.exports = routerUser;