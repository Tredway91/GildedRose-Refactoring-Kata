const { Item } = require("./Item");

class BackstageItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }

    this.quality++;

    if (this.sellIn < 10) {
      this.quality = Math.min(this.quality + 1, 50);
    }

    if (this.sellIn < 5) {
      this.quality = Math.min(this.quality + 1, 50);
    }

    if (this.quality === 50) return;
  }
}

module.exports = { BackstageItem };
