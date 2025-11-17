// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

/**
 * ESLint Flat Config Template
 * Full Featured Best Practices For Modern JavaScript/TypeScript
 */

export default [
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
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

            "promise/always-return": "off",
            "promise/no-return-wrap": "error",
            "promise/param-names": "error"
        }
    }
];
