import { ejectProps } from '../src/ejectProps';
import { ArryedProps, TypedProps, MixinedProps, SuperMixinedProps, Functional } from './components/simple';

const result = {
  title: { type: String, default: 'Title' },
  likes: { type: Number },
  isPublished: { type: Boolean },
  commentIds: { type: Array },
  author: { type: Object },
  callback: { type: Function },
  value: { type: [String, Number, Object] },
  contactsPromise: { type: Promise },
};
describe('ejectProps', () => {
  it('should eject props from component with array definition', () => {
    const simpleResult = {
      title: { type: null },
      likes: { type: null },
      isPublished: { type: null },
      commentIds: { type: null },
      author: { type: null },
      callback: { type: null },
      contactsPromise: { type: null },
    };
    expect(ejectProps(ArryedProps)).toEqual(simpleResult);
  });

  it('should eject props from component with constructor definition', () => {
    expect(ejectProps(TypedProps)).toEqual(result);
  });

  it('should eject props from component with mixin definition', () => {
    expect(ejectProps(MixinedProps)).toEqual(result);
  });

  it('should eject props from component with super mixin definition', () => {
    expect(ejectProps(SuperMixinedProps)).toEqual(result);
  });

  it('should eject props from functional component', () => {
    expect(ejectProps(Functional)).toEqual(result);
  });
});
