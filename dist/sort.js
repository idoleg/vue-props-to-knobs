const empty = Symbol('empty prop');
export function sort(items, groups) {
    const itemOrder = {};
    Object.entries(groups)
        .map(([_, group]) => group)
        .flat(1)
        .forEach((item) => (itemOrder[item] = empty));
    items = Object.assign(Object.assign({}, itemOrder), items);
    for (const item in items) {
        if (items[item] === empty)
            delete items[item];
    }
    return items;
}
