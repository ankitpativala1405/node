const mongoose = require("mongoose");

const UserSchema = new mongoose({
  name: { type: String },
  email: { type: String, required: true },
  number: { type: String },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
