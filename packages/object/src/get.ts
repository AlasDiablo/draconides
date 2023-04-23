/**
 *
 * @param object - Origin object who get is perform
 * @param path - Path to get in object
 * @param defaultValue - Fallback value if the value associated to the path is not set in object
 * @since 0.0.1
 */
const get = <T>(object: any, path: string, defaultValue?: T ): T | undefined => {
    const value: T | undefined = object[path];
    if (value) {
        return value as T;
    }
    return defaultValue;
};

export default get;
