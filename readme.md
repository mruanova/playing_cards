Mauricio Ruanova-Hurtado

Using Node.js, build a REST API for generating shuffled playing card decks.

## run mongod

C:\Program Files\MongoDB\Server\4.2\bin

mongod

## run mongo

C:\Program Files\MongoDB\Server\4.2\bin

mongo

## show databases

show dbs

use playing_cards_db

db.decks.find({_id: ObjectId("5eb82bc91255211bbc90b547")})

db.decks.find().pretty()

## open

to shuffle a deck of cards
GET http://localhost:8000/api/create

to get the list of shuffled cards in the selected deck 
GET http://localhost:8000/api/decks

{"decks":[{"_id":"596569668e126211eb5d7124","updatedAt":"2017-07-12T00:12:22.952Z","createdAt":"2017-07-12T00:12:22.952Z","__v":0,"_cards":[]}]}

to get the list of shuffled cards in the selected deck 
GET http://localhost:8000/api/decks/5eb842838dd3ab2984d722be

{"cards":[
    {"suit":"♦","value":"9"},{"suit":"♣","value":"J"},{"suit":"♦","value":"8"},{"suit":"♦","value":"J"},{"suit":"♥","value":"2"},{"suit":"♠","value":"3"},{"suit":"♠","value":"9"},{"suit":"♣","value":"Q"},{"suit":"♠","value":"A"},{"suit":"♦","value":"A"},{"suit":"♣","value":"2"},{"suit":"♦","value":"10"},{"suit":"♥","value":"8"},{"suit":"♣","value":"8"},{"suit":"♣","value":"K"},{"suit":"♥","value":"6"},{"suit":"♠","value":"J"},{"suit":"♠","value":"7"},{"suit":"♥","value":"7"},{"suit":"♠","value":"2"},{"suit":"♥","value":"Q"},{"suit":"♣","value":"4"},{"suit":"♣","value":"3"},{"suit":"♣","value":"6"},{"suit":"♦","value":"3"},{"suit":"♠","value":"8"},{"suit":"♥","value":"4"},{"suit":"♦","value":"7"},{"suit":"♦","value":"4"},{"suit":"♠","value":"K"},{"suit":"♣","value":"9"},{"suit":"♠","value":"4"},{"suit":"♣","value":"5"},{"suit":"♣","value":"10"},{"suit":"♣","value":"A"},{"suit":"♠","value":"10"},{"suit":"♦","value":"Q"},{"suit":"♥","value":"10"},{"suit":"♥","value":"J"},{"suit":"♣","value":"7"},{"suit":"♠","value":"Q"},{"suit":"♥","value":"K"},{"suit":"♠","value":"6"},{"suit":"♥","value":"9"},{"suit":"♦","value":"6"},{"suit":"♥","value":"5"},{"suit":"♦","value":"5"},{"suit":"♦","value":"2"},{"suit":"♠","value":"5"},{"suit":"♥","value":"3"},{"suit":"♥","value":"A"},{"suit":"♦","value":"K"}
]}
