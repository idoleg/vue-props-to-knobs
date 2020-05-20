export function compileProps(props, defaults, groups) {
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
