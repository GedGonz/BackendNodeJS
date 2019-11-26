var express = require('express');

var app = express();

require('./database')

app.use('/api', require('./routes/index'))

app.listen(3000, function(err) {

    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('Api escuchando en el puerto 3000');
});