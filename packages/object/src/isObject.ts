const isObject = (value: any): boolean => {
    if (!value) {
        return false;
    }
    if (Array.isArray(value)) {
        return false;
    }
    return typeof value === 'object';
};

export default isObject;
