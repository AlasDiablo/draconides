import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    jsxA11yPlugin.flatConfigs.recommended,
    reactHooksPlugin.configs.recommended,
    {
        rules: {
            'react/destructuring-assignment': ['error', 'always'],

            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                },
            ],

            'react/hook-use-state': [
                'error',
                {
                    allowDestructuredState: true,
                },
            ],

            'react/jsx-boolean-value': ['error', 'never'],
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/jsx-closing-tag-location': 'error',
            'react/jsx-equals-spacing': ['error', 'never'],
            'react/jsx-fragments': ['error', 'syntax'],

            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                },
            ],

            'react/jsx-no-leaked-render': [
                'error',
                {
                    validStrategies: ['ternary'],
                },
            ],

            'react/jsx-no-target-blank': [
                'error',
                {
                    enforceDynamicLinks: 'always',
                    warnOnSpreadAttributes: true,
                },
            ],

            'react/jsx-no-useless-fragment': 'error',
            'react/no-array-index-key': 'error',
            'react/no-deprecated': 'error',
        },
    },
];
