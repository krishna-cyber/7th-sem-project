/** @format */

const userModel = require("../models/userModel");
const sendEmail = require("../utils/nodeMailer");

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
      $or: [{ location: location }],
      bloodGroup: bloodGroup,
    });

    //remove password from response
    if (users.length < 1) {
      return res.status(404).send({
        success: false,
        message: "No Donor Found at your location",
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

//send request to donor for blood through email
const sendRequestForBloodController = async (req, res) => {
  try {
    const { sender, receiver, subject, message } = req.body;
    console.log(sender, receiver, subject, message);
    // send email to donor
    // const sendEmail = require("../utils/nodeMailer");
    // await sendEmail({
    //   email,
    //   subject: "Blood Request",
    //   message,
    // });

    await sendEmail({
      sender,
      receiver,
      subject,
      message,
    })
      .then((response) => {
        res.status(200).send({
          success: true,
          message: "Request email has been sent to the donor",
        });
      })
      .catch((error) => {
        res.status(500).send({
          success: false,
          message: "Error in request send API",
          error,
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in request send API",
      error,
    });
  }
};

module.exports = {
  donorRegisterController,
  requestBloodController,
  sendRequestForBloodController,
};
