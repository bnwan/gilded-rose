import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import { decreaseQuality } from '../../logic';

export function conjured(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return input.name === 'Conjured Mana Cake';
    },

    process(input: Item): Item {
      return decreaseQuality(input);
    },
  };
}
