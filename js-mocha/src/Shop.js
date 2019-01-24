const { NormalItem } = require("./NormalItem");
const { AgedItem } = require("./AgedItem");
const { LegendaryItem } = require("./LegendaryItem");
const { BackstageItem } = require("./BackstageItem");
const { ConjuredItem } = require("./ConjuredItem");

const types = {
  "Aged Brie": AgedItem,
  "Backstage passes to a TAFKAL80ETC concert": BackstageItem,
  "Sulfuras, Hand of Ragnaros": LegendaryItem,
  "Conjured Mana Cake": ConjuredItem
};

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, sellIn, quality) {
    const itemType = types[name] || NormalItem;
    this.items.push(new itemType(name, sellIn, quality));
  }

  updateQuality() {
    for (let item of this.items) {
      item.update();
    }

    return this.items;
  }
}

module.exports = { Shop };
