const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerCharacterSchema = new Schema({
    characterName: {
        type: String,
        trim: true,
        required: `charcters need a name`
    },
    level: {
        type: Number,
        default: 1
    },
    health: {
        type: Number,
        default: 0
    },
    hitDie: {
        type: Number,
        default: 8
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
        type: [String],
        default: []

    },
    playerClass: {
        type: String,
        trim: true,
        default: ""
    },
    subClass: {
        type: String,
        trim: true,
        default: ""

    },
    playerRace: {
        type: String,
        trim: true,
        default: ""
    },
    background: {
        type: String,
        trim: true,
        default: `none`
    },
    personalityTraits: {
        type: String,
        default: ""
    },
    ideals: {
        type: String,
        default: ""
    },
    bonds: {
        type: String,
        default: ""
    },
    flaws: {
        type: String,
        default: ""
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
    proficiencyBonus: {
        type: Number,
        default: 2
    },
    skillProficiency: {
        type: [String],
        required: `skill profs not found`,
        default: []
    },
    toolProficiency: {
        type: [String],
        trim: true,
        default: []
    },
    languages: {
        type: [String],
        default: []
    },
    armorClass: {
        type: Number,
        default: 10
    },
    initiative: {
        type: Number,
        default: 0
    },
    speed: {
        type: Number,
        default: 30
    },
    spellSaveDc: {
        type: Number,
        default: 10
    },
    spellAttackBonus: {
        type: Number,
        default: 0
    },
    spellSlots: {
        type: [Number],
        default: [0,0,0,0,0,0,0,0,0]
    },
    spellCastingClass: {
        type: String,
        default: ""
    },
    spellCastingStat: {
        type: String,
        default: `none`
    },
    spellsKnown: {
        type: [Object],
        default: []
    },
    inventory: {
        type: [Object],
        default: []
    },
    featsAndTraits: {
        type: [Object],
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    authorId: {
        type: String,
        required: "need user id for reference",
        default: ""
    }

    
})

const PlayerCharacters = mongoose.model("PlayerCharacters", playerCharacterSchema );
module.exports = PlayerCharacters;