const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const subClassSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `need a name for sub class`
    },
    description: {
        type: String,
        trim: true,
        required: `need a description`
    },
    subClassTerm: {
        type: String,
        trim: true,
        required: `every class has a specific name for subclasses`
    },
    spellCasting: {
        type: String,
        trim: true,
        required: `some subclasses give user's spells`
    },
    spellsAdded: {
        type: [String],
        trim: true,
        default: [`none`]
    },
    levelingTable: {
        type: [Object],
        required: `need object list for leveling features`
    }

});

const SubClasses = mongoose.model(`SubClasses`, subClassSchema );
module.exports = SubClasses;