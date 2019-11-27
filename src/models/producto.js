var { Schema, model } = require('mongoose');

var productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    categoria: String,
    imagen: String

});

module.exports = model('Producto', productoSchema);