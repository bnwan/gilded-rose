import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item';

describe('Gilded Rose', function () {
  it('', () => {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Conjured Mana Cake', 3, 6),
    ];

    const gildedRose = new GildedRose(items);
    const result = gildedRose.updateQuality();

    expect(result).toMatchInlineSnapshot(`
      Array [
        Item {
          "name": "+5 Dexterity Vest",
          "quality": 19,
          "sellIn": 9,
        },
        Item {
          "name": "Aged Brie",
          "quality": 0,
          "sellIn": 1,
        },
        Item {
          "name": "Elixir of the Mongoose",
          "quality": 6,
          "sellIn": 4,
        },
        Item {
          "name": "Sulfuras, Hand of Ragnaros",
          "quality": 80,
          "sellIn": 0,
        },
        Item {
          "name": "Sulfuras, Hand of Ragnaros",
          "quality": 80,
          "sellIn": -1,
        },
        Item {
          "name": "Backstage passes to a TAFKAL80ETC concert",
          "quality": 20,
          "sellIn": 14,
        },
        Item {
          "name": "Backstage passes to a TAFKAL80ETC concert",
          "quality": 50,
          "sellIn": 9,
        },
        Item {
          "name": "Backstage passes to a TAFKAL80ETC concert",
          "quality": 51,
          "sellIn": 4,
        },
        Item {
          "name": "Conjured Mana Cake",
          "quality": 4,
          "sellIn": 2,
        },
      ]
    `);
  });
});
