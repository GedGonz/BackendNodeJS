var { Router } = require('express');
var router = Router();

var producto = require('../models/producto');

router.get('/', (req, res) => {
    res.send('Hola Mundo!!!');
});


router.get('/Producto', async(req, res) => {


    var _producto = await producto.find();

    if (!_producto) {
        return res.status(401).send("No existe productos!");
    }

    return res.status(200).json(_producto);
});

router.get('/Producto/:id', async(req, res) => {

    var _id = req.params.id;
    console.log(_id);
    var _producto = await producto.findOne({ _id });

    if (!_producto) {
        return res.status(401).send("Producto no existe!");
    }

    console.log(_producto.nombre);

    return res.status(200).json(_producto);

});

router.post('/Producto', async(req, res) => {

    var { _id, nombre, descripcion, precio, categoria, imagen } = req.body;

    var nuevoProducto = new producto({ _id, nombre, descripcion, precio, categoria, imagen });

    await nuevoProducto.save();

    return res.status(200).json(nuevoProducto);
});


router.put('/Producto', async(req, res) => {

    var { _id, nombre, descripcion, precio, categoria, imagen } = req.body;

    var _producto = await producto.findOne({ _id });
    if (!_producto) {

        return res.status(401).send("Producto no existe!");
    }
    _producto.nombre = nombre;
    _producto.descripcion = descripcion;
    _producto.precio = precio;
    _producto.categoria = categoria;
    _producto.imagen = imagen;

    await producto.update(_producto);

    return res.status(200).json(_producto);

});

router.delete('/Producto/:id', async(req, res) => {

    var _id = req.params.id;


    var _producto = await producto.findOne({ _id });
    if (!_producto) {
        return res.status(401).send("Producto no existe!");
    }

    await producto.deleteOne(_producto);

    return res.status(200).json(_producto);

});


module.exports = router;