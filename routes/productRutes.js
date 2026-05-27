const express = require('express');
const router = express.Router();

const {
    getProducts,
    addProduct
} = require('../controllers/productControllers');

router.get('/products', getProducts);
router.post('/products', addProduct);

module.exports = router;