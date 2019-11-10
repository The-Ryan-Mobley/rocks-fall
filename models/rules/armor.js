  
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const armorSchema = new Schema({
    armorType: {
        type: String,
        trim: true,
        required: `either light, medium, or heavy`
    },
    goldCost: {
        type: Number,
        required: `need a price`
    },
    armorClass: {
        type: Number,
        required: `need ac`
    },
    requiredStrength: {
        type: Number,
        default: 0
    },
    stealthDisadvantage: {
        type: Boolean,
        required: `need stealth flag`
    },
    magical: {
        type: Boolean,
        default: false,
    },
    modifier: {
        type: Number,
        default: 0
    },
    addionalEffect: {
        type: String,
        trim: true,
        default: `none`
    }
});

const Armor = mongoose.model("armor", armorSchema );
module.exports = Armor;