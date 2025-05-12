const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String },
  number: { type: String },
  password: { type: String },
});

const UserData = mongoose.model("userdata", UserSchema);

module.exports = UserData;
