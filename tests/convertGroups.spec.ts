import { convertGroups } from '../src/convertGroups';

const groups = {
  'group 1': ['test', 'required', 'hint', 'disabled'],
  'group 2': ['readonly', 'errorMessages', 'errors'],
};
const result = {
  test: 'group 1',
  required: 'group 1',
  hint: 'group 1',
  disabled: 'group 1',
  readonly: 'group 2',
  errorMessages: 'group 2',
  errors: 'group 2',
};

describe('convertGroups', () => {
  it('should conver group object', () => {
    expect(convertGroups(groups)).toEqual(result);
  });
});
