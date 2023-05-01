import { isObject } from '../src';

describe('isObject', () => {
    test('should return false when a string is given', () => {
        expect(isObject('invalid value')).toBeFalsy();
    });

    test('should return false when a number is given', () => {
        expect(isObject(42)).toBeFalsy();
    });

    test('should return false when a function is given', () => {
        expect(
            isObject(() => {
                return {};
            }),
        ).toBeFalsy();
    });

    test('should return false when a null is given', () => {
        expect(isObject(null)).toBeFalsy();
    });

    test('should return true when a empty object is given', () => {
        expect(isObject({})).toBeTruthy();
    });

    test('should return true when a object is given', () => {
        expect(
            isObject({
                value: 'A value',
                other: 'An other value',
            }),
        ).toBeTruthy();
    });
});
