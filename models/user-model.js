const bcrypt = require("bcrypt");

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  logInID: { type: Number, required: true, unique: true },
  password: { type: String, required: true, select: false }, // why is password still sent in the response
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

// userSchema.methods.toJSON = function() {
//     const userObject = this.toObject();
//     delete userObject.password;
//     return userObject;
// };

const User = model("User", userSchema);

module.exports = User;
