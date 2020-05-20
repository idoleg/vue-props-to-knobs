export function implementProp({ name, type, value, group }) {
    const createProp = (value) => [name, { type, default: value }];
    if (value instanceof Set) {
        value = [...value];
        return createProp(this.select(name, value, value[0], group));
    }
    if (Array.isArray(type)) {
        return createProp(this.object(name, value, group));
    }
    switch (type) {
        case Boolean:
            value = typeof value === 'boolean' ? value : false;
            return createProp(this.boolean(name, value, group));
        case Number:
            value = typeof value === 'number' ? value : false;
            return createProp(this.number(name, value, group));
        case String:
            value = typeof value === 'string' ? value : '';
            return createProp(this.text(name, value, group));
        case Array:
            value = Array.isArray(value) ? value : [];
            return createProp(this.array(name, value, ',', group));
        case Object:
        case Function:
        case null:
        default:
            return createProp(this.object(name, value, group));
        // return [name, {}];
    }
}
export function implementProps(props, knobs) {
    return Object.fromEntries(props.map(implementProp, knobs));
}
