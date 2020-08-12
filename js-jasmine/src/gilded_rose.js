class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i]

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this.reduceSellIn(item);
      }

      if(item.name === 'Aged Brie'){
        this.agedBrieQuality(item);
      }else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        this.backstagePassQuality(item);
      } else if(item.name === 'Sulfuras, Hand of Ragnaros'){
        /* no change */
      } else {
        this.normalItem(item);
      }
    }
    
    return this.items;
  }

  increaseQuality(product){
    product.quality += 1
  }

  agedBrieQuality(product){
    if(product.quality < 50){
      this.increaseQuality(product);

      if (product.sellIn < 0 && product.quality < 50){
        this.increaseQuality(product);
      } 
    }
  }

  backstagePassQuality(product){
    if(this.pastSellIn(product)){
      this.zeroQuality(product)
    } else if (this.lessthan50(product)){
        this.increaseQuality(product);
        
        if (this.fewerThan11DaysAndLessThan50(product)){
          this.increaseQuality(product);
        }

        if (this.fewerThan6DaysAndLessThan50(product)){
          this.increaseQuality(product);
        }
    }
  }

  pastSellIn(product){
    return product.sellIn < 0;
  }

  zeroQuality(product){
    product.quality = 0;
  }

  fewerThan11DaysAndLessThan50(product){
    return product.sellIn < 11 && this.lessthan50(product)
  }

  fewerThan6DaysAndLessThan50(product){
    return product.sellIn < 6 && this.lessthan50(product)
  }

  lessthan50(product){
    return product.quality < 50
  }

  positiveQuality(product){
    return product.quality > 0
  }

  reduceQuality(product){
    product.quality -= 1
  }

  normalItem(product){
    if (this.positiveQuality(product)){
      this.reduceQuality(product)
    }

    if (this.pastSellIn(product) && this.positiveQuality(product)){
      this.reduceQuality(product)
    }
  }

  thisItem(name, product){
    return product.name === name
  }

  reduceSellIn(product){
    product.sellIn -= 1
  }
  
}
module.exports = {
  Item,
  Shop
}
