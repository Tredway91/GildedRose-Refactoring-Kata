const { Item } = require("./Item");

class AgedItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn--;
    if (this.quality === 50) return;
    this.quality++;

    if (this.sellIn < 0) {
      this.quality = Math.min(this.quality + 1, 50);
    }
  }
}

module.exports = { AgedItem };
