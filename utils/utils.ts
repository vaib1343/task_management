export const undefineHandle = (value: Array<any> | Object | String | number | any) => {
    if (Array.isArray(value) && !value.length) {
        return true;
    } else if (typeof value === 'string' && !value) {
        return true;
    } else if (typeof value === 'number' && !value) {
        return true;
    } else if (typeof value === 'object' && !Object.keys(value).length) {
        return true;
    } else if (!value) {
        return true;
    }
};

export const PriorityOptions = [
    { key: 'P1', value: 'P1' },
    { key: 'P2', value: 'P2' },
    { key: 'P3', value: 'P3' },
    // { key: 'P4', value: 'P4' },
    // { key: 'P5', value: 'P5' },
];

export const requiredField = ['name', 'description', 'label', 'priority', 'dateCompletion'];
