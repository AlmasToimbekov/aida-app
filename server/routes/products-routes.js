const controller = require("../controller/products-controller.js");

var router = require("express").Router();

router.get('/getProductsByCategory/:categoryId', controller.getProductsByCategory)

module.exports = router;