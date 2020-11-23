import { Item } from '../item';
import { createRuleEngine } from './create-rule-engine';
import { Rule } from './types/rule';

describe('Rule Engine', () => {
  it('can register new rule', () => {
    const isExpired = (): Rule<Item, Item> => ({
      matches(input: Item) {
        return input.sellIn < 0;
      },

      process(input: Item): Item {
        input.quality = input.quality - 2;
        return input;
      },
    });

    const item = new Item('foo', -1, 0);

    const engine = createRuleEngine();

    engine.registerRule(isExpired());
    const processedItem = engine.rule(item);

    expect(processedItem).toMatchInlineSnapshot(`
      Item {
        "name": "foo",
        "quality": -2,
        "sellIn": -1,
      }
    `);
  });

  it('throws when no rule is found', () => {
    const item = new Item('foo', -1, 0);

    const engine = createRuleEngine();

    expect(() => {
      engine.rule(item);
    }).toThrowError('No matching rule found');
  });
});
