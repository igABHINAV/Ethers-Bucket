const express = require("express");
const { addFund, getFunds } = require("../Controllers/Fundcontroller");
const router  = express.Router();
router.route("/add").post(addFund);
router.route("/get").get(getFunds);
module.exports = router;