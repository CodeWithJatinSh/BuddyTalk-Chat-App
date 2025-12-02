const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true,
        maxLength: 50
        
    },
    to:{
        type: String,
        required: true,
        maxLength: 50
    },
    message:{
        type: String,
        required: true,
        maxLength: 100
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

const chat = mongoose.model("chat", chatSchema);
module.exports = chat;