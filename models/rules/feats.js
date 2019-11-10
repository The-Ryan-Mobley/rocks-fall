const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need a name`
    },
    statModifier: {
        type: Object,
        default: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            wisdom: 0,
            intelligence: 0,
            charisma: 0
        }
    },
    effect: {
        type: String,
        trim: true,
        required: `need effect`
    }
});

const Feats = mongoose.model("feats", featsSchema );
module.exports = Feats;