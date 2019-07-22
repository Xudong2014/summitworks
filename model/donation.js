const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  Name: String,
  Date: String,
  Amount: String
});

module.exports = mongoose.model("donation", donationSchema);
