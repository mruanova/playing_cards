var mongoose = require('mongoose');

var decksSchema = new mongoose.Schema({
    _cards: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cards'
        }
    ]
}, { timestamps: true });

mongoose.model('Decks', decksSchema);