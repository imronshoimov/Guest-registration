const router = require("express").Router();
const { GET } = require("../../controllers/guestsController.js");

router.route('/guests')
    .get(GET);

module.exports = router;