import { Item } from './item';
import { createRuleEngine } from './rule-engine';
import { RuleEngine } from './rule-engine/types/rule-engine';
import { expiredRules, unexpiredRules, reduceSellByValue } from './rules';

export class GildedRose {
  items: Array<Item>;
  rulesEngine: RuleEngine;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.rulesEngine = createRuleEngine();

    this.rulesEngine.registerRule(
      unexpiredRules.decrementQuality(),
      unexpiredRules.tenDaysOrless(),
      unexpiredRules.fiveDaysOrLess(),
      unexpiredRules.legendary(),
      unexpiredRules.conjured(),
      reduceSellByValue(),
      expiredRules.incrementQuallity(),
      expiredRules.decrementQuallity(),
      expiredRules.resetQuallity()
    );
  }

  updateQuality() {
    for (const item of this.items) {
      this.rulesEngine.rule(item);
    }

    return this.items;
  }
}
