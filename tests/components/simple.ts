import Vue from 'vue';

export const ArryedProps = Vue.extend({
  render: (h) => h(''),
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author', 'callback', 'contactsPromise'],
});

export const TypedProps = Vue.extend({
  render: (h) => h(''),
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    value: [String, Number, Object],
    contactsPromise: Promise,
  },
});

export const mixinable = Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
  },
});

export const MixinedProps = Vue.extend({
  mixins: [mixinable],
  render: (h) => h(''),
  props: {
    commentIds: Array,
    author: Object,
    callback: Function,
    value: [String, Number, Object],
    contactsPromise: Promise,
  },
});

export const SuperMixinedProps = Vue.extend({ mixins: [mixinable] }).extend({
  render: (h) => h(''),
  props: {
    commentIds: Array,
    author: Object,
    callback: Function,
    value: [String, Number, Object],
    contactsPromise: Promise,
  },
});

export const Functional = {
  functional: true,
  render: (h: any): any => h(''),
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    value: [String, Number, Object],
    contactsPromise: Promise,
  },
};
