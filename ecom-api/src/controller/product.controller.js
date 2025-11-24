const productService = require('../services/product.service');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await productService.deleteProduct(productId);
        res.status(200).send({ message: product });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
        const updatedProduct = await productService.updateProduct(productId, req.body);
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const findProductById = async (req, res) => {
    const productId = await req.params.id;
    try {
        const product = await productService.findProductById(productId);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const createMultipleProducts = async (req, res) => {
    try {
        const products = await productService.createMultipleProducts(req.body);
        res.status(201).send({message: 'Products created successfully'});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts
};