module.exports = {
    root: true,
    extends: '@react-native',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        semi: 'off',
        '@typescript-eslint/semi': ['error'],
    },
};
