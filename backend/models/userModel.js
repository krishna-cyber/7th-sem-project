/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email is already exist"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    mobile: {
      type: String,
      trim: true,
      unique: [true, "Mobile is already exist"],
    },
    DOB: {
      type: Date,
    },
    gender: {
      type: String,
      trim: true,
      enum: ["male", "female"],
    },
    location: {
      type: String,
      trim: true,
      enum: [
        "nepalgunj",
        "kathmandu",
        "pokhara",
        "biratnagar",
        "dharan",
        "butwal",
        "bhairahawa",
        "dhangadhi",
      ],
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    bloodGroup: {
      type: String,
      trim: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
