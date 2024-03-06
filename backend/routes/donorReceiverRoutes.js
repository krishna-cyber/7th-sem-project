/** @format */

const express = require("express");
const {
  donorRegisterController,
  requestBloodController,
  sendRequestForBloodController,
} = require("../controllers/donorReceiverController");
const authMiddelware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/donor-register", authMiddelware, donorRegisterController);

//LOGIN || POST
router.post("/request-blood", authMiddelware, requestBloodController);

//donate request send to donor || POST
router.post("/send-request", authMiddelware, sendRequestForBloodController);

module.exports = router;
