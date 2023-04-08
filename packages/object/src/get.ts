const get = <T>(object: any, path: string, defaultValue: T): T => {
    const value: T | undefined = object[path];
    if (value) {
        return value as T;
    }
    return defaultValue;
};

export default get;
