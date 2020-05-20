import { props, groups } from './vuePropsToKnobs';

const empty = Symbol('empty prop');

export function sort(items: props, groups: groups): props {
  const itemOrder: Record<string, {}> = {};

  Object.entries<string[]>(groups)
    .map(([_, group]) => group)
    .flat(1)
    .forEach((item) => (itemOrder[item] = empty));

  items = { ...itemOrder, ...items };

  for (const item in items) {
    if (items[item] === empty) delete items[item];
  }

  return items;
}
