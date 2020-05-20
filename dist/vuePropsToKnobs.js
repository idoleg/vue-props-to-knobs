// import { Component } from "vue";
import { ejectProps } from './ejectProps';
import { sort } from './sort';
import { convertGroups } from './convertGroups';
import { compileProps } from './compileProps';
import { implementProps } from './implementProps';
export const vuePropsToKnobs = (knobs) => (component, defaults = {}, groups = {}) => {
    const props = sort(ejectProps(component), groups);
    const compiledProps = compileProps(props, defaults, convertGroups(groups));
    return implementProps(compiledProps, knobs);
};
