// Lab 5 - Fetch and Routes

// Express server definition
const Express = require('express');
const App = Express();
const port = 80;

// Defines Pokemon array from JSON Package
const pokemons = require('json-pokemon');

App.use('/', Express.static('public'));

// Searches pokemons Array for a pokemon's ID number
App.get('/id/:id', (req, res) => {
  let result = { error: "That ID doesn't exist!" };

  pokemons.forEach(value => {
    if (value.id == req.params.id) {
      result = value;
    }
  });

  res.json(result);
});

// Searches pokemons array for a pokemon's name
App.get('/name/:name', (req, res) => {
  let result = { error: "That name doesn't exist! (Case Sensitive)" };

  pokemons.forEach(value => {
    if (value.name == req.params.name) {
      result = value;
    }
  });

  res.json(result);
});

App.listen(port, () => {
  console.log('Server running!');
});
