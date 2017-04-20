const app = require('./server');
const db = app.get('db');
module.exports = {
    create : (req, res) => {
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageUrl],
            (err, product) => {
        !err ? res.status(200).send(product) : res.status(404).send(err);
        });
    },
    getAll : (req, res) => {
        db.read_products((err, products) => {
            !err ? res.status(200).send(products) : res.status(404).send(err);
        });
    },
    getOne : (req, res) => {
        db.read_product([req.params.id],(err, product) => {
            !err ? res.status(200).send(product) : res.status(404).send(err);
        });
    },
    update : (req, res) => {
        db.update_product([req.params.id, req.body.description], (err, product) => {
            !err ? res.status(200).send(product) : res.status(404).send(err);
        });
    },
    delete : (req, res) => {
        db.delete_product([req.params.id],(err, product) => {
          !err ? res.status(200).send(product) : res.status(404).send(err);
        });
    }
}
