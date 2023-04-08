import { radian } from '../src';

describe('Radian', () => {
    test('should return 2PI when given 360', () => {
        expect(radian(360)).toStrictEqual(2 * Math.PI);
    });

    test('should return PI when given 180', () => {
        expect(radian(180)).toStrictEqual(Math.PI);
    });

    test('should return PI/2 when given 90', () => {
        expect(radian(90)).toStrictEqual(Math.PI / 2);
    });
});
