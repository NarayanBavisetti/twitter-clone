const passportLocalMongoose = require("passport-local-mongoose")
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("twitter-user", userSchema);

module.exports = User;
