import { cleanUp } from '../src';

describe('cleanUp', () => {
    test('should remove any undefined and null value from 1st level of an object', () => {
        const value = {
            value: 'A Value',
            other: 'An other value',
            invalid: null,
            nop: undefined,
            obj: {
                recursive: undefined,
            },
        };
        cleanUp(value);
        expect(value).toStrictEqual({
            value: 'A Value',
            other: 'An other value',
            obj: {
                recursive: undefined,
            },
        });
    });
});
