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
    
    for (var i = 0; i < this.items.length; i++) { /*this iterates through the items*/
      var item = this.items[i]

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1; /*changes the sellin*/
      }

      if(item.name === 'Aged Brie'){
        this.agedBrieQuality(item)
      }else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        this.backstagePassQuality(item)
      } else if(item.name === 'Sulfuras, Hand of Ragnaros'){
        /* no change */
      } else {
        if (item.quality > 0){
          item.quality -= 1;
        }

        if (item.sellIn < 0 && item.quality > 0){
          item.quality -= 1;
        }
      }

    }

    return this.items; /*returns the list of items*/
  }

  increaseQuality(product){
    product.quality += 1
  }

  agedBrieQuality(product){
    if(product.quality < 50){
      this.increaseQuality(product); /* increases the quality of aged brie*/

      if (product.sellIn < 0 && product.quality < 50){
        this.increaseQuality(product);
      } 
    }
  }

  backstagePassQuality(product){
    if(this.pastSellIn(product)){
      this.zeroQuality(product)
    } else if (this.lessthan50(product)){
        this.increaseQuality(product); /*increases the quality of the SPECIAL items*/
        
        if (this.fewerThan11DaysAndLessThan50(product)){
          this.increaseQuality(product); /*increases the quality by 2 of a backstage pass*/
        }

        if (this.fewerThan6DaysAndLessThan50(product)){
          this.increaseQuality(product); /*increases the quality by 2 of a backstage pass*/
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
  
}
module.exports = {
  Item,
  Shop
}
