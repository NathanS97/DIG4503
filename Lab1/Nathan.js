const Person = require("./Person.js");

class Nathan extends Person {
  constructor(name, colors, bgColors) {
   super(name, colors, bgColors);
  }
}

module.exports = Nathan;