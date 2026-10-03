const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"]
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  },

  isDelete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", userSchema);