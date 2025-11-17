// .eslintrc.cjs
/* ESLint Config for CommonJS environments */
const globals = require("globals");
const js = require("@eslint/js");
const eslintPluginImport = require("eslint-plugin-import");
const eslintPluginN = require("eslint-plugin-n");
const eslintPluginPromise = require("eslint-plugin-promise");
const eslintPluginUnusedImports = require("eslint-plugin-unused-imports");

module.exports = [
    {
        files: ["**/*.js", "**/*.cjs"],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "script",
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        plugins: {
            import: eslintPluginImport,
            n: eslintPluginN,
            promise: eslintPluginPromise,
            unused: eslintPluginUnusedImports
        },
        rules: {
            "no-var": "error",
            "prefer-const": "error",
            "no-unused-vars": "off",
            "unused/imports": "error",
            "no-undef": "error",

            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always"
                }
            ],

            "n/no-missing-import": "warn",
            "n/no-unsupported-features/es-syntax": "off",

            "promise/no-return-wrap": "error",
            "promise/param-names": "error"
        }
    }
];
