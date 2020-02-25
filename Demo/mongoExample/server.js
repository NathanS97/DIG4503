const Express = require('express');
const App = Express();
const port = 80;

const Database = require('./Database.js');

let database = new Database();

App.get('/movies/tite/:title', (req, res) => {
  let result = { "error": "Not Found" };

  let movie = database.findTitle(req.params.title);

  if (movie != null) {
    result = movie;
  }

  res.json(result);
})

App.get('/movies/year/:title', (req, res) => {
  let result = { "error": "Not Found" };

  res.json(result);
})

App.listen(port, () => {

});