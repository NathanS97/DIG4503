// Lab 6 - React + fetch()

// Express definition
const Express = require('express');
const App = Express();
const port = 80;
const chalk = require('chalk');

// Defines Pokemon array from JSON Package
const pokemons = require('json-pokemon');

const cors = require('cors');

App.use(cors());
App.get('/', Express.static('client/build'));

// Searches pokemons Array for a pokemon's ID number
App.get('/id/:id', (req, res) => {
  let result = { error: "No Pokemon exists with that ID" };

  pokemons.forEach((value) => {
    if (value.id == req.params.id) {
      result = value;
    }
  });
  if (result.error) {
    console.log(chalk.red(req.path));
  }
  res.send(result);
});

// Searches pokemons array for a pokemon's name
App.get('/name/:name', (req, res) => {
  let result = { error: "No Pokemon matches that name" };

  pokemons.forEach((value) => {
    if (value.name == req.params.name) {
      result = value;
    }
  });
  if (result.error) {
    console.log(chalk.red(req.path));
  }
  res.send(result);
});

App.listen(port, () => {
  console.log('Server running!');
});
