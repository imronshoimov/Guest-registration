const router = require("express").Router();

const guestRoutes = require("./guest");

// guest routes:
router.use("/guests", guestRoutes);

module.exports = router;
