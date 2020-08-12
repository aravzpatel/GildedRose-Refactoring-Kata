var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe("normal products", function(){
    it("before the sellin, it should decrease the quality by 1", function(){
      const gildedRose = new Shop([ new Item("normal", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(2);
    })

    it("after the sellin, it should decrease the quality by 2", function(){
      const gildedRose = new Shop([ new Item("normal", -1, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(1);
    })

    it("when quality = 0, it should not decrease the quality", function(){
      const gildedRose = new Shop([ new Item("normal", 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(0);
    })
  })

  describe("sulfuras", function(){
    it("it does not change quality or sellin", function(){
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(3);
      expect(items[0].quality).toEqual(3);
    })
  })

  describe("aged brie", function(){
    it("before the sellin, it should increase in quality by 1", function(){
      const gildedRose = new Shop([ new Item("Aged Brie", 3, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(2);
    })

    it("after the sellin, it should decrease the quality by 2", function(){
      const gildedRose = new Shop([ new Item("normal", -1, 3) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(1);
    })

    it("when quality = 0, it should not decrease the quality", function(){
      const gildedRose = new Shop([ new Item("normal", 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(0);
    })
  })

});
