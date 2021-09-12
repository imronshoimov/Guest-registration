const router = require("express").Router();
const { GET } = require("../../controllers/registrationController.js");

router.route('/registration')
    .get(GET);

module.exports = router;