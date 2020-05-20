// import { Component } from "vue";
import { ejectProps } from './ejectProps';
import { sort } from './sort';
import { convertGroups } from './convertGroups';
import { compileProps } from './compileProps';
import { implementProps } from './implementProps';

export type knobs = Record<string, Function>;

export type prop = { default?: any; type?: Record<string, any> };
export type props = Record<string, prop>;

export type compiledProp = {
  name: string;
  value?: any;
  type?: Record<string, any>;
  group?: string;
};
export type compiledProps = compiledProp[];

export type defaultValue = string | Array<string> | number | Array<number> | Set<string>;
export type defaults = Record<string, defaultValue>;

export type groups = Record<string, string[]>;
export type convertedGroups = Record<string, string>;

export const vuePropsToKnobs = (knobs: knobs) => (
  component: any,
  defaults: defaults = {},
  groups: groups = {},
): props => {
  const props = sort(ejectProps(component), groups);
  const compiledProps = compileProps(props, defaults, convertGroups(groups));

  return implementProps(compiledProps, knobs);
};
