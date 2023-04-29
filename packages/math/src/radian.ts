/**
 * Convert an angle from degrees to radian
 * @param degrees - Angle in degrees
 * @returns - The value in radian
 * @version 0.0.2
 * @since 0.0.2
 */
const radian = (degrees: number): number => {
    return (degrees / 360) * (2 * Math.PI);
};

export default radian;
