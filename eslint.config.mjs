import draconidesBaseConfig from '@draconides/eslint-config-base';
// import draconidesTsConfig from '@draconides/eslint-config-ts';
import jsdoc from 'eslint-plugin-jsdoc';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';

import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default [
    ...draconidesBaseConfig,
    // ...draconidesTsConfig,
    {
        plugins: {
            jsdoc,
            tsdoc,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
            parserOptions: {
                projectService: true,
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname,
            },
        },

        rules: {
            'jsdoc/check-alignment': 1,
            'jsdoc/check-param-names': 1,
            'jsdoc/check-property-names': 1,
            'jsdoc/check-tag-names': 1,
            'jsdoc/check-values': 1,
            'jsdoc/empty-tags': 1,
            'jsdoc/implements-on-classes': 1,
            'jsdoc/multiline-blocks': 1,
            'jsdoc/no-multi-asterisks': 1,
            'jsdoc/require-jsdoc': 1,
            'jsdoc/require-param': 1,
            'jsdoc/require-param-description': 1,
            'jsdoc/require-param-name': 1,
            'jsdoc/require-property': 1,
            'jsdoc/require-property-description': 1,
            'jsdoc/require-property-name': 1,
            'jsdoc/require-returns': 1,
            'jsdoc/require-returns-check': 1,
            'jsdoc/require-returns-description': 1,
            'jsdoc/require-throws': 1,
            'jsdoc/require-yields': 1,
            'jsdoc/require-yields-check': 1,
            'jsdoc/sort-tags': 1,
            'jsdoc/tag-lines': 1,
            'tsdoc/syntax': 'warn',
        },
    },
];
