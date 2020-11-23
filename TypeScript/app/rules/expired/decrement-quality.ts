import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  isLegendary,
  isExpired,
  isCheese,
  isTicket,
  isLowQuality,
  decreaseQuality,
} from '../../logic';

export function decrementQuallity(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return (
        isExpired(input) &&
        !isCheese(input) &&
        !isTicket(input) &&
        isLowQuality(input) &&
        !isLegendary(input)
      );
    },

    process(input: Item): Item {
      return decreaseQuality(input);
    },
  };
}
