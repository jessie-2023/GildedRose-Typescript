export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' ) // legendary item, never has to be sold or decreases in Quality
            {
                if (this.items[i].quality < 50 && this.items[i].quality > 0) {
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    
                    if (this.items[i].name != 'Aged Brie') 
                    {
                        this.items[i].quality += 1; // increases by 1
                    } 
                    else if (this.items[i].name == 'Conjured Mana Cake') 
                    {
                        if (this.items[i].sellIn > 0) 
                        {
                            this.items[i].quality -= 2; // degrades twice as fast as normal items
                        }
                        else
                        {
                            this.items[i].quality -= 2 * 2; // Once the sell by date has passed, Quality degrades twice as fast
                        }
                    }
                    else if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert')
                    {
                        if (this.items[i].sellIn > 10) 
                        {
                            this.items[i].quality += 1; // increases by 1
                        }
                        else if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) 
                        {
                            this.items[i].quality += 2; // increases by 2 when there are 10 days or less
                        }
                        else if (this.items[i].sellIn <= 5 && this.items[i].sellIn > 0) 
                        {
                            this.items[i].quality += 3; // increases by 3 when there are 5 days o less
                        } 
                        else
                        {
                            this.items[i].quality = 0; // drops to 0 after the concert
                        }
                    }
                    else 
                    {
                        if (this.items[i].sellIn > 0) 
                        {
                            this.items[i].quality -= 1; // degrades by 1
                        }
                        else
                        {
                            this.items[i].quality -= 1 * 2; // Once the sell by date has passed, Quality degrades twice as fast
                        }
                    }
                } 
                else //The Quality of an item is never negative nor more than 50
                {
                    console.log(`Quality of ${this.items[i].name} must between 0 and 50, please check!`)
                }
            } 


            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
