var mongoose = require('mongoose');

var cardsSchema = new mongoose.Schema({
    suit: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1
    },
    value: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2
    },
    _deck:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Decks',
        required: true
    }
}, { timestamps: true });

mongoose.model('Cards', cardsSchema);