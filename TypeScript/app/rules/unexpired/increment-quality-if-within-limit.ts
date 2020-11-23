import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  isExpired,
  increaseQuality,
  isHighQuality,
  isNotBackstagePass,
} from '../../logic';

export function incrementQuallityIfWithinLimit(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return (
        !isExpired(input) && !isNotBackstagePass(input) && isHighQuality(input)
      );
    },

    process(input: Item): Item {
      return increaseQuality(input);
    },
  };
}
