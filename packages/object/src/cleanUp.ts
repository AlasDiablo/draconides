import isObject from './isObject';

const cleanUp = (value: any): void => {
    if (isObject(value)) {
        const keys = Object.keys(value);
        for (const key of keys) {
            if (value[key] === undefined || value[key] === null) {
                delete value[key];
            }
        }
    }
};

export default cleanUp;
