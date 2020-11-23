import { Item } from './item';

export function isExpired(item: Item): boolean {
  return item.sellIn < 0;
}

export function isLegendary(item: Item): boolean {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}

export function decreaseQuality(item: Item, rate: number = 1): Item {
  item.quality = item.quality === 0 ? 0 : item.quality - rate;
  return item;
}

export function increaseQuality(item: Item): Item {
  item.quality = item.quality + 1;
  return item;
}

export function isHighQuality(item: Item): boolean {
  return item.quality < 50;
}

export function isLowQuality(item: Item): boolean {
  return item.quality > 0;
}

export function isNotBackstagePass(item: Item): boolean {
  return (
    item.name != 'Aged Brie' &&
    item.name != 'Backstage passes to a TAFKAL80ETC concert'
  );
}

export function isTicket(item: Item): boolean {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

export function isCheese(item: Item): boolean {
  return item.name === 'Aged Brie';
}

export function decrementSellIn(item: Item): Item {
  item.sellIn = item.sellIn - 1;
  return item;
}

export function initializeQuality(item: Item): Item {
  item.quality = 0;
  return item;
}
