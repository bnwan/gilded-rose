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

  isLegendary(item: Item): boolean {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  decrementQuality(item: Item) {
    item.quality = item.quality === 0 ? 0 : item.quality - 1;
  }

  incrementQuality(item: Item) {
    item.quality = item.quality + 1;
  }

  withinQualityLimit(item: Item): boolean {
    return item.quality >= 0 && item.quality < 50;
  }

  isHighQuality(item: Item): boolean {
    return item.quality < 50;
  }

  isNotBackstagePass(item: Item): boolean {
    return (
      item.name != 'Aged Brie' &&
      item.name != 'Backstage passes to a TAFKAL80ETC concert'
    );
  }

  isTicket(item: Item): boolean {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  updateQuality() {
    for (const item of this.items) {
      if (this.isNotBackstagePass(item)) {
        if (this.withinQualityLimit(item) && !this.isLegendary(item)) {
          this.decrementQuality(item);
        }
      } else {
        if (this.withinQualityLimit(item)) {
          this.incrementQuality(item);
          if (this.isTicket(item)) {
            if (item.sellIn < 11 && this.isHighQuality(item)) {
              this.incrementQuality(item);
            }
            if (item.sellIn < 6 && this.isHighQuality(item)) {
              this.incrementQuality(item);
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
