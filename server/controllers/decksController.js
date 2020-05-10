const { Card } = require("./Card");
var mongoose = require("mongoose");
var cardsModel = mongoose.model("Cards");
exports.cardsModel = cardsModel;
var decksModel = mongoose.model("Decks");
module.exports = {
  index: function (request, response) {
    var promise = decksModel.find({});
    promise
      .then(function (decks) {
        response.json({ decks: decks });
      })
      .catch(function (err) {
        response.json(err);
      });
  },
  create: function (request, response) {
    var random_numbers = [];
    for (let i = 1; i <= 52; i++) {
      random_numbers.push(i);
    }
    var cards = [];
    var suits = ["♥", "♠", "♦", "♣"];
    var values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    suits.forEach(function (suit) {
      values.forEach(function (value) {
        cards.push(new Card(value, suit));
      });
    });
    var decks = new decksModel(cards);
    var promise = decks.save();
    promise
      .then(function (deck) {
        random_numbers.forEach(function (random_number) {
          var card = new cardsModel();
          card.suit = cards[random_number - 1].suit;
          card.value = cards[random_number - 1].value;
          card._deck = deck;
          var promise = card.save();
          promise
            .then(function (card) {
              response.json({ card: card });
            })
            .catch(function (err) {
              response.json(err);
            });
        });
        response.json({ deck: deck });
      })
      .catch(function (err) {
        response.json(err);
      });
  },
  show: function (request, response) {
    var promise = cardsModel.find({ _deck: request.params.id });
    promise
      .then(function (cards) {
        new_cards = [];
        for (var index in cards) {
          var new_card = {};
          new_card.suit = cards[index].suit;
          new_card.value = cards[index].value;
          new_cards.push(new_card);
        }
        response.json({ cards: new_cards });
      })
      .catch(function (err) {
        response.json(err);
      });
  },
};
