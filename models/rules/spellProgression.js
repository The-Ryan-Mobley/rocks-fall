  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spellProgressionSchema = new Schema({
    castingType: {
        type: String,
        trim: true,
        required: `either half, third, full, pact, or multiclass`
    },
    level0: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level1: [{
        type: Number,
        required: `need array of spell slots for level`
    }],
    level2: [{
        type: Number,
        required: `need array spell slots for level`
    }],
    level3: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level4: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level5: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level6: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level7: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level8: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level9: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level10: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level11: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level12: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level13: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level14: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level15: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level16: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level17: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level18: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level19: [{
        type: Number,
        required: `need spell slots for level`
    }],
    level20: [{
        type: Number,
        required: `need spell slots for level`
    }],
})

const SpellProgression = mongoose.model("spellProgression", spellProgressionSchema );
module.exports = SpellProgression;