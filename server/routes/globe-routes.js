const controller = require("../controller/cities-controller.js");

var router = require("express").Router();

router.get('/getCities', controller.getCities)

module.exports = router;