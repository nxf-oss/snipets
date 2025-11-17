## Update: 2025-11-17


### Commit: aed410531ff00192324d524b664bd8bf9090c291
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add Node TypeScript configuration for CLI and backend

**Changed Files:**
- shared/configs/tsconfig.node.json

**Diff:**
```diff
diff --git a/shared/configs/tsconfig.node.json b/shared/configs/tsconfig.node.json
new file mode 100644
index 0000000..5a43507
--- /dev/null
+++ b/shared/configs/tsconfig.node.json
@@ -0,0 +1,45 @@
+{
+    "$schema": "https://json.schemastore.org/tsconfig",
+    "display": "Strict Node CLI Config",
+    "compilerOptions": {
+        "target": "ES2022",
+        "lib": [
+            "ES2022"
+        ],
+        "module": "NodeNext",
+        "moduleResolution": "NodeNext",
+        "rootDir": "src",
+        "outDir": "dist",
+        "resolveJsonModule": true,
+        "esModuleInterop": true,
+        "forceConsistentCasingInFileNames": true,
+        "strict": true,
+        "alwaysStrict": true,
+        "noUncheckedIndexedAccess": true,
+        "noFallthroughCasesInSwitch": true,
+        "noImplicitOverride": true,
+        "noImplicitReturns": true,
+        "noPropertyAccessFromIndexSignature": true,
+        "skipLibCheck": false,
+        "types": [
+            "node"
+        ],
+        "allowSyntheticDefaultImports": false,
+        "sourceMap": true,
+        "declaration": true,
+        "declarationMap": true,
+        "noEmitOnError": true
+    },
+    "ts-node": {
+        "esm": true,
+        "transpileOnly": false
+    },
+    "include": [
+        "src"
+    ],
+    "exclude": [
+        "node_modules",
+        "dist",
+        "coverage"
+    ]
+}
\ No newline at end of file
```

---

### Commit: 585d31fe1ff7b5e8870664e3f72363ff69e83c07
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add browser TypeScript configuration with DOM support

**Changed Files:**
- shared/configs/tsconfig.browser.json

**Diff:**
```diff
diff --git a/shared/configs/tsconfig.browser.json b/shared/configs/tsconfig.browser.json
new file mode 100644
index 0000000..d98158e
--- /dev/null
+++ b/shared/configs/tsconfig.browser.json
@@ -0,0 +1,39 @@
+{
+    "$schema": "https://json.schemastore.org/tsconfig",
+    "display": "Strict Browser Config",
+    "compilerOptions": {
+        "target": "ES2022",
+        "lib": [
+            "ES2022",
+            "DOM",
+            "DOM.Iterable"
+        ],
+        "module": "ESNext",
+        "moduleResolution": "Bundler",
+        "allowJs": false,
+        "checkJs": false,
+        "jsx": "react-jsx",
+        "resolveJsonModule": true,
+        "strict": true,
+        "alwaysStrict": true,
+        "noUnusedLocals": true,
+        "noUnusedParameters": true,
+        "noImplicitOverride": true,
+        "noImplicitReturns": true,
+        "noUncheckedIndexedAccess": true,
+        "noFallthroughCasesInSwitch": true,
+        "skipLibCheck": false,
+        "allowSyntheticDefaultImports": false,
+        "forceConsistentCasingInFileNames": true,
+        "isolatedModules": true,
+        "noEmit": true
+    },
+    "include": [
+        "src"
+    ],
+    "exclude": [
+        "node_modules",
+        "dist",
+        "coverage"
+    ]
+}
\ No newline at end of file
```

---

### Commit: 83b3eb5c970817d149b20bf8fb215ac246b69100
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add base shared TypeScript configuration

**Changed Files:**
- shared/configs/tsconfig.base.json

**Diff:**
```diff
diff --git a/shared/configs/tsconfig.base.json b/shared/configs/tsconfig.base.json
new file mode 100644
index 0000000..c2d1d34
--- /dev/null
+++ b/shared/configs/tsconfig.base.json
@@ -0,0 +1,15 @@
+{
+    "$schema": "https://json.schemastore.org/tsconfig",
+    "display": "Base Strict Config",
+    "compilerOptions": {
+        "strict": true,
+        "alwaysStrict": true,
+        "noUnusedLocals": true,
+        "noUnusedParameters": true,
+        "noImplicitOverride": true,
+        "noImplicitReturns": true,
+        "noUncheckedIndexedAccess": true,
+        "forceConsistentCasingInFileNames": true,
+        "skipLibCheck": false
+    }
+}
\ No newline at end of file
```

---

### Commit: 3f172739656d5618d70f8a57b539061257afae03
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add Tailwind MJS config with full customization support

**Changed Files:**
- shared/configs/tailwind.config.mjs

**Diff:**
```diff
diff --git a/shared/configs/tailwind.config.mjs b/shared/configs/tailwind.config.mjs
new file mode 100644
index 0000000..26292e5
--- /dev/null
+++ b/shared/configs/tailwind.config.mjs
@@ -0,0 +1,64 @@
+import forms from "@tailwindcss/forms";
+import typography from "@tailwindcss/typography";
+import aspectRatio from "@tailwindcss/aspect-ratio";
+import containerQueries from "@tailwindcss/container-queries";
+
+/** @type {import('tailwindcss').Config} */
+const config = {
+    content: [
+        "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,mdx}",
+        "./public/index.html",
+        "./app/**/*.{js,ts,jsx,tsx}",
+    ],
+
+    darkMode: "class",
+
+    prefix: "",
+    separator: ":",
+
+    theme: {
+        container: {
+            center: true,
+            padding: "2rem",
+            screens: {
+                sm: "640px",
+                md: "768px",
+                lg: "1024px",
+                xl: "1280px",
+                "2xl": "1536px"
+            }
+        },
+
+        extend: {
+            fontFamily: {
+                sans: ["Inter", "ui-sans-serif", "system-ui"],
+                mono: ["Fira Code", "ui-monospace"]
+            },
+
+            colors: {
+                brand: {
+                    DEFAULT: "#2563eb",
+                    light: "#3b82f6",
+                    dark: "#1e40af"
+                }
+            }
+        }
+    },
+
+    safelist: [
+        "inline-flex",
+        "flex",
+        "grid",
+        {
+            pattern: /(bg|text|border)-(brand|gray|slate)-(50|100|300|500|700|900)/
+        }
+    ],
+
+    corePlugins: {
+        container: true
+    },
+
+    plugins: [forms(), typography(), aspectRatio(), containerQueries()]
+};
+
+export default config;
```

---

### Commit: 967149831cde861597480ef1c72f933bde7aac44
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add Tailwind CJS config with extended utilities

**Changed Files:**
- shared/configs/tailwind.config.cjs

**Diff:**
```diff
diff --git a/shared/configs/tailwind.config.cjs b/shared/configs/tailwind.config.cjs
new file mode 100644
index 0000000..118fd28
--- /dev/null
+++ b/shared/configs/tailwind.config.cjs
@@ -0,0 +1,85 @@
+/** @type {import('tailwindcss').Config} */
+module.exports = {
+    content: [
+        "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte,mdx}",
+        "./public/index.html",
+        "./app/**/*.{js,ts,jsx,tsx}",
+    ],
+
+    darkMode: "class",
+
+    theme: {
+        container: {
+            center: true,
+            padding: "2rem",
+            screens: {
+                sm: "640px",
+                md: "768px",
+                lg: "1024px",
+                xl: "1280px",
+                "2xl": "1536px"
+            }
+        },
+
+        extend: {
+            fontFamily: {
+                sans: ["Inter", "ui-sans-serif", "system-ui"],
+                mono: ["Fira Code", "ui-monospace", "SFMono-Regular"]
+            },
+
+            colors: {
+                brand: {
+                    DEFAULT: "#2563eb",
+                    light: "#3b82f6",
+                    dark: "#1e40af"
+                }
+            },
+
+            typography: ({ theme }) => ({
+                DEFAULT: {
+                    css: {
+                        color: theme("colors.gray.800"),
+                        a: { color: theme("colors.brand.DEFAULT"), fontWeight: "500" }
+                    }
+                },
+                dark: {
+                    css: {
+                        color: theme("colors.gray.100"),
+                        a: { color: theme("colors.brand.light") }
+                    }
+                }
+            }),
+
+            spacing: {
+                18: "4.5rem",
+                22: "5.5rem",
+                128: "32rem"
+            },
+
+            borderRadius: {
+                xl: "1rem",
+                "2xl": "1.5rem"
+            }
+        }
+    },
+
+    safelist: [
+        "text-center",
+        "text-left",
+        "text-right",
+        {
+            pattern: /(bg|text|border)-(brand|red|green|blue|gray)-(100|200|400|600|800)/
+        }
+    ],
+
+    corePlugins: {
+        preflight: true
+    },
+
+    plugins: [
+        require("@tailwindcss/forms"),
+        require("@tailwindcss/typography"),
+        require("@tailwindcss/aspect-ratio"),
+        require("@tailwindcss/container-queries")
+    ]
+};
```

---

### Commit: 9d612ba2a3f02c6dd4b40593b5ac07609e1f07af
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add Prettier MJS configuration

**Changed Files:**
- shared/configs/prettier.config.mjs

**Diff:**
```diff
diff --git a/shared/configs/prettier.config.mjs b/shared/configs/prettier.config.mjs
new file mode 100644
index 0000000..b53db83
--- /dev/null
+++ b/shared/configs/prettier.config.mjs
@@ -0,0 +1,45 @@
+// prettier.config.mjs
+/**
+ * Prettier Configuration Template
+ * Highly opinionated, consistent formatting for modern JS, TS, JSON, Markdown, HTML, CSS
+ */
+
+export default {
+    printWidth: 100,
+    tabWidth: 2,
+    useTabs: false,
+    semi: true,
+    singleQuote: false,
+    quoteProps: "as-needed",
+    jsxSingleQuote: false,
+    trailingComma: "all",
+    bracketSpacing: true,
+    bracketSameLine: false,
+    arrowParens: "always",
+    proseWrap: "preserve",
+    htmlWhitespaceSensitivity: "css",
+    endOfLine: "lf",
+    embeddedLanguageFormatting: "auto",
+
+    overrides: [
+        {
+            files: "*.md",
+            options: {
+                printWidth: 80,
+            },
+        },
+        {
+            files: "*.json",
+            options: {
+                trailingComma: "none",
+            },
+        },
+        {
+            files: ["*.yml", "*.yaml"],
+            options: {
+                singleQuote: false,
+                tabWidth: 2,
+            },
+        },
+    ],
+};
```

---

### Commit: 5d57049d586f8a751866bb57ccaac9d004a3bcdd
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add ESLint CJS configuration variant

**Changed Files:**
- shared/configs/eslint.config.cjs

**Diff:**
```diff
diff --git a/shared/configs/eslint.config.cjs b/shared/configs/eslint.config.cjs
new file mode 100644
index 0000000..b07274a
--- /dev/null
+++ b/shared/configs/eslint.config.cjs
@@ -0,0 +1,49 @@
+// .eslintrc.cjs
+/* ESLint Config for CommonJS environments */
+const globals = require("globals");
+const js = require("@eslint/js");
+const eslintPluginImport = require("eslint-plugin-import");
+const eslintPluginN = require("eslint-plugin-n");
+const eslintPluginPromise = require("eslint-plugin-promise");
+const eslintPluginUnusedImports = require("eslint-plugin-unused-imports");
+
+module.exports = [
+    {
+        files: ["**/*.js", "**/*.cjs"],
+        languageOptions: {
+            ecmaVersion: 2023,
+            sourceType: "script",
+            globals: {
+                ...globals.node,
+                ...globals.browser
+            }
+        },
+        plugins: {
+            import: eslintPluginImport,
+            n: eslintPluginN,
+            promise: eslintPluginPromise,
+            unused: eslintPluginUnusedImports
+        },
+        rules: {
+            "no-var": "error",
+            "prefer-const": "error",
+            "no-unused-vars": "off",
+            "unused/imports": "error",
+            "no-undef": "error",
+
+            "import/order": [
+                "error",
+                {
+                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
+                    "newlines-between": "always"
+                }
+            ],
+
+            "n/no-missing-import": "warn",
+            "n/no-unsupported-features/es-syntax": "off",
+
+            "promise/no-return-wrap": "error",
+            "promise/param-names": "error"
+        }
+    }
+];
```

---

### Commit: e1b9e0fba6af6e4186d6cbf4152355da4708776a
Author: nzingx
Date: 2025-11-17
Message: feat(configs): add new Prettier CJS configuration

**Changed Files:**
- shared/configs/.prettierrc.cjs

**Diff:**
```diff
diff --git a/shared/configs/.prettierrc.cjs b/shared/configs/.prettierrc.cjs
new file mode 100644
index 0000000..80a4d4a
--- /dev/null
+++ b/shared/configs/.prettierrc.cjs
@@ -0,0 +1,45 @@
+// .prettierrc.cjs
+/**
+ * Prettier Configuration Template
+ * CommonJS version for older tooling or Node environments
+ */
+
+module.exports = {
+    printWidth: 100,
+    tabWidth: 2,
+    useTabs: false,
+    semi: true,
+    singleQuote: false,
+    quoteProps: "as-needed",
+    jsxSingleQuote: false,
+    trailingComma: "all",
+    bracketSpacing: true,
+    bracketSameLine: false,
+    arrowParens: "always",
+    proseWrap: "preserve",
+    htmlWhitespaceSensitivity: "css",
+    endOfLine: "lf",
+    embeddedLanguageFormatting: "auto",
+
+    overrides: [
+        {
+            files: "*.md",
+            options: {
+                printWidth: 80,
+            },
+        },
+        {
+            files: "*.json",
+            options: {
+                trailingComma: "none",
+            },
+        },
+        {
+            files: ["*.yml", "*.yaml"],
+            options: {
+                singleQuote: false,
+                tabWidth: 2,
+            },
+        },
+    ],
+};
```

---

### Commit: ec85ee53d290bb96ad8221f08b200672c08612d5
Author: nzingx
Date: 2025-11-17
Message: chore(configs): remove outdated base tsconfig.json

**Changed Files:**
- shared/configs/tsconfig.json

**Diff:**
```diff
diff --git a/shared/configs/tsconfig.json b/shared/configs/tsconfig.json
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: e1a5c31084f324800470095ca09fd93d0133c88e
Author: nzingx
Date: 2025-11-17
Message: chore(configs): remove deprecated Tailwind JS config

**Changed Files:**
- shared/configs/tailwind.config.js

**Diff:**
```diff
diff --git a/shared/configs/tailwind.config.js b/shared/configs/tailwind.config.js
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: 06d461c2f44a419a305b64021f97363c8eecd2b3
Author: nzingx
Date: 2025-11-17
Message: chore(configs): remove legacy Prettier CJS configuration

**Changed Files:**
- shared/configs/prettier.config.cjs

**Diff:**
```diff
diff --git a/shared/configs/prettier.config.cjs b/shared/configs/prettier.config.cjs
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: 70a1b610cd95ef2de1f48b07c32717a895abbb57
Author: nzingx
Date: 2025-11-17
Message: chore(configs): remove unused go.mod configuration

**Changed Files:**
- shared/configs/go.mod

**Diff:**
```diff
diff --git a/shared/configs/go.mod b/shared/configs/go.mod
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: 539cfe9f42ddfbc8762ab33e206fb7beb7a0574c
Author: nzingx
Date: 2025-11-17
Message: fix(configs): refine Rust formatting configuration with stricter rules

**Changed Files:**
- shared/configs/rustfmt.toml

**Diff:**
```diff
diff --git a/shared/configs/rustfmt.toml b/shared/configs/rustfmt.toml
index e69de29..92a7c85 100644
--- a/shared/configs/rustfmt.toml
+++ b/shared/configs/rustfmt.toml
@@ -0,0 +1,72 @@
+# rustfmt.toml
+# Ultra Complete Rustfmt Configuration for Consistent Code Style
+
+# Maximum width of a line before formatting breaks it.
+max_width = 100
+
+# Tab or space indentation.
+hard_tabs = false
+tab_spaces = 4
+
+# Where to put opening braces.
+brace_style = "AlwaysNextLine" # Options: AlwaysSameLine, AlwaysNextLine
+
+# Reorder imports into a canonical form.
+reorder_imports = true
+reorder_modules = true
+
+# Group imports into standardized sections.
+group_imports = "StdExternalCrate" # Options: Preserve, One, StdExternalCrate
+
+# Control how match statements are formatted.
+match_arm_leading_pipes = "Preserve" # Options: Always, Never, Preserve
+match_block_trailing_comma = true
+
+# Struct formatting rules.
+struct_lit_single_line = false
+format_struct_field_attributes = true
+format_strings = true
+
+# Control use statements.
+imports_granularity = "Crate" # Options: Preserve, Module, Crate, Item
+merge_imports = true
+
+# Enforce trailing commas.
+trailing_comma = "Vertical" # Options: Vertical, Horizontal, Never
+
+# Align parameters, arguments, and struct fields vertically when sensible.
+normalize_comments = true
+normalize_doc_attributes = true
+
+# Format code inside string macro arguments where possible.
+format_macro_matchers = true
+format_macro_bodies = true
+
+# Format inline modules.
+format_code_in_doc_comments = true
+
+# Short or long comments wrapping.
+wrap_comments = true
+comment_width = 100
+
+# Control edition support.
+edition = "2021" # Options: 2015, 2018, 2021, 2024 (unstable)
+
+# Control blank line removal and merging.
+blank_lines_upper_bound = 2
+blank_lines_lower_bound = 0
+
+# Chain indentation for long method chains.
+chain_width = 80
+
+# Closure formatting.
+closure_block_style = "AlwaysNextLine" # Options: AlwaysSameLine, AlwaysNextLine
+
+# Enforce uniform formatting across files.
+unstable_features = true
+
+# Experimental options for nightly toolchains (safe to remove if needed)
+# Requires: rustup + nightly + rustfmt-nightly
+merge_derives = true
+imports_layout = "Vertical" # Options: Horizontal, Vertical
+condense_wildcard_suffixes = true
```

---

### Commit: ccdec336b46a774f4371d460bf2909524f938178
Author: nzingx
Date: 2025-11-17
Message: fix(configs): improve pyproject.toml configuration for tooling consistency

**Changed Files:**
- shared/configs/pyproject.toml

**Diff:**
```diff
diff --git a/shared/configs/pyproject.toml b/shared/configs/pyproject.toml
index e69de29..3f4af91 100644
--- a/shared/configs/pyproject.toml
+++ b/shared/configs/pyproject.toml
@@ -0,0 +1,122 @@
+# pyproject.toml
+# Universal Python Project Configuration Template
+# Supports: Build, Linting, Formatting, Testing, Type Checking, Docs, Packaging
+
+[project]
+name = "your-package-name"
+version = "0.1.0"
+description = "Project description goes here."
+readme = "README.md"
+requires-python = ">=3.10"
+license = { file = "LICENSE" }
+authors = [{ name = "Your Name", email = "you@example.com" }]
+keywords = ["python", "example", "template"]
+classifiers = [
+  "Development Status :: 4 - Beta",
+  "Programming Language:: Python",
+  "Programming Language:: Python :: 3.10",
+  "License :: OSI Approved :: MIT License",
+  "Operating System :: OS Independent"
+]
+dependencies = [
+  # "requests>=2.32.0",
+]
+
+[project.optional-dependencies]
+dev = [
+  "pytest>=8.0.0",
+  "pytest-cov>=5.0.0",
+  "ruff>=0.6.8",
+  "black>=24.4.2",
+  "mypy>=1.11.0",
+  "pre-commit>=4.0.1",
+  "build>=1.2.2",
+  "twine>=5.1.1",
+]
+docs = [
+  "sphinx>=7.4.0",
+  "furo>=2024.8.6",
+]
+
+[project.urls]
+homepage = "https://example.com"
+documentation = "https://example.com/docs"
+repository = "https://example.com/repo"
+issues = "https://example.com/issues"
+
+[build-system]
+requires = ["setuptools>=75.0", "wheel"]
+build-backend = "setuptools.build_meta"
+
+##########################
+# Ruff: Lint + Format Fix
+##########################
+[tool.ruff]
+line-length = 100
+target-version = "py310"
+fix = true
+unsafe-fixes = false
+
+[tool.ruff.format]
+quote-style = "double"
+indent-style = "space"
+docstring-code-format = true
+line-ending = "lf"
+
+[tool.ruff.lint]
+select = ["E", "F", "W", "N", "D", "UP", "S", "I", "B"]
+ignore = []
+unfixable = []
+
+##########################
+# Black (Formatter)
+##########################
+[tool.black]
+line-length = 100
+target-version = ["py310"]
+fast = false
+
+##########################
+# Mypy (Type Checking)
+##########################
+[tool.mypy]
+python_version = "3.10"
+strict = true
+warn_unused_configs = true
+disallow_untyped_defs = true
+ignore_missing_imports = true
+
+##########################
+# Pytest
+##########################
+[tool.pytest.ini_options]
+minversion = "8.0"
+addopts = "--cov --cov-report=term-missing"
+testpaths = ["tests"]
+
+##########################
+# Coverage settings
+##########################
+[tool.coverage.run]
+branch = true
+source = ["src"]
+
+[tool.coverage.report]
+omit = ["tests/*"]
+show_missing = true
+fail_under = 90
+
+##########################
+# Pre-commit
+##########################
+[tool.pre-commit]
+repos = [
+  { repo = "https://github.com/astral-sh/ruff-pre-commit", rev = "v0.6.8", hooks = [{ id = "ruff" }] },
+  { repo = "https://github.com/psf/black", rev = "24.4.2", hooks = [{ id = "black" }] }
+]
+
+##########################
+# Sphinx Docs
+##########################
+[tool.sphinx]
+builder = "html"
```

---

### Commit: cbdb839dbd5e52cd4c2d5369e554c7a4ea0309c8
Author: nzingx
Date: 2025-11-17
Message: fix(configs): update ESLint MJS configuration with extended rules

**Changed Files:**
- shared/configs/eslint.config.mjs

**Diff:**
```diff
diff --git a/shared/configs/eslint.config.mjs b/shared/configs/eslint.config.mjs
index e69de29..21f8152 100644
--- a/shared/configs/eslint.config.mjs
+++ b/shared/configs/eslint.config.mjs
@@ -0,0 +1,54 @@
+// eslint.config.mjs
+import js from "@eslint/js";
+import globals from "globals";
+import eslintPluginImport from "eslint-plugin-import";
+import eslintPluginN from "eslint-plugin-n";
+import eslintPluginPromise from "eslint-plugin-promise";
+import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
+
+/**
+ * ESLint Flat Config Template
+ * Full Featured Best Practices For Modern JavaScript/TypeScript
+ */
+
+export default [
+    {
+        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
+        languageOptions: {
+            ecmaVersion: 2023,
+            sourceType: "module",
+            globals: {
+                ...globals.browser,
+                ...globals.node
+            }
+        },
+        plugins: {
+            import: eslintPluginImport,
+            n: eslintPluginN,
+            promise: eslintPluginPromise,
+            unused: eslintPluginUnusedImports
+        },
+        rules: {
+            "no-var": "error",
+            "prefer-const": "error",
+            "no-unused-vars": "off",
+            "unused/imports": "error",
+            "no-undef": "error",
+
+            "import/order": [
+                "error",
+                {
+                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
+                    "newlines-between": "always"
+                }
+            ],
+
+            "n/no-missing-import": "warn",
+            "n/no-unsupported-features/es-syntax": "off",
+
+            "promise/always-return": "off",
+            "promise/no-return-wrap": "error",
+            "promise/param-names": "error"
+        }
+    }
+];
```

---

### Commit: af8e1b8e392bdccae414e7f1c8e7e9f48a3b69f1
Author: nzingx
Date: 2025-11-17
Message: fix(configs): update .editorconfig configuration for project standards

**Changed Files:**
- shared/configs/editorconfig

**Diff:**
```diff
diff --git a/shared/configs/editorconfig b/shared/configs/editorconfig
index e69de29..e4bc7e1 100644
--- a/shared/configs/editorconfig
+++ b/shared/configs/editorconfig
@@ -0,0 +1,151 @@
+# =========================================
+# Global .editorconfig for multi-language
+# Project: Snipets (or whatever chaos awaits)
+# =========================================
+
+root = true
+
+# -----------------------------------------
+# Default rules for all files
+# -----------------------------------------
+[*]
+charset = utf-8
+indent_style = space
+indent_size = 2
+end_of_line = lf
+insert_final_newline = true
+trim_trailing_whitespace = true
+max_line_length = 120
+
+# -----------------------------------------
+# Markdown, because formatting wars are real
+# -----------------------------------------
+[*.md]
+indent_size = 2
+trim_trailing_whitespace = false
+max_line_length = off
+
+# -----------------------------------------
+# YAML / YML (DevOps sacred tablets)
+# -----------------------------------------
+[*.{yml,yaml}]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# JSON & JSONC
+# -----------------------------------------
+[*.{json,jsonc}]
+indent_size = 2
+
+# -----------------------------------------
+# JavaScript & TypeScript
+# -----------------------------------------
+[*.{js,jsx,ts,tsx,mjs,cjs}]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# Python (4 spaces forever, tabs go to jail)
+# -----------------------------------------
+[*.py]
+indent_style = space
+indent_size = 4
+
+# -----------------------------------------
+# Shell Scripts
+# -----------------------------------------
+[*.{sh,bash}]
+indent_style = space
+indent_size = 2
+end_of_line = lf
+
+# -----------------------------------------
+# Makefile (tabs required by ancient gods)
+# -----------------------------------------
+[Makefile]
+indent_style = tab
+
+# -----------------------------------------
+# Dockerfiles
+# -----------------------------------------
+[Dockerfile*]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# C, C++, and headers
+# -----------------------------------------
+[*.{c,cc,cpp,h,hpp}]
+indent_style = space
+indent_size = 4
+
+# -----------------------------------------
+# HTML & XML
+# -----------------------------------------
+[*.{html,htm,xml}]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# CSS, SCSS, LESS
+# -----------------------------------------
+[*.{css,scss,less}]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# PHP
+# -----------------------------------------
+[*.php]
+indent_style = space
+indent_size = 4
+
+# -----------------------------------------
+# Go (tabs, but not chaos tabs)
+# -----------------------------------------
+[*.go]
+indent_style = tab
+indent_size = 4
+
+# -----------------------------------------
+# Rust
+# -----------------------------------------
+[*.rs]
+indent_style = space
+indent_size = 4
+
+# -----------------------------------------
+# TOML (Rust's config child)
+# -----------------------------------------
+[*.toml]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# INI
+# -----------------------------------------
+[*.ini]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# SQL
+# -----------------------------------------
+[*.sql]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# Text files
+# -----------------------------------------
+[*.txt]
+indent_style = space
+indent_size = 2
+
+# -----------------------------------------
+# Ignore minified, because touching them is pain
+# -----------------------------------------
+[*.min.{js,css}]
+max_line_length = off
+trim_trailing_whitespace = false
```

---

### Commit: f29ab71548e76dc633560957b02a45fee14088fb
Author: nzingx
Date: 2025-11-17
Message: docs(security): update security policy and clarify reporting requirements

**Changed Files:**
- SECURITY.md

**Diff:**
```diff
diff --git a/SECURITY.md b/SECURITY.md
index e69de29..6334c24 100644
--- a/SECURITY.md
+++ b/SECURITY.md
@@ -0,0 +1,106 @@
+# Security Policy
+
+This document describes the security policy and vulnerability reporting guidelines for the **neuxdotdev/snipets** project. Security is a priority for this project and all contributors are expected to handle potential vulnerabilities responsibly.
+
+---
+
+## Supported Versions
+
+Security updates will be provided for the following branches and versions:
+
+| Version/Branch | Status |
+|----------------|--------|
+| main           | Actively supported |
+| development    | Actively supported |
+| any archived or EOL branches | Not supported |
+
+Users are strongly encouraged to run the most recent stable version.
+
+---
+
+## Reporting a Vulnerability
+
+If you discover a security vulnerability, do not submit it publicly through issues or discussions.
+
+To report a vulnerability, contact:
+
+**Email:** `neuxdev1@gmail.com`
+
+When reporting, please include:
+
+- A clear description of the vulnerability
+- Steps to reproduce the issue
+- Potential impact and severity
+- Any relevant logs, screenshots, or proof of concept
+- Suggested remediation if available
+
+We will acknowledge receipt of the report and provide a status update within a reasonable timeframe.
+
+---
+
+## Disclosure Procedure
+
+The project follows a private and responsible disclosure process:
+
+1. Vulnerability is reported via the private security channel.
+2. The maintainers investigate and validate the report.
+3. A fix or mitigation is developed.
+4. A release is published that resolves the issue.
+5. A public disclosure may be published after users have had a reasonable chance to update.
+
+---
+
+## Security Expectations for Contributors
+
+Contributors must:
+
+- Avoid introducing insecure dependencies or code patterns.
+- Follow secure coding practices, including input validation and proper error handling.
+- Never commit secrets, tokens, passwords, or private API keys.
+- Immediately report any accidental credential leak.
+- Use private channels for discussions related to security issues.
+
+Pull requests introducing security-sensitive changes may require additional review.
+
+---
+
+## Handling Cryptographic Material
+
+If the project uses cryptography:
+
+- Only well-reviewed, widely accepted libraries should be used.
+- Custom, experimental, or home-grown cryptography is strictly prohibited.
+- Keys must never be stored within the repository.
+
+---
+
+## Security FAQ
+
+| Question | Answer |
+|---------|--------|
+| Can I report low-severity bugs? | Yes. All security concerns are welcome. |
+| Will researchers be acknowledged? | If requested and disclosure is responsible, yes. |
+| Are denial-of-service reports accepted? | Yes, if reproducible and verifiable. |
+| Can I test production systems? | No. Testing must be done within permitted scope only. |
+
+---
+
+## Legal Safe Harbor
+
+As long as security research is conducted:
+
+- In good faith
+- Within the described reporting process
+- Without privacy violations, data destruction, or service disruption
+
+The project will not pursue legal action for vulnerability discovery and responsible disclosure.
+
+---
+
+## Contact
+
+For any questions or clarifications about this Security Policy:
+
+`neuxdev1@gmail.com`
+
+Thank you for helping keep this project secure.
```

---

### Commit: 8cf92bcb4dd82977917daa4110fcdbd75f9e7f62
Author: nzingx
Date: 2025-11-17
Message: docs(contributing): improve documentation for pull requests, issues and review process

**Changed Files:**
- CONTRIBUTING.md

**Diff:**
```diff
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index e69de29..0f37118 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -0,0 +1,193 @@
+# Contributing Guidelines
+
+Thank you for your interest in contributing to this repository. Contributions are valuable and help improve the project for everyone. Please review the guidelines below before opening a pull request or issue.
+
+This document applies to the repository:
+
+`https://gitea.com/neuxdotdev/snipets`
+
+---
+
+## 1. Code of Conduct
+
+By participating in this project, contributors are expected to uphold respectful and constructive communication at all times. Harassment, discrimination, personal attacks, and unprofessional behavior are not tolerated.
+
+---
+
+## 2. Ways to Contribute
+
+You can contribute to this project in multiple ways:
+
+| Contribution Type | Description |
+|------------------|-------------|
+| Reporting Issues | Identify bugs, unexpected behavior, security concerns, or performance problems. |
+| Proposing Enhancements | Suggest improvements, new features, or refinements. |
+| Submitting Pull Requests | Fix bugs, add features, improve documentation, or maintain code structure. |
+| Improving Documentation | Enhance clarity, correctness, and completeness of project documentation. |
+
+---
+
+## 3. Issue Reporting Guidelines
+
+Before opening an issue, please:
+
+1. Search existing issues to avoid duplicates.
+2. Confirm that the issue is reproducible.
+3. Include enough technical detail for maintainers to understand the problem.
+
+Recommended issue format:
+
+```
+Title: Short descriptive summary
+
+## Description
+Clear explanation of the problem or suggestion.
+
+## Steps to Reproduce (if applicable)
+1. Step one
+2. Step two
+3. ...
+
+## Expected Behavior
+Explain the expected outcome.
+
+## Actual Behavior
+Explain what actually occurred.
+
+## Additional Information
+Logs, screenshots, environment details, references, etc.
+```
+
+---
+
+## 4. Pull Request Guidelines
+
+To help maintain code quality and review efficiency, follow these requirements:
+
+### 4.1 Requirements
+
+- One pull request must target one logical change.
+- Ensure code builds without errors.
+- Ensure no confidential or proprietary information is included.
+- Provide tests when applicable.
+- Update documentation when relevant.
+
+### 4.2 Commit Message Format
+
+Use clear, structured commit messages:
+
+```
+<type>(scope): short summary
+
+Optional body explaining what and why, not how.
+```
+
+Valid commit types include:
+
+| Type      | Purpose |
+|-----------|---------|
+| feat      | A new feature |
+| fix       | A bug fix |
+| docs      | Documentation changes only |
+| style     | Code style changes (no logic impact) |
+| refactor  | Code change that improves internal structure |
+| perf      | Performance improvement |
+| test      | Adding or modifying tests |
+| build     | Build system or dependency change |
+| ci        | Continuous integration update |
+| chore     | Maintenance tasks with no behavior impact |
+
+### 4.3 Pull Request Template
+
+```
+## Summary
+Brief description of the change.
+
+## Related Issue
+Link any related issue here.
+
+## Changes
+- Bullet list of changes
+
+## Tests
+Describe test coverage or explain why tests are unnecessary.
+
+## Additional Notes
+Any relevant context or technical considerations.
+```
+
+---
+
+## 5. Coding Standards
+
+Depending on snippet language, follow these standards:
+
+| Language | Standard / Format |
+|----------|------------------|
+| Python   | PEP 8 style guidelines |
+| JavaScript / TypeScript | ESLint recommended rules |
+| Go       | `gofmt` and idiomatic Go guidelines |
+| Shell    | POSIX compatible unless specified otherwise |
+| Markdown | Concise, consistent headings and code fences |
+
+General rules:
+
+- Write clear, maintainable, and well-documented code.
+- Favor self explanatory naming conventions.
+- Avoid unnecessary external dependencies.
+- Security must be considered in all contributions.
+
+---
+
+## 6. Directory and File Structure
+
+Snippet submissions must follow:
+
+```
+snipets/
+  <category>/
+    <name>.<ext>
+    README.md (optional, recommended)
+```
+
+Example categories:
+
+- `bash/`
+- `python/`
+- `devops/`
+- `docker/`
+- `regex/`
+- `sql/`
+
+---
+
+## 7. Licensing
+
+By contributing, you agree that your work will be released under the repository license. Ensure that you have the right to contribute the code or material.
+
+---
+
+## 8. Security Reporting
+
+Security vulnerabilities must not be submitted publicly through issues. Please report them responsibly to the project maintainer via private communication, if available.
+
+---
+
+## 9. Review Process
+
+Pull requests are reviewed with attention to:
+
+- Technical correctness
+- Security implications
+- Code clarity and structure
+- Consistency with project goals
+
+Approval may require updates or feedback responses before merging.
+
+---
+
+## 10. Contact
+
+If you have questions related to contributions, open a discussion or issue in the repository.
+
+Thank you for contributing and improving this project.
```

---

### Commit: faf4240dc76c98aa1780561dc8db55f437acd19d
Author: nzingx
Date: 2025-11-17
Message: docs(code-of-conduct): refine behavior guidelines and clarify enforcement terms

**Changed Files:**
- CODE_OF_CONDUCT.md

**Diff:**
```diff
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index e69de29..273f7d4 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -0,0 +1,125 @@
+# Code of Conduct
+
+This Code of Conduct applies to all community spaces, repositories, communication channels, and events associated with the **neuxdotdev** organization, both online and offline. By participating, you agree to uphold these standards to create a professional, inclusive, and harassment-free environment for all contributors and community members.
+
+---
+
+## 1. Our Pledge
+
+We pledge to make participation in our project and community a welcoming and respectful experience for everyone. We are committed to providing an environment free from harassment and discrimination regardless of:
+
+- Age
+- Body size or physical appearance
+- Disability or medical conditions
+- Ethnicity, nationality, or cultural background
+- Gender identity or expression
+- Level of experience or education
+- Race or caste
+- Religion or belief system
+- Sexual identity or orientation
+
+We also pledge to act and interact in ways that contribute to a safe, open, and collaborative environment.
+
+---
+
+## 2. Our Standards
+
+### 2.1 Examples of positive behavior
+
+Behavior that encourages a healthy and constructive environment includes:
+
+- Using inclusive, clear, and respectful language
+- Demonstrating empathy, understanding, and patience
+- Acknowledging differing viewpoints and experiences
+- Accepting constructive feedback gracefully
+- Focusing on solving problems instead of assigning blame
+- Respecting people's privacy and personal boundaries
+- Referring to individuals by their appropriate or requested pronouns, and using neutral pronouns when uncertain
+
+### 2.2 Examples of unacceptable behavior
+
+Unacceptable behavior includes, but is not limited to:
+
+- Harassment, insults, or derogatory comments
+- Public or private trolling, intimidation, or personal attacks
+- Deliberate misgendering or use of inappropriate pronouns
+- Displaying or sharing sexual, violent, or disturbing content
+- Unwelcome sexual attention or advances
+- Publishing private or identifying information without explicit consent
+- Persistent communication after being asked to stop
+- Bigotry, slurs, discrimination or encouragement of unequal treatment
+- Drug promotion and illegal activity
+- Political or ideological provocations that lead to hostility
+- Attacks on personal interests, tastes, or professional background
+- Any behavior that could reasonably be considered inappropriate in a professional or community setting
+
+---
+
+## 3. Enforcement Responsibilities
+
+Project maintainers and community administrators are responsible for:
+
+- Clarifying and enforcing standards of acceptable behavior
+- Taking fair and consistent action in response to violations
+- Providing channels to report misconduct safely
+- Protecting reporters and affected members from retaliation
+
+Maintainers have the right to take corrective actions including warnings, content removal, temporary or permanent bans, and any other response deemed necessary.
+
+---
+
+## 4. Reporting Violations
+
+If you experience or witness behavior that violates this Code of Conduct, you may report it via:
+
+Email: `neuxdev1@gmail.com`
+
+Reports should include, when possible:
+
+- Description of the behavior
+- Names or identities of individuals involved
+- Date, time, and context
+- Any supporting evidence such as screenshots, logs, or links
+
+All reports will be reviewed and handled confidentially. Information will only be shared when required to conduct an appropriate investigation or as requested by the reporter.
+
+---
+
+## 5. Enforcement Guidelines
+
+When violations occur, the following actions may be taken depending on severity and context:
+
+| Level | Consequence |
+|-------|-------------|
+| 1. Warning | A private, written notification explaining the violation and expectations for future behavior. |
+| 2. Temporary Restrictions | Limited interaction or temporary ban from community spaces. |
+| 3. Account Suspension | Removal from project spaces for a defined period of time. |
+| 4. Permanent Ban | Full removal from community participation and related platforms. |
+
+---
+
+## 6. Scope
+
+This Code of Conduct applies to all members, contributors, maintainers, and any individuals interacting within project spaces including:
+
+- Repositories and commits
+- Issues, pull requests, and discussion threads
+- Community calls and meetings
+- Official project chatrooms and communication channels
+- Public and private events representing the community
+
+---
+
+## 7. Attribution
+
+This Code of Conduct was adapted from multiple open community standards, including resources from dev.to, Contributor Covenant, and other public documentation.
+
+---
+
+## 8. Contact
+
+For questions related to this Code of Conduct, please use the same reporting contact:
+
+`neuxdev1@gmail.com`
+
+Thank you for helping maintain a respectful and collaborative community.
```

---

### Commit: f6b96170b79b1bf7c410ae3cc4eca3b11d3ba9dc
Author: nzingx
Date: 2025-11-17
Message: delete temp files

**Changed Files:**
- global-software-licenses.txt

**Diff:**
```diff
diff --git a/global-software-licenses.txt b/global-software-licenses.txt
deleted file mode 100644
index e506d8f..0000000
--- a/global-software-licenses.txt
+++ /dev/null
@@ -1,22 +0,0 @@
-Apache License 2.0
-MIT License
-GNU General Public License v2.0 (GPL-2.0)
-GNU General Public License v3.0 (GPL-3.0)
-GNU Lesser General Public License v2.1 (LGPL-2.1)
-GNU Lesser General Public License v3.0 (LGPL-3.0)
-Mozilla Public License 2.0 (MPL-2.0)
-BSD 2-Clause "Simplified" License
-BSD 3-Clause "New" or "Revised" License
-Eclipse Public License 2.0 (EPL-2.0)
-Microsoft Public License (MS-PL)
-Microsoft Reciprocal License (MS-RL)
-Common Development and Distribution License (CDDL-1.0)
-Academic Free License (AFL-3.0)
-Artistic License 2.0
-Boost Software License 1.0 (BSL-1.0)
-Creative Commons Zero v1.0 Universal (CC0-1.0)
-Creative Commons Attribution 4.0 (CC BY 4.0)
-Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
-Unlicense
-WTFPL (Do What The F*** You Want To Public License)
-Zlib License
```

---

### Commit: d3a380c0ca445b5f61200a2f3cbea8d7c397a92f
Author: nzingx
Date: 2025-11-17
Message: chore(config): edit .gitignore

**Changed Files:**
- .gitignore

**Diff:**
```diff
diff --git a/.gitignore b/.gitignore
index aec544e..51c12d9 100644
--- a/.gitignore
+++ b/.gitignore
@@ -5,7 +5,7 @@ npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
 lerna-debug.log*
