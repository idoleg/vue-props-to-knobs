import { groups, convertedGroups } from './vuePropsToKnobs';

export function convertGroups(groups: groups): convertedGroups {
  const convertedGroups: Record<string, string> = {};

  Object.entries(groups).forEach(([name, items]) => {
    items.forEach((item) => (convertedGroups[item] = name));
  });

  return convertedGroups;
}
