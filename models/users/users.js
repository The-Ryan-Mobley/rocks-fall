const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: `need username`
    },
    password: {
        type: String,
        trim: true,
        required: `need a hashed password`
    },
    salt: {
        type: String,
        trim: true,
        required: `need salt`
    },
    thumbnail: {
        type: String,
        trim: true,
        default: "/profile-placeholder.png"
    },
    characterList: {
        type: [String],
        trim: true,
        default: []
    },
    currentCharacter: {
        type: String,
        trim: true,
        default: ""

    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

const Users = mongoose.model("users", userSchema );
module.exports = Users;