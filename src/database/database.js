var mongoose = require('mongoose');
var config = require('../config/configapp');

mongoose.connect(config.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});