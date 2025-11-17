// .prettierrc.cjs
/**
 * Prettier Configuration Template
 * CommonJS version for older tooling or Node environments
 */

module.exports = {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "css",
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",

    overrides: [
        {
            files: "*.md",
            options: {
                printWidth: 80,
            },
        },
        {
            files: "*.json",
            options: {
                trailingComma: "none",
            },
        },
        {
            files: ["*.yml", "*.yaml"],
            options: {
                singleQuote: false,
                tabWidth: 2,
            },
        },
    ],
};
