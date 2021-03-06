var mongoose = require('mongoose');
var config = require('../config/configapp');

mongoose.Promise = global.Promise

mongoose.connect(config.mongodbURL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});