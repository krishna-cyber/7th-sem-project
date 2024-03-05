/** @format */

const express = require("express");
const {
  donorRegisterController,
  requestBloodController,
} = require("../controllers/donorReceiverController");
const authMiddelware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/donor-register", authMiddelware, donorRegisterController);

//LOGIN || POST
router.post("/request-blood", authMiddelware, requestBloodController);

module.exports = router;
