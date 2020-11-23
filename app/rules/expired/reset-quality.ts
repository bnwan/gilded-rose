import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  initializeQuality,
  isCheese,
  isExpired,
  isLegendary,
  isLowQuality,
  isTicket,
} from '../../logic';

export function resetQuallity(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return (
        isExpired(input) &&
        !isCheese(input) &&
        isTicket(input) &&
        !isLowQuality(input) &&
        isLegendary(input)
      );
    },

    process(input: Item): Item {
      return initializeQuality(input);
    },
  };
}
