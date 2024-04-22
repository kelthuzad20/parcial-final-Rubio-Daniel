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

const usuariosPost = (req, res = response) => {

    
    const { nombre, edad } = req.body;

    
    res.status(201).json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {

   
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

const usuariosDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    viewUsers,
}