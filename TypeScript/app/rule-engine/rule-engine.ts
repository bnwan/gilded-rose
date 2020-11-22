import { Item } from '../gilded-rose';
import { Rule } from './types/rule';
import { RuleEngine } from './types/rule-engine';

export function ruleEngine(): RuleEngine {
  const rules: Rule<Item, Item>[] = [];

  return {
    rule(item: Item): Item {
      return rules
        .filter((rule) => rule.matches(item))
        .map((rule) => rule.process(item))[0];
    },

    registerRule(rule: Rule<Item, Item>): RuleEngine {
      rules.push(rule);
      return this;
    },
  };
}
