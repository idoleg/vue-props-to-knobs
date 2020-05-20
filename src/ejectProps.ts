// import {Component} from 'vue';
import { props } from './vuePropsToKnobs';

function normolized(props: props): props {
  const normolizedProps: props = {};

  for (const prop in props) {
    if (typeof props[prop] == 'object' && !Array.isArray(props[prop])) {
      normolizedProps[prop] = props[prop];
    } else {
      normolizedProps[prop] = { type: props[prop] };
    }
  }

  return normolizedProps;
}

export function ejectProps(component: any): props {
  let props = {};

  if (component.props) {
    props = { ...props, ...normolized(component.props) };
  }

  if (component.prototype) {
    const constructor = component.prototype.constructor;
    if (constructor.superOptions.props) {
      props = { ...props, ...constructor.superOptions.props };
    }
    if (constructor.extendOptions.mixins) {
      constructor.extendOptions.mixins.forEach((mixin: any) => {
        props = { ...props, ...mixin.extendOptions.props };
      });
    }
    if (constructor.extendOptions.props) {
      props = { ...props, ...constructor.extendOptions.props };
    }
  }

  return props;
}
