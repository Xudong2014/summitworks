const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    Name: String,
    Date: String,
    Amount: String,
    DonationType: String,
})

module.exports = mongoose.model('donation',donationSchema);