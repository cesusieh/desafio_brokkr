const { Router } = require('express');
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/productControllers');

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
