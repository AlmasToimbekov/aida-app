const controller = require("../controller/materials-controller.js");

var router = require("express").Router();

router.get('/getMaterialCategories', controller.getMaterialCategories)
router.get('/getMaterials', controller.getMaterials)

module.exports = router;