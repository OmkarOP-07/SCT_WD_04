const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
   {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,      
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, );


module.exports = mongoose.model('Todo', todoSchema);