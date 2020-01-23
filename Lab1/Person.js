const chalk = require("./node_modules/chalk");
const beep = require("./node_modules/beepbeep");

class Person {
  constructor(name, favColors, backgroundColors) {
    this.name = name;
    this.favColors = favColors;
    this.backgroundColors = backgroundColors;
  }

  speak() {
    for (let i = 0; i < this.favColors.length; i++) {
      console.log(
        chalk.bgHex(this.backgroundColors[i]).hex(this.favColors[i])(this.name)
      );
      beep();
    }

    //console.log(chalk.bgHex(this.backgroundColor)(this.favColor)(this.name));
    beep();
  }
}

module.exports = Person;
