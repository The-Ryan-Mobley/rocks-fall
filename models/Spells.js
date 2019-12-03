  
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
    higherLevel: {
        type: String,
        trim: true,
    },
    range: {
        type: String,
        default: 0
    },
    components: {
        type: [String],
        trim: true
    },
    material: {
        type: String,
        trim: true
    },
    ritual: {
        type: String,
        required: `spells need ritual flag`
    },
    duration: {
        type: String,
        trim: true,
        required: `need spell duration`
    },
    concentration: {
        type: String,
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
    playerClasses: {
        type: [String],
        trim: true
    },
    subClasses: {
        type: [String],
        default: [`none`]
    },
    druidCircle: {
        type: String
    },
});

const Spells = mongoose.model("Spells", spellSchema );
module.exports = Spells;