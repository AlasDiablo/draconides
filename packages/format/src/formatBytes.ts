import { computing } from '@draconides/unit';

type FormatBytesOptions = {
    decimals?: number;
    formatter?: (value: number) => string;
    conversion?: 'binary' | 'decimal';
    style?: 'byte' | 'octet';
    unitFormat?: 'full' | 'minimal';
};

const getUnit = (
    conversion: FormatBytesOptions['conversion'],
    style: FormatBytesOptions['style'],
    format: FormatBytesOptions['unitFormat'],
) => {
    if (style === 'byte') {
        if (format === 'full') {
            return conversion === 'binary' ? computing.SizeByteBinaryFull : computing.SizeByteDecimalFull;
        }
        return conversion === 'binary' ? computing.SizeByteBinaryMinimal : computing.SizeByteDecimalMinimal;
    }

    if (format === 'full') {
        return conversion === 'binary' ? computing.SizeOctetBinaryFull : computing.SizeOctetDecimalFull;
    }
    return conversion === 'binary' ? computing.SizeOctetBinaryMinimal : computing.SizeOctetDecimalMinimal;
};

/* eslint-disable tsdoc/syntax */
/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/check-param-names */
/**
 * Format a byte value into a readable string
 * @param bytes Byte to format
 * @param options Option object
 * @param options.decimals Number of decimals
 * @param options.formatter Function to formate the number
 * @param options.conversion Type of conversion
 * @param options.style Type of the unit
 * @param options.unitFormat Unit format
 * @returns formated bytes
 */
const formatBytes = (bytes: number, options: FormatBytesOptions = {}) => {
    const {
        decimals = 2,
        formatter = (value) => value.toString(),
        conversion = 'binary',
        style = 'byte',
        unitFormat = 'minimal',
    } = options;

    // Get unit
    const unit = getUnit(conversion, style, unitFormat);

    // Return default
    if (!bytes || bytes === 0) {
        return `0 ${unit[0]}`;
    }

    // Get the weight of a kile
    const kilo = conversion === 'binary' ? 1024 : 1000;
    // Get the decimals
    const numberOfDecimals = decimals < 0 ? 0 : decimals;

    // Calculate the power index
    let power = Math.floor(Math.log(bytes) / Math.log(kilo));

    // Floor the power index
    if (power > unit.length) {
        power = unit.length;
    }

    // Calculate and formats the byte value
    const value = parseFloat((bytes / Math.pow(kilo, power)).toFixed(numberOfDecimals));
    return `${formatter(value)} ${unit[power]}`;
};

export default formatBytes;
