module.exports = {
    extends: [
        'next', // Next.js default ESLint config
        'eslint:recommended', // ESLint recommended rules
        'plugin:@typescript-eslint/recommended', // Add TypeScript plugin rules
    ],
    plugins: ['@typescript-eslint'], // Use the TypeScript plugin
    rules: {
        // Disable TypeScript-specific rules
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disables 'explicit-module-boundary-types' rule
        '@typescript-eslint/no-explicit-any': 'off', // Disables 'no-explicit-any' rule
        '@typescript-eslint/ban-types': 'off', // Disables 'ban-types' rule
        '@typescript-eslint/no-inferrable-types': 'off', // Disables 'no-inferrable-types' rule
        '@typescript-eslint/no-unused-vars': 'off', // Disables 'no-unused-vars' rule
        '@typescript-eslint/explicit-function-return-type': 'off', // Disables 'explicit-function-return-type' rule
        '@typescript-eslint/no-non-null-assertion': 'off', // Disables 'no-non-null-assertion' rule
    },
};