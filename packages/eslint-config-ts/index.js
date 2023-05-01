module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', '@draconides/eslint-config-base'],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
                readonly: 'array-simple',
            },
        ],
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
            },
        ],
    },
};
