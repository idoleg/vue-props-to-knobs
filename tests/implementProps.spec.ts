import { implementProps } from '../src/implementProps';

const createKnobs = (): Record<string, Function> => ({
  boolean: jest.fn(),
  number: jest.fn(),
  text: jest.fn(),
  array: jest.fn(),
  object: jest.fn(),
  select: jest.fn(),
});

const convertedProps = [
  { name: 'title', group: 'group 1', type: String, value: 'Title' },
  { name: 'likes', group: 'group 1', type: Number, value: 15 },
  { name: 'isPublished', group: 'group 2', type: Boolean, value: undefined },
  { name: 'commentIds', group: 'group 1', type: Array, value: [1, 2, 3] },
  { name: 'author', group: undefined, type: Object, value: undefined },
  { name: 'callback', group: undefined, type: Function, value: new Set(['First', 'Second']) },
  { name: 'value', group: 'group 2', type: [String, Number, Object], value: 'Value' },
  { name: 'contactsPromise', group: undefined, type: Promise, value: undefined },
];

const result = {
  title: {
    default: undefined,
    type: String,
  },
  likes: {
    default: undefined,
    type: Number,
  },
  isPublished: {
    default: undefined,
    type: Boolean,
  },
  commentIds: {
    default: undefined,
    type: Array,
  },
  author: {
    default: undefined,
    type: Object,
  },
  callback: {
    default: undefined,
    type: Function,
  },
  value: {
    default: undefined,
    type: [String, Number, Object],
  },
  contactsPromise: {
    default: undefined,
    type: Promise,
  },
};

describe('implementProps', () => {
  it('should create prop object for vue storybook ', () => {
    const knobs = createKnobs();

    expect(implementProps(convertedProps, knobs)).toEqual(result);

    expect(knobs.text).toHaveBeenCalledTimes(1);
    expect(knobs.number).toHaveBeenCalledTimes(1);
    expect(knobs.boolean).toHaveBeenCalledTimes(1);
    expect(knobs.array).toHaveBeenCalledTimes(1);
    expect(knobs.object).toHaveBeenCalledTimes(3);
    expect(knobs.select).toHaveBeenCalledTimes(1);
  });
});
