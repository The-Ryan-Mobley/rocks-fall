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
    characters: [{
        type: Schema.Types.ObjectId,
        ref: `playerCharacters`
    }],
    campaigns: [{
        type: Schema.Types.ObjectId,
        ref: `campaigns`
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

const Users = mongoose.model("users", userSchema );
module.exports = Users;