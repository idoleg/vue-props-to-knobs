function normolized(props) {
    const normolizedProps = {};
    for (const prop in props) {
        if (typeof props[prop] == 'object' && !Array.isArray(props[prop])) {
            normolizedProps[prop] = props[prop];
        }
        else {
            normolizedProps[prop] = { type: props[prop] };
        }
    }
    return normolizedProps;
}
export function ejectProps(component) {
    let props = {};
    if (component.props) {
        props = Object.assign(Object.assign({}, props), normolized(component.props));
    }
    if (component.prototype) {
        const constructor = component.prototype.constructor;
        if (constructor.superOptions.props) {
            props = Object.assign(Object.assign({}, props), constructor.superOptions.props);
        }
        if (constructor.extendOptions.mixins) {
            constructor.extendOptions.mixins.forEach((mixin) => {
                props = Object.assign(Object.assign({}, props), mixin.extendOptions.props);
            });
        }
        if (constructor.extendOptions.props) {
            props = Object.assign(Object.assign({}, props), constructor.extendOptions.props);
        }
    }
    return props;
}
