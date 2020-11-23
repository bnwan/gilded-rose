import { Item } from '../../item';
import { Rule } from '../../rule-engine/types/rule';
import {
  isExpired,
  isHighQuality,
  isNotBackstagePass,
  isTicket,
} from '../../logic';

export function tenDaysOrless(): Rule<Item, Item> {
  return {
    matches(input: Item) {
      return (
        !isExpired(input) &&
        !isNotBackstagePass(input) &&
        isTicket(input) &&
        input.sellIn <= 10 &&
        isHighQuality(input)
      );
    },

    process(input: Item): Item {
      input.quality = input.quality + 1;
      return input;
    },
  };
}
