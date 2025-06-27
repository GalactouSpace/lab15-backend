const express = require('express');
const router = express.Router();
const controller = require('../controllers/productosController');

router.get('/productos', controller.getProductos);
router.get('/productos/:id', controller.getProducto);
router.post('/productos', controller.createProducto);
router.put('/productos/:id', controller.updateProducto);
router.delete('/productos/:id', controller.deleteProducto);

module.exports = router;
