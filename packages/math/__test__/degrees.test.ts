import degrees from '../src/degrees';

describe('Degrees', () => {
    test('should return 360 when given 2PI', () => {
        expect(degrees(2 * Math.PI)).toStrictEqual(360);
    });

    test('should return 180 when given PI', () => {
        expect(degrees(Math.PI)).toStrictEqual(180);
    });

    test('should return 90 when given PI/2', () => {
        expect(degrees(Math.PI / 2)).toStrictEqual(90);
    });
});
