const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    author: {
        type: String,
        required: `need author Id`
    },
    subject: {
        type: String,
        default: ``
    },
    body: {
        type: String,
        required: `need note`
    },
    date: {
        type: Date,
        default: DataCue.now()
    }
});

const NotesSchema = mongoose.model(`Notes`, NotesSchema );
module.exports = NotesSchema;