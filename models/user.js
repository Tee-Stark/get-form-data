const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: { type: String, required: true }
}, {
    timeStamps: true
});

module.exports = Users = mongoose.model("Model", userSchema);