export interface Rule<I, O> {
  matches(input: I): boolean;
  process(input: I): O;
}
