var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/producto', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});