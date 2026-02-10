module.exports = {
    root: true,

    parser: '@typescript-eslint/parser',

    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',

        // 🚨 MUST be last
        'prettier'
    ],

    env: {
        browser: true,
        es2022: true,
        node: true
    },

    settings: {
        react: {
            version: 'detect'
        }
    },

    rules: {
        // sensible defaults
        'react/react-in-jsx-scope': 'off', // Vite + React 17+
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' }
        ]
    }
}
