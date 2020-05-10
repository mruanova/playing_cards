var decksController = require('../controllers/decksController.js');

module.exports = function (app) {
    app.get("/api/decks", decksController.index);
    app.get("/api/create", decksController.create);
    app.get("/api/decks/:id", decksController.show);
}