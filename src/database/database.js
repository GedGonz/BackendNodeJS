var mongoose = require('mongoose');
var config = require('../config/configapp');

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://ged:Ged123@cluster0.qd2xq.mongodb.net/productoFP?retryWrites=true&w=majority', {

    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});