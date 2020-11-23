import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  isNotBackstagePass,
  isLegendary,
  isExpired,
  decreaseQuality,
  isLowQuality,
} from '../../logic';

export function decrementQuality(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return (
        !isExpired(input) &&
        isNotBackstagePass(input) &&
        isLowQuality(input) &&
        !isLegendary(input)
      );
    },

    process(input: Item): Item {
      return decreaseQuality(input);
    },
  };
}
