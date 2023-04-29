/**
 * Create a random number between to value
 * @param from - lower value
 * @param to - upper value
 * @returns - A value between `from` and `to`
 * @example
 * ```
 * // Get a random value between 0 and 5
 * const value = getRandomInRange(0, 5);
 *
 * // Print 0, 1, 2, 3, 4 or 5
 * console.log(value);
 * ```
 * @version 0.0.6
 * @since 0.0.1
 */
const getRandomInRange = (from: number, to: number): number => {
    if (from === to) {
        return from;
    }
    if (from > to) {
        const tmp = from;
        from = to;
        to = tmp;
    }
    return Math.floor(Math.random() * (to - from) + from);
};

export default getRandomInRange;