-
+scripts/*
 # Diagnostic reports (https://nodejs.org/api/report.html)
 report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
 
@@ -484,7 +484,8 @@ nohup.out
 __MACOSX/
 .AppleDouble
 .LSOverride
-Icon[]
+Icon[
+]
 
 # Thumbnails
 ._*
```

---

### Commit: 5f306f59c4122666aba655872e59077fab9c34c0
Author: nzingx
Date: 2025-11-17
Message: docs: edit README.md

**Changed Files:**
- README.md

**Diff:**
```diff
diff --git a/README.md b/README.md
index e69de29..aac591c 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1,147 @@
+# snipets
+
+This repository provides a comprehensive and maintainable collection of `.gitignore` files, open source software licenses, and project boilerplate templates. It is designed to support software development projects across multiple programming languages, ecosystems, operating systems, and development workflows.
+
+The goal of this project is to offer a unified reference that enables developers to initialize repositories quickly and consistently, while avoiding accidental commits of temporary files, credentials, build artifacts, system files, or other non-versioned assets.
+
+---
+
+## 1. Repository Structure
+
+The repository is organized into several key directories:
+
+```
+
+.gitignore                    Base .gitignore for the repository
+global-software-licenses.txt  Aggregated list of recognized licenses
+licenses/                     SPDX-aligned license texts
+shared/configs/               Editor and formatter configurations
+shared/gitignore/             Collection of categorized .gitignore templates
+templates/                    Project scaffolding and boilerplate templates
+.github/, .gitea/             Issue templates, PR templates, CI configurations
+
+````
+
+### 1.1 Gitignore Collections
+
+The directory `shared/gitignore/` includes `.gitignore` templates for:
+
+- Languages: C, C++, C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and others
+- Web and frontend: Astro, Next.js, Nuxt, Remix, Svelte, Vite, React, Node, Bun, Deno
+- Mobile and game engines: Android, iOS/Xcode, React Native, Flutter, Unity, Unreal, Godot
+- DevOps and infrastructure: Docker, Kubernetes, Helm, Ansible, Terraform, Pulumi
+- AI/ML and scientific computing: Conda, Poetry, HuggingFace, TensorFlow, PyTorch, Jupyter
+- Operating systems: Windows, macOS, Linux
+- Editors and IDEs: VSCode, JetBrains, Vim, Emacs, Sublime, Eclipse
+- Package managers: npm, yarn, pnpm, pip, pdm, uv
+
+### 1.2 Software Licenses
+
+The directory `shared/licenses/` contains SPDX-compliant license texts, for example:
+
+- Apache License 2.0
+- MIT License
+- GNU GPL 2.0 and 3.0
+- GNU LGPL 2.1 and 3.0
+- BSD 2-Clause and BSD 3-Clause
+- MPL 2.0
+- EPL 2.0
+- CDDL 1.0
+- BSL 1.0
+- Academic Free License 3.0
+- Unlicense
+- WTFPL
+- Zlib
+- Creative Commons: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0
+
+Each license file follows naming conventions consistent with SPDX identifiers.
+
+### 1.3 Project Templates
+
+Located in `templates/`, covering:
+
+- Backend: FastAPI, Node Express, Go Fiber, Bun, Rust Axum
+- CLI: Go Cobra, Node Commander, Python Typer
+- DevOps: Docker, Kubernetes, Terraform, Ansible
+- Documentation: Sphinx, MkDocs, Docusaurus
+- Mobile: Flutter, React Native
+- Web: Astro, Vanilla JS, Vite/React, SvelteKit, Next.js
+
+---
+
+## 2. Usage Instructions
+
+### 2.1 Initialize a .gitignore from templates
+
+Example for Python and VSCode:
+
+```bash
+cat shared/gitignore/python.gitignore shared/gitignore/vscode.gitignore > .gitignore
+````
+
+### 2.2 Selecting a software license
+
+Copy any license from `shared/licenses/` into the repository root as `LICENSE`:
+
+```bash
+cp shared/licenses/MIT.txt LICENSE
+```
+
+### 2.3 Project Template Initialization
+
+Example using FastAPI backend:
+
+```bash
+cp -r templates/backend/python-fastapi/* .
+```
+
+---
+
+## 3. Compatibility and Standards
+
+This project aligns with:
+
+* SPDX license identifiers: [https://spdx.org/licenses/](https://spdx.org/licenses/)
+* Gitignore template conventions used by leading version control hosting platforms
+* POSIX-compatible text formatting
+* UTF-8 encoding for full language compatibility
+
+---
+
+## 4. Contribution Guidelines
+
+Contributions are welcome. Areas where contributions are valuable include:
+
+* New `.gitignore` templates
+* Additional SPDX-licensed texts
+* Improvements to project scaffolding templates
+* Automated generation tools and scripts
+* Documentation enhancements
+
+Please review the following documents before contributing:
+
+* `CONTRIBUTING.md`
+* `CODE_OF_CONDUCT.md`
+* `SECURITY.md`
+
+---
+
+## 5. Security Policy
+
+Security vulnerabilities should not be reported via public issues. Follow the security disclosure process described in:
+
+```
+SECURITY.md
+```
+
+---
+
+## 6. License
+
+This repository is distributed under the MIT License. Individual license files included in this repository retain their original terms, authorship, and compatibility requirements.
+
+---
+
+## 7. Acknowledgments
+
+This project references open standards and publicly available information from long-standing open source communities, legal organizations, and contributors who have advanced open licensing and software reliability practices.
\ No newline at end of file
```

---

### Commit: 2dd7dd26eac0813b82109f02993e765606807470
Author: nzingx
Date: 2025-11-17
Message: feat: add some templates

**Changed Files:**
- .gitea/FUNDING.yml
- .gitea/ISSUE_TEMPLATE/bug_report.md
- .gitea/ISSUE_TEMPLATE/feature_request.md
- .gitea/ISSUE_TEMPLATE/improvement_suggestion.md
- .gitea/PULL_REQUEST_TEMPLATE.md
- .gitea/workflows/build.yml
- .gitea/workflows/lint.yml
- .gitea/workflows/test.yml
- .github/FUNDING.yml
- .github/ISSUE_TEMPLATE/bug_report.md
- .github/ISSUE_TEMPLATE/feature_request.md
- .github/ISSUE_TEMPLATE/improvement_suggestion.md
- .github/PULL_REQUEST_TEMPLATE.md
- .github/workflows/build.yml
- .github/workflows/lint.yml
- .github/workflows/test.yml
- .gitignore
- CHANGELOG.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- LICENSE
- README.md
- SECURITY.md
- global-software-licenses.txt
- shared/configs/editorconfig
- shared/configs/eslint.config.mjs
- shared/configs/go.mod
- shared/configs/prettier.config.cjs
- shared/configs/pyproject.toml
- shared/configs/rustfmt.toml
- shared/configs/tailwind.config.js
- shared/configs/tsconfig.json
- shared/gitignore/android.gitignore
- shared/gitignore/ansible.gitignore
- shared/gitignore/astro.gitignore
- shared/gitignore/blender.gitignore
- shared/gitignore/bun.gitignore
- shared/gitignore/c.gitignore
- shared/gitignore/conda.gitignore
- shared/gitignore/cpp.gitignore
- shared/gitignore/csharp.gitignore
- shared/gitignore/deno.gitignore
- shared/gitignore/docker.gitignore
- shared/gitignore/dotnet.gitignore
- shared/gitignore/eclipse.gitignore
- shared/gitignore/emacs.gitignore
- shared/gitignore/flutter.gitignore
- shared/gitignore/go.gitignore
- shared/gitignore/godot.gitignore
- shared/gitignore/gradle.gitignore
- shared/gitignore/helm.gitignore
- shared/gitignore/huggingface.gitignore
- shared/gitignore/java.gitignore
- shared/gitignore/jetbrains.gitignore
- shared/gitignore/jupyter.gitignore
- shared/gitignore/kotlin.gitignore
- shared/gitignore/kubernetes.gitignore
- shared/gitignore/laravel.gitignore
- shared/gitignore/linux.gitignore
- shared/gitignore/macos.gitignore
- shared/gitignore/maven.gitignore
- shared/gitignore/nextjs.gitignore
- shared/gitignore/node.gitignore
- shared/gitignore/npm.gitignore
- shared/gitignore/nuxt.gitignore
- shared/gitignore/pdm.gitignore
- shared/gitignore/php.gitignore
- shared/gitignore/pnpm.gitignore
- shared/gitignore/poetry.gitignore
- shared/gitignore/pulumi.gitignore
- shared/gitignore/python.gitignore
- shared/gitignore/pytorch.gitignore
- shared/gitignore/react-native.gitignore
- shared/gitignore/remix.gitignore
- shared/gitignore/ruby.gitignore
- shared/gitignore/rust.gitignore
- shared/gitignore/sublime.gitignore
- shared/gitignore/svelte.gitignore
- shared/gitignore/swift.gitignore
- shared/gitignore/tensorflow.gitignore
- shared/gitignore/terraform.gitignore
- shared/gitignore/unity.gitignore
- shared/gitignore/unreal.gitignore
- shared/gitignore/uv.gitignore
- shared/gitignore/vim.gitignore
- shared/gitignore/vite.gitignore
- shared/gitignore/vscode.gitignore
- shared/gitignore/windows.gitignore
- shared/gitignore/xcode.gitignore
- shared/gitignore/yarn.gitignore
- shared/licenses/AFL-3.0.txt
- shared/licenses/Apache-2.0.txt
- shared/licenses/Artistic-2.0.txt
- shared/licenses/BSD-2-Clause.txt
- shared/licenses/BSD-3-Clause.txt
- shared/licenses/BSL-1.0.txt
- shared/licenses/CC-BY-4.0.txt
- shared/licenses/CC-BY-SA-4.0.txt
- shared/licenses/CC0-1.0.txt
- shared/licenses/CDDL-1.0.txt
- shared/licenses/EPL-2.0.txt
- shared/licenses/GPL-2.0.txt
- shared/licenses/GPL-3.0.txt
- shared/licenses/LGPL-2.1.txt
- shared/licenses/LGPL-3.0.txt
- shared/licenses/MIT.txt
- shared/licenses/MPL-2.0.txt
- shared/licenses/MS-PL.txt
- shared/licenses/MS-RL.txt
- shared/licenses/Unlicense.txt
- shared/licenses/WTFPL.txt
- shared/licenses/Zlib.txt

**Diff:**
```diff
diff --git a/.gitea/FUNDING.yml b/.gitea/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/bug_report.md b/.gitea/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/feature_request.md b/.gitea/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md b/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/PULL_REQUEST_TEMPLATE.md b/.gitea/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/build.yml b/.gitea/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/lint.yml b/.gitea/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/test.yml b/.gitea/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/bug_report.md b/.github/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/feature_request.md b/.github/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/improvement_suggestion.md b/.github/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/PULL_REQUEST_TEMPLATE.md b/.github/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/build.yml b/.github/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/lint.yml b/.github/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/test.yml b/.github/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitignore b/.gitignore
index 0372383..aec544e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,4 +1,3 @@
-# ---> Node
 # Logs
 logs
 *.log
@@ -6,7 +5,6 @@ npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
 lerna-debug.log*
-.pnpm-debug.log*
 
 # Diagnostic reports (https://nodejs.org/api/report.html)
 report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
@@ -58,12 +56,6 @@ web_modules/
 # Optional stylelint cache
 .stylelintcache
 
-# Microbundle cache
-.rpt2_cache/
-.rts2_cache_cjs/
-.rts2_cache_es/
-.rts2_cache_umd/
-
 # Optional REPL history
 .node_repl_history
 
@@ -75,10 +67,8 @@ web_modules/
 
 # dotenv environment variable files
 .env
-.env.development.local
-.env.test.local
-.env.production.local
-.env.local
+.env.*
+!.env.example
 
 # parcel-bundler cache (https://parceljs.org/)
 .cache
@@ -91,6 +81,7 @@ out
 # Nuxt.js build / generate output
 .nuxt
 dist
+.output
 
 # Gatsby files
 .cache/
@@ -105,6 +96,9 @@ dist
 .temp
 .cache
 
+# Sveltekit cache directory
+.svelte-kit/
+
 # vitepress build output
 **/.vitepress/dist
 
@@ -123,23 +117,32 @@ dist
 # DynamoDB Local files
 .dynamodb/
 
+# Firebase cache directory
+.firebase/
+
 # TernJS port file
 .tern-port
 
 # Stores VSCode versions used for testing VSCode extensions
 .vscode-test
 
-# yarn v2
-.yarn/cache
-.yarn/unplugged
-.yarn/build-state.yml
-.yarn/install-state.gz
+# yarn v3
 .pnp.*
+.yarn/*
+!.yarn/patches
+!.yarn/plugins
+!.yarn/releases
+!.yarn/sdks
+!.yarn/versions
+
+# Vite files
+vite.config.js.timestamp-*
+vite.config.ts.timestamp-*
+.vite/
 
-# ---> Python
 # Byte-compiled / optimized / DLL files
 __pycache__/
-*.py[cod]
+*.py[codz]
 *$py.class
 
 # C extensions
@@ -166,8 +169,8 @@ share/python-wheels/
 MANIFEST
 
 # PyInstaller
-#  Usually these files are written by a python script from a template
-#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+#   Usually these files are written by a python script from a template
+#   before PyInstaller builds the exe, so as to inject date/other infos into it.
 *.manifest
 *.spec
 
@@ -185,7 +188,7 @@ htmlcov/
 nosetests.xml
 coverage.xml
 *.cover
-*.py,cover
+*.py.cover
 .hypothesis/
 .pytest_cache/
 cover/
@@ -231,31 +234,38 @@ ipython_config.py
 #   However, in case of collaboration, if having platform-specific dependencies or dependencies
 #   having no cross-platform support, pipenv may install dependencies that don't work, or not
 #   install all needed dependencies.
-#Pipfile.lock
+# Pipfile.lock
 
 # UV
 #   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
-#uv.lock
+# uv.lock
 
 # poetry
 #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
 #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
-#poetry.lock
+# poetry.lock
+# poetry.toml
 
 # pdm
 #   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
-#pdm.lock
-#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
-#   in version control.
-#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
-.pdm.toml
+#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
+#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
+# pdm.lock
+# pdm.toml
 .pdm-python
 .pdm-build/
 
+# pixi
+#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
+# pixi.lock
+#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
+#   in the .venv directory. It is recommended not to include this directory in version control.
+.pixi
+
 # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
 __pypackages__/
 
@@ -263,11 +273,25 @@ __pypackages__/
 celerybeat-schedule
 celerybeat.pid
 
+# Redis
+*.rdb
+*.aof
+*.pid
+
+# RabbitMQ
+mnesia/
+rabbitmq/
+rabbitmq-data/
+
+# ActiveMQ
+activemq-data/
+
 # SageMath parsed files
 *.sage.py
 
 # Environments
 .env
+.envrc
 .venv
 env/
 venv/
@@ -300,15 +324,283 @@ dmypy.json
 cython_debug/
 
 # PyCharm
+#   JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#   be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#   and can be added to the global gitignore or merged into this file.  For a more nuclear
+#   option (not recommended) you can uncomment the following to ignore the entire idea folder.
+# .idea/
+
+# Abstra
+#   Abstra is an AI-powered process automation framework.
+#   Ignore directories containing user credentials, local state, and settings.
+#   Learn more at https://abstra.io/docs
+.abstra/
+
+# Visual Studio Code
+#   Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore 
+#   that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
+#   and can be added to the global gitignore or merged into this file. However, if you prefer, 
+#   you could uncomment the following to ignore the entire vscode folder
+# .vscode/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
+# Marimo
+marimo/_static/
+marimo/_lsp/
+__marimo__/
+
+# Streamlit
+.streamlit/secrets.toml
+
+# If you prefer the allow list template instead of the deny list, see community template:
+# https://github.com/github/gitignore/blob/main/community/Golang/Go.AllowList.gitignore
+#
+# Binaries for programs and plugins
+*.exe
+*.exe~
+*.dll
+*.so
+*.dylib
+
+# Test binary, built with `go test -c`
+*.test
+
+# Code coverage profiles and other test artifacts
+*.out
+coverage.*
+*.coverprofile
+profile.cov
+
+# Dependency directories (remove the comment below to include it)
+# vendor/
+
+# Go workspace file
+go.work
+go.work.sum
+
+# env file
+.env
+
+# Editor/IDE
+# .idea/
+# .vscode/
+
+# Generated by Cargo
+# will have compiled files and executables
+debug
+target
+
+# These are backup files generated by rustfmt
+**/*.rs.bk
+
+# MSVC Windows builds of rustc generate these, which store debugging information
+*.pdb
+
+# Generated by cargo mutants
+# Contains mutation testing data
+**/mutants.out*/
+
+# RustRover
 #  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
 #  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
 #  and can be added to the global gitignore or merged into this file.  For a more nuclear
 #  option (not recommended) you can uncomment the following to ignore the entire idea folder.
 #.idea/
 
-# Ruff stuff:
-.ruff_cache/
+# Compiled class file
+*.class
 
-# PyPI configuration file
-.pypirc
+# Log file
+*.log
 
+# BlueJ files
+*.ctxt
+
+# Mobile Tools for Java (J2ME)
+.mtj.tmp/
+
+# Package Files #
+*.jar
+*.war
+*.nar
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
+hs_err_pid*
+replay_pid*
+
+# Windows thumbnail cache files
+Thumbs.db
+Thumbs.db:encryptable
+ehthumbs.db
+ehthumbs_vista.db
+
+# Dump file
+*.stackdump
+
+# Folder config file
+[Dd]esktop.ini
+
+# Recycle Bin used on file shares
+$RECYCLE.BIN/
+
+# Windows Installer files
+*.cab
+*.msi
+*.msix
+*.msm
+*.msp
+
+# Windows shortcuts
+*.lnk
+
+*~
+
+# temporary files which can be created if a process still has a handle open of a deleted file
+.fuse_hidden*
+
+# Metadata left by Dolphin file manager, which comes with KDE Plasma
+.directory
+
+# Linux trash folder which might appear on any partition or disk
+.Trash-*
+
+# .nfs files are created when an open file is removed but is still being accessed
+.nfs*
+
+# Log files created by default by the nohup command
+nohup.out
+
+# General
+.DS_Store
+__MACOSX/
+.AppleDouble
+.LSOverride
+Icon[]
+
+# Thumbnails
+._*
+
+# Files that might appear in the root of a volume
+.DocumentRevisions-V100
+.fseventsd
+.Spotlight-V100
+.TemporaryItems
+.Trashes
+.VolumeIcon.icns
+.com.apple.timemachine.donotpresent
+
+# Directories potentially created on remote AFP share
+.AppleDB
+.AppleDesktop
+Network Trash Folder
+Temporary Items
+.apdisk
+
+# Covers JetBrains IDEs: IntelliJ, GoLand, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
+# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
+
+# User-specific stuff
+.idea/**/workspace.xml
+.idea/**/tasks.xml
+.idea/**/usage.statistics.xml
+.idea/**/dictionaries
+.idea/**/shelf
+
+# AWS User-specific
+.idea/**/aws.xml
+
+# Generated files
+.idea/**/contentModel.xml
+
+# Sensitive or high-churn files
+.idea/**/dataSources/
+.idea/**/dataSources.ids
+.idea/**/dataSources.local.xml
+.idea/**/sqlDataSources.xml
+.idea/**/dynamic.xml
+.idea/**/uiDesigner.xml
+.idea/**/dbnavigator.xml
+
+# Gradle
+.idea/**/gradle.xml
+.idea/**/libraries
+
+# Gradle and Maven with auto-import
+# When using Gradle or Maven with auto-import, you should exclude module files,
+# since they will be recreated, and may cause churn.  Uncomment if using
+# auto-import.
+# .idea/artifacts
+# .idea/compiler.xml
+# .idea/jarRepositories.xml
+# .idea/modules.xml
+# .idea/*.iml
+# .idea/modules
+# *.iml
+# *.ipr
+
+# CMake
+cmake-build-*/
+
+# Mongo Explorer plugin
+.idea/**/mongoSettings.xml
+
+# File-based project format
+*.iws
+
+# IntelliJ
+out/
+
+# mpeltonen/sbt-idea plugin
+.idea_modules/
+
+# JIRA plugin
+atlassian-ide-plugin.xml
+
+# Cursive Clojure plugin
+.idea/replstate.xml
+
+# SonarLint plugin
+.idea/sonarlint/
+.idea/sonarlint.xml # see https://community.sonarsource.com/t/is-the-file-idea-idea-idea-sonarlint-xml-intended-to-be-under-source-control/121119
+
+# Crashlytics plugin (for Android Studio and IntelliJ)
+com_crashlytics_export_strings.xml
+crashlytics.properties
+crashlytics-build.properties
+fabric.properties
+
+# Editor-based HTTP Client
+.idea/httpRequests
+http-client.private.env.json
+
+# Android studio 3.1+ serialized cache file
+.idea/caches/build_file_checksums.ser
+
+# Apifox Helper cache
+.idea/.cache/.Apifox_Helper
+.idea/ApifoxUploaderProjectSetting.xml
+
+# Github Copilot persisted session migrations, see: https://github.com/microsoft/copilot-intellij-feedback/issues/712#issuecomment-3322062215
+.idea/**/copilot.data.migration.*.xml
+
+.vscode/*
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+!.vscode/*.code-snippets
+!*.code-workspace
+
+# Built Visual Studio Code Extensions
+*.vsix
+
+404: Not Found
\ No newline at end of file
diff --git a/CHANGELOG.md b/CHANGELOG.md
new file mode 100644
index 0000000..e69de29
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..e69de29
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..e69de29
diff --git a/LICENSE b/LICENSE
index b6aba87..e69de29 100644
--- a/LICENSE
+++ b/LICENSE
@@ -1,18 +0,0 @@
-MIT License
-
-Copyright (c) 2025 neuxdotdev
-
-Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
-associated documentation files (the "Software"), to deal in the Software without restriction, including 
-without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
-copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
-following conditions:
-
-The above copyright notice and this permission notice shall be included in all copies or substantial 
-portions of the Software.
-
-THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
-LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
-EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
-IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
-USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
index 1a634c6..e69de29 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +0,0 @@
-# snipets
-
-a very complete starterkit code project place
\ No newline at end of file
diff --git a/SECURITY.md b/SECURITY.md
new file mode 100644
index 0000000..e69de29
diff --git a/global-software-licenses.txt b/global-software-licenses.txt
new file mode 100644
index 0000000..e506d8f
--- /dev/null
+++ b/global-software-licenses.txt
@@ -0,0 +1,22 @@
+Apache License 2.0
+MIT License
+GNU General Public License v2.0 (GPL-2.0)
+GNU General Public License v3.0 (GPL-3.0)
+GNU Lesser General Public License v2.1 (LGPL-2.1)
+GNU Lesser General Public License v3.0 (LGPL-3.0)
+Mozilla Public License 2.0 (MPL-2.0)
+BSD 2-Clause "Simplified" License
+BSD 3-Clause "New" or "Revised" License
+Eclipse Public License 2.0 (EPL-2.0)
+Microsoft Public License (MS-PL)
+Microsoft Reciprocal License (MS-RL)
+Common Development and Distribution License (CDDL-1.0)
+Academic Free License (AFL-3.0)
+Artistic License 2.0
+Boost Software License 1.0 (BSL-1.0)
+Creative Commons Zero v1.0 Universal (CC0-1.0)
+Creative Commons Attribution 4.0 (CC BY 4.0)
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
+Unlicense
+WTFPL (Do What The F*** You Want To Public License)
+Zlib License
diff --git a/shared/configs/editorconfig b/shared/configs/editorconfig
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/eslint.config.mjs b/shared/configs/eslint.config.mjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/go.mod b/shared/configs/go.mod
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/prettier.config.cjs b/shared/configs/prettier.config.cjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/pyproject.toml b/shared/configs/pyproject.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/rustfmt.toml b/shared/configs/rustfmt.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tailwind.config.js b/shared/configs/tailwind.config.js
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tsconfig.json b/shared/configs/tsconfig.json
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/android.gitignore b/shared/gitignore/android.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ansible.gitignore b/shared/gitignore/ansible.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/astro.gitignore b/shared/gitignore/astro.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/blender.gitignore b/shared/gitignore/blender.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/bun.gitignore b/shared/gitignore/bun.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/c.gitignore b/shared/gitignore/c.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/conda.gitignore b/shared/gitignore/conda.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/cpp.gitignore b/shared/gitignore/cpp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/csharp.gitignore b/shared/gitignore/csharp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/deno.gitignore b/shared/gitignore/deno.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/docker.gitignore b/shared/gitignore/docker.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/dotnet.gitignore b/shared/gitignore/dotnet.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/eclipse.gitignore b/shared/gitignore/eclipse.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/emacs.gitignore b/shared/gitignore/emacs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/flutter.gitignore b/shared/gitignore/flutter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/go.gitignore b/shared/gitignore/go.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/godot.gitignore b/shared/gitignore/godot.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/gradle.gitignore b/shared/gitignore/gradle.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/helm.gitignore b/shared/gitignore/helm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/huggingface.gitignore b/shared/gitignore/huggingface.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/java.gitignore b/shared/gitignore/java.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jetbrains.gitignore b/shared/gitignore/jetbrains.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jupyter.gitignore b/shared/gitignore/jupyter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kotlin.gitignore b/shared/gitignore/kotlin.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kubernetes.gitignore b/shared/gitignore/kubernetes.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/laravel.gitignore b/shared/gitignore/laravel.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/linux.gitignore b/shared/gitignore/linux.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/macos.gitignore b/shared/gitignore/macos.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/maven.gitignore b/shared/gitignore/maven.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nextjs.gitignore b/shared/gitignore/nextjs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/node.gitignore b/shared/gitignore/node.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/npm.gitignore b/shared/gitignore/npm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nuxt.gitignore b/shared/gitignore/nuxt.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pdm.gitignore b/shared/gitignore/pdm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/php.gitignore b/shared/gitignore/php.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pnpm.gitignore b/shared/gitignore/pnpm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/poetry.gitignore b/shared/gitignore/poetry.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pulumi.gitignore b/shared/gitignore/pulumi.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/python.gitignore b/shared/gitignore/python.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pytorch.gitignore b/shared/gitignore/pytorch.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/react-native.gitignore b/shared/gitignore/react-native.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/remix.gitignore b/shared/gitignore/remix.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ruby.gitignore b/shared/gitignore/ruby.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/rust.gitignore b/shared/gitignore/rust.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/sublime.gitignore b/shared/gitignore/sublime.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/svelte.gitignore b/shared/gitignore/svelte.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/swift.gitignore b/shared/gitignore/swift.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/tensorflow.gitignore b/shared/gitignore/tensorflow.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/terraform.gitignore b/shared/gitignore/terraform.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unity.gitignore b/shared/gitignore/unity.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unreal.gitignore b/shared/gitignore/unreal.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/uv.gitignore b/shared/gitignore/uv.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vim.gitignore b/shared/gitignore/vim.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vite.gitignore b/shared/gitignore/vite.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vscode.gitignore b/shared/gitignore/vscode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/windows.gitignore b/shared/gitignore/windows.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/xcode.gitignore b/shared/gitignore/xcode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/yarn.gitignore b/shared/gitignore/yarn.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/licenses/AFL-3.0.txt b/shared/licenses/AFL-3.0.txt
new file mode 100644
index 0000000..3859cad
--- /dev/null
+++ b/shared/licenses/AFL-3.0.txt
@@ -0,0 +1 @@
+Academic Free License (AFL-3.0)
diff --git a/shared/licenses/Apache-2.0.txt b/shared/licenses/Apache-2.0.txt
new file mode 100644
index 0000000..3d74f22
--- /dev/null
+++ b/shared/licenses/Apache-2.0.txt
@@ -0,0 +1 @@
+Apache License 2.0
diff --git a/shared/licenses/Artistic-2.0.txt b/shared/licenses/Artistic-2.0.txt
new file mode 100644
index 0000000..59c43bf
--- /dev/null
+++ b/shared/licenses/Artistic-2.0.txt
@@ -0,0 +1 @@
+Artistic License 2.0
diff --git a/shared/licenses/BSD-2-Clause.txt b/shared/licenses/BSD-2-Clause.txt
new file mode 100644
index 0000000..217e836
--- /dev/null
+++ b/shared/licenses/BSD-2-Clause.txt
@@ -0,0 +1 @@
+BSD 2-Clause "Simplified" License
diff --git a/shared/licenses/BSD-3-Clause.txt b/shared/licenses/BSD-3-Clause.txt
new file mode 100644
index 0000000..a56cbf5
--- /dev/null
+++ b/shared/licenses/BSD-3-Clause.txt
@@ -0,0 +1 @@
+BSD 3-Clause "New" or "Revised" License
diff --git a/shared/licenses/BSL-1.0.txt b/shared/licenses/BSL-1.0.txt
new file mode 100644
index 0000000..ee9ca20
--- /dev/null
+++ b/shared/licenses/BSL-1.0.txt
@@ -0,0 +1 @@
+Boost Software License 1.0 (BSL-1.0)
diff --git a/shared/licenses/CC-BY-4.0.txt b/shared/licenses/CC-BY-4.0.txt
new file mode 100644
index 0000000..2ef5136
--- /dev/null
+++ b/shared/licenses/CC-BY-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution 4.0 (CC BY 4.0)
diff --git a/shared/licenses/CC-BY-SA-4.0.txt b/shared/licenses/CC-BY-SA-4.0.txt
new file mode 100644
index 0000000..5dac77e
--- /dev/null
+++ b/shared/licenses/CC-BY-SA-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
diff --git a/shared/licenses/CC0-1.0.txt b/shared/licenses/CC0-1.0.txt
new file mode 100644
index 0000000..5d2dd0b
--- /dev/null
+++ b/shared/licenses/CC0-1.0.txt
@@ -0,0 +1 @@
+Creative Commons Zero v1.0 Universal (CC0-1.0)
diff --git a/shared/licenses/CDDL-1.0.txt b/shared/licenses/CDDL-1.0.txt
new file mode 100644
index 0000000..c058571
--- /dev/null
+++ b/shared/licenses/CDDL-1.0.txt
@@ -0,0 +1 @@
+Common Development and Distribution License (CDDL-1.0)
diff --git a/shared/licenses/EPL-2.0.txt b/shared/licenses/EPL-2.0.txt
new file mode 100644
index 0000000..ea0e912
--- /dev/null
+++ b/shared/licenses/EPL-2.0.txt
@@ -0,0 +1 @@
+Eclipse Public License 2.0 (EPL-2.0)
diff --git a/shared/licenses/GPL-2.0.txt b/shared/licenses/GPL-2.0.txt
new file mode 100644
index 0000000..b43924d
--- /dev/null
+++ b/shared/licenses/GPL-2.0.txt
@@ -0,0 +1 @@
+GNU General Public License v2.0 (GPL-2.0)
diff --git a/shared/licenses/GPL-3.0.txt b/shared/licenses/GPL-3.0.txt
new file mode 100644
index 0000000..f1bbc76
--- /dev/null
+++ b/shared/licenses/GPL-3.0.txt
@@ -0,0 +1 @@
+GNU General Public License v3.0 (GPL-3.0)
diff --git a/shared/licenses/LGPL-2.1.txt b/shared/licenses/LGPL-2.1.txt
new file mode 100644
index 0000000..8c1827e
--- /dev/null
+++ b/shared/licenses/LGPL-2.1.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v2.1 (LGPL-2.1)
diff --git a/shared/licenses/LGPL-3.0.txt b/shared/licenses/LGPL-3.0.txt
new file mode 100644
index 0000000..a3e5621
--- /dev/null
+++ b/shared/licenses/LGPL-3.0.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v3.0 (LGPL-3.0)
diff --git a/shared/licenses/MIT.txt b/shared/licenses/MIT.txt
new file mode 100644
index 0000000..d1e1072
--- /dev/null
+++ b/shared/licenses/MIT.txt
@@ -0,0 +1 @@
+MIT License
diff --git a/shared/licenses/MPL-2.0.txt b/shared/licenses/MPL-2.0.txt
new file mode 100644
index 0000000..586ac3d
--- /dev/null
+++ b/shared/licenses/MPL-2.0.txt
@@ -0,0 +1 @@
+Mozilla Public License 2.0 (MPL-2.0)
diff --git a/shared/licenses/MS-PL.txt b/shared/licenses/MS-PL.txt
new file mode 100644
index 0000000..3056dfd
--- /dev/null
+++ b/shared/licenses/MS-PL.txt
@@ -0,0 +1 @@
+Microsoft Public License (MS-PL)
diff --git a/shared/licenses/MS-RL.txt b/shared/licenses/MS-RL.txt
new file mode 100644
index 0000000..81c61be
--- /dev/null
+++ b/shared/licenses/MS-RL.txt
@@ -0,0 +1 @@
+Microsoft Reciprocal License (MS-RL)
diff --git a/shared/licenses/Unlicense.txt b/shared/licenses/Unlicense.txt
new file mode 100644
index 0000000..4dcfb1e
--- /dev/null
+++ b/shared/licenses/Unlicense.txt
@@ -0,0 +1 @@
+Unlicense
diff --git a/shared/licenses/WTFPL.txt b/shared/licenses/WTFPL.txt
new file mode 100644
index 0000000..34aeeca
--- /dev/null
+++ b/shared/licenses/WTFPL.txt
@@ -0,0 +1 @@
+WTFPL (Do What The F*** You Want To Public License)
diff --git a/shared/licenses/Zlib.txt b/shared/licenses/Zlib.txt
new file mode 100644
index 0000000..0c2665d
--- /dev/null
+++ b/shared/licenses/Zlib.txt
@@ -0,0 +1 @@
+Zlib License
```

---

### Commit: 4cae2b8a8bf9fa044c649f31421330507469c483
Author: neuxdotdev
Date: 2025-11-17
Message: Initial commit

**Changed Files:**

**Diff:**
```diff
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..0372383
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1,314 @@
+# ---> Node
+# Logs
+logs
+*.log
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+lerna-debug.log*
+.pnpm-debug.log*
+
+# Diagnostic reports (https://nodejs.org/api/report.html)
+report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Directory for instrumented libs generated by jscoverage/JSCover
+lib-cov
+
+# Coverage directory used by tools like istanbul
+coverage
+*.lcov
+
+# nyc test coverage
+.nyc_output
+
+# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
+.grunt
+
+# Bower dependency directory (https://bower.io/)
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons (https://nodejs.org/api/addons.html)
+build/Release
+
+# Dependency directories
+node_modules/
+jspm_packages/
+
+# Snowpack dependency directory (https://snowpack.dev/)
+web_modules/
+
+# TypeScript cache
+*.tsbuildinfo
+
+# Optional npm cache directory
+.npm
+
+# Optional eslint cache
+.eslintcache
+
+# Optional stylelint cache
+.stylelintcache
+
+# Microbundle cache
+.rpt2_cache/
+.rts2_cache_cjs/
+.rts2_cache_es/
+.rts2_cache_umd/
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variable files
+.env
+.env.development.local
+.env.test.local
+.env.production.local
+.env.local
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+out
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+# Comment in the public line in if your project uses Gatsby and not Next.js
+# https://nextjs.org/blog/next-9-1#public-directory-support
+# public
+
+# vuepress build output
+.vuepress/dist
+
+# vuepress v2.x temp and cache directory
+.temp
+.cache
+
+# vitepress build output
+**/.vitepress/dist
+
+# vitepress cache directory
+**/.vitepress/cache
+
+# Docusaurus cache and generated files
+.docusaurus
+
+# Serverless directories
+.serverless/
+
+# FuseBox cache
+.fusebox/
+
+# DynamoDB Local files
+.dynamodb/
+
+# TernJS port file
+.tern-port
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# yarn v2
+.yarn/cache
+.yarn/unplugged
+.yarn/build-state.yml
+.yarn/install-state.gz
+.pnp.*
+
+# ---> Python
+# Byte-compiled / optimized / DLL files
+__pycache__/
+*.py[cod]
+*$py.class
+
+# C extensions
+*.so
+
+# Distribution / packaging
+.Python
+build/
+develop-eggs/
+dist/
+downloads/
+eggs/
+.eggs/
+lib/
+lib64/
+parts/
+sdist/
+var/
+wheels/
+share/python-wheels/
+*.egg-info/
+.installed.cfg
+*.egg
+MANIFEST
+
+# PyInstaller
+#  Usually these files are written by a python script from a template
+#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+*.manifest
+*.spec
+
+# Installer logs
+pip-log.txt
+pip-delete-this-directory.txt
+
+# Unit test / coverage reports
+htmlcov/
+.tox/
+.nox/
+.coverage
+.coverage.*
+.cache
+nosetests.xml
+coverage.xml
+*.cover
+*.py,cover
+.hypothesis/
+.pytest_cache/
+cover/
+
+# Translations
+*.mo
+*.pot
+
+# Django stuff:
+*.log
+local_settings.py
+db.sqlite3
+db.sqlite3-journal
+
+# Flask stuff:
+instance/
+.webassets-cache
+
+# Scrapy stuff:
+.scrapy
+
+# Sphinx documentation
+docs/_build/
+
+# PyBuilder
+.pybuilder/
+target/
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+#   For a library or package, you might want to ignore these files since the code is
+#   intended to run in multiple environments; otherwise, check them in:
+# .python-version
+
+# pipenv
+#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
+#   However, in case of collaboration, if having platform-specific dependencies or dependencies
+#   having no cross-platform support, pipenv may install dependencies that don't work, or not
+#   install all needed dependencies.
+#Pipfile.lock
+
+# UV
+#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#uv.lock
+
+# poetry
+#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
+#poetry.lock
+
+# pdm
+#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
+#pdm.lock
+#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
+#   in version control.
+#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
+.pdm.toml
+.pdm-python
+.pdm-build/
+
+# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
+__pypackages__/
+
+# Celery stuff
+celerybeat-schedule
+celerybeat.pid
+
+# SageMath parsed files
+*.sage.py
+
+# Environments
+.env
+.venv
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Spyder project settings
+.spyderproject
+.spyproject
+
+# Rope project settings
+.ropeproject
+
+# mkdocs documentation
+/site
+
+# mypy
+.mypy_cache/
+.dmypy.json
+dmypy.json
+
+# Pyre type checker
+.pyre/
+
+# pytype static type analyzer
+.pytype/
+
+# Cython debug symbols
+cython_debug/
+
+# PyCharm
+#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#  and can be added to the global gitignore or merged into this file.  For a more nuclear
+#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
+#.idea/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
diff --git a/LICENSE b/LICENSE
new file mode 100644
index 0000000..b6aba87
--- /dev/null
+++ b/LICENSE
@@ -0,0 +1,18 @@
+MIT License
+
+Copyright (c) 2025 neuxdotdev
+
+Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
+associated documentation files (the "Software"), to deal in the Software without restriction, including 
+without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
+copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
+following conditions:
+
+The above copyright notice and this permission notice shall be included in all copies or substantial 
+portions of the Software.
+
+THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
+LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
+EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
+IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
+USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..1a634c6
--- /dev/null
+++ b/README.md
@@ -0,0 +1,3 @@
+# snipets
+
+a very complete starterkit code project place
\ No newline at end of file
```

---

## Update: 2025-11-17


### Commit: f29ab71548e76dc633560957b02a45fee14088fb
Author: nzingx
Date: 2025-11-17
Message: docs(security): update security policy and clarify reporting requirements

**Changed Files:**
- SECURITY.md

**Diff:**
```diff
diff --git a/SECURITY.md b/SECURITY.md
index e69de29..6334c24 100644
--- a/SECURITY.md
+++ b/SECURITY.md
@@ -0,0 +1,106 @@
+# Security Policy
+
+This document describes the security policy and vulnerability reporting guidelines for the **neuxdotdev/snipets** project. Security is a priority for this project and all contributors are expected to handle potential vulnerabilities responsibly.
+
+---
+
+## Supported Versions
+
+Security updates will be provided for the following branches and versions:
+
+| Version/Branch | Status |
+|----------------|--------|
+| main           | Actively supported |
+| development    | Actively supported |
+| any archived or EOL branches | Not supported |
+
+Users are strongly encouraged to run the most recent stable version.
+
+---
+
+## Reporting a Vulnerability
+
+If you discover a security vulnerability, do not submit it publicly through issues or discussions.
+
+To report a vulnerability, contact:
+
+**Email:** `neuxdev1@gmail.com`
+
+When reporting, please include:
+
+- A clear description of the vulnerability
+- Steps to reproduce the issue
+- Potential impact and severity
+- Any relevant logs, screenshots, or proof of concept
+- Suggested remediation if available
+
+We will acknowledge receipt of the report and provide a status update within a reasonable timeframe.
+
+---
+
+## Disclosure Procedure
+
+The project follows a private and responsible disclosure process:
+
+1. Vulnerability is reported via the private security channel.
+2. The maintainers investigate and validate the report.
+3. A fix or mitigation is developed.
+4. A release is published that resolves the issue.
+5. A public disclosure may be published after users have had a reasonable chance to update.
+
+---
+
+## Security Expectations for Contributors
+
+Contributors must:
+
+- Avoid introducing insecure dependencies or code patterns.
+- Follow secure coding practices, including input validation and proper error handling.
+- Never commit secrets, tokens, passwords, or private API keys.
+- Immediately report any accidental credential leak.
+- Use private channels for discussions related to security issues.
+
+Pull requests introducing security-sensitive changes may require additional review.
+
+---
+
+## Handling Cryptographic Material
+
+If the project uses cryptography:
+
+- Only well-reviewed, widely accepted libraries should be used.
+- Custom, experimental, or home-grown cryptography is strictly prohibited.
+- Keys must never be stored within the repository.
+
+---
+
+## Security FAQ
+
+| Question | Answer |
+|---------|--------|
+| Can I report low-severity bugs? | Yes. All security concerns are welcome. |
+| Will researchers be acknowledged? | If requested and disclosure is responsible, yes. |
+| Are denial-of-service reports accepted? | Yes, if reproducible and verifiable. |
+| Can I test production systems? | No. Testing must be done within permitted scope only. |
+
+---
+
+## Legal Safe Harbor
+
+As long as security research is conducted:
+
+- In good faith
+- Within the described reporting process
+- Without privacy violations, data destruction, or service disruption
+
+The project will not pursue legal action for vulnerability discovery and responsible disclosure.
+
+---
+
+## Contact
+
+For any questions or clarifications about this Security Policy:
+
+`neuxdev1@gmail.com`
+
+Thank you for helping keep this project secure.
```

---

### Commit: 8cf92bcb4dd82977917daa4110fcdbd75f9e7f62
Author: nzingx
Date: 2025-11-17
Message: docs(contributing): improve documentation for pull requests, issues and review process

**Changed Files:**
- CONTRIBUTING.md

**Diff:**
```diff
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index e69de29..0f37118 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -0,0 +1,193 @@
+# Contributing Guidelines
+
+Thank you for your interest in contributing to this repository. Contributions are valuable and help improve the project for everyone. Please review the guidelines below before opening a pull request or issue.
+
+This document applies to the repository:
+
+`https://gitea.com/neuxdotdev/snipets`
+
+---
+
+## 1. Code of Conduct
+
+By participating in this project, contributors are expected to uphold respectful and constructive communication at all times. Harassment, discrimination, personal attacks, and unprofessional behavior are not tolerated.
+
+---
+
+## 2. Ways to Contribute
+
+You can contribute to this project in multiple ways:
+
+| Contribution Type | Description |
+|------------------|-------------|
+| Reporting Issues | Identify bugs, unexpected behavior, security concerns, or performance problems. |
+| Proposing Enhancements | Suggest improvements, new features, or refinements. |
+| Submitting Pull Requests | Fix bugs, add features, improve documentation, or maintain code structure. |
+| Improving Documentation | Enhance clarity, correctness, and completeness of project documentation. |
+
+---
+
+## 3. Issue Reporting Guidelines
+
+Before opening an issue, please:
+
+1. Search existing issues to avoid duplicates.
+2. Confirm that the issue is reproducible.
+3. Include enough technical detail for maintainers to understand the problem.
+
+Recommended issue format:
+
+```
+Title: Short descriptive summary
+
+## Description
+Clear explanation of the problem or suggestion.
+
+## Steps to Reproduce (if applicable)
+1. Step one
+2. Step two
+3. ...
+
+## Expected Behavior
+Explain the expected outcome.
+
+## Actual Behavior
+Explain what actually occurred.
+
+## Additional Information
+Logs, screenshots, environment details, references, etc.
+```
+
+---
+
+## 4. Pull Request Guidelines
+
+To help maintain code quality and review efficiency, follow these requirements:
+
+### 4.1 Requirements
+
+- One pull request must target one logical change.
+- Ensure code builds without errors.
+- Ensure no confidential or proprietary information is included.
+- Provide tests when applicable.
+- Update documentation when relevant.
+
+### 4.2 Commit Message Format
+
+Use clear, structured commit messages:
+
+```
+<type>(scope): short summary
+
+Optional body explaining what and why, not how.
+```
+
+Valid commit types include:
+
+| Type      | Purpose |
+|-----------|---------|
+| feat      | A new feature |
+| fix       | A bug fix |
+| docs      | Documentation changes only |
+| style     | Code style changes (no logic impact) |
+| refactor  | Code change that improves internal structure |
+| perf      | Performance improvement |
+| test      | Adding or modifying tests |
+| build     | Build system or dependency change |
+| ci        | Continuous integration update |
+| chore     | Maintenance tasks with no behavior impact |
+
+### 4.3 Pull Request Template
+
+```
+## Summary
+Brief description of the change.
+
+## Related Issue
+Link any related issue here.
+
+## Changes
+- Bullet list of changes
+
+## Tests
+Describe test coverage or explain why tests are unnecessary.
+
+## Additional Notes
+Any relevant context or technical considerations.
+```
+
+---
+
+## 5. Coding Standards
+
+Depending on snippet language, follow these standards:
+
+| Language | Standard / Format |
+|----------|------------------|
+| Python   | PEP 8 style guidelines |
+| JavaScript / TypeScript | ESLint recommended rules |
+| Go       | `gofmt` and idiomatic Go guidelines |
+| Shell    | POSIX compatible unless specified otherwise |
+| Markdown | Concise, consistent headings and code fences |
+
+General rules:
+
+- Write clear, maintainable, and well-documented code.
+- Favor self explanatory naming conventions.
+- Avoid unnecessary external dependencies.
+- Security must be considered in all contributions.
+
+---
+
+## 6. Directory and File Structure
+
+Snippet submissions must follow:
+
+```
+snipets/
+  <category>/
+    <name>.<ext>
+    README.md (optional, recommended)
+```
+
+Example categories:
+
+- `bash/`
+- `python/`
+- `devops/`
+- `docker/`
+- `regex/`
+- `sql/`
+
+---
+
+## 7. Licensing
+
+By contributing, you agree that your work will be released under the repository license. Ensure that you have the right to contribute the code or material.
+
+---
+
+## 8. Security Reporting
+
+Security vulnerabilities must not be submitted publicly through issues. Please report them responsibly to the project maintainer via private communication, if available.
+
+---
+
+## 9. Review Process
+
+Pull requests are reviewed with attention to:
+
+- Technical correctness
+- Security implications
+- Code clarity and structure
+- Consistency with project goals
+
+Approval may require updates or feedback responses before merging.
+
+---
+
+## 10. Contact
+
+If you have questions related to contributions, open a discussion or issue in the repository.
+
+Thank you for contributing and improving this project.
```

---

### Commit: faf4240dc76c98aa1780561dc8db55f437acd19d
Author: nzingx
Date: 2025-11-17
Message: docs(code-of-conduct): refine behavior guidelines and clarify enforcement terms

**Changed Files:**
- CODE_OF_CONDUCT.md

**Diff:**
```diff
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index e69de29..273f7d4 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -0,0 +1,125 @@
+# Code of Conduct
+
+This Code of Conduct applies to all community spaces, repositories, communication channels, and events associated with the **neuxdotdev** organization, both online and offline. By participating, you agree to uphold these standards to create a professional, inclusive, and harassment-free environment for all contributors and community members.
+
+---
+
+## 1. Our Pledge
+
+We pledge to make participation in our project and community a welcoming and respectful experience for everyone. We are committed to providing an environment free from harassment and discrimination regardless of:
+
+- Age
+- Body size or physical appearance
+- Disability or medical conditions
+- Ethnicity, nationality, or cultural background
+- Gender identity or expression
+- Level of experience or education
+- Race or caste
+- Religion or belief system
+- Sexual identity or orientation
+
+We also pledge to act and interact in ways that contribute to a safe, open, and collaborative environment.
+
+---
+
+## 2. Our Standards
+
+### 2.1 Examples of positive behavior
+
+Behavior that encourages a healthy and constructive environment includes:
+
+- Using inclusive, clear, and respectful language
+- Demonstrating empathy, understanding, and patience
+- Acknowledging differing viewpoints and experiences
+- Accepting constructive feedback gracefully
+- Focusing on solving problems instead of assigning blame
+- Respecting people's privacy and personal boundaries
+- Referring to individuals by their appropriate or requested pronouns, and using neutral pronouns when uncertain
+
+### 2.2 Examples of unacceptable behavior
+
+Unacceptable behavior includes, but is not limited to:
+
+- Harassment, insults, or derogatory comments
+- Public or private trolling, intimidation, or personal attacks
+- Deliberate misgendering or use of inappropriate pronouns
+- Displaying or sharing sexual, violent, or disturbing content
+- Unwelcome sexual attention or advances
+- Publishing private or identifying information without explicit consent
+- Persistent communication after being asked to stop
+- Bigotry, slurs, discrimination or encouragement of unequal treatment
+- Drug promotion and illegal activity
+- Political or ideological provocations that lead to hostility
+- Attacks on personal interests, tastes, or professional background
+- Any behavior that could reasonably be considered inappropriate in a professional or community setting
+
+---
+
+## 3. Enforcement Responsibilities
+
+Project maintainers and community administrators are responsible for:
+
+- Clarifying and enforcing standards of acceptable behavior
+- Taking fair and consistent action in response to violations
+- Providing channels to report misconduct safely
+- Protecting reporters and affected members from retaliation
+
+Maintainers have the right to take corrective actions including warnings, content removal, temporary or permanent bans, and any other response deemed necessary.
+
+---
+
+## 4. Reporting Violations
+
+If you experience or witness behavior that violates this Code of Conduct, you may report it via:
+
+Email: `neuxdev1@gmail.com`
+
+Reports should include, when possible:
+
+- Description of the behavior
+- Names or identities of individuals involved
+- Date, time, and context
+- Any supporting evidence such as screenshots, logs, or links
+
+All reports will be reviewed and handled confidentially. Information will only be shared when required to conduct an appropriate investigation or as requested by the reporter.
+
+---
+
+## 5. Enforcement Guidelines
+
+When violations occur, the following actions may be taken depending on severity and context:
+
+| Level | Consequence |
+|-------|-------------|
+| 1. Warning | A private, written notification explaining the violation and expectations for future behavior. |
+| 2. Temporary Restrictions | Limited interaction or temporary ban from community spaces. |
+| 3. Account Suspension | Removal from project spaces for a defined period of time. |
+| 4. Permanent Ban | Full removal from community participation and related platforms. |
+
+---
+
+## 6. Scope
+
+This Code of Conduct applies to all members, contributors, maintainers, and any individuals interacting within project spaces including:
+
+- Repositories and commits
+- Issues, pull requests, and discussion threads
+- Community calls and meetings
+- Official project chatrooms and communication channels
+- Public and private events representing the community
+
+---
+
+## 7. Attribution
+
+This Code of Conduct was adapted from multiple open community standards, including resources from dev.to, Contributor Covenant, and other public documentation.
+
+---
+
+## 8. Contact
+
+For questions related to this Code of Conduct, please use the same reporting contact:
+
+`neuxdev1@gmail.com`
+
+Thank you for helping maintain a respectful and collaborative community.
```

---

### Commit: f6b96170b79b1bf7c410ae3cc4eca3b11d3ba9dc
Author: nzingx
Date: 2025-11-17
Message: delete temp files

**Changed Files:**
- global-software-licenses.txt

**Diff:**
```diff
diff --git a/global-software-licenses.txt b/global-software-licenses.txt
deleted file mode 100644
index e506d8f..0000000
--- a/global-software-licenses.txt
+++ /dev/null
@@ -1,22 +0,0 @@
-Apache License 2.0
-MIT License
-GNU General Public License v2.0 (GPL-2.0)
-GNU General Public License v3.0 (GPL-3.0)
-GNU Lesser General Public License v2.1 (LGPL-2.1)
-GNU Lesser General Public License v3.0 (LGPL-3.0)
-Mozilla Public License 2.0 (MPL-2.0)
-BSD 2-Clause "Simplified" License
-BSD 3-Clause "New" or "Revised" License
-Eclipse Public License 2.0 (EPL-2.0)
-Microsoft Public License (MS-PL)
-Microsoft Reciprocal License (MS-RL)
-Common Development and Distribution License (CDDL-1.0)
-Academic Free License (AFL-3.0)
-Artistic License 2.0
-Boost Software License 1.0 (BSL-1.0)
-Creative Commons Zero v1.0 Universal (CC0-1.0)
-Creative Commons Attribution 4.0 (CC BY 4.0)
-Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
-Unlicense
-WTFPL (Do What The F*** You Want To Public License)
-Zlib License
```

---

### Commit: d3a380c0ca445b5f61200a2f3cbea8d7c397a92f
Author: nzingx
Date: 2025-11-17
Message: chore(config): edit .gitignore

**Changed Files:**
- .gitignore

**Diff:**
```diff
diff --git a/.gitignore b/.gitignore
index aec544e..51c12d9 100644
--- a/.gitignore
+++ b/.gitignore
@@ -5,7 +5,7 @@ npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
 lerna-debug.log*
-
+scripts/*
 # Diagnostic reports (https://nodejs.org/api/report.html)
 report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
 
@@ -484,7 +484,8 @@ nohup.out
 __MACOSX/
 .AppleDouble
 .LSOverride
-Icon[]
+Icon[
+]
 
 # Thumbnails
 ._*
```

---

### Commit: 5f306f59c4122666aba655872e59077fab9c34c0
Author: nzingx
Date: 2025-11-17
Message: docs: edit README.md

**Changed Files:**
- README.md

**Diff:**
```diff
diff --git a/README.md b/README.md
index e69de29..aac591c 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1,147 @@
+# snipets
+
+This repository provides a comprehensive and maintainable collection of `.gitignore` files, open source software licenses, and project boilerplate templates. It is designed to support software development projects across multiple programming languages, ecosystems, operating systems, and development workflows.
+
+The goal of this project is to offer a unified reference that enables developers to initialize repositories quickly and consistently, while avoiding accidental commits of temporary files, credentials, build artifacts, system files, or other non-versioned assets.
+
+---
+
+## 1. Repository Structure
+
+The repository is organized into several key directories:
+
+```
+
+.gitignore                    Base .gitignore for the repository
+global-software-licenses.txt  Aggregated list of recognized licenses
+licenses/                     SPDX-aligned license texts
+shared/configs/               Editor and formatter configurations
+shared/gitignore/             Collection of categorized .gitignore templates
+templates/                    Project scaffolding and boilerplate templates
+.github/, .gitea/             Issue templates, PR templates, CI configurations
+
+````
+
+### 1.1 Gitignore Collections
+
+The directory `shared/gitignore/` includes `.gitignore` templates for:
+
+- Languages: C, C++, C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and others
+- Web and frontend: Astro, Next.js, Nuxt, Remix, Svelte, Vite, React, Node, Bun, Deno
+- Mobile and game engines: Android, iOS/Xcode, React Native, Flutter, Unity, Unreal, Godot
+- DevOps and infrastructure: Docker, Kubernetes, Helm, Ansible, Terraform, Pulumi
+- AI/ML and scientific computing: Conda, Poetry, HuggingFace, TensorFlow, PyTorch, Jupyter
+- Operating systems: Windows, macOS, Linux
+- Editors and IDEs: VSCode, JetBrains, Vim, Emacs, Sublime, Eclipse
+- Package managers: npm, yarn, pnpm, pip, pdm, uv
+
+### 1.2 Software Licenses
+
+The directory `shared/licenses/` contains SPDX-compliant license texts, for example:
+
+- Apache License 2.0
+- MIT License
+- GNU GPL 2.0 and 3.0
+- GNU LGPL 2.1 and 3.0
+- BSD 2-Clause and BSD 3-Clause
+- MPL 2.0
+- EPL 2.0
+- CDDL 1.0
+- BSL 1.0
+- Academic Free License 3.0
+- Unlicense
+- WTFPL
+- Zlib
+- Creative Commons: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0
+
+Each license file follows naming conventions consistent with SPDX identifiers.
+
+### 1.3 Project Templates
+
+Located in `templates/`, covering:
+
+- Backend: FastAPI, Node Express, Go Fiber, Bun, Rust Axum
+- CLI: Go Cobra, Node Commander, Python Typer
+- DevOps: Docker, Kubernetes, Terraform, Ansible
+- Documentation: Sphinx, MkDocs, Docusaurus
+- Mobile: Flutter, React Native
+- Web: Astro, Vanilla JS, Vite/React, SvelteKit, Next.js
+
+---
+
+## 2. Usage Instructions
+
+### 2.1 Initialize a .gitignore from templates
+
+Example for Python and VSCode:
+
+```bash
+cat shared/gitignore/python.gitignore shared/gitignore/vscode.gitignore > .gitignore
+````
+
+### 2.2 Selecting a software license
+
+Copy any license from `shared/licenses/` into the repository root as `LICENSE`:
+
+```bash
+cp shared/licenses/MIT.txt LICENSE
+```
+
+### 2.3 Project Template Initialization
+
+Example using FastAPI backend:
+
+```bash
+cp -r templates/backend/python-fastapi/* .
+```
+
+---
+
+## 3. Compatibility and Standards
+
+This project aligns with:
+
+* SPDX license identifiers: [https://spdx.org/licenses/](https://spdx.org/licenses/)
+* Gitignore template conventions used by leading version control hosting platforms
+* POSIX-compatible text formatting
+* UTF-8 encoding for full language compatibility
+
+---
+
+## 4. Contribution Guidelines
+
+Contributions are welcome. Areas where contributions are valuable include:
+
+* New `.gitignore` templates
+* Additional SPDX-licensed texts
+* Improvements to project scaffolding templates
+* Automated generation tools and scripts
+* Documentation enhancements
+
+Please review the following documents before contributing:
+
+* `CONTRIBUTING.md`
+* `CODE_OF_CONDUCT.md`
+* `SECURITY.md`
+
+---
+
+## 5. Security Policy
+
+Security vulnerabilities should not be reported via public issues. Follow the security disclosure process described in:
+
+```
+SECURITY.md
+```
+
+---
+
+## 6. License
+
+This repository is distributed under the MIT License. Individual license files included in this repository retain their original terms, authorship, and compatibility requirements.
+
+---
+
+## 7. Acknowledgments
+
+This project references open standards and publicly available information from long-standing open source communities, legal organizations, and contributors who have advanced open licensing and software reliability practices.
\ No newline at end of file
```

---

### Commit: 2dd7dd26eac0813b82109f02993e765606807470
Author: nzingx
Date: 2025-11-17
Message: feat: add some templates

**Changed Files:**
- .gitea/FUNDING.yml
- .gitea/ISSUE_TEMPLATE/bug_report.md
- .gitea/ISSUE_TEMPLATE/feature_request.md
- .gitea/ISSUE_TEMPLATE/improvement_suggestion.md
- .gitea/PULL_REQUEST_TEMPLATE.md
- .gitea/workflows/build.yml
- .gitea/workflows/lint.yml
- .gitea/workflows/test.yml
- .github/FUNDING.yml
- .github/ISSUE_TEMPLATE/bug_report.md
- .github/ISSUE_TEMPLATE/feature_request.md
- .github/ISSUE_TEMPLATE/improvement_suggestion.md
- .github/PULL_REQUEST_TEMPLATE.md
- .github/workflows/build.yml
- .github/workflows/lint.yml
- .github/workflows/test.yml
- .gitignore
- CHANGELOG.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- LICENSE
- README.md
- SECURITY.md
- global-software-licenses.txt
- shared/configs/editorconfig
- shared/configs/eslint.config.mjs
- shared/configs/go.mod
- shared/configs/prettier.config.cjs
- shared/configs/pyproject.toml
- shared/configs/rustfmt.toml
- shared/configs/tailwind.config.js
- shared/configs/tsconfig.json
- shared/gitignore/android.gitignore
- shared/gitignore/ansible.gitignore
- shared/gitignore/astro.gitignore
- shared/gitignore/blender.gitignore
- shared/gitignore/bun.gitignore
- shared/gitignore/c.gitignore
- shared/gitignore/conda.gitignore
- shared/gitignore/cpp.gitignore
- shared/gitignore/csharp.gitignore
- shared/gitignore/deno.gitignore
- shared/gitignore/docker.gitignore
- shared/gitignore/dotnet.gitignore
- shared/gitignore/eclipse.gitignore
- shared/gitignore/emacs.gitignore
- shared/gitignore/flutter.gitignore
- shared/gitignore/go.gitignore
- shared/gitignore/godot.gitignore
- shared/gitignore/gradle.gitignore
- shared/gitignore/helm.gitignore
- shared/gitignore/huggingface.gitignore
- shared/gitignore/java.gitignore
- shared/gitignore/jetbrains.gitignore
- shared/gitignore/jupyter.gitignore
- shared/gitignore/kotlin.gitignore
- shared/gitignore/kubernetes.gitignore
- shared/gitignore/laravel.gitignore
- shared/gitignore/linux.gitignore
- shared/gitignore/macos.gitignore
- shared/gitignore/maven.gitignore
- shared/gitignore/nextjs.gitignore
- shared/gitignore/node.gitignore
- shared/gitignore/npm.gitignore
- shared/gitignore/nuxt.gitignore
- shared/gitignore/pdm.gitignore
- shared/gitignore/php.gitignore
- shared/gitignore/pnpm.gitignore
- shared/gitignore/poetry.gitignore
- shared/gitignore/pulumi.gitignore
- shared/gitignore/python.gitignore
- shared/gitignore/pytorch.gitignore
- shared/gitignore/react-native.gitignore
- shared/gitignore/remix.gitignore
- shared/gitignore/ruby.gitignore
- shared/gitignore/rust.gitignore
- shared/gitignore/sublime.gitignore
- shared/gitignore/svelte.gitignore
- shared/gitignore/swift.gitignore
- shared/gitignore/tensorflow.gitignore
- shared/gitignore/terraform.gitignore
- shared/gitignore/unity.gitignore
- shared/gitignore/unreal.gitignore
- shared/gitignore/uv.gitignore
- shared/gitignore/vim.gitignore
- shared/gitignore/vite.gitignore
- shared/gitignore/vscode.gitignore
- shared/gitignore/windows.gitignore
- shared/gitignore/xcode.gitignore
- shared/gitignore/yarn.gitignore
- shared/licenses/AFL-3.0.txt
- shared/licenses/Apache-2.0.txt
- shared/licenses/Artistic-2.0.txt
- shared/licenses/BSD-2-Clause.txt
- shared/licenses/BSD-3-Clause.txt
- shared/licenses/BSL-1.0.txt
- shared/licenses/CC-BY-4.0.txt
- shared/licenses/CC-BY-SA-4.0.txt
- shared/licenses/CC0-1.0.txt
- shared/licenses/CDDL-1.0.txt
- shared/licenses/EPL-2.0.txt
- shared/licenses/GPL-2.0.txt
- shared/licenses/GPL-3.0.txt
- shared/licenses/LGPL-2.1.txt
- shared/licenses/LGPL-3.0.txt
- shared/licenses/MIT.txt
- shared/licenses/MPL-2.0.txt
- shared/licenses/MS-PL.txt
- shared/licenses/MS-RL.txt
- shared/licenses/Unlicense.txt
- shared/licenses/WTFPL.txt
- shared/licenses/Zlib.txt

**Diff:**
```diff
diff --git a/.gitea/FUNDING.yml b/.gitea/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/bug_report.md b/.gitea/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/feature_request.md b/.gitea/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md b/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/PULL_REQUEST_TEMPLATE.md b/.gitea/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/build.yml b/.gitea/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/lint.yml b/.gitea/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/test.yml b/.gitea/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/bug_report.md b/.github/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/feature_request.md b/.github/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/improvement_suggestion.md b/.github/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/PULL_REQUEST_TEMPLATE.md b/.github/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/build.yml b/.github/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/lint.yml b/.github/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/test.yml b/.github/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitignore b/.gitignore
index 0372383..aec544e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,4 +1,3 @@
-# ---> Node
 # Logs
 logs
 *.log
@@ -6,7 +5,6 @@ npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
 lerna-debug.log*
-.pnpm-debug.log*
 
 # Diagnostic reports (https://nodejs.org/api/report.html)
 report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
@@ -58,12 +56,6 @@ web_modules/
 # Optional stylelint cache
 .stylelintcache
 
-# Microbundle cache
-.rpt2_cache/
-.rts2_cache_cjs/
-.rts2_cache_es/
-.rts2_cache_umd/
-
 # Optional REPL history
 .node_repl_history
 
@@ -75,10 +67,8 @@ web_modules/
 
 # dotenv environment variable files
 .env
-.env.development.local
-.env.test.local
-.env.production.local
-.env.local
+.env.*
+!.env.example
 
 # parcel-bundler cache (https://parceljs.org/)
 .cache
@@ -91,6 +81,7 @@ out
 # Nuxt.js build / generate output
 .nuxt
 dist
+.output
 
 # Gatsby files
 .cache/
@@ -105,6 +96,9 @@ dist
 .temp
 .cache
 
+# Sveltekit cache directory
+.svelte-kit/
+
 # vitepress build output
 **/.vitepress/dist
 
@@ -123,23 +117,32 @@ dist
 # DynamoDB Local files
 .dynamodb/
 
+# Firebase cache directory
+.firebase/
+
 # TernJS port file
 .tern-port
 
 # Stores VSCode versions used for testing VSCode extensions
 .vscode-test
 
-# yarn v2
-.yarn/cache
-.yarn/unplugged
-.yarn/build-state.yml
-.yarn/install-state.gz
+# yarn v3
 .pnp.*
+.yarn/*
+!.yarn/patches
+!.yarn/plugins
+!.yarn/releases
+!.yarn/sdks
+!.yarn/versions
+
+# Vite files
+vite.config.js.timestamp-*
+vite.config.ts.timestamp-*
+.vite/
 
-# ---> Python
 # Byte-compiled / optimized / DLL files
 __pycache__/
-*.py[cod]
+*.py[codz]
 *$py.class
 
 # C extensions
@@ -166,8 +169,8 @@ share/python-wheels/
 MANIFEST
 
 # PyInstaller
-#  Usually these files are written by a python script from a template
-#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+#   Usually these files are written by a python script from a template
+#   before PyInstaller builds the exe, so as to inject date/other infos into it.
 *.manifest
 *.spec
 
@@ -185,7 +188,7 @@ htmlcov/
 nosetests.xml
 coverage.xml
 *.cover
-*.py,cover
+*.py.cover
 .hypothesis/
 .pytest_cache/
 cover/
@@ -231,31 +234,38 @@ ipython_config.py
 #   However, in case of collaboration, if having platform-specific dependencies or dependencies
 #   having no cross-platform support, pipenv may install dependencies that don't work, or not
 #   install all needed dependencies.
-#Pipfile.lock
+# Pipfile.lock
 
 # UV
 #   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
-#uv.lock
+# uv.lock
 
 # poetry
 #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
 #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
-#poetry.lock
+# poetry.lock
+# poetry.toml
 
 # pdm
 #   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
-#pdm.lock
-#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
-#   in version control.
-#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
-.pdm.toml
+#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
+#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
+# pdm.lock
+# pdm.toml
 .pdm-python
 .pdm-build/
 
+# pixi
+#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
+# pixi.lock
+#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
+#   in the .venv directory. It is recommended not to include this directory in version control.
+.pixi
+
 # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
 __pypackages__/
 
@@ -263,11 +273,25 @@ __pypackages__/
 celerybeat-schedule
 celerybeat.pid
 
+# Redis
+*.rdb
+*.aof
+*.pid
+
+# RabbitMQ
+mnesia/
+rabbitmq/
+rabbitmq-data/
+
+# ActiveMQ
+activemq-data/
+
 # SageMath parsed files
 *.sage.py
 
 # Environments
 .env
+.envrc
 .venv
 env/
 venv/
@@ -300,15 +324,283 @@ dmypy.json
 cython_debug/
 
 # PyCharm
+#   JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#   be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#   and can be added to the global gitignore or merged into this file.  For a more nuclear
+#   option (not recommended) you can uncomment the following to ignore the entire idea folder.
+# .idea/
+
+# Abstra
+#   Abstra is an AI-powered process automation framework.
+#   Ignore directories containing user credentials, local state, and settings.
+#   Learn more at https://abstra.io/docs
+.abstra/
+
+# Visual Studio Code
+#   Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore 
+#   that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
+#   and can be added to the global gitignore or merged into this file. However, if you prefer, 
+#   you could uncomment the following to ignore the entire vscode folder
+# .vscode/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
+# Marimo
+marimo/_static/
+marimo/_lsp/
+__marimo__/
+
+# Streamlit
+.streamlit/secrets.toml
+
+# If you prefer the allow list template instead of the deny list, see community template:
+# https://github.com/github/gitignore/blob/main/community/Golang/Go.AllowList.gitignore
+#
+# Binaries for programs and plugins
+*.exe
+*.exe~
+*.dll
+*.so
+*.dylib
+
+# Test binary, built with `go test -c`
+*.test
+
+# Code coverage profiles and other test artifacts
+*.out
+coverage.*
+*.coverprofile
+profile.cov
+
+# Dependency directories (remove the comment below to include it)
+# vendor/
+
+# Go workspace file
+go.work
+go.work.sum
+
+# env file
+.env
+
+# Editor/IDE
+# .idea/
+# .vscode/
+
+# Generated by Cargo
+# will have compiled files and executables
+debug
+target
+
+# These are backup files generated by rustfmt
+**/*.rs.bk
+
+# MSVC Windows builds of rustc generate these, which store debugging information
+*.pdb
+
+# Generated by cargo mutants
+# Contains mutation testing data
+**/mutants.out*/
+
+# RustRover
 #  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
 #  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
 #  and can be added to the global gitignore or merged into this file.  For a more nuclear
 #  option (not recommended) you can uncomment the following to ignore the entire idea folder.
 #.idea/
 
-# Ruff stuff:
-.ruff_cache/
+# Compiled class file
+*.class
 
-# PyPI configuration file
-.pypirc
+# Log file
+*.log
 
