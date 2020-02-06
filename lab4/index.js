//Lab 4 - Dynamic Express

// Express server definition
const Express = require("express");
const App = Express();
const port = 80;

// Defines Pokemon array from JSON Package
const pokemons = require("json-pokemon");

// Defines Chalk for console styling
const chalk = require("chalk");

// Searches pokemons Array for a pokemon's ID number
App.get("/id/:id", (req, res) => {
  let result = { error: "That ID doesn't exist!" };

  pokemons.forEach(value => {
    if (value.id == req.params.id) {
      result = value;
      res.send(value);
    }
  });

  // Prints error in red to the console if incorrect path
  // Prints path in green if correct
  if (result.error) {
    console.log(chalk.red(result.error));
  } else {
    console.log(chalk.green(req.path));
  }
});

// Searches pokemons array for a pokemon's name
App.get("/name/:name", (req, res) => {
  let result = { error: "That name doesn't exist! (Case Sensitive)" };

  pokemons.forEach(value => {
    if (value.name == req.params.name) {
      result = value;
      res.send(value);
    }
  });

  // Prints error in red to the console if incorrect path
  // Prints path in green if correct
  if (result.error) {
    // Invalid
    console.log(chalk.red(result.error));
  } else {
    // Valid
    console.log(chalk.green(req.path));
  }
});

App.listen(port, () => {
  console.log("Server running!");
});
