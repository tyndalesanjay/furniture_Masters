const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    // Returns a username for the user.
    username: {
      type: String,
      min: [4, "Too short, min 4 characters are required"],
      max: [32, "Too long, max 16 characters are required"],
    },
    // Generates an email address
    email: {
      type: String,
      min: [4, "Too short, min 4 characters are required"],
      max: [32, "Too long, max 16 characters are required"],
      lowercase: true,
      unique: true,
      required: "Email is required",
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    // Creates a password.
    password: {
      type: String,
      min: [4, "Too short, min 4 characters are required"],
      max: [32, "Too long, max 16 characters are required"],
      required: "password is required",
    },
    // Confirm password confirmation.
    passwordConfirmation: {
      type: String,
      min: [4, "Too short, min 4 characters are required"],
      max: [32, "Too long, max 16 characters are required"],
    },
  },
  {
    timestamps: true,
  }
);

// Hash a user s password
userSchema.pre("save", function (next) {
  const user = this;
  // bcrypt. genSalt generates a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return res.status(422).json({
        error: "There is an error while gensalt hash",
      });
    }
    // Hash a password
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return res.status(422).json({
          error: "There is an error while password hash",
        });
      }
      user.password = hash;
      next();
    });
  });
});

// Compares this user saved password with the given one.
userSchema.methods.hasSamePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
