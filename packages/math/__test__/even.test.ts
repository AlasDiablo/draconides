import { even } from '../src';

describe('Even', () => {
    test('should return true when given 8, 2, 0 or 10', () => {
        expect(even(8)).toBeTruthy();
        expect(even(2)).toBeTruthy();
        expect(even(0)).toBeTruthy();
        expect(even(10)).toBeTruthy();
    });

    test('should return true when given -14, -0, -4 or -180', () => {
        expect(even(-14)).toBeTruthy();
        expect(even(-0)).toBeTruthy();
        expect(even(-4)).toBeTruthy();
        expect(even(-180)).toBeTruthy();
    });

    test('should return false when given 9, 3, 1 or 11', () => {
        expect(even(9)).toBeFalsy();
        expect(even(3)).toBeFalsy();
        expect(even(1)).toBeFalsy();
        expect(even(11)).toBeFalsy();
    });

    test('should return false when given -15, -1, -5 or -181', () => {
        expect(even(-15)).toBeFalsy();
        expect(even(-1)).toBeFalsy();
        expect(even(-5)).toBeFalsy();
        expect(even(-181)).toBeFalsy();
    });
});
