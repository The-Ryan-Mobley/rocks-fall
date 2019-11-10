const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subRaceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need a name`
    },
    description: {
        type: String,
        trim: true,
        required: `need a description`
    },
    baseASI: {
        type: Object,
        required: `need base socre increases`
    },
    traits: {
        type: Object,
        required: `need traits`
    }
})

const SubRaces = mongoose.model("subRaces", subRaceSchema );
module.exports = SubRaces;