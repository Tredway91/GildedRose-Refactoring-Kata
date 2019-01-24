const { Item } = require("./Item");

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn--;
    if (this.quality === 0) return;
    this.quality -= 2;

    if (this.sellIn < 0) {
      this.quality = Math.max((this.quality -= 2), 0);
    }
  }
}

module.exports = { ConjuredItem };
