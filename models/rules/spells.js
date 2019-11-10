  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spellSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need a name`
    },
    description: {
        type: String,
        trim: true,
        required: `need description for user view`,
    },
    higher_level: {
        type: String,
        trim: true,
    },
    components: {
        type: String,
        trim: true
    },
    ritual: {
        type: Boolean,
        required: `spells need ritual flag`
    },
    duration: {
        type: String,
        trim: true,
        required: `need spell duration`
    },
    concentration: {
        type: Boolean,
        required: `need concentration flag`
    },
    castingTime: {
        type: String,
        trim: true,
        required: `need a casting time`
    },
    spellLevel: {
        type: Number,
        required: `need spell level`
    },
    school: {
        type: String,
        trim: true,
        required: `need spell school`
    },
    classes: [{
        type: String,
        trim: true
    }],
    subClasses: [{
        type: String,
        trim: true

    }],
    races: [{
        type: String,
        trim: true
    }]
});

const Spells = mongoose.model("spells", spellSchema );
module.exports = Spells;