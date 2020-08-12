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

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; /*changes the sellin*/
      }

      if(this.items[i].name === 'Aged Brie'){
        if(this.items[i].quality < 50){
          if (this.items[i].sellIn > 0) {
            this.items[i].quality += 1; /* increases the quality of aged brie*/
          } else if (this.items[i].sellIn < 0){
            if (this.items[i].quality <48){
              this.items[i].quality += 2;
            } else {
              this.items[i].quality += 1;
            }
          } 
        }
      }

      if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        if(this.items[i].sellIn < 0){
          this.items[i].quality = 0
        } else {
          if (this.items[i].quality < 50 && this.items[i].name != 'Aged Brie') {
            this.items[i].quality = this.items[i].quality + 1; /*increases the quality of the SPECIAL items*/
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1; /*increases the quality by 2 of a backstage pass*/
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1; /* increases the quality by 3 of a backstage pass*/
                }
              }
            }
          }
        }
        
      }




      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        } /*reduces the quality of all items apart from the special items*/
      } else {
        
      }



      


      if (this.items[i].sellIn < 0) {
        if(this.items[i].name != 'Aged Brie'){
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }/* decreases the quality of normal items by 1 after the sellin date, on top of the 1 that has previously been reduced*/
          }
        }
      }
    }

    return this.items; /*returns the list of items*/
  }

  lessthan50(element){
    element.quality < 50
  }
  
}
module.exports = {
  Item,
  Shop
}
