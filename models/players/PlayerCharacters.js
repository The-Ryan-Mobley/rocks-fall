const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerCharacterSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `charcters need a name`
    },
    level: {
        type: Number,
        default: 1
    },
    experience: {
        type: Number,
        default: 0
    },
    stats: {
        type: [Number],
        default: [8,8,8,8,8,8]
    },
    playerClass: {
        type: String,
        trim: true,
        required: `need a player class`
    },
    background: {
        type: String,
        trim: true,
        default: `none`
    },
    alignment: {
        type: String,
        trim: true,
        default: `pure neutral`
    },
    currency: {
        type: Array,
        default: [0,0,0,0,0]
    },
    attunementSlots: {
        type: String,
        default: [`open`,`open`,`open`]
    },
    proficiencyBonus: {
        type: Number,
        default: 2
    },
    skillProficiencies: {
        type: [Number],
        required: `skill profs not found`
    },
    martialWeaponProficiency: {
        type: Boolean,
        default: false
    },
    toolProficiency: {
        type: String,
        trim: true,
        default: `none`
    },
    savingThrowProficiency: {
        type: [String],
        required: `need saving throw bonus`
    },
    languages: {
        type: [String],
        default: [`common`]
    },
    armorProficiency: {
        type: [String],
        default: [`unarmored`]
    },
    spellCasting: {
        type: Boolean,
        default: false
    },
    spellSlots: {
        type: [Number],
        default: [0,0,0,0,0,0,0,0,0]
    },
    spellCastingStat: {
        type: [String],
        default: [`none`]
    },
    spellsKnown: {
        type: Object,
        default: {
            level0: [`none`],
            level1: [`none`]
        }
    },
    inventory: [{
        type: Object,
        default: [{
            itemName: 'none',
            itemId: `none`,
            itemType: `none`,
            magical: false,
        }]
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }

    
})

const PlayerCharacters = mongoose.model("PlayerCharacters", playerCharacterSchema );
module.exports = PlayerCharacters;