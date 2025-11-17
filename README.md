# snipets

This repository provides a comprehensive and maintainable collection of `.gitignore` files, open source software licenses, and project boilerplate templates. It is designed to support software development projects across multiple programming languages, ecosystems, operating systems, and development workflows.

The goal of this project is to offer a unified reference that enables developers to initialize repositories quickly and consistently, while avoiding accidental commits of temporary files, credentials, build artifacts, system files, or other non-versioned assets.

---

## 1. Repository Structure

The repository is organized into several key directories:

```

.gitignore                    Base .gitignore for the repository
global-software-licenses.txt  Aggregated list of recognized licenses
licenses/                     SPDX-aligned license texts
shared/configs/               Editor and formatter configurations
shared/gitignore/             Collection of categorized .gitignore templates
templates/                    Project scaffolding and boilerplate templates
.github/, .gitea/             Issue templates, PR templates, CI configurations

````

### 1.1 Gitignore Collections

The directory `shared/gitignore/` includes `.gitignore` templates for:

- Languages: C, C++, C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and others
- Web and frontend: Astro, Next.js, Nuxt, Remix, Svelte, Vite, React, Node, Bun, Deno
- Mobile and game engines: Android, iOS/Xcode, React Native, Flutter, Unity, Unreal, Godot
- DevOps and infrastructure: Docker, Kubernetes, Helm, Ansible, Terraform, Pulumi
- AI/ML and scientific computing: Conda, Poetry, HuggingFace, TensorFlow, PyTorch, Jupyter
- Operating systems: Windows, macOS, Linux
- Editors and IDEs: VSCode, JetBrains, Vim, Emacs, Sublime, Eclipse
- Package managers: npm, yarn, pnpm, pip, pdm, uv

### 1.2 Software Licenses

The directory `shared/licenses/` contains SPDX-compliant license texts, for example:

- Apache License 2.0
- MIT License
- GNU GPL 2.0 and 3.0
- GNU LGPL 2.1 and 3.0
- BSD 2-Clause and BSD 3-Clause
- MPL 2.0
- EPL 2.0
- CDDL 1.0
- BSL 1.0
- Academic Free License 3.0
- Unlicense
- WTFPL
- Zlib
- Creative Commons: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0

Each license file follows naming conventions consistent with SPDX identifiers.

### 1.3 Project Templates

Located in `templates/`, covering:

- Backend: FastAPI, Node Express, Go Fiber, Bun, Rust Axum
- CLI: Go Cobra, Node Commander, Python Typer
- DevOps: Docker, Kubernetes, Terraform, Ansible
- Documentation: Sphinx, MkDocs, Docusaurus
- Mobile: Flutter, React Native
- Web: Astro, Vanilla JS, Vite/React, SvelteKit, Next.js

---

## 2. Usage Instructions

### 2.1 Initialize a .gitignore from templates

Example for Python and VSCode:

```bash
cat shared/gitignore/python.gitignore shared/gitignore/vscode.gitignore > .gitignore
````

### 2.2 Selecting a software license

Copy any license from `shared/licenses/` into the repository root as `LICENSE`:

```bash
cp shared/licenses/MIT.txt LICENSE
```

### 2.3 Project Template Initialization

Example using FastAPI backend:

```bash
cp -r templates/backend/python-fastapi/* .
```

---

## 3. Compatibility and Standards

This project aligns with:

* SPDX license identifiers: [https://spdx.org/licenses/](https://spdx.org/licenses/)
* Gitignore template conventions used by leading version control hosting platforms
* POSIX-compatible text formatting
* UTF-8 encoding for full language compatibility

---

## 4. Contribution Guidelines

Contributions are welcome. Areas where contributions are valuable include:

* New `.gitignore` templates
* Additional SPDX-licensed texts
* Improvements to project scaffolding templates
* Automated generation tools and scripts
* Documentation enhancements

Please review the following documents before contributing:

* `CONTRIBUTING.md`
* `CODE_OF_CONDUCT.md`
* `SECURITY.md`

---

## 5. Security Policy

Security vulnerabilities should not be reported via public issues. Follow the security disclosure process described in:

```
SECURITY.md
```

---

## 6. License

This repository is distributed under the MIT License. Individual license files included in this repository retain their original terms, authorship, and compatibility requirements.

---

## 7. Acknowledgments

This project references open standards and publicly available information from long-standing open source communities, legal organizations, and contributors who have advanced open licensing and software reliability practices.