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
    primaryStats: {
        type: [String]

    },
    playerClass: {
        type: String,
        trim: true,
        required: `need a player class`
    },
    subClass: {
        type: String,
        trim: true,
        default: ""

    },
    playerRace: {
        type: String,
        trim: true,
        required: "need a player race"
    },
    background: {
        type: String,
        trim: true,
        default: `none`
    },
    bio: {
        type: String,
        trim: true,
        default: `no backstory`
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
        type: [String],
        required: `skill profs not found`
    },
    toolProficiency: {
        type: String,
        trim: true,
        default: `none`
    },
    languages: {
        type: [String],
        default: [`common`]
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
    inventory: {
        type: [Object],
        default: [{
            name: 'none',
            description: `none`,
        }]
    },
    featsAndTraits: {
        type: [Object],
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }

    
})

const PlayerCharacters = mongoose.model("PlayerCharacters", playerCharacterSchema );
module.exports = PlayerCharacters;