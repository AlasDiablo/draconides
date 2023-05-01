import { get } from '../src';

describe('Get', () => {
    test('should return default value', () => {
        expect(get<boolean>({}, 'invalidPath', true)).toBeTruthy();
    });

    test('should return the correct value', () => {
        expect(get<string>({ value: 'valid value' }, 'value', 'not valid value')).toStrictEqual('valid value');
    });
});
