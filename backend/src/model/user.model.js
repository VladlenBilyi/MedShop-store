const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: { type: String},
  username: { type: String, required: true },
  email: { type: String, required: true,unique:true },
});

const userModel = model("user", userSchema);

module.exports = userModel;