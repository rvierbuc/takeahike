module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: ['airbnb', 'plugin:react-hooks/recommended'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    rules: {
        'eol-last': 'error',
        // Indentation
        'no-mixed-spaces-and-tabs': 2,
        indent: [2, 2],
        offsetTernaryExpressions: 0,
        // Variable names
        camelcase: 2,
        // Language constructs
        curly: 2,
        'func-style': [2, 'expression'],
        'no-var': 2,
        'prefer-const': 2,
        // Semicolons
        semi: 2,
        'no-extra-semi': 2,
        // Padding & additional whitespace (preferred but optional)
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        'semi-spacing': 1,
        'key-spacing': 1,
        'block-spacing': 1,
        'comma-spacing': 1,
        'no-multi-spaces': 1,
        'space-before-blocks': 1,
        'keyword-spacing': [1, { before: true, after: true }],
        'space-infix-ops': 1,
        // Minuta
        'comma-style': [2, 'last'],
        quotes: [1, 'single'],
        'no-mixed-spaces-and-tabs': 2,
        indent: [2, 2],
        /* Variable cames */
        camelcase: 2,
        /* Language constructs */
        curly: 2,
        eqeqeq: [2, 'smart'],
        'func-style': [2, 'expression'],
        'no-var': 2,
        'prefer-const': 2,
        /* Semicolons */
        semi: 2,
        'no-extra-semi': 2,
        /* Padding & additional whitespace (preferred but optional) */
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        'semi-spacing': 1,
        'key-spacing': 1,
        'block-spacing': 1,
        'comma-spacing': 1,
        'no-multi-spaces': 1,
        'space-before-blocks': 1,
        'keyword-spacing': [1, { before: true, after: true }],
        'space-infix-ops': 1,
        /* Minuta */
        'comma-style': [2, 'last'],
        quotes: [1, 'single'],
        'eol-last': 0,
        'no-trailing-spaces': 0,
        'spaced-comment': 0,
        'no-console': 0,
        'react/function-component-definition': 0,
        'arrow-body-style': 0,
        'no-unused-vars': 0,
        'no-plusplus': 0,
        "react/prop-types": 0,
        'react/jsx-one-expression-per-line' : 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        "no-console": 0,
        "max-len": 0,
        "camelcase": 0,
        "no-param-reassign": 0,
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "react/jsx-one-expression-per-line": 0,

        "no-underscore-dangle": 0,  
        "no-unused-vars": 0,
        "no-plusplus": 0
    }
    }

