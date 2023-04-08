import odd from '../src/odd';

describe('Odd', () => {
    test('should return true when given 9, 3, 1 or 11', () => {
        expect(odd(9)).toBeTruthy();
        expect(odd(3)).toBeTruthy();
        expect(odd(1)).toBeTruthy();
        expect(odd(11)).toBeTruthy();
    });

    test('should return true when given -15, -1, -5 or -181', () => {
        expect(odd(-15)).toBeTruthy();
        expect(odd(-1)).toBeTruthy();
        expect(odd(-5)).toBeTruthy();
        expect(odd(-181)).toBeTruthy();
    });

    test('should return false when given 8, 2, 0 or 10', () => {
        expect(odd(8)).toBeFalsy();
        expect(odd(2)).toBeFalsy();
        expect(odd(0)).toBeFalsy();
        expect(odd(10)).toBeFalsy();
    });

    test('should return false when given -14, -0, -4 or -180', () => {
        expect(odd(-14)).toBeFalsy();
        expect(odd(-0)).toBeFalsy();
        expect(odd(-4)).toBeFalsy();
        expect(odd(-180)).toBeFalsy();
    });
});
