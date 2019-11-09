  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerRaceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need a valid name`
    },
    baseASI: {
        type: Object,
        required: `need base socre increases`
    },
    age: {
        type: String,
        trim: true,
        required: `need age for user view`
    },
    alignment: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true,
        required: `need size for user view`
    },
    speed: {
        type: Object,
        required: `need speed for user view`
    },
    vision: {
        type: String,
        trim: true,
        required: `need vision for user view`
    },
    traits: {
        type: Object,
        required: `need traits`
    },
    subRaces: [
        {
          type: Schema.Types.ObjectId,
          ref: "subRaces"
        }
    ],
});

const playerRaces = mongoose.model("playerRaces", playerRaceSchema );
module.exports = playerRaces;