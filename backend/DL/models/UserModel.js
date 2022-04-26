const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  permission: {
    type: String,
    enum: ["user", "editor", "admin"],
    default: "user",
    required: true,
  },
  lastSeen: {
    type: Date,
    default: Date.now,
  },
  profile_pic: {
    type: String,
  },
})

module.exports = mongoose.model("user", userSchema)
