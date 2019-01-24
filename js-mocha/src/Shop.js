const {
  normalUpdate,
  brieUpdate,
  sulfurasUpdate,
  backstageUpdate,
  conjureUpdate
} = require("./updates");

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case "Aged Brie":
          brieUpdate(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          backstageUpdate(this.items[i]);
          break;
        case "Sulfuras, Hand of Ragnaros":
          sulfurasUpdate(this.items[i]);
          break;
        case "Conjured Mana Cake":
          conjureUpdate(this.items[i]);
          break;
        default:
          normalUpdate(this.items[i]);
          break;
      }
    }

    return this.items;
  }
}

module.exports = { Shop };
