var { Router } = require('express');
var controller = require('../controller/product.controller')
var router = Router();


router.get('/', (req, res) => {
    res.send('Hola Mundo!!!');
});


router.get('/Producto', controller.getallProduct);

router.get('/Producto/:id', controller.getproductById);

router.post('/Producto', controller.createProduct);

router.put('/Producto', controller.updateProduct);

router.delete('/Producto/:id', controller.deletProduct);


module.exports = router;