const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const weaponSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need weapon name`
    },
    goldCost: {
        type: mongoose.Types.Decimal128,
        required: `need cost`
    },
    damage: {
        type: Number,
        required: `need damage varible`
    },
    damageType: {
        type: String,
        required: `need a damage type`
    },
    reach: {
        type: Number,
        required: `need weapon reach in feet`
    },
    weight: {
        type: Number,
        required: `need weight`
    },
    thrown: {
        type: Object,
        default: {thrown: false, range: `none`}
    },
    finesse: {
        type: Boolean,
        default: false
    },
    versitile: {
        type: Boolean,
        default: false
    },
    twoHanded: {
        type: Boolean,
        default: false
    },
    heavy: {
        type: Boolean,
        default: false
    },
    martial: {
        type: Boolean,
        default: false
    },
    light: {
        type: Boolean,
        default: false
    },
    magical: {
        type: Boolean,
        default: false
    },
    modifier: {
        type: Number,
        default: false
    },
    effect: {
        type: String,
        trim: true,
        default: `none`
    },
    gameId: {
        type: String,
        trim: true,
        default: `public`
    },
    playerId: {
        type: String,
        trim: true,
        default: `public`
    }

});

const Weapons = mongoose.model("armor", weaponSchema );
module.exports = Weapons;