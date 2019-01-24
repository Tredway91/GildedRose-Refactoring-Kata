const normalUpdate = function(item) {
  item.sellIn--;
  if (item.quality === 0) return;
  item.quality--;

  if (item.sellIn < 0) {
    item.quality = Math.max(item.quality - 1, 0);
  }
};

const brieUpdate = function(item) {
  item.sellIn--;
  if (item.quality === 50) return;
  item.quality++;

  if (item.sellIn < 0) {
    item.quality = Math.min(item.quality + 1, 50);
  }
};

const sulfurasUpdate = function(item) {};

const backstageUpdate = function(item) {
  item.sellIn--;
  if (item.sellIn < 0) {
    item.quality = 0;
    return;
  }

  item.quality++;

  if (item.sellIn < 10) {
    item.quality = Math.min(item.quality + 1, 50);
  }

  if (item.sellIn < 5) {
    item.quality = Math.min(item.quality + 1, 50);
  }

  if (item.quality === 50) return;
};

const conjureUpdate = function(item) {
  item.sellIn--;
  if (item.quality === 0) return;
  item.quality -= 2;

  if (item.sellIn < 0) {
    item.quality = Math.max((item.quality -= 2), 0);
  }
};

module.exports = {
  normalUpdate,
  brieUpdate,
  sulfurasUpdate,
  backstageUpdate,
  conjureUpdate
};
