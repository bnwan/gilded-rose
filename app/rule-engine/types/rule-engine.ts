import { Item } from '../../item';
import { Rule } from './rule';

export interface RuleEngine {
  rule(item: Item): Item;
  registerRule(...rulesToRegister: Rule<Item, Item>[]): RuleEngine;
}
