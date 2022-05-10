module.exports = {
    root: true,
    rules: {
        'no-tabs': 'off',
        'no-new': 0,
        'react/prop-types': 0,
        'import/prefer-default-export': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        semi: ['error', 'always'],
        // 可能的错误或逻辑错误有关
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-await-in-loop': 'error',
        // 风格指南
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': 'error',
        'brace-style': 'off',
        'comma-dangle': [2, 'never'],
        'comma-spacing': 'off',
        'comma-style': [2, 'last'],
        'consistent-this': [2, 'self', 'that'],
        'eol-last': 2,
        'func-call-spacing': [2, 'never'],
        'implicit-arrow-linebreak': 'error',
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        quotes: ['error', 'single'],
        // 'semi': ['error', 'always'],
        'key-spacing': ['error', {
            mode: 'strict',
            afterColon: true,
            beforeColon: false
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'line-comment-position': [2, { position: 'above' }],
        'max-depth': [2, { max: 4 }],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 2,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'max-lines-per-function': [2, 200],
        'no-multiple-empty-lines': [2, {
            max: 1,
            maxEOF: 0
        }],
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'semi-style': [2, 'last'],
        'no-trailing-spaces': 2,
        'no-plusplus': 0,
        'one-var': ['error', 'never'],
        'no-unneeded-ternary': 2,
        'space-infix-ops': 'off',
        'space-unary-ops': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-new-wrappers': 2,
        'no-proto': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-implicit-globals': 'error',
        'max-nested-callbacks': [2, { max: 3 }],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-nested-ternary': 2,
        'operator-linebreak': [2, 'after'],
        'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],
        'spaced-comment': [2, 'always', {
            line: {
                markers: ['/'],
                exceptions: ['-', '+']
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true
            }
        }],
        'newline-per-chained-call': 2,
        'switch-colon-spacing': [2, {
            after: true,
            before: false
        }],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                consistent: true
            },
            ObjectPattern: {
                multiline: true,
                minProperties: 3
            },
            ImportDeclaration: {
                multiline: true,
                minProperties: 3
            },
            ExportDeclaration: {
                multiline: true,
                minProperties: 3
            }
        }],
        'no-unused-expressions': [
            'error',
            { allowShortCircuit: true }
        ],
        'arrow-parens': ['error', 'always'],
        'prettier/prettier': [
            'off',
            {
                singleQuote: true,
                semi: true,
                trailingComma: true,

                // 下面属性，并不能很好的处理内联标签，没有解决方案
                // 由于prettier功能上和eslint一致（prettier的官网文档也是这样定位的），关闭prettier，仅使用eslint
                htmlWhitespaceSensitivity: 'strict'
            }
        ],
        'space-before-blocks': ['error', 'always'],
        // 最佳实践的
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'class-methods-use-this': 0,
        curly: ['error', 'all'],
        eqeqeq: [2, 'always'],
        'guard-for-in': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': [2, { exceptions: ['Promise'] }],
        'no-extra-bind': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': [2, {
            ignoreEOLComments: true,
            exceptions: {
                Property: true,
                BinaryExpression: false,
                VariableDeclarator: true,
                ImportDeclaration: true
            }
        }],
        'no-new-func': 2,
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state', 'vm', 'item', 'config']
            }
        ],
        'no-return-assign': 2,
        'no-return-await': 'error',
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-return': 2,
        'no-void': 2,
        yoda: [1, 'never'],
        // 变量声明相关的规则
        'no-catch-shadow': 2,
        'no-restricted-globals': 2,
        'no-shadow-restricted-names': 2,
        'no-label-var': 2,
        'no-undef-init': 2,
        'no-undef': 0,
        'one-var-declaration-per-line': [2, 'always'],
        'require-await': 0,
        // es6 相关规则
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],
        'prefer-arrow-callback': [1, { allowNamedFunctions: true }],
        'prefer-destructuring': [
            1,
            {
                array: true,
                object: true
            },
            { enforceForRenamedProperties: false }
        ],
        'prefer-rest-params': 2,
        'no-useless-constructor': 2,
        'no-useless-computed-key': 1,
        camelcase: 2,
        // typescript 相关规则
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 2,
        '@typescript-eslint/method-signature-style': 2,
        '@typescript-eslint/no-empty-interface': 2,
        // '@typescript-eslint/space-before-blocks': ['error', 'always'],
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/comma-spacing': ['error'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterOverload: false }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'import/no-anonymous-default-export': ['error', {
            allowArray: false,
            allowArrowFunction: true,
            allowAnonymousClass: true,
            allowAnonymousFunction: false,
            allowCallExpression: true,
            allowLiteral: false,
            allowObject: false
        }],
        'react/jsx-filename-extension': [1, {
            extensions: ['.ts', '.tsx']
        }]
    },

    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.ts', '.js', '.jsx', '.json', '.tsx']
            }
        }
    },

    plugins: [
        'jsx-control-statements'
    ],

    extends: [
        'airbnb',
        'react-app',
        'react-app/jest',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ]
};
