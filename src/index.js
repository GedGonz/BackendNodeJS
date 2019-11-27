var express = require('express');
var cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 3000)

require('./database');

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/api', require('./routes/index'));

app.listen(3000, function(err) {

    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log(`Api escuchando en el puerto ${app.get('port')}`);
});