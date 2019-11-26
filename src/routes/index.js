var { Router } = require('express');
var router = Router();

var producto = require('../models/producto');

router.get('/', (req, res) => {
    res.send('Hola Mundo!!!');
});


router.get('/Producto', (req, res) => {
    res.send('GET de Productos');
});


router.post('/Producto', (req, res) => {
    res.send('POS de Productos');
});

router.put('/Producto', (req, res) => {
    res.send('PUT de Productos');
});

router.delete('/Producto', (req, res) => {
    res.send('DELETE de Productos');
});





module.exports = router;