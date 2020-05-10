var mongoose = require("mongoose");

var cardsModel = mongoose.model("Cards");
exports.cardsModel = cardsModel;

var decksModel = mongoose.model("Decks");
exports.decksModel = decksModel;

const { generateCards } = require("../helpers/generateCards");
const { shuffle } = require("../helpers/shuffle");

const { Card } = require("../classes/Card");

module.exports = {
  index: (request, response) => {
    var promise = decksModel.find({});
    promise
      .then((decks) => {
        const temp = [];
        decks.forEach((element) => {
          temp.push(element._id);
        });
        response.json({ decks: temp });
      })
      .catch((err) => {
        response.json(err);
      });
  },
  create: (request, response) => {
    const numbers = [];
    for (let i = 1; i <= 52; i++) {
      numbers.push(i);
    }
    shuffle(numbers);
    var cards = generateCards();
    var decks = new decksModel(cards);
    var promise = decks.save();
    promise
      .then((deck) => {
        numbers.forEach((number) => {
          var card = new cardsModel();
          card.suit = cards[number - 1].suit;
          card.value = cards[number - 1].value;
          card._deck = deck;
          var promise = card.save();
          promise
            .then((card) => {
              response.json({ card });
            })
            .catch((err) => {
              response.json(err);
            });
        });
        response.json({ deck });
      })
      .catch((err) => {
        response.json(err);
      });
  },
  show: (request, response) => {
    const promise = cardsModel.find({ _deck: request.params.id });
    promise
      .then((cards) => {
        const temp = [];
        for (var index in cards) {
          const card = new Card(cards[index].value, cards[index].suit);
          temp.push(card);
        }
        response.json({ cards: temp });
      })
      .catch((err) => {
        response.json(err);
      });
  },
};



