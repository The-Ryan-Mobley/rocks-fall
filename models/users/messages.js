const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    authorId: {
        type: String,
        trim: true,
        required: `need author`
    },
    body: {
        type: String,
        trim: true,
        required: `need message body`
    },
    recipients: [{
        type: String,
        trim: true,
        required: `need atleast 1 valid id even if it is for chatbox`
    }]

})

const messages = mongoose.model("messages", messageSchema );
module.exports = messages;