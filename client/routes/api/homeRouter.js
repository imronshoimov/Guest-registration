const router = require("express").Router();
const { GET } = require("../../controllers/homeController.js");

router.route('/')
    .get(GET);

module.exports = router;