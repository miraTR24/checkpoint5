const User = require("../model/User");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.addOneUser = async (req, res) => {
  try {
    const { firstName, lastName, profession, company } = req.body;
    if (!(firstName && lastName && profession && company)) {
      return res.status(400).send("all input are required");
    }

    // save new user
    const savedUser = await User.create({
      firstName,
      lastName,
      profession,
      company,
    });

    res.status(201).json({ msg: "User created", data: savedUser });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, useFindAndModify: false }
    );
    res.status(200).json({ messae: "user update", data: updatedUser });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteUserByUd = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send("user deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
