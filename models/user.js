<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// validate the password with passed on user password
userSchema.methods.isValidatePassword = async function (userSentPassword) {
  return this.password === userSentPassword;
};

const User = new mongoose.model("User", userSchema);

=======
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// validate the password with passed on user password
userSchema.methods.isValidatePassword = async function (userSentPassword) {
  return this.password === userSentPassword;
};

const User = new mongoose.model("User", userSchema);

>>>>>>> 833b6f12c5ba070e3037a960533adea02ad5f620
module.exports = User;