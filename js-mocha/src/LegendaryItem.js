const { Item } = require("./Item");

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

module.exports = { LegendaryItem };
