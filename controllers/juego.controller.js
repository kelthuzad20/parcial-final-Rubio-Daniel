const {response, request} = require('express');

const viewUsers = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

const usuariosGet = (req = request, res = response) => {

    
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const juegoPost = (req, res = response) => {

    
    const { nombre_juego, genero} = req.body;

    
    res.status(201).json({
        msg: 'post API - juegoPost',
        nombre_juego, 
        genero
    });
}

const juegoPut = (req, res = response) => {

   
    const { id } = req.params;

    
    res.status(201).json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const juegoDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - usuariosDelete'
    });



    
}

const mostrar_idjuegoget = (req = request, res = response) => {

    
    const {id7}= req.params;


    res.json({
        msg: 'get API - mostrar_idjuegoget',
        id7
    });
}


module.exports = {
    usuariosGet,
    juegoPost,
    juegoPut,
    usuariosPatch,
    juegoDelete,
    viewUsers,
    mostrar_idjuegoget,
}