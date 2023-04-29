/**
 * Convert an angle from radian to degrees
 * @param radian - Angle in radian
 * @returns - The value in degrees
 * @version 0.0.2
 * @since 0.0.2
 */
const degrees = (radian: number): number => {
    return (radian * 360) / (2 * Math.PI);
};

export default degrees;
