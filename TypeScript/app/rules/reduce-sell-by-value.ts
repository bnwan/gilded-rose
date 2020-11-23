import { Item } from '../item';
import { Rule } from '../rule-engine/types/rule';
import { isLegendary, decrementSellIn } from '../logic';

export function reduceSellByValue(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return !isLegendary(input);
    },

    process(input: Item): Item {
      return decrementSellIn(input);
    },
  };
}
