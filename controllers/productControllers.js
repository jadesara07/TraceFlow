const {
    readFile,
    writeFile
} = require('../utils/fileHandler');

const getProducts = async (req, res, next) => {
    try {
        console.log('Fetching products...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        const products = await readFile('./database/products.json');
        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const products = await readFile('./database/products.json');
        const newProduct = {
            id: products.length + 1,
            ...req.body
        };
        products.push(newProduct);
        await writeFile('./database/products.json', products);
        res.status(201).json({
            success: true,
            product: newProduct
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    addProduct
};