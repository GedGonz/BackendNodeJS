var producto = require('../models/producto');
var config = require('../config/configapp');
var cloudinary = require('cloudinary');
var path = require('path');
var fs = require('fs');

cloudinary.config({
    cloud_name: config.cloudinaryNAME,
    api_key: config.cloudinaryAPI_KEY,
    api_secret: config.cloudinaryAPI_SECRET
});

async function deleteFile() {
    var dir = path.join(__dirname, '../public/uploads');

    fs.rmdirSync(dir, { recursive: true });

    fs.mkdir((dir), (error) => {
        if (error)
            console.log(error);
    });
}

module.exports = {

    async getallProduct(req, res) {

        var _producto = await producto.find();
        console.log(_producto);
        if (!_producto) {
            return res.status(401).send("No existe productos!");
        }

        return res.status(200).json(_producto);
    },

    async getproductById(req, res) {

        var _id = req.params.id;

        var _producto = await producto.findOne({ _id });

        if (!_producto) {
            return res.status(401).send("Producto no existe!");
        }

        return res.status(200).json(_producto);

    },
    async createProduct(req, res) {

        var { _id, nombre, descripcion, precio, categoria } = req.body;

        var result = await cloudinary.v2.uploader.upload(req.file.path);

        var nuevoProducto = new producto({ _id, nombre, descripcion, precio, categoria, imagen: result.secure_url });

        var prodcut = await nuevoProducto.save();

        await deleteFile();

        return res.status(200).json(prodcut);

    },
    async updateProduct(req, res) {

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

    },
    async deletProduct(req, res) {

        var _id = req.params.id;


        var _producto = await producto.findOne({ _id });
        if (!_producto) {
            return res.status(401).send("Producto no existe!");
        }

        await producto.deleteOne(_producto);

        return res.status(200).json(_producto);

    }
}