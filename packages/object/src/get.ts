/**
 * Get the first level element of an object or return default value
 * @param object - Origin object who get is perform
 * @param path - Path to get in object
 * @param defaultValue - Fallback value if the value associated to the path is not set in object
 * @returns - Return the value corresponding the path or undefined or default value if none found
 * @example
 * ```
 * // Create an object
 * const myObject = {
 *     value: 'test',
 * };
 *
 * // Return 'default'
 * get(myObject, 'key', 'default');
 *
 * // Return 'test'
 * get(myObject, 'value', 'default');
 * ```
 * @version 0.0.4
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
