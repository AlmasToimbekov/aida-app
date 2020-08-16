const controller = require("../controller/equipment-controller.js");

var router = require("express").Router();

router.get('/getEquipmentCategories', controller.getEquipmentCategories)
router.get('/getEquipment', controller.getEquipment)

module.exports = router;