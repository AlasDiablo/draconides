/**
 * Round a number with a specified number of decimals
 * @param value    - Value to round
 * @param decimals - Number of decimals
 * @returns - The rounded value
 * @version 0.0.9
 * @since 0.0.9
 */
const round = (value: number, decimals = 1): number => {
    if (decimals === 0) {
        return Math.round(value);
    }
    const dec = Math.pow(10, decimals);
    return Math.round(value * dec) / dec;
};

export default round;
