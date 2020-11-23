import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import { isLegendary } from '../../logic';

export function legendary(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return isLegendary(input);
    },

    process(input: Item): Item {
      return input;
    },
  };
}
