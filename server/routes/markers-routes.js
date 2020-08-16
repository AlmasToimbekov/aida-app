const controller = require("../controller/markers-controller.js");

var router = require("express").Router();

router.get('/getMarkersByCategories', controller.getMarkersByCategories)
router.post('/setMarker', controller.setMarker)

module.exports = router;