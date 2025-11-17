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

