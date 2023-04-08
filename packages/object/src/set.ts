const set = <T>(object: any, path: string, value: T): T => {
    const previousValue: T = object[path];
    object[path] = value;
    return previousValue;
}

export default set;
