# vue-props-to-knobs

Automatically generate Storybook knobs based on Vue.js component definition.
Can help you organize props passing to Vue.js components for your [Storybook](https://github.com/storybookjs/storybook/) and [Storybook Addon Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs).

## Using

MyButton.story.js:

```js
import { storiesOf } from '@storybook/vue';
import vuePropsToKnobs from 'vuePropsToKnobs';
import { boolean, number, text, array, object, select } from '@storybook/addon-knobs';
import MyButton from './MyButton.vue';

const propsToKnobs = vuePropsToKnobs({ boolean, number, text, array, object, select });

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};

export const exampleWithKnobs = () => ({
  components: { MyButton },
  props: propsToKnobs(MyButton);
  },
  template: `<MyButton v-bind="$props" />`
});
```

MyButton.vue:
```vue
<template>
  <button :disabled="isDisabled">
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>
```

## Definition
```js
vuePropsToKnobs(knobs: Object)(
    component: VueComponent,
    defaults?: Object,
    groups?: Objects
)
```

### `knobs`
Required argument, type is object. You must pass boolean, number, text, array, object and select functions from storybook/addon-knobs.

It can be used as:
```js
import vuePropsToKnobs from 'vuePropsToKnobs';
import { boolean, number, text, array, object, select } from '@storybook/addon-knobs';

export default vuePropsToKnobs({ boolean, number, text, array, object, select });
```

### `component`
Required argument, type is object (Constructor of Vue.js component).

It can be used as:
```js
import MyButton from './MyButton.vue';

vuePropsToKnobs(knobs)(MyButton);
```

### `defaults`
Not required argument, type is object. You can pass default knob value for your story.

It can be used as:
```js
import MyButton from './MyButton.vue';

const defaults = {
    label: "Button",
    color: red,
};
vuePropsToKnobs(knobs)(MyButton, defaults);
```

For props, which type is array, you should pass array for default knob value.
```js
import MySelect from './MySelect.vue';

const defaults = {
    items: ["Item 1", "Item 2", "Item 3"],
    value: "Item 1",
};
vuePropsToKnobs(knobs)(MySelect, defaults);
```

If you need make select knob in your Storybook interface, you should pass Set in defaults:
```js
import MyLink from './MyLink.vue';

const defaults = {
    target: new Set(['_blank', '_self', '_parent', 'top']),
};
vuePropsToKnobs(knobs)(MyLink, defaults);
```

### `groups`
Not required argument, type is object. You can categorize your Knobs by assigning them a groupId. When groups argument is passed, your props will be sorted as items in object.

It can be used as:
```js
import MySelect from './MySelect.vue';

const groups = {
    field: ['value', 'items', 'multiple'],
    styling: ['theme', 'color', 'class', 'style'],
};
vuePropsToKnobs(knobs)(MySelect, {}, groups);
```
