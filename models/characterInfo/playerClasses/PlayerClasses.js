const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const playerClassSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need class name`
    },
    primaryStats: {
        type: [String],
        required: `all classes have atleast 2 main stats`

    },
    startingHealth: {
        type: Number,
        required: `need starting health`
    },
    healthOnLevelUp: {
        type: Number,
        required: `need health when they level up`
    },
    uniqueMechanic: {
        type: Object,
        required: `need class mechanic as an obj with mechanic name and array for level`
    },
    mechanicPerLevel: {
        type: [Number],
        default: [0]
    },
    spellCasting: {
        type: String,
        trim: true,
        default: `none`
    },
    spellsKnown: {
        type: [Number],
        default: [0]
    },
    spellCastingAbility: {
        type: String,
        trim: true,
        default: `none`
    },
    armorProficiency: {
        type: String,
        trim: true,
        required: `the class needs armor requirements`
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
    skillProficiency: [{
        type: String,
        trim: true,
        required: `need tag skills`
    }],
    startginGear: {
        type: [String],
        trim: true,
        required: `need starting gear`
    },
    subClassLevel: {
        type: Number,
        required: `need level for selecting subclass`
    },
    levelingList: {
        type: [Object],
        required: `need leveling table`
    },
    subClass: {
        type: [String],
        ref: `SubClasses`
    },
})

const playerClasses = mongoose.model(`PlayerClasses`, playerClassSchema );
module.exports = playerClasses;