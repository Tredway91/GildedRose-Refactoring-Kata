const { expect } = require("chai");
const { Shop } = require("../src/gilded_rose.js");

describe("Gilded Rose", function() {
  describe("Normal items", function() {
    it("should decrement quality by 1 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("+5 Dexterity Vest", 10, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(19);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(18);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(17);
    });

    it("should decrement the sellIn property by 1 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("+5 Dexterity Vest", 10, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.sellIn).to.equal(10);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(9);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(8);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(7);
    });

    it("should decrement the quality by 2 each day when sellIn is less than 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("+5 Dexterity Vest", 0, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(18);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(16);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(14);
    });

    it("should never decrement the quality below 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("+5 Dexterity Vest", 0, 0);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
    });
  });

  describe("Aged Brie", function() {
    it("should increment the quality by 1 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Aged Brie", 2, 0);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(1);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(2);
    });

    it("should decrement the sellIn property by 1 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Aged Brie", 2, 0);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.sellIn).to.equal(2);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(1);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(0);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(-1);
    });

    it("should increment the quality by 2 each day when sellIn is less than 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Aged Brie", 0, 0);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(2);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(4);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(6);
    });

    it("should never increment the quality abve 50", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Aged Brie", 0, 47);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(47);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(49);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(50);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(50);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("should never update the sellIn or quality properties", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Sulfuras, Hand of Ragnaros", 0, 80);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(80);
      expect(item.sellIn).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(80);
      expect(item.sellIn).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(80);
      expect(item.sellIn).to.equal(0);
      gildedRose.updateQuality();
    });
  });

  describe("Backstage passes", function() {
    it("should increment the quality by 1 each day while sellIn is greater than 10", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 15, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(21);
      expect(item.quality).to.equal(21);
    });

    it("should decrement the sellIn property by 1 each day", function() {
      // prettier-ignore
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 15, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.sellIn).to.equal(15);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(14);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(13);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(12);
    });

    it("should increment the quality by 2 each day while sellIn is less than 10 but greater than 5", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 10, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(22);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(24);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(26);
      gildedRose.updateQuality();
    });

    it("should increment the quality by 3 each day while sellIn is less than 5 but greater than 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 5, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(23);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(26);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(29);
    });

    it("should set the quality to 0 when sellIn is less than 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 0, 20);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(20);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
    });

    it("should never increment the quality abve 50", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 4, 48);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(48);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(50);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(50);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(50);
    });
  });

  describe("Conjured items", function() {
    it("should decrement quality by 2 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Conjured Mana Cake", 3, 6);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(6);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(4);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(2);
    });

    it("should decrement the quality by 4 each day when sellIn is less than 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Conjured Mana Cake", 0, 9);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(9);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(5);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(1);
    });

    it("should decrement the sellIn property by 1 each day", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Conjured Mana Cake", 3, 6);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.sellIn).to.equal(3);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(2);
      gildedRose.updateQuality();
      expect(item.sellIn).to.equal(1);
    });

    it("should never decrement the quality below 0", function() {
      const gildedRose = new Shop();
      gildedRose.addItem("Conjured Mana Cake", 1, 4);
      //prettier-ignore
      const { items: [item] } = gildedRose;
      expect(item.quality).to.equal(4);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(2);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
      gildedRose.updateQuality();
      expect(item.quality).to.equal(0);
    });
  });
});
