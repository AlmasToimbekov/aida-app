const controller = require("../controller/products-controller.js");

var router = require("express").Router();

router.get('/getProductsByCategory/:categoryId', controller.getProductsByCategory)
router.post('/createProduct', controller.createProduct)

module.exports = router;