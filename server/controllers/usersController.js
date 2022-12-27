const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

router.post("/register", async (req, res) => {
  const { Name, Email, Password, Role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(Password, salt);
  const user = new User({
    Name,
    Email,
    Password: hashedPassword,
    Role,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(500).send({ message: "Error while signing up" });
  }
});

router.post("/login", async (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;
  const secret = "SecretString";
  User.findOne({ Email }, async (err, doc) => {
    if (err) throw err;
    if (!doc) {
      return res.json({ message: "Invalid Email", userExist: false });
    }
    const validPass = await bcrypt.compare(Password, doc.Password);
    if (!validPass)
      return res
        .status(400)
        .send({ message: "Invalid password", userExist: true });
    res.send(doc);
  });
});

router.put("/update/:_id", async (req, res) => {
  const { _id } = req.params;
  const { Name, Email, Password, Role } = req.body;

  try {
    // Find the user by their _id
    const user = await User.findById(_id);
    if (!user) {
      // Return a 404 response if the user is not found
      return res.status(404).send({ message: "User not found" });
    }

    // Update the user's information with the provided fields
    user.Name = Name;
    user.Email = Email;
    user.Role = Role;

    // If a new password was provided, hash it and update the user's password
    if (Password) {
      const salt = await bcrypt.genSalt(10);
      user.Password = await bcrypt.hash(Password, salt);
    }

    // Save the updated user object to the database
    const updatedUser = await user.save();
    res.send(updatedUser);
  } catch (err) {
    // Return a 500 response if there was an error while updating the user
    res.status(500).send({ message: "Error while updating user" });
  }
});


router.get("/:_id", async (req, res) => {
  const _id = req.params._id;
  try {
    User.findOne(
      {
        _id,
      },
      (err, doc) => {
        if (err) throw err;
        if (!doc) {
          return res.json({
            success: false,
            userExist: false,
          });
        }
        res.send(doc);
      }
    );
  } catch (err) {
    res.status(500).send({ message: "Error while signing up" });
  }
});

module.exports = router;
