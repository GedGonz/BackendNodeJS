var express = require('express');
var cors = require('cors');
var path = require('path');
var multer = require('multer');
const { Console } = require('console');
var app = express();

app.set('port', process.env.PORT || 5000)

require('./database/database');

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        console.log(path.join(__dirname, 'public/uploads'));
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({ storage }).single('imagen'));

app.use('/api', require('./routes/product.router'));

app.listen(app.get('port'), function(err) {

    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log(`Api escuchando en el puerto ${app.get('port')}`);
});