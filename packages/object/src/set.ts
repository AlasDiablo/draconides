/**
 * Replace or set an element in the first level of an object
 * @param object - Origin object who set is perform
 * @param path - Path to set in object
 * @param value - Value to set to the associated path in the object
 * @returns - Return previous value or undefined
 * @example
 * ```
 * // Create an empty object
 * const myObject = {};
 *
 * // Return undefined
 * set(myObject, 'key', 'value');
 *
 * // Print {key: 'value'}
 * console.log(myObject);
 * ```
 * @version 0.0.2
 * @since 0.0.1
 */
const set = <T>(object: any, path: string, value: T): T | undefined => {
    const previousValue: T | undefined = object[path];
    object[path] = value;
    return previousValue;
};

export default set;
