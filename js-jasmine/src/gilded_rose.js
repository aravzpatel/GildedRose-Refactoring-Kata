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
        this._reduceSellIn(item);
      }

      if(item.name === 'Aged Brie'){
        this._agedBrieQuality(item);
      }else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        this._backstagePassQuality(item);
      } else if(item.name === 'Sulfuras, Hand of Ragnaros'){
        /* no change */
      } else if (item.name === 'Conjured') {
        this._conjuredItem(item)
      } else {
        this._normalItem(item);
      }
    }
    
    return this.items;
  }

  _increaseQuality(product){
    product.quality += 1
  }

  _agedBrieQuality(product){
    if(product.quality < 50){
      this._increaseQuality(product);

      if (product.sellIn < 0 && product.quality < 50){
        this._increaseQuality(product);
      } 
    }
  }

  _backstagePassQuality(product){
    if(this._pastSellIn(product)){
      this._zeroQuality(product)
    } else if (this._lessthan50(product)){
        this._increaseQuality(product);
        
        this._fewerThanXDaysAndLessThan50(product, 11);
        
        this._fewerThanXDaysAndLessThan50(product, 6);
    }
  }

  _pastSellIn(product){
    return product.sellIn < 0;
  }

  _zeroQuality(product){
    product.quality = 0;
  }

  _fewerThanXDaysAndLessThan50(product, days){
    if(product.sellIn < days && this._lessthan50(product)){
      this._increaseQuality(product);
    }
  }

  _lessthan50(product){
    return product.quality < 50
  }

  _positiveQuality(product){
    return product.quality > 0
  }

  _reduceQuality(product){
    product.quality -= 1
  }

  _normalItem(product){
    if (this._positiveQuality(product)){
      this._reduceQuality(product)
    }

    if (this._pastSellIn(product) && this._positiveQuality(product)){
      this._reduceQuality(product)
    }
  }

  _conjuredItem(product){
    if (this._positiveQuality(product)){
      this._reduceQuality(product)
    }
    
    if (this._positiveQuality(product)){
      this._reduceQuality(product)
    }

    if (this._pastSellIn(product) && this._positiveQuality(product)){
      this._reduceQuality(product)
    }
    
    if (this._pastSellIn(product) && this._positiveQuality(product)){
      this._reduceQuality(product)
    }
  }

  _reduceSellIn(product){
    product.sellIn -= 1
  }
  
}
module.exports = {
  Item,
  Shop
}
