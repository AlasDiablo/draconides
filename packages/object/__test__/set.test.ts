import { set } from '../src';

describe('Set', () => {
    test('should return undefined and object must have the set element', () => {
        const obj = {};
        expect(set<boolean>(obj, 'value', true)).toStrictEqual(undefined);
        expect(obj).toStrictEqual({
            value: true
        });
    });

    test('should return previous value and object must have the set element', () => {
        const obj = {
            value: 100,
        };
        expect(set<number>(obj, 'value', 200)).toStrictEqual(100);
        expect(obj).toStrictEqual({
            value: 200
        });
    });
});
