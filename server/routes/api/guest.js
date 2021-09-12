const router = require("express").Router();
const controller = require("../../controllers/guestController");
const { validate } = require('../../utils/joi')

router.get("/", controller.getGuests);
router.post("/", validate, controller.addGuest);
router.post("/filter", controller.filterGuests);

module.exports = router;
