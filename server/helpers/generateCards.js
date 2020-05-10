const { Card } = require("../classes/Card");

generateCards = () => {
  const cards = [];
  const suits = ["♥", "♠", "♦", "♣"];
  const values = [
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
  suits.forEach((suit) => {
    values.forEach((value) => {
      cards.push(new Card(value, suit));
    });
  });
  return cards;
};
exports.generateCards = generateCards;
