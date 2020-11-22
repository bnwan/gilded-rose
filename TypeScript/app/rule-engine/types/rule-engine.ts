import { Item } from '../../gilded-rose';
import { Rule } from './rule';

export interface RuleEngine {
  rule(item: Item): Item;
  registerRule(rule: Rule<Item, Item>): RuleEngine;
}
