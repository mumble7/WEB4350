var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

// *** USERS & ADMINS - GOING TO KEEP AS A SIMPLE LOGIN PROCESS & SIGNUP ***

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);