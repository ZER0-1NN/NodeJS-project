const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async create(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async readAll(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {
            page,
            limit:10 
        });
        return res.json(products);
    },

    async readOne(req, res) {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(204).json();
        return res.json(product);
    },

    async update(req, res) {
        const { id } = req.params;
        const body = req.body;
        const product = await Product.findByIdAndUpdate(id, body, {
            new: true
        });
        if (!product) return res.status(204).json();
        return res.json(product);
    },

    async delete(req, res) {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        const products = await Product.find();
        if (!product) return res.send("Not exists");
        return res.json(products);
    },
};