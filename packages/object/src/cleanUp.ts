import isObject from './isObject';

/**
 * Clean up the first level of an object
 * @param object - object to clean
 * @example
 * ```
 * // Create an empty object
 * const myObject = {
 *     key: undefined,
 *     value: null,
 *     index: 1,
 *     subObject: {
 *         value: null,
 *     },
 * };
 *
 * // Clean up the object
 * cleanUp(myObject);
 *
 * // Return {index: 1, subObject: {value: null}}
 * console.log(myObject);
 * ```
 * @version 0.0.4
 * @since 0.0.3
 */
const cleanUp = (object: any): void => {
    if (isObject(object)) {
        const keys = Object.keys(object);
        for (const key of keys) {
            if (object[key] === undefined || object[key] === null) {
                delete object[key];
            }
        }
    }
};

export default cleanUp;