+# BlueJ files
+*.ctxt
+
+# Mobile Tools for Java (J2ME)
+.mtj.tmp/
+
+# Package Files #
+*.jar
+*.war
+*.nar
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
+hs_err_pid*
+replay_pid*
+
+# Windows thumbnail cache files
+Thumbs.db
+Thumbs.db:encryptable
+ehthumbs.db
+ehthumbs_vista.db
+
+# Dump file
+*.stackdump
+
+# Folder config file
+[Dd]esktop.ini
+
+# Recycle Bin used on file shares
+$RECYCLE.BIN/
+
+# Windows Installer files
+*.cab
+*.msi
+*.msix
+*.msm
+*.msp
+
+# Windows shortcuts
+*.lnk
+
+*~
+
+# temporary files which can be created if a process still has a handle open of a deleted file
+.fuse_hidden*
+
+# Metadata left by Dolphin file manager, which comes with KDE Plasma
+.directory
+
+# Linux trash folder which might appear on any partition or disk
+.Trash-*
+
+# .nfs files are created when an open file is removed but is still being accessed
+.nfs*
+
+# Log files created by default by the nohup command
+nohup.out
+
+# General
+.DS_Store
+__MACOSX/
+.AppleDouble
+.LSOverride
+Icon[]
+
+# Thumbnails
+._*
+
+# Files that might appear in the root of a volume
+.DocumentRevisions-V100
+.fseventsd
+.Spotlight-V100
+.TemporaryItems
+.Trashes
+.VolumeIcon.icns
+.com.apple.timemachine.donotpresent
+
+# Directories potentially created on remote AFP share
+.AppleDB
+.AppleDesktop
+Network Trash Folder
+Temporary Items
+.apdisk
+
+# Covers JetBrains IDEs: IntelliJ, GoLand, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
+# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
+
+# User-specific stuff
+.idea/**/workspace.xml
+.idea/**/tasks.xml
+.idea/**/usage.statistics.xml
+.idea/**/dictionaries
+.idea/**/shelf
+
+# AWS User-specific
+.idea/**/aws.xml
+
+# Generated files
+.idea/**/contentModel.xml
+
+# Sensitive or high-churn files
+.idea/**/dataSources/
+.idea/**/dataSources.ids
+.idea/**/dataSources.local.xml
+.idea/**/sqlDataSources.xml
+.idea/**/dynamic.xml
+.idea/**/uiDesigner.xml
+.idea/**/dbnavigator.xml
+
+# Gradle
+.idea/**/gradle.xml
+.idea/**/libraries
+
+# Gradle and Maven with auto-import
+# When using Gradle or Maven with auto-import, you should exclude module files,
+# since they will be recreated, and may cause churn.  Uncomment if using
+# auto-import.
+# .idea/artifacts
+# .idea/compiler.xml
+# .idea/jarRepositories.xml
+# .idea/modules.xml
+# .idea/*.iml
+# .idea/modules
+# *.iml
+# *.ipr
+
+# CMake
+cmake-build-*/
+
+# Mongo Explorer plugin
+.idea/**/mongoSettings.xml
+
+# File-based project format
+*.iws
+
+# IntelliJ
+out/
+
+# mpeltonen/sbt-idea plugin
+.idea_modules/
+
+# JIRA plugin
+atlassian-ide-plugin.xml
+
+# Cursive Clojure plugin
+.idea/replstate.xml
+
+# SonarLint plugin
+.idea/sonarlint/
+.idea/sonarlint.xml # see https://community.sonarsource.com/t/is-the-file-idea-idea-idea-sonarlint-xml-intended-to-be-under-source-control/121119
+
+# Crashlytics plugin (for Android Studio and IntelliJ)
+com_crashlytics_export_strings.xml
+crashlytics.properties
+crashlytics-build.properties
+fabric.properties
+
+# Editor-based HTTP Client
+.idea/httpRequests
+http-client.private.env.json
+
+# Android studio 3.1+ serialized cache file
+.idea/caches/build_file_checksums.ser
+
+# Apifox Helper cache
+.idea/.cache/.Apifox_Helper
+.idea/ApifoxUploaderProjectSetting.xml
+
+# Github Copilot persisted session migrations, see: https://github.com/microsoft/copilot-intellij-feedback/issues/712#issuecomment-3322062215
+.idea/**/copilot.data.migration.*.xml
+
+.vscode/*
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+!.vscode/*.code-snippets
+!*.code-workspace
+
+# Built Visual Studio Code Extensions
+*.vsix
+
+404: Not Found
\ No newline at end of file
diff --git a/CHANGELOG.md b/CHANGELOG.md
new file mode 100644
index 0000000..e69de29
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..e69de29
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..e69de29
diff --git a/LICENSE b/LICENSE
index b6aba87..e69de29 100644
--- a/LICENSE
+++ b/LICENSE
@@ -1,18 +0,0 @@
-MIT License
-
-Copyright (c) 2025 neuxdotdev
-
-Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
-associated documentation files (the "Software"), to deal in the Software without restriction, including 
-without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
-copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
-following conditions:
-
-The above copyright notice and this permission notice shall be included in all copies or substantial 
-portions of the Software.
-
-THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
-LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
-EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
-IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
-USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
index 1a634c6..e69de29 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +0,0 @@
-# snipets
-
-a very complete starterkit code project place
\ No newline at end of file
diff --git a/SECURITY.md b/SECURITY.md
new file mode 100644
index 0000000..e69de29
diff --git a/global-software-licenses.txt b/global-software-licenses.txt
new file mode 100644
index 0000000..e506d8f
--- /dev/null
+++ b/global-software-licenses.txt
@@ -0,0 +1,22 @@
+Apache License 2.0
+MIT License
+GNU General Public License v2.0 (GPL-2.0)
+GNU General Public License v3.0 (GPL-3.0)
+GNU Lesser General Public License v2.1 (LGPL-2.1)
+GNU Lesser General Public License v3.0 (LGPL-3.0)
+Mozilla Public License 2.0 (MPL-2.0)
+BSD 2-Clause "Simplified" License
+BSD 3-Clause "New" or "Revised" License
+Eclipse Public License 2.0 (EPL-2.0)
+Microsoft Public License (MS-PL)
+Microsoft Reciprocal License (MS-RL)
+Common Development and Distribution License (CDDL-1.0)
+Academic Free License (AFL-3.0)
+Artistic License 2.0
+Boost Software License 1.0 (BSL-1.0)
+Creative Commons Zero v1.0 Universal (CC0-1.0)
+Creative Commons Attribution 4.0 (CC BY 4.0)
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
+Unlicense
+WTFPL (Do What The F*** You Want To Public License)
+Zlib License
diff --git a/shared/configs/editorconfig b/shared/configs/editorconfig
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/eslint.config.mjs b/shared/configs/eslint.config.mjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/go.mod b/shared/configs/go.mod
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/prettier.config.cjs b/shared/configs/prettier.config.cjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/pyproject.toml b/shared/configs/pyproject.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/rustfmt.toml b/shared/configs/rustfmt.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tailwind.config.js b/shared/configs/tailwind.config.js
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tsconfig.json b/shared/configs/tsconfig.json
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/android.gitignore b/shared/gitignore/android.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ansible.gitignore b/shared/gitignore/ansible.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/astro.gitignore b/shared/gitignore/astro.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/blender.gitignore b/shared/gitignore/blender.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/bun.gitignore b/shared/gitignore/bun.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/c.gitignore b/shared/gitignore/c.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/conda.gitignore b/shared/gitignore/conda.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/cpp.gitignore b/shared/gitignore/cpp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/csharp.gitignore b/shared/gitignore/csharp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/deno.gitignore b/shared/gitignore/deno.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/docker.gitignore b/shared/gitignore/docker.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/dotnet.gitignore b/shared/gitignore/dotnet.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/eclipse.gitignore b/shared/gitignore/eclipse.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/emacs.gitignore b/shared/gitignore/emacs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/flutter.gitignore b/shared/gitignore/flutter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/go.gitignore b/shared/gitignore/go.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/godot.gitignore b/shared/gitignore/godot.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/gradle.gitignore b/shared/gitignore/gradle.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/helm.gitignore b/shared/gitignore/helm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/huggingface.gitignore b/shared/gitignore/huggingface.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/java.gitignore b/shared/gitignore/java.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jetbrains.gitignore b/shared/gitignore/jetbrains.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jupyter.gitignore b/shared/gitignore/jupyter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kotlin.gitignore b/shared/gitignore/kotlin.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kubernetes.gitignore b/shared/gitignore/kubernetes.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/laravel.gitignore b/shared/gitignore/laravel.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/linux.gitignore b/shared/gitignore/linux.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/macos.gitignore b/shared/gitignore/macos.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/maven.gitignore b/shared/gitignore/maven.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nextjs.gitignore b/shared/gitignore/nextjs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/node.gitignore b/shared/gitignore/node.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/npm.gitignore b/shared/gitignore/npm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nuxt.gitignore b/shared/gitignore/nuxt.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pdm.gitignore b/shared/gitignore/pdm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/php.gitignore b/shared/gitignore/php.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pnpm.gitignore b/shared/gitignore/pnpm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/poetry.gitignore b/shared/gitignore/poetry.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pulumi.gitignore b/shared/gitignore/pulumi.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/python.gitignore b/shared/gitignore/python.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pytorch.gitignore b/shared/gitignore/pytorch.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/react-native.gitignore b/shared/gitignore/react-native.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/remix.gitignore b/shared/gitignore/remix.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ruby.gitignore b/shared/gitignore/ruby.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/rust.gitignore b/shared/gitignore/rust.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/sublime.gitignore b/shared/gitignore/sublime.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/svelte.gitignore b/shared/gitignore/svelte.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/swift.gitignore b/shared/gitignore/swift.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/tensorflow.gitignore b/shared/gitignore/tensorflow.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/terraform.gitignore b/shared/gitignore/terraform.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unity.gitignore b/shared/gitignore/unity.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unreal.gitignore b/shared/gitignore/unreal.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/uv.gitignore b/shared/gitignore/uv.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vim.gitignore b/shared/gitignore/vim.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vite.gitignore b/shared/gitignore/vite.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vscode.gitignore b/shared/gitignore/vscode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/windows.gitignore b/shared/gitignore/windows.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/xcode.gitignore b/shared/gitignore/xcode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/yarn.gitignore b/shared/gitignore/yarn.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/licenses/AFL-3.0.txt b/shared/licenses/AFL-3.0.txt
new file mode 100644
index 0000000..3859cad
--- /dev/null
+++ b/shared/licenses/AFL-3.0.txt
@@ -0,0 +1 @@
+Academic Free License (AFL-3.0)
diff --git a/shared/licenses/Apache-2.0.txt b/shared/licenses/Apache-2.0.txt
new file mode 100644
index 0000000..3d74f22
--- /dev/null
+++ b/shared/licenses/Apache-2.0.txt
@@ -0,0 +1 @@
+Apache License 2.0
diff --git a/shared/licenses/Artistic-2.0.txt b/shared/licenses/Artistic-2.0.txt
new file mode 100644
index 0000000..59c43bf
--- /dev/null
+++ b/shared/licenses/Artistic-2.0.txt
@@ -0,0 +1 @@
+Artistic License 2.0
diff --git a/shared/licenses/BSD-2-Clause.txt b/shared/licenses/BSD-2-Clause.txt
new file mode 100644
index 0000000..217e836
--- /dev/null
+++ b/shared/licenses/BSD-2-Clause.txt
@@ -0,0 +1 @@
+BSD 2-Clause "Simplified" License
diff --git a/shared/licenses/BSD-3-Clause.txt b/shared/licenses/BSD-3-Clause.txt
new file mode 100644
index 0000000..a56cbf5
--- /dev/null
+++ b/shared/licenses/BSD-3-Clause.txt
@@ -0,0 +1 @@
+BSD 3-Clause "New" or "Revised" License
diff --git a/shared/licenses/BSL-1.0.txt b/shared/licenses/BSL-1.0.txt
new file mode 100644
index 0000000..ee9ca20
--- /dev/null
+++ b/shared/licenses/BSL-1.0.txt
@@ -0,0 +1 @@
+Boost Software License 1.0 (BSL-1.0)
diff --git a/shared/licenses/CC-BY-4.0.txt b/shared/licenses/CC-BY-4.0.txt
new file mode 100644
index 0000000..2ef5136
--- /dev/null
+++ b/shared/licenses/CC-BY-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution 4.0 (CC BY 4.0)
diff --git a/shared/licenses/CC-BY-SA-4.0.txt b/shared/licenses/CC-BY-SA-4.0.txt
new file mode 100644
index 0000000..5dac77e
--- /dev/null
+++ b/shared/licenses/CC-BY-SA-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
diff --git a/shared/licenses/CC0-1.0.txt b/shared/licenses/CC0-1.0.txt
new file mode 100644
index 0000000..5d2dd0b
--- /dev/null
+++ b/shared/licenses/CC0-1.0.txt
@@ -0,0 +1 @@
+Creative Commons Zero v1.0 Universal (CC0-1.0)
diff --git a/shared/licenses/CDDL-1.0.txt b/shared/licenses/CDDL-1.0.txt
new file mode 100644
index 0000000..c058571
--- /dev/null
+++ b/shared/licenses/CDDL-1.0.txt
@@ -0,0 +1 @@
+Common Development and Distribution License (CDDL-1.0)
diff --git a/shared/licenses/EPL-2.0.txt b/shared/licenses/EPL-2.0.txt
new file mode 100644
index 0000000..ea0e912
--- /dev/null
+++ b/shared/licenses/EPL-2.0.txt
@@ -0,0 +1 @@
+Eclipse Public License 2.0 (EPL-2.0)
diff --git a/shared/licenses/GPL-2.0.txt b/shared/licenses/GPL-2.0.txt
new file mode 100644
index 0000000..b43924d
--- /dev/null
+++ b/shared/licenses/GPL-2.0.txt
@@ -0,0 +1 @@
+GNU General Public License v2.0 (GPL-2.0)
diff --git a/shared/licenses/GPL-3.0.txt b/shared/licenses/GPL-3.0.txt
new file mode 100644
index 0000000..f1bbc76
--- /dev/null
+++ b/shared/licenses/GPL-3.0.txt
@@ -0,0 +1 @@
+GNU General Public License v3.0 (GPL-3.0)
diff --git a/shared/licenses/LGPL-2.1.txt b/shared/licenses/LGPL-2.1.txt
new file mode 100644
index 0000000..8c1827e
--- /dev/null
+++ b/shared/licenses/LGPL-2.1.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v2.1 (LGPL-2.1)
diff --git a/shared/licenses/LGPL-3.0.txt b/shared/licenses/LGPL-3.0.txt
new file mode 100644
index 0000000..a3e5621
--- /dev/null
+++ b/shared/licenses/LGPL-3.0.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v3.0 (LGPL-3.0)
diff --git a/shared/licenses/MIT.txt b/shared/licenses/MIT.txt
new file mode 100644
index 0000000..d1e1072
--- /dev/null
+++ b/shared/licenses/MIT.txt
@@ -0,0 +1 @@
+MIT License
diff --git a/shared/licenses/MPL-2.0.txt b/shared/licenses/MPL-2.0.txt
new file mode 100644
index 0000000..586ac3d
--- /dev/null
+++ b/shared/licenses/MPL-2.0.txt
@@ -0,0 +1 @@
+Mozilla Public License 2.0 (MPL-2.0)
diff --git a/shared/licenses/MS-PL.txt b/shared/licenses/MS-PL.txt
new file mode 100644
index 0000000..3056dfd
--- /dev/null
+++ b/shared/licenses/MS-PL.txt
@@ -0,0 +1 @@
+Microsoft Public License (MS-PL)
diff --git a/shared/licenses/MS-RL.txt b/shared/licenses/MS-RL.txt
new file mode 100644
index 0000000..81c61be
--- /dev/null
+++ b/shared/licenses/MS-RL.txt
@@ -0,0 +1 @@
+Microsoft Reciprocal License (MS-RL)
diff --git a/shared/licenses/Unlicense.txt b/shared/licenses/Unlicense.txt
new file mode 100644
index 0000000..4dcfb1e
--- /dev/null
+++ b/shared/licenses/Unlicense.txt
@@ -0,0 +1 @@
+Unlicense
diff --git a/shared/licenses/WTFPL.txt b/shared/licenses/WTFPL.txt
new file mode 100644
index 0000000..34aeeca
--- /dev/null
+++ b/shared/licenses/WTFPL.txt
@@ -0,0 +1 @@
+WTFPL (Do What The F*** You Want To Public License)
diff --git a/shared/licenses/Zlib.txt b/shared/licenses/Zlib.txt
new file mode 100644
index 0000000..0c2665d
--- /dev/null
+++ b/shared/licenses/Zlib.txt
@@ -0,0 +1 @@
+Zlib License
```

---

### Commit: 4cae2b8a8bf9fa044c649f31421330507469c483
Author: neuxdotdev
Date: 2025-11-17
Message: Initial commit

**Changed Files:**

**Diff:**
```diff
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..0372383
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1,314 @@
+# ---> Node
+# Logs
+logs
+*.log
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+lerna-debug.log*
+.pnpm-debug.log*
+
+# Diagnostic reports (https://nodejs.org/api/report.html)
+report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Directory for instrumented libs generated by jscoverage/JSCover
+lib-cov
+
+# Coverage directory used by tools like istanbul
+coverage
+*.lcov
+
+# nyc test coverage
+.nyc_output
+
+# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
+.grunt
+
+# Bower dependency directory (https://bower.io/)
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons (https://nodejs.org/api/addons.html)
+build/Release
+
+# Dependency directories
+node_modules/
+jspm_packages/
+
+# Snowpack dependency directory (https://snowpack.dev/)
+web_modules/
+
+# TypeScript cache
+*.tsbuildinfo
+
+# Optional npm cache directory
+.npm
+
+# Optional eslint cache
+.eslintcache
+
+# Optional stylelint cache
+.stylelintcache
+
+# Microbundle cache
+.rpt2_cache/
+.rts2_cache_cjs/
+.rts2_cache_es/
+.rts2_cache_umd/
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variable files
+.env
+.env.development.local
+.env.test.local
+.env.production.local
+.env.local
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+out
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+# Comment in the public line in if your project uses Gatsby and not Next.js
+# https://nextjs.org/blog/next-9-1#public-directory-support
+# public
+
+# vuepress build output
+.vuepress/dist
+
+# vuepress v2.x temp and cache directory
+.temp
+.cache
+
+# vitepress build output
+**/.vitepress/dist
+
+# vitepress cache directory
+**/.vitepress/cache
+
+# Docusaurus cache and generated files
+.docusaurus
+
+# Serverless directories
+.serverless/
+
+# FuseBox cache
+.fusebox/
+
+# DynamoDB Local files
+.dynamodb/
+
+# TernJS port file
+.tern-port
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# yarn v2
+.yarn/cache
+.yarn/unplugged
+.yarn/build-state.yml
+.yarn/install-state.gz
+.pnp.*
+
+# ---> Python
+# Byte-compiled / optimized / DLL files
+__pycache__/
+*.py[cod]
+*$py.class
+
+# C extensions
+*.so
+
+# Distribution / packaging
+.Python
+build/
+develop-eggs/
+dist/
+downloads/
+eggs/
+.eggs/
+lib/
+lib64/
+parts/
+sdist/
+var/
+wheels/
+share/python-wheels/
+*.egg-info/
+.installed.cfg
+*.egg
+MANIFEST
+
+# PyInstaller
+#  Usually these files are written by a python script from a template
+#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+*.manifest
+*.spec
+
+# Installer logs
+pip-log.txt
+pip-delete-this-directory.txt
+
+# Unit test / coverage reports
+htmlcov/
+.tox/
+.nox/
+.coverage
+.coverage.*
+.cache
+nosetests.xml
+coverage.xml
+*.cover
+*.py,cover
+.hypothesis/
+.pytest_cache/
+cover/
+
+# Translations
+*.mo
+*.pot
+
+# Django stuff:
+*.log
+local_settings.py
+db.sqlite3
+db.sqlite3-journal
+
+# Flask stuff:
+instance/
+.webassets-cache
+
+# Scrapy stuff:
+.scrapy
+
+# Sphinx documentation
+docs/_build/
+
+# PyBuilder
+.pybuilder/
+target/
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+#   For a library or package, you might want to ignore these files since the code is
+#   intended to run in multiple environments; otherwise, check them in:
+# .python-version
+
+# pipenv
+#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
+#   However, in case of collaboration, if having platform-specific dependencies or dependencies
+#   having no cross-platform support, pipenv may install dependencies that don't work, or not
+#   install all needed dependencies.
+#Pipfile.lock
+
+# UV
+#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#uv.lock
+
+# poetry
+#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
+#poetry.lock
+
+# pdm
+#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
+#pdm.lock
+#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
+#   in version control.
+#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
+.pdm.toml
+.pdm-python
+.pdm-build/
+
+# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
+__pypackages__/
+
+# Celery stuff
+celerybeat-schedule
+celerybeat.pid
+
+# SageMath parsed files
+*.sage.py
+
+# Environments
+.env
+.venv
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Spyder project settings
+.spyderproject
+.spyproject
+
+# Rope project settings
+.ropeproject
+
+# mkdocs documentation
+/site
+
+# mypy
+.mypy_cache/
+.dmypy.json
+dmypy.json
+
+# Pyre type checker
+.pyre/
+
+# pytype static type analyzer
+.pytype/
+
+# Cython debug symbols
+cython_debug/
+
+# PyCharm
+#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#  and can be added to the global gitignore or merged into this file.  For a more nuclear
+#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
+#.idea/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
diff --git a/LICENSE b/LICENSE
new file mode 100644
index 0000000..b6aba87
--- /dev/null
+++ b/LICENSE
@@ -0,0 +1,18 @@
+MIT License
+
+Copyright (c) 2025 neuxdotdev
+
+Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
+associated documentation files (the "Software"), to deal in the Software without restriction, including 
+without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
+copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
+following conditions:
+
+The above copyright notice and this permission notice shall be included in all copies or substantial 
+portions of the Software.
+
+THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
+LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
+EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
+IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
+USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..1a634c6
--- /dev/null
+++ b/README.md
@@ -0,0 +1,3 @@
+# snipets
+
+a very complete starterkit code project place
\ No newline at end of file
```

---

## Update: 2025-11-17


### Commit: 5f306f59c4122666aba655872e59077fab9c34c0
Author: nzingx
Date: 2025-11-17
Message: docs: edit README.md

**Changed Files:**
- README.md

**Diff:**
```diff
diff --git a/README.md b/README.md
index e69de29..aac591c 100644
--- a/README.md
+++ b/README.md
@@ -0,0 +1,147 @@
+# snipets
+
+This repository provides a comprehensive and maintainable collection of `.gitignore` files, open source software licenses, and project boilerplate templates. It is designed to support software development projects across multiple programming languages, ecosystems, operating systems, and development workflows.
+
+The goal of this project is to offer a unified reference that enables developers to initialize repositories quickly and consistently, while avoiding accidental commits of temporary files, credentials, build artifacts, system files, or other non-versioned assets.
+
+---
+
+## 1. Repository Structure
+
+The repository is organized into several key directories:
+
+```
+
+.gitignore                    Base .gitignore for the repository
+global-software-licenses.txt  Aggregated list of recognized licenses
+licenses/                     SPDX-aligned license texts
+shared/configs/               Editor and formatter configurations
+shared/gitignore/             Collection of categorized .gitignore templates
+templates/                    Project scaffolding and boilerplate templates
+.github/, .gitea/             Issue templates, PR templates, CI configurations
+
+````
+
+### 1.1 Gitignore Collections
+
+The directory `shared/gitignore/` includes `.gitignore` templates for:
+
+- Languages: C, C++, C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and others
+- Web and frontend: Astro, Next.js, Nuxt, Remix, Svelte, Vite, React, Node, Bun, Deno
+- Mobile and game engines: Android, iOS/Xcode, React Native, Flutter, Unity, Unreal, Godot
+- DevOps and infrastructure: Docker, Kubernetes, Helm, Ansible, Terraform, Pulumi
+- AI/ML and scientific computing: Conda, Poetry, HuggingFace, TensorFlow, PyTorch, Jupyter
+- Operating systems: Windows, macOS, Linux
+- Editors and IDEs: VSCode, JetBrains, Vim, Emacs, Sublime, Eclipse
+- Package managers: npm, yarn, pnpm, pip, pdm, uv
+
+### 1.2 Software Licenses
+
+The directory `shared/licenses/` contains SPDX-compliant license texts, for example:
+
+- Apache License 2.0
+- MIT License
+- GNU GPL 2.0 and 3.0
+- GNU LGPL 2.1 and 3.0
+- BSD 2-Clause and BSD 3-Clause
+- MPL 2.0
+- EPL 2.0
+- CDDL 1.0
+- BSL 1.0
+- Academic Free License 3.0
+- Unlicense
+- WTFPL
+- Zlib
+- Creative Commons: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0
+
+Each license file follows naming conventions consistent with SPDX identifiers.
+
+### 1.3 Project Templates
+
+Located in `templates/`, covering:
+
+- Backend: FastAPI, Node Express, Go Fiber, Bun, Rust Axum
+- CLI: Go Cobra, Node Commander, Python Typer
+- DevOps: Docker, Kubernetes, Terraform, Ansible
+- Documentation: Sphinx, MkDocs, Docusaurus
+- Mobile: Flutter, React Native
+- Web: Astro, Vanilla JS, Vite/React, SvelteKit, Next.js
+
+---
+
+## 2. Usage Instructions
+
+### 2.1 Initialize a .gitignore from templates
+
+Example for Python and VSCode:
+
+```bash
+cat shared/gitignore/python.gitignore shared/gitignore/vscode.gitignore > .gitignore
+````
+
+### 2.2 Selecting a software license
+
+Copy any license from `shared/licenses/` into the repository root as `LICENSE`:
+
+```bash
+cp shared/licenses/MIT.txt LICENSE
+```
+
+### 2.3 Project Template Initialization
+
+Example using FastAPI backend:
+
+```bash
+cp -r templates/backend/python-fastapi/* .
+```
+
+---
+
+## 3. Compatibility and Standards
+
+This project aligns with:
+
+* SPDX license identifiers: [https://spdx.org/licenses/](https://spdx.org/licenses/)
+* Gitignore template conventions used by leading version control hosting platforms
+* POSIX-compatible text formatting
+* UTF-8 encoding for full language compatibility
+
+---
+
+## 4. Contribution Guidelines
+
+Contributions are welcome. Areas where contributions are valuable include:
+
+* New `.gitignore` templates
+* Additional SPDX-licensed texts
+* Improvements to project scaffolding templates
+* Automated generation tools and scripts
+* Documentation enhancements
+
+Please review the following documents before contributing:
+
+* `CONTRIBUTING.md`
+* `CODE_OF_CONDUCT.md`
+* `SECURITY.md`
+
+---
+
+## 5. Security Policy
+
+Security vulnerabilities should not be reported via public issues. Follow the security disclosure process described in:
+
+```
+SECURITY.md
+```
+
+---
+
+## 6. License
+
+This repository is distributed under the MIT License. Individual license files included in this repository retain their original terms, authorship, and compatibility requirements.
+
+---
+
+## 7. Acknowledgments
+
+This project references open standards and publicly available information from long-standing open source communities, legal organizations, and contributors who have advanced open licensing and software reliability practices.
\ No newline at end of file
```

---

### Commit: 2dd7dd26eac0813b82109f02993e765606807470
Author: nzingx
Date: 2025-11-17
Message: feat: add some templates

**Changed Files:**
- .gitea/FUNDING.yml
- .gitea/ISSUE_TEMPLATE/bug_report.md
- .gitea/ISSUE_TEMPLATE/feature_request.md
- .gitea/ISSUE_TEMPLATE/improvement_suggestion.md
- .gitea/PULL_REQUEST_TEMPLATE.md
- .gitea/workflows/build.yml
- .gitea/workflows/lint.yml
- .gitea/workflows/test.yml
- .github/FUNDING.yml
- .github/ISSUE_TEMPLATE/bug_report.md
- .github/ISSUE_TEMPLATE/feature_request.md
- .github/ISSUE_TEMPLATE/improvement_suggestion.md
- .github/PULL_REQUEST_TEMPLATE.md
- .github/workflows/build.yml
- .github/workflows/lint.yml
- .github/workflows/test.yml
- .gitignore
- CHANGELOG.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- LICENSE
- README.md
- SECURITY.md
- global-software-licenses.txt
- shared/configs/editorconfig
- shared/configs/eslint.config.mjs
- shared/configs/go.mod
- shared/configs/prettier.config.cjs
- shared/configs/pyproject.toml
- shared/configs/rustfmt.toml
- shared/configs/tailwind.config.js
- shared/configs/tsconfig.json
- shared/gitignore/android.gitignore
- shared/gitignore/ansible.gitignore
- shared/gitignore/astro.gitignore
- shared/gitignore/blender.gitignore
- shared/gitignore/bun.gitignore
- shared/gitignore/c.gitignore
- shared/gitignore/conda.gitignore
- shared/gitignore/cpp.gitignore
- shared/gitignore/csharp.gitignore
- shared/gitignore/deno.gitignore
- shared/gitignore/docker.gitignore
- shared/gitignore/dotnet.gitignore
- shared/gitignore/eclipse.gitignore
- shared/gitignore/emacs.gitignore
- shared/gitignore/flutter.gitignore
- shared/gitignore/go.gitignore
- shared/gitignore/godot.gitignore
- shared/gitignore/gradle.gitignore
- shared/gitignore/helm.gitignore
- shared/gitignore/huggingface.gitignore
- shared/gitignore/java.gitignore
- shared/gitignore/jetbrains.gitignore
- shared/gitignore/jupyter.gitignore
- shared/gitignore/kotlin.gitignore
- shared/gitignore/kubernetes.gitignore
- shared/gitignore/laravel.gitignore
- shared/gitignore/linux.gitignore
- shared/gitignore/macos.gitignore
- shared/gitignore/maven.gitignore
- shared/gitignore/nextjs.gitignore
- shared/gitignore/node.gitignore
- shared/gitignore/npm.gitignore
- shared/gitignore/nuxt.gitignore
- shared/gitignore/pdm.gitignore
- shared/gitignore/php.gitignore
- shared/gitignore/pnpm.gitignore
- shared/gitignore/poetry.gitignore
- shared/gitignore/pulumi.gitignore
- shared/gitignore/python.gitignore
- shared/gitignore/pytorch.gitignore
- shared/gitignore/react-native.gitignore
- shared/gitignore/remix.gitignore
- shared/gitignore/ruby.gitignore
- shared/gitignore/rust.gitignore
- shared/gitignore/sublime.gitignore
- shared/gitignore/svelte.gitignore
- shared/gitignore/swift.gitignore
- shared/gitignore/tensorflow.gitignore
- shared/gitignore/terraform.gitignore
- shared/gitignore/unity.gitignore
- shared/gitignore/unreal.gitignore
- shared/gitignore/uv.gitignore
- shared/gitignore/vim.gitignore
- shared/gitignore/vite.gitignore
- shared/gitignore/vscode.gitignore
- shared/gitignore/windows.gitignore
- shared/gitignore/xcode.gitignore
- shared/gitignore/yarn.gitignore
- shared/licenses/AFL-3.0.txt
- shared/licenses/Apache-2.0.txt
- shared/licenses/Artistic-2.0.txt
- shared/licenses/BSD-2-Clause.txt
- shared/licenses/BSD-3-Clause.txt
- shared/licenses/BSL-1.0.txt
- shared/licenses/CC-BY-4.0.txt
- shared/licenses/CC-BY-SA-4.0.txt
- shared/licenses/CC0-1.0.txt
- shared/licenses/CDDL-1.0.txt
- shared/licenses/EPL-2.0.txt
- shared/licenses/GPL-2.0.txt
- shared/licenses/GPL-3.0.txt
- shared/licenses/LGPL-2.1.txt
- shared/licenses/LGPL-3.0.txt
- shared/licenses/MIT.txt
- shared/licenses/MPL-2.0.txt
- shared/licenses/MS-PL.txt
- shared/licenses/MS-RL.txt
- shared/licenses/Unlicense.txt
- shared/licenses/WTFPL.txt
- shared/licenses/Zlib.txt

**Diff:**
```diff
diff --git a/.gitea/FUNDING.yml b/.gitea/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/bug_report.md b/.gitea/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/feature_request.md b/.gitea/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md b/.gitea/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/PULL_REQUEST_TEMPLATE.md b/.gitea/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/build.yml b/.gitea/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/lint.yml b/.gitea/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitea/workflows/test.yml b/.gitea/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/FUNDING.yml b/.github/FUNDING.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/bug_report.md b/.github/ISSUE_TEMPLATE/bug_report.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/feature_request.md b/.github/ISSUE_TEMPLATE/feature_request.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/ISSUE_TEMPLATE/improvement_suggestion.md b/.github/ISSUE_TEMPLATE/improvement_suggestion.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/PULL_REQUEST_TEMPLATE.md b/.github/PULL_REQUEST_TEMPLATE.md
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/build.yml b/.github/workflows/build.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/lint.yml b/.github/workflows/lint.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.github/workflows/test.yml b/.github/workflows/test.yml
new file mode 100644
index 0000000..e69de29
diff --git a/.gitignore b/.gitignore
index 0372383..aec544e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,4 +1,3 @@
-# ---> Node
 # Logs
 logs
 *.log
@@ -6,7 +5,6 @@ npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
 lerna-debug.log*
-.pnpm-debug.log*
 
 # Diagnostic reports (https://nodejs.org/api/report.html)
 report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
@@ -58,12 +56,6 @@ web_modules/
 # Optional stylelint cache
 .stylelintcache
 
-# Microbundle cache
-.rpt2_cache/
-.rts2_cache_cjs/
-.rts2_cache_es/
-.rts2_cache_umd/
-
 # Optional REPL history
 .node_repl_history
 
@@ -75,10 +67,8 @@ web_modules/
 
 # dotenv environment variable files
 .env
-.env.development.local
-.env.test.local
-.env.production.local
-.env.local
+.env.*
+!.env.example
 
 # parcel-bundler cache (https://parceljs.org/)
 .cache
@@ -91,6 +81,7 @@ out
 # Nuxt.js build / generate output
 .nuxt
 dist
+.output
 
 # Gatsby files
 .cache/
@@ -105,6 +96,9 @@ dist
 .temp
 .cache
 
+# Sveltekit cache directory
+.svelte-kit/
+
 # vitepress build output
 **/.vitepress/dist
 
@@ -123,23 +117,32 @@ dist
 # DynamoDB Local files
 .dynamodb/
 
+# Firebase cache directory
+.firebase/
+
 # TernJS port file
 .tern-port
 
 # Stores VSCode versions used for testing VSCode extensions
 .vscode-test
 
-# yarn v2
-.yarn/cache
-.yarn/unplugged
-.yarn/build-state.yml
-.yarn/install-state.gz
+# yarn v3
 .pnp.*
+.yarn/*
+!.yarn/patches
+!.yarn/plugins
+!.yarn/releases
+!.yarn/sdks
+!.yarn/versions
+
+# Vite files
+vite.config.js.timestamp-*
+vite.config.ts.timestamp-*
+.vite/
 
-# ---> Python
 # Byte-compiled / optimized / DLL files
 __pycache__/
-*.py[cod]
+*.py[codz]
 *$py.class
 
 # C extensions
@@ -166,8 +169,8 @@ share/python-wheels/
 MANIFEST
 
 # PyInstaller
-#  Usually these files are written by a python script from a template
-#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+#   Usually these files are written by a python script from a template
+#   before PyInstaller builds the exe, so as to inject date/other infos into it.
 *.manifest
 *.spec
 
@@ -185,7 +188,7 @@ htmlcov/
 nosetests.xml
 coverage.xml
 *.cover
-*.py,cover
+*.py.cover
 .hypothesis/
 .pytest_cache/
 cover/
@@ -231,31 +234,38 @@ ipython_config.py
 #   However, in case of collaboration, if having platform-specific dependencies or dependencies
 #   having no cross-platform support, pipenv may install dependencies that don't work, or not
 #   install all needed dependencies.
-#Pipfile.lock
+# Pipfile.lock
 
 # UV
 #   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
-#uv.lock
+# uv.lock
 
 # poetry
 #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
 #   This is especially recommended for binary packages to ensure reproducibility, and is more
 #   commonly ignored for libraries.
 #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
-#poetry.lock
+# poetry.lock
+# poetry.toml
 
 # pdm
 #   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
-#pdm.lock
-#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
-#   in version control.
-#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
-.pdm.toml
+#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
+#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
+# pdm.lock
+# pdm.toml
 .pdm-python
 .pdm-build/
 
+# pixi
+#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
+# pixi.lock
+#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
+#   in the .venv directory. It is recommended not to include this directory in version control.
+.pixi
+
 # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
 __pypackages__/
 
@@ -263,11 +273,25 @@ __pypackages__/
 celerybeat-schedule
 celerybeat.pid
 
+# Redis
+*.rdb
+*.aof
+*.pid
+
+# RabbitMQ
+mnesia/
+rabbitmq/
+rabbitmq-data/
+
+# ActiveMQ
+activemq-data/
+
 # SageMath parsed files
 *.sage.py
 
 # Environments
 .env
+.envrc
 .venv
 env/
 venv/
@@ -300,15 +324,283 @@ dmypy.json
 cython_debug/
 
 # PyCharm
+#   JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#   be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#   and can be added to the global gitignore or merged into this file.  For a more nuclear
+#   option (not recommended) you can uncomment the following to ignore the entire idea folder.
+# .idea/
+
+# Abstra
+#   Abstra is an AI-powered process automation framework.
+#   Ignore directories containing user credentials, local state, and settings.
+#   Learn more at https://abstra.io/docs
+.abstra/
+
+# Visual Studio Code
+#   Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore 
+#   that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
+#   and can be added to the global gitignore or merged into this file. However, if you prefer, 
+#   you could uncomment the following to ignore the entire vscode folder
+# .vscode/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
+# Marimo
+marimo/_static/
+marimo/_lsp/
+__marimo__/
+
+# Streamlit
+.streamlit/secrets.toml
+
+# If you prefer the allow list template instead of the deny list, see community template:
+# https://github.com/github/gitignore/blob/main/community/Golang/Go.AllowList.gitignore
+#
+# Binaries for programs and plugins
+*.exe
+*.exe~
+*.dll
+*.so
+*.dylib
+
+# Test binary, built with `go test -c`
+*.test
+
+# Code coverage profiles and other test artifacts
+*.out
+coverage.*
+*.coverprofile
+profile.cov
+
+# Dependency directories (remove the comment below to include it)
+# vendor/
+
+# Go workspace file
+go.work
+go.work.sum
+
+# env file
+.env
+
+# Editor/IDE
+# .idea/
+# .vscode/
+
+# Generated by Cargo
+# will have compiled files and executables
+debug
+target
+
+# These are backup files generated by rustfmt
+**/*.rs.bk
+
+# MSVC Windows builds of rustc generate these, which store debugging information
+*.pdb
+
+# Generated by cargo mutants
+# Contains mutation testing data
+**/mutants.out*/
+
+# RustRover
 #  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
 #  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
 #  and can be added to the global gitignore or merged into this file.  For a more nuclear
 #  option (not recommended) you can uncomment the following to ignore the entire idea folder.
 #.idea/
 
-# Ruff stuff:
-.ruff_cache/
+# Compiled class file
+*.class
 
-# PyPI configuration file
-.pypirc
+# Log file
+*.log
 
+# BlueJ files
+*.ctxt
+
+# Mobile Tools for Java (J2ME)
+.mtj.tmp/
+
+# Package Files #
+*.jar
+*.war
+*.nar
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
+hs_err_pid*
+replay_pid*
+
+# Windows thumbnail cache files
+Thumbs.db
+Thumbs.db:encryptable
+ehthumbs.db
+ehthumbs_vista.db
+
+# Dump file
+*.stackdump
+
+# Folder config file
+[Dd]esktop.ini
+
+# Recycle Bin used on file shares
+$RECYCLE.BIN/
+
+# Windows Installer files
+*.cab
+*.msi
+*.msix
+*.msm
+*.msp
+
+# Windows shortcuts
+*.lnk
+
+*~
+
+# temporary files which can be created if a process still has a handle open of a deleted file
+.fuse_hidden*
+
+# Metadata left by Dolphin file manager, which comes with KDE Plasma
+.directory
+
+# Linux trash folder which might appear on any partition or disk
+.Trash-*
+
+# .nfs files are created when an open file is removed but is still being accessed
+.nfs*
+
+# Log files created by default by the nohup command
+nohup.out
+
+# General
+.DS_Store
+__MACOSX/
+.AppleDouble
+.LSOverride
+Icon[]
+
+# Thumbnails
+._*
+
+# Files that might appear in the root of a volume
+.DocumentRevisions-V100
+.fseventsd
+.Spotlight-V100
+.TemporaryItems
+.Trashes
+.VolumeIcon.icns
+.com.apple.timemachine.donotpresent
+
+# Directories potentially created on remote AFP share
+.AppleDB
+.AppleDesktop
+Network Trash Folder
+Temporary Items
+.apdisk
+
+# Covers JetBrains IDEs: IntelliJ, GoLand, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
+# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
+
+# User-specific stuff
+.idea/**/workspace.xml
+.idea/**/tasks.xml
+.idea/**/usage.statistics.xml
+.idea/**/dictionaries
+.idea/**/shelf
+
+# AWS User-specific
+.idea/**/aws.xml
+
+# Generated files
+.idea/**/contentModel.xml
+
+# Sensitive or high-churn files
+.idea/**/dataSources/
+.idea/**/dataSources.ids
+.idea/**/dataSources.local.xml
+.idea/**/sqlDataSources.xml
+.idea/**/dynamic.xml
+.idea/**/uiDesigner.xml
+.idea/**/dbnavigator.xml
+
+# Gradle
+.idea/**/gradle.xml
+.idea/**/libraries
+
+# Gradle and Maven with auto-import
+# When using Gradle or Maven with auto-import, you should exclude module files,
+# since they will be recreated, and may cause churn.  Uncomment if using
+# auto-import.
+# .idea/artifacts
+# .idea/compiler.xml
+# .idea/jarRepositories.xml
+# .idea/modules.xml
+# .idea/*.iml
+# .idea/modules
+# *.iml
+# *.ipr
+
+# CMake
+cmake-build-*/
+
+# Mongo Explorer plugin
+.idea/**/mongoSettings.xml
+
+# File-based project format
+*.iws
+
+# IntelliJ
+out/
+
+# mpeltonen/sbt-idea plugin
+.idea_modules/
+
+# JIRA plugin
+atlassian-ide-plugin.xml
+
+# Cursive Clojure plugin
+.idea/replstate.xml
+
+# SonarLint plugin
+.idea/sonarlint/
+.idea/sonarlint.xml # see https://community.sonarsource.com/t/is-the-file-idea-idea-idea-sonarlint-xml-intended-to-be-under-source-control/121119
+
+# Crashlytics plugin (for Android Studio and IntelliJ)
+com_crashlytics_export_strings.xml
+crashlytics.properties
+crashlytics-build.properties
+fabric.properties
+
+# Editor-based HTTP Client
+.idea/httpRequests
+http-client.private.env.json
+
+# Android studio 3.1+ serialized cache file
+.idea/caches/build_file_checksums.ser
+
+# Apifox Helper cache
+.idea/.cache/.Apifox_Helper
+.idea/ApifoxUploaderProjectSetting.xml
+
+# Github Copilot persisted session migrations, see: https://github.com/microsoft/copilot-intellij-feedback/issues/712#issuecomment-3322062215
+.idea/**/copilot.data.migration.*.xml
+
+.vscode/*
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+!.vscode/*.code-snippets
+!*.code-workspace
+
+# Built Visual Studio Code Extensions
+*.vsix
+
+404: Not Found
\ No newline at end of file
diff --git a/CHANGELOG.md b/CHANGELOG.md
new file mode 100644
index 0000000..e69de29
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
new file mode 100644
index 0000000..e69de29
diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
new file mode 100644
index 0000000..e69de29
diff --git a/LICENSE b/LICENSE
index b6aba87..e69de29 100644
--- a/LICENSE
+++ b/LICENSE
@@ -1,18 +0,0 @@
-MIT License
-
-Copyright (c) 2025 neuxdotdev
-
-Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
-associated documentation files (the "Software"), to deal in the Software without restriction, including 
-without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
-copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
-following conditions:
-
-The above copyright notice and this permission notice shall be included in all copies or substantial 
-portions of the Software.
-
-THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
-LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
-EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
-IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
-USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
index 1a634c6..e69de29 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +0,0 @@
-# snipets
-
-a very complete starterkit code project place
\ No newline at end of file
diff --git a/SECURITY.md b/SECURITY.md
new file mode 100644
index 0000000..e69de29
diff --git a/global-software-licenses.txt b/global-software-licenses.txt
new file mode 100644
index 0000000..e506d8f
--- /dev/null
+++ b/global-software-licenses.txt
@@ -0,0 +1,22 @@
+Apache License 2.0
+MIT License
+GNU General Public License v2.0 (GPL-2.0)
+GNU General Public License v3.0 (GPL-3.0)
+GNU Lesser General Public License v2.1 (LGPL-2.1)
+GNU Lesser General Public License v3.0 (LGPL-3.0)
+Mozilla Public License 2.0 (MPL-2.0)
+BSD 2-Clause "Simplified" License
+BSD 3-Clause "New" or "Revised" License
+Eclipse Public License 2.0 (EPL-2.0)
+Microsoft Public License (MS-PL)
+Microsoft Reciprocal License (MS-RL)
+Common Development and Distribution License (CDDL-1.0)
+Academic Free License (AFL-3.0)
+Artistic License 2.0
+Boost Software License 1.0 (BSL-1.0)
+Creative Commons Zero v1.0 Universal (CC0-1.0)
+Creative Commons Attribution 4.0 (CC BY 4.0)
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
+Unlicense
+WTFPL (Do What The F*** You Want To Public License)
+Zlib License
diff --git a/shared/configs/editorconfig b/shared/configs/editorconfig
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/eslint.config.mjs b/shared/configs/eslint.config.mjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/go.mod b/shared/configs/go.mod
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/prettier.config.cjs b/shared/configs/prettier.config.cjs
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/pyproject.toml b/shared/configs/pyproject.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/rustfmt.toml b/shared/configs/rustfmt.toml
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tailwind.config.js b/shared/configs/tailwind.config.js
new file mode 100644
index 0000000..e69de29
diff --git a/shared/configs/tsconfig.json b/shared/configs/tsconfig.json
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/android.gitignore b/shared/gitignore/android.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ansible.gitignore b/shared/gitignore/ansible.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/astro.gitignore b/shared/gitignore/astro.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/blender.gitignore b/shared/gitignore/blender.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/bun.gitignore b/shared/gitignore/bun.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/c.gitignore b/shared/gitignore/c.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/conda.gitignore b/shared/gitignore/conda.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/cpp.gitignore b/shared/gitignore/cpp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/csharp.gitignore b/shared/gitignore/csharp.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/deno.gitignore b/shared/gitignore/deno.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/docker.gitignore b/shared/gitignore/docker.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/dotnet.gitignore b/shared/gitignore/dotnet.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/eclipse.gitignore b/shared/gitignore/eclipse.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/emacs.gitignore b/shared/gitignore/emacs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/flutter.gitignore b/shared/gitignore/flutter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/go.gitignore b/shared/gitignore/go.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/godot.gitignore b/shared/gitignore/godot.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/gradle.gitignore b/shared/gitignore/gradle.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/helm.gitignore b/shared/gitignore/helm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/huggingface.gitignore b/shared/gitignore/huggingface.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/java.gitignore b/shared/gitignore/java.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jetbrains.gitignore b/shared/gitignore/jetbrains.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/jupyter.gitignore b/shared/gitignore/jupyter.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kotlin.gitignore b/shared/gitignore/kotlin.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/kubernetes.gitignore b/shared/gitignore/kubernetes.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/laravel.gitignore b/shared/gitignore/laravel.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/linux.gitignore b/shared/gitignore/linux.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/macos.gitignore b/shared/gitignore/macos.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/maven.gitignore b/shared/gitignore/maven.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nextjs.gitignore b/shared/gitignore/nextjs.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/node.gitignore b/shared/gitignore/node.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/npm.gitignore b/shared/gitignore/npm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/nuxt.gitignore b/shared/gitignore/nuxt.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pdm.gitignore b/shared/gitignore/pdm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/php.gitignore b/shared/gitignore/php.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pnpm.gitignore b/shared/gitignore/pnpm.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/poetry.gitignore b/shared/gitignore/poetry.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pulumi.gitignore b/shared/gitignore/pulumi.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/python.gitignore b/shared/gitignore/python.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/pytorch.gitignore b/shared/gitignore/pytorch.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/react-native.gitignore b/shared/gitignore/react-native.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/remix.gitignore b/shared/gitignore/remix.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/ruby.gitignore b/shared/gitignore/ruby.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/rust.gitignore b/shared/gitignore/rust.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/sublime.gitignore b/shared/gitignore/sublime.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/svelte.gitignore b/shared/gitignore/svelte.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/swift.gitignore b/shared/gitignore/swift.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/tensorflow.gitignore b/shared/gitignore/tensorflow.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/terraform.gitignore b/shared/gitignore/terraform.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unity.gitignore b/shared/gitignore/unity.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/unreal.gitignore b/shared/gitignore/unreal.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/uv.gitignore b/shared/gitignore/uv.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vim.gitignore b/shared/gitignore/vim.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vite.gitignore b/shared/gitignore/vite.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/vscode.gitignore b/shared/gitignore/vscode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/windows.gitignore b/shared/gitignore/windows.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/xcode.gitignore b/shared/gitignore/xcode.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/gitignore/yarn.gitignore b/shared/gitignore/yarn.gitignore
new file mode 100644
index 0000000..e69de29
diff --git a/shared/licenses/AFL-3.0.txt b/shared/licenses/AFL-3.0.txt
new file mode 100644
index 0000000..3859cad
--- /dev/null
+++ b/shared/licenses/AFL-3.0.txt
@@ -0,0 +1 @@
+Academic Free License (AFL-3.0)
diff --git a/shared/licenses/Apache-2.0.txt b/shared/licenses/Apache-2.0.txt
new file mode 100644
index 0000000..3d74f22
--- /dev/null
+++ b/shared/licenses/Apache-2.0.txt
@@ -0,0 +1 @@
+Apache License 2.0
diff --git a/shared/licenses/Artistic-2.0.txt b/shared/licenses/Artistic-2.0.txt
new file mode 100644
index 0000000..59c43bf
--- /dev/null
+++ b/shared/licenses/Artistic-2.0.txt
@@ -0,0 +1 @@
+Artistic License 2.0
diff --git a/shared/licenses/BSD-2-Clause.txt b/shared/licenses/BSD-2-Clause.txt
new file mode 100644
index 0000000..217e836
--- /dev/null
+++ b/shared/licenses/BSD-2-Clause.txt
@@ -0,0 +1 @@
+BSD 2-Clause "Simplified" License
diff --git a/shared/licenses/BSD-3-Clause.txt b/shared/licenses/BSD-3-Clause.txt
new file mode 100644
index 0000000..a56cbf5
--- /dev/null
+++ b/shared/licenses/BSD-3-Clause.txt
@@ -0,0 +1 @@
+BSD 3-Clause "New" or "Revised" License
diff --git a/shared/licenses/BSL-1.0.txt b/shared/licenses/BSL-1.0.txt
new file mode 100644
index 0000000..ee9ca20
--- /dev/null
+++ b/shared/licenses/BSL-1.0.txt
@@ -0,0 +1 @@
+Boost Software License 1.0 (BSL-1.0)
diff --git a/shared/licenses/CC-BY-4.0.txt b/shared/licenses/CC-BY-4.0.txt
new file mode 100644
index 0000000..2ef5136
--- /dev/null
+++ b/shared/licenses/CC-BY-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution 4.0 (CC BY 4.0)
diff --git a/shared/licenses/CC-BY-SA-4.0.txt b/shared/licenses/CC-BY-SA-4.0.txt
new file mode 100644
index 0000000..5dac77e
--- /dev/null
+++ b/shared/licenses/CC-BY-SA-4.0.txt
@@ -0,0 +1 @@
+Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
diff --git a/shared/licenses/CC0-1.0.txt b/shared/licenses/CC0-1.0.txt
new file mode 100644
index 0000000..5d2dd0b
--- /dev/null
+++ b/shared/licenses/CC0-1.0.txt
@@ -0,0 +1 @@
+Creative Commons Zero v1.0 Universal (CC0-1.0)
diff --git a/shared/licenses/CDDL-1.0.txt b/shared/licenses/CDDL-1.0.txt
new file mode 100644
index 0000000..c058571
--- /dev/null
+++ b/shared/licenses/CDDL-1.0.txt
@@ -0,0 +1 @@
+Common Development and Distribution License (CDDL-1.0)
diff --git a/shared/licenses/EPL-2.0.txt b/shared/licenses/EPL-2.0.txt
new file mode 100644
index 0000000..ea0e912
--- /dev/null
+++ b/shared/licenses/EPL-2.0.txt
@@ -0,0 +1 @@
+Eclipse Public License 2.0 (EPL-2.0)
diff --git a/shared/licenses/GPL-2.0.txt b/shared/licenses/GPL-2.0.txt
new file mode 100644
index 0000000..b43924d
--- /dev/null
+++ b/shared/licenses/GPL-2.0.txt
@@ -0,0 +1 @@
+GNU General Public License v2.0 (GPL-2.0)
diff --git a/shared/licenses/GPL-3.0.txt b/shared/licenses/GPL-3.0.txt
new file mode 100644
index 0000000..f1bbc76
--- /dev/null
+++ b/shared/licenses/GPL-3.0.txt
@@ -0,0 +1 @@
+GNU General Public License v3.0 (GPL-3.0)
diff --git a/shared/licenses/LGPL-2.1.txt b/shared/licenses/LGPL-2.1.txt
new file mode 100644
index 0000000..8c1827e
--- /dev/null
+++ b/shared/licenses/LGPL-2.1.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v2.1 (LGPL-2.1)
diff --git a/shared/licenses/LGPL-3.0.txt b/shared/licenses/LGPL-3.0.txt
new file mode 100644
index 0000000..a3e5621
--- /dev/null
+++ b/shared/licenses/LGPL-3.0.txt
@@ -0,0 +1 @@
+GNU Lesser General Public License v3.0 (LGPL-3.0)
diff --git a/shared/licenses/MIT.txt b/shared/licenses/MIT.txt
new file mode 100644
index 0000000..d1e1072
--- /dev/null
+++ b/shared/licenses/MIT.txt
@@ -0,0 +1 @@
+MIT License
diff --git a/shared/licenses/MPL-2.0.txt b/shared/licenses/MPL-2.0.txt
new file mode 100644
index 0000000..586ac3d
--- /dev/null
+++ b/shared/licenses/MPL-2.0.txt
@@ -0,0 +1 @@
+Mozilla Public License 2.0 (MPL-2.0)
diff --git a/shared/licenses/MS-PL.txt b/shared/licenses/MS-PL.txt
new file mode 100644
index 0000000..3056dfd
--- /dev/null
+++ b/shared/licenses/MS-PL.txt
@@ -0,0 +1 @@
+Microsoft Public License (MS-PL)
diff --git a/shared/licenses/MS-RL.txt b/shared/licenses/MS-RL.txt
new file mode 100644
index 0000000..81c61be
--- /dev/null
+++ b/shared/licenses/MS-RL.txt
@@ -0,0 +1 @@
+Microsoft Reciprocal License (MS-RL)
diff --git a/shared/licenses/Unlicense.txt b/shared/licenses/Unlicense.txt
new file mode 100644
index 0000000..4dcfb1e
--- /dev/null
+++ b/shared/licenses/Unlicense.txt
@@ -0,0 +1 @@
+Unlicense
diff --git a/shared/licenses/WTFPL.txt b/shared/licenses/WTFPL.txt
new file mode 100644
index 0000000..34aeeca
--- /dev/null
+++ b/shared/licenses/WTFPL.txt
@@ -0,0 +1 @@
+WTFPL (Do What The F*** You Want To Public License)
diff --git a/shared/licenses/Zlib.txt b/shared/licenses/Zlib.txt
new file mode 100644
index 0000000..0c2665d
--- /dev/null
+++ b/shared/licenses/Zlib.txt
@@ -0,0 +1 @@
+Zlib License
```

---

### Commit: 4cae2b8a8bf9fa044c649f31421330507469c483
Author: neuxdotdev
Date: 2025-11-17
Message: Initial commit

**Changed Files:**

**Diff:**
```diff
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..0372383
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1,314 @@
+# ---> Node
+# Logs
+logs
+*.log
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+lerna-debug.log*
+.pnpm-debug.log*
+
+# Diagnostic reports (https://nodejs.org/api/report.html)
+report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Directory for instrumented libs generated by jscoverage/JSCover
+lib-cov
+
+# Coverage directory used by tools like istanbul
+coverage
+*.lcov
+
+# nyc test coverage
+.nyc_output
+
+# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
+.grunt
+
+# Bower dependency directory (https://bower.io/)
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons (https://nodejs.org/api/addons.html)
+build/Release
+
+# Dependency directories
+node_modules/
+jspm_packages/
+
+# Snowpack dependency directory (https://snowpack.dev/)
+web_modules/
+
+# TypeScript cache
+*.tsbuildinfo
+
+# Optional npm cache directory
+.npm
+
+# Optional eslint cache
+.eslintcache
+
+# Optional stylelint cache
+.stylelintcache
+
+# Microbundle cache
+.rpt2_cache/
+.rts2_cache_cjs/
+.rts2_cache_es/
+.rts2_cache_umd/
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variable files
+.env
+.env.development.local
+.env.test.local
+.env.production.local
+.env.local
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+out
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+# Comment in the public line in if your project uses Gatsby and not Next.js
+# https://nextjs.org/blog/next-9-1#public-directory-support
+# public
+
+# vuepress build output
+.vuepress/dist
+
+# vuepress v2.x temp and cache directory
+.temp
+.cache
+
+# vitepress build output
+**/.vitepress/dist
+
+# vitepress cache directory
+**/.vitepress/cache
+
+# Docusaurus cache and generated files
+.docusaurus
+
+# Serverless directories
+.serverless/
+
+# FuseBox cache
+.fusebox/
+
+# DynamoDB Local files
+.dynamodb/
+
+# TernJS port file
+.tern-port
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# yarn v2
+.yarn/cache
+.yarn/unplugged
+.yarn/build-state.yml
+.yarn/install-state.gz
+.pnp.*
+
+# ---> Python
+# Byte-compiled / optimized / DLL files
+__pycache__/
+*.py[cod]
+*$py.class
+
+# C extensions
+*.so
+
+# Distribution / packaging
+.Python
+build/
+develop-eggs/
+dist/
+downloads/
+eggs/
+.eggs/
+lib/
+lib64/
+parts/
+sdist/
+var/
+wheels/
+share/python-wheels/
+*.egg-info/
+.installed.cfg
+*.egg
+MANIFEST
+
+# PyInstaller
+#  Usually these files are written by a python script from a template
+#  before PyInstaller builds the exe, so as to inject date/other infos into it.
+*.manifest
+*.spec
+
+# Installer logs
+pip-log.txt
+pip-delete-this-directory.txt
+
+# Unit test / coverage reports
+htmlcov/
+.tox/
+.nox/
+.coverage
+.coverage.*
+.cache
+nosetests.xml
+coverage.xml
+*.cover
+*.py,cover
+.hypothesis/
+.pytest_cache/
+cover/
+
+# Translations
+*.mo
+*.pot
+
+# Django stuff:
+*.log
+local_settings.py
+db.sqlite3
+db.sqlite3-journal
+
+# Flask stuff:
+instance/
+.webassets-cache
+
+# Scrapy stuff:
+.scrapy
+
+# Sphinx documentation
+docs/_build/
+
+# PyBuilder
+.pybuilder/
+target/
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+#   For a library or package, you might want to ignore these files since the code is
+#   intended to run in multiple environments; otherwise, check them in:
+# .python-version
+
+# pipenv
+#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
+#   However, in case of collaboration, if having platform-specific dependencies or dependencies
+#   having no cross-platform support, pipenv may install dependencies that don't work, or not
+#   install all needed dependencies.
+#Pipfile.lock
+
+# UV
+#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#uv.lock
+
+# poetry
+#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
+#   This is especially recommended for binary packages to ensure reproducibility, and is more
+#   commonly ignored for libraries.
+#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
+#poetry.lock
+
+# pdm
+#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
+#pdm.lock
+#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
+#   in version control.
+#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
+.pdm.toml
+.pdm-python
+.pdm-build/
+
+# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
+__pypackages__/
+
+# Celery stuff
+celerybeat-schedule
+celerybeat.pid
+
+# SageMath parsed files
+*.sage.py
+
+# Environments
+.env
+.venv
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Spyder project settings
+.spyderproject
+.spyproject
+
+# Rope project settings
+.ropeproject
+
+# mkdocs documentation
+/site
+
+# mypy
+.mypy_cache/
+.dmypy.json
+dmypy.json
+
+# Pyre type checker
+.pyre/
+
+# pytype static type analyzer
+.pytype/
+
+# Cython debug symbols
+cython_debug/
+
+# PyCharm
+#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
+#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
+#  and can be added to the global gitignore or merged into this file.  For a more nuclear
+#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
+#.idea/
+
+# Ruff stuff:
+.ruff_cache/
+
+# PyPI configuration file
+.pypirc
+
diff --git a/LICENSE b/LICENSE
new file mode 100644
index 0000000..b6aba87
--- /dev/null
+++ b/LICENSE
@@ -0,0 +1,18 @@
+MIT License
+
+Copyright (c) 2025 neuxdotdev
+
+Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
+associated documentation files (the "Software"), to deal in the Software without restriction, including 
+without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
+copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
+following conditions:
+
+The above copyright notice and this permission notice shall be included in all copies or substantial 
+portions of the Software.
+
+THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
+LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO 
+EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
+IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
+USE OR OTHER DEALINGS IN THE SOFTWARE.
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..1a634c6
--- /dev/null
+++ b/README.md
@@ -0,0 +1,3 @@
+# snipets
+
+a very complete starterkit code project place
\ No newline at end of file
```

---

