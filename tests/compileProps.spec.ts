import { compileProps } from '../src/compileProps';

const props = {
  title: { type: String, default: 'Default title' },
  likes: { type: Number, default: 15 },
  isPublished: { type: Boolean },
  commentIds: { type: Array },
  author: { type: Object },
  callback: { type: Function },
  value: { type: [String, Number, Object], default: 'Value' },
  contactsPromise: { type: Promise },
};
const defaults = {
  title: 'Title',
  errorMessages: '',
  commentIds: [1, 2, 3],
  callback: new Set(['First', 'Second']),
};
const groups = {
  title: 'group 1',
  likes: 'group 1',
  isPublished: 'group 2',
  commentIds: 'group 1',
  readonly: 'group 2',
  value: 'group 2',
  errorMessages: 'group 1',
  errors: 'group 1',
};
const result = [
  { name: 'title', group: 'group 1', type: String, value: 'Title' },
  { name: 'likes', group: 'group 1', type: Number, value: 15 },
  { name: 'isPublished', group: 'group 2', type: Boolean, value: undefined },
  { name: 'commentIds', group: 'group 1', type: Array, value: [1, 2, 3] },
  { name: 'author', group: undefined, type: Object, value: undefined },
  { name: 'callback', group: undefined, type: Function, value: new Set(['First', 'Second']) },
  { name: 'value', group: 'group 2', type: [String, Number, Object], value: 'Value' },
  { name: 'contactsPromise', group: undefined, type: Promise, value: undefined },
];

describe('compileProps', () => {
  it('should merge props, defaults and group', () => {
    expect(compileProps(props, defaults, groups)).toEqual(result);
  });
});
