export const undefineHandle = (value: Array<any> | Object | String | number| any) => {
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
