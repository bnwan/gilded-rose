import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
  describe('Unexpired items', () => {
    it('supdateQuality', function () {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "foo",
              "quality": 0,
              "sellIn": -1,
            },
          ]
        `);
    });

    it('Aged Brie & quality < 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "Aged Brie",
              "quality": 1,
              "sellIn": 1,
            },
          ]
        `);
    });

    it('Backstage passes to a TAFKAL80ETC concert & quality < 50 and sellIn < 11', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40),
      ]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "Backstage passes to a TAFKAL80ETC concert",
              "quality": 42,
              "sellIn": 9,
            },
          ]
        `);
    });

    it('Backstage passes to a TAFKAL80ETC concert & quality < 50 and sellIn < 11', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40),
      ]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "Backstage passes to a TAFKAL80ETC concert",
              "quality": 43,
              "sellIn": 4,
            },
          ]
        `);
    });

    it('Backstage passes to a TAFKAL80ETC concert & quality < 50 and sellIn < 6', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      ]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "Backstage passes to a TAFKAL80ETC concert",
              "quality": 50,
              "sellIn": 4,
            },
          ]
        `);
    });

    it(`Qualily is greater than 0 and item name not "Sulfuras, Hand of Ragnaros", "Aged Brie" or "Backstage passes to a TAFKAL80ETC concert"`, () => {
      const gildedRose = new GildedRose([new Item('Not Sulfuras', 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
          Array [
            Item {
              "name": "Not Sulfuras",
              "quality": 0,
              "sellIn": 4,
            },
          ]
        `);
    });
  });

  describe('Expired items', () => {
    it(`decrement quality`, () => {
      const gildedRose = new GildedRose([new Item('Something else', -1, 5)]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
        Array [
          Item {
            "name": "Something else",
            "quality": 3,
            "sellIn": -2,
          },
        ]
      `);
    });

    it(`drop quality to zero if concert is over`, () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5),
      ]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
        Array [
          Item {
            "name": "Backstage passes to a TAFKAL80ETC concert",
            "quality": 0,
            "sellIn": -2,
          },
        ]
      `);
    });

    it(`Increment quality if Aged Brie`, () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', -1, 5)]);
      const items = gildedRose.updateQuality();
      expect(items).toMatchInlineSnapshot(`
        Array [
          Item {
            "name": "Aged Brie",
            "quality": 7,
            "sellIn": -2,
          },
        ]
      `);
    });
  });
});
