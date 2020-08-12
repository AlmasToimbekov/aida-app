const controller = require("../controller/materials-controller.js");

var router = require("express").Router();

router.get('/getMaterialsWithCategory', controller.getMaterialsWithCategory)

module.exports = router;