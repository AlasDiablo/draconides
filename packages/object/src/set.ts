const set = <T>(object: any, path: string, value: T): T | undefined => {
    const previousValue: T | undefined = object[path];
    object[path] = value;
    return previousValue;
};

export default set;
