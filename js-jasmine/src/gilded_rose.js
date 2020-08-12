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
      } else if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        if(item.sellIn < 0){
          item.quality = 0
        } else {
          if (item.quality < 50 && item.name != 'Aged Brie') {
            item.quality += 1; /*increases the quality of the SPECIAL items*/
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality += 1; /*increases the quality by 2 of a backstage pass*/
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality += 1; /* increases the quality by 3 of a backstage pass*/
                }
              }
            }
          }
        }
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
  
}
module.exports = {
  Item,
  Shop
}
