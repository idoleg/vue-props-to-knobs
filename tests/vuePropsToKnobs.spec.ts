import { vuePropsToKnobs } from '../src/vuePropsToKnobs';
import { TypedProps } from './components/simple';

const createKnobs = (): Record<string, Function> => ({
  boolean: jest.fn(),
  number: jest.fn(),
  text: jest.fn(),
  array: jest.fn(),
  object: jest.fn(),
  select: jest.fn(),
});

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

describe('vuePropsToKnobs', () => {
  it('should create prop object for vue storybook', () => {
    const knobs = createKnobs();

    expect(vuePropsToKnobs(knobs)(TypedProps)).toEqual(result);

    expect(knobs.text).toHaveBeenCalledTimes(1);
    expect(knobs.number).toHaveBeenCalledTimes(1);
    expect(knobs.boolean).toHaveBeenCalledTimes(1);
    expect(knobs.array).toHaveBeenCalledTimes(1);
    expect(knobs.object).toHaveBeenCalledTimes(4);
    expect(knobs.select).toHaveBeenCalledTimes(0);
  });

  it('should create prop object for vue storybook with defaults', () => {
    const knobs = createKnobs();

    const defaults = {
      title: 'Title',
      errorMessages: '',
      commentIds: [1, 2, 3],
      callback: new Set(['First', 'Second']),
    };
    expect(vuePropsToKnobs(knobs)(TypedProps, defaults)).toEqual(result);

    expect(knobs.text).toHaveBeenCalledTimes(1);
    expect(knobs.number).toHaveBeenCalledTimes(1);
    expect(knobs.boolean).toHaveBeenCalledTimes(1);
    expect(knobs.array).toHaveBeenCalledTimes(1);
    expect(knobs.object).toHaveBeenCalledTimes(3);
    expect(knobs.select).toHaveBeenCalledTimes(1);
  });
});
