const controller = require("../controller/materials-controller.js");

var router = require("express").Router();

router.get('/getMaterialCategories', controller.getMaterialCategories)

module.exports = router;