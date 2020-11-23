import { Item } from '../item';
import { Rule } from './types/rule';
import { RuleEngine } from './types/rule-engine';

export function createRuleEngine(): RuleEngine {
  let rules: Rule<Item, Item>[] = [];

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

    registerRule(...rulesToRegister: Rule<Item, Item>[]): RuleEngine {
      rules = [...rules, ...rulesToRegister];
      return this;
    },
  };
}
