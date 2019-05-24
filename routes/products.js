const express = require('express');
const productsController = require('./productsController');
const router = express.Router();

/* GET product page. */
router.get('/', productsController.get);
router.get('/:id', productsController.getById);
router.get('/products', productsController.getProducts);
router.get('products/:id', productsController.getProductById);
router.post('products', productsController.postProduct);
router.delete('products/:id', productsController.deleteProductById);

module.exports = router;