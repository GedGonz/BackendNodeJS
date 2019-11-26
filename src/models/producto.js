var { Schema, model } = require('mongoose');

var productoSchema = new Schema({
    ProductoId: Number,
    Nombre: String,
    Precio: String,
    Categoria: String,
    Imagen: String

});

module.exports = model('Producto', productoSchema);