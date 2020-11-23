import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  isExpired,
  isHighQuality,
  increaseQuality,
  isCheese,
} from '../../logic';

export function incrementQuallity(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return isExpired(input) && isCheese(input) && isHighQuality(input);
    },

    process(input: Item): Item {
      return increaseQuality(input);
    },
  };
}
