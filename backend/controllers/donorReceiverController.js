/** @format */

const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const donorRegisterController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ _id: req.body.userId });
    const { bloodGroup, dob, gender, location, token } = req.body;
    console.log(token);

    // update these states in user model
    exisitingUser.bloodGroup = bloodGroup;
    exisitingUser.DOB = dob;
    exisitingUser.gender = gender;
    exisitingUser.location = location;
    exisitingUser.profileCompleted = true;
    console.log(exisitingUser);
    await exisitingUser.save().then((user) => {
      const { password, ...data } = user._doc;
      return res.status(200).send({
        success: true,
        message: "User Registered Successfully",
        user: data,
        token,
      });
    });

    //remove password from response
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//login call back
const requestBloodController = async (req, res) => {
  try {
    // takes bloodGroup and location then search on database nearest location and blood group
    const { bloodGroup, location } = req.body;
    console.log(bloodGroup, location);
    // find users having that location and other location near it
    const users = await userModel.find({
      $or: [{ location: location }, { location: { $ne: location } }],
      bloodGroup: bloodGroup,
    });

    console.log(users);
    if (users.length < 1) {
      return res.status(404).send({
        success: false,
        message: "No User Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Search Successful",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In request blood API",
      error,
    });
  }
};

//GET CURRENT USER

module.exports = { donorRegisterController, requestBloodController };
