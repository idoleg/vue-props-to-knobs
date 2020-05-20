import { sort } from '../src/sort';

const items = {
  errorMessages: {},
  errors: {},
  hint: {},
  required: {},
  disabled: {},
  readonly: {},
  value: {},
};
const groups = {
  'group 1': ['test', 'required', 'hint', 'disabled'],
  'group 2': ['readonly', 'errorMessages', 'errors'],
};
const result = {
  required: {},
  hint: {},
  disabled: {},
  readonly: {},
  errorMessages: {},
  errors: {},
  value: {},
};

describe('sort', () => {
  it('should sort items by group rule', () => {
    expect(sort(items, groups)).toEqual(result);
  });
});
