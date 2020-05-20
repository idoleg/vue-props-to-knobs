import { props, defaults, compiledProps, convertedGroups } from './vuePropsToKnobs';

export function compileProps(props: props, defaults: defaults, groups: convertedGroups): compiledProps {
  const compiledProps = Object.entries(props).map(([name, definition]) => {
    return {
      name,
      type: definition.type,
      value: defaults[name] || definition.default,
      group: groups[name],
    };
  });

  return compiledProps;
}
