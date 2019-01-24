const { Item } = require("./Item");

class NormalItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn--;
    if (this.quality === 0) return;
    this.quality--;

    if (this.sellIn < 0) {
      this.quality = Math.max(this.quality - 1, 0);
    }
  }
}

module.exports = { NormalItem };
