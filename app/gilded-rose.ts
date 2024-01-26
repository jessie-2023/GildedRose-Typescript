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
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') // legendary item, never has to be sold or decreases in Quality
            {
                if (this.items[i].quality >= 0 && this.items[i].quality < 50)
                {
                    if (this.items[i].name == 'Aged Brie') 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.min(this.items[i].quality + 1, 50): // increase by 1
                        Math.min(this.items[i].quality + 2, 50); // increase by 2 if outdated
                    } 
                    else if (this.items[i].name == 'Conjured Mana Cake') 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.max(this.items[i].quality - 2, 0): // degrade by 2
                        Math.max(this.items[i].quality - 4, 0); // degrade by 4 if outdated
                    }
                    else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert')
                    {
                        if (this.items[i].sellIn > 11) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 1, 50); // increases by 1
                        }
                        else if (this.items[i].sellIn <= 11 && this.items[i].sellIn >= 6) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 2, 50); // increases by 2 when there are 10 days or less
                        }
                        else if (this.items[i].sellIn < 6 && this.items[i].sellIn > 0) 
                        {
                            this.items[i].quality = Math.min(this.items[i].quality + 3, 50); // increases by 3 when there are 5 days o less
                        } 
                        else
                        {
                            this.items[i].quality = 0; // drops to 0 after the concert
                        }
                    }
                    else 
                    {
                        this.items[i].quality=  (this.items[i].sellIn > 0) ?  Math.max(this.items[i].quality - 1, 0): // degrade by 1
                        Math.max(this.items[i].quality - 2, 0); // degrade by 2 if outdated
                    } 

                }
                
        
                this.items[i].sellIn -= 1;
            } 
        }
        return this.items;
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    // updateQuality() {
    //     for (let i = 0; i < this.items.length; i++) {

    //         if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') 
    //         { 
    //             if (this.items[i].quality > 0) 
    //             {
    //                 if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') 
    //                 { // degrades by 1 if not A/B/S
    //                     this.items[i].quality = this.items[i].quality - 1
    //                 }
    //             }
    //         } 
    //         else 
    //         {
    //             if (this.items[i].quality < 50) 
    //             {   // increases by 1 if A/B
    //                 this.items[i].quality = this.items[i].quality + 1
    //                 if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') 
    //                 {
    //                     if (this.items[i].sellIn < 11) 
    //                     { // further increases by 1 for B
    //                         if (this.items[i].quality < 50) 
    //                         {   
    //                             this.items[i].quality = this.items[i].quality + 1
    //                         }
    //                     }
    //                     if (this.items[i].sellIn < 6) 
    //                     { // further further increases by 1 for B 
    //                         if (this.items[i].quality < 50) 
    //                         {
    //                             this.items[i].quality = this.items[i].quality + 1
    //                         }
    //                     }
    //                 }
    //             }
    //         }

    //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') 
    //         {   // reduce sellIn if not S
    //             this.items[i].sellIn = this.items[i].sellIn - 1;
    //         }

    //         if (this.items[i].sellIn < 0) 
    //         {
    //             if (this.items[i].name != 'Aged Brie') 
    //             {
    //                 if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') 
    //                 {
    //                     if (this.items[i].quality > 0) 
    //                     {
    //                         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') 
    //                         {   // degrade by 2 if outdated for A/B/S
    //                             this.items[i].quality = this.items[i].quality - 1
    //                         }
    //                     }
    //                 } 
    //                 else 
    //                 {   // degrade to 0 for B if outdated
    //                     this.items[i].quality = this.items[i].quality - this.items[i].quality
    //                 }
    //             } else 
    //             {
    //                 if (this.items[i].quality < 50) 
    //                 {   // increase by 2 if outdated for A
    //                     this.items[i].quality = this.items[i].quality + 1
    //                 }
    //             }
    //         }
    //     }

    //     return this.items;
    // }


}
        //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //         if (this.items[i].quality > 0) {
        //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                 this.items[i].quality = this.items[i].quality - 1
        //             }
        //         }
        //     } else {
        //         if (this.items[i].quality < 50) {
        //             this.items[i].quality = this.items[i].quality + 1
        //             if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].sellIn < 11) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //                 if (this.items[i].sellIn < 6) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //         this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }
        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Aged Brie') {
        //             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                         this.items[i].quality = this.items[i].quality - 1
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality
        //             }
        //         } else {
        //             if (this.items[i].quality < 50) {
        //                 this.items[i].quality = this.items[i].quality + 1
        //             }
        //         }
        //     }
        // }


