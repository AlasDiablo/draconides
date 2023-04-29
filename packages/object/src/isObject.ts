/**
 * Check if the given parameter is an object
 * @param object - Value to check
 * @returns - Return true if the value is an object
 * @example
 * ```
 * // Create an empty object
 * const myObject = {};
 *
 * // Return true
 * isObject(myObject);
 *
 * // Return false
 * isObject([]);
 *
 * // Return false
 * isObject(undefined);
 * ```
 * @version 0.0.4
 * @since 0.0.3
 */
const isObject = (object: any): boolean => {
    if (!object) {
        return false;
    }
    if (Array.isArray(object)) {
        return false;
    }
    return typeof object === 'object';
};

export default isObject;
