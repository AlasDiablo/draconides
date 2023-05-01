module.exports = {
    plugins: ['eslint-plugin-import'],
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'lf',
                semi: true,
            },
        ],
        'no-console': 'warn',
        'linebreak-style': ['error', 'unix'],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        'no-import-assign': 'error',
        'no-undef': [
            'error',
            {
                typeof: true,
            },
        ],
        'no-unexpected-multiline': 'error',
        'no-self-assign': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: false,
            },
        ],
        camelcase: 'error',
        curly: 'error',
        eqeqeq: 'error',
        'no-shadow': 'error',
        'no-var': 'error',
        radix: 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-namespace': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/no-useless-path-segments': 'error',
        'import/consistent-type-specifier-style': 'error',
        'import/order': [
            'error',
            {
                groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'never',
            },
        ],
    },
};
