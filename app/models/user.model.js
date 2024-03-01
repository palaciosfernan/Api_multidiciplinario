const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    last_name: String,
    user_name:String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
