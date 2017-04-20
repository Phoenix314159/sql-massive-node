const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , app = module.exports = express()
    , connectionString = "postgres://postgres@localhost/new";

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
const massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
const db = app.get('db');
const productsCtrl = require('./productsCtrl');


app.get('/api/products', productsCtrl.getAll);
app.get('/api/products/:id', productsCtrl.getOne);
app.put('/api/products/:id', productsCtrl.update);
app.post('/api/products', productsCtrl.create);
app.delete('/api/products/:id', productsCtrl.delete);

app.listen(3010, () => {
    console.log('listening on port 3010');
})









app.listen(3005, () => {
    console.log('listening on port 3005');
})
