import { Item } from '../gilded-rose';
import { Rule } from './types/rule';
import { RuleEngine } from './types/rule-engine';

export function createRuleEngine(): RuleEngine {
  const rules: Rule<Item, Item>[] = [];

  return {
    rule(item: Item): Item {
      const processedRules = rules
        .filter((rule) => rule.matches(item))
        .map((rule) => rule.process(item));

      if (processedRules.length > 0) {
        return processedRules[0];
      }

      throw new Error(`No matching rule found`);
    },

    registerRule(rule: Rule<Item, Item>): RuleEngine {
      rules.push(rule);
      return this;
    },
  };
}
