export function convertGroups(groups) {
    const convertedGroups = {};
    Object.entries(groups).forEach(([name, items]) => {
        items.forEach((item) => (convertedGroups[item] = name));
    });
    return convertedGroups;
}
