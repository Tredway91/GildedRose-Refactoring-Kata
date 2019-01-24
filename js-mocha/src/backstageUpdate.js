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

module.exports = { backstageUpdate };
