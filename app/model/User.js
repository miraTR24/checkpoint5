const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
