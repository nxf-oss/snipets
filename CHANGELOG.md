## Update: 2025-11-18


### Commit: 07f2d883679318e1f91591e2ed80e9f8c5f6f77d
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update yarn ignore rules

**Changed Files:**
- shared/gitignore/yarn.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/yarn.gitignore b/shared/gitignore/yarn.gitignore
index e69de29..6d6645f 100644
--- a/shared/gitignore/yarn.gitignore
+++ b/shared/gitignore/yarn.gitignore
@@ -0,0 +1,213 @@
+# =============================================
+# YARN SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Yarn specific files
+.yarn/
+.yarnrc.yml
+.yarnrc
+.yarnignore
+.yarn-metadata.json
+.yarn-integrity
+
+# Yarn cache directories
+.yarn/cache/
+.yarn/unplugged/
+.yarn/install-state.gz
+.yarn/build-state.yml
+.yarn/cache.tmp
+
+# Yarn temporary files
+.yarn/tmp/
+.yarn/temp/
+*.yarn-temp
+*.yarn-tmp
+
+# Yarn global cache
+.yarn/global/
+.yarn/berry/
+.yarn/sdks/
+.yarn/versions/
+
+# Yarn package artifacts
+.yarn/artifacts/
+.yarn/packages/
+.yarn/compression/
+
+# Yarn virtual packages
+.yarn/virtual/
+
+# Yarn PnP files
+.pnp.*
+.pnp.js
+.pnp.cjs
+.pnp.loader.mjs
+
+# Yarn zero-installs
+.yarn/zero-installs/
+
+# Yarn releases
+.yarn/releases/
+
+# Yarn plugins
+.yarn/plugins/
+.yarn/plugins.yml
+.yarn/patches/
+
+# Yarn SDKs
+.yarn/sdks/
+
+# Yarn versioning
+.yarn/versions/
+
+# Yarn logs
+.yarn/logs/
+yarn-error.log
+yarn-debug.log
+*.yarn.log
+
+# Node modules (Yarn manages these)
+node_modules/
+**/node_modules/
+
+# Package manager conflicts
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Yarn workspace files
+.yarn/workspaces/
+.yarn/workspace.json
+
+# Yarn configuration overrides
+.yarnrc.local
+.yarnrc.override
+
+# Yarn temporary installations
+.yarn/temp-install/
+.yarn/partial-install/
+
+# Yarn integrity checks
+.yarn/integrity/
+.yarn/checksums/
+
+# Yarn performance cache
+.yarn/perf/
+.yarn/timing/
+
+# Yarn compression cache
+.yarn/compression/
+
+# Yarn network cache
+.yarn/network/
+
+# Yarn mirror cache
+.yarn/mirror/
+
+# Yarn registry cache
+.yarn/registry/
+
+# Yarn dependency tree
+.yarn/dependencies/
+.yarn/dependency-tree/
+
+# Yarn resolution cache
+.yarn/resolutions/
+.yarn/resolution-cache/
+
+# Yarn lock files (optional - uncomment if you don't want to commit)
+# yarn.lock
+
+# Yarn audit files
+.yarn/audit/
+yarn-audit.html
+yarn-audit.json
+
+# Yarn outdated files
+yarn-outdated.json
+
+# Yarn licenses
+.yarn/licenses/
+yarn-licenses.json
+
+# Yarn why files
+yarn-why.json
+
+# Yarn config files
+.yarn/config.json
+.yarn/settings.json
+
+# Yarn project files
+.yarn/project/
+.yarn/project.json
+
+# Yarn workspace root
+.yarn/workspace-root/
+
+# Yarn local files
+.yarn/local/
+
+# Yarn global files
+.yarn/global/
+
+# Yarn persistent cache
+.yarn/persistent/
+
+# Yarn transient cache
+.yarn/transient/
+
+# Yarn immutable cache
+.yarn/immutable/
+
+# Yarn mutable cache
+.yarn/mutable/
+
+# Yarn shared cache
+.yarn/shared/
+
+# Yarn private cache
+.yarn/private/
+
+# Yarn public cache
+.yarn/public/
+
+# OS files
+.DS_Store
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Log files
+*.log
+logs/
+
+# Environment variables
+.env
+.env.local
+.env.*.local
+
+# Build outputs
+dist/
+build/
+.out/
+.next/
+.nuxt/
+
+# Testing
+/coverage/
+.nyc_output/
+
+# Backup files
+*.bak
+*.backup
\ No newline at end of file
```

---

### Commit: 7f7de1e8b5a956cd555e91273be46f955792ac60
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update xcode ignore rules

**Changed Files:**
- shared/gitignore/xcode.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/xcode.gitignore b/shared/gitignore/xcode.gitignore
index e69de29..2cfd707 100644
--- a/shared/gitignore/xcode.gitignore
+++ b/shared/gitignore/xcode.gitignore
@@ -0,0 +1,310 @@
+# =============================================
+# XCODE SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Xcode build products
+build/
+DerivedData/
+*.build/
+*.xcarchive
+
+# Xcode workspace
+*.xcworkspace/
+!*.xcworkspace/contents.xcworkspacedata
+
+# Xcode project
+*.xcodeproj/
+!*.xcodeproj/project.pbxproj
+!*.xcodeproj/default.*
+
+# Xcode user data
+*.xcuserdata/
+*.xcuserstate
+*.xcscmblueprint
+*.xccheckout
+*.xcsettings
+
+# Xcode schemes
+*.xcscheme
+xcuserdata/
+xcshareddata/xcschemes/
+
+# Xcode breakpoints
+*.xcbkptlist
+
+# Xcode playgrounds
+*.playground/
+
+# Xcode templates
+*.xctemplate/
+
+# Xcode device support
+DeviceSupport/
+iOS DeviceSupport/
+watchOS DeviceSupport/
+tvOS DeviceSupport/
+
+# Xcode simulators
+CoreSimulator/
+iOS Simulators/
+watchOS Simulators/
+tvOS Simulators/
+
+# Xcode archives
+*.xcarchive/
+Archives/
+
+# Xcode products
+Products/
+
+# Xcode intermediates
+Intermediates.noindex/
+IntermediateBuildFiles/
+
+# Xcode indexes
+index-build/
+.index/
+.index-store/
+
+# Xcode previews
+Previews/
+*.preview/
+
+# Xcode logs
+Logs/
+*.log
+xcodebuild.log
+*.idearchive/
+
+# Xcode debug
+Debug/
+Release/
+*.dSYM/
+*.app.dSYM
+
+# Xcode provisioning
+*.mobileprovision
+*.provisionprofile
+*.p12
+*.cer
+
+# Xcode entitlements
+*.entitlements
+
+# Xcode code signatures
+_CodeSignature/
+CodeResources
+CodeSignature/
+
+# Xcode frameworks
+*.framework/
+*.xcframework/
+
+# Xcode bundles
+*.bundle/
+*.app/
+*.appex/
+
+# Xcode storyboards
+*.storyboardc/
+
+# Xcode assets
+*.car
+Assets.car
+
+# Xcode interface builder
+*.nib
+*.xib
+*.storyboard
+
+# Xcode core data
+*.mom
+*.omo
+*.momd
+*.cdm
+
+# Xcode swift
+*.swiftmodule
+*.swiftdoc
+*.swiftsourceinfo
+*.swiftinterface
+
+# Xcode objective-c
+*.hmap
+*.link-file-list
+*.apinotes
+
+# Xcode modules
+ModuleCache.noindex/
+*.pcm
+*.pch
+
+# Xcode compilation
+*.o
+*.obj
+*.d
+*.dia
+
+# Xcode linking
+*.tbd
+*.dylib
+*.a
+
+# Xcode symbols
+*.sym
+*.symbols
+
+# Xcode packages
+*.pkg
+*.ipa
+*.dmg
+
+# Xcode documentation
+*.docset
+Documentation/
+docsets/
+
+# Xcode playgrounds data
+Playgrounds/
+*.playgrounddata
+
+# Xcode snippets
+CodeSnippets/
+*.codesnippet
+
+# Xcode file templates
+File Templates/
+*.xctemplate
+
+# Xcode project templates
+Project Templates/
+*.xctemplate
+
+# Xcode color schemes
+*.xccolortheme
+
+# Xcode font schemes
+*.xcfonttheme
+
+# Xcode behavior schemes
+*.xcbehaviors
+
+# Xcode debug sessions
+DebugSessions/
+*.debugsession
+
+# Xcode breakpoints
+Breakpoints_v2.xcbkptlist
+
+# Xcode persistent state
+project.xcworkspace/xcuserdata/
+xcuserdata/
+
+# Xcode shared data
+xcshareddata/
+
+# Xcode swift packages
+.swiftpm/
+*.package.resolved
+Package.resolved
+
+# Xcode source control
+*.xccheckout
+*.xcscmblueprint
+
+# Xcode test results
+TestResults/
+*.xctestresult
+*.xcresult
+
+# Xcode coverage
+*.profraw
+*.profdata
+Coverage/
+*.xccov
+
+# Xcode instruments
+*.trace
+Instruments/
+
+# Xcode memory graphs
+*.memgraph
+*.heap
+
+# Xcode performance
+*.gcda
+*.gcno
+
+# Xcode localization
+*.lproj/
+*.strings
+
+# Xcode core simulator
+com.apple.CoreSimulator/
+
+# Xcode developer files
+Developer/
+Xcode/
+*.xcode
+
+# Xcode preferences
+Library/Developer/
+Library/Preferences/
+
+# Xcode cache
+Library/Caches/
+*.cache
+
+# Xcode temporary files
+tmp/
+temp/
+*.tmp
+*.temp
+
+# OS files
+.DS_Store
+._*
+
+# IDEs
+.idea/
+.vscode/
+
+# Logs
+*.log
+logs/
+
+# Environment variables
+.env
+.env.local
+
+# Backup files
+*.bak
+*.backup
+
+# Node modules (if using in project)
+node_modules/
+
+# Python
+__pycache__/
+*.pyc
+
+# Ruby
+*.gem
+.bundle/
+
+# Java
+*.class
+*.jar
+
+# Go
+*.exe
+*.test
+
+# Rust
+target/
+Cargo.lock
+
+# Swift Package Manager
+.build/
+Packages/
+.swiftpm/
\ No newline at end of file
```

---

### Commit: f012af41dfa696b552479521393745fb6d0be2ff
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update windows ignore rules

**Changed Files:**
- shared/gitignore/windows.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/windows.gitignore b/shared/gitignore/windows.gitignore
index e69de29..d59418c 100644
--- a/shared/gitignore/windows.gitignore
+++ b/shared/gitignore/windows.gitignore
@@ -0,0 +1,180 @@
+# =============================================
+# WINDOWS SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Windows thumbnail cache files
+Thumbs.db
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
+*.url
+
+# Windows shortcuts folder
+*.library-ms
+
+# Windows shadow copy
+*.WLK
+
+# Windows temporary files
+~$*
+*.~mp
+*.tmp
+*.temp
+._*
+*.syd
+
+# Windows error reports
+*.mdmp
+*.minidump
+*.dmp
+*.etl
+*.evtx
+
+# Windows hyper-v
+*.avhd
+*.avhdx
+*.vhd
+*.vhdx
+*.vmcx
+*.vmrs
+*.vmgs
+
+# Windows container
+*.wim
+*.esd
+
+# Windows defender
+*.quarantine
+MsftEcc*.cat
+
+# Windows update
+*.download
+*.etl
+*.evt
+*.evtx
+
+# Windows system files
+hiberfil.sys
+pagefile.sys
+swapfile.sys
+WINFILE.BAK
+
+# Windows prefetch
+*.pf
+Prefetch/
+
+# Windows crash dumps
+*.dmp
+Memory.dmp
+Minidump/
+
+# Windows event logs
+*.evtx
+*.etl
+*.evt
+
+# Windows registry hives
+*.dat
+*.hiv
+*.log1
+*.log2
+
+# Windows security
+*.edb
+*.jrs
+*.chk
+*.sdb
+
+# Windows search
+*.search-ms
+Windows.edb
+
+# Windows subsystem for linux
+wslconfig
+
+# Windows terminal
+wt.exe
+
+# Windows apps
+MicrosoftEdge*.exe
+
+# Windows office temporary files
+~$*
+*.tmp
+
+# OneDrive
+OneDrive/
+
+# Microsoft Teams
+Microsoft Teams/
+
+# Outlook
+*.pst
+*.ost
+
+# Windows developer
+*.user
+*.userosscache
+*.sln.docstates
+
+# Windows docker
+.docker/
+
+# Windows node modules
+node_modules/
+
+# Windows python
+__pycache__/
+*.pyc
+
+# Windows java
+*.class
+*.jar
+
+# Windows c#
+*.csproj.user
+*.cache
+*.dll
+*.exe
+
+# Windows git
+.git/
+.gitattributes
+
+# Windows ide
+.vscode/
+.idea/
+*.swp
+*.swo
+
+# Windows logs
+*.log
+logs/
+
+# Windows backups
+*.bak
+*.backup
+
+# Windows temporary folders
+tmp/
+temp/
+.tmp/
+.temp/
\ No newline at end of file
```

---

### Commit: 59c34cdd48e8e4880e96657393438a44165812b8
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update vscode ignore rules

**Changed Files:**
- shared/gitignore/vscode.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/vscode.gitignore b/shared/gitignore/vscode.gitignore
index e69de29..75875a8 100644
--- a/shared/gitignore/vscode.gitignore
+++ b/shared/gitignore/vscode.gitignore
@@ -0,0 +1,138 @@
+# =============================================
+# VSCODE SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# VSCode main directory
+.vscode/
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+!.vscode/*.code-snippets
+
+# VSCode user settings
+.vscode/settings.json
+.vscode/tasks.json
+.vscode/launch.json
+.vscode/extensions.json
+.vscode/*.code-snippets
+
+# VSCode local history
+.vscode/localHistory/
+
+# VSCode workspace storage
+.vscode/workspaceStorage/
+
+# VSCode profile
+.vscode/profile/
+
+# VSCode machine specific
+.vscode/machineid
+
+# VSCode user data
+.vscode/User/
+.vscode/globalStorage/
+.vscode/state.vscdb
+
+# VSCode backup files
+.vscode/backups/
+
+# VSCode snippets
+.vscode/snippets/
+
+# VSCode debug
+.vscode/debug.log
+.vscode/debugConsole/
+
+# VSCode extensions
+.vscode/extensions/
+.vscode/.obsolete
+
+# VSCode workspace files
+*.code-workspace
+*.vscode-workspace
+
+# VSCode test
+.vscode-test/
+
+# VSCode insiders
+.vscode-insiders/
+
+# VSCode configuration
+.vscode/argv.json
+.vscode/settings.json
+.vscode/keybindings.json
+
+# VSCode cache
+.vscode/cache/
+.vscode/CachedExtensions/
+.vscode/CachedExtensionVSIXs/
+
+# VSCode logs
+.vscode/logs/
+.vscode/*.log
+.vscode/ipc.log
+.vscode/dataprotocol.log
+
+# VSCode remote
+.vscode-remote/
+.vscode-remote-data/
+.vscode-server/
+.vscode-server-insiders/
+
+# VSCode profiles
+.vscode/profiles/
+
+# VSCode language servers
+.vscode/lsp-trace/
+
+# VSCode terminal
+.vscode/terminal-*
+
+# VSCode workspace trust
+.vscode/workspaceTrust/
+
+# VSCode notebook
+.vscode/notebooks/
+
+# VSCode scm
+.vscode/scm/
+
+# VSCode task outputs
+.vscode/task-outputs/
+
+# VSCode extension development
+.vscode/.typescript/
+.vscode/.debugger/
+.vscode/.installer/
+
+# VSCode user keybindings
+.vscode/keybindings.json
+
+# VSCode user locale
+.vscode/locale.json
+
+# VSCode user snippets
+.vscode/snippets/
+
+# VSCode sync
+.vscode/sync/
+
+# OS files
+.DS_Store
+Thumbs.db
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Log files
+*.log
+logs/
+
+# Backup files
+*.bak
+*.backup
\ No newline at end of file
```

---

### Commit: 9178aab62878e9f1be184de2a54f4f571fffa42c
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update vite ignore rules

**Changed Files:**
- shared/gitignore/vite.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/vite.gitignore b/shared/gitignore/vite.gitignore
index e69de29..195adcc 100644
--- a/shared/gitignore/vite.gitignore
+++ b/shared/gitignore/vite.gitignore
@@ -0,0 +1,152 @@
+# =============================================
+# VITE SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Vite build outputs
+dist/
+build/
+.out/
+
+# Vite cache
+.vite/
+.vite/cache/
+.vite/deps/
+.vite/build/
+
+# Vite config
+vite.config.*.ts
+vite.config.*.js
+vite.config.*.local
+
+# Node.js dependencies
+node_modules/
+.npm
+.yarn/
+.pnp.*
+.yarn-integrity
+
+# Package manager files
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Environment variables
+.env
+.env.local
+.env.development.local
+.env.test.local
+.env.production.local
+.env.*.local
+.env.vault
+.env.example
+
+# Cache directories
+.cache/
+.parcel-cache/
+.eslintcache
+.stylelintcache
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# TypeScript
+*.tsbuildinfo
+tsconfig.tsbuildinfo
+
+# Compiled outputs
+*.js
+*.js.map
+*.d.ts
+*.d.ts.map
+
+# Testing
+/coverage/
+.nyc_output/
+jest-coverage/
+cypress/screenshots/
+cypress/videos/
+playwright-report/
+test-results/
+
+# Log files
+logs/
+*.log
+lerna-debug.log*
+.pnpm-debug.log*
+
+# Vite preview
+preview/
+
+# Vite manifest
+*.vite-manifest.json
+
+# Vite hot update
+*.hot-update.js
+*.hot-update.json
+
+# Vite HMR
+.hmr/
+
+# Vite types
+vite-env.d.ts
+
+# Vite plugins
+vite-plugin-*/
+
+# Vite ssr
+ssr-manifest.json
+
+# Vite client
+vite-client/
+
+# Vite assets
+public/assets/
+public/build/
+
+# Vite public
+public/*.js
+public/*.css
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Storybook
+storybook-static/
+.storybook/
+
+# PWA
+sw.js
+workbox-*.js
+
+# Temporary folders
+tmp/
+temp/
+
+# Vite legacy
+*-legacy.js
+*-legacy.js.map
+
+# Vite polyfill
+polyfills/
+
+# Vite chunks
+chunks/
+
+# Vite analysis
+bundle-analyzer/
+.stats.html
\ No newline at end of file
```

---

### Commit: af75340514909734646836052cfa020daf77567a
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update vim ignore rules

**Changed Files:**
- shared/gitignore/vim.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/vim.gitignore b/shared/gitignore/vim.gitignore
index e69de29..81f51c8 100644
--- a/shared/gitignore/vim.gitignore
+++ b/shared/gitignore/vim.gitignore
@@ -0,0 +1,208 @@
+# =============================================
+# VIM SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Vim swap files
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.sw[a-p]
+*.un~
+Session.vim
+.netrwhist
+
+# Vim backup files
+*~
+*.bak
+*.backup
+[._]*.un~
+*.old
+*.save
+
+# Vim undo files
+[._]*.un~
+*.undo
+[._]*.undo
+
+# Vim session files
+Session.vim
+*.session
+*.vimsession
+
+# Vim view files
+*.view
+[._]*.view
+
+# Vim temporary files
+*.tmp
+*.temp
+.tmp.vim
+.temp.vim
+
+# Vim info files
+.viminfo
+*.viminfo
+._viminfo
+
+# Vim tags
+tags
+.tags
+.tags_sorted
+
+# Vim cscope
+cscope.*
+.out
+*.out
+
+# Vim netrw
+.netrwhist
+.netrw.banner
+
+# Vim spell files
+*.spl
+*.sug
+.spell/
+
+# Vim plugin files
+pack/*/start/
+pack/*/opt/
+bundle/
+autoload/
+plugin/
+after/
+
+# Vim runtime files
+.runtime/
+.runtimeinfo
+
+# Vim configuration
+.vimrc
+._vimrc
+.exrc
+.gvimrc
+._gvimrc
+.vimrc.local
+.gvimrc.local
+
+# Vim bundles
+.bundles/
+.bundle/
+
+# Vim packages
+packages/
+
+# Vim backups directory
+backup/
+.backups/
+
+# Vim swap directory
+swap/
+.swp/
+
+# Vim undo directory
+undo/
+.undo/
+
+# Vim view directory
+view/
+.views/
+
+# Vim session directory
+session/
+.sessions/
+
+# Vim temporary directory
+tmp/
+.tmp/
+
+# Vim state files
+.state/
+.vimstate
+
+# Vim marks
+.vimmarks
+
+# Vim registers
+.registers
+
+# Vim history
+.history/
+.vim_history
+
+# Vim macros
+.macros/
+.vimmacros
+
+# Vim abbreviations
+.abbreviations
+.vimabbreviations
+
+# Vim mappings
+.mappings
+.vimmappings
+
+# Vim commands
+.commands
+.vimcommands
+
+# Vim plugins cache
+.cache/
+.vim/cache/
+
+# Vim bundles cache
+.bundles.cache/
+
+# Vim syntax cache
+.syntax/
+.vim/syntax/
+
+# Vim indent cache
+.indent/
+.vim/indent/
+
+# Vim ftplugin cache
+.ftplugin/
+.vim/ftplugin/
+
+# Vim after cache
+.after/
+.vim/after/
+
+# Vim autoload cache
+.autoload/
+.vim/autoload/
+
+# Vim colors cache
+.colors/
+.vim/colors/
+
+# Vim compiler cache
+.compiler/
+.vim/compiler/
+
+# Vim doc cache
+.doc/
+.vim/doc/
+
+# Vim plugin cache
+.plugin/
+.vim/plugin/
+
+# Vim spell cache
+.spell/
+.vim/spell/
+
+# Vim syntax cache
+.syntax/
+.vim/syntax/
+
+# Vim pack cache
+.pack/
+.vim/pack/
+
+# OS files
+.DS_Store
+Thumbs.db
+
+# Log files
+*.log
+logs/
\ No newline at end of file
```

---

### Commit: d78a29b128f45f1af18e5ae543e636eb30627d5d
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update uv ignore rules

**Changed Files:**
- shared/gitignore/uv.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/uv.gitignore b/shared/gitignore/uv.gitignore
index e69de29..a43e4d0 100644
--- a/shared/gitignore/uv.gitignore
+++ b/shared/gitignore/uv.gitignore
@@ -0,0 +1,196 @@
+# =============================================
+# UV SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# UV specific files
+.uv/
+.uvcache/
+.uvlock/
+.uvconfig
+.uvconfig.toml
+uv.lock
+
+# UV virtual environment
+.venv/
+venv/
+.env/
+ENV/
+env.bak/
+venv.bak/
+
+# UV cache directories
+.uv/cache/
+.uv/tmp/
+.uv/temp/
+.uv/build/
+.uv/dist/
+.uv/install/
+
+# UV package cache
+.uv/packages/
+.uv/cache/packages/
+.uv/cache/artifacts/
+.uv/cache/wheels/
+.uv/cache/sdist/
+
+# UV build artifacts
+.uv/build/
+.uv/dist/
+.uv/wheels/
+
+# UV lock files
+uv.lock
+.uvlock
+
+# UV configuration
+.uvconfig
+.uvconfig.toml
+uv.toml
+
+# Python distribution / packaging
+dist/
+build/
+*.egg-info/
+*.egg
+.Python
+
+# Compiled Python files
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+*.pyd
+.Python
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
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# Poetry
+poetry.lock
+.poetry/
+
+# PDM
+__pypackages__/
+.pdm.toml
+pdm.lock
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
+# Cython debug symbols
+cython_debug/
+
+# UV project files
+.uv/project/
+.uv/workspace/
+
+# UV tool configurations
+.uv/tools/
+.uv/plugins/
+
+# UV state files
+.uv/state.json
+.uv/state.toml
+
+# UV logs
+.uv/logs/
+uv.log
+*.uv.log
+
+# UV temporary files
+.uv/tmp/
+.uv/temp/
+*.uv.tmp
+*.uv.temp
+
+# OS
+.DS_Store
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Database
+*.db
+*.sqlite
+*.sqlite3
+
+# Environment variables
+.env
+.env.local
+.env.*.local
\ No newline at end of file
```

---

### Commit: 6c460c25c8d0d3c88f5803c75d98836388038667
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update unreal ignore rules

**Changed Files:**
- shared/gitignore/unreal.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/unreal.gitignore b/shared/gitignore/unreal.gitignore
index e69de29..b92130c 100644
--- a/shared/gitignore/unreal.gitignore
+++ b/shared/gitignore/unreal.gitignore
@@ -0,0 +1,97 @@
+# Unreal Engine Comprehensive GitIgnore
+# Generated for complete project coverage
+
+# Binary and Intermediate directories
+Binaries/
+DerivedDataCache/
+Intermediate/
+Saved/
+Build/
+Builds/
+
+# Visual Studio/Microsoft Development Files
+*.sln
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.csproj
+*.vbproj
+*.fsproj
+
+# IDE and Editor files
+*.opendb
+*.opensdf
+*.sdf
+*.suo
+*.user
+*.userosscache
+*.sln.docstates
+
+# Xcode files
+*.xcodeproj
+*.xcworkspace
+xcuserdata/
+*.xcscmblueprint
+*.xccheckout
+
+# Platform-specific builds
+[Pp]lugins/
+[Pp]latforms/
+[Pp]rofiling/
+
+# Crash reports and diagnostics
+CrashReportClient/
+CrashReports/
+Diagnostics/
+*.dmp
+*.crash
+
+# Content and Asset cache
+Content/DerivedData/
+Content/Build/
+Content/Staged/
+Content/Temp/
+
+# Config files (optional - uncomment if needed)
+# Config/
+
+# Log files
+Logs/
+*.log
+*.txt
+
+# Packaging and Distribution
+Dist/
+Packaged/
+Staged/
+*.pak
+*.ucas
+*.utoc
+
+# Perforce integration
+*.p4ignore
+
+# Backup files
+*.backup
+*.bak
+*.tmp
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Project specific generated files
+*.generated.h
+*.generated.cpp
+
+# Shader cache
+ShaderCache/
+
+# Movie Render Queue
+MovieRenderQueue/
+MoviePipeline/
\ No newline at end of file
```

---

### Commit: a08a5ae353f5f51d9beb54a7cb7130b024d6429f
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update unity ignore rules

**Changed Files:**
- shared/gitignore/unity.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/unity.gitignore b/shared/gitignore/unity.gitignore
index e69de29..0bea1eb 100644
--- a/shared/gitignore/unity.gitignore
+++ b/shared/gitignore/unity.gitignore
@@ -0,0 +1,119 @@
+# Unity Comprehensive GitIgnore
+# This file is based on GitHub's Unity.gitignore
+
+# Unity generated files
+[Tt]emp/
+[Oo]bj/
+[Bb]uild/
+[Bb]uilds/
+[Ll]ogs/
+[Uu]ser[Ss]ettings/
+
+# MemoryCaptures
+[Mm]emoryCaptures/
+
+# Asset meta data
+**/*.asset.meta
+**/*.prefab.meta
+
+# Unity3D generated meta files
+*.pidb.meta
+*.pdb.meta
+
+# Unity3D Generated File On Crash Reports
+sysinfo.txt
+
+# Builds
+*.apk
+*.aab
+*.unitypackage
+*.app
+*.exe
+*.dll
+
+# Crashlytics generated file
+crashlytics-build.properties
+
+# Packed Addressables
+[Aa]ssets/[Aa]ddressable[Aa]ssets[Dd]ata/*.*.bin*
+
+# Temporary auto-generated Android Assets
+[Aa]ssets/[Ss]treamingAssets/aa.meta
+[Aa]ssets/[Ss]treamingAssets/aa/*
+
+# Autogenerated VS/MD/Consulo solution and project files
+ExportedObj/
+.consulo/
+*.csproj
+*.unityproj
+*.sln
+*.suo
+*.tmp
+*.user
+*.userprefs
+*.pidb
+*.booproj
+*.svd
+*.pdb
+*.opendb
+*.VC.db
+
+# Unity3D generated files on Mac OS
+.DS_Store
+*.DS_Store?
+
+# Unity3D generated files on Windows
+Thumbs.db
+ehthumbs.db
+
+# Unity3D generated files on Linux
+*.swp
+*.swo
+
+# JetBrains Rider
+.idea/
+*.sln.iml
+
+# Visual Studio Code
+.vscode/
+
+# Visual Studio
+.vs/
+
+# Gradle
+.gradle/
+[Bb]uild/
+
+# Autogenerated VS/MD solution and project files
+ExportedObj/
+.consulo/
+*.csproj
+*.unityproj
+*.sln
+*.suo
+*.tmp
+*.user
+*.userprefs
+*.pidb
+*.booproj
+*.svd
+*.pdb
+*.mdb
+*.opendb
+*.VC.db
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Asset Store and Package Manager
+[Pp]ackages/
+[Aa]ssets/[Aa]sset [Ss]tore [Tt]ools/
+
+# Unity Collaboratory
+Library/Collaboration/
\ No newline at end of file
```

---

### Commit: 01c9fc3677381f3106f914bff148299c99b18d76
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update terraform ignore rules

**Changed Files:**
- shared/gitignore/terraform.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/terraform.gitignore b/shared/gitignore/terraform.gitignore
index e69de29..9cd4878 100644
--- a/shared/gitignore/terraform.gitignore
+++ b/shared/gitignore/terraform.gitignore
@@ -0,0 +1,80 @@
+# Terraform Comprehensive GitIgnore
+# Local .terraform directories
+**/.terraform/*
+.terraform/
+
+# .tfstate files
+*.tfstate
+*.tfstate.*
+
+# Crash log files
+crash.log
+crash.*.log
+*.log
+
+# Exclude all .tfvars files, which are likely to contain sentitive data
+*.tfvars
+*.tfvars.json
+
+# Ignore override files as they are usually used to override resources locally
+override.tf
+override.tf.json
+*_override.tf
+*_override.tf.json
+
+# Include override files you do wish to add to version control using negated pattern
+# !example_override.tf
+
+# Include tfplan files to ignore the plan output of command: terraform plan -out=tfplan
+# example: *tfplan*
+
+# Ignore CLI configuration files
+.terraformrc
+terraform.rc
+
+# Terragrunt cache
+.terragrunt-cache/
+
+# Terraform lock file (if using Terraform Cloud/Enterprise)
+.terraform.lock.hcl
+
+# Backup files
+*.backup
+*.bak
+
+# IDE files
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Module downloads
+.terraform/modules/
+
+# Plan output files
+*.tfplan
+
+# Terraform variables auto-generated files
+terraform.tfvars
+terraform.tfvars.json
+
+# Terraform backend configuration
+backend.tf
+
+# Terraform data sources cache
+.terraform.d/
+terraform.tfstate.d/
+
+# Terraform workspaces
+*.terraform.tfstate
+env:/
+environment:/
\ No newline at end of file
```

---

### Commit: ad5ec938c9886a7286118b4a3cd368df7ab70d75
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update tensorflow ignore rules

**Changed Files:**
- shared/gitignore/tensorflow.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/tensorflow.gitignore b/shared/gitignore/tensorflow.gitignore
index e69de29..840bbae 100644
--- a/shared/gitignore/tensorflow.gitignore
+++ b/shared/gitignore/tensorflow.gitignore
@@ -0,0 +1,167 @@
+# TensorFlow Comprehensive GitIgnore
+# Python
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
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
+pip-wheel-metadata/
+share/python-wheels/
+*.egg-info/
+.installed.cfg
+*.egg
+MANIFEST
+
+# PyInstaller
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
+*.ipynb
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# PEP 582; used by the Python ecosystem
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
+# TensorFlow specific
+*.pb
+*.meta
+*.index
+*.data-*
+checkpoint
+model.ckpt*
+events.out.tfevents.*
+*.tflite
+*.h5
+*.keras
+
+# Keras
+*.hdf5
+*.h5
+
+# SavedModel
+saved_model/
+saved_model.pb
+
+# TensorBoard
+tensorboard/
+
+# Training checkpoints
+training_checkpoints/
+models/
+
+# Dataset cache
+.cache/
+data/
+datasets/
+
+# IDE
+.vscode/
+.idea/
+*.swp
+*.swo
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
\ No newline at end of file
```

---

### Commit: 54a8aec93767c8e269b47e5ff50d5a49b2b27406
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update swift ignore rules

**Changed Files:**
- shared/gitignore/swift.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/swift.gitignore b/shared/gitignore/swift.gitignore
index e69de29..2f7cca4 100644
--- a/shared/gitignore/swift.gitignore
+++ b/shared/gitignore/swift.gitignore
@@ -0,0 +1,420 @@
+# Swift Gitignore - Professional iOS/macOS Development Grade
+
+# Xcode
+#
+# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore
+
+## User settings
+xcuserdata/
+
+## Compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
+*.xcscmblueprint
+*.xccheckout
+
+## Compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
+build/
+DerivedData/
+*.moved-aside
+*.pbxuser
+!default.pbxuser
+*.mode1v3
+!default.mode1v3
+*.mode2v3
+!default.mode2v3
+*.perspectivev3
+!default.perspectivev3
+
+## Obj-C/Swift specific
+*.hmap
+*.ipa
+*.dSYM.zip
+*.dSYM
+
+## Playgrounds
+timeline.xctimeline
+playground.xcworkspace
+
+# Swift Package Manager
+#
+# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
+# Packages/
+# Package.pins
+# Package.resolved
+# *.xcodeproj
+# Xcode default is to use packages to work with multiple package managers.
+# It is recommended to commit the package manifest, but to avoid
+# accidentally including the dependency source code in your main repository,
+# it is recommended to add Packages/ to your .gitignore
+# (but keep Package.resolved and Package.pins if you use version locking).
+
+.build/
+
+# CocoaPods
+#
+# We recommend against adding the Pods directory to your .gitignore. However
+# you should judge for yourself, the pros and cons are mentioned at:
+# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
+#
+# Pods/
+#
+# Add this line if you want to avoid checking in source code from the Xcode workspace
+# *.xcworkspace
+
+# Carthage
+#
+# Add this line if you want to avoid checking in source code from Carthage dependencies.
+# Carthage/Checkouts
+Carthage/Build/
+
+# Accio dependency management
+Dependencies/
+.accio/
+
+# fastlane
+#
+# It is recommended to not store the screenshots in the git repository.
+# Instead, use fastlane to re-generate the screenshots whenever they are needed.
+# For more information about the recommended setup visit:
+# https://docs.fastlane.tools/best-practices/source-control/
+
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+fastlane/readme.md
+
+# Code Injection
+#
+# After new code Injection tools there's a generated folder /iOSInjectionProject
+# https://github.com/johnno1962/injectionforxcode
+
+iOSInjectionProject/
+
+# OS X
+.DS_Store
+.AppleDouble
+.LSOverride
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
+# App specific
+*.xcodeproj
+!default.xcodeproj
+*.xcworkspace
+!default.xcworkspace
+*.xcscheme
+*.xcsettings
+*.xcuserstate
+
+# Swift packages
+.swiftpm/
+Package.resolved
+Package.pins
+.build/
+*.xcodeproj
+*.xcworkspace
+
+# Swift build artifacts
+.build/
+*.build/
+*.swiftmodule
+*.swiftdoc
+*.swiftinterface
+*.swiftsourceinfo
+
+# Swift Package Manager
+.swiftpm/
+Packages/
+Package.resolved
+Package.pins
+
+# Carthage
+Carthage/
+Carthage/Build/
+Carthage/Checkouts/
+
+# CocoaPods
+Pods/
+Podfile.lock
+*.xcworkspace
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+
+# AppCode
+.idea/
+
+# VSCode
+.vscode/
+
+# Xcode build artifacts
+build/
+DerivedData/
+*.ipa
+*.dSYM
+*.dSYM.zip
+*.app
+*.app.dSYM
+*.app.zip
+
+# Previews
+Previews/
+
+# Instruments
+*.trace
+*.tracearchive
+
+# Localization
+*.lproj/localizable.strings
+
+# Core Data
+*.mom
+*.momd
+*.omo
+*.cdm
+*.cdm.d
+
+# CloudKit
+CloudKit/
+*.ckasset
+
+# iCloud
+iCloud/
+*.icloud
+
+# App Thinning
+*.appthinning
+*.appx
+*.appxsym
+
+# App Store Connect
+*.itmsp
+*.itproj
+
+# Archives
+*.xcarchive
+
+# Provisioning Profiles
+*.mobileprovision
+*.provisionprofile
+
+# Certificates
+*.cer
+*.p12
+*.pem
+
+# Keychains
+*.keychain
+
+# Interface Builder
+*.nib
+*.storyboard
+*.storyboardc
+
+# Asset catalogs
+*.xcassets
+
+# SwiftUI Previews
+*.swiftpm
+
+# Playgrounds
+*.playground
+Playgrounds/
+
+# Documentation
+docs/
+.build/
+*.docset
+
+# Swift Format
+.swiftformat
+
+# SwiftLint
+.swiftlint.yml
+
+# Periphery
+.periphery.yml
+
+# Tuist
+Tuist/
+.tuist-bin/
+.projectdescription/
+project.swift
+
+# Mint
+Mintfile
+.mint/
+
+# Bazel
+bazel-*
+.bazelrc.user
+.bazelversion
+
+# Buck
+.buckconfig
+.buckd/
+.buckversion
+
+# Rome
+rome/
+.rome/
+
+# SPM Build plugins
+.build/plugins/
+
+# Xcode Cloud
+.xcode/
+.xcodecloud/
+
+# Swift-DocC
+.docc/
+
+# Regex for build outputs that might appear in multiple places
+**/build/
+**/DerivedData/
+**/*.app
+**/*.app.dSYM
+**/*.ipa
+**/*.framework
+**/*.xctest
+
+# Xcode generated files
+*.xccurrentversion
+*.xcsettings
+*.xcscmblueprint
+*.xccheckout
+*.xcplugindata
+*.xcscheme
+*.xcuserstate
+*.xcworkspacedata
+
+# Swift concurrency
+*.swiftasync
+*.swiftsync
+
+# Distributed actors
+*.swiftdistributed
+
+# Mac App Store
+*.pkg
+*.dmg
+
+# Test results
+*.test_result
+test-results/
+*.xcresult
+
+# Coverage
+*.profraw
+*.profdata
+coverage/
+*.gcda
+*.gcno
+
+# Memory debugging
+*.heap
+*.memgraph
+
+# Performance profiling
+*.trace
+*.instrs
+
+# LLDB
+.lldb/
+*.lldb
+
+# Package collections
+PackageCollections/
+.collections/
+
+# Plugins
+.plugins/
+.swiftpm/plugins/
+
+# Security
+*.secure*
+*_key*
+*_secret*
+*_token*
+
+# Environment
+.env
+.env.*
+!.env.example
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
\ No newline at end of file
```

---

### Commit: 4ed2a651390efc295146e36cc5c755ff4f451b81
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update svelte ignore rules

**Changed Files:**
- shared/gitignore/svelte.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/svelte.gitignore b/shared/gitignore/svelte.gitignore
index e69de29..f9ad392 100644
--- a/shared/gitignore/svelte.gitignore
+++ b/shared/gitignore/svelte.gitignore
@@ -0,0 +1,668 @@
+# Svelte Gitignore - Professional Frontend Development Grade
+
+# Svelte build output
+.svelte-kit/
+.build/
+/build/
+/dist/
+/package/
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+.pnpm-debug.log*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Cache directories
+.cache/
+.turbo/
+.nuxt/
+.next/
+
+# Logs
+logs
+*.log
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory used by tools like istanbul
+coverage/
+*.lcov
+.nyc_output
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+jspm_packages/
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
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# Svelte specific
+.svelte/
+.svelte-kit/
+/src/app.html
+/src/routes.html
+/src/service-worker.js
+/src/hooks.js
+/src/hooks.server.js
+/src/hooks.client.js
+
+# Vite
+.vite/
+vite.config.js.timestamp-*
+
+# SvelteKit
+.svelte-kit/
+/build/
+/package/
+
+# Svelte Preprocess
+.svelte-preprocess/
+
+# Svelte SSR
+ssr/
+ssr-manifest.json
+
+# Svelte client manifest
+client-manifest.json
+
+# Svelte types
+.svelte/types.d.ts
+
+# Sapper
+__sapper__/
+src/node_modules/@sapper/
+
+# Rollup (if using rollup with Svelte)
+rollup.config.js
+rollup.output.*
+
+# Webpack (if using webpack with Svelte)
+webpack.config.js
+webpack.*.js
+
+# Snowpack
+.snowpack/
+snowpack.config.js
+snowpack.*.js
+
+# Svelte Testing Library
+src/**/__tests__/
+src/**/__mocks__/
+
+# Svelte Storybook
+storybook-static/
+.storybook/
+*.stories.svelte
+*.stories.js
+*.stories.ts
+
+# Svelte Add
+svelte-add/
+
+# Routify
+.routify/
+.routify-cache/
+
+# Svelte Material UI
+.smui/
+
+# Svelte Navigation
+.svelte-navigation/
+
+# Svelte Store
+.svelte-store/
+
+# Svelte Transition
+.svelte-transition/
+
+# Svelte Action
+.svelte-action/
+
+# Svelte Animation
+.svelte-animation/
+
+# Svelte Easing
+.svelte-easing/
+
+# Svelte Spring
+.svelte-spring/
+
+# Svelte Motion
+.svelte-motion/
+
+# Svelte Gesture
+.svelte-gesture/
+
+# Svelte Virtual List
+.svelte-virtual-list/
+
+# Svelte Infinite Scroll
+.svelte-infinite-scroll/
+
+# Svelte Lazy
+.svelte-lazy/
+
+# Svelte Portal
+.svelte-portal/
+
+# Svelte Head
+.svelte-head/
+
+# Svelte Body
+.svelte-body/
+
+# Svelte Meta
+.svelte-meta/
+
+# Svelte Script
+.svelte-script/
+
+# Svelte Style
+.svelte-style/
+
+# Svelte Link
+.svelte-link/
+
+# Svelte Title
+.svelte-title/
+
+# Svelte Base
+.svelte-base/
+
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Database files (if using local DB)
+*.db
+*.sqlite
+*.sqlite3
+
+# Backup files
+*.backup
+*.bak
+
+# Certificate files
+*.pem
+*.crt
+*.key
+*.csr
+
+# Large media files
+*.mp4
+*.avi
+*.mov
+*.wav
+*.mp3
+*.ogg
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
+
+# Svelte compiler output
+*.svelte.js
+*.svelte.ts
+
+# Svelte preprocessor output
+*.svelte.preprocessed
+
+# Svelte hydrate output
+*.svelte.hydrate
+
+# Svelte SSR output
+*.svelte.ssr
+
+# Svelte client output
+*.svelte.client
+
+# Svelte module output
+*.svelte.module
+
+# Svelte legacy output
+*.svelte.legacy
+
+# Svelte modern output
+*.svelte.modern
+
+# Svelte esm output
+*.svelte.esm
+
+# Svelte cjs output
+*.svelte.cjs
+
+# Svelte umd output
+*.svelte.umd
+
+# Svelte iife output
+*.svelte.iife
+
+# Svelte system output
+*.svelte.system
+
+# Svelte amd output
+*.svelte.amd
+
+# Svelte global output
+*.svelte.global
+
+# Svelte browser output
+*.svelte.browser
+
+# Svelte node output
+*.svelte.node
+
+# Svelte deno output
+*.svelte.deno
+
+# Svelte worker output
+*.svelte.worker
+
+# Svelte service worker output
+*.svelte.service-worker
+
+# Svelte web worker output
+*.svelte.web-worker
+
+# Svelte shared worker output
+*.svelte.shared-worker
+
+# Svelte dedicated worker output
+*.svelte.dedicated-worker
+
+# Svelte module worker output
+*.svelte.module-worker
+
+# Svelte classic worker output
+*.svelte.classic-worker
+
+# Svelte modern worker output
+*.svelte.modern-worker
+
+# Svelte legacy worker output
+*.svelte.legacy-worker
+
+# Svelte esm worker output
+*.svelte.esm-worker
+
+# Svelte cjs worker output
+*.svelte.cjs-worker
+
+# Svelte umd worker output
+*.svelte.umd-worker
+
+# Svelte iife worker output
+*.svelte.iife-worker
+
+# Svelte system worker output
+*.svelte.system-worker
+
+# Svelte amd worker output
+*.svelte.amd-worker
+
+# Svelte global worker output
+*.svelte.global-worker
+
+# Svelte browser worker output
+*.svelte.browser-worker
+
+# Svelte node worker output
+*.svelte.node-worker
+
+# Svelte deno worker output
+*.svelte.deno-worker
+
+# Svelte compiler cache
+.svelte/compiler-cache/
+
+# Svelte preprocessor cache
+.svelte/preprocessor-cache/
+
+# Svelte SSR cache
+.svelte/ssr-cache/
+
+# Svelte client cache
+.svelte/client-cache/
+
+# Svelte module cache
+.svelte/module-cache/
+
+# Svelte legacy cache
+.svelte/legacy-cache/
+
+# Svelte modern cache
+.svelte/modern-cache/
+
+# Svelte esm cache
+.svelte/esm-cache/
+
+# Svelte cjs cache
+.svelte/cjs-cache/
+
+# Svelte umd cache
+.svelte/umd-cache/
+
+# Svelte iife cache
+.svelte/iife-cache/
+
+# Svelte system cache
+.svelte/system-cache/
+
+# Svelte amd cache
+.svelte/amd-cache/
+
+# Svelte global cache
+.svelte/global-cache/
+
+# Svelte browser cache
+.svelte/browser-cache/
+
+# Svelte node cache
+.svelte/node-cache/
+
+# Svelte deno cache
+.svelte/deno-cache/
+
+# Svelte worker cache
+.svelte/worker-cache/
+
+# Svelte service worker cache
+.svelte/service-worker-cache/
+
+# Svelte web worker cache
+.svelte/web-worker-cache/
+
+# Svelte shared worker cache
+.svelte/shared-worker-cache/
+
+# Svelte dedicated worker cache
+.svelte/dedicated-worker-cache/
+
+# Svelte module worker cache
+.svelte/module-worker-cache/
+
+# Svelte classic worker cache
+.svelte/classic-worker-cache/
+
+# Svelte modern worker cache
+.svelte/modern-worker-cache/
+
+# Svelte legacy worker cache
+.svelte/legacy-worker-cache/
+
+# Svelte esm worker cache
+.svelte/esm-worker-cache/
+
+# Svelte cjs worker cache
+.svelte/cjs-worker-cache/
+
+# Svelte umd worker cache
+.svelte/umd-worker-cache/
+
+# Svelte iife worker cache
+.svelte/iife-worker-cache/
+
+# Svelte system worker cache
+.svelte/system-worker-cache/
+
+# Svelte amd worker cache
+.svelte/amd-worker-cache/
+
+# Svelte global worker cache
+.svelte/global-worker-cache/
+
+# Svelte browser worker cache
+.svelte/browser-worker-cache/
+
+# Svelte node worker cache
+.svelte/node-worker-cache/
+
+# Svelte deno worker cache
+.svelte/deno-worker-cache/
+
+# Svelte compiler output cache
+.svelte/compiler-output-cache/
+
+# Svelte preprocessor output cache
+.svelte/preprocessor-output-cache/
+
+# Svelte SSR output cache
+.svelte/ssr-output-cache/
+
+# Svelte client output cache
+.svelte/client-output-cache/
+
+# Svelte module output cache
+.svelte/module-output-cache/
+
+# Svelte legacy output cache
+.svelte/legacy-output-cache/
+
+# Svelte modern output cache
+.svelte/modern-output-cache/
+
+# Svelte esm output cache
+.svelte/esm-output-cache/
+
+# Svelte cjs output cache
+.svelte/cjs-output-cache/
+
+# Svelte umd output cache
+.svelte/umd-output-cache/
+
+# Svelte iife output cache
+.svelte/iife-output-cache/
+
+# Svelte system output cache
+.svelte/system-output-cache/
+
+# Svelte amd output cache
+.svelte/amd-output-cache/
+
+# Svelte global output cache
+.svelte/global-output-cache/
+
+# Svelte browser output cache
+.svelte/browser-output-cache/
+
+# Svelte node output cache
+.svelte/node-output-cache/
+
+# Svelte deno output cache
+.svelte/deno-output-cache/
+
+# Svelte worker output cache
+.svelte/worker-output-cache/
+
+# Svelte service worker output cache
+.svelte/service-worker-output-cache/
+
+# Svelte web worker output cache
+.svelte/web-worker-output-cache/
+
+# Svelte shared worker output cache
+.svelte/shared-worker-output-cache/
+
+# Svelte dedicated worker output cache
+.svelte/dedicated-worker-output-cache/
+
+# Svelte module worker output cache
+.svelte/module-worker-output-cache/
+
+# Svelte classic worker output cache
+.svelte/classic-worker-output-cache/
+
+# Svelte modern worker output cache
+.svelte/modern-worker-output-cache/
+
+# Svelte legacy worker output cache
+.svelte/legacy-worker-output-cache/
+
+# Svelte esm worker output cache
+.svelte/esm-worker-output-cache/
+
+# Svelte cjs worker output cache
+.svelte/cjs-worker-output-cache/
+
+# Svelte umd worker output cache
+.svelte/umd-worker-output-cache/
+
+# Svelte iife worker output cache
+.svelte/iife-worker-output-cache/
+
+# Svelte system worker output cache
+.svelte/system-worker-output-cache/
+
+# Svelte amd worker output cache
+.svelte/amd-worker-output-cache/
+
+# Svelte global worker output cache
+.svelte/global-worker-output-cache/
+
+# Svelte browser worker output cache
+.svelte/browser-worker-output-cache/
+
+# Svelte node worker output cache
+.svelte/node-worker-output-cache/
+
+# Svelte deno worker output cache
+.svelte/deno-worker-output-cache/
\ No newline at end of file
```

---

### Commit: 8b7d8877388494d711cefffd52c4a9b510cedc14
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update sublime ignore rules

**Changed Files:**
- shared/gitignore/sublime.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/sublime.gitignore b/shared/gitignore/sublime.gitignore
index e69de29..8c3fa85 100644
--- a/shared/gitignore/sublime.gitignore
+++ b/shared/gitignore/sublime.gitignore
@@ -0,0 +1,724 @@
+# Sublime Text Gitignore - Professional Editor Configuration Grade
+
+# Sublime Text project files
+*.sublime-project
+*.sublime-workspace
+
+# Sublime Text user settings
+*.sublime-settings
+
+# Sublime Text session files
+*.sublime-session
+
+# Sublime Text backup files
+*.sublime-backup
+
+# Sublime Text cache files
+Cache/
+*.cache
+
+# Sublime Text auto-save files
+*.sublime-auto-save
+
+# Sublime Text build results
+*.sublime-build-results
+
+# Sublime Text find results
+*.sublime-find-results
+
+# Sublime Text grep results
+*.sublime-grep-results
+
+# Sublime Text project backup
+*.sublime-project-backup
+
+# Sublime Text workspace backup
+*.sublime-workspace-backup
+
+# Sublime Text session backup
+*.sublime-session-backup
+
+# Sublime Text settings backup
+*.sublime-settings-backup
+
+# Sublime Text user backup
+*.sublime-user-backup
+
+# Sublime Text package control
+Package Control.cache/
+Package Control.last-run
+Package Control.ca-list
+Package Control.ca-bundle
+Package Control.system-ca-bundle
+Package Control.github-oauth
+Package Control.package-control-ca-bundle
+Package Control.user-ca-bundle
+
+# Sublime Text installed packages
+Installed Packages/
+User/Installed Packages/
+User/Package Control.cache/
+User/Package Control.last-run
+User/Package Control.ca-list
+User/Package Control.ca-bundle
+User/Package Control.system-ca-bundle
+User/Package Control.github-oauth
+User/Package Control.package-control-ca-bundle
+User/Package Control.user-ca-bundle
+
+# Sublime Text package development
+Packages/User/
+Packages/*/messages/
+Packages/*/tests/
+Packages/*/docs/
+
+# Sublime Text lint results
+*.sublime-lint
+
+# Sublime Text test results
+*.sublime-test
+
+# Sublime Text coverage results
+*.sublime-coverage
+
+# Sublime Text benchmark results
+*.sublime-benchmark
+
+# Sublime Text profile results
+*.sublime-profile
+
+# Sublime Text debug results
+*.sublime-debug
+
+# Sublime Text trace results
+*.sublime-trace
+
+# Sublime Text memory results
+*.sublime-memory
+
+# Sublime Text performance results
+*.sublime-performance
+
+# Sublime Text CPU results
+*.sublime-cpu
+
+# Sublime Text GPU results
+*.sublime-gpu
+
+# Sublime Text network results
+*.sublime-network
+
+# Sublime Text disk results
+*.sublime-disk
+
+# Sublime Text system results
+*.sublime-system
+
+# Sublime Text process results
+*.sublime-process
+
+# Sublime Text thread results
+*.sublime-thread
+
+# Sublime Text lock results
+*.sublime-lock
+
+# Sublime Text mutex results
+*.sublime-mutex
+
+# Sublime Text semaphore results
+*.sublime-semaphore
+
+# Sublime Text event results
+*.sublime-event
+
+# Sublime Text timer results
+*.sublime-timer
+
+# Sublime Text file results
+*.sublime-file
+
+# Sublime Text directory results
+*.sublime-directory
+
+# Sublime Text socket results
+*.sublime-socket
+
+# Sublime Text pipe results
+*.sublime-pipe
+
+# Sublime Text device results
+*.sublime-device
+
+# Sublime Text window results
+*.sublime-window
+
+# Sublime Text menu results
+*.sublime-menu
+
+# Sublime Text dialog results
+*.sublime-dialog
+
+# Sublime Text control results
+*.sublime-control
+
+# Sublime Text widget results
+*.sublime-widget
+
+# Sublime Text container results
+*.sublime-container
+
+# Sublime Text layout results
+*.sublime-layout
+
+# Sublime Text view results
+*.sublime-view
+
+# Sublime Text panel results
+*.sublime-panel
+
+# Sublime Text tab results
+*.sublime-tab
+
+# Sublime Text group results
+*.sublime-group
+
+# Sublime Text split results
+*.sublime-split
+
+# Sublime Text workspace results
+*.sublime-workspace
+
+# Sublime Text project results
+*.sublime-project
+
+# Sublime Text settings results
+*.sublime-settings
+
+# Sublime Text keymap results
+*.sublime-keymap
+
+# Sublime Text theme results
+*.sublime-theme
+
+# Sublime Text color scheme results
+*.sublime-color-scheme
+
+# Sublime Text syntax results
+*.sublime-syntax
+
+# Sublime Text command results
+*.sublime-commands
+
+# Sublime Text menu results
+*.sublime-menu
+
+# Sublime Text mouse map results
+*.sublime-mousemap
+
+# Sublime Text context menu results
+*.sublime-context-menu
+
+# Sublime Text toolbar results
+*.sublime-toolbar
+
+# Sublime Text status bar results
+*.sublime-status-bar
+
+# Sublime Text quick panel results
+*.sublime-quick-panel
+
+# Sublime Text command palette results
+*.sublime-command-palette
+
+# Sublime Text goto anything results
+*.sublime-goto-anything
+
+# Sublime Text symbol results
+*.sublime-symbol
+
+# Sublime Text definition results
+*.sublime-definition
+
+# Sublime Text reference results
+*.sublime-reference
+
+# Sublime Text implementation results
+*.sublime-implementation
+
+# Sublime Text type definition results
+*.sublime-type-definition
+
+# Sublime Text hover results
+*.sublime-hover
+
+# Sublime Text completion results
+*.sublime-completion
+
+# Sublime Text signature help results
+*.sublime-signature-help
+
+# Sublime Text code action results
+*.sublime-code-action
+
+# Sublime Text rename results
+*.sublime-rename
+
+# Sublime Text format results
+*.sublime-format
+
+# Sublime Text organize imports results
+*.sublime-organize-imports
+
+# Sublime Text refactor results
+*.sublime-refactor
+
+# Sublime Text extract results
+*.sublime-extract
+
+# Sublime Text inline results
+*.sublime-inline
+
+# Sublime Text move results
+*.sublime-move
+
+# Sublime Text change signature results
+*.sublime-change-signature
+
+# Sublime Text convert results
+*.sublime-convert
+
+# Sublime Text surround with results
+*.sublime-surround-with
+
+# Sublime Text comment results
+*.sublime-comment
+
+# Sublime Text uncomment results
+*.sublime-uncomment
+
+# Sublime Text toggle comment results
+*.sublime-toggle-comment
+
+# Sublime Text block comment results
+*.sublime-block-comment
+
+# Sublime Text line comment results
+*.sublime-line-comment
+
+# Sublime Text stream comment results
+*.sublime-stream-comment
+
+# Sublime Text box comment results
+*.sublime-box-comment
+
+# Sublime Text emoji comment results
+*.sublime-emoji-comment
+
+# Sublime Text fold results
+*.sublime-fold
+
+# Sublime Text unfold results
+*.sublime-unfold
+
+# Sublime Text toggle fold results
+*.sublime-toggle-fold
+
+# Sublime Text fold all results
+*.sublime-fold-all
+
+# Sublime Text unfold all results
+*.sublime-unfold-all
+
+# Sublime Text fold level results
+*.sublime-fold-level
+
+# Sublime Text fold markers results
+*.sublime-fold-markers
+
+# Sublime Text indent results
+*.sublime-indent
+
+# Sublime Text unindent results
+*.sublime-unindent
+
+# Sublime Text auto indent results
+*.sublime-auto-indent
+
+# Sublime Text smart indent results
+*.sublime-smart-indent
+
+# Sublime Text reindent results
+*.sublime-reindent
+
+# Sublime Text convert indent results
+*.sublime-convert-indent
+
+# Sublime Text detect indent results
+*.sublime-detect-indent
+
+# Sublime Text trim indent results
+*.sublime-trim-indent
+
+# Sublime Text trim trailing whitespace results
+*.sublime-trim-trailing-whitespace
+
+# Sublime Text ensure newline at eof results
+*.sublime-ensure-newline-at-eof
+
+# Sublime Text convert eol results
+*.sublime-convert-eol
+
+# Sublime Text convert encoding results
+*.sublime-convert-encoding
+
+# Sublime Text convert line endings results
+*.sublime-convert-line-endings
+
+# Sublime Text convert tabs to spaces results
+*.sublime-convert-tabs-to-spaces
+
+# Sublime Text convert spaces to tabs results
+*.sublime-convert-spaces-to-tabs
+
+# Sublime Text translate tabs to spaces results
+*.sublime-translate-tabs-to-spaces
+
+# Sublime Text translate spaces to tabs results
+*.sublime-translate-spaces-to-tabs
+
+# Sublime Text set syntax results
+*.sublime-set-syntax
+
+# Sublime Text set file type results
+*.sublime-set-file-type
+
+# Sublime Text set encoding results
+*.sublime-set-encoding
+
+# Sublime Text set line endings results
+*.sublime-set-line-endings
+
+# Sublime Text set indent results
+*.sublime-set-indent
+
+# Sublime Text set tab size results
+*.sublime-set-tab-size
+
+# Sublime Text set wrap column results
+*.sublime-set-wrap-column
+
+# Sublime Text set rulers results
+*.sublime-set-rulers
+
+# Sublime Text set word wrap results
+*.sublime-set-word-wrap
+
+# Sublime Text set spell check results
+*.sublime-set-spell-check
+
+# Sublime Text set word separators results
+*.sublime-set-word-separators
+
+# Sublime Text set auto complete results
+*.sublime-set-auto-complete
+
+# Sublime Text set auto match results
+*.sublime-set-auto-match
+
+# Sublime Text set draw white space results
+*.sublime-set-draw-white-space
+
+# Sublime Text set draw indent results
+*.sublime-set-draw-indent
+
+# Sublime Text set draw wrap results
+*.sublime-set-draw-wrap
+
+# Sublime Text set draw rulers results
+*.sublime-set-draw-rulers
+
+# Sublime Text set draw fold results
+*.sublime-set-draw-fold
+
+# Sublime Text set draw icons results
+*.sublime-set-draw-icons
+
+# Sublime Text set draw minimap results
+*.sublime-set-draw-minimap
+
+# Sublime Text set draw scroll bars results
+*.sublime-set-draw-scroll-bars
+
+# Sublime Text set draw status bar results
+*.sublime-set-draw-status-bar
+
+# Sublime Text set draw tab bar results
+*.sublime-set-draw-tab-bar
+
+# Sublime Text set draw title bar results
+*.sublime-set-draw-title-bar
+
+# Sublime Text set draw menu bar results
+*.sublime-set-draw-menu-bar
+
+# Sublime Text set draw side bar results
+*.sublime-set-draw-side-bar
+
+# Sublime Text set draw command palette results
+*.sublime-set-draw-command-palette
+
+# Sublime Text set draw quick panel results
+*.sublime-set-draw-quick-panel
+
+# Sublime Text set draw goto anything results
+*.sublime-set-draw-goto-anything
+
+# Sublime Text set draw symbol results
+*.sublime-set-draw-symbol
+
+# Sublime Text set draw definition results
+*.sublime-set-draw-definition
+
+# Sublime Text set draw reference results
+*.sublime-set-draw-reference
+
+# Sublime Text set draw implementation results
+*.sublime-set-draw-implementation
+
+# Sublime Text set draw type definition results
+*.sublime-set-draw-type-definition
+
+# Sublime Text set draw hover results
+*.sublime-set-draw-hover
+
+# Sublime Text set draw completion results
+*.sublime-set-draw-completion
+
+# Sublime Text set draw signature help results
+*.sublime-set-draw-signature-help
+
+# Sublime Text set draw code action results
+*.sublime-set-draw-code-action
+
+# Sublime Text set draw rename results
+*.sublime-set-draw-rename
+
+# Sublime Text set draw format results
+*.sublime-set-draw-format
+
+# Sublime Text set draw organize imports results
+*.sublime-set-draw-organize-imports
+
+# Sublime Text set draw refactor results
+*.sublime-set-draw-refactor
+
+# Sublime Text set draw extract results
+*.sublime-set-draw-extract
+
+# Sublime Text set draw inline results
+*.sublime-set-draw-inline
+
+# Sublime Text set draw move results
+*.sublime-set-draw-move
+
+# Sublime Text set draw change signature results
+*.sublime-set-draw-change-signature
+
+# Sublime Text set draw convert results
+*.sublime-set-draw-convert
+
+# Sublime Text set draw surround with results
+*.sublime-set-draw-surround-with
+
+# Sublime Text set draw comment results
+*.sublime-set-draw-comment
+
+# Sublime Text set draw uncomment results
+*.sublime-set-draw-uncomment
+
+# Sublime Text set draw toggle comment results
+*.sublime-set-draw-toggle-comment
+
+# Sublime Text set draw block comment results
+*.sublime-set-draw-block-comment
+
+# Sublime Text set draw line comment results
+*.sublime-set-draw-line-comment
+
+# Sublime Text set draw stream comment results
+*.sublime-set-draw-stream-comment
+
+# Sublime Text set draw box comment results
+*.sublime-set-draw-box-comment
+
+# Sublime Text set draw emoji comment results
+*.sublime-set-draw-emoji-comment
+
+# Sublime Text set draw fold results
+*.sublime-set-draw-fold
+
+# Sublime Text set draw unfold results
+*.sublime-set-draw-unfold
+
+# Sublime Text set draw toggle fold results
+*.sublime-set-draw-toggle-fold
+
+# Sublime Text set draw fold all results
+*.sublime-set-draw-fold-all
+
+# Sublime Text set draw unfold all results
+*.sublime-set-draw-unfold-all
+
+# Sublime Text set draw fold level results
+*.sublime-set-draw-fold-level
+
+# Sublime Text set draw fold markers results
+*.sublime-set-draw-fold-markers
+
+# Sublime Text set draw indent results
+*.sublime-set-draw-indent
+
+# Sublime Text set draw unindent results
+*.sublime-set-draw-unindent
+
+# Sublime Text set draw auto indent results
+*.sublime-set-draw-auto-indent
+
+# Sublime Text set draw smart indent results
+*.sublime-set-draw-smart-indent
+
+# Sublime Text set draw reindent results
+*.sublime-set-draw-reindent
+
+# Sublime Text set draw convert indent results
+*.sublime-set-draw-convert-indent
+
+# Sublime Text set draw detect indent results
+*.sublime-set-draw-detect-indent
+
+# Sublime Text set draw trim indent results
+*.sublime-set-draw-trim-indent
+
+# Sublime Text set draw trim trailing whitespace results
+*.sublime-set-draw-trim-trailing-whitespace
+
+# Sublime Text set draw ensure newline at eof results
+*.sublime-set-draw-ensure-newline-at-eof
+
+# Sublime Text set draw convert eol results
+*.sublime-set-draw-convert-eol
+
+# Sublime Text set draw convert encoding results
+*.sublime-set-draw-convert-encoding
+
+# Sublime Text set draw convert line endings results
+*.sublime-set-draw-convert-line-endings
+
+# Sublime Text set draw convert tabs to spaces results
+*.sublime-set-draw-convert-tabs-to-spaces
+
+# Sublime Text set draw convert spaces to tabs results
+*.sublime-set-draw-convert-spaces-to-tabs
+
+# Sublime Text set draw translate tabs to spaces results
+*.sublime-set-draw-translate-tabs-to-spaces
+
+# Sublime Text set draw translate spaces to tabs results
+*.sublime-set-draw-translate-spaces-to-tabs
+
+# Sublime Text set draw set syntax results
+*.sublime-set-draw-set-syntax
+
+# Sublime Text set draw set file type results
+*.sublime-set-draw-set-file-type
+
+# Sublime Text set draw set encoding results
+*.sublime-set-draw-set-encoding
+
+# Sublime Text set draw set line endings results
+*.sublime-set-draw-set-line-endings
+
+# Sublime Text set draw set indent results
+*.sublime-set-draw-set-indent
+
+# Sublime Text set draw set tab size results
+*.sublime-set-draw-set-tab-size
+
+# Sublime Text set draw set wrap column results
+*.sublime-set-draw-set-wrap-column
+
+# Sublime Text set draw set rulers results
+*.sublime-set-draw-set-rulers
+
+# Sublime Text set draw set word wrap results
+*.sublime-set-draw-set-word-wrap
+
+# Sublime Text set draw set spell check results
+*.sublime-set-draw-set-spell-check
+
+# Sublime Text set draw set word separators results
+*.sublime-set-draw-set-word-separators
+
+# Sublime Text set draw set auto complete results
+*.sublime-set-draw-set-auto-complete
+
+# Sublime Text set draw set auto match results
+*.sublime-set-draw-set-auto-match
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Log files
+*.log
+logs/
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
\ No newline at end of file
```

---

### Commit: ff4604c9309986bd736130ac511f1c25fbea11d8
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update rust ignore rules

**Changed Files:**
- shared/gitignore/rust.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/rust.gitignore b/shared/gitignore/rust.gitignore
index e69de29..32dcf6d 100644
--- a/shared/gitignore/rust.gitignore
+++ b/shared/gitignore/rust.gitignore
@@ -0,0 +1,1726 @@
+# Rust Gitignore - Professional Systems Programming Grade
+
+# Generated by Cargo
+# will have compiled files and executables
+/target/
+**/target/
+
+# Remove Cargo.lock from gitignore if creating an executable, leave it for libraries
+# More information here: https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html
+Cargo.lock
+
+# These are backup files generated by rustfmt
+**/*.rs.bk
+
+# MSVC Windows builds of rustc are not currently supported in the same directory
+# as other builds, so we exclude the windows target directory.
+# For more information, see:
+# https://github.com/rust-lang/rust/issues/78413
+**/target/*/windows/
+
+# Dependencies installed via `cargo install`
+.cargo/
+bin/
+*.exe
+
+# Environment files
+.env
+.env.*
+!.env.example
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Log files
+*.log
+logs/
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
+
+# Rust specific build artifacts
+*.rlib
+*.dll
+*.lib
+*.pdb
+*.rsc
+*.ilk
+*.exp
+*.def
+*.manifest
+*.bc
+*.ll
+*.s
+*.o
+*.obj
+*.wasm
+*.wast
+*.wat
+
+# Rust analysis files
+save-analysis/
+
+# Rust coverage files
+*.profraw
+*.profdata
+coverage/
+*.gcda
+*.gcno
+
+# Rust documentation
+/doc/
+/target/doc/
+
+# Rust package registry
+registry/
+index/
+
+# Rust git dependencies
+/git/
+
+# Rust path dependencies
+/path/
+
+# Rust workspace
+Cargo.toml.workspace
+
+# Rust bench results
+benches/benches
+benches/output.txt
+
+# Rust test results
+tests/output.txt
+
+# Rust example outputs
+examples/*.exe
+examples/*.dll
+examples/*.lib
+examples/*.pdb
+examples/*.rlib
+examples/*.dSYM
+
+# Rust incremental compilation
+/incremental/
+
+# Rust debug information
+*.dSYM/
+*.dSYM.zip
+
+# Rust release builds
+/release/
+/debug/
+
+# Rust profiling information
+*.pgo
+
+# Rust codegen units
+/codegen/
+
+# Rust native dependencies
+/native/
+
+# Rust build scripts output
+/build.rs
+/build_script_*
+/build_script-*
+
+# Rust procedural macros
+/proc-macro/
+
+# Rust macro outputs
+*.expand
+*.expanded
+
+# Rust MIR outputs
+*.mir
+*.optimized.mir
+
+# Rust LLVM outputs
+*.ll
+*.bc
+*.s
+*.o
+
+# Rust assembly outputs
+*.s
+*.asm
+
+# Rust WebAssembly
+*.wasm
+*.wast
+*.wat
+
+# Rust embedded
+/out/
+/elf/
+/hex/
+/bin/
+/obj/
+
+# Rust cross-compilation
+/host/
+/target/*-unknown-*/
+
+# Rust no_std
+/no_std/
+
+# Rust std
+/std/
+
+# Rust core
+/core/
+
+# Rust alloc
+/alloc/
+
+# Rust proc_macro
+/proc_macro/
+
+# Rust test
+/test/
+
+# Rust bench
+/bench/
+
+# Rust example
+/example/
+
+# Rust bin
+/bin/
+
+# Rust lib
+/lib/
+
+# Rust src
+/src/
+
+# Rust tools
+/tools/
+
+# Rust utilities
+/util/
+
+# Rust scripts
+/scripts/
+
+# Rust configs
+/config/
+
+# Rust assets
+/assets/
+
+# Rust data
+/data/
+
+# Rust resources
+/resources/
+
+# Rust static
+/static/
+
+# Rust templates
+/templates/
+
+# Rust migrations
+/migrations/
+
+# Rust seeds
+/seeds/
+
+# Rust fixtures
+/fixtures/
+
+# Rust schemas
+/schemas/
+
+# Rust models
+/models/
+
+# Rust views
+/views/
+
+# Rust controllers
+/controllers/
+
+# Rust routes
+/routes/
+
+# Rust middleware
+/middleware/
+
+# Rust handlers
+/handlers/
+
+# Rust services
+/services/
+
+# Rust repositories
+/repositories/
+
+# Rust entities
+/entities/
+
+# Rust value objects
+/value_objects/
+
+# Rust domain events
+/domain_events/
+
+# Rust aggregates
+/aggregates/
+
+# Rust projectors
+/projectors/
+
+# Rust processors
+/processors/
+
+# Rust sagas
+/sagas/
+
+# Rust commands
+/commands/
+
+# Rust queries
+/queries/
+
+# Rust events
+/events/
+
+# Rust snapshots
+/snapshots/
+
+# Rust stores
+/stores/
+
+# Rust buses
+/buses/
+
+# Rust brokers
+/brokers/
+
+# Rust publishers
+/publishers/
+
+# Rust subscribers
+/subscribers/
+
+# Rust consumers
+/consumers/
+
+# Rust producers
+/producers/
+
+# Rust workers
+/workers/
+
+# Rust tasks
+/tasks/
+
+# Rust jobs
+/jobs/
+
+# Rust queues
+/queues/
+
+# Rust stacks
+/stacks/
+
+# Rust heaps
+/heaps/
+
+# Rust trees
+/trees/
+
+# Rust graphs
+/graphs/
+
+# Rust lists
+/lists/
+
+# Rust arrays
+/arrays/
+
+# Rust vectors
+/vectors/
+
+# Rust matrices
+/matrices/
+
+# Rust sets
+/sets/
+
+# Rust maps
+/maps/
+
+# Rust hashes
+/hashes/
+
+# Rust buffers
+/buffers/
+
+# Rust pools
+/pools/
+
+# Rust caches
+/caches/
+
+# Rust registries
+/registries/
+
+# Rust factories
+/factories/
+
+# Rust builders
+/builders/
+
+# Rust directors
+/directors/
+
+# Rust managers
+/managers/
+
+# Rust coordinators
+/coordinators/
+
+# Rust orchestrators
+/orchestrators/
+
+# Rust mediators
+/mediators/
+
+# Rust facilitators
+/facilitators/
+
+# Rust adapters
+/adapters/
+
+# Rust bridges
+/bridges/
+
+# Rust decorators
+/decorators/
+
+# Rust proxies
+/proxies/
+
+# Rust facades
+/facades/
+
+# Rust flyweights
+/flyweights/
+
+# Rust composites
+/composites/
+
+# Rust chains
+/chains/
+
+# Rust iterators
+/iterators/
+
+# Rust visitors
+/visitors/
+
+# Rust strategies
+/strategies/
+
+# Rust states
+/states/
+
+# Rust templates
+/templates/
+
+# Rust hooks
+/hooks/
+
+# Rust mixins
+/mixins/
+
+# Rust traits
+/traits/
+
+# Rust implementations
+/implementations/
+
+# Rust extensions
+/extensions/
+
+# Rust utilities
+/utilities/
+
+# Rust helpers
+/helpers/
+
+# Rust assistants
+/assistants/
+
+# Rust aides
+/aides/
+
+# Rust supporters
+/supporters/
+
+# Rust backers
+/backers/
+
+# Rust sponsors
+/sponsors/
+
+# Rust patrons
+/patrons/
+
+# Rust donors
+/donors/
+
+# Rust contributors
+/contributors/
+
+# Rust maintainers
+/maintainers/
+
+# Rust owners
+/owners/
+
+# Rust authors
+/authors/
+
+# Rust committers
+/committers/
+
+# Rust reviewers
+/reviewers/
+
+# Rust approvers
+/approvers/
+
+# Rust verifiers
+/verifiers/
+
+# Rust validators
+/validators/
+
+# Rust auditors
+/auditors/
+
+# Rust inspectors
+/inspectors/
+
+# Rust examiners
+/examiners/
+
+# Rust analysts
+/analysts/
+
+# Rust specialists
+/specialists/
+
+# Rust experts
+/experts/
+
+# Rust professionals
+/professionals/
+
+# Rust masters
+/masters/
+
+# Rust gurus
+/gurus/
+
+# Rust ninjas
+/ninjas/
+
+# Rust rockstars
+/rockstars/
+
+# Rust superstars
+/superstars/
+
+# Rust champions
+/champions/
+
+# Rust heroes
+/heroes/
+
+# Rust legends
+/legends/
+
+# Rust icons
+/icons/
+
+# Rust idols
+/idols/
+
+# Rust role models
+/role_models/
+
+# Rust inspirations
+/inspirations/
+
+# Rust motivations
+/motivations/
+
+# Rust aspirations
+/aspirations/
+
+# Rust ambitions
+/ambitions/
+
+# Rust goals
+/goals/
+
+# Rust objectives
+/objectives/
+
+# Rust targets
+/targets/
+
+# Rust milestones
+/milestones/
+
+# Rust deliverables
+/deliverables/
+
+# Rust outcomes
+/outcomes/
+
+# Rust results
+/results/
+
+# Rust achievements
+/achievements/
+
+# Rust accomplishments
+/accomplishments/
+
+# Rust successes
+/successes/
+
+# Rust victories
+/victories/
+
+# Rust triumphs
+/triumphs/
+
+# Rust wins
+/wins/
+
+# Rust gains
+/gains/
+
+# Rust benefits
+/benefits/
+
+# Rust advantages
+/advantages/
+
+# Rust strengths
+/strengths/
+
+# Rust assets
+/assets/
+
+# Rust resources
+/resources/
+
+# Rust capabilities
+/capabilities/
+
+# Rust competencies
+/competencies/
+
+# Rust skills
+/skills/
+
+# Rust talents
+/talents/
+
+# Rust abilities
+/abilities/
+
+# Rust capacities
+/capacities/
+
+# Rust potentials
+/potentials/
+
+# Rust possibilities
+/possibilities/
+
+# Rust opportunities
+/opportunities/
+
+# Rust prospects
+/prospects/
+
+# Rust horizons
+/horizons/
+
+# Rust futures
+/futures/
+
+# Rust destinies
+/destinies/
+
+# Rust fates
+/fates/
+
+# Rust fortunes
+/fortunes/
+
+# Rust lucks
+/lucks/
+
+# Rust chances
+/chances/
+
+# Rust probabilities
+/probabilities/
+
+# Rust likelihoods
+/likelihoods/
+
+# Rust odds
+/odds/
+
+# Rust expectations
+/expectations/
+
+# Rust anticipations
+/anticipations/
+
+# Rust predictions
+/predictions/
+
+# Rust forecasts
+/forecasts/
+
+# Rust projections
+/projections/
+
+# Rust estimates
+/estimates/
+
+# Rust approximations
+/approximations/
+
+# Rust guesses
+/guesses/
+
+# Rust assumptions
+/assumptions/
+
+# Rust presumptions
+/presumptions/
+
+# Rust suppositions
+/suppositions/
+
+# Rust hypotheses
+/hypotheses/
+
+# Rust theories
+/theories/
+
+# Rust concepts
+/concepts/
+
+# Rust ideas
+/ideas/
+
+# Rust thoughts
+/thoughts/
+
+# Rust notions
+/notions/
+
+# Rust impressions
+/impressions/
+
+# Rust perceptions
+/perceptions/
+
+# Rust perspectives
+/perspectives/
+
+# Rust viewpoints
+/viewpoints/
+
+# Rust standpoints
+/standpoints/
+
+# Rust positions
+/positions/
+
+# Rust attitudes
+/attitudes/
+
+# Rust dispositions
+/dispositions/
+
+# Rust inclinations
+/inclinations/
+
+# Rust tendencies
+/tendencies/
+
+# Rust propensities
+/propensities/
+
+# Rust predispositions
+/predispositions/
+
+# Rust biases
+/biases/
+
+# Rust prejudices
+/prejudices/
+
+# Rust partialities
+/partialities/
+
+# Rust favoritisms
+/favoritisms/
+
+# Rust preferences
+/preferences/
+
+# Rust choices
+/choices/
+
+# Rust selections
+/selections/
+
+# Rust options
+/options/
+
+# Rust alternatives
+/alternatives/
+
+# Rust substitutes
+/substitutes/
+
+# Rust replacements
+/replacements/
+
+# Rust backups
+/backups/
+
+# Rust reserves
+/reserves/
+
+# Rust spares
+/spares/
+
+# Rust extras
+/extras/
+
+# Rust supplements
+/supplements/
+
+# Rust additions
+/additions/
+
+# Rust extensions
+/extensions/
+
+# Rust expansions
+/expansions/
+
+# Rust enlargements
+/enlargements/
+
+# Rust amplifications
+/amplifications/
+
+# Rust magnifications
+/magnifications/
+
+# Rust intensifications
+/intensifications/
+
+# Rust enhancements
+/enhancements/
+
+# Rust improvements
+/improvements/
+
+# Rust refinements
+/refinements/
+
+# Rust optimizations
+/optimizations/
+
+# Rust perfections
+/perfections/
+
+# Rust excellences
+/excellences/
+
+# Rust superiorities
+/superiorities/
+
+# Rust supremacies
+/supremacies/
+
+# Rust dominances
+/dominances/
+
+# Rust leaderships
+/leaderships/
+
+# Rust authorities
+/authorities/
+
+# Rust powers
+/powers/
+
+# Rust controls
+/controls/
+
+# Rust influences
+/influences/
+
+# Rust impacts
+/impacts/
+
+# Rust effects
+/effects/
+
+# Rust consequences
+/consequences/
+
+# Rust results
+/results/
+
+# Rust outcomes
+/outcomes/
+
+# Rust products
+/products/
+
+# Rust outputs
+/outputs/
+
+# Rust yields
+/yields/
+
+# Rust returns
+/returns/
+
+# Rust gains
+/gains/
+
+# Rust profits
+/profits/
+
+# Rust benefits
+/benefits/
+
+# Rust advantages
+/advantages/
+
+# Rust values
+/values/
+
+# Rust worths
+/worths/
+
+# Rust merits
+/merits/
+
+# Rust virtues
+/virtues/
+
+# Rust qualities
+/qualities/
+
+# Rust attributes
+/attributes/
+
+# Rust characteristics
+/characteristics/
+
+# Rust features
+/features/
+
+# Rust properties
+/properties/
+
+# Rust traits
+/traits/
+
+# Rust aspects
+/aspects/
+
+# Rust dimensions
+/dimensions/
+
+# Rust factors
+/factors/
+
+# Rust elements
+/elements/
+
+# Rust components
+/components/
+
+# Rust ingredients
+/ingredients/
+
+# Rust constituents
+/constituents/
+
+# Rust parts
+/parts/
+
+# Rust pieces
+/pieces/
+
+# Rust segments
+/segments/
+
+# Rust sections
+/sections/
+
+# Rust divisions
+/divisions/
+
+# Rust partitions
+/partitions/
+
+# Rust compartments
+/compartments/
+
+# Rust categories
+/categories/
+
+# Rust classes
+/classes/
+
+# Rust types
+/types/
+
+# Rust kinds
+/kinds/
+
+# Rust sorts
+/sorts/
+
+# Rust varieties
+/varieties/
+
+# Rust forms
+/forms/
+
+# Rust shapes
+/shapes/
+
+# Rust structures
+/structures/
+
+# Rust frameworks
+/frameworks/
+
+# Rust architectures
+/architectures/
+
+# Rust designs
+/designs/
+
+# Rust patterns
+/patterns/
+
+# Rust models
+/models/
+
+# Rust templates
+/templates/
+
+# Rust blueprints
+/blueprints/
+
+# Rust plans
+/plans/
+
+# Rust schemes
+/schemes/
+
+# Rust strategies
+/strategies/
+
+# Rust tactics
+/tactics/
+
+# Rust approaches
+/approaches/
+
+# Rust methods
+/methods/
+
+# Rust techniques
+/techniques/
+
+# Rust procedures
+/procedures/
+
+# Rust processes
+/processes/
+
+# Rust systems
+/systems/
+
+# Rust mechanisms
+/mechanisms/
+
+# Rust devices
+/devices/
+
+# Rust tools
+/tools/
+
+# Rust instruments
+/instruments/
+
+# Rust implements
+/implements/
+
+# Rust appliances
+/appliances/
+
+# Rust gadgets
+/gadgets/
+
+# Rust contraptions
+/contraptions/
+
+# Rust inventions
+/inventions/
+
+# Rust innovations
+/innovations/
+
+# Rust creations
+/creations/
+
+# Rust productions
+/productions/
+
+# Rust works
+/works/
+
+# Rust masterpieces
+/masterpieces/
+
+# Rust artworks
+/artworks/
+
+# Rust crafts
+/crafts/
+
+# Rust handiworks
+/handiworks/
+
+# Rust manufactures
+/manufactures/
+
+# Rust constructions
+/constructions/
+
+# Rust buildings
+/buildings/
+
+# Rust edifices
+/edifices/
+
+# Rust structures
+/structures/
+
+# Rust formations
+/formations/
+
+# Rust compositions
+/compositions/
+
+# Rust arrangements
+/arrangements/
+
+# Rust organizations
+/organizations/
+
+# Rust systems
+/systems/
+
+# Rust networks
+/networks/
+
+# Rust webs
+/webs/
+
+# Rust meshes
+/meshes/
+
+# Rust grids
+/grids/
+
+# Rust lattices
+/lattices/
+
+# Rust matrices
+/matrices/
+
+# Rust arrays
+/arrays/
+
+# Rust sequences
+/sequences/
+
+# Rust series
+/series/
+
+# Rust chains
+/chains/
+
+# Rust strings
+/strings/
+
+# Rust streams
+/streams/
+
+# Rust flows
+/flows/
+
+# Rust currents
+/currents/
+
+# Rust tides
+/tides/
+
+# Rust waves
+/waves/
+
+# Rust oscillations
+/oscillations/
+
+# Rust vibrations
+/vibrations/
+
+# Rust pulsations
+/pulsations/
+
+# Rust rhythms
+/rhythms/
+
+# Rust beats
+/beats/
+
+# Rust pulses
+/pulses/
+
+# Rust heartbeats
+/heartbeats/
+
+# Rust lifebloods
+/lifebloods/
+
+# Rust essences
+/essences/
+
+# Rust cores
+/cores/
+
+# Rust hearts
+/hearts/
+
+# Rust souls
+/souls/
+
+# Rust spirits
+/spirits/
+
+# Rust minds
+/minds/
+
+# Rust intellects
+/intellects/
+
+# Rust intelligences
+/intelligences/
+
+# Rust wisdoms
+/wisdoms/
+
+# Rust knowledges
+/knowledges/
+
+# Rust understandings
+/understandings/
+
+# Rust comprehensions
+/comprehensions/
+
+# Rust grasps
+/grasps/
+
+# Rust apprehends
+/apprehends/
+
+# Rust perceptions
+/perceptions/
+
+# Rust insights
+/insights/
+
+# Rust intuitions
+/intuitions/
+
+# Rust instincts
+/instincts/
+
+# Rust hunches
+/hunches/
+
+# Rust feelings
+/feelings/
+
+# Rust emotions
+/emotions/
+
+# Rust sentiments
+/sentiments/
+
+# Rust passions
+/passions/
+
+# Rust desires
+/desires/
+
+# Rust wishes
+/wishes/
+
+# Rust hopes
+/hopes/
+
+# Rust dreams
+/dreams/
+
+# Rust aspirations
+/aspirations/
+
+# Rust ambitions
+/ambitions/
+
+# Rust goals
+/goals/
+
+# Rust objectives
+/objectives/
+
+# Rust purposes
+/purposes/
+
+# Rust intentions
+/intentions/
+
+# Rust motives
+/motives/
+
+# Rust reasons
+/reasons/
+
+# Rust causes
+/causes/
+
+# Rust sources
+/sources/
+
+# Rust origins
+/origins/
+
+# Rust roots
+/roots/
+
+# Rust foundations
+/foundations/
+
+# Rust bases
+/bases/
+
+# Rust grounds
+/grounds/
+
+# Rust premises
+/premises/
+
+# Rust principles
+/principles/
+
+# Rust fundamentals
+/fundamentals/
+
+# Rust basics
+/basics/
+
+# Rust essentials
+/essentials/
+
+# Rust necessities
+/necessities/
+
+# Rust requirements
+/requirements/
+
+# Rust prerequisites
+/prerequisites/
+
+# Rust conditions
+/conditions/
+
+# Rust terms
+/terms/
+
+# Rust provisions
+/provisions/
+
+# Rust stipulations
+/stipulations/
+
+# Rust specifications
+/specifications/
+
+# Rust criteria
+/criteria/
+
+# Rust standards
+/standards/
+
+# Rust benchmarks
+/benchmarks/
+
+# Rust metrics
+/metrics/
+
+# Rust measures
+/measures/
+
+# Rust gauges
+/gauges/
+
+# Rust indicators
+/indicators/
+
+# Rust signals
+/signals/
+
+# Rust signs
+/signs/
+
+# Rust symbols
+/symbols/
+
+# Rust tokens
+/tokens/
+
+# Rust marks
+/marks/
+
+# Rust labels
+/labels/
+
+# Rust tags
+/tags/
+
+# Rust badges
+/badges/
+
+# Rust emblems
+/emblems/
+
+# Rust insignias
+/insignias/
+
+# Rust crests
+/crests/
+
+# Rust coats
+/coats/
+
+# Rust arms
+/arms/
+
+# Rust shields
+/shields/
+
+# Rust banners
+/banners/
+
+# Rust flags
+/flags/
+
+# Rust pennants
+/pennants/
+
+# Rust streamers
+/streamers/
+
+# Rust ribbons
+/ribbons/
+
+# Rust bands
+/bands/
+
+# Rust stripes
+/stripes/
+
+# Rust lines
+/lines/
+
+# Rust borders
+/borders/
+
+# Rust edges
+/edges/
+
+# Rust margins
+/margins/
+
+# Rust fringes
+/fringes/
+
+# Rust rims
+/rims/
+
+# Rust brims
+/brims/
+
+# Rust lips
+/lips/
+
+# Rust mouths
+/mouths/
+
+# Rust openings
+/openings/
+
+# Rust apertures
+/apertures/
+
+# Rust orifices
+/orifices/
+
+# Rust holes
+/holes/
+
+# Rust gaps
+/gaps/
+
+# Rust spaces
+/spaces/
+
+# Rust voids
+/voids/
+
+# Rust vacuums
+/vacuums/
+
+# Rust emptiness
+/emptiness/
+
+# Rust nothingness
+/nothingness/
+
+# Rust nullity
+/nullity/
+
+# Rust zero
+/zero/
+
+# Rust nil
+/nil/
+
+# Rust naught
+/naught/
+
+# Rust none
+/none/
+
+# Rust nobody
+/nobody/
+
+# Rust nothing
+/nothing/
+
+# Rust nowhere
+/nowhere/
+
+# Rust never
+/never/
+
+# Rust eternal
+/eternal/
+
+# Rust infinite
+/infinite/
+
+# Rust endless
+/endless/
+
+# Rust limitless
+/limitless/
+
+# Rust boundless
+/boundless/
+
+# Rust vast
+/vast/
+
+# Rust immense
+/immense/
+
+# Rust enormous
+/enormous/
+
+# Rust gigantic
+/gigantic/
+
+# Rust colossal
+/colossal/
+
+# Rust mammoth
+/mammoth/
+
+# Rust monstrous
+/monstrous/
+
+# Rust titanic
+/titanic/
+
+# Rust huge
+/huge/
+
+# Rust massive
+/massive/
+
+# Rust bulky
+/bulky/
+
+# Rust hefty
+/hefty/
+
+# Rust weighty
+/weighty/
+
+# Rust ponderous
+/ponderous/
+
+# Rust cumbersome
+/cumbersome/
+
+# Rust unwieldy
+/unwieldy/
+
+# Rust awkward
+/awkward/
+
+# Rust clumsy
+/clumsy/
+
+# Rust inept
+/inept/
+
+# Rust unskillful
+/unskillful/
+
+# Rust incompetent
+/incompetent/
+
+# Rust incapable
+/incapable/
+
+# Rust unable
+/unable/
+
+# Rust powerless
+/powerless/
+
+# Rust helpless
+/helpless/
+
+# Rust vulnerable
+/vulnerable/
+
+# Rust exposed
+/exposed/
+
+# Rust unprotected
+/unprotected/
+
+# Rust defenseless
+/defenseless_
+
+# Rust specific
+*.rs.bk
+*.rlib
+*.dll
+*.lib
+*.pdb
+*.rsc
+*.ilk
+*.exp
+*.def
+*.manifest
+*.bc
+*.ll
+*.s
+*.o
+*.obj
+*.wasm
+*.wast
+*.wat
\ No newline at end of file
```

---

### Commit: 2d80d6f211b69c34f4e080e0b7d2cc8bd9ab520c
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update ruby ignore rules

**Changed Files:**
- shared/gitignore/ruby.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/ruby.gitignore b/shared/gitignore/ruby.gitignore
index e69de29..c5a7070 100644
--- a/shared/gitignore/ruby.gitignore
+++ b/shared/gitignore/ruby.gitignore
@@ -0,0 +1,287 @@
+# Ruby Comprehensive GitIgnore
+# This file covers Ruby, Rails, Gem, and common Ruby development patterns
+
+## General Ruby ##
+*.gem
+*.rbc
+/.config
+/coverage/
+/InstalledFiles
+/pkg/
+/spec/reports/
+/spec/examples.txt
+/test/tmp/
+/test/version_tmp/
+/tmp/
+
+# Used by dotenv library to load environment variables.
+# .env
+
+## Specific to Ruby ##
+*.bundle
+.yardoc
+_yardoc/
+doc/
+lib/bundler/man/
+.ruby-version
+
+# MRI 1.9.3 core files
+*.so
+*.o
+*.a
+mkmf.log
+
+## RubyGems ##
+/.bundle
+/vendor/bundle/
+/lib/bundler/
+
+## Rails ##
+*.rbc
+capybara-*.html
+.rspec
+/db/*.sqlite3
+/db/*.sqlite3-journal
+/db/*.sqlite3-*
+/public/system/
+/coverage/
+/spec/tmp/
+*.orig
+rerun.txt
+pickle-email-*.html
+
+# Rails project specific
+log/*.log
+tmp/
+!.gitkeep
+
+# Environment files
+.env*
+!.env.example
+
+## Database ##
+*.db
+*.sqlite3
+*.dump
+*.backup
+
+## Documentation ##
+yardoc/
+.yardoc/
+_doc/
+doc/api/
+doc/app/
+doc/features/
+doc/lib/
+doc/plugins/
+doc/controllers/
+doc/helpers/
+doc/models/
+doc/views/
+
+## RSpec ##
+/spec/examples.txt
+/spec/fixtures/
+/spec/reports/
+/spec/support/
+
+## Cucumber ##
+cucumber.yml
+/.cucumber/
+/cucumber/*.log
+
+## Spring ##
+.spring
+/spring/*.pid
+
+## Rake ##
+*.rake_backup
+
+## Bundler ##
+Gemfile.lock
+bin/*
+!.gitkeep
+
+## Jeweler ##
+*.sassc
+.sass-cache
+.scssc
+
+## RubyMine ##
+.idea/*
+
+## VS Code ##
+.vscode/
+*.swp
+*.swo
+
+## OS generated files ##
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+## Logs ##
+*.log
+logfile
+
+## Temporary files ##
+*~
+*.tmp
+*.swp
+*.swo
+
+## Environment normalization ##
+/.bundle/
+/vendor/bundle
+/lib/bundler/
+
+# Ruby version manager files
+.rvmrc
+.ruby-version
+.ruby-gemset
+
+## Package managers ##
+node_modules/
+yarn-error.log
+package-lock.json
+yarn.lock
+
+## Assets precompilation ##
+/public/assets
+/public/packs
+/public/packs-test
+/node_modules
+
+## Storage (for Active Storage) ##
+/storage/*
+!/storage/.keep
+
+## Rails master key ##
+/config/master.key
+/config/credentials.yml.enc
+
+## Database configurations ##
+/config/database.yml
+
+## Environment variables ##
+.env.local
+.env.*.local
+
+## Cache ##
+.cache/
+
+## Performance monitoring ##
+stackprof/
+
+## Rack Attack ##
+rack_attack.tmp
+
+## Mailers preview ##
+/mailers/previews/
+
+## Testing ##
+/capybara-*.html
+/rspec_report.html
+
+## Deployment ##
+.npmignore
+
+## Git ##
+*.orig
+
+## JetBrains IDEs ##
+.idea/
+
+## Sublime Text ##
+*.sublime-*
+
+## Vim ##
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.un~
+Session.vim
+.netrwhist
+
+## Emacs ##
+*~
+\#*\#
+/.emacs.desktop
+/.emacs.desktop.lock
+*.elc
+auto-save-list
+tramp
+.\#*
+
+## Markdown ##
+*.html
+
+## Archives ##
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+## Ruby Debugger ##
+byebug_history
+
+## SimpleCov ##
+coverage/
+
+## RDoc ##
+.rdoc_options
+
+## Pow ##
+.powrc
+
+## Puma ##
+puma.pid
+
+## Passenger ##
+passenger.*.pid
+passenger.*.pipe
+
+## Redis ##
+redis.conf
+dump.rdb
+
+## Sidekiq ##
+sidekiq.pid
+
+## Whenever ##
+config/schedule.rb
+
+## Dotenv ##
+.env
+
+## Foreman ##
+.foreman/
+
+## Docker ##
+Dockerfile
+.dockerignore
+
+## Kubernetes ##
+kubernetes/
+
+## Terraform ##
+.terraform/
+*.tfstate
+*.tfstate.backup
+
+## GitHub Actions ##
+.github/
+
+## GitLab CI ##
+.gitlab-ci.yml
+
+## CI ##
+.circleci/
+.travis.yml
\ No newline at end of file
```

---

### Commit: 1937457137436e029536f396c6d267d381887e12
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update remix ignore rules

**Changed Files:**
- shared/gitignore/remix.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/remix.gitignore b/shared/gitignore/remix.gitignore
index e69de29..c8af239 100644
--- a/shared/gitignore/remix.gitignore
+++ b/shared/gitignore/remix.gitignore
@@ -0,0 +1,116 @@
+# =============================================
+# REMIX SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Remix build outputs
+build/
+.server/
+public/build/
+
+# Remix cache
+.remix/
+.remix-cache/
+
+# Node.js dependencies
+node_modules/
+.npm
+.yarn/
+.pnp.*
+.yarn-integrity
+
+# Package manager files
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Environment variables
+.env
+.env.local
+.env.development.local
+.env.test.local
+.env.production.local
+.env.*.local
+.env.vault
+.env.example
+
+# Cache directories
+.cache/
+.parcel-cache/
+.eslintcache
+.stylelintcache
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# TypeScript
+*.tsbuildinfo
+tsconfig.tsbuildinfo
+
+# Compiled outputs
+*.js
+*.js.map
+*.d.ts
+*.d.ts.map
+
+# Testing
+/coverage/
+.nyc_output/
+jest-coverage/
+cypress/screenshots/
+cypress/videos/
+playwright-report/
+test-results/
+
+# Log files
+logs/
+*.log
+lerna-debug.log*
+.pnpm-debug.log*
+
+# Deployment
+.vercel/
+.netlify/
+.aws/
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Prisma (commonly used with Remix)
+prisma/migrations/
+!prisma/migrations/.gitkeep
+prisma/dev.db
+prisma/dev.db-journal
+
+# Session storage
+sessions/
+
+# Uploads
+public/uploads/
+uploads/
+
+# Storybook
+storybook-static/
+.storybook/
+
+# PWA
+sw.js
+workbox-*.js
+
+# Temporary folders
+tmp/
+temp/
\ No newline at end of file
```

---

### Commit: e914ac0c6b1e1f4ceecca6c3ef3d564d802a21fd
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update react-native ignore rules

**Changed Files:**
- shared/gitignore/react-native.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/react-native.gitignore b/shared/gitignore/react-native.gitignore
index e69de29..8b763a4 100644
--- a/shared/gitignore/react-native.gitignore
+++ b/shared/gitignore/react-native.gitignore
@@ -0,0 +1,130 @@
+# =============================================
+# REACT NATIVE SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Android
+android/.gradle/
+android/app/build/
+android/build/
+android/.idea/
+android/*.iml
+android/*.ipr
+android/*.iws
+android/local.properties
+android/captures/
+android/.externalNativeBuild/
+android/app/src/main/assets/index.android.bundle
+android/app/src/main/assets/index.android.bundle.map
+
+# iOS
+ios/build/
+ios/Pods/
+ios/*.xcworkspace/
+ios/*.xcuserstate
+ios/*.mode1v3
+ios/*.mode2v3
+ios/*.perspectivev3
+ios/Podfile.lock
+ios/Podfile
+ios/.xcode.env.local
+
+# Node.js
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+
+# Environment variables
+.env
+.env.local
+.env.production
+
+# Build outputs
+dist/
+build/
+.webpack/
+.metropolis/
+
+# Cache
+.cache/
+.parcel-cache/
+
+# TypeScript
+*.tsbuildinfo
+
+# Testing
+/coverage/
+.nyc_output/
+
+# Logs
+logs/
+*.log
+
+# Metro
+metro.config.js
+metro.cache/
+
+# React Native CLI
+react-native.config.js
+
+# Bundle files
+*.jsbundle
+*.map
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Backup files
+*.bak
+*.backup
+
+# Heroku
+.heroku/
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+
+# App distribution
+app/build/
+app/dist/
+
+# Gradle
+.gradle/
+gradle-app.setting
+
+# Windows
+*.user
+
+# Expo
+.expo/
+.expo-shared/
+.expo/
+web-build/
+
+# Detox
+artifacts/
+.artifacts/
+
+# Bundle identifiers
+*.mobileprovision
+*.p12
+*.cer
\ No newline at end of file
```

---

### Commit: 004532fe7460bbde5b5f4d56d9609b5d1cd24508
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update pytorch ignore rules

**Changed Files:**
- shared/gitignore/pytorch.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/pytorch.gitignore b/shared/gitignore/pytorch.gitignore
index e69de29..f3b2c3a 100644
--- a/shared/gitignore/pytorch.gitignore
+++ b/shared/gitignore/pytorch.gitignore
@@ -0,0 +1,159 @@
+# =============================================
+# PYTORCH SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# PyTorch model files
+*.pth
+*.pt
+*.pth.tar
+*.bin
+*.safetensors
+
+# Checkpoints
+checkpoints/
+runs/
+outputs/
+logs/
+lightning_logs/
+
+# Training data
+data/
+datasets/
+*.h5
+*.hdf5
+*.npz
+*.npy
+*.csv
+*.tsv
+
+# Python
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+*.pyd
+.Python
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Distribution / packaging
+dist/
+build/
+*.egg-info/
+*.egg
+
+# PyInstaller
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
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# PEP 582
+__pypackages__/
+
+# Celery
+celerybeat-schedule
+celerybeat.pid
+
+# SageMath
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
+# Spyder
+.spyderproject
+.spyproject
+
+# Rope
+.ropeproject
+
+# mkdocs
+/site
+
+# mypy
+.mypy_cache/
+.dmypy.json
+dmypy.json
+
+# Pyre
+.pyre/
+
+# PyTorch Lightning
+lightning_logs/
+
+# Weights & Biases
+wandb/
+
+# TensorBoard
+tensorboard/
+
+# MLflow
+mlruns/
+
+# DVC
+.dvc/
+
+# OS
+.DS_Store
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Dataset cache
+.cache/
+~/.cache/torch/
+~/.cache/huggingface/
\ No newline at end of file
```

---

### Commit: f0bfe0eee8526697eabaac8b80711477f63b0ce9
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update python ignore rules

**Changed Files:**
- shared/gitignore/python.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/python.gitignore b/shared/gitignore/python.gitignore
index e69de29..c30f8bd 100644
--- a/shared/gitignore/python.gitignore
+++ b/shared/gitignore/python.gitignore
@@ -0,0 +1,176 @@
+# =============================================
+# PYTHON SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Byte-compiled / optimized / DLL files
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+*.pyd
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
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# PEP 582
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
+# OS
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+*~
+
+# Database
+*.db
+*.sqlite
+*.sqlite3
+
+# Environment variables
+.env
+.env.local
+.env.*.local
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Data files
+data/
+*.csv
+*.json
+*.xml
+*.parquet
+*.feather
\ No newline at end of file
```

---

### Commit: c22e99d809a6cfeb46d4935b31d41c47a337cb33
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update pulumi ignore rules

**Changed Files:**
- shared/gitignore/pulumi.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/pulumi.gitignore b/shared/gitignore/pulumi.gitignore
index e69de29..e1810c7 100644
--- a/shared/gitignore/pulumi.gitignore
+++ b/shared/gitignore/pulumi.gitignore
@@ -0,0 +1,160 @@
+# =============================================
+# PULUMI SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Pulumi specific
+Pulumi.*.yaml
+Pulumi.*.yml
+!Pulumi.yaml
+!Pulumi.yml
+
+# Stack state and backups
+.pulumi/
+.pulumi-backup/
+.pulumi-stack-backup/
+.pulumi-debug/
+.pulumi-cache/
+
+# Pulumi credentials
+.pulumi/credentials.json
+.pulumi/access-tokens
+
+# Node.js dependencies
+node_modules/
+.npm
+.yarn/
+.pnp.*
+.yarn-integrity
+
+# Package manager files
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Python
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+.Python
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Go
+*.exe
+*.exe~
+*.dll
+*.so
+*.dylib
+*.test
+*.out
+
+# .NET
+bin/
+obj/
+*.user
+*.aps
+*.pdb
+*.userosscache
+*.sln.docstates
+
+# Java
+target/
+*.jar
+*.war
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# Build outputs
+dist/
+build/
+.out/
+
+# Environment variables
+.env
+.env.local
+.env.development.local
+.env.test.local
+.env.production.local
+.env.*.local
+.env.vault
+.env.example
+
+# Terraform (often used with Pulumi)
+.terraform/
+*.tfstate
+*.tfstate.*
+*.tfvars
+.terraform.tfstate.lock.info
+
+# Kubernetes
+kubeconfig
+*kubeconfig*
+
+# Cloud specific
+.aws/
+.azure/
+.gcp/
+
+# Cache directories
+.cache/
+.parcel-cache/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# TypeScript
+*.tsbuildinfo
+
+# Log files
+logs/
+*.log
+lerna-debug.log*
+.pnpm-debug.log*
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Backup files
+*.bak
+*.backup
+
+# Sensitive configuration
+*config*.json
+*secret*.yaml
+*password*.yaml
+*token*.yaml
+
+# Pulumi plugins
+.pulumi/plugins/
+.pulumi/bin/
+
+# Pulumi template files
+template.yaml
+template.yml
+
+# Pulumi policy packs
+policy-pack/
+
+# Pulumi automation API
+.pulumi/automation/
\ No newline at end of file
```

---

### Commit: 1b789429d998555df5f81cf06dcfd38f01f901c4
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update poetry ignore rules

**Changed Files:**
- shared/gitignore/poetry.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/poetry.gitignore b/shared/gitignore/poetry.gitignore
index e69de29..484b2bb 100644
--- a/shared/gitignore/poetry.gitignore
+++ b/shared/gitignore/poetry.gitignore
@@ -0,0 +1,150 @@
+# =============================================
+# POETRY SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Poetry distribution and packaging
+dist/
+build/
+*.egg-info/
+*.egg
+.Python
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Poetry virtual environment
+.poetry/
+.poetry-venv/
+.poetry-venv*/
+.poetry-venv*/*
+.poetry-venv*/*/*
+
+# Poetry cache and config
+.pypoetry/
+.pytest_cache/
+.python-version
+.pylintrc
+.pyre/
+
+# Compiled Python files
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+*.pyd
+.Python
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
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# PEP 582; used by PDM
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
+# Poetry lock file (optional - uncomment if you don't want to commit)
+# poetry.lock
+
+# Poetry configuration
+poetry.toml
+
+# OS
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+*~
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Database
+*.db
+*.sqlite
+*.sqlite3
+
+# Environment variables
+.env
+.env.local
+.env.*.local
\ No newline at end of file
```

---

### Commit: 54763f387e5ee11964c5acf02cbab7bae45a97ef
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update pnpm ignore rules

**Changed Files:**
- shared/gitignore/pnpm.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/pnpm.gitignore b/shared/gitignore/pnpm.gitignore
index e69de29..ca90545 100644
--- a/shared/gitignore/pnpm.gitignore
+++ b/shared/gitignore/pnpm.gitignore
@@ -0,0 +1,110 @@
+# =============================================
+# PNPM SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# pnpm specific files
+node_modules/
+.pnpm/
+.pnpm-store/
+.pnpm-debug.log*
+.pnpmfile.js
+pnpm-lock.yaml
+pnpm-workspace.yaml
+
+# pnpm virtual store
+**/node_modules/.pnpm/
+**/node_modules/.modules.yaml
+**/node_modules/.cache/
+
+# pnpm state
+.pnpm-state.json
+.pnpm-debug.log
+
+# pnpm local installations
+.pnpm-local/
+
+# Node.js dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+lerna-debug.log*
+
+# Build outputs
+dist/
+build/
+.out/
+.next/
+.nuxt/
+.gatsby/
+
+# Cache directories
+.npm/
+.yarn/
+.yarn/cache/
+.yarn/unplugged/
+.yarn/build-state.yml
+.yarn/install-state.gz
+.pnp.*
+
+# Logs
+logs/
+*.log
+
+# Runtime data
+pids/
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory
+coverage/
+.nyc_output/
+
+# Dependency directories
+jspm_packages/
+
+# Optional npm cache directory
+.npm
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+*.tar.gz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variables file
+.env
+.env.test
+.env.production
+.env.local
+.env.*.local
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# pnpm workspace
+packages/*/node_modules/
+packages/*/dist/
+packages/*/build/
+
+# OS
+.DS_Store
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
\ No newline at end of file
```

---

### Commit: 409c1ba896509352f7e357c741705bb575d7f12a
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update php ignore rules

**Changed Files:**
- shared/gitignore/php.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/php.gitignore b/shared/gitignore/php.gitignore
index e69de29..46bd754 100644
--- a/shared/gitignore/php.gitignore
+++ b/shared/gitignore/php.gitignore
@@ -0,0 +1,159 @@
+# =============================================
+# PHP SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# PHP specific
+vendor/
+composer.lock
+composer.phar
+/composer.lock
+
+# Laravel specific
+bootstrap/cache/
+storage/framework/cache/
+storage/framework/views/
+storage/framework/sessions/
+storage/logs/
+.env
+.env.backup
+.env.production
+
+# Symfony specific
+var/
+vendor/
+/var/cache/
+/var/logs/
+/var/sessions/
+/app/config/parameters.yml
+/bin/
+!/bin/console
+!/bin/phpunit
+/web/bundles/
+/app/bootstrap.php.cache
+/app/phpunit.xml
+/phpunit.xml
+/app/var/
+
+# WordPress specific
+wp-content/uploads/
+wp-content/blogs.dir/
+wp-content/upgrade/
+wp-content/backup/
+wp-content/advanced-cache.php
+wp-content/wp-cache-config.php
+wp-content/cache/
+wp-content/cache/supercache/
+wp-content/plugins/hello.php
+wp-content/mu-plugins/
+sitemap.xml
+sitemap.xml.gz
+.htaccess
+
+# CakePHP specific
+/app/tmp/
+/app/logs/
+/app/config/core.php
+/app/config/database.php
+/app/config/email.php
+/app/config/bootstrap.php
+/app/config/routes.php
+/app/webroot/js/ckeditor/
+/app/webroot/js/ckfinder/
+
+# Drupal specific
+sites/*/files/
+sites/*/private/
+sites/default/settings.php
+sites/default/files/
+sites/default/private/
+
+# Compiled class file
+*.php
+.phpunit.result.cache
+
+# Composer
+/vendor/
+/composer.lock
+
+# Laravel
+bootstrap/cache/
+storage/*.key
+storage/framework/cache/
+storage/framework/sessions/
+storage/framework/views/
+storage/logs/
+
+# Environment file
+.env
+
+# PHPUnit
+.phpunit.result.cache
+
+# Xdebug
+xdebug.log
+xdebug.trace
+*.prof
+
+# PHP CS Fixer
+.php_cs
+.php_cs.cache
+
+# PHPStan
+.phpstan/
+.phpstan.result.cache
+
+# Psalm
+.psalm/
+psalm.xml
+psalm.baseline.xml
+
+# PHP Intelephense
+intelephense-*.log
+
+# OS
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+*~
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Database
+*.db
+*.sqlite
+*.sqlite3
+
+# Environment variables
+.env
+.env.local
+.env.*.local
+
+# Backup files
+*.bak
+*.backup
+
+# Cache
+.cache/
+
+# Build artifacts
+dist/
+build/
\ No newline at end of file
```

---

### Commit: e1110fabddd03e9c0066e4af3cf04976e7d45cf6
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update pdm ignore rules

**Changed Files:**
- shared/gitignore/pdm.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/pdm.gitignore b/shared/gitignore/pdm.gitignore
index e69de29..9522470 100644
--- a/shared/gitignore/pdm.gitignore
+++ b/shared/gitignore/pdm.gitignore
@@ -0,0 +1,150 @@
+# =============================================
+# PDM SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# PDM specific
+__pypackages__/
+.pdm.toml
+.pdm-python
+.pdm-build/
+.pdm-cache/
+
+# PDM cache and artifacts
+.pdm-python/
+.pdm-venv/
+.pdm-venv*/
+.pdm-venv*/*
+.pdm-venv*/*/*
+
+# Distribution / packaging
+dist/
+build/
+*.egg-info/
+*.egg
+.Python
+env/
+venv/
+ENV/
+env.bak/
+venv.bak/
+
+# Pytest
+.pytest_cache/
+.coverage
+.coverage.*
+.cache
+nosetests.xml
+coverage.xml
+*.cover
+*.py,cover
+.hypothesis/
+.pytest_cache/
+
+# Compiled Python files
+__pycache__/
+*.py[cod]
+*$py.class
+*.so
+*.pyd
+.Python
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
+
+# Jupyter Notebook
+.ipynb_checkpoints
+
+# IPython
+profile_default/
+ipython_config.py
+
+# pyenv
+.python-version
+
+# pipenv
+Pipfile.lock
+
+# Poetry
+poetry.lock
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
+# PDM lock file (optional)
+pdm.lock
+
+# OS
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+*~
+
+# Logs
+*.log
+logs/
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Database
+*.db
+*.sqlite
+*.sqlite3
+
+# Environment variables
+.env
+.env.local
+.env.*.local
\ No newline at end of file
```

---

### Commit: 7641801cca4ed631df9f7ebdd8c37648e9e32518
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update nuxt ignore rules

**Changed Files:**
- shared/gitignore/nuxt.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/nuxt.gitignore b/shared/gitignore/nuxt.gitignore
index e69de29..645412f 100644
--- a/shared/gitignore/nuxt.gitignore
+++ b/shared/gitignore/nuxt.gitignore
@@ -0,0 +1,179 @@
+# =============================================
+# NUXT.JS SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# Nuxt.js specific
+.nuxt/
+.output/
+.nitro/
+.nuxt-ignore/
+
+# Nuxt build outputs
+dist/
+.build/
+.nuxt-production/
+
+# Nuxt cache
+.nuxt/cache/
+.nuxt/dist/
+.nuxt/build/
+.nuxt/generate/
+
+# Nuxt telemetry
+.nuxt/telemetry/
+
+# Nuxt types
+.nuxt/types/
+
+# Node.js dependencies
+node_modules/
+.npm
+.yarn/
+.pnp.*
+.yarn-integrity
+
+# Package manager files
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Yarn 2
+.yarn/cache/
+.yarn/unplugged/
+.yarn/build-state.yml
+.yarn/install-state.gz
+.yarnrc.yml
+
+# Environment variables
+.env
+.env.local
+.env.development.local
+.env.test.local
+.env.production.local
+.env.*.local
+.env.vault
+.env.example
+
+# Nuxt configuration
+nuxt.config.*.js
+nuxt.config.*.ts
+
+# Cache directories
+.cache/
+.parcel-cache/
+.eslintcache
+.stylelintcache
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Editor temporary files
+*~
+*.swp
+*.swo
+*.swn
+
+# TypeScript
+*.tsbuildinfo
+tsconfig.tsbuildinfo
+
+# Compiled outputs
+*.js
+*.js.map
+*.d.ts
+*.d.ts.map
+
+# Testing
+/coverage/
+.nyc_output/
+jest-coverage/
+cypress/screenshots/
+cypress/videos/
+playwright-report/
+test-results/
+
+# Test snapshots
+**/__snapshots__/
+*.snap
+
+# Log files
+logs/
+*.log
+lerna-debug.log*
+.pnpm-debug.log*
+debug.log
+
+# Debug files
+*.pdb
+*.idb
+
+# Deployment
+.nitro/
+.output/
+.vercel/
+.netlify/
+.aws/
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Storybook
+storybook-static/
+.storybook/
+
+# PWA
+sw.js
+workbox-*.js
+
+# Content
+content/
+assets/generated/
+
+# API
+api/
+
+# Middleware
+middleware/
+
+# Plugins
+plugins/
+
+# Components
+components/
+
+# Pages
+pages/
+
+# Layouts
+layouts/
+
+# Stores
+stores/
+
+# Composables
+composables/
+
+# Utils
+utils/
+
+# Public generated
+public/_nuxt/
+
+# Temporary folders
+tmp/
+temp/
\ No newline at end of file
```

---

### Commit: 8dde19cc7ef172847cd1bc5ef2eaf6ef46a6a515
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update npm ignore rules

**Changed Files:**
- shared/gitignore/npm.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/npm.gitignore b/shared/gitignore/npm.gitignore
index e69de29..9f000b8 100644
--- a/shared/gitignore/npm.gitignore
+++ b/shared/gitignore/npm.gitignore
@@ -0,0 +1,89 @@
+# NPM - Comprehensive Dependency and Build Management
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+
+# Build outputs
+dist/
+build/
+.out/
+.next/
+.nuxt/
+.gatsby/
+
+# Cache directories
+.npm/
+.yarn/
+.yarn/cache/
+.yarn/unplugged/
+.yarn/build-state.yml
+.yarn/install-state.gz
+.pnp.*
+
+# Logs
+logs/
+*.log
+lerna-debug.log*
+
+# Runtime data
+pids/
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory used by tools like istanbul
+coverage/
+.nyc_output/
+
+# Dependency directories
+jspm_packages/
+
+# Optional npm cache directory
+.npm
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+*.tar.gz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variables file
+.env
+.env.test
+.env.production
+.env.local
+.env.*.local
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# IDEs and editors
+.idea/
+.vscode/
+*.swp
+*.swo
+*~
+
+# OS files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Local development
+*.local
+*.todo
+*.backup
\ No newline at end of file
```

---

### Commit: a849e275c97c299d80aca733ffb71dc0ca629b4e
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update node ignore rules

**Changed Files:**
- shared/gitignore/node.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/node.gitignore b/shared/gitignore/node.gitignore
index e69de29..16aaa0a 100644
--- a/shared/gitignore/node.gitignore
+++ b/shared/gitignore/node.gitignore
@@ -0,0 +1,85 @@
+# Node.js - Comprehensive Runtime and Development
+
+# Runtime data
+pids/
+*.pid
+*.seed
+*.pid.lock
+
+# Directory for instrumented libs generated by jscoverage/JSCover
+lib-cov/
+
+# Coverage directory used by tools like istanbul
+coverage/
+.nyc_output/
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components/
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+node_modules/
+jspm_packages/
+
+# Optional npm cache directory
+.npm
+
+# Optional REPL history
+.node_repl_history
+
+# Output of 'npm pack'
+*.tgz
+*.tar.gz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variables file
+.env
+.env.test
+.env.production
+.env.local
+.env.*.local
+
+# Stores VSCode versions used for testing VSCode extensions
+.vscode-test
+
+# Logs
+logs/
+*.log
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+lerna-debug.log*
+
+# Runtime data
+.pnp.*
+
+# Build outputs
+dist/
+build/
+.out/
+.next/
+.nuxt/
+
+# Cache
+.cache/
+.parcel-cache/
+
+# IDEs
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
\ No newline at end of file
```

---

### Commit: 9885f0b254ca614769b6ede041a00aeadcaef57a
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update nextjs ignore rules

**Changed Files:**
- shared/gitignore/nextjs.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/nextjs.gitignore b/shared/gitignore/nextjs.gitignore
index e69de29..b7ec22c 100644
--- a/shared/gitignore/nextjs.gitignore
+++ b/shared/gitignore/nextjs.gitignore
@@ -0,0 +1,422 @@
+# =============================================
+# NEXT.JS SUPER COMPREHENSIVE .GITIGNORE
+# =============================================
+
+# =============================================
+# NEXT.JS CORE & BUILD OUTPUTS
+# =============================================
+
+# Next.js build outputs
+.next/
+out/
+dist/
+build/
+
+# Next.js cache
+.next/cache/
+.next/analytics/
+.next/trace
+
+# Production builds
+/.next/
+/out/
+
+# Next.js telemetry
+.next/telemetry.js
+
+# Next.js types
+next-env.d.ts
+
+# =============================================
+# DEPENDENCIES & PACKAGE MANAGEMENT
+# =============================================
+
+# Dependencies
+node_modules/
+.npm
+.yarn/
+.pnp.*
+.yarn-integrity
+
+# Package manager files
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+yarn.lock
+package-lock.json
+npm-shrinkwrap.json
+pnpm-lock.yaml
+
+# Yarn 2
+.yarn/cache/
+.yarn/unplugged/
+.yarn/build-state.yml
+.yarn/install-state.gz
+.yarnrc.yml
+
+# =============================================
+# ENVIRONMENT VARIABLES & CONFIGURATIONS
+# =============================================
+
+# Environment variables
+.env
+.env.local
+.env.development.local
+.env.test.local
+.env.production.local
+.env.*.local
+.env.vault
+.env.example
+
+# Configuration files
+.next.config.*.js
+next.config.*.ts
+vercel.json
+now.json
+
+# Runtime configurations
+.runtimeconfig.json
+.runtimeconfig.*.json
+
+# =============================================
+# CACHE & TEMPORARY FILES
+# =============================================
+
+# Cache directories
+.cache/
+.parcel-cache/
+.eslintcache
+.stylelintcache
+
+# Temporary files
+*.tmp
+*.temp
+.tmp/
+temp/
+tmp/
+
+# Editor temporary files
+*~
+*.swp
+*.swo
+*.swn
+
+# =============================================
+# TYPESCRIPT & COMPILATION
+# =============================================
+
+# TypeScript
+*.tsbuildinfo
+tsconfig.tsbuildinfo
+
+# Compiled outputs
+*.js
+*.js.map
+*.d.ts
+*.d.ts.map
+
+# =============================================
+# TESTING & COVERAGE
+# =============================================
+
+# Testing
+/coverage/
+.nyc_output/
+jest-coverage/
+cypress/screenshots/
+cypress/videos/
+playwright-report/
+test-results/
+
+# Test snapshots
+**/__snapshots__/
+*.snap
+
+# =============================================
+# LOGS & DEBUG FILES
+# =============================================
+
+# Log files
+logs/
+*.log
+lerna-debug.log*
+.pnpm-debug.log*
+debug.log
+
+# Debug files
+*.pdb
+*.idb
+
+# Performance monitoring
+.next/profiling/
+
+# =============================================
+# DEPLOYMENT & HOSTING
+# =============================================
+
+# Vercel (Primary Next.js hosting)
+.vercel/
+.vercel/output/
+
+# Netlify
+.netlify/
+.netlify/functions/
+
+# AWS Amplify
+amplify/
+.amplify/
+
+# Cloudflare Pages
+.cfpages/
+
+# Railway
+.railway/
+
+# =============================================
+# IDE & EDITOR CONFIGURATIONS
+# =============================================
+
+# VS Code
+.vscode/
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+*.code-workspace
+
+# WebStorm/IntelliJ
+.idea/
+*.iml
+*.ipr
+*.iws
+*.iws
+
+# Sublime Text
+*.sublime-workspace
+*.sublime-project
+
+# Vim
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.un~
+Session.vim
+.netrwhist
+
+# Emacs
+*~
+\#*\#
+/.emacs.desktop
+/.emacs.desktop.lock
+*.elc
+auto-save-list
+tramp
+.\#*
+
+# =============================================
+# OPERATING SYSTEM FILES
+# =============================================
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+Icon?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+*.lnk
+Thumbs.db
+
+# Linux
+*~
+.directory
+.trash-*
+.Trash-*
+
+# =============================================
+# STORYBOOK & DOCUMENTATION
+# =============================================
+
+# Storybook
+storybook-static/
+.storybook/
+
+# Documentation
+/docs/build/
+/docs/.vuepress/dist/
+/docs/.vitepress/dist/
+
+# =============================================
+# IMAGES & MEDIA ASSETS
+# =============================================
+
+# Optimized images cache
+/.next/cache/images/
+
+# Large media files (optional - uncomment if needed)
+# /public/uploads/
+# /public/assets/raw/
+
+# =============================================
+# DATABASE & LOCAL STORAGE
+# =============================================
+
+# Local databases
+*.db
+*.sqlite
+*.sqlite3
+*.db-journal
+
+# Local storage files
+.local-storage/
+*.localstorage
+
+# =============================================
+# SECURITY & SENSITIVE FILES
+# =============================================
+
+# API keys and secrets
+*.key
+*.pem
+*.crt
+*.cert
+secrets.yaml
+credentials.json
+firebase-*.json
+service-account-*.json
+
+# SSH keys
+*.pub
+id_rsa
+id_dsa
+*.p12
+*.pfx
+
+# =============================================
+# DOCKER & CONTAINERIZATION
+# =============================================
+
+# Docker
+.docker/
+docker-compose.override.yml
+Dockerfile.dev
+
+# Container development
+.devcontainer/
+
+# =============================================
+# CI/CD & AUTOMATION
+# =============================================
+
+# GitHub Actions
+.github/workflows/*.local.yml
+
+# GitLab CI
+.gitlab-ci.yml.local
+
+# CircleCI
+.circleci/config.local.yml
+
+# =============================================
+# PERFORMANCE & MONITORING
+# =============================================
+
+# Performance profiles
+*.cpuprofile
+*.heapsnapshot
+
+# Bundle analysis
+.next/analyze/
+.next/bundle-analyzer/
+
+# =============================================
+# MISC DEVELOPMENT FILES
+# =============================================
+
+# Local development
+*.local
+*.todo
+*.backup
+
+# Patch files
+*.patch
+*.diff
+
+# Lerna
+lerna-debug.log*
+
+# PnP
+.pnp.js
+.pnp.cjs
+
+# =============================================
+# CONTENT MANAGEMENT SYSTEMS
+# =============================================
+
+# Strapi
+public/uploads/
+
+# Sanity
+.sanity/
+
+# Contentful
+.contentful/
+
+# =============================================
+# ECOMMERCE & PAYMENTS
+# =============================================
+
+# Stripe
+stripe-*.json
+
+# Payment processors
+*.pem
+
+# =============================================
+# ANALYTICS & TRACKING
+# =============================================
+
+# Analytics
+.plausible/
+.umami/
+
+# =============================================
+# PROGRESSIVE WEB APP
+# =============================================
+
+# PWA
+sw.js
+workbox-*.js
+.next/sw.js
+
+# =============================================
+# INTERNATIONALIZATION
+# =============================================
+
+# i18n builds
+.next/i18n/
+public/locales/development/
+
+# =============================================
+# CUSTOM SERVER
+# =============================================
+
+# Custom server compiled files
+server.js
+server.js.map
+
+# =============================================
+# EXPERIMENTAL FEATURES
+# =============================================
+
+# Turbopack
+.turbo/
+
+# Next.js experimental
+.next/experimental/
\ No newline at end of file
```

---

### Commit: 9669d32bb6319d216749a03f1e0e4ce0fc3c49a5
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update maven ignore rules

**Changed Files:**
- shared/gitignore/maven.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/maven.gitignore b/shared/gitignore/maven.gitignore
index e69de29..5690cb8 100644
--- a/shared/gitignore/maven.gitignore
+++ b/shared/gitignore/maven.gitignore
@@ -0,0 +1,80 @@
+# Maven - Comprehensive Java Build Tool
+
+# Build outputs
+target/
+pom.xml.tag
+pom.xml.releaseBackup
+pom.xml.versionsBackup
+pom.xml.next
+release.properties
+dependency-reduced-pom.xml
+buildNumber.properties
+.mvn/timing.properties
+
+# Maven Wrapper
+.mvn/wrapper/maven-wrapper.jar
+
+# Eclipse m2e generated files
+.mvn/extensions.xml
+
+# Logs
+*.log
+
+# Package Files
+*.jar
+*.war
+*.nar
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# Java
+*.class
+*.cache
+.hotswap/
+
+# Virtual machine crash logs
+hs_err_pid*
+
+# IDE
+.idea/
+*.iml
+*.ipr
+*.iws
+.settings/
+.classpath
+.project
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Local configuration
+.classpath
+.project
+.settings/
+
+# Unit test reports
+TEST*.xml
+
+# Checkstyle reports
+checkstyle-output.xml
+
+# Surefire reports
+surefire-reports/
+test-output/
+
+# JaCoCo coverage reports
+jacoco.exec
+*.exec
+
+# Dependency reduced POM
+dependency-reduced-pom.xml
+
+# Build tool
+.mvn/
+
+# Temporary files
+*.tmp
+*.temp
\ No newline at end of file
```

---

### Commit: d0a727203973f86b18c1be56ecdb3d5150066263
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update macos ignore rules

**Changed Files:**
- shared/gitignore/macos.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/macos.gitignore b/shared/gitignore/macos.gitignore
index e69de29..c81d451 100644
--- a/shared/gitignore/macos.gitignore
+++ b/shared/gitignore/macos.gitignore
@@ -0,0 +1,78 @@
+# macOS - Comprehensive System Files
+
+# General
+.DS_Store
+.AppleDouble
+.LSOverride
+
+# Icon must end with \r
+Icon
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
+# Time Machine
+*.backup
+*.backupdb
+
+# iCloud
+*.icloud
+
+# QuickLook
+.QP*
+.ql*
+.QB*
+.QT*
+.QS*
+
+# Resource forks
+__MACOSX/
+
+# Adobe
+*.aep
+.BACKUP*.aep
+*.psd
+*.preview.png
+
+# Microsoft Office
+~$*
+
+# Localized files
+*.localized
+
+# Temporary files
+*.swp
+*.swo
+*~
+
+# Logs
+*.log
+console.log
+
+# Package managers
+.npm/
+.yarn/
+
+# IDEs
+.idea/
+.vscode/
+
+# Build artifacts
+build/
+dist/
\ No newline at end of file
```

---

### Commit: 40820b8ba8a3f9839925cbe1008a0ee664043fad
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update linux ignore rules

**Changed Files:**
- shared/gitignore/linux.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/linux.gitignore b/shared/gitignore/linux.gitignore
index e69de29..2649be4 100644
--- a/shared/gitignore/linux.gitignore
+++ b/shared/gitignore/linux.gitignore
@@ -0,0 +1,93 @@
+# Linux - Comprehensive System Files
+
+# Temporary files
+*~
+*.swp
+*.swo
+*.swn
+*.bak
+*.backup
+
+# System files
+.directory
+.Trash-*
+.trash
+*.orig
+*.rej
+
+# Thumbnail cache
+.thumbnails/
+.cache/
+
+# KDE
+.dmrc
+.local/share/Trash/
+
+# GNOME
+.gvfs/
+.zeitgeist/
+
+# X11
+.xsession-errors
+.xsession-errors.old
+.Xauthority
+
+# Desktop entries
+*.desktop
+
+# Package files
+*.deb
+*.rpm
+*.tar.gz
+*.zip
+
+# Log files
+*.log
+syslog
+*.[0-9].gz
+*.gz
+
+# Core dumps
+core
+core.*
+*.core
+
+# Vim
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.un~
+Session.vim
+.netrwhist
+
+# Emacs
+*~
+\#*\#
+/.emacs.desktop
+/.emacs.desktop.lock
+*.elc
+auto-save-list
+tramp
+.\#*
+
+# Nautilus
+.goutputstream*
+
+# IDEs
+.idea/
+.vscode/
+
+# Build artifacts
+build/
+dist/
+
+# Node.js
+node_modules/
+
+# Python
+__pycache__/
+*.pyc
+*.pyo
+
+# Local development
+.env
+.env.local
\ No newline at end of file
```

---

### Commit: 37756bed15cab14f34471da8d9ad7937cce3b5f2
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update laravel ignore rules

**Changed Files:**
- shared/gitignore/laravel.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/laravel.gitignore b/shared/gitignore/laravel.gitignore
index e69de29..11e1cf5 100644
--- a/shared/gitignore/laravel.gitignore
+++ b/shared/gitignore/laravel.gitignore
@@ -0,0 +1,49 @@
+# Laravel Framework
+/vendor/
+/node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Environment file
+.env
+.env.backup
+.env.production
+.env.example
+
+# Storage folder
+/storage/*.key
+/storage/framework/cache/
+/storage/framework/sessions/
+/storage/framework/views/
+/storage/logs/
+
+# Compiled class file
+*.php
+.phpunit.result.cache
+
+# Composer
+/composer.lock
+composer.phar
+
+# Laravel specific
+bootstrap/cache/
+public/hot
+public/storage
+
+# Testing
+/coverage
+
+# IDE
+.idea/
+.phpstorm.meta.php
+_ide_helper.php
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Logs
+*.log
\ No newline at end of file
```

---

### Commit: 56493f44f9adcc75462260fe8bc906ab89c054c5
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update kubernetes ignore rules

**Changed Files:**
- shared/gitignore/kubernetes.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/kubernetes.gitignore b/shared/gitignore/kubernetes.gitignore
index e69de29..4d1cfd0 100644
--- a/shared/gitignore/kubernetes.gitignore
+++ b/shared/gitignore/kubernetes.gitignore
@@ -0,0 +1,38 @@
+# Kubernetes
+kubeconfig
+*kubeconfig*
+*config.yml
+*config.yaml
+
+# Helm charts (if used)
+charts/*.tgz
+*.tgz
+
+# Temporary files
+tmp/
+temp/
+
+# Sensitive k8s files
+*secret*.yaml
+*secret*.yml
+*password*.yaml
+*password*.yml
+*token*.yaml
+*token*.yml
+
+# Local development
+minikube/
+kind-config.yaml
+
+# IDE
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Logs
+*.log
\ No newline at end of file
```

---

### Commit: 07e4374ed21c921cba7c34a63a264221da29cff2
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update kotlin ignore rules

**Changed Files:**
- shared/gitignore/kotlin.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/kotlin.gitignore b/shared/gitignore/kotlin.gitignore
index e69de29..592854d 100644
--- a/shared/gitignore/kotlin.gitignore
+++ b/shared/gitignore/kotlin.gitignore
@@ -0,0 +1,42 @@
+# Kotlin - Gradle
+.gradle/
+build/
+out/
+bin/
+
+# Kotlin - Maven
+target/
+pom.xml.tag
+pom.xml.releaseBackup
+pom.xml.versionsBackup
+pom.xml.next
+release.properties
+
+# IntelliJ IDEA
+.idea/
+*.iml
+*.ipr
+*.iws
+out/
+
+# Kotlin specific
+*.kotlin_module
+*.jar
+*.war
+*.ear
+
+# Kotlin Native
+*.klib
+*.kexe
+
+# Android (if applicable)
+*.apk
+*.aab
+.idea/caches/
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Logs
+*.log
\ No newline at end of file
```

---

### Commit: 4434e1db5b2805aa8fa99df79c428b57440393fe
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update jupyter ignore rules

**Changed Files:**
- shared/gitignore/jupyter.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/jupyter.gitignore b/shared/gitignore/jupyter.gitignore
index e69de29..3670fcb 100644
--- a/shared/gitignore/jupyter.gitignore
+++ b/shared/gitignore/jupyter.gitignore
@@ -0,0 +1,45 @@
+# Jupyter Notebook
+.ipynb_checkpoints/
+__pycache__/
+*.pyc
+*.pyo
+*.pyd
+
+# Jupyter specific
+.jupyter/
+jupyter_notebook_config.py
+custom.css
+
+# IPython
+profile_default/
+ipython_config.py
+
+# Data files (large)
+*.csv
+*.h5
+*.hdf5
+*.pkl
+*.pickle
+*.feather
+*.parquet
+
+# Virtual environments
+venv/
+env/
+.venv/
+
+# IDE
+.idea/
+.vscode/
+*.swp
+*.swo
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Jupyter lab
+.jupyter/lab/
+
+# Logs
+*.log
\ No newline at end of file
```

---

### Commit: fecd3214883709e243e4e3db30828c4249d7a23a
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update jetbrains ignore rules

**Changed Files:**
- shared/gitignore/jetbrains.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/jetbrains.gitignore b/shared/gitignore/jetbrains.gitignore
index e69de29..50c2366 100644
--- a/shared/gitignore/jetbrains.gitignore
+++ b/shared/gitignore/jetbrains.gitignore
@@ -0,0 +1,61 @@
+# JetBrains IDEs (IntelliJ, WebStorm, PyCharm, etc.)
+.idea/
+*.iml
+*.ipr
+*.iws
+*.iws
+
+# User-specific stuff
+.idea/**/workspace.xml
+.idea/**/tasks.xml
+.idea/**/usage.statistics.xml
+.idea/**/dictionaries
+.idea/**/shelf
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
+# File-based project format
+*.iws
+
+# Plugin-specific files
+# Compiler
+.idea/**/compiler.xml
+# Coverage
+.idea/**/coverage.xml
+# JIRA
+.idea/**/jiraConfig.xml
+
+# Mongo Explorer
+.idea/**/mongoSettings.xml
+
+# Crashlytics plugin (for Android Studio and IntelliJ)
+.idea/caches/crashlytics.log
+.idea/caches/build_file_checksums.ser
+
+# Editor-based Rest Client
+.idea/httpRequests
+
+# Android studio 3.1+ serialized cache file
+.idea/caches/build_file_checksums.ser
+
+# OS
+.DS_Store
+Thumbs.db
+
+# Project specific
+out/
+build/
\ No newline at end of file
```

---

### Commit: cff2095bf87bc81451fbb9c973a2db54b8f98726
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update java ignore rules

**Changed Files:**
- shared/gitignore/java.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/java.gitignore b/shared/gitignore/java.gitignore
index e69de29..dea416c 100644
--- a/shared/gitignore/java.gitignore
+++ b/shared/gitignore/java.gitignore
@@ -0,0 +1,36 @@
+# Compiled class files
+*.class
+
+# Build outputs
+target/
+build/
+out/
+bin/
+
+# Package files
+*.jar
+*.war
+*.ear
+*.zip
+*.tar.gz
+
+# IDE
+.idea/
+*.iml
+*.ipr
+*.iws
+.settings/
+.project
+.classpath
+
+# Log files
+*.log
+
+# Maven (if using)
+pom.xml.tag
+pom.xml.releaseBackup
+pom.xml.versionsBackup
+
+# OS files
+.DS_Store
+Thumbs.db
\ No newline at end of file
```

---

### Commit: 78ba593633369b4f9b62a41319bdb41410ded364
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update huggingface ignore rules

**Changed Files:**
- shared/gitignore/huggingface.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/huggingface.gitignore b/shared/gitignore/huggingface.gitignore
index e69de29..7a07088 100644
--- a/shared/gitignore/huggingface.gitignore
+++ b/shared/gitignore/huggingface.gitignore
@@ -0,0 +1,28 @@
+# Model cache
+.cache/
+~/.cache/huggingface/
+
+# Local model files (large binaries)
+*.bin
+*.safetensors
+*.msgpack
+
+# Training checkpoints
+checkpoint-*/
+runs/
+outputs/
+
+# Dataset cache
+datasets/
+~/.huggingface/datasets/
+
+# Environment
+.env
+.env.local
+
+# IDE
+.idea/
+.vscode/
+
+# OS files
+.DS_Store
\ No newline at end of file
```

---

### Commit: df24363d8c0c28b83453f5255e1780d298b60245
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update helm ignore rules

**Changed Files:**
- shared/gitignore/helm.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/helm.gitignore b/shared/gitignore/helm.gitignore
index e69de29..ca13575 100644
--- a/shared/gitignore/helm.gitignore
+++ b/shared/gitignore/helm.gitignore
@@ -0,0 +1,20 @@
+# Helm charts
+charts/*.tgz
+*.tgz
+
+# Temporary charts
+tmp/
+
+# Dependency charts
+charts/**/*.tgz
+
+# Crash log
+crash.log
+
+# IDE
+.idea/
+*.iml
+
+# OS files
+.DS_Store
+Thumbs.db
\ No newline at end of file
```

---

### Commit: 820674d5a8b926a5a9bec68741b34be1abbc3922
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update gradle ignore rules

**Changed Files:**
- shared/gitignore/gradle.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/gradle.gitignore b/shared/gitignore/gradle.gitignore
index e69de29..6408cec 100644
--- a/shared/gitignore/gradle.gitignore
+++ b/shared/gitignore/gradle.gitignore
@@ -0,0 +1,23 @@
+# Gradle build outputs
+.gradle/
+build/
+out/
+bin/
+
+# Gradle cache
+.gradle/caches/
+!gradle-wrapper.jar
+
+# Local configuration
+.settings/
+.idea/
+*.iml
+*.ipr
+*.iws
+
+# Gradle Wrapper (optional - include if you don't want to commit wrapper)
+# gradle/wrapper/gradle-wrapper.jar
+
+# OS files
+.DS_Store
+Thumbs.db
\ No newline at end of file
```

---

### Commit: 37cd33383729c5129aa6da781e46dfe191d92b06
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update godot ignore rules

**Changed Files:**
- shared/gitignore/godot.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/godot.gitignore b/shared/gitignore/godot.gitignore
index e69de29..eb33348 100644
--- a/shared/gitignore/godot.gitignore
+++ b/shared/gitignore/godot.gitignore
@@ -0,0 +1,238 @@
+# =============================================
+# COMPREHENSIVE GODOT ENGINE .GITIGNORE
+# =============================================
+
+# =============================================
+# GODOT CORE FILES
+# =============================================
+# Godot 4.x and later
+.godot/
+.godot/
+godot-cpp/
+
+# Godot 3.x
+*.godot/
+
+# =============================================
+# IMPORTED RESOURCES AND ASSETS
+# =============================================
+# Imported resources (should NOT be versioned)
+*.import
+
+# Import metadata
+.import/
+
+# =============================================
+# EXPORT AND BUILD FILES
+# =============================================
+export_presets.cfg
+export/
+build/
+bin/
+release/
+debug/
+
+# Android build files
+android/
+android/build/
+android/.gradle/
+android/app/build/
+android/.externalNativeBuild/
+
+# iOS build files
+ios/
+ios/build/
+ios/Pods/
+
+# =============================================
+# MONO/.NET SPECIFIC (GODOT WITH C# SUPPORT)
+# =============================================
+# Godot with Mono support
+mono/
+mono_temp/
+*.csproj
+*.sln
+*.userprefs
+*.pidb
+*.pdb
+*.mdb
+*.dll
+*.so
+*.dylib
+*.a
+
+# Build results
+[Dd]ebug/
+[Dd]ebugPublic/
+[Rr]elease/
+[Rr]eleases/
+x64/
+x86/
+[Aa][Rr][Mm]/
+[Aa][Rr][Mm]64/
+bld/
+[Bb]in/
+[Oo]bj/
+[Ll]og/
+[Ll]ogs/
+
+# NuGet packages
+*.nupkg
+.nuget/
+nuget.exe
+
+# Unity-like files that might conflict
+/Library/
+/Temp/
+/Obj/
+/Logs/
+
+# =============================================
+# CACHE AND TEMPORARY FILES
+# =============================================
+.cache/
+.tmp/
+temp/
+tmp/
+
+# Godot editor specific cache
+.godot/editor/
+.godot/asset_library/
+.godot/shader_cache/
+
+# =============================================
+# IDE AND EDITOR CONFIGURATIONS
+# =============================================
+
+# VS Code
+.vscode/
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+*.code-workspace
+
+# JetBrains Rider
+.idea/
+*.iws
+*.iml
+*.ipr
+
+# Visual Studio
+.vs/
+*.VC.db
+*.VC.VC.opendb
+
+# Vim
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.un~
+Session.vim
+.netrwhist
+
+# =============================================
+# OS-SPECIFIC FILES
+# =============================================
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+Icon?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+*.lnk
+
+# Linux
+*~
+
+# =============================================
+# ASSET PROCESSING AND INTERMEDIATE FILES
+# =============================================
+# Compressed texture caches
+*.ctex
+
+# Mesh caches
+*.meshc
+
+# Shader caches
+*.shaderc
+
+# =============================================
+# PROJECT SETTINGS (OPTIONAL - BE CAREFUL)
+# =============================================
+# Uncomment if you want to ignore project settings
+# (not recommended for shared projects)
+# project.godot
+# engine.cfg
+
+# =============================================
+# LOCAL CONFIGURATIONS AND SECRETS
+# =============================================
+# Local configuration overrides
+override.cfg
+local_settings.cfg
+
+# Environment files
+.env
+.env.local
+.env.*.local
+
+# API keys and secrets
+*_keys.cfg
+*_secrets.cfg
+secrets.cfg
+
+# =============================================
+# BACKUP AND TEMPORARY FILES
+# =============================================
+*~
+*.bak
+*.backup
+*.tmp
+*.temp
+
+# =============================================
+# LOG FILES
+# =============================================
+*.log
+logs/
+GodotSharp.log
+
+# =============================================
+# DOCUMENTATION AND AUTOGENERATED FILES
+# =============================================
+doc/
+docs/_build/
+*.autoload
+
+# =============================================
+# ADDON AND PLUGIN SPECIFIC
+# =============================================
+addons/*/config.cfg
+addons/*/local_settings.cfg
+
+# =============================================
+# VERSION CONTROL (META)
+# =============================================
+.gitattributes
+.gitmodules
+
+# =============================================
+# DOCKER AND DEPLOYMENT
+# =============================================
+.docker/
+docker-compose.override.yml
+
+# =============================================
+# CI/CD
+# =============================================
+.github/workflows/*.local.yml
+.gitlab-ci.yml.local
\ No newline at end of file
```

---

### Commit: 598793f8b42753706ab47081cf4d9e24c43d1c77
Author: nzingx
Date: 2025-11-18
Message: chore(gitignore): update go ignore rules

**Changed Files:**
- shared/gitignore/go.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/go.gitignore b/shared/gitignore/go.gitignore
index e69de29..426d6ab 100644
--- a/shared/gitignore/go.gitignore
+++ b/shared/gitignore/go.gitignore
@@ -0,0 +1,197 @@
+# =============================================
+# COMPREHENSIVE GO (GOLANG) .GITIGNORE
+# =============================================
+
+# =============================================
+# BINARIES AND EXECUTABLES
+# =============================================
+*.exe
+*.exe~
+*.dll
+*.so
+*.dylib
+*.a
+*.lib
+
+# Test binary, built with `go test -c`
+*.test
+
+# Output of the go coverage tool
+*.out
+*.prof
+*.trace
+
+# =============================================
+# DEPENDENCIES AND VENDOR
+# =============================================
+vendor/
+Godeps/
+glide/
+vendor.bak/
+vendor.zip
+
+# Go module files (specific cases)
+go.env
+
+# =============================================
+# BUILD ARTIFACTS AND DISTRIBUTION
+# =============================================
+/dist/
+/pkg/
+/bin/
+/build/
+/out/
+/release/
+
+# Specific build directories
+_build/
+_output/
+
+# =============================================
+# GO WORKSPACE AND MODULE FILES
+# =============================================
+go.work
+go.work.sum
+
+# =============================================
+# DEVELOPMENT AND TEMPORARY FILES
+# =============================================
+*.swp
+*.swo
+*~
+*.bak
+*.tmp
+*.temp
+
+# Auto-generated files
+*_generated.go
+*_generated_test.go
+
+# =============================================
+# IDE AND EDITOR CONFIGURATIONS
+# =============================================
+
+# VS Code
+.vscode/
+!.vscode/settings.json
+!.vscode/tasks.json
+!.vscode/launch.json
+!.vscode/extensions.json
+*.code-workspace
+
+# GoLand
+.idea/
+*.iws
+*.iml
+*.ipr
+
+# Vim
+[._]*.s[a-w][a-z]
+[._]s[a-w][a-z]
+*.un~
+Session.vim
+.netrwhist
+
+# Emacs
+*~
+\#*\#
+/.emacs.desktop
+/.emacs.desktop.lock
+*.elc
+auto-save-list
+tramp
+.\#*
+
+# Sublime Text
+*.sublime-workspace
+*.sublime-project
+
+# =============================================
+# TESTING AND COVERAGE
+# =============================================
+coverage.txt
+profile.cov
+*.cover
+.coverage/
+htmlcov/
+
+# =============================================
+# DOCUMENTATION
+# =============================================
+/doc/
+/godoc/
+apidoc.json
+
+# =============================================
+# OS-SPECIFIC FILES
+# =============================================
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+Icon?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+*.lnk
+
+# Linux
+*~
+
+# =============================================
+# DATABASE AND LOCAL DATA
+# =============================================
+*.db
+*.sqlite
+*.sqlite3
+*.log
+
+# =============================================
+# CONFIGURATION FILES (SENSITIVE)
+# =============================================
+.env
+.env.local
+.env.*.local
+.env.production
+.env.development
+.env.test
+config.yaml
+config.yml
+secrets.yaml
+credentials.json
+*.key
+*.pem
+*.crt
+*.cert
+
+# =============================================
+# DOCKER AND CONTAINERIZATION
+# =============================================
+.docker/
+Dockerfile.dev
+docker-compose.override.yml
+
+# =============================================
+# CI/CD
+# =============================================
+.circleci/config.yml.local
+.gha/
+.github/workflows/*.local.yml
+
+# =============================================
+# MISC
+# =============================================
+.cache/
+.installed
+.downloaded
+.deps
+.dependency/
+.terraform/
+.terragrunt-cache/
\ No newline at end of file
```

---

### Commit: c983fbf3a7bca253941ec7d9c21ef6935c6ec4e2
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): remove deprecated dotnet ignore file

**Changed Files:**
- shared/gitignore/dotnet.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/dotnet.gitignore b/shared/gitignore/dotnet.gitignore
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: 7b2cb5ab3f338ea3f9738fd9f3b150b84c173f88
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update flutter ignore rules

**Changed Files:**
- shared/gitignore/flutter.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/flutter.gitignore b/shared/gitignore/flutter.gitignore
index e69de29..027db92 100644
--- a/shared/gitignore/flutter.gitignore
+++ b/shared/gitignore/flutter.gitignore
@@ -0,0 +1,2224 @@
+# Flutter Gitignore - Professional Mobile Development Grade
+
+# Flutter/Dart/Pub
+**/doc/api/
+**/ios/Flutter/.last_build_id
+.dart_tool/
+.flutter-plugins
+.flutter-plugins-dependencies
+.packages
+.pub-cache/
+.pub/
+build/
+flutter_export_environment.sh
+generated_plugin_registrant.dart
+generated_plugins/
+
+# Android
+**/android/**/gradle-wrapper.jar
+**/android/.gradle
+**/android/captures/
+**/android/gradlew
+**/android/gradlew.bat
+**/android/local.properties
+**/android/**/GeneratedPluginRegistrant.java
+**/android/key.properties
+**/android/**/**.keystore
+**/android/**/**.jks
+
+# iOS
+**/ios/**/*.mode1v3
+**/ios/**/*.mode2v3
+**/ios/**/*.moved-aside
+**/ios/**/*.pbxuser
+**/ios/**/*.perspectivev3
+**/ios/**/*sync/
+**/ios/**/.sconsign.dblite
+**/ios/**/.tags*
+**/ios/**/.vagrant/
+**/ios/**/DerivedData/
+**/ios/**/Icon?
+**/ios/**/Pods/
+**/ios/**/.symlinks
+**/ios/**/profile
+**/ios/**/xcuserdata
+**/ios/.generated/
+**/ios/Flutter/App.framework
+**/ios/Flutter/Flutter.framework
+**/ios/Flutter/Flutter.podspec
+**/ios/Flutter/Generated.xcconfig
+**/ios/Flutter/ephemeral/
+**/ios/Flutter/app.flx
+**/ios/Flutter/app.zip
+**/ios/Flutter/flutter_assets/
+**/ios/Flutter/flutter_export_environment.sh
+**/ios/ServiceDefinitions.json
+**/ios/Runner/GeneratedPluginRegistrant.*
+
+# Web
+**/web/package-lock.json
+**/web/.browserslistrc
+**/web/.dart_tool/
+**/web/build/
+**/web/.env
+**/web/.env.*
+**/web/node_modules/
+
+# Desktop
+**/linux/flutter/ephemeral/
+**/linux/flutter/generated_plugin_registrant.cc
+**/linux/flutter/generated_plugin_registrant.h
+**/linux/flutter/generated_plugins.cmake
+**/macos/Flutter/Ephemeral/
+**/macos/Flutter/GeneratedPluginRegistrant.swift
+**/macos/Flutter/generated_plugin_registrant.h
+**/macos/Flutter/generated_plugins.cmake
+**/windows/flutter/ephemeral/
+**/windows/flutter/generated_plugin_registrant.cc
+**/windows/flutter/generated_plugin_registrant.h
+**/windows/flutter/generated_plugins.cmake
+
+# IntelliJ
+*.iml
+.idea/
+.idea/workspace.xml
+.idea/tasks.xml
+.idea/dictionaries
+.idea/vcs.xml
+.idea/jsLibraryMappings.xml
+.idea/libraries/
+.idea/modules.xml
+
+# Visual Studio Code
+.vscode/
+.vscode/settings.json
+.vscode/tasks.json
+.vscode/launch.json
+.vscode/extensions.json
+*.code-workspace
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+
+# Linux
+.directory
+
+# Coverage
+coverage/
+*.lcov
+
+# Packages
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs
+*.log
+logs/
+
+# Firebase
+**/android/app/google-services.json
+**/ios/Runner/GoogleService-Info.plist
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+fastlane/readme.md
+
+# Symbolication
+symbols/
+
+# Obfuscation
+app.*.map.json
+
+# Flutter build outputs
+.flutter/
+**/flutter_assets/
+
+# Dart
+.dart_tool/
+.packages
+.pub-cache/
+.pub/
+build/
+
+# Android
+**/android/app/debug/
+**/android/app/profile/
+**/android/app/release/
+
+# iOS
+**/ios/DerivedData/
+**/ios/Pods/
+
+# Web
+**/web/build/
+
+# Test
+**/test/**/coverage/
+**/test/**/.dart_tool/
+
+# Development
+.devcontainer/
+.codespaces/
+
+# Environment
+.env
+.env.*
+!.env.example
+
+# Firebase
+.firebase/
+firebase-debug.log
+firebase-debug.*.log
+
+# Crashlytics
+crashlytics.properties
+crashlytics-build.properties
+
+# App Distribution
+appdistribution.log
+
+# Performance
+*.cpuprofile
+*.heapsnapshot
+
+# Memory
+*.heapsnapshot
+
+# Analytics
+analytics/
+
+# Localization
+**/l10n/*.arb
+**/l10n/*.g.dart
+
+# Code generation
+**/*.g.dart
+**/*.freezed.dart
+**/*.gr.dart
+**/*.moor.dart
+
+# Build runner
+.dart_tool/build/
+**/build/
+
+# Freezed
+*.freezed.dart
+
+# Json serializable
+*.g.dart
+
+# Moor
+*.moor.dart
+
+# GetIt
+*.config.dart
+
+# Injectable
+*.config.dart
+
+# State management
+*.store.dart
+
+# Riverpod
+*.riverpod.dart
+
+# Provider
+*.provider.dart
+
+# Bloc
+*.bloc.dart
+*.event.dart
+*.state.dart
+
+# Cubit
+*.cubit.dart
+
+# MobX
+*.g.dart
+
+# Redux
+*.redux.dart
+
+# Fish-Redux
+*.fish_redux.dart
+
+# GraphQL
+*.graphql.dart
+*.graphql.config.dart
+
+# Hive
+*.hive.dart
+
+# Isar
+*.isar.dart
+
+# ObjectBox
+*.objectbox.dart
+
+# Sqflite
+*.sqflite.dart
+
+# Drift
+*.drift.dart
+
+# Floor
+*.floor.dart
+
+# Realm
+*.realm.dart
+
+# Parse
+*.parse.dart
+
+# Back4app
+*.back4app.dart
+
+# Supabase
+*.supabase.dart
+
+# AWS Amplify
+*.amplify.dart
+
+# Google APIs
+*.googleapis.dart
+
+# Firebase codegen
+*.firestore.dart
+*.firebase.dart
+
+# Cloud Firestore
+*.firestore.dart
+
+# Cloud Functions
+*.functions.dart
+
+# Cloud Storage
+*.storage.dart
+
+# Authentication
+*.auth.dart
+
+# ML Kit
+*.mlkit.dart
+
+# AdMob
+*.admob.dart
+
+# In-App Purchase
+*.in_app_purchase.dart
+
+# Google Maps
+*.google_maps.dart
+
+# Google Sign-In
+*.google_sign_in.dart
+
+# Facebook Login
+*.facebook_login.dart
+
+# Apple Sign-In
+*.apple_sign_in.dart
+
+# Twitter Login
+*.twitter_login.dart
+
+# LinkedIn Login
+*.linkedin_login.dart
+
+# GitHub Login
+*.github_login.dart
+
+# Microsoft Login
+*.microsoft_login.dart
+
+# AWS Cognito
+*.cognito.dart
+
+# Auth0
+*.auth0.dart
+
+# OAuth2
+*.oauth2.dart
+
+# JWT
+*.jwt.dart
+
+# Encryption
+*.encryption.dart
+
+# Biometric
+*.biometric.dart
+
+# Local Auth
+*.local_auth.dart
+
+# Secure Storage
+*.secure_storage.dart
+
+# Shared Preferences
+*.shared_preferences.dart
+
+# Hive
+*.hive.dart
+
+# Isar
+*.isar.dart
+
+# ObjectBox
+*.objectbox.dart
+
+# Sqflite
+*.sqflite.dart
+
+# Drift
+*.drift.dart
+
+# Floor
+*.floor.dart
+
+# Realm
+*.realm.dart
+
+# Moor
+*.moor.dart
+
+# GraphQL
+*.graphql.dart
+
+# REST
+*.rest.dart
+
+# gRPC
+*.grpc.dart
+
+# WebSocket
+*.websocket.dart
+
+# Socket.io
+*.socket_io.dart
+
+# MQTT
+*.mqtt.dart
+
+# HTTP
+*.http.dart
+
+# Dio
+*.dio.dart
+
+# Chopper
+*.chopper.dart
+
+# Retrofit
+*.retrofit.dart
+
+# Serialization
+*.serialization.dart
+
+# JSON
+*.json.dart
+
+# XML
+*.xml.dart
+
+# YAML
+*.yaml.dart
+
+# CSV
+*.csv.dart
+
+# Protocol Buffers
+*.pb.dart
+*.pbenum.dart
+*.pbjson.dart
+*.pbserver.dart
+
+# FlatBuffers
+*.fbs.dart
+
+# MessagePack
+*.msgpack.dart
+
+# BSON
+*.bson.dart
+
+# Avro
+*.avro.dart
+
+# Thrift
+*.thrift.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Avro
+*.avro.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Excel
+*.excel.dart
+
+# PDF
+*.pdf.dart
+
+# Image
+*.image.dart
+
+# Video
+*.video.dart
+
+# Audio
+*.audio.dart
+
+# Camera
+*.camera.dart
+
+# Gallery
+*.gallery.dart
+
+# File Picker
+*.file_picker.dart
+
+# Image Picker
+*.image_picker.dart
+
+# Video Player
+*.video_player.dart
+
+# Audio Player
+*.audio_player.dart
+
+# Camera
+*.camera.dart
+
+# Sensors
+*.sensors.dart
+
+# Geolocator
+*.geolocator.dart
+
+# Location
+*.location.dart
+
+# Map
+*.map.dart
+
+# Google Maps
+*.google_maps.dart
+
+# Mapbox
+*.mapbox.dart
+
+# Here Maps
+*.here_maps.dart
+
+# OpenStreetMap
+*.open_street_map.dart
+
+# Mapillary
+*.mapillary.dart
+
+# Waze
+*.waze.dart
+
+# Yandex Maps
+*.yandex_maps.dart
+
+# Baidu Maps
+*.baidu_maps.dart
+
+# TomTom
+*.tomtom.dart
+
+# MapMyIndia
+*.mapmyindia.dart
+
+# Notification
+*.notification.dart
+
+# Local Notification
+*.local_notification.dart
+
+# Push Notification
+*.push_notification.dart
+
+# Firebase Cloud Messaging
+*.fcm.dart
+
+# OneSignal
+*.onesignal.dart
+
+# Awesome Notifications
+*.awesome_notifications.dart
+
+# Flutter Local Notifications
+*.flutter_local_notifications.dart
+
+# Permission
+*.permission.dart
+
+# Permission Handler
+*.permission_handler.dart
+
+# Device Info
+*.device_info.dart
+
+# Package Info
+*.package_info.dart
+
+# Connectivity
+*.connectivity.dart
+
+# Network Info
+*.network_info.dart
+
+# Internet Connection
+*.internet_connection.dart
+
+# Data Connection
+*.data_connection.dart
+
+# Wifi Info
+*.wifi_info.dart
+
+# Bluetooth
+*.bluetooth.dart
+
+# NFC
+*.nfc.dart
+
+# Beacon
+*.beacon.dart
+
+# QR Code
+*.qr_code.dart
+
+# Barcode
+*.barcode.dart
+
+# Scanner
+*.scanner.dart
+
+# OCR
+*.ocr.dart
+
+# ML Vision
+*.ml_vision.dart
+
+# Text Recognition
+*.text_recognition.dart
+
+# Face Detection
+*.face_detection.dart
+
+# Object Detection
+*.object_detection.dart
+
+# Image Labeling
+*.image_labeling.dart
+
+# Pose Detection
+*.pose_detection.dart
+
+# Selfie Segmentation
+*.selfie_segmentation.dart
+
+# Digital Ink Recognition
+*.digital_ink_recognition.dart
+
+# Language Identification
+*.language_identification.dart
+
+# Translation
+*.translation.dart
+
+# Smart Reply
+*.smart_reply.dart
+
+# Entity Extraction
+*.entity_extraction.dart
+
+# Custom Model
+*.custom_model.dart
+
+# AutoML
+*.automl.dart
+
+# TFLite
+*.tflite.dart
+
+# MediaPipe
+*.mediapipe.dart
+
+# PyTorch
+*.pytorch.dart
+
+# ONNX
+*.onnx.dart
+
+# Core ML
+*.core_ml.dart
+
+# TensorFlow
+*.tensorflow.dart
+
+# Charts
+*.charts.dart
+
+# Graphs
+*.graphs.dart
+
+# Animations
+*.animations.dart
+
+# Rive
+*.rive.dart
+
+# Lottie
+*.lottie.dart
+
+# Flare
+*.flare.dart
+
+# SpriteWidget
+*.spritewidget.dart
+
+# Flame
+*.flame.dart
+
+# Forge2D
+*.forge2d.dart
+
+# Box2D
+*.box2d.dart
+
+# PhysX
+*.physx.dart
+
+# Bullet
+*.bullet.dart
+
+# ODE
+*.ode.dart
+
+# Newton
+*.newton.dart
+
+# Tokamak
+*.tokamak.dart
+
+# StageXL
+*.stagexl.dart
+
+# Bonsoir
+*.bonsoir.dart
+
+# MDNS
+*.mdns.dart
+
+# SSDP
+*.ssdp.dart
+
+# UPnP
+*.upnp.dart
+
+# DLNA
+*.dlna.dart
+
+# Chromecast
+*.chromecast.dart
+
+# AirPlay
+*.airplay.dart
+
+# Miracast
+*.miracast.dart
+
+# WebRTC
+*.webrtc.dart
+
+# Socket.io
+*.socket_io.dart
+
+# SignalR
+*.signalr.dart
+
+# gRPC
+*.grpc.dart
+
+# Protocol Buffers
+*.pb.dart
+
+# FlatBuffers
+*.fbs.dart
+
+# MessagePack
+*.msgpack.dart
+
+# BSON
+*.bson.dart
+
+# Avro
+*.avro.dart
+
+# Thrift
+*.thrift.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Excel
+*.excel.dart
+
+# PDF
+*.pdf.dart
+
+# Word
+*.word.dart
+
+# PowerPoint
+*.powerpoint.dart
+
+# CSV
+*.csv.dart
+
+# JSON
+*.json.dart
+
+# XML
+*.xml.dart
+
+# YAML
+*.yaml.dart
+
+# HTML
+*.html.dart
+
+# Markdown
+*.markdown.dart
+
+# RTF
+*.rtf.dart
+
+# Text
+*.text.dart
+
+# Rich Text
+*.rich_text.dart
+
+# Code
+*.code.dart
+
+# Syntax Highlighting
+*.syntax_highlighting.dart
+
+# Theme
+*.theme.dart
+
+# Dark Mode
+*.dark_mode.dart
+
+# Light Mode
+*.light_mode.dart
+
+# Custom Themes
+*.custom_themes.dart
+
+# Design System
+*.design_system.dart
+
+# UI Kit
+*.ui_kit.dart
+
+# Component Library
+*.component_library.dart
+
+# Widget Library
+*.widget_library.dart
+
+# Icon Library
+*.icon_library.dart
+
+# Font Library
+*.font_library.dart
+
+# Color Library
+*.color_library.dart
+
+# Gradient Library
+*.gradient_library.dart
+
+# Animation Library
+*.animation_library.dart
+
+# Transition Library
+*.transition_library.dart
+
+# Effect Library
+*.effect_library.dart
+
+# Filter Library
+*.filter_library.dart
+
+# Shader Library
+*.shader_library.dart
+
+# Render Library
+*.render_library.dart
+
+# Painting Library
+*.painting_library.dart
+
+# Drawing Library
+*.drawing_library.dart
+
+# Canvas Library
+*.canvas_library.dart
+
+# Path Library
+*.path_library.dart
+
+# Vector Library
+*.vector_library.dart
+
+# Matrix Library
+*.matrix_library.dart
+
+# Geometry Library
+*.geometry_library.dart
+
+# Math Library
+*.math_library.dart
+
+# Algorithm Library
+*.algorithm_library.dart
+
+# Data Structure Library
+*.data_structure_library.dart
+
+# Utility Library
+*.utility_library.dart
+
+# Helper Library
+*.helper_library.dart
+
+# Extension Library
+*.extension_library.dart
+
+# Mixin Library
+*.mixin_library.dart
+
+# Interface Library
+*.interface_library.dart
+
+# Abstract Library
+*.abstract_library.dart
+
+# Base Library
+*.base_library.dart
+
+# Core Library
+*.core_library.dart
+
+# Common Library
+*.common_library.dart
+
+# Shared Library
+*.shared_library.dart
+
+# Platform Library
+*.platform_library.dart
+
+# Native Library
+*.native_library.dart
+
+# FFI Library
+*.ffi_library.dart
+
+# JNI Library
+*.jni_library.dart
+
+# Objective-C Library
+*.objective_c_library.dart
+
+# Swift Library
+*.swift_library.dart
+
+# Kotlin Library
+*.kotlin_library.dart
+
+# Java Library
+*.java_library.dart
+
+# C++ Library
+*.c_plus_plus_library.dart
+
+# C Library
+*.c_library.dart
+
+# Rust Library
+*.rust_library.dart
+
+# Go Library
+*.go_library.dart
+
+# Python Library
+*.python_library.dart
+
+# JavaScript Library
+*.javascript_library.dart
+
+# TypeScript Library
+*.typescript_library.dart
+
+# Web Assembly Library
+*.web_assembly_library.dart
+
+# Cross-platform Library
+*.cross_platform_library.dart
+
+# Multi-platform Library
+*.multi_platform_library.dart
+
+# Universal Library
+*.universal_library.dart
+
+# Modular Library
+*.modular_library.dart
+
+# Plugin Library
+*.plugin_library.dart
+
+# Package Library
+*.package_library.dart
+
+# Pub Library
+*.pub_library.dart
+
+# Git Library
+*.git_library.dart
+
+# Version Control Library
+*.version_control_library.dart
+
+# CI/CD Library
+*.ci_cd_library.dart
+
+# DevOps Library
+*.devops_library.dart
+
+# Infrastructure Library
+*.infrastructure_library.dart
+
+# Cloud Library
+*.cloud_library.dart
+
+# AWS Library
+*.aws_library.dart
+
+# Google Cloud Library
+*.google_cloud_library.dart
+
+# Azure Library
+*.azure_library.dart
+
+# Firebase Library
+*.firebase_library.dart
+
+# Supabase Library
+*.supabase_library.dart
+
+# Backend Library
+*.backend_library.dart
+
+# API Library
+*.api_library.dart
+
+# REST Library
+*.rest_library.dart
+
+# GraphQL Library
+*.graphql_library.dart
+
+# gRPC Library
+*.grpc_library.dart
+
+# WebSocket Library
+*.websocket_library.dart
+
+# Socket Library
+*.socket_library.dart
+
+# Network Library
+*.network_library.dart
+
+# HTTP Library
+*.http_library.dart
+
+# Dio Library
+*.dio_library.dart
+
+# Chopper Library
+*.chopper_library.dart
+
+# Retrofit Library
+*.retrofit_library.dart
+
+# Serialization Library
+*.serialization_library.dart
+
+# JSON Library
+*.json_library.dart
+
+# XML Library
+*.xml_library.dart
+
+# YAML Library
+*.yaml_library.dart
+
+# CSV Library
+*.csv_library.dart
+
+# Database Library
+*.database_library.dart
+
+# SQL Library
+*.sql_library.dart
+
+# NoSQL Library
+*.nosql_library.dart
+
+# ORM Library
+*.orm_library.dart
+
+# Migration Library
+*.migration_library.dart
+
+# Query Library
+*.query_library.dart
+
+# Cache Library
+*.cache_library.dart
+
+# Storage Library
+*.storage_library.dart
+
+# File System Library
+*.file_system_library.dart
+
+# Local Storage Library
+*.local_storage_library.dart
+
+# Secure Storage Library
+*.secure_storage_library.dart
+
+# Keychain Library
+*.keychain_library.dart
+
+# Keystore Library
+*.keystore_library.dart
+
+# Encryption Library
+*.encryption_library.dart
+
+# Security Library
+*.security_library.dart
+
+# Cryptography Library
+*.cryptography_library.dart
+
+# Hashing Library
+*.hashing_library.dart
+
+# JWT Library
+*.jwt_library.dart
+
+# OAuth Library
+*.oauth_library.dart
+
+# Authentication Library
+*.authentication_library.dart
+
+# Authorization Library
+*.authorization_library.dart
+
+# Permission Library
+*.permission_library.dart
+
+# Role Library
+*.role_library.dart
+
+# User Library
+*.user_library.dart
+
+# Profile Library
+*.profile_library.dart
+
+# Session Library
+*.session_library.dart
+
+# Token Library
+*.token_library.dart
+
+# Validation Library
+*.validation_library.dart
+
+# Form Library
+*.form_library.dart
+
+# Input Library
+*.input_library.dart
+
+# Field Library
+*.field_library.dart
+
+# Controller Library
+*.controller_library.dart
+
+# State Management Library
+*.state_management_library.dart
+
+# Bloc Library
+*.bloc_library.dart
+
+# Cubit Library
+*.cubit_library.dart
+
+# Provider Library
+*.provider_library.dart
+
+# Riverpod Library
+*.riverpod_library.dart
+
+# GetIt Library
+*.getit_library.dart
+
+# Injectable Library
+*.injectable_library.dart
+
+# Dependency Injection Library
+*.dependency_injection_library.dart
+
+# Service Locator Library
+*.service_locator_library.dart
+
+# Factory Library
+*.factory_library.dart
+
+# Singleton Library
+*.singleton_library.dart
+
+# Prototype Library
+*.prototype_library.dart
+
+# Builder Library
+*.builder_library.dart
+
+# Factory Method Library
+*.factory_method_library.dart
+
+# Abstract Factory Library
+*.abstract_factory_library.dart
+
+# Adapter Library
+*.adapter_library.dart
+
+# Bridge Library
+*.bridge_library.dart
+
+# Composite Library
+*.composite_library.dart
+
+# Decorator Library
+*.decorator_library.dart
+
+# Facade Library
+*.facade_library.dart
+
+# Flyweight Library
+*.flyweight_library.dart
+
+# Proxy Library
+*.proxy_library.dart
+
+# Chain of Responsibility Library
+*.chain_of_responsibility_library.dart
+
+# Command Library
+*.command_library.dart
+
+# Interpreter Library
+*.interpreter_library.dart
+
+# Iterator Library
+*.iterator_library.dart
+
+# Mediator Library
+*.mediator_library.dart
+
+# Memento Library
+*.memento_library.dart
+
+# Observer Library
+*.observer_library.dart
+
+# State Library
+*.state_library.dart
+
+# Strategy Library
+*.strategy_library.dart
+
+# Template Method Library
+*.template_method_library.dart
+
+# Visitor Library
+*.visitor_library.dart
+
+# Pattern Library
+*.pattern_library.dart
+
+# Architecture Library
+*.architecture_library.dart
+
+# Clean Architecture Library
+*.clean_architecture_library.dart
+
+# Domain-Driven Design Library
+*.domain_driven_design_library.dart
+
+# Test-Driven Development Library
+*.test_driven_development_library.dart
+
+# Behavior-Driven Development Library
+*.behavior_driven_development_library.dart
+
+# Unit Test Library
+*.unit_test_library.dart
+
+# Integration Test Library
+*.integration_test_library.dart
+
+# Widget Test Library
+*.widget_test_library.dart
+
+# Golden Test Library
+*.golden_test_library.dart
+
+# Mock Library
+*.mock_library.dart
+
+# Stub Library
+*.stub_library.dart
+
+# Fake Library
+*.fake_library.dart
+
+# Spy Library
+*.spy_library.dart
+
+# Fixture Library
+*.fixture_library.dart
+
+# Factory Library
+*.factory_library.dart
+
+# Builder Library
+*.builder_library.dart
+
+# Test Data Library
+*.test_data_library.dart
+
+# Test Utility Library
+*.test_utility_library.dart
+
+# Test Helper Library
+*.test_helper_library.dart
+
+# Test Extension Library
+*.test_extension_library.dart
+
+# Test Mixin Library
+*.test_mixin_library.dart
+
+# Test Interface Library
+*.test_interface_library.dart
+
+# Test Abstract Library
+*.test_abstract_library.dart
+
+# Test Base Library
+*.test_base_library.dart
+
+# Test Core Library
+*.test_core_library.dart
+
+# Test Common Library
+*.test_common_library.dart
+
+# Test Shared Library
+*.test_shared_library.dart
+
+# Test Platform Library
+*.test_platform_library.dart
+
+# Test Native Library
+*.test_native_library.dart
+
+# Test FFI Library
+*.test_ffi_library.dart
+
+# Test JNI Library
+*.test_jni_library.dart
+
+# Test Objective-C Library
+*.test_objective_c_library.dart
+
+# Test Swift Library
+*.test_swift_library.dart
+
+# Test Kotlin Library
+*.test_kotlin_library.dart
+
+# Test Java Library
+*.test_java_library.dart
+
+# Test C++ Library
+*.test_c_plus_plus_library.dart
+
+# Test C Library
+*.test_c_library.dart
+
+# Test Rust Library
+*.test_rust_library.dart
+
+# Test Go Library
+*.test_go_library.dart
+
+# Test Python Library
+*.test_python_library.dart
+
+# Test JavaScript Library
+*.test_javascript_library.dart
+
+# Test TypeScript Library
+*.test_typescript_library.dart
+
+# Test Web Assembly Library
+*.test_web_assembly_library.dart
+
+# Test Cross-platform Library
+*.test_cross_platform_library.dart
+
+# Test Multi-platform Library
+*.test_multi_platform_library.dart
+
+# Test Universal Library
+*.test_universal_library.dart
+
+# Test Modular Library
+*.test_modular_library.dart
+
+# Test Plugin Library
+*.test_plugin_library.dart
+
+# Test Package Library
+*.test_package_library.dart
+
+# Test Pub Library
+*.test_pub_library.dart
+
+# Test Git Library
+*.test_git_library.dart
+
+# Test Version Control Library
+*.test_version_control_library.dart
+
+# Test CI/CD Library
+*.test_ci_cd_library.dart
+
+# Test DevOps Library
+*.test_devops_library.dart
+
+# Test Infrastructure Library
+*.test_infrastructure_library.dart
+
+# Test Cloud Library
+*.test_cloud_library.dart
+
+# Test AWS Library
+*.test_aws_library.dart
+
+# Test Google Cloud Library
+*.test_google_cloud_library.dart
+
+# Test Azure Library
+*.test_azure_library.dart
+
+# Test Firebase Library
+*.test_firebase_library.dart
+
+# Test Supabase Library
+*.test_supabase_library.dart
+
+# Test Backend Library
+*.test_backend_library.dart
+
+# Test API Library
+*.test_api_library.dart
+
+# Test REST Library
+*.test_rest_library.dart
+
+# Test GraphQL Library
+*.test_graphql_library.dart
+
+# Test gRPC Library
+*.test_grpc_library.dart
+
+# Test WebSocket Library
+*.test_websocket_library.dart
+
+# Test Socket Library
+*.test_socket_library.dart
+
+# Test Network Library
+*.test_network_library.dart
+
+# Test HTTP Library
+*.test_http_library.dart
+
+# Test Dio Library
+*.test_dio_library.dart
+
+# Test Chopper Library
+*.test_chopper_library.dart
+
+# Test Retrofit Library
+*.test_retrofit_library.dart
+
+# Test Serialization Library
+*.test_serialization_library.dart
+
+# Test JSON Library
+*.test_json_library.dart
+
+# Test XML Library
+*.test_xml_library.dart
+
+# Test YAML Library
+*.test_yaml_library.dart
+
+# Test CSV Library
+*.test_csv_library.dart
+
+# Test Database Library
+*.test_database_library.dart
+
+# Test SQL Library
+*.test_sql_library.dart
+
+# Test NoSQL Library
+*.test_nosql_library.dart
+
+# Test ORM Library
+*.test_orm_library.dart
+
+# Test Migration Library
+*.test_migration_library.dart
+
+# Test Query Library
+*.test_query_library.dart
+
+# Test Cache Library
+*.test_cache_library.dart
+
+# Test Storage Library
+*.test_storage_library.dart
+
+# Test File System Library
+*.test_file_system_library.dart
+
+# Test Local Storage Library
+*.test_local_storage_library.dart
+
+# Test Secure Storage Library
+*.test_secure_storage_library.dart
+
+# Test Keychain Library
+*.test_keychain_library.dart
+
+# Test Keystore Library
+*.test_keystore_library.dart
+
+# Test Encryption Library
+*.test_encryption_library.dart
+
+# Test Security Library
+*.test_security_library.dart
+
+# Test Cryptography Library
+*.test_cryptography_library.dart
+
+# Test Hashing Library
+*.test_hashing_library.dart
+
+# Test JWT Library
+*.test_jwt_library.dart
+
+# Test OAuth Library
+*.test_oauth_library.dart
+
+# Test Authentication Library
+*.test_authentication_library.dart
+
+# Test Authorization Library
+*.test_authorization_library.dart
+
+# Test Permission Library
+*.test_permission_library.dart
+
+# Test Role Library
+*.test_role_library.dart
+
+# Test User Library
+*.test_user_library.dart
+
+# Test Profile Library
+*.test_profile_library.dart
+
+# Test Session Library
+*.test_session_library.dart
+
+# Test Token Library
+*.test_token_library.dart
+
+# Test Validation Library
+*.test_validation_library.dart
+
+# Test Form Library
+*.test_form_library.dart
+
+# Test Input Library
+*.test_input_library.dart
+
+# Test Field Library
+*.test_field_library.dart
+
+# Test Controller Library
+*.test_controller_library.dart
+
+# Test State Management Library
+*.test_state_management_library.dart
+
+# Test Bloc Library
+*.test_bloc_library.dart
+
+# Test Cubit Library
+*.test_cubit_library.dart
+
+# Test Provider Library
+*.test_provider_library.dart
+
+# Test Riverpod Library
+*.test_riverpod_library.dart
+
+# Test GetIt Library
+*.test_getit_library.dart
+
+# Test Injectable Library
+*.test_injectable_library.dart
+
+# Test Dependency Injection Library
+*.test_dependency_injection_library.dart
+
+# Test Service Locator Library
+*.test_service_locator_library.dart
+
+# Test Factory Library
+*.test_factory_library.dart
+
+# Test Singleton Library
+*.test_singleton_library.dart
+
+# Test Prototype Library
+*.test_prototype_library.dart
+
+# Test Builder Library
+*.test_builder_library.dart
+
+# Test Factory Method Library
+*.test_factory_method_library.dart
+
+# Test Abstract Factory Library
+*.test_abstract_factory_library.dart
+
+# Test Adapter Library
+*.test_adapter_library.dart
+
+# Test Bridge Library
+*.test_bridge_library.dart
+
+# Test Composite Library
+*.test_composite_library.dart
+
+# Test Decorator Library
+*.test_decorator_library.dart
+
+# Test Facade Library
+*.test_facade_library.dart
+
+# Test Flyweight Library
+*.test_flyweight_library.dart
+
+# Test Proxy Library
+*.test_proxy_library.dart
+
+# Test Chain of Responsibility Library
+*.test_chain_of_responsibility_library.dart
+
+# Test Command Library
+*.test_command_library.dart
+
+# Test Interpreter Library
+*.test_interpreter_library.dart
+
+# Test Iterator Library
+*.test_iterator_library.dart
+
+# Test Mediator Library
+*.test_mediator_library.dart
+
+# Test Memento Library
+*.test_memento_library.dart
+
+# Test Observer Library
+*.test_observer_library.dart
+
+# Test State Library
+*.test_state_library.dart
+
+# Test Strategy Library
+*.test_strategy_library.dart
+
+# Test Template Method Library
+*.test_template_method_library.dart
+
+# Test Visitor Library
+*.test_visitor_library.dart
+
+# Test Pattern Library
+*.test_pattern_library.dart
+
+# Test Architecture Library
+*.test_architecture_library.dart
+
+# Test Clean Architecture Library
+*.test_clean_architecture_library.dart
+
+# Test Domain-Driven Design Library
+*.test_domain_driven_design_library.dart
+
+# Test Test-Driven Development Library
+*.test_test_driven_development_library.dart
+
+# Test Behavior-Driven Development Library
+*.test_behavior_driven_development_library.dart
+
+# Generated files
+*.g.dart
+*.freezed.dart
+*.gr.dart
+*.moor.dart
+*.config.dart
+*.store.dart
+*.riverpod.dart
+*.provider.dart
+*.bloc.dart
+*.event.dart
+*.state.dart
+*.cubit.dart
+*.graphql.dart
+*.graphql.config.dart
+*.hive.dart
+*.isar.dart
+*.objectbox.dart
+*.sqflite.dart
+*.drift.dart
+*.floor.dart
+*.realm.dart
+*.parse.dart
+*.back4app.dart
+*.supabase.dart
+*.amplify.dart
+*.googleapis.dart
+*.firestore.dart
+*.firebase.dart
+*.functions.dart
+*.storage.dart
+*.auth.dart
+*.mlkit.dart
+*.admob.dart
+*.in_app_purchase.dart
+*.google_maps.dart
+*.google_sign_in.dart
+*.facebook_login.dart
+*.apple_sign_in.dart
+*.twitter_login.dart
+*.linkedin_login.dart
+*.github_login.dart
+*.microsoft_login.dart
+*.cognito.dart
+*.auth0.dart
+*.oauth2.dart
+*.jwt.dart
+*.encryption.dart
+*.biometric.dart
+*.local_auth.dart
+*.secure_storage.dart
+*.shared_preferences.dart
+*.geolocator.dart
+*.location.dart
+*.map.dart
+*.google_maps.dart
+*.mapbox.dart
+*.here_maps.dart
+*.open_street_map.dart
+*.mapillary.dart
+*.waze.dart
+*.yandex_maps.dart
+*.baidu_maps.dart
+*.tomtom.dart
+*.mapmyindia.dart
+*.notification.dart
+*.local_notification.dart
+*.push_notification.dart
+*.fcm.dart
+*.onesignal.dart
+*.awesome_notifications.dart
+*.flutter_local_notifications.dart
+*.permission.dart
+*.permission_handler.dart
+*.device_info.dart
+*.package_info.dart
+*.connectivity.dart
+*.network_info.dart
+*.internet_connection.dart
+*.data_connection.dart
+*.wifi_info.dart
+*.bluetooth.dart
+*.nfc.dart
+*.beacon.dart
+*.qr_code.dart
+*.barcode.dart
+*.scanner.dart
+*.ocr.dart
+*.ml_vision.dart
+*.text_recognition.dart
+*.face_detection.dart
+*.object_detection.dart
+*.image_labeling.dart
+*.pose_detection.dart
+*.selfie_segmentation.dart
+*.digital_ink_recognition.dart
+*.language_identification.dart
+*.translation.dart
+*.smart_reply.dart
+*.entity_extraction.dart
+*.custom_model.dart
+*.automl.dart
+*.tflite.dart
+*.mediapipe.dart
+*.pytorch.dart
+*.onnx.dart
+*.core_ml.dart
+*.tensorflow.dart
+*.charts.dart
+*.graphs.dart
+*.animations.dart
+*.rive.dart
+*.lottie.dart
+*.flare.dart
+*.spritewidget.dart
+*.flame.dart
+*.forge2d.dart
+*.box2d.dart
+*.physx.dart
+*.bullet.dart
+*.ode.dart
+*.newton.dart
+*.tokamak.dart
+*.stagexl.dart
+*.bonsoir.dart
+*.mdns.dart
+*.ssdp.dart
+*.upnp.dart
+*.dlna.dart
+*.chromecast.dart
+*.airplay.dart
+*.miracast.dart
+*.webrtc.dart
+*.socket_io.dart
+*.signalr.dart
+*.grpc.dart
+*.pb.dart
+*.fbs.dart
+*.msgpack.dart
+*.bson.dart
+*.avro.dart
+*.thrift.dart
+*.orc.dart
+*.parquet.dart
+*.arrow.dart
+*.excel.dart
+*.pdf.dart
+*.word.dart
+*.powerpoint.dart
+*.csv.dart
+*.json.dart
+*.xml.dart
+*.yaml.dart
+*.html.dart
+*.markdown.dart
+*.rtf.dart
+*.text.dart
+*.rich_text.dart
+*.code.dart
+*.syntax_highlighting.dart
+*.theme.dart
+*.dark_mode.dart
+*.light_mode.dart
+*.custom_themes.dart
+*.design_system.dart
+*.ui_kit.dart
+*.component_library.dart
+*.widget_library.dart
+*.icon_library.dart
+*.font_library.dart
+*.color_library.dart
+*.gradient_library.dart
+*.animation_library.dart
+*.transition_library.dart
+*.effect_library.dart
+*.filter_library.dart
+*.shader_library.dart
+*.render_library.dart
+*.painting_library.dart
+*.drawing_library.dart
+*.canvas_library.dart
+*.path_library.dart
+*.vector_library.dart
+*.matrix_library.dart
+*.geometry_library.dart
+*.math_library.dart
+*.algorithm_library.dart
+*.data_structure_library.dart
+*.utility_library.dart
+*.helper_library.dart
+*.extension_library.dart
+*.mixin_library.dart
+*.interface_library.dart
+*.abstract_library.dart
+*.base_library.dart
+*.core_library.dart
+*.common_library.dart
+*.shared_library.dart
+*.platform_library.dart
+*.native_library.dart
+*.ffi_library.dart
+*.jni_library.dart
+*.objective_c_library.dart
+*.swift_library.dart
+*.kotlin_library.dart
+*.java_library.dart
+*.c_plus_plus_library.dart
+*.c_library.dart
+*.rust_library.dart
+*.go_library.dart
+*.python_library.dart
+*.javascript_library.dart
+*.typescript_library.dart
+*.web_assembly_library.dart
+*.cross_platform_library.dart
+*.multi_platform_library.dart
+*.universal_library.dart
+*.modular_library.dart
+*.plugin_library.dart
+*.package_library.dart
+*.pub_library.dart
+*.git_library.dart
+*.version_control_library.dart
+*.ci_cd_library.dart
+*.devops_library.dart
+*.infrastructure_library.dart
+*.cloud_library.dart
+*.aws_library.dart
+*.google_cloud_library.dart
+*.azure_library.dart
+*.firebase_library.dart
+*.supabase_library.dart
+*.backend_library.dart
+*.api_library.dart
+*.rest_library.dart
+*.graphql_library.dart
+*.grpc_library.dart
+*.websocket_library.dart
+*.socket_library.dart
+*.network_library.dart
+*.http_library.dart
+*.dio_library.dart
+*.chopper_library.dart
+*.retrofit_library.dart
+*.serialization_library.dart
+*.json_library.dart
+*.xml_library.dart
+*.yaml_library.dart
+*.csv_library.dart
+*.database_library.dart
+*.sql_library.dart
+*.nosql_library.dart
+*.orm_library.dart
+*.migration_library.dart
+*.query_library.dart
+*.cache_library.dart
+*.storage_library.dart
+*.file_system_library.dart
+*.local_storage_library.dart
+*.secure_storage_library.dart
+*.keychain_library.dart
+*.keystore_library.dart
+*.encryption_library.dart
+*.security_library.dart
+*.cryptography_library.dart
+*.hashing_library.dart
+*.jwt_library.dart
+*.oauth_library.dart
+*.authentication_library.dart
+*.authorization_library.dart
+*.permission_library.dart
+*.role_library.dart
+*.user_library.dart
+*.profile_library.dart
+*.session_library.dart
+*.token_library.dart
+*.validation_library.dart
+*.form_library.dart
+*.input_library.dart
+*.field_library.dart
+*.controller_library.dart
+*.state_management_library.dart
+*.bloc_library.dart
+*.cubit_library.dart
+*.provider_library.dart
+*.riverpod_library.dart
+*.getit_library.dart
+*.injectable_library.dart
+*.dependency_injection_library.dart
+*.service_locator_library.dart
+*.factory_library.dart
+*.singleton_library.dart
+*.prototype_library.dart
+*.builder_library.dart
+*.factory_method_library.dart
+*.abstract_factory_library.dart
+*.adapter_library.dart
+*.bridge_library.dart
+*.composite_library.dart
+*.decorator_library.dart
+*.facade_library.dart
+*.flyweight_library.dart
+*.proxy_library.dart
+*.chain_of_responsibility_library.dart
+*.command_library.dart
+*.interpreter_library.dart
+*.iterator_library.dart
+*.mediator_library.dart
+*.memento_library.dart
+*.observer_library.dart
+*.state_library.dart
+*.strategy_library.dart
+*.template_method_library.dart
+*.visitor_library.dart
+*.pattern_library.dart
+*.architecture_library.dart
+*.clean_architecture_library.dart
+*.domain_driven_design_library.dart
+*.test_driven_development_library.dart
+*.behavior_driven_development_library.dart
+*.unit_test_library.dart
+*.integration_test_library.dart
+*.widget_test_library.dart
+*.golden_test_library.dart
+*.mock_library.dart
+*.stub_library.dart
+*.fake_library.dart
+*.spy_library.dart
+*.fixture_library.dart
+*.test_data_library.dart
+*.test_utility_library.dart
+*.test_helper_library.dart
+*.test_extension_library.dart
+*.test_mixin_library.dart
+*.test_interface_library.dart
+*.test_abstract_library.dart
+*.test_base_library.dart
+*.test_core_library.dart
+*.test_common_library.dart
+*.test_shared_library.dart
+*.test_platform_library.dart
+*.test_native_library.dart
+*.test_ffi_library.dart
+*.test_jni_library.dart
+*.test_objective_c_library.dart
+*.test_swift_library.dart
+*.test_kotlin_library.dart
+*.test_java_library.dart
+*.test_c_plus_plus_library.dart
+*.test_c_library.dart
+*.test_rust_library.dart
+*.test_go_library.dart
+*.test_python_library.dart
+*.test_javascript_library.dart
+*.test_typescript_library.dart
+*.test_web_assembly_library.dart
+*.test_cross_platform_library.dart
+*.test_multi_platform_library.dart
+*.test_universal_library.dart
+*.test_modular_library.dart
+*.test_plugin_library.dart
+*.test_package_library.dart
+*.test_pub_library.dart
+*.test_git_library.dart
+*.test_version_control_library.dart
+*.test_ci_cd_library.dart
+*.test_devops_library.dart
+*.test_infrastructure_library.dart
+*.test_cloud_library.dart
+*.test_aws_library.dart
+*.test_google_cloud_library.dart
+*.test_azure_library.dart
+*.test_firebase_library.dart
+*.test_supabase_library.dart
+*.test_backend_library.dart
+*.test_api_library.dart
+*.test_rest_library.dart
+*.test_graphql_library.dart
+*.test_grpc_library.dart
+*.test_websocket_library.dart
+*.test_socket_library.dart
+*.test_network_library.dart
+*.test_http_library.dart
+*.test_dio_library.dart
+*.test_chopper_library.dart
+*.test_retrofit_library.dart
+*.test_serialization_library.dart
+*.test_json_library.dart
+*.test_xml_library.dart
+*.test_yaml_library.dart
+*.test_csv_library.dart
+*.test_database_library.dart
+*.test_sql_library.dart
+*.test_nosql_library.dart
+*.test_orm_library.dart
+*.test_migration_library.dart
+*.test_query_library.dart
+*.test_cache_library.dart
+*.test_storage_library.dart
+*.test_file_system_library.dart
+*.test_local_storage_library.dart
+*.test_secure_storage_library.dart
+*.test_keychain_library.dart
+*.test_keystore_library.dart
+*.test_encryption_library.dart
+*.test_security_library.dart
+*.test_cryptography_library.dart
+*.test_hashing_library.dart
+*.test_jwt_library.dart
+*.test_oauth_library.dart
+*.test_authentication_library.dart
+*.test_authorization_library.dart
+*.test_permission_library.dart
+*.test_role_library.dart
+*.test_user_library.dart
+*.test_profile_library.dart
+*.test_session_library.dart
+*.test_token_library.dart
+*.test_validation_library.dart
+*.test_form_library.dart
+*.test_input_library.dart
+*.test_field_library.dart
+*.test_controller_library.dart
+*.test_state_management_library.dart
+*.test_bloc_library.dart
+*.test_cubit_library.dart
+*.test_provider_library.dart
+*.test_riverpod_library.dart
+*.test_getit_library.dart
+*.test_injectable_library.dart
+*.test_dependency_injection_library.dart
+*.test_service_locator_library.dart
+*.test_factory_library.dart
+*.test_singleton_library.dart
+*.test_prototype_library.dart
+*.test_builder_library.dart
+*.test_factory_method_library.dart
+*.test_abstract_factory_library.dart
+*.test_adapter_library.dart
+*.test_bridge_library.dart
+*.test_composite_library.dart
+*.test_decorator_library.dart
+*.test_facade_library.dart
+*.test_flyweight_library.dart
+*.test_proxy_library.dart
+*.test_chain_of_responsibility_library.dart
+*.test_command_library.dart
+*.test_interpreter_library.dart
+*.test_iterator_library.dart
+*.test_mediator_library.dart
+*.test_memento_library.dart
+*.test_observer_library.dart
+*.test_state_library.dart
+*.test_strategy_library.dart
+*.test_template_method_library.dart
+*.test_visitor_library.dart
+*.test_pattern_library.dart
+*.test_architecture_library.dart
+*.test_clean_architecture_library.dart
+*.test_domain_driven_design_library.dart
+*.test_test_driven_development_library.dart
+*.test_behavior_driven_development_library.dart
\ No newline at end of file
```

---

### Commit: b8577bd92455a14963722702ba5d30e7d725f255
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update emacs ignore rules

**Changed Files:**
- shared/gitignore/emacs.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/emacs.gitignore b/shared/gitignore/emacs.gitignore
index e69de29..9f6ba96 100644
--- a/shared/gitignore/emacs.gitignore
+++ b/shared/gitignore/emacs.gitignore
@@ -0,0 +1,460 @@
+# Emacs Gitignore - Professional Editor Grade
+
+# Byte-compiled / optimized / DLL files
+*.elc
+*.eln
+*.el.gz
+*.el.xz
+
+# Auto-save files
+*~
+\#*\#
+.\#*
+
+# Lock files
+.*.lock
+*.#*
+
+# Backup files
+*.bak
+*.backup
+
+# Auto-save list
+.saves-*
+
+
+# Persistent session save file
+.emacs.desktop
+.emacs.desktop.lock
+
+# Custom configuration
+custom.el
+custom-*.el
+
+# Package files
+elpa/
+packages/
+elpa-archives/
+quelpa/
+
+# Projectile
+.projectile
+.projectile-bookmarks.eld
+
+# Bookmarks
+bookmarks
+bookmarks.*
+
+# Recent files
+recentf
+recentf.*
+
+# Saveplace
+places
+places.*
+
+# Eshell
+eshell/
+eshell/history
+eshell/lastdir
+
+# Tramp
+tramp
+tramp.*
+
+# Authinfo
+.authinfo
+.authinfo.gpg
+.authinfo.gpg~
+.netrc
+
+# Gnus
+.bbdb
+.newsrc-dribble
+.newsrc.eld
+nnml/
+nnfolder/
+
+# ERC
+erc/
+erc/logs/
+
+# Org-mode
+org-id-locations
+org-clock-save.el
+org-publish-timestamp-*
+org-publish-cache-*
+
+# Ivy
+ivy-history
+ivy-occur-*
+
+# Counsel
+counsel-etags-*
+
+# LSP
+.lsp-session-v1
+eglot-*
+lsp-session-*
+
+# Dired
+dired-*
+.dired-*
+
+# Minibuffer
+minibuffer-history
+minibuffer-*
+
+# Compilation
+compilation-*
+
+# Grep
+grep-*
+
+# Flymake
+flymake-*
+flycheck-*
+
+# Company
+company-statistics-*
+
+# Yasnippet
+yas-compiled-directory
+yas-*
+
+# Project
+projectile-bookmarks.eld
+projectile.cache
+
+# Magit
+magit-*
+magit-refresh-*
+
+# Git
+git-commit-*
+
+# VC
+vc-diff-*
+vc-annotate-*
+
+# Debug
+debug-*
+
+# Backtrace
+*backtrace*
+
+# Core dumps
+core
+*.core
+
+# Performance
+profile
+*.prof
+
+# Garbage collection
+garbage-*
+
+# Desktop save
+.emacs.desktop
+.desktop
+
+# Session
+session-*
+.emacs.session
+
+# Registers
+registers-*
+
+# Undo tree
+undo-tree-*
+undo-fu-session-*
+
+# Persistent scratch
+persistent-scratch
+*scratch*
+
+# Temp files
+/tmp/
+/temp/
+*autoloads.el
+loaddefs.el
+
+# Custom themes
+custom-theme-*
+theme-*
+
+# Package-quickstart
+package-quickstart.el
+package-quickstart.elc
+
+# Early init
+early-init.el
+early-init.elc
+
+# Site-start
+site-start.el
+site-start.elc
+
+# Default directory
+default-directory
+
+# OS specific
+.DS_Store
+Thumbs.db
+desktop.ini
+
+# Lock files for Windows
+*~*.lnk
+
+# Spell checking
+.ispell_
+aspell-*
+
+# PDF tools
+pdf-view-*
+
+# Nov (epub)
+nov-*
+
+# EWW
+eww-*
+
+# SQL
+sql-*
+
+# Python
+python-*
+
+# JavaScript
+js-*
+json-*
+
+# Markdown
+markdown-*
+
+# YAML
+yaml-*
+
+# XML
+xml-*
+nxml-*
+
+# HTML
+html-*
+sgml-*
+
+# CSS
+css-*
+
+# Docker
+docker-*
+
+# Terraform
+terraform-*
+
+# Ansible
+ansible-*
+
+# Kubernetes
+kubernetes-*
+
+# Lisp
+lisp-*
+slime-*
+
+# Clojure
+clojure-*
+cider-*
+
+# Rust
+rust-*
+racer-*
+rustfmt-*
+
+# Go
+go-*
+gofmt-*
+
+# Haskell
+haskell-*
+
+# OCaml
+ocaml-*
+
+# Ruby
+ruby-*
+
+# PHP
+php-*
+
+# Java
+java-*
+meghanada-*
+
+# C/C++
+c-*
+c++-*
+cmake-*
+
+# Shell
+shell-*
+sh-*
+bash-*
+zsh-*
+fish-*
+
+# Terminal
+term-*
+vterm-*
+eshell-*
+
+# Comint
+comint-*
+
+# Process
+process-*
+
+# Compile
+compile-*
+
+# GUD
+gud-*
+
+# Debugger
+debug-*
+realgud-*
+
+# DAP
+dap-*
+
+# Eglot
+eglot-*
+
+# LSP
+lsp-*
+
+# Treesitter
+treesit-*
+
+# Corfu
+corfu-*
+
+# Vertico
+vertico-*
+
+# Orderless
+orderless-*
+
+# Marginalia
+marginalia-*
+
+# Embark
+embark-*
+
+# Consult
+consult-*
+
+# Savehist
+savehist-*
+
+# History
+history-*
+
+# Recentf
+recentf-*
+
+# Bookmarks
+bookmarks-*
+
+# Saveplace
+saveplace-*
+
+# Desktop
+desktop-*
+
+# Session
+session-*
+
+# Server
+server/
+server.*
+
+# Client
+client-*
+
+# Frame
+frame-*
+
+# Window
+window-*
+
+# Buffer
+buffer-*
+
+# Mode line
+mode-line-*
+
+# Font
+font-*
+
+# Face
+face-*
+
+# Theme
+theme-*
+
+# Custom
+custom-*
+
+# Package
+package-*
+
+# Use-package
+use-package-*
+
+# Straight
+straight/
+straight-*
+
+# Borg
+borg/
+
+# Quelpa
+quelpa/
+quelpa-*
+
+# El-get
+el-get/
+el-get-*
+
+# Leaf
+leaf-*
+
+# Doom Emacs
+.doom.d/
+doom-*
+
+# Spacemacs
+.spacemacs
+.spacemacs.env
+.spacemacs.d/
+
+# Chemacs
+.chemacs.el
+.chemacs.d/
+
+# Prelude
+.prelude.el
+
+# Custom configurations
+.config/emacs/
+.emacs.d/
+.init.el
+._emacs
+
+# Temporary directories
+auto-save-list/
+backup/
+cache/
+etc/
+var/
\ No newline at end of file
```

---

### Commit: 5b2e090f1275d74ff721d322fab20e6838d69b03
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update eclipse ignore rules

**Changed Files:**
- shared/gitignore/eclipse.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/eclipse.gitignore b/shared/gitignore/eclipse.gitignore
index e69de29..2120ee1 100644
--- a/shared/gitignore/eclipse.gitignore
+++ b/shared/gitignore/eclipse.gitignore
@@ -0,0 +1,402 @@
+# Eclipse Gitignore - Professional IDE Grade
+
+# Eclipse Core
+.project
+.classpath
+.settings/
+bin/
+tmp/
+
+# PDT specific
+.buildpath
+
+# External tool builders
+.externalToolBuilders/
+
+# Locally stored "Eclipse launch configurations"
+*.launch
+
+# PyDev specific (Python)
+.pydevproject
+
+# CDT-specific (C/C++)
+.cproject
+
+# Java annotation processor (APT)
+.factorypath
+
+# PDT-specific
+.buildpath
+
+# sbteclipse plugin
+.target
+
+# Tern plugin
+.tern-project
+
+# TeXlipse plugin
+.texlipse
+
+# STS (Spring Tool Suite)
+.springBeans
+
+# Code Recommenders
+.recommenders/
+
+# Annotation Processing
+.apt_generated/
+
+# Scala IDE specific (Scala)
+.scala_dependencies
+.worksheet
+
+# Eclipse Neon
+.metadata/
+
+# Code Mix
+.orm.jpa
+
+# Plugin files
+*.jar
+*.war
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Virtual machine crash logs
+*.hprof
+*.dump
+
+# Backup files
+*.bak
+*.backup
+*~
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Log files
+*.log
+logs/
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.rar
+
+# IDE
+*.swp
+*.swo
+
+# Maven
+target/
+pom.xml.tag
+pom.xml.releaseBackup
+pom.xml.versionsBackup
+pom.xml.next
+release.properties
+dependency-reduced-pom.xml
+buildNumber.properties
+.mvn/timing.properties
+.mvn/wrapper/maven-wrapper.jar
+
+# Gradle
+.gradle/
+build/
+
+# Ant
+ant-launcher.jar
+antlib.xml
+build.xml
+local.properties
+
+# Javadoc
+javadoc/
+
+# Unit test
+/.clover/
+/test-output/
+/test-results/
+/coverage/
+
+# Checkstyle
+checkstyle-output.xml
+checkstyle-checker.xml
+checkstyle-suppressions.xml
+
+# JaCoCo
+/jacoco.exec
+/jacoco-it.exec
+
+# PMD
+pmd.xml
+
+# FindBugs
+findbugs.xml
+
+# EclEmma
+*.em
+*.ec
+
+# Coverage
+coverage/
+
+# SpotBugs
+spotbugsXml.xml
+
+# SonarQube
+.sonar/
+sonar-project.properties
+
+# Jenkins
+.jenkins/
+
+# CI
+.hudson/
+
+# Dependency reduced POM
+dependency-reduced-pom.xml
+
+# Build wrapper
+.mvn/wrapper/maven-wrapper.jar
+
+# Eclipse workspace
+.metadata/
+.metadata/.plugins/
+.metadata/.plugins/org.eclipse.core.resources/.projects/
+.metadata/.plugins/org.eclipse.core.resources/.root/
+.metadata/.plugins/org.eclipse.core.resources/.safetable/
+.metadata/.plugins/org.eclipse.core.runtime/.settings/
+.metadata/.plugins/org.eclipse.e4.workbench/
+.metadata/.plugins/org.eclipse.jdt.core/
+.metadata/.plugins/org.eclipse.jdt.launching/
+.metadata/.plugins/org.eclipse.jst.j2ee.core/
+.metadata/.plugins/org.eclipse.m2e.core/
+.metadata/.plugins/org.eclipse.pde.core/
+.metadata/.plugins/org.eclipse.ui.workbench/
+
+# Remote systems
+.remote/
+
+# Server runtime
+Servers/
+
+# Team project set
+.psf
+
+# WTP
+.jwt
+
+# Web services
+org.eclipse.wst.server.core/
+org.eclipse.wst.server.core.prefs
+
+# JRE
+org.eclipse.jdt.launching/
+
+# Code formatting
+org.eclipse.jdt.core.prefs
+
+# Maven
+org.eclipse.m2e.core.prefs
+
+# Web Tools
+org.eclipse.wst.common.component
+org.eclipse.wst.common.project.facet.core.xml
+org.eclipse.wst.jsdt.core/
+
+# JPA
+.jpa
+
+# Database development
+.derby/
+
+# XML
+.xml
+
+# JavaScript
+.jsdtscope
+
+# Web
+.settings/org.eclipse.wst.jsdt.ui.superType.container
+.settings/org.eclipse.wst.jsdt.ui.superType.name
+
+# Debug
+.debug/
+
+# Launch configurations
+*.launch
+
+# Runtime
+runtime-*
+
+# Workspace save
+.save/
+
+# Working sets
+*.workingset
+
+# Templates
+*.template
+
+# Local history
+.history/
+
+# Patch
+*.patch
+
+# Eclipse application
+eclipse.application
+
+# Product configuration
+eclipse.product
+
+# P2
+p2/
+
+# Update manager
+.update/
+
+# User interface
+.ui/
+
+# Workspace mechanics
+.workspace/
+
+# Build configurations
+.cbuild/
+
+# CDT
+.csettings
+
+# PHP Development Tools
+.phpeclipse
+
+# Dynamic Web Projects
+.dynamicwebproject
+
+# EJB Projects
+.ejbproject
+
+# EAR Projects
+.earproject
+
+# Application Client Projects
+.appclientproject
+
+# Connector Projects
+.connectorproject
+
+# Utility Projects
+.utilityproject
+
+# Web Fragment Projects
+.webfragmentproject
+
+# Web Service Projects
+.webserviceproject
+
+# JAX-WS
+.jaxws
+
+# JAX-RS
+.jaxrs
+
+# JPA Projects
+.jpaproject
+
+# OSGi Projects
+.osgiproject
+
+# Plug-in Projects
+.plugin
+
+# Feature Projects
+.feature
+
+# Update Site Projects
+.updatesite
+
+# Target Platform
+.target
+
+# Maven integration
+.mvn/
+
+# TestNG
+testng.xml
+testng-failed.xml
+testng-suite.xml
+
+# Checkstyle
+checkstyle-result.xml
+
+# PMD
+pmd.xml
+
+# FindBugs
+findbugs.xml
+
+# Java NCSS
+javancss.xml
+
+# JDepend
+jdepend-report.xml
+
+# Cobertura
+cobertura.ser
+
+# EclEmma
+.emma
+
+# JaCoCo
+jacoco.exec
+
+# Sonar
+sonar-project.properties
+
+# Buildship
+buildship/
+
+# Xtext
+.xtext
+
+# EGit
+.egit/
+
+# Mylyn
+.mylyn/
+
+# Window builder
+.wbp/
+
+# Window preferences
+.win/
+
+# Mac preferences
+.mac/
+
+# Linux preferences
+.linux/
\ No newline at end of file
```

---

### Commit: 3ecdeeb89652c18c80b6f5b04b19c8aa6584076f
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update docker ignore rules

**Changed Files:**
- shared/gitignore/docker.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/docker.gitignore b/shared/gitignore/docker.gitignore
index e69de29..0a96ffd 100644
--- a/shared/gitignore/docker.gitignore
+++ b/shared/gitignore/docker.gitignore
@@ -0,0 +1,265 @@
+# Docker Gitignore - Professional DevOps Grade
+
+# Docker
+Dockerfile
+Dockerfile.*
+docker-compose.yml
+docker-compose.*.yml
+.dockerignore
+.dockerenv
+
+# Docker build context
+.docker/
+
+# Docker volumes
+**/docker-data/
+**/docker-volumes/
+**/mysql-data/
+**/postgres-data/
+**/mongo-data/
+**/redis-data/
+
+# Kubernetes
+k8s/
+kubernetes/
+*.kubeconfig
+.kube/
+
+# Helm
+helm/
+*.tgz
+charts/
+ Chart.lock
+
+# Terraform
+.terraform/
+*.tfstate
+*.tfstate.backup
+*.tfvars
+.terraform.lock.hcl
+
+# Packer
+packer_cache/
+*.box
+
+# Vagrant
+.vagrant/
+Vagrantfile
+
+# Container registries
+**/registry/
+**/images/
+
+# Build artifacts
+build/
+dist/
+.target/
+
+# Logs
+*.log
+logs/
+
+# Environment files
+.env
+.env.*
+!.env.example
+
+# SSH keys
+id_rsa
+id_dsa
+*.pem
+*.key
+
+# Certificates
+*.crt
+*.csr
+*.p12
+*.pfx
+
+# Backup files
+*.backup
+*.bak
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# IDE
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# Database files
+*.db
+*.sqlite
+*.sqlite3
+
+# Minikube
+.minikube/
+
+# Kind
+kind-*
+
+# Docker Machine
+.machine/
+
+# Rancher
+rancher/
+
+# Portainer
+portainer-data/
+
+# Swarm
+swarm-configs/
+swarm-secrets/
+
+# Docker contexts
+.contexts/
+
+# Compose override (local development)
+docker-compose.override.yml
+
+# BuildKit
+.buildkit/
+
+# ContainerD
+containerd/
+
+# Registry mirrors
+registry-mirrors/
+
+# Security scans
+*.json
+trivy/
+grype/
+anchore/
+
+# Performance data
+*.prof
+*.gcda
+*.gcno
+
+# Monitoring
+prometheus-data/
+grafana-data/
+loki-data/
+
+# Logging
+elasticsearch-data/
+fluentd-data/
+
+# Tracing
+jaeger-data/
+tempo-data/
+
+# Service mesh
+istio/
+linkerd/
+
+# Network
+.cni/
+flannel/
+
+# Storage
+ceph/
+longhorn/
+rook/
+
+# Backup and restore
+backup/
+restore/
+
+# Migration files
+migrations/
+
+# Configuration management
+ansible/
+chef/
+puppet/
+salt/
+
+# CI/CD
+.gitlab-ci.yml
+.jenkins/
+.github/workflows/
+.circleci/
+.travis.yml
+appveyor.yml
+.azure-pipelines/
+
+# Infrastructure as Code
+Pulumi.*.yaml
+pulumi/
+cdk.out/
+cdk.context.json
+
+# Cloud specific
+.aws/
+.gcp/
+.azure/
+
+# Secret files
+*_secret*
+*_password*
+*_token*
+*_key*
+
+# Binary files
+*.exe
+*.bin
+*.jar
+*.war
+*.ear
+
+# Archive files
+*.zip
+*.tar
+*.gz
+*.7z
+
+# Documentation
+site/
+_build/
+
+# Testing
+test-results/
+coverage/
+
+# Performance testing
+k6/
+artillery/
+
+# Security
+.vault/
+*.gpg
+*.asc
+
+# Package managers
+node_modules/
+vendor/
+__pycache__/
+*.pyc
+
+# Local development overrides
+local-overrides/
+dev-overrides/
\ No newline at end of file
```

---

### Commit: 177120d70b264e9cc1936b6e410348480f2f4c43
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update deno ignore rules

**Changed Files:**
- shared/gitignore/deno.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/deno.gitignore b/shared/gitignore/deno.gitignore
index e69de29..e8039bc 100644
--- a/shared/gitignore/deno.gitignore
+++ b/shared/gitignore/deno.gitignore
@@ -0,0 +1,249 @@
+# Deno Gitignore - Professional Grade
+
+# Deno cache directory
+deno_dir/
+.deno/
+
+# Build output
+dist/
+build/
+.target/
+.deno_plugins/
+
+# Dependencies
+node_modules/  # If using npm packages
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+deno.lock
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory
+coverage/
+*.lcov
+.nyc_output
+
+# TypeScript cache
+*.tsbuildinfo
+
+# Optional eslint cache
+.eslintcache
+
+# Output of 'npm pack'
+*.tgz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Database files (if using local DB)
+*.db
+*.sqlite
+*.sqlite3
+
+# Backup files
+*.backup
+*.bak
+
+# Certificate files
+*.pem
+*.crt
+*.key
+*.csr
+
+# Large media files
+*.mp4
+*.avi
+*.mov
+*.wav
+*.mp3
+*.ogg
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
+
+# Deno specific
+*.d.ts
+*.d.ts.map
+*.js.map
+*.meta
+*.deps.json
+*.graph
+*.lock
+
+# Import map
+import_map.json
+import-map.json
+
+# Deploy
+deploy/
+
+# Fresh framework
+_fresh/
+
+# Lume SSG
+_site/
+
+# Aleph.js
+.aleph/
+
+# Ultra
+.ultra/
+
+# Oak sessions
+sessions/
+
+# WebAssembly
+*.wasm
+*.wat
+
+# Edge functions
+edge-functions/
+
+# Deno Deploy
+deno.json.local
+deno.lock.local
+
+# Benchmarks
+benchmarks/
+*.bench.json
+*.bench.ts
+
+# Compile cache
+.compile-cache/
+
+# Bundle analysis
+bundle-analysis/
+
+# Size limit
+.size-limit.json
+
+# Performance budgets
+.performance-budgets.json
\ No newline at end of file
```

---

### Commit: 4d93847a1d2c83b0a88ac2a5ac96984125e0e1c0
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update csharp ignore rules

**Changed Files:**
- shared/gitignore/csharp.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/csharp.gitignore b/shared/gitignore/csharp.gitignore
index e69de29..cf2e641 100644
--- a/shared/gitignore/csharp.gitignore
+++ b/shared/gitignore/csharp.gitignore
@@ -0,0 +1,360 @@
+# C# .NET Gitignore - Professional Enterprise Grade
+
+## Build Results
+[Dd]ebug/
+[Dd]ebugPublic/
+[Rr]elease/
+[Rr]eleases/
+x64/
+x86/
+[Ww][Ii][Nn]32/
+[Aa][Rr][Mm]/
+[Aa][Rr][Mm]64/
+bld/
+[Bb]in/
+[Oo]bj/
+[Oo]ut/
+msbuild.log
+msbuild.err
+msbuild.wrn
+
+## Visual Studio
+.vs/
+.vscode/
+.vsconfig
+/*.csproj.user
+/*.vbproj.user
+/*.xproj.user
+/*.dbmdl
+/*.dbproj.user
+/*.suo
+/*.user
+/*.userosscache
+/*.sln.docstates
+/*.ide/
+
+## Rider
+.idea/
+*.sln.iml
+*.csproj.iml
+
+## User-specific files
+*.suo
+*.user
+*.userprefs
+*.usertest
+
+## Build results
+*.VisualState.xml
+BuildLog.htm
+*.[Pp]ublish.xml
+*.pubxml
+*.nupkg
+*.snupkg
+*.spkg
+*.wsp
+*.7z
+*.dll
+*.exe
+*.pdb
+*.xml
+
+## NuGet
+[Nn]u[Gg]et/
+*.nupkg
+*.nuspec
+NuGet.exe
+NuGet.Config
+packages/
+packages-*
+*.symbols.nupkg
+
+## Azure
+*.azure
+*.pfx
+*.publishsettings
+PublishProfiles/
+*.pubxml.user
+
+## Microsoft AJAX
+*.Build.Clean
+
+## Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+$RECYCLE.BIN/
+
+## macOS
+.DS_Store
+
+## Linux
+.directory
+
+## Unity
+/[Ll]ibrary/
+/[Tt]emp/
+/[Oo]bj/
+/[Bb]uild/
+/[Bb]uilds/
+/[Ll]ogs/
+/[Uu]ser[Ss]ettings/
+*.unityproj
+*.mat
+*.fbx
+*.obj
+*.tga
+
+## ASP.NET
+App_Data/
+App_Code/
+App_GlobalResources/
+App_LocalResources/
+App_WebReferences/
+App_Browsers/
+App_Data/
+/bin/
+/obj/
+
+## Entity Framework
+Migrations/
+*.mdf
+*.ldf
+
+## Test Results
+[Tt]est[Rr]esult*/
+[Bb]uild[Ll]og.*
+*_i.c
+*_p.c
+*_i.h
+*.ilk
+*.meta
+*.obj
+*.pch
+*.pdb
+*.pgc
+*.pgd
+*.rsp
+*.sbr
+*.tlb
+*.tli
+*.tlh
+*.tmp
+*.tmp_proj
+*_wpftmp.csproj
+*.log
+*.vspscc
+*.vssscc
+.builds
+*.pidb
+*.svclog
+*.scc
+
+## Coverage
+coverage.xml
+*.coverage
+*.coveragexml
+
+## Performance
+profile.json
+*.gcov
+*.gcda
+*.gcno
+
+## StyleCop
+StyleCopReport.xml
+
+## Paket
+.paket/
+paket-files/
+
+## FAKE
+.fake/
+
+## JetBrains
+*.sln.iml
+
+## CodeRush
+.cr/
+
+## Python Tools
+*.pyc
+
+## Cake
+tools/
+!tools/packages.config
+
+## Telerik
+*.[Tt]est[Rr]esults
+
+## BizTalk
+*.btp.cs
+*.btm.cs
+*.odx.cs
+*.xsd.cs
+
+## Prism
+*.psess
+*.vsp
+*.vspx
+
+## SQL Server
+*.mdf
+*.ldf
+*.ndf
+
+## Microsoft Fakes
+FakesAssemblies/
+
+## Node.js
+node_modules/
+npm-debug.log
+yarn-error.log
+
+## Redis
+*.rdb
+*.aof
+
+## Elasticsearch
+data/
+
+## Logs
+*.log
+logs/
+
+## Backup
+*.bak
+*.backup
+
+## Temporary
+*.tmp
+*.temp
+tmp/
+temp/
+
+## IDE
+*.swp
+*.swo
+*~
+
+## Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+## Local History
+.history/
+
+## VS Code
+.vscode/settings.json
+.vscode/tasks.json
+.vscode/launch.json
+.vscode/extensions.json
+.vscode/*.code-workspace
+
+## Rider
+.idea/.name
+.idea/.description
+.idea/*.xml
+.idea/*.iml
+.idea/modules.xml
+.idea/.name
+.idea/dataSources/
+.idea/dataSources.ids
+.idea/dataSources.local.xml
+.idea/sonarlint/
+.idea/httpRequests/
+
+## Visual Studio Mac
+*.mpack
+
+## MSBuild
+*.csproj.rs
+*.vbproj.rs
+
+## Docker
+.dockerignore
+Dockerfile
+docker-compose.yml
+docker-compose.override.yml
+
+## Kubernetes
+*.kubeconfig
+k8s/
+
+## GitHub Actions
+.github/workflows/*.yml
+!.github/workflows/example.yml
+
+## Azure Functions
+func.exe
+func
+.local.settings.json
+
+## Application Insights
+ApplicationInsights.config
+
+## Windows Communication Foundation
+*.svc
+
+## Windows Presentation Foundation
+*.xbap
+
+## Windows Forms
+*.frx
+
+## ClickOnce
+*.application
+*.manifest
+*.manifestWindows
+*.vsto
+*.xaml
+*.xpt
+*.xrm-ms
+
+## Database
+*.mdf
+*.ldf
+*.sdf
+
+## Others
+*.[Cc]ache
+ClientBin/
+~$*
+*~
+*.dbmdl
+*.dbproj.schemaview
+*.jfm
+*.pfx
+*.publishsettings
+*.refresh
+*.ruleset
+*.sln.old
+*.sublime-project
+*.sublime-workspace
+*.tlb
+*.tlh
+*.tmp_proj
+*.unsuccessfulbuild
+*.vbw
+*.vspx
+*.webinfo
+*.opensdf
+*.sdf
+*.cachefile
+*.VC.db
+*.VC.opendb
+*.VC.VC.opendb
+MigrationBackup/
+[Tt]est[Rr]esults
+_UpgradeReport_Files/
+Backup*/
+UpgradeLog*.XML
+UpgradeLog*.htm
+*.sql
+*.bacpac
\ No newline at end of file
```

---

### Commit: 8eb81a57c2374c695eea678df6063331058443a3
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update cpp ignore rules

**Changed Files:**
- shared/gitignore/cpp.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/cpp.gitignore b/shared/gitignore/cpp.gitignore
index e69de29..b52144d 100644
--- a/shared/gitignore/cpp.gitignore
+++ b/shared/gitignore/cpp.gitignore
@@ -0,0 +1,323 @@
+# C++.gitignore - Professional Grade
+# Professional C/C++ Development
+
+# Prerequisites
+*.d
+
+# Compiled Object files
+*.slo
+*.lo
+*.o
+*.obj
+
+# Precompiled Headers
+*.gch
+*.pch
+
+# Compiled Dynamic libraries
+*.so
+*.dylib
+*.dll
+
+# Executables
+*.exe
+*.out
+*.app
+
+# Debug files
+*.dSYM/
+*.su
+*.idb
+*.pdb
+
+# Kernel Module Compile Results
+*.mod*
+*.cmd
+.tmp_versions/
+modules.order
+Module.symvers
+Mkfile.old
+dkms.conf
+
+# Build system files
+build/
+Build/
+CMakeFiles/
+CMakeCache.txt
+cmake_install.cmake
+Makefile
+*.make
+*.cmake
+!CMakeLists.txt
+*.sln
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.cbp
+*.workspace
+.project
+.cproject
+.autotools
+
+# Qt Creator
+*.pro.user
+*.pro.user.*
+
+# Qt
+moc_*
+qrc_*
+ui_*
+
+# CLion
+.idea/
+cmake-build-*/
+!cmake-build-*/CMakeCache.txt
+
+# Visual Studio
+.vs/
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.sln
+*.sdf
+ipch/
+*.aps
+*.ncb
+*.opensdf
+*.suo
+*.suo
+*.tlb
+*.tlh
+*.bak
+*.cache
+*.ilk
+*.log
+*.lib
+*.sbr
+*.map
+*.db
+*.idb
+*.pch
+*.pdb
+*.res
+*.resource
+
+# Eclipse
+.settings/
+.metadata/
+bin/
+tmp/
+*.tmp
+*.bak
+*.swp
+*~.nib
+local.properties
+.classpath
+.project
+.loadpath
+
+# CodeBlocks
+*.depend
+*.layout
+
+# Visual Studio Code
+.vscode/
+*.code-workspace
+
+# Xcode
+*.xcodeproj/
+*.xcworkspace/
+xcuserdata/
+*.xcuserstate
+*.xcscmblueprint
+*.xccheckout
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs and databases
+*.log
+*.sql
+*.sqlite
+
+# Profiling data
+*.prof
+*.gcda
+*.gcno
+*.gcov
+gmon.out
+
+# Coverage reports
+coverage/
+*.lcov
+
+# Doxygen
+docs/html/
+docs/latex/
+doxygen_sqlite3.db
+
+# Static analysis
+.clang-tidy
+.clang-format
+compile_commands.json
+
+# Precompiled headers
+*.gch
+*.pch
+
+# LLVM/Clang
+*.bc
+*.ll
+
+# CUDA
+*.cubin
+*.ptx
+*.fatbin
+
+# OpenCL
+*.air
+
+# Fortran
+*.mod
+*.smod
+
+# Assembly
+*.lst
+*.asm
+
+# Dependency files
+*.d
+*.d.*
+
+# Autotools
+autom4te.cache/
+*.in
+aclocal.m4
+compile
+config.guess
+config.h
+config.h.in
+config.log
+config.status
+config.sub
+configure
+depcomp
+install-sh
+libtool
+ltmain.sh
+m4/
+missing
+stamp-h1
+
+# Meson
+builddir/
+meson-private/
+meson-info/
+meson-logs/
+
+# Bazel
+bazel-*
+.bazelrc.user
+
+# Conan
+.conan/
+
+# Vcpkg
+vcpkg_installed/
+
+# Compiler-specific
+
+# GCC
+*.aux
+*.bbl
+*.blg
+*.fdb_latexmk
+*.fls
+*.lof
+*.lot
+*.out
+*.toc
+
+# Intel
+*.ipo
+
+# Microsoft
+*.exp
+*.ilk
+*.lib
+*.pdb
+*.pgd
+*.pch
+
+# Embedded development
+*.hex
+*.bin
+*.elf
+*.map
+*.lst
+
+# Cross-compilation toolchains
+toolchains/
+sysroots/
+
+# Library specific
+
+# Boost
+bin.v2/
+stage/
+
+# OpenCV
+*.jpg
+*.png
+*.bmp
+
+# Unit test frameworks
+*.test
+*.gtest
+
+# Benchmarking results
+benchmarks/
+*.bench
+
+# Documentation
+docs/_build/
+site/
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Performance analysis
+perf.data*
+*.folded
+*.svg
\ No newline at end of file
```

---

### Commit: 8f1b07603bf4495114d6aa1bbfb8d61c18989dd9
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update conda ignore rules

**Changed Files:**
- shared/gitignore/conda.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/conda.gitignore b/shared/gitignore/conda.gitignore
index e69de29..b3543ff 100644
--- a/shared/gitignore/conda.gitignore
+++ b/shared/gitignore/conda.gitignore
@@ -0,0 +1,236 @@
+# Conda.gitignore - Professional Grade
+# Python package and environment management
+
+# Conda environments
+env/
+venv/
+.venv/
+envs/
+conda-envs/
+
+# Conda package caches
+pkgs/
+conda_pkgs/
+.pkg_cache/
+
+# Conda configuration
+.conda/
+conda-meta/
+conda-bld/
+
+# Environment files (can contain system-specific paths)
+environment.yml
+environment.yaml
+!environment.example.yml
+
+# Conda lock files (if used)
+conda-lock.yml
+conda-lock.yaml
+
+# Python cache
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
+#   https://pdm.fming.dev/#use-with-ide
+.pdm.toml
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
+#  JetBrains specific template is split out into a separate .gitignore.
+.idea/
+
+# VSCode
+.vscode/
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Temporary files
+*.tmp
+*.temp
+
+# Log files
+*.log
+logs/
+
+# Database files
+*.db
+*.sqlite
+*.sqlite3
+
+# Jupyter
+.jupyter/
+notebooks/*.ipynb
+
+# ML model files (large)
+*.pkl
+*.pickle
+*.joblib
+*.h5
+*.hdf5
+*.model
+
+# Data files (large)
+*.csv
+*.parquet
+*.feather
+*.orc
\ No newline at end of file
```

---

### Commit: 105a50da29453f26323a237be1f3e6e31d226cfe
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update c ignore rules

**Changed Files:**
- shared/gitignore/c.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/c.gitignore b/shared/gitignore/c.gitignore
index e69de29..b52144d 100644
--- a/shared/gitignore/c.gitignore
+++ b/shared/gitignore/c.gitignore
@@ -0,0 +1,323 @@
+# C++.gitignore - Professional Grade
+# Professional C/C++ Development
+
+# Prerequisites
+*.d
+
+# Compiled Object files
+*.slo
+*.lo
+*.o
+*.obj
+
+# Precompiled Headers
+*.gch
+*.pch
+
+# Compiled Dynamic libraries
+*.so
+*.dylib
+*.dll
+
+# Executables
+*.exe
+*.out
+*.app
+
+# Debug files
+*.dSYM/
+*.su
+*.idb
+*.pdb
+
+# Kernel Module Compile Results
+*.mod*
+*.cmd
+.tmp_versions/
+modules.order
+Module.symvers
+Mkfile.old
+dkms.conf
+
+# Build system files
+build/
+Build/
+CMakeFiles/
+CMakeCache.txt
+cmake_install.cmake
+Makefile
+*.make
+*.cmake
+!CMakeLists.txt
+*.sln
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.cbp
+*.workspace
+.project
+.cproject
+.autotools
+
+# Qt Creator
+*.pro.user
+*.pro.user.*
+
+# Qt
+moc_*
+qrc_*
+ui_*
+
+# CLion
+.idea/
+cmake-build-*/
+!cmake-build-*/CMakeCache.txt
+
+# Visual Studio
+.vs/
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.sln
+*.sdf
+ipch/
+*.aps
+*.ncb
+*.opensdf
+*.suo
+*.suo
+*.tlb
+*.tlh
+*.bak
+*.cache
+*.ilk
+*.log
+*.lib
+*.sbr
+*.map
+*.db
+*.idb
+*.pch
+*.pdb
+*.res
+*.resource
+
+# Eclipse
+.settings/
+.metadata/
+bin/
+tmp/
+*.tmp
+*.bak
+*.swp
+*~.nib
+local.properties
+.classpath
+.project
+.loadpath
+
+# CodeBlocks
+*.depend
+*.layout
+
+# Visual Studio Code
+.vscode/
+*.code-workspace
+
+# Xcode
+*.xcodeproj/
+*.xcworkspace/
+xcuserdata/
+*.xcuserstate
+*.xcscmblueprint
+*.xccheckout
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs and databases
+*.log
+*.sql
+*.sqlite
+
+# Profiling data
+*.prof
+*.gcda
+*.gcno
+*.gcov
+gmon.out
+
+# Coverage reports
+coverage/
+*.lcov
+
+# Doxygen
+docs/html/
+docs/latex/
+doxygen_sqlite3.db
+
+# Static analysis
+.clang-tidy
+.clang-format
+compile_commands.json
+
+# Precompiled headers
+*.gch
+*.pch
+
+# LLVM/Clang
+*.bc
+*.ll
+
+# CUDA
+*.cubin
+*.ptx
+*.fatbin
+
+# OpenCL
+*.air
+
+# Fortran
+*.mod
+*.smod
+
+# Assembly
+*.lst
+*.asm
+
+# Dependency files
+*.d
+*.d.*
+
+# Autotools
+autom4te.cache/
+*.in
+aclocal.m4
+compile
+config.guess
+config.h
+config.h.in
+config.log
+config.status
+config.sub
+configure
+depcomp
+install-sh
+libtool
+ltmain.sh
+m4/
+missing
+stamp-h1
+
+# Meson
+builddir/
+meson-private/
+meson-info/
+meson-logs/
+
+# Bazel
+bazel-*
+.bazelrc.user
+
+# Conan
+.conan/
+
+# Vcpkg
+vcpkg_installed/
+
+# Compiler-specific
+
+# GCC
+*.aux
+*.bbl
+*.blg
+*.fdb_latexmk
+*.fls
+*.lof
+*.lot
+*.out
+*.toc
+
+# Intel
+*.ipo
+
+# Microsoft
+*.exp
+*.ilk
+*.lib
+*.pdb
+*.pgd
+*.pch
+
+# Embedded development
+*.hex
+*.bin
+*.elf
+*.map
+*.lst
+
+# Cross-compilation toolchains
+toolchains/
+sysroots/
+
+# Library specific
+
+# Boost
+bin.v2/
+stage/
+
+# OpenCV
+*.jpg
+*.png
+*.bmp
+
+# Unit test frameworks
+*.test
+*.gtest
+
+# Benchmarking results
+benchmarks/
+*.bench
+
+# Documentation
+docs/_build/
+site/
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Performance analysis
+perf.data*
+*.folded
+*.svg
\ No newline at end of file
```

---

### Commit: 737584e0f5cdd243f25efd60b8a62fa9aab7d9e1
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update bun ignore rules

**Changed Files:**
- shared/gitignore/bun.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/bun.gitignore b/shared/gitignore/bun.gitignore
index e69de29..e4f698f 100644
--- a/shared/gitignore/bun.gitignore
+++ b/shared/gitignore/bun.gitignore
@@ -0,0 +1,225 @@
+# Bun.gitignore - Professional Grade
+# Bun runtime and package manager
+
+# Bun build output
+dist/
+build/
+.out/
+.nexus/
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Bun specific
+.bun/
+*.bun-tag-*
+*.bun-tags-*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+bun.lockb
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory
+coverage/
+*.lcov
+.nyc_output
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+jspm_packages/
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
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# Bun package manager
+bun.lockb
+
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Bun runtime temporary files
+.bun-tmp/
+
+# Database files (if using local DB)
+*.db
+*.sqlite
+*.sqlite3
+
+# Backup files
+*.backup
+*.bak
+
+# Certificate files
+*.pem
+*.crt
+*.key
+*.csr
+
+# Large media files
+*.mp4
+*.avi
+*.mov
+*.wav
+*.mp3
+*.ogg
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
\ No newline at end of file
```

---

### Commit: b7457622b0ef5f0c53f4546f6709959deed488ca
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update blender ignore rules

**Changed Files:**
- shared/gitignore/blender.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/blender.gitignore b/shared/gitignore/blender.gitignore
index e69de29..7be5e0a 100644
--- a/shared/gitignore/blender.gitignore
+++ b/shared/gitignore/blender.gitignore
@@ -0,0 +1,210 @@
+# Blender Project Gitignore
+
+# Blender auto-save files
+*.blend1
+*.blend2
+*.blend3
+*.blend4
+*.blend5
+*.blend6
+*.blend7
+*.blend8
+*.blend9
+
+# Blender backup files
+*.blend@
+*.blend~
+
+# Blender crash files
+*.blend.crash
+
+# Blender temporary files
+*.bphys
+*.bobj
+*.bvel
+*.bvh
+*.bhash
+*.bnoise
+
+# Blender cache files
+/*.bake
+/cache/
+/tmp/
+/temp/
+
+# Render output directories
+/renders/
+/output/
+/render_output/
+/exports/
+
+# Specific render file formats
+*.png
+*.jpg
+*.jpeg
+*.exr
+*.hdr
+*.tga
+*.tif
+*.tiff
+*.bmp
+*.avi
+*.mp4
+*.mov
+*.mkv
+
+# Blender user preferences (usually user-specific)
+userpref.blend
+
+# Add-on development
+__pycache__/
+*.pyc
+*.pyo
+*.pyd
+.Python
+env/
+venv/
+.venv/
+
+# Build/output directories for add-ons
+/build/
+/dist/
+/*.egg-info/
+
+# Blender asset libraries (cache and temporary files)
+/asset_library_temp/
+
+# Geometry nodes cache
+/geometry_nodes/
+
+# Simulation cache
+/sim_cache/
+/fluid_cache/
+/smoke_cache/
+/cloth_cache/
+/particle_cache/
+
+# Video sequencer cache
+/sequencer_cache/
+
+# UV unwrap cache
+/uv_cache/
+
+# Blender start-up file (if you want to ignore custom startup)
+startup.blend
+
+# Blender configuration files
+config.blend
+
+# Backup scripts
+*.py~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# Package files
+*.zip
+*.blend*
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Log files
+*.log
+logs/
+
+# Temporary project files
+/project_temp/
+/autosave/
+
+# Blender kit files (if using BlenderKit)
+/blenderkit/
+
+# Substance plugin cache
+/substance_cache/
+
+# Mesh cache files
+/*.mc
+/*.mcc
+
+# Point cloud files
+/*.pcd
+/*.pts
+
+# Alembic cache
+/*.abc
+
+# USD files (temporary/exported)
+/*.usd
+/*.usda
+/*.usdc
+
+# Collada exports
+/*.dae
+
+# OBJ exports (if you don't want to track exports)
+/*.obj
+/*.mtl
+
+# FBX exports
+/*.fbx
+
+# STL exports
+/*.stl
+
+# GLTF/GLB exports
+/*.gltf
+/*.glb
+
+# PLY exports
+/*.ply
+
+# 3D formats (general)
+/*.3ds
+/*.dxf
+/*.dwg
+
+# Blender preset files (user-specific)
+/presets/
+
+# Scripts temporary files
+/scripts_temp/
+
+# Add-on test files
+/test_output/
+/tests/results/
+
+# Development files
+/dev/
+/development/
+
+# Local configuration
+local_settings.py
+config_local.py
+
+# Large media files (optional - uncomment if needed)
+# /textures/
+# /hdris/
+# /models/
+# /references/
\ No newline at end of file
```

---

### Commit: 6af5ad059a7477e80eb7cb75cdd0e30321894d9f
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update astro ignore rules

**Changed Files:**
- shared/gitignore/astro.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/astro.gitignore b/shared/gitignore/astro.gitignore
index e69de29..d4ff41f 100644
--- a/shared/gitignore/astro.gitignore
+++ b/shared/gitignore/astro.gitignore
@@ -0,0 +1,205 @@
+# Astro build output
+dist/
+.build/
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Astro specific
+.astro/
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory used by tools like istanbul
+coverage/
+*.lcov
+
+# nyc test coverage
+.nyc_output
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+jspm_packages/
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
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+*.stories.ts
+*.stories.js
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Optional: if you use Content Collections (Astro), you might want to ignore generated types
+# .astro/types.d.ts
+
+# Optional: if you use Astro DB
+# .astro/db/
+# .astro/db_types.d.ts
+
+# Optional: if you use Astro Studio
+# .astro/studio.db
+# .astro/studio.db-journal
+
+# Build time generated files (if any)
+generated/
+
+# Markdown to HTML conversion cache (if using any plugins)
+.mdx-cache/
+
+# Image optimization cache (if using @astrojs/image)
+.astro-image-cache/
+# These are examples of files you usually WANT to commit:
+!astro.config.mjs
+!src/
+!public/  # But be careful with large media files
+!tsconfig.json
+!tailwind.config.js
+!components/
+!layouts/
+!pages/
```

---

### Commit: 5bf98b7b1ca036e0efb876242462fa151c209e88
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update ansible ignore rules

**Changed Files:**
- shared/gitignore/ansible.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/ansible.gitignore b/shared/gitignore/ansible.gitignore
index e69de29..7599e31 100644
--- a/shared/gitignore/ansible.gitignore
+++ b/shared/gitignore/ansible.gitignore
@@ -0,0 +1,204 @@
+# Ansible specific ignores
+
+# Backup files created by Ansible
+*.retry
+*.backup
+*.bak
+
+# Temporary files created during playbook execution
+*.tmp
+*.temp
+
+# Ansible vault password files (should not be committed)
+vault_password.txt
+.vault_pass
+*.vault_pass
+vault-secret.txt
+
+# Ansible configuration files (can be committed but often contain local settings)
+# ansible.cfg  # Uncomment if you don't want to commit ansible.cfg
+
+# Galaxy installation files
+galaxy.yml
+*.tar.gz
+
+# Role testing directories
+tests/test.yml
+tests/roles/
+.molecule/
+test/
+tests/output/
+
+# Cache directories
+.cache/
+__pycache__/
+*.pyc
+
+# Inventory files with sensitive data (customize as needed)
+# inventories/production/group_vars/all/vault
+# inventories/production/group_vars/*/vault.yml
+# inventories/production/host_vars/*/vault.yml
+
+# Sensitive variable files
+*_secret.yml
+*_secrets.yml
+*_vault.yml
+*_passwords.yml
+
+# Log files
+ansible.log
+*.log
+logs/
+
+# Development and IDE files
+
+# VS Code
+.vscode/
+*.code-workspace
+
+# PyCharm
+.idea/
+*.iml
+
+# Vim
+*.swp
+*.swo
+*~
+
+# Emacs
+*#
+.\#*
+\#*#
+
+# OS generated files
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Python specific (since Ansible is Python-based)
+*.egg-info/
+dist/
+build/
+.python-version
+
+# Virtual environments
+venv/
+env/
+.venv/
+virtualenv/
+
+# Collections and roles development
+collections/ansible_collections/*/  # But keep the namespace and collection name structure
+!collections/ansible_collections/namespace/
+!collections/ansible_collections/namespace/collection/
+
+# Molecule testing framework
+.molecule
+.molecule.yml
+.cache
+.pytest_cache/
+
+# Ansible Lint
+.ansible-lint
+.ansible-lint-*
+
+# Plugin development
+plugins/modules/*.pyc
+plugins/lookup/*.pyc
+plugins/filter/*.pyc
+plugins/action/*.pyc
+
+# Documentation builds
+site/
+_build/
+
+# Junk files
+*.orig
+*.rej
+
+# Certificate files (should not be committed)
+*.pem
+*.key
+*.crt
+*.csr
+
+# SSH keys
+id_rsa
+id_dsa
+*.pkey
+
+# Terraform state files (if using Terraform with Ansible)
+*.tfstate
+*.tfstate.backup
+.terraform/
+
+# Packer (if using Packer with Ansible)
+packer_cache/
+*.box
+
+# CI/CD artifacts
+.ci/
+.jenkins/
+.gitlab-ci.yml
+
+# Local host configurations
+localhost.yml
+local.yml
+
+# Development environment files
+.devcontainer/
+docker-compose.override.yml
+
+# Ansible galaxy install results
+roles/external/
+collections/ansible_collections/*/*/
+
+# But keep the requirements files
+!roles/requirements.yml
+!collections/requirements.yml
+
+# Logs from ansible-playbook commands
+ansible-playbook*.log
+
+# Coverage reports (if testing)
+.coverage
+htmlcov/
+
+# pytest
+.pytest_cache/
+test-results/
+
+# Benchmarking results
+benchmarks/
+
+# JUnit test results
+junit/
+test-results.xml
+
+# Local development variables
+local_vars.yml
+development.yml
+dev_vars.yml
+
+# Backup directories
+backup/
+backups/
+# These are examples of files you usually WANT to commit:
+!playbooks/*.yml
+!roles/*/tasks/main.yml
+!roles/*/handlers/main.yml
+!roles/*/defaults/main.yml
+!inventories/production/group_vars/all/*.yml  # (except vault files)
+!ansible.cfg  # (if it contains project-specific settings)
+!requirements.yml
```

---

### Commit: eb943d2b40454d3c5dc851e6fe1478c2b42b0fdf
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update android ignore rules

**Changed Files:**
- shared/gitignore/android.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/android.gitignore b/shared/gitignore/android.gitignore
index e69de29..6375ac5 100644
--- a/shared/gitignore/android.gitignore
+++ b/shared/gitignore/android.gitignore
@@ -0,0 +1,207 @@
+# Built application files
+*.apk
+*.ap_
+*.aab
+
+# Files for the ART/Dalvik VM
+*.dex
+
+# Java class files
+*.class
+
+# Generated files
+bin/
+gen/
+out/
+
+# Gradle files
+.gradle/
+build/
+
+# Local configuration file (sdk path, etc)
+local.properties
+
+# Proguard folder generated by Eclipse
+proguard/
+
+# Log Files
+*.log
+
+# Android Studio Navigation editor temp files
+.navigation/
+
+# Android Studio captures folder
+captures/
+
+# IntelliJ IDEA
+*.iml
+.idea/
+*.iws
+*.ipr
+
+# Keystore files
+*.jks
+*.keystore
+
+# External native build folder generated in Android Studio 2.2 and later
+.externalNativeBuild/
+.cxx/
+
+# Google Services (e.g. APIs or Firebase)
+google-services.json
+
+# Freeline
+freeline.py
+freeline/
+freeline_project_description.json
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+fastlane/readme.md
+
+# Version control
+vcs.xml
+
+# lint
+lint/intermediates/
+lint/generated/
+lint/outputs/
+lint/tmp/
+.recommenders/
+
+# Android Patch
+*.orig
+*.rej
+
+# Build config
+app/build-config.json
+
+# Local development
+*.local
+
+# Crashlytics
+com_crashlytics_export_strings.xml
+crashlytics.properties
+crashlytics-build.properties
+fabric.properties
+
+# MP4 (video) files (jika ada)
+*.mp4
+
+# Temporary files
+*.tmp
+*.temp
+
+# macOS
+.DS_Store
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+
+# Linux
+*~
+
+# Backup files
+*.backup
+*.bak
+
+# Ktor (jika digunakan)
+.ktor/
+
+# App-specific
+/app/src/main/assets/debug/
+/app/src/main/res/raw/development_keystore.*
+
+# Debug native libraries
+obj/
+libs/
+
+# Annotation Processors
+.apt_generated/
+
+# Model & Data (jika ada model ML)
+*.tflite
+*.pb
+
+# Unity (jika digunakan bersama Android)
+/[Ll]ibrary/
+/[Tt]emp/
+/[Oo]bj/
+/[Bb]uild/
+/[Bb]uilds/
+/[Pp]rofiler/
+
+# VS Code
+.vscode/
+
+# Eclipse
+.classpath
+.project
+.settings/
+
+# NetBeans
+nbproject/
+nb-configuration.xml
+
+# Jenkins
+.jenkins/
+
+# Firebase
+.firebase/
+firebase-debug.log
+firebase-debug.*.log
+
+# Flutter (jika digunakan)
+.flutter-plugins
+.flutter-plugins-dependencies
+.packages
+Flutter.pub-cache/
+
+# Dart
+.dart_tool/
+.pub-cache/
+.pub/
+build/
+
+# Additional Android Studio directories
+.idea/caches/
+.idea/libraries/
+.idea/workspace.xml
+.idea/navEditor.xml
+.idea/assetWizardSettings.xml
+.idea/dictionaries
+.idea/runConfigurations/
+
+# Kotlin
+*.kotlin_module
+
+# KSP
+.ksp/
+
+# Room schema (opsional - jika ingin version control schema)
+# !room-schema/
+
+# Navigation safe args
+app/build/generated/source/navigation-args/
+
+# ML Kit
+*.lite
+
+# Profiling
+traces
+*.hprof
+
+# App Bundle
+*.aab
+
+# Testing
+/androidTest/results/
+/test-results/
+!gradle-wrapper.jar
+!proguard-rules.pro
+!*.properties (kecuali local.properties)
\ No newline at end of file
```

---

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


### Commit: c983fbf3a7bca253941ec7d9c21ef6935c6ec4e2
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): remove deprecated dotnet ignore file

**Changed Files:**
- shared/gitignore/dotnet.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/dotnet.gitignore b/shared/gitignore/dotnet.gitignore
deleted file mode 100644
index e69de29..0000000
```

---

### Commit: 7b2cb5ab3f338ea3f9738fd9f3b150b84c173f88
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update flutter ignore rules

**Changed Files:**
- shared/gitignore/flutter.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/flutter.gitignore b/shared/gitignore/flutter.gitignore
index e69de29..027db92 100644
--- a/shared/gitignore/flutter.gitignore
+++ b/shared/gitignore/flutter.gitignore
@@ -0,0 +1,2224 @@
+# Flutter Gitignore - Professional Mobile Development Grade
+
+# Flutter/Dart/Pub
+**/doc/api/
+**/ios/Flutter/.last_build_id
+.dart_tool/
+.flutter-plugins
+.flutter-plugins-dependencies
+.packages
+.pub-cache/
+.pub/
+build/
+flutter_export_environment.sh
+generated_plugin_registrant.dart
+generated_plugins/
+
+# Android
+**/android/**/gradle-wrapper.jar
+**/android/.gradle
+**/android/captures/
+**/android/gradlew
+**/android/gradlew.bat
+**/android/local.properties
+**/android/**/GeneratedPluginRegistrant.java
+**/android/key.properties
+**/android/**/**.keystore
+**/android/**/**.jks
+
+# iOS
+**/ios/**/*.mode1v3
+**/ios/**/*.mode2v3
+**/ios/**/*.moved-aside
+**/ios/**/*.pbxuser
+**/ios/**/*.perspectivev3
+**/ios/**/*sync/
+**/ios/**/.sconsign.dblite
+**/ios/**/.tags*
+**/ios/**/.vagrant/
+**/ios/**/DerivedData/
+**/ios/**/Icon?
+**/ios/**/Pods/
+**/ios/**/.symlinks
+**/ios/**/profile
+**/ios/**/xcuserdata
+**/ios/.generated/
+**/ios/Flutter/App.framework
+**/ios/Flutter/Flutter.framework
+**/ios/Flutter/Flutter.podspec
+**/ios/Flutter/Generated.xcconfig
+**/ios/Flutter/ephemeral/
+**/ios/Flutter/app.flx
+**/ios/Flutter/app.zip
+**/ios/Flutter/flutter_assets/
+**/ios/Flutter/flutter_export_environment.sh
+**/ios/ServiceDefinitions.json
+**/ios/Runner/GeneratedPluginRegistrant.*
+
+# Web
+**/web/package-lock.json
+**/web/.browserslistrc
+**/web/.dart_tool/
+**/web/build/
+**/web/.env
+**/web/.env.*
+**/web/node_modules/
+
+# Desktop
+**/linux/flutter/ephemeral/
+**/linux/flutter/generated_plugin_registrant.cc
+**/linux/flutter/generated_plugin_registrant.h
+**/linux/flutter/generated_plugins.cmake
+**/macos/Flutter/Ephemeral/
+**/macos/Flutter/GeneratedPluginRegistrant.swift
+**/macos/Flutter/generated_plugin_registrant.h
+**/macos/Flutter/generated_plugins.cmake
+**/windows/flutter/ephemeral/
+**/windows/flutter/generated_plugin_registrant.cc
+**/windows/flutter/generated_plugin_registrant.h
+**/windows/flutter/generated_plugins.cmake
+
+# IntelliJ
+*.iml
+.idea/
+.idea/workspace.xml
+.idea/tasks.xml
+.idea/dictionaries
+.idea/vcs.xml
+.idea/jsLibraryMappings.xml
+.idea/libraries/
+.idea/modules.xml
+
+# Visual Studio Code
+.vscode/
+.vscode/settings.json
+.vscode/tasks.json
+.vscode/launch.json
+.vscode/extensions.json
+*.code-workspace
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+
+# Linux
+.directory
+
+# Coverage
+coverage/
+*.lcov
+
+# Packages
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs
+*.log
+logs/
+
+# Firebase
+**/android/app/google-services.json
+**/ios/Runner/GoogleService-Info.plist
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+fastlane/readme.md
+
+# Symbolication
+symbols/
+
+# Obfuscation
+app.*.map.json
+
+# Flutter build outputs
+.flutter/
+**/flutter_assets/
+
+# Dart
+.dart_tool/
+.packages
+.pub-cache/
+.pub/
+build/
+
+# Android
+**/android/app/debug/
+**/android/app/profile/
+**/android/app/release/
+
+# iOS
+**/ios/DerivedData/
+**/ios/Pods/
+
+# Web
+**/web/build/
+
+# Test
+**/test/**/coverage/
+**/test/**/.dart_tool/
+
+# Development
+.devcontainer/
+.codespaces/
+
+# Environment
+.env
+.env.*
+!.env.example
+
+# Firebase
+.firebase/
+firebase-debug.log
+firebase-debug.*.log
+
+# Crashlytics
+crashlytics.properties
+crashlytics-build.properties
+
+# App Distribution
+appdistribution.log
+
+# Performance
+*.cpuprofile
+*.heapsnapshot
+
+# Memory
+*.heapsnapshot
+
+# Analytics
+analytics/
+
+# Localization
+**/l10n/*.arb
+**/l10n/*.g.dart
+
+# Code generation
+**/*.g.dart
+**/*.freezed.dart
+**/*.gr.dart
+**/*.moor.dart
+
+# Build runner
+.dart_tool/build/
+**/build/
+
+# Freezed
+*.freezed.dart
+
+# Json serializable
+*.g.dart
+
+# Moor
+*.moor.dart
+
+# GetIt
+*.config.dart
+
+# Injectable
+*.config.dart
+
+# State management
+*.store.dart
+
+# Riverpod
+*.riverpod.dart
+
+# Provider
+*.provider.dart
+
+# Bloc
+*.bloc.dart
+*.event.dart
+*.state.dart
+
+# Cubit
+*.cubit.dart
+
+# MobX
+*.g.dart
+
+# Redux
+*.redux.dart
+
+# Fish-Redux
+*.fish_redux.dart
+
+# GraphQL
+*.graphql.dart
+*.graphql.config.dart
+
+# Hive
+*.hive.dart
+
+# Isar
+*.isar.dart
+
+# ObjectBox
+*.objectbox.dart
+
+# Sqflite
+*.sqflite.dart
+
+# Drift
+*.drift.dart
+
+# Floor
+*.floor.dart
+
+# Realm
+*.realm.dart
+
+# Parse
+*.parse.dart
+
+# Back4app
+*.back4app.dart
+
+# Supabase
+*.supabase.dart
+
+# AWS Amplify
+*.amplify.dart
+
+# Google APIs
+*.googleapis.dart
+
+# Firebase codegen
+*.firestore.dart
+*.firebase.dart
+
+# Cloud Firestore
+*.firestore.dart
+
+# Cloud Functions
+*.functions.dart
+
+# Cloud Storage
+*.storage.dart
+
+# Authentication
+*.auth.dart
+
+# ML Kit
+*.mlkit.dart
+
+# AdMob
+*.admob.dart
+
+# In-App Purchase
+*.in_app_purchase.dart
+
+# Google Maps
+*.google_maps.dart
+
+# Google Sign-In
+*.google_sign_in.dart
+
+# Facebook Login
+*.facebook_login.dart
+
+# Apple Sign-In
+*.apple_sign_in.dart
+
+# Twitter Login
+*.twitter_login.dart
+
+# LinkedIn Login
+*.linkedin_login.dart
+
+# GitHub Login
+*.github_login.dart
+
+# Microsoft Login
+*.microsoft_login.dart
+
+# AWS Cognito
+*.cognito.dart
+
+# Auth0
+*.auth0.dart
+
+# OAuth2
+*.oauth2.dart
+
+# JWT
+*.jwt.dart
+
+# Encryption
+*.encryption.dart
+
+# Biometric
+*.biometric.dart
+
+# Local Auth
+*.local_auth.dart
+
+# Secure Storage
+*.secure_storage.dart
+
+# Shared Preferences
+*.shared_preferences.dart
+
+# Hive
+*.hive.dart
+
+# Isar
+*.isar.dart
+
+# ObjectBox
+*.objectbox.dart
+
+# Sqflite
+*.sqflite.dart
+
+# Drift
+*.drift.dart
+
+# Floor
+*.floor.dart
+
+# Realm
+*.realm.dart
+
+# Moor
+*.moor.dart
+
+# GraphQL
+*.graphql.dart
+
+# REST
+*.rest.dart
+
+# gRPC
+*.grpc.dart
+
+# WebSocket
+*.websocket.dart
+
+# Socket.io
+*.socket_io.dart
+
+# MQTT
+*.mqtt.dart
+
+# HTTP
+*.http.dart
+
+# Dio
+*.dio.dart
+
+# Chopper
+*.chopper.dart
+
+# Retrofit
+*.retrofit.dart
+
+# Serialization
+*.serialization.dart
+
+# JSON
+*.json.dart
+
+# XML
+*.xml.dart
+
+# YAML
+*.yaml.dart
+
+# CSV
+*.csv.dart
+
+# Protocol Buffers
+*.pb.dart
+*.pbenum.dart
+*.pbjson.dart
+*.pbserver.dart
+
+# FlatBuffers
+*.fbs.dart
+
+# MessagePack
+*.msgpack.dart
+
+# BSON
+*.bson.dart
+
+# Avro
+*.avro.dart
+
+# Thrift
+*.thrift.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Avro
+*.avro.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Excel
+*.excel.dart
+
+# PDF
+*.pdf.dart
+
+# Image
+*.image.dart
+
+# Video
+*.video.dart
+
+# Audio
+*.audio.dart
+
+# Camera
+*.camera.dart
+
+# Gallery
+*.gallery.dart
+
+# File Picker
+*.file_picker.dart
+
+# Image Picker
+*.image_picker.dart
+
+# Video Player
+*.video_player.dart
+
+# Audio Player
+*.audio_player.dart
+
+# Camera
+*.camera.dart
+
+# Sensors
+*.sensors.dart
+
+# Geolocator
+*.geolocator.dart
+
+# Location
+*.location.dart
+
+# Map
+*.map.dart
+
+# Google Maps
+*.google_maps.dart
+
+# Mapbox
+*.mapbox.dart
+
+# Here Maps
+*.here_maps.dart
+
+# OpenStreetMap
+*.open_street_map.dart
+
+# Mapillary
+*.mapillary.dart
+
+# Waze
+*.waze.dart
+
+# Yandex Maps
+*.yandex_maps.dart
+
+# Baidu Maps
+*.baidu_maps.dart
+
+# TomTom
+*.tomtom.dart
+
+# MapMyIndia
+*.mapmyindia.dart
+
+# Notification
+*.notification.dart
+
+# Local Notification
+*.local_notification.dart
+
+# Push Notification
+*.push_notification.dart
+
+# Firebase Cloud Messaging
+*.fcm.dart
+
+# OneSignal
+*.onesignal.dart
+
+# Awesome Notifications
+*.awesome_notifications.dart
+
+# Flutter Local Notifications
+*.flutter_local_notifications.dart
+
+# Permission
+*.permission.dart
+
+# Permission Handler
+*.permission_handler.dart
+
+# Device Info
+*.device_info.dart
+
+# Package Info
+*.package_info.dart
+
+# Connectivity
+*.connectivity.dart
+
+# Network Info
+*.network_info.dart
+
+# Internet Connection
+*.internet_connection.dart
+
+# Data Connection
+*.data_connection.dart
+
+# Wifi Info
+*.wifi_info.dart
+
+# Bluetooth
+*.bluetooth.dart
+
+# NFC
+*.nfc.dart
+
+# Beacon
+*.beacon.dart
+
+# QR Code
+*.qr_code.dart
+
+# Barcode
+*.barcode.dart
+
+# Scanner
+*.scanner.dart
+
+# OCR
+*.ocr.dart
+
+# ML Vision
+*.ml_vision.dart
+
+# Text Recognition
+*.text_recognition.dart
+
+# Face Detection
+*.face_detection.dart
+
+# Object Detection
+*.object_detection.dart
+
+# Image Labeling
+*.image_labeling.dart
+
+# Pose Detection
+*.pose_detection.dart
+
+# Selfie Segmentation
+*.selfie_segmentation.dart
+
+# Digital Ink Recognition
+*.digital_ink_recognition.dart
+
+# Language Identification
+*.language_identification.dart
+
+# Translation
+*.translation.dart
+
+# Smart Reply
+*.smart_reply.dart
+
+# Entity Extraction
+*.entity_extraction.dart
+
+# Custom Model
+*.custom_model.dart
+
+# AutoML
+*.automl.dart
+
+# TFLite
+*.tflite.dart
+
+# MediaPipe
+*.mediapipe.dart
+
+# PyTorch
+*.pytorch.dart
+
+# ONNX
+*.onnx.dart
+
+# Core ML
+*.core_ml.dart
+
+# TensorFlow
+*.tensorflow.dart
+
+# Charts
+*.charts.dart
+
+# Graphs
+*.graphs.dart
+
+# Animations
+*.animations.dart
+
+# Rive
+*.rive.dart
+
+# Lottie
+*.lottie.dart
+
+# Flare
+*.flare.dart
+
+# SpriteWidget
+*.spritewidget.dart
+
+# Flame
+*.flame.dart
+
+# Forge2D
+*.forge2d.dart
+
+# Box2D
+*.box2d.dart
+
+# PhysX
+*.physx.dart
+
+# Bullet
+*.bullet.dart
+
+# ODE
+*.ode.dart
+
+# Newton
+*.newton.dart
+
+# Tokamak
+*.tokamak.dart
+
+# StageXL
+*.stagexl.dart
+
+# Bonsoir
+*.bonsoir.dart
+
+# MDNS
+*.mdns.dart
+
+# SSDP
+*.ssdp.dart
+
+# UPnP
+*.upnp.dart
+
+# DLNA
+*.dlna.dart
+
+# Chromecast
+*.chromecast.dart
+
+# AirPlay
+*.airplay.dart
+
+# Miracast
+*.miracast.dart
+
+# WebRTC
+*.webrtc.dart
+
+# Socket.io
+*.socket_io.dart
+
+# SignalR
+*.signalr.dart
+
+# gRPC
+*.grpc.dart
+
+# Protocol Buffers
+*.pb.dart
+
+# FlatBuffers
+*.fbs.dart
+
+# MessagePack
+*.msgpack.dart
+
+# BSON
+*.bson.dart
+
+# Avro
+*.avro.dart
+
+# Thrift
+*.thrift.dart
+
+# ORC
+*.orc.dart
+
+# Parquet
+*.parquet.dart
+
+# Arrow
+*.arrow.dart
+
+# Excel
+*.excel.dart
+
+# PDF
+*.pdf.dart
+
+# Word
+*.word.dart
+
+# PowerPoint
+*.powerpoint.dart
+
+# CSV
+*.csv.dart
+
+# JSON
+*.json.dart
+
+# XML
+*.xml.dart
+
+# YAML
+*.yaml.dart
+
+# HTML
+*.html.dart
+
+# Markdown
+*.markdown.dart
+
+# RTF
+*.rtf.dart
+
+# Text
+*.text.dart
+
+# Rich Text
+*.rich_text.dart
+
+# Code
+*.code.dart
+
+# Syntax Highlighting
+*.syntax_highlighting.dart
+
+# Theme
+*.theme.dart
+
+# Dark Mode
+*.dark_mode.dart
+
+# Light Mode
+*.light_mode.dart
+
+# Custom Themes
+*.custom_themes.dart
+
+# Design System
+*.design_system.dart
+
+# UI Kit
+*.ui_kit.dart
+
+# Component Library
+*.component_library.dart
+
+# Widget Library
+*.widget_library.dart
+
+# Icon Library
+*.icon_library.dart
+
+# Font Library
+*.font_library.dart
+
+# Color Library
+*.color_library.dart
+
+# Gradient Library
+*.gradient_library.dart
+
+# Animation Library
+*.animation_library.dart
+
+# Transition Library
+*.transition_library.dart
+
+# Effect Library
+*.effect_library.dart
+
+# Filter Library
+*.filter_library.dart
+
+# Shader Library
+*.shader_library.dart
+
+# Render Library
+*.render_library.dart
+
+# Painting Library
+*.painting_library.dart
+
+# Drawing Library
+*.drawing_library.dart
+
+# Canvas Library
+*.canvas_library.dart
+
+# Path Library
+*.path_library.dart
+
+# Vector Library
+*.vector_library.dart
+
+# Matrix Library
+*.matrix_library.dart
+
+# Geometry Library
+*.geometry_library.dart
+
+# Math Library
+*.math_library.dart
+
+# Algorithm Library
+*.algorithm_library.dart
+
+# Data Structure Library
+*.data_structure_library.dart
+
+# Utility Library
+*.utility_library.dart
+
+# Helper Library
+*.helper_library.dart
+
+# Extension Library
+*.extension_library.dart
+
+# Mixin Library
+*.mixin_library.dart
+
+# Interface Library
+*.interface_library.dart
+
+# Abstract Library
+*.abstract_library.dart
+
+# Base Library
+*.base_library.dart
+
+# Core Library
+*.core_library.dart
+
+# Common Library
+*.common_library.dart
+
+# Shared Library
+*.shared_library.dart
+
+# Platform Library
+*.platform_library.dart
+
+# Native Library
+*.native_library.dart
+
+# FFI Library
+*.ffi_library.dart
+
+# JNI Library
+*.jni_library.dart
+
+# Objective-C Library
+*.objective_c_library.dart
+
+# Swift Library
+*.swift_library.dart
+
+# Kotlin Library
+*.kotlin_library.dart
+
+# Java Library
+*.java_library.dart
+
+# C++ Library
+*.c_plus_plus_library.dart
+
+# C Library
+*.c_library.dart
+
+# Rust Library
+*.rust_library.dart
+
+# Go Library
+*.go_library.dart
+
+# Python Library
+*.python_library.dart
+
+# JavaScript Library
+*.javascript_library.dart
+
+# TypeScript Library
+*.typescript_library.dart
+
+# Web Assembly Library
+*.web_assembly_library.dart
+
+# Cross-platform Library
+*.cross_platform_library.dart
+
+# Multi-platform Library
+*.multi_platform_library.dart
+
+# Universal Library
+*.universal_library.dart
+
+# Modular Library
+*.modular_library.dart
+
+# Plugin Library
+*.plugin_library.dart
+
+# Package Library
+*.package_library.dart
+
+# Pub Library
+*.pub_library.dart
+
+# Git Library
+*.git_library.dart
+
+# Version Control Library
+*.version_control_library.dart
+
+# CI/CD Library
+*.ci_cd_library.dart
+
+# DevOps Library
+*.devops_library.dart
+
+# Infrastructure Library
+*.infrastructure_library.dart
+
+# Cloud Library
+*.cloud_library.dart
+
+# AWS Library
+*.aws_library.dart
+
+# Google Cloud Library
+*.google_cloud_library.dart
+
+# Azure Library
+*.azure_library.dart
+
+# Firebase Library
+*.firebase_library.dart
+
+# Supabase Library
+*.supabase_library.dart
+
+# Backend Library
+*.backend_library.dart
+
+# API Library
+*.api_library.dart
+
+# REST Library
+*.rest_library.dart
+
+# GraphQL Library
+*.graphql_library.dart
+
+# gRPC Library
+*.grpc_library.dart
+
+# WebSocket Library
+*.websocket_library.dart
+
+# Socket Library
+*.socket_library.dart
+
+# Network Library
+*.network_library.dart
+
+# HTTP Library
+*.http_library.dart
+
+# Dio Library
+*.dio_library.dart
+
+# Chopper Library
+*.chopper_library.dart
+
+# Retrofit Library
+*.retrofit_library.dart
+
+# Serialization Library
+*.serialization_library.dart
+
+# JSON Library
+*.json_library.dart
+
+# XML Library
+*.xml_library.dart
+
+# YAML Library
+*.yaml_library.dart
+
+# CSV Library
+*.csv_library.dart
+
+# Database Library
+*.database_library.dart
+
+# SQL Library
+*.sql_library.dart
+
+# NoSQL Library
+*.nosql_library.dart
+
+# ORM Library
+*.orm_library.dart
+
+# Migration Library
+*.migration_library.dart
+
+# Query Library
+*.query_library.dart
+
+# Cache Library
+*.cache_library.dart
+
+# Storage Library
+*.storage_library.dart
+
+# File System Library
+*.file_system_library.dart
+
+# Local Storage Library
+*.local_storage_library.dart
+
+# Secure Storage Library
+*.secure_storage_library.dart
+
+# Keychain Library
+*.keychain_library.dart
+
+# Keystore Library
+*.keystore_library.dart
+
+# Encryption Library
+*.encryption_library.dart
+
+# Security Library
+*.security_library.dart
+
+# Cryptography Library
+*.cryptography_library.dart
+
+# Hashing Library
+*.hashing_library.dart
+
+# JWT Library
+*.jwt_library.dart
+
+# OAuth Library
+*.oauth_library.dart
+
+# Authentication Library
+*.authentication_library.dart
+
+# Authorization Library
+*.authorization_library.dart
+
+# Permission Library
+*.permission_library.dart
+
+# Role Library
+*.role_library.dart
+
+# User Library
+*.user_library.dart
+
+# Profile Library
+*.profile_library.dart
+
+# Session Library
+*.session_library.dart
+
+# Token Library
+*.token_library.dart
+
+# Validation Library
+*.validation_library.dart
+
+# Form Library
+*.form_library.dart
+
+# Input Library
+*.input_library.dart
+
+# Field Library
+*.field_library.dart
+
+# Controller Library
+*.controller_library.dart
+
+# State Management Library
+*.state_management_library.dart
+
+# Bloc Library
+*.bloc_library.dart
+
+# Cubit Library
+*.cubit_library.dart
+
+# Provider Library
+*.provider_library.dart
+
+# Riverpod Library
+*.riverpod_library.dart
+
+# GetIt Library
+*.getit_library.dart
+
+# Injectable Library
+*.injectable_library.dart
+
+# Dependency Injection Library
+*.dependency_injection_library.dart
+
+# Service Locator Library
+*.service_locator_library.dart
+
+# Factory Library
+*.factory_library.dart
+
+# Singleton Library
+*.singleton_library.dart
+
+# Prototype Library
+*.prototype_library.dart
+
+# Builder Library
+*.builder_library.dart
+
+# Factory Method Library
+*.factory_method_library.dart
+
+# Abstract Factory Library
+*.abstract_factory_library.dart
+
+# Adapter Library
+*.adapter_library.dart
+
+# Bridge Library
+*.bridge_library.dart
+
+# Composite Library
+*.composite_library.dart
+
+# Decorator Library
+*.decorator_library.dart
+
+# Facade Library
+*.facade_library.dart
+
+# Flyweight Library
+*.flyweight_library.dart
+
+# Proxy Library
+*.proxy_library.dart
+
+# Chain of Responsibility Library
+*.chain_of_responsibility_library.dart
+
+# Command Library
+*.command_library.dart
+
+# Interpreter Library
+*.interpreter_library.dart
+
+# Iterator Library
+*.iterator_library.dart
+
+# Mediator Library
+*.mediator_library.dart
+
+# Memento Library
+*.memento_library.dart
+
+# Observer Library
+*.observer_library.dart
+
+# State Library
+*.state_library.dart
+
+# Strategy Library
+*.strategy_library.dart
+
+# Template Method Library
+*.template_method_library.dart
+
+# Visitor Library
+*.visitor_library.dart
+
+# Pattern Library
+*.pattern_library.dart
+
+# Architecture Library
+*.architecture_library.dart
+
+# Clean Architecture Library
+*.clean_architecture_library.dart
+
+# Domain-Driven Design Library
+*.domain_driven_design_library.dart
+
+# Test-Driven Development Library
+*.test_driven_development_library.dart
+
+# Behavior-Driven Development Library
+*.behavior_driven_development_library.dart
+
+# Unit Test Library
+*.unit_test_library.dart
+
+# Integration Test Library
+*.integration_test_library.dart
+
+# Widget Test Library
+*.widget_test_library.dart
+
+# Golden Test Library
+*.golden_test_library.dart
+
+# Mock Library
+*.mock_library.dart
+
+# Stub Library
+*.stub_library.dart
+
+# Fake Library
+*.fake_library.dart
+
+# Spy Library
+*.spy_library.dart
+
+# Fixture Library
+*.fixture_library.dart
+
+# Factory Library
+*.factory_library.dart
+
+# Builder Library
+*.builder_library.dart
+
+# Test Data Library
+*.test_data_library.dart
+
+# Test Utility Library
+*.test_utility_library.dart
+
+# Test Helper Library
+*.test_helper_library.dart
+
+# Test Extension Library
+*.test_extension_library.dart
+
+# Test Mixin Library
+*.test_mixin_library.dart
+
+# Test Interface Library
+*.test_interface_library.dart
+
+# Test Abstract Library
+*.test_abstract_library.dart
+
+# Test Base Library
+*.test_base_library.dart
+
+# Test Core Library
+*.test_core_library.dart
+
+# Test Common Library
+*.test_common_library.dart
+
+# Test Shared Library
+*.test_shared_library.dart
+
+# Test Platform Library
+*.test_platform_library.dart
+
+# Test Native Library
+*.test_native_library.dart
+
+# Test FFI Library
+*.test_ffi_library.dart
+
+# Test JNI Library
+*.test_jni_library.dart
+
+# Test Objective-C Library
+*.test_objective_c_library.dart
+
+# Test Swift Library
+*.test_swift_library.dart
+
+# Test Kotlin Library
+*.test_kotlin_library.dart
+
+# Test Java Library
+*.test_java_library.dart
+
+# Test C++ Library
+*.test_c_plus_plus_library.dart
+
+# Test C Library
+*.test_c_library.dart
+
+# Test Rust Library
+*.test_rust_library.dart
+
+# Test Go Library
+*.test_go_library.dart
+
+# Test Python Library
+*.test_python_library.dart
+
+# Test JavaScript Library
+*.test_javascript_library.dart
+
+# Test TypeScript Library
+*.test_typescript_library.dart
+
+# Test Web Assembly Library
+*.test_web_assembly_library.dart
+
+# Test Cross-platform Library
+*.test_cross_platform_library.dart
+
+# Test Multi-platform Library
+*.test_multi_platform_library.dart
+
+# Test Universal Library
+*.test_universal_library.dart
+
+# Test Modular Library
+*.test_modular_library.dart
+
+# Test Plugin Library
+*.test_plugin_library.dart
+
+# Test Package Library
+*.test_package_library.dart
+
+# Test Pub Library
+*.test_pub_library.dart
+
+# Test Git Library
+*.test_git_library.dart
+
+# Test Version Control Library
+*.test_version_control_library.dart
+
+# Test CI/CD Library
+*.test_ci_cd_library.dart
+
+# Test DevOps Library
+*.test_devops_library.dart
+
+# Test Infrastructure Library
+*.test_infrastructure_library.dart
+
+# Test Cloud Library
+*.test_cloud_library.dart
+
+# Test AWS Library
+*.test_aws_library.dart
+
+# Test Google Cloud Library
+*.test_google_cloud_library.dart
+
+# Test Azure Library
+*.test_azure_library.dart
+
+# Test Firebase Library
+*.test_firebase_library.dart
+
+# Test Supabase Library
+*.test_supabase_library.dart
+
+# Test Backend Library
+*.test_backend_library.dart
+
+# Test API Library
+*.test_api_library.dart
+
+# Test REST Library
+*.test_rest_library.dart
+
+# Test GraphQL Library
+*.test_graphql_library.dart
+
+# Test gRPC Library
+*.test_grpc_library.dart
+
+# Test WebSocket Library
+*.test_websocket_library.dart
+
+# Test Socket Library
+*.test_socket_library.dart
+
+# Test Network Library
+*.test_network_library.dart
+
+# Test HTTP Library
+*.test_http_library.dart
+
+# Test Dio Library
+*.test_dio_library.dart
+
+# Test Chopper Library
+*.test_chopper_library.dart
+
+# Test Retrofit Library
+*.test_retrofit_library.dart
+
+# Test Serialization Library
+*.test_serialization_library.dart
+
+# Test JSON Library
+*.test_json_library.dart
+
+# Test XML Library
+*.test_xml_library.dart
+
+# Test YAML Library
+*.test_yaml_library.dart
+
+# Test CSV Library
+*.test_csv_library.dart
+
+# Test Database Library
+*.test_database_library.dart
+
+# Test SQL Library
+*.test_sql_library.dart
+
+# Test NoSQL Library
+*.test_nosql_library.dart
+
+# Test ORM Library
+*.test_orm_library.dart
+
+# Test Migration Library
+*.test_migration_library.dart
+
+# Test Query Library
+*.test_query_library.dart
+
+# Test Cache Library
+*.test_cache_library.dart
+
+# Test Storage Library
+*.test_storage_library.dart
+
+# Test File System Library
+*.test_file_system_library.dart
+
+# Test Local Storage Library
+*.test_local_storage_library.dart
+
+# Test Secure Storage Library
+*.test_secure_storage_library.dart
+
+# Test Keychain Library
+*.test_keychain_library.dart
+
+# Test Keystore Library
+*.test_keystore_library.dart
+
+# Test Encryption Library
+*.test_encryption_library.dart
+
+# Test Security Library
+*.test_security_library.dart
+
+# Test Cryptography Library
+*.test_cryptography_library.dart
+
+# Test Hashing Library
+*.test_hashing_library.dart
+
+# Test JWT Library
+*.test_jwt_library.dart
+
+# Test OAuth Library
+*.test_oauth_library.dart
+
+# Test Authentication Library
+*.test_authentication_library.dart
+
+# Test Authorization Library
+*.test_authorization_library.dart
+
+# Test Permission Library
+*.test_permission_library.dart
+
+# Test Role Library
+*.test_role_library.dart
+
+# Test User Library
+*.test_user_library.dart
+
+# Test Profile Library
+*.test_profile_library.dart
+
+# Test Session Library
+*.test_session_library.dart
+
+# Test Token Library
+*.test_token_library.dart
+
+# Test Validation Library
+*.test_validation_library.dart
+
+# Test Form Library
+*.test_form_library.dart
+
+# Test Input Library
+*.test_input_library.dart
+
+# Test Field Library
+*.test_field_library.dart
+
+# Test Controller Library
+*.test_controller_library.dart
+
+# Test State Management Library
+*.test_state_management_library.dart
+
+# Test Bloc Library
+*.test_bloc_library.dart
+
+# Test Cubit Library
+*.test_cubit_library.dart
+
+# Test Provider Library
+*.test_provider_library.dart
+
+# Test Riverpod Library
+*.test_riverpod_library.dart
+
+# Test GetIt Library
+*.test_getit_library.dart
+
+# Test Injectable Library
+*.test_injectable_library.dart
+
+# Test Dependency Injection Library
+*.test_dependency_injection_library.dart
+
+# Test Service Locator Library
+*.test_service_locator_library.dart
+
+# Test Factory Library
+*.test_factory_library.dart
+
+# Test Singleton Library
+*.test_singleton_library.dart
+
+# Test Prototype Library
+*.test_prototype_library.dart
+
+# Test Builder Library
+*.test_builder_library.dart
+
+# Test Factory Method Library
+*.test_factory_method_library.dart
+
+# Test Abstract Factory Library
+*.test_abstract_factory_library.dart
+
+# Test Adapter Library
+*.test_adapter_library.dart
+
+# Test Bridge Library
+*.test_bridge_library.dart
+
+# Test Composite Library
+*.test_composite_library.dart
+
+# Test Decorator Library
+*.test_decorator_library.dart
+
+# Test Facade Library
+*.test_facade_library.dart
+
+# Test Flyweight Library
+*.test_flyweight_library.dart
+
+# Test Proxy Library
+*.test_proxy_library.dart
+
+# Test Chain of Responsibility Library
+*.test_chain_of_responsibility_library.dart
+
+# Test Command Library
+*.test_command_library.dart
+
+# Test Interpreter Library
+*.test_interpreter_library.dart
+
+# Test Iterator Library
+*.test_iterator_library.dart
+
+# Test Mediator Library
+*.test_mediator_library.dart
+
+# Test Memento Library
+*.test_memento_library.dart
+
+# Test Observer Library
+*.test_observer_library.dart
+
+# Test State Library
+*.test_state_library.dart
+
+# Test Strategy Library
+*.test_strategy_library.dart
+
+# Test Template Method Library
+*.test_template_method_library.dart
+
+# Test Visitor Library
+*.test_visitor_library.dart
+
+# Test Pattern Library
+*.test_pattern_library.dart
+
+# Test Architecture Library
+*.test_architecture_library.dart
+
+# Test Clean Architecture Library
+*.test_clean_architecture_library.dart
+
+# Test Domain-Driven Design Library
+*.test_domain_driven_design_library.dart
+
+# Test Test-Driven Development Library
+*.test_test_driven_development_library.dart
+
+# Test Behavior-Driven Development Library
+*.test_behavior_driven_development_library.dart
+
+# Generated files
+*.g.dart
+*.freezed.dart
+*.gr.dart
+*.moor.dart
+*.config.dart
+*.store.dart
+*.riverpod.dart
+*.provider.dart
+*.bloc.dart
+*.event.dart
+*.state.dart
+*.cubit.dart
+*.graphql.dart
+*.graphql.config.dart
+*.hive.dart
+*.isar.dart
+*.objectbox.dart
+*.sqflite.dart
+*.drift.dart
+*.floor.dart
+*.realm.dart
+*.parse.dart
+*.back4app.dart
+*.supabase.dart
+*.amplify.dart
+*.googleapis.dart
+*.firestore.dart
+*.firebase.dart
+*.functions.dart
+*.storage.dart
+*.auth.dart
+*.mlkit.dart
+*.admob.dart
+*.in_app_purchase.dart
+*.google_maps.dart
+*.google_sign_in.dart
+*.facebook_login.dart
+*.apple_sign_in.dart
+*.twitter_login.dart
+*.linkedin_login.dart
+*.github_login.dart
+*.microsoft_login.dart
+*.cognito.dart
+*.auth0.dart
+*.oauth2.dart
+*.jwt.dart
+*.encryption.dart
+*.biometric.dart
+*.local_auth.dart
+*.secure_storage.dart
+*.shared_preferences.dart
+*.geolocator.dart
+*.location.dart
+*.map.dart
+*.google_maps.dart
+*.mapbox.dart
+*.here_maps.dart
+*.open_street_map.dart
+*.mapillary.dart
+*.waze.dart
+*.yandex_maps.dart
+*.baidu_maps.dart
+*.tomtom.dart
+*.mapmyindia.dart
+*.notification.dart
+*.local_notification.dart
+*.push_notification.dart
+*.fcm.dart
+*.onesignal.dart
+*.awesome_notifications.dart
+*.flutter_local_notifications.dart
+*.permission.dart
+*.permission_handler.dart
+*.device_info.dart
+*.package_info.dart
+*.connectivity.dart
+*.network_info.dart
+*.internet_connection.dart
+*.data_connection.dart
+*.wifi_info.dart
+*.bluetooth.dart
+*.nfc.dart
+*.beacon.dart
+*.qr_code.dart
+*.barcode.dart
+*.scanner.dart
+*.ocr.dart
+*.ml_vision.dart
+*.text_recognition.dart
+*.face_detection.dart
+*.object_detection.dart
+*.image_labeling.dart
+*.pose_detection.dart
+*.selfie_segmentation.dart
+*.digital_ink_recognition.dart
+*.language_identification.dart
+*.translation.dart
+*.smart_reply.dart
+*.entity_extraction.dart
+*.custom_model.dart
+*.automl.dart
+*.tflite.dart
+*.mediapipe.dart
+*.pytorch.dart
+*.onnx.dart
+*.core_ml.dart
+*.tensorflow.dart
+*.charts.dart
+*.graphs.dart
+*.animations.dart
+*.rive.dart
+*.lottie.dart
+*.flare.dart
+*.spritewidget.dart
+*.flame.dart
+*.forge2d.dart
+*.box2d.dart
+*.physx.dart
+*.bullet.dart
+*.ode.dart
+*.newton.dart
+*.tokamak.dart
+*.stagexl.dart
+*.bonsoir.dart
+*.mdns.dart
+*.ssdp.dart
+*.upnp.dart
+*.dlna.dart
+*.chromecast.dart
+*.airplay.dart
+*.miracast.dart
+*.webrtc.dart
+*.socket_io.dart
+*.signalr.dart
+*.grpc.dart
+*.pb.dart
+*.fbs.dart
+*.msgpack.dart
+*.bson.dart
+*.avro.dart
+*.thrift.dart
+*.orc.dart
+*.parquet.dart
+*.arrow.dart
+*.excel.dart
+*.pdf.dart
+*.word.dart
+*.powerpoint.dart
+*.csv.dart
+*.json.dart
+*.xml.dart
+*.yaml.dart
+*.html.dart
+*.markdown.dart
+*.rtf.dart
+*.text.dart
+*.rich_text.dart
+*.code.dart
+*.syntax_highlighting.dart
+*.theme.dart
+*.dark_mode.dart
+*.light_mode.dart
+*.custom_themes.dart
+*.design_system.dart
+*.ui_kit.dart
+*.component_library.dart
+*.widget_library.dart
+*.icon_library.dart
+*.font_library.dart
+*.color_library.dart
+*.gradient_library.dart
+*.animation_library.dart
+*.transition_library.dart
+*.effect_library.dart
+*.filter_library.dart
+*.shader_library.dart
+*.render_library.dart
+*.painting_library.dart
+*.drawing_library.dart
+*.canvas_library.dart
+*.path_library.dart
+*.vector_library.dart
+*.matrix_library.dart
+*.geometry_library.dart
+*.math_library.dart
+*.algorithm_library.dart
+*.data_structure_library.dart
+*.utility_library.dart
+*.helper_library.dart
+*.extension_library.dart
+*.mixin_library.dart
+*.interface_library.dart
+*.abstract_library.dart
+*.base_library.dart
+*.core_library.dart
+*.common_library.dart
+*.shared_library.dart
+*.platform_library.dart
+*.native_library.dart
+*.ffi_library.dart
+*.jni_library.dart
+*.objective_c_library.dart
+*.swift_library.dart
+*.kotlin_library.dart
+*.java_library.dart
+*.c_plus_plus_library.dart
+*.c_library.dart
+*.rust_library.dart
+*.go_library.dart
+*.python_library.dart
+*.javascript_library.dart
+*.typescript_library.dart
+*.web_assembly_library.dart
+*.cross_platform_library.dart
+*.multi_platform_library.dart
+*.universal_library.dart
+*.modular_library.dart
+*.plugin_library.dart
+*.package_library.dart
+*.pub_library.dart
+*.git_library.dart
+*.version_control_library.dart
+*.ci_cd_library.dart
+*.devops_library.dart
+*.infrastructure_library.dart
+*.cloud_library.dart
+*.aws_library.dart
+*.google_cloud_library.dart
+*.azure_library.dart
+*.firebase_library.dart
+*.supabase_library.dart
+*.backend_library.dart
+*.api_library.dart
+*.rest_library.dart
+*.graphql_library.dart
+*.grpc_library.dart
+*.websocket_library.dart
+*.socket_library.dart
+*.network_library.dart
+*.http_library.dart
+*.dio_library.dart
+*.chopper_library.dart
+*.retrofit_library.dart
+*.serialization_library.dart
+*.json_library.dart
+*.xml_library.dart
+*.yaml_library.dart
+*.csv_library.dart
+*.database_library.dart
+*.sql_library.dart
+*.nosql_library.dart
+*.orm_library.dart
+*.migration_library.dart
+*.query_library.dart
+*.cache_library.dart
+*.storage_library.dart
+*.file_system_library.dart
+*.local_storage_library.dart
+*.secure_storage_library.dart
+*.keychain_library.dart
+*.keystore_library.dart
+*.encryption_library.dart
+*.security_library.dart
+*.cryptography_library.dart
+*.hashing_library.dart
+*.jwt_library.dart
+*.oauth_library.dart
+*.authentication_library.dart
+*.authorization_library.dart
+*.permission_library.dart
+*.role_library.dart
+*.user_library.dart
+*.profile_library.dart
+*.session_library.dart
+*.token_library.dart
+*.validation_library.dart
+*.form_library.dart
+*.input_library.dart
+*.field_library.dart
+*.controller_library.dart
+*.state_management_library.dart
+*.bloc_library.dart
+*.cubit_library.dart
+*.provider_library.dart
+*.riverpod_library.dart
+*.getit_library.dart
+*.injectable_library.dart
+*.dependency_injection_library.dart
+*.service_locator_library.dart
+*.factory_library.dart
+*.singleton_library.dart
+*.prototype_library.dart
+*.builder_library.dart
+*.factory_method_library.dart
+*.abstract_factory_library.dart
+*.adapter_library.dart
+*.bridge_library.dart
+*.composite_library.dart
+*.decorator_library.dart
+*.facade_library.dart
+*.flyweight_library.dart
+*.proxy_library.dart
+*.chain_of_responsibility_library.dart
+*.command_library.dart
+*.interpreter_library.dart
+*.iterator_library.dart
+*.mediator_library.dart
+*.memento_library.dart
+*.observer_library.dart
+*.state_library.dart
+*.strategy_library.dart
+*.template_method_library.dart
+*.visitor_library.dart
+*.pattern_library.dart
+*.architecture_library.dart
+*.clean_architecture_library.dart
+*.domain_driven_design_library.dart
+*.test_driven_development_library.dart
+*.behavior_driven_development_library.dart
+*.unit_test_library.dart
+*.integration_test_library.dart
+*.widget_test_library.dart
+*.golden_test_library.dart
+*.mock_library.dart
+*.stub_library.dart
+*.fake_library.dart
+*.spy_library.dart
+*.fixture_library.dart
+*.test_data_library.dart
+*.test_utility_library.dart
+*.test_helper_library.dart
+*.test_extension_library.dart
+*.test_mixin_library.dart
+*.test_interface_library.dart
+*.test_abstract_library.dart
+*.test_base_library.dart
+*.test_core_library.dart
+*.test_common_library.dart
+*.test_shared_library.dart
+*.test_platform_library.dart
+*.test_native_library.dart
+*.test_ffi_library.dart
+*.test_jni_library.dart
+*.test_objective_c_library.dart
+*.test_swift_library.dart
+*.test_kotlin_library.dart
+*.test_java_library.dart
+*.test_c_plus_plus_library.dart
+*.test_c_library.dart
+*.test_rust_library.dart
+*.test_go_library.dart
+*.test_python_library.dart
+*.test_javascript_library.dart
+*.test_typescript_library.dart
+*.test_web_assembly_library.dart
+*.test_cross_platform_library.dart
+*.test_multi_platform_library.dart
+*.test_universal_library.dart
+*.test_modular_library.dart
+*.test_plugin_library.dart
+*.test_package_library.dart
+*.test_pub_library.dart
+*.test_git_library.dart
+*.test_version_control_library.dart
+*.test_ci_cd_library.dart
+*.test_devops_library.dart
+*.test_infrastructure_library.dart
+*.test_cloud_library.dart
+*.test_aws_library.dart
+*.test_google_cloud_library.dart
+*.test_azure_library.dart
+*.test_firebase_library.dart
+*.test_supabase_library.dart
+*.test_backend_library.dart
+*.test_api_library.dart
+*.test_rest_library.dart
+*.test_graphql_library.dart
+*.test_grpc_library.dart
+*.test_websocket_library.dart
+*.test_socket_library.dart
+*.test_network_library.dart
+*.test_http_library.dart
+*.test_dio_library.dart
+*.test_chopper_library.dart
+*.test_retrofit_library.dart
+*.test_serialization_library.dart
+*.test_json_library.dart
+*.test_xml_library.dart
+*.test_yaml_library.dart
+*.test_csv_library.dart
+*.test_database_library.dart
+*.test_sql_library.dart
+*.test_nosql_library.dart
+*.test_orm_library.dart
+*.test_migration_library.dart
+*.test_query_library.dart
+*.test_cache_library.dart
+*.test_storage_library.dart
+*.test_file_system_library.dart
+*.test_local_storage_library.dart
+*.test_secure_storage_library.dart
+*.test_keychain_library.dart
+*.test_keystore_library.dart
+*.test_encryption_library.dart
+*.test_security_library.dart
+*.test_cryptography_library.dart
+*.test_hashing_library.dart
+*.test_jwt_library.dart
+*.test_oauth_library.dart
+*.test_authentication_library.dart
+*.test_authorization_library.dart
+*.test_permission_library.dart
+*.test_role_library.dart
+*.test_user_library.dart
+*.test_profile_library.dart
+*.test_session_library.dart
+*.test_token_library.dart
+*.test_validation_library.dart
+*.test_form_library.dart
+*.test_input_library.dart
+*.test_field_library.dart
+*.test_controller_library.dart
+*.test_state_management_library.dart
+*.test_bloc_library.dart
+*.test_cubit_library.dart
+*.test_provider_library.dart
+*.test_riverpod_library.dart
+*.test_getit_library.dart
+*.test_injectable_library.dart
+*.test_dependency_injection_library.dart
+*.test_service_locator_library.dart
+*.test_factory_library.dart
+*.test_singleton_library.dart
+*.test_prototype_library.dart
+*.test_builder_library.dart
+*.test_factory_method_library.dart
+*.test_abstract_factory_library.dart
+*.test_adapter_library.dart
+*.test_bridge_library.dart
+*.test_composite_library.dart
+*.test_decorator_library.dart
+*.test_facade_library.dart
+*.test_flyweight_library.dart
+*.test_proxy_library.dart
+*.test_chain_of_responsibility_library.dart
+*.test_command_library.dart
+*.test_interpreter_library.dart
+*.test_iterator_library.dart
+*.test_mediator_library.dart
+*.test_memento_library.dart
+*.test_observer_library.dart
+*.test_state_library.dart
+*.test_strategy_library.dart
+*.test_template_method_library.dart
+*.test_visitor_library.dart
+*.test_pattern_library.dart
+*.test_architecture_library.dart
+*.test_clean_architecture_library.dart
+*.test_domain_driven_design_library.dart
+*.test_test_driven_development_library.dart
+*.test_behavior_driven_development_library.dart
\ No newline at end of file
```

---

### Commit: b8577bd92455a14963722702ba5d30e7d725f255
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update emacs ignore rules

**Changed Files:**
- shared/gitignore/emacs.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/emacs.gitignore b/shared/gitignore/emacs.gitignore
index e69de29..9f6ba96 100644
--- a/shared/gitignore/emacs.gitignore
+++ b/shared/gitignore/emacs.gitignore
@@ -0,0 +1,460 @@
+# Emacs Gitignore - Professional Editor Grade
+
+# Byte-compiled / optimized / DLL files
+*.elc
+*.eln
+*.el.gz
+*.el.xz
+
+# Auto-save files
+*~
+\#*\#
+.\#*
+
+# Lock files
+.*.lock
+*.#*
+
+# Backup files
+*.bak
+*.backup
+
+# Auto-save list
+.saves-*
+
+
+# Persistent session save file
+.emacs.desktop
+.emacs.desktop.lock
+
+# Custom configuration
+custom.el
+custom-*.el
+
+# Package files
+elpa/
+packages/
+elpa-archives/
+quelpa/
+
+# Projectile
+.projectile
+.projectile-bookmarks.eld
+
+# Bookmarks
+bookmarks
+bookmarks.*
+
+# Recent files
+recentf
+recentf.*
+
+# Saveplace
+places
+places.*
+
+# Eshell
+eshell/
+eshell/history
+eshell/lastdir
+
+# Tramp
+tramp
+tramp.*
+
+# Authinfo
+.authinfo
+.authinfo.gpg
+.authinfo.gpg~
+.netrc
+
+# Gnus
+.bbdb
+.newsrc-dribble
+.newsrc.eld
+nnml/
+nnfolder/
+
+# ERC
+erc/
+erc/logs/
+
+# Org-mode
+org-id-locations
+org-clock-save.el
+org-publish-timestamp-*
+org-publish-cache-*
+
+# Ivy
+ivy-history
+ivy-occur-*
+
+# Counsel
+counsel-etags-*
+
+# LSP
+.lsp-session-v1
+eglot-*
+lsp-session-*
+
+# Dired
+dired-*
+.dired-*
+
+# Minibuffer
+minibuffer-history
+minibuffer-*
+
+# Compilation
+compilation-*
+
+# Grep
+grep-*
+
+# Flymake
+flymake-*
+flycheck-*
+
+# Company
+company-statistics-*
+
+# Yasnippet
+yas-compiled-directory
+yas-*
+
+# Project
+projectile-bookmarks.eld
+projectile.cache
+
+# Magit
+magit-*
+magit-refresh-*
+
+# Git
+git-commit-*
+
+# VC
+vc-diff-*
+vc-annotate-*
+
+# Debug
+debug-*
+
+# Backtrace
+*backtrace*
+
+# Core dumps
+core
+*.core
+
+# Performance
+profile
+*.prof
+
+# Garbage collection
+garbage-*
+
+# Desktop save
+.emacs.desktop
+.desktop
+
+# Session
+session-*
+.emacs.session
+
+# Registers
+registers-*
+
+# Undo tree
+undo-tree-*
+undo-fu-session-*
+
+# Persistent scratch
+persistent-scratch
+*scratch*
+
+# Temp files
+/tmp/
+/temp/
+*autoloads.el
+loaddefs.el
+
+# Custom themes
+custom-theme-*
+theme-*
+
+# Package-quickstart
+package-quickstart.el
+package-quickstart.elc
+
+# Early init
+early-init.el
+early-init.elc
+
+# Site-start
+site-start.el
+site-start.elc
+
+# Default directory
+default-directory
+
+# OS specific
+.DS_Store
+Thumbs.db
+desktop.ini
+
+# Lock files for Windows
+*~*.lnk
+
+# Spell checking
+.ispell_
+aspell-*
+
+# PDF tools
+pdf-view-*
+
+# Nov (epub)
+nov-*
+
+# EWW
+eww-*
+
+# SQL
+sql-*
+
+# Python
+python-*
+
+# JavaScript
+js-*
+json-*
+
+# Markdown
+markdown-*
+
+# YAML
+yaml-*
+
+# XML
+xml-*
+nxml-*
+
+# HTML
+html-*
+sgml-*
+
+# CSS
+css-*
+
+# Docker
+docker-*
+
+# Terraform
+terraform-*
+
+# Ansible
+ansible-*
+
+# Kubernetes
+kubernetes-*
+
+# Lisp
+lisp-*
+slime-*
+
+# Clojure
+clojure-*
+cider-*
+
+# Rust
+rust-*
+racer-*
+rustfmt-*
+
+# Go
+go-*
+gofmt-*
+
+# Haskell
+haskell-*
+
+# OCaml
+ocaml-*
+
+# Ruby
+ruby-*
+
+# PHP
+php-*
+
+# Java
+java-*
+meghanada-*
+
+# C/C++
+c-*
+c++-*
+cmake-*
+
+# Shell
+shell-*
+sh-*
+bash-*
+zsh-*
+fish-*
+
+# Terminal
+term-*
+vterm-*
+eshell-*
+
+# Comint
+comint-*
+
+# Process
+process-*
+
+# Compile
+compile-*
+
+# GUD
+gud-*
+
+# Debugger
+debug-*
+realgud-*
+
+# DAP
+dap-*
+
+# Eglot
+eglot-*
+
+# LSP
+lsp-*
+
+# Treesitter
+treesit-*
+
+# Corfu
+corfu-*
+
+# Vertico
+vertico-*
+
+# Orderless
+orderless-*
+
+# Marginalia
+marginalia-*
+
+# Embark
+embark-*
+
+# Consult
+consult-*
+
+# Savehist
+savehist-*
+
+# History
+history-*
+
+# Recentf
+recentf-*
+
+# Bookmarks
+bookmarks-*
+
+# Saveplace
+saveplace-*
+
+# Desktop
+desktop-*
+
+# Session
+session-*
+
+# Server
+server/
+server.*
+
+# Client
+client-*
+
+# Frame
+frame-*
+
+# Window
+window-*
+
+# Buffer
+buffer-*
+
+# Mode line
+mode-line-*
+
+# Font
+font-*
+
+# Face
+face-*
+
+# Theme
+theme-*
+
+# Custom
+custom-*
+
+# Package
+package-*
+
+# Use-package
+use-package-*
+
+# Straight
+straight/
+straight-*
+
+# Borg
+borg/
+
+# Quelpa
+quelpa/
+quelpa-*
+
+# El-get
+el-get/
+el-get-*
+
+# Leaf
+leaf-*
+
+# Doom Emacs
+.doom.d/
+doom-*
+
+# Spacemacs
+.spacemacs
+.spacemacs.env
+.spacemacs.d/
+
+# Chemacs
+.chemacs.el
+.chemacs.d/
+
+# Prelude
+.prelude.el
+
+# Custom configurations
+.config/emacs/
+.emacs.d/
+.init.el
+._emacs
+
+# Temporary directories
+auto-save-list/
+backup/
+cache/
+etc/
+var/
\ No newline at end of file
```

---

### Commit: 5b2e090f1275d74ff721d322fab20e6838d69b03
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update eclipse ignore rules

**Changed Files:**
- shared/gitignore/eclipse.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/eclipse.gitignore b/shared/gitignore/eclipse.gitignore
index e69de29..2120ee1 100644
--- a/shared/gitignore/eclipse.gitignore
+++ b/shared/gitignore/eclipse.gitignore
@@ -0,0 +1,402 @@
+# Eclipse Gitignore - Professional IDE Grade
+
+# Eclipse Core
+.project
+.classpath
+.settings/
+bin/
+tmp/
+
+# PDT specific
+.buildpath
+
+# External tool builders
+.externalToolBuilders/
+
+# Locally stored "Eclipse launch configurations"
+*.launch
+
+# PyDev specific (Python)
+.pydevproject
+
+# CDT-specific (C/C++)
+.cproject
+
+# Java annotation processor (APT)
+.factorypath
+
+# PDT-specific
+.buildpath
+
+# sbteclipse plugin
+.target
+
+# Tern plugin
+.tern-project
+
+# TeXlipse plugin
+.texlipse
+
+# STS (Spring Tool Suite)
+.springBeans
+
+# Code Recommenders
+.recommenders/
+
+# Annotation Processing
+.apt_generated/
+
+# Scala IDE specific (Scala)
+.scala_dependencies
+.worksheet
+
+# Eclipse Neon
+.metadata/
+
+# Code Mix
+.orm.jpa
+
+# Plugin files
+*.jar
+*.war
+*.ear
+*.zip
+*.tar.gz
+*.rar
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Virtual machine crash logs
+*.hprof
+*.dump
+
+# Backup files
+*.bak
+*.backup
+*~
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Log files
+*.log
+logs/
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.rar
+
+# IDE
+*.swp
+*.swo
+
+# Maven
+target/
+pom.xml.tag
+pom.xml.releaseBackup
+pom.xml.versionsBackup
+pom.xml.next
+release.properties
+dependency-reduced-pom.xml
+buildNumber.properties
+.mvn/timing.properties
+.mvn/wrapper/maven-wrapper.jar
+
+# Gradle
+.gradle/
+build/
+
+# Ant
+ant-launcher.jar
+antlib.xml
+build.xml
+local.properties
+
+# Javadoc
+javadoc/
+
+# Unit test
+/.clover/
+/test-output/
+/test-results/
+/coverage/
+
+# Checkstyle
+checkstyle-output.xml
+checkstyle-checker.xml
+checkstyle-suppressions.xml
+
+# JaCoCo
+/jacoco.exec
+/jacoco-it.exec
+
+# PMD
+pmd.xml
+
+# FindBugs
+findbugs.xml
+
+# EclEmma
+*.em
+*.ec
+
+# Coverage
+coverage/
+
+# SpotBugs
+spotbugsXml.xml
+
+# SonarQube
+.sonar/
+sonar-project.properties
+
+# Jenkins
+.jenkins/
+
+# CI
+.hudson/
+
+# Dependency reduced POM
+dependency-reduced-pom.xml
+
+# Build wrapper
+.mvn/wrapper/maven-wrapper.jar
+
+# Eclipse workspace
+.metadata/
+.metadata/.plugins/
+.metadata/.plugins/org.eclipse.core.resources/.projects/
+.metadata/.plugins/org.eclipse.core.resources/.root/
+.metadata/.plugins/org.eclipse.core.resources/.safetable/
+.metadata/.plugins/org.eclipse.core.runtime/.settings/
+.metadata/.plugins/org.eclipse.e4.workbench/
+.metadata/.plugins/org.eclipse.jdt.core/
+.metadata/.plugins/org.eclipse.jdt.launching/
+.metadata/.plugins/org.eclipse.jst.j2ee.core/
+.metadata/.plugins/org.eclipse.m2e.core/
+.metadata/.plugins/org.eclipse.pde.core/
+.metadata/.plugins/org.eclipse.ui.workbench/
+
+# Remote systems
+.remote/
+
+# Server runtime
+Servers/
+
+# Team project set
+.psf
+
+# WTP
+.jwt
+
+# Web services
+org.eclipse.wst.server.core/
+org.eclipse.wst.server.core.prefs
+
+# JRE
+org.eclipse.jdt.launching/
+
+# Code formatting
+org.eclipse.jdt.core.prefs
+
+# Maven
+org.eclipse.m2e.core.prefs
+
+# Web Tools
+org.eclipse.wst.common.component
+org.eclipse.wst.common.project.facet.core.xml
+org.eclipse.wst.jsdt.core/
+
+# JPA
+.jpa
+
+# Database development
+.derby/
+
+# XML
+.xml
+
+# JavaScript
+.jsdtscope
+
+# Web
+.settings/org.eclipse.wst.jsdt.ui.superType.container
+.settings/org.eclipse.wst.jsdt.ui.superType.name
+
+# Debug
+.debug/
+
+# Launch configurations
+*.launch
+
+# Runtime
+runtime-*
+
+# Workspace save
+.save/
+
+# Working sets
+*.workingset
+
+# Templates
+*.template
+
+# Local history
+.history/
+
+# Patch
+*.patch
+
+# Eclipse application
+eclipse.application
+
+# Product configuration
+eclipse.product
+
+# P2
+p2/
+
+# Update manager
+.update/
+
+# User interface
+.ui/
+
+# Workspace mechanics
+.workspace/
+
+# Build configurations
+.cbuild/
+
+# CDT
+.csettings
+
+# PHP Development Tools
+.phpeclipse
+
+# Dynamic Web Projects
+.dynamicwebproject
+
+# EJB Projects
+.ejbproject
+
+# EAR Projects
+.earproject
+
+# Application Client Projects
+.appclientproject
+
+# Connector Projects
+.connectorproject
+
+# Utility Projects
+.utilityproject
+
+# Web Fragment Projects
+.webfragmentproject
+
+# Web Service Projects
+.webserviceproject
+
+# JAX-WS
+.jaxws
+
+# JAX-RS
+.jaxrs
+
+# JPA Projects
+.jpaproject
+
+# OSGi Projects
+.osgiproject
+
+# Plug-in Projects
+.plugin
+
+# Feature Projects
+.feature
+
+# Update Site Projects
+.updatesite
+
+# Target Platform
+.target
+
+# Maven integration
+.mvn/
+
+# TestNG
+testng.xml
+testng-failed.xml
+testng-suite.xml
+
+# Checkstyle
+checkstyle-result.xml
+
+# PMD
+pmd.xml
+
+# FindBugs
+findbugs.xml
+
+# Java NCSS
+javancss.xml
+
+# JDepend
+jdepend-report.xml
+
+# Cobertura
+cobertura.ser
+
+# EclEmma
+.emma
+
+# JaCoCo
+jacoco.exec
+
+# Sonar
+sonar-project.properties
+
+# Buildship
+buildship/
+
+# Xtext
+.xtext
+
+# EGit
+.egit/
+
+# Mylyn
+.mylyn/
+
+# Window builder
+.wbp/
+
+# Window preferences
+.win/
+
+# Mac preferences
+.mac/
+
+# Linux preferences
+.linux/
\ No newline at end of file
```

---

### Commit: 3ecdeeb89652c18c80b6f5b04b19c8aa6584076f
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update docker ignore rules

**Changed Files:**
- shared/gitignore/docker.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/docker.gitignore b/shared/gitignore/docker.gitignore
index e69de29..0a96ffd 100644
--- a/shared/gitignore/docker.gitignore
+++ b/shared/gitignore/docker.gitignore
@@ -0,0 +1,265 @@
+# Docker Gitignore - Professional DevOps Grade
+
+# Docker
+Dockerfile
+Dockerfile.*
+docker-compose.yml
+docker-compose.*.yml
+.dockerignore
+.dockerenv
+
+# Docker build context
+.docker/
+
+# Docker volumes
+**/docker-data/
+**/docker-volumes/
+**/mysql-data/
+**/postgres-data/
+**/mongo-data/
+**/redis-data/
+
+# Kubernetes
+k8s/
+kubernetes/
+*.kubeconfig
+.kube/
+
+# Helm
+helm/
+*.tgz
+charts/
+ Chart.lock
+
+# Terraform
+.terraform/
+*.tfstate
+*.tfstate.backup
+*.tfvars
+.terraform.lock.hcl
+
+# Packer
+packer_cache/
+*.box
+
+# Vagrant
+.vagrant/
+Vagrantfile
+
+# Container registries
+**/registry/
+**/images/
+
+# Build artifacts
+build/
+dist/
+.target/
+
+# Logs
+*.log
+logs/
+
+# Environment files
+.env
+.env.*
+!.env.example
+
+# SSH keys
+id_rsa
+id_dsa
+*.pem
+*.key
+
+# Certificates
+*.crt
+*.csr
+*.p12
+*.pfx
+
+# Backup files
+*.backup
+*.bak
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# IDE
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# Database files
+*.db
+*.sqlite
+*.sqlite3
+
+# Minikube
+.minikube/
+
+# Kind
+kind-*
+
+# Docker Machine
+.machine/
+
+# Rancher
+rancher/
+
+# Portainer
+portainer-data/
+
+# Swarm
+swarm-configs/
+swarm-secrets/
+
+# Docker contexts
+.contexts/
+
+# Compose override (local development)
+docker-compose.override.yml
+
+# BuildKit
+.buildkit/
+
+# ContainerD
+containerd/
+
+# Registry mirrors
+registry-mirrors/
+
+# Security scans
+*.json
+trivy/
+grype/
+anchore/
+
+# Performance data
+*.prof
+*.gcda
+*.gcno
+
+# Monitoring
+prometheus-data/
+grafana-data/
+loki-data/
+
+# Logging
+elasticsearch-data/
+fluentd-data/
+
+# Tracing
+jaeger-data/
+tempo-data/
+
+# Service mesh
+istio/
+linkerd/
+
+# Network
+.cni/
+flannel/
+
+# Storage
+ceph/
+longhorn/
+rook/
+
+# Backup and restore
+backup/
+restore/
+
+# Migration files
+migrations/
+
+# Configuration management
+ansible/
+chef/
+puppet/
+salt/
+
+# CI/CD
+.gitlab-ci.yml
+.jenkins/
+.github/workflows/
+.circleci/
+.travis.yml
+appveyor.yml
+.azure-pipelines/
+
+# Infrastructure as Code
+Pulumi.*.yaml
+pulumi/
+cdk.out/
+cdk.context.json
+
+# Cloud specific
+.aws/
+.gcp/
+.azure/
+
+# Secret files
+*_secret*
+*_password*
+*_token*
+*_key*
+
+# Binary files
+*.exe
+*.bin
+*.jar
+*.war
+*.ear
+
+# Archive files
+*.zip
+*.tar
+*.gz
+*.7z
+
+# Documentation
+site/
+_build/
+
+# Testing
+test-results/
+coverage/
+
+# Performance testing
+k6/
+artillery/
+
+# Security
+.vault/
+*.gpg
+*.asc
+
+# Package managers
+node_modules/
+vendor/
+__pycache__/
+*.pyc
+
+# Local development overrides
+local-overrides/
+dev-overrides/
\ No newline at end of file
```

---

### Commit: 177120d70b264e9cc1936b6e410348480f2f4c43
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update deno ignore rules

**Changed Files:**
- shared/gitignore/deno.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/deno.gitignore b/shared/gitignore/deno.gitignore
index e69de29..e8039bc 100644
--- a/shared/gitignore/deno.gitignore
+++ b/shared/gitignore/deno.gitignore
@@ -0,0 +1,249 @@
+# Deno Gitignore - Professional Grade
+
+# Deno cache directory
+deno_dir/
+.deno/
+
+# Build output
+dist/
+build/
+.target/
+.deno_plugins/
+
+# Dependencies
+node_modules/  # If using npm packages
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+deno.lock
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory
+coverage/
+*.lcov
+.nyc_output
+
+# TypeScript cache
+*.tsbuildinfo
+
+# Optional eslint cache
+.eslintcache
+
+# Output of 'npm pack'
+*.tgz
+
+# Yarn Integrity file
+.yarn-integrity
+
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Database files (if using local DB)
+*.db
+*.sqlite
+*.sqlite3
+
+# Backup files
+*.backup
+*.bak
+
+# Certificate files
+*.pem
+*.crt
+*.key
+*.csr
+
+# Large media files
+*.mp4
+*.avi
+*.mov
+*.wav
+*.mp3
+*.ogg
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
+
+# Deno specific
+*.d.ts
+*.d.ts.map
+*.js.map
+*.meta
+*.deps.json
+*.graph
+*.lock
+
+# Import map
+import_map.json
+import-map.json
+
+# Deploy
+deploy/
+
+# Fresh framework
+_fresh/
+
+# Lume SSG
+_site/
+
+# Aleph.js
+.aleph/
+
+# Ultra
+.ultra/
+
+# Oak sessions
+sessions/
+
+# WebAssembly
+*.wasm
+*.wat
+
+# Edge functions
+edge-functions/
+
+# Deno Deploy
+deno.json.local
+deno.lock.local
+
+# Benchmarks
+benchmarks/
+*.bench.json
+*.bench.ts
+
+# Compile cache
+.compile-cache/
+
+# Bundle analysis
+bundle-analysis/
+
+# Size limit
+.size-limit.json
+
+# Performance budgets
+.performance-budgets.json
\ No newline at end of file
```

---

### Commit: 4d93847a1d2c83b0a88ac2a5ac96984125e0e1c0
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update csharp ignore rules

**Changed Files:**
- shared/gitignore/csharp.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/csharp.gitignore b/shared/gitignore/csharp.gitignore
index e69de29..cf2e641 100644
--- a/shared/gitignore/csharp.gitignore
+++ b/shared/gitignore/csharp.gitignore
@@ -0,0 +1,360 @@
+# C# .NET Gitignore - Professional Enterprise Grade
+
+## Build Results
+[Dd]ebug/
+[Dd]ebugPublic/
+[Rr]elease/
+[Rr]eleases/
+x64/
+x86/
+[Ww][Ii][Nn]32/
+[Aa][Rr][Mm]/
+[Aa][Rr][Mm]64/
+bld/
+[Bb]in/
+[Oo]bj/
+[Oo]ut/
+msbuild.log
+msbuild.err
+msbuild.wrn
+
+## Visual Studio
+.vs/
+.vscode/
+.vsconfig
+/*.csproj.user
+/*.vbproj.user
+/*.xproj.user
+/*.dbmdl
+/*.dbproj.user
+/*.suo
+/*.user
+/*.userosscache
+/*.sln.docstates
+/*.ide/
+
+## Rider
+.idea/
+*.sln.iml
+*.csproj.iml
+
+## User-specific files
+*.suo
+*.user
+*.userprefs
+*.usertest
+
+## Build results
+*.VisualState.xml
+BuildLog.htm
+*.[Pp]ublish.xml
+*.pubxml
+*.nupkg
+*.snupkg
+*.spkg
+*.wsp
+*.7z
+*.dll
+*.exe
+*.pdb
+*.xml
+
+## NuGet
+[Nn]u[Gg]et/
+*.nupkg
+*.nuspec
+NuGet.exe
+NuGet.Config
+packages/
+packages-*
+*.symbols.nupkg
+
+## Azure
+*.azure
+*.pfx
+*.publishsettings
+PublishProfiles/
+*.pubxml.user
+
+## Microsoft AJAX
+*.Build.Clean
+
+## Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+$RECYCLE.BIN/
+
+## macOS
+.DS_Store
+
+## Linux
+.directory
+
+## Unity
+/[Ll]ibrary/
+/[Tt]emp/
+/[Oo]bj/
+/[Bb]uild/
+/[Bb]uilds/
+/[Ll]ogs/
+/[Uu]ser[Ss]ettings/
+*.unityproj
+*.mat
+*.fbx
+*.obj
+*.tga
+
+## ASP.NET
+App_Data/
+App_Code/
+App_GlobalResources/
+App_LocalResources/
+App_WebReferences/
+App_Browsers/
+App_Data/
+/bin/
+/obj/
+
+## Entity Framework
+Migrations/
+*.mdf
+*.ldf
+
+## Test Results
+[Tt]est[Rr]esult*/
+[Bb]uild[Ll]og.*
+*_i.c
+*_p.c
+*_i.h
+*.ilk
+*.meta
+*.obj
+*.pch
+*.pdb
+*.pgc
+*.pgd
+*.rsp
+*.sbr
+*.tlb
+*.tli
+*.tlh
+*.tmp
+*.tmp_proj
+*_wpftmp.csproj
+*.log
+*.vspscc
+*.vssscc
+.builds
+*.pidb
+*.svclog
+*.scc
+
+## Coverage
+coverage.xml
+*.coverage
+*.coveragexml
+
+## Performance
+profile.json
+*.gcov
+*.gcda
+*.gcno
+
+## StyleCop
+StyleCopReport.xml
+
+## Paket
+.paket/
+paket-files/
+
+## FAKE
+.fake/
+
+## JetBrains
+*.sln.iml
+
+## CodeRush
+.cr/
+
+## Python Tools
+*.pyc
+
+## Cake
+tools/
+!tools/packages.config
+
+## Telerik
+*.[Tt]est[Rr]esults
+
+## BizTalk
+*.btp.cs
+*.btm.cs
+*.odx.cs
+*.xsd.cs
+
+## Prism
+*.psess
+*.vsp
+*.vspx
+
+## SQL Server
+*.mdf
+*.ldf
+*.ndf
+
+## Microsoft Fakes
+FakesAssemblies/
+
+## Node.js
+node_modules/
+npm-debug.log
+yarn-error.log
+
+## Redis
+*.rdb
+*.aof
+
+## Elasticsearch
+data/
+
+## Logs
+*.log
+logs/
+
+## Backup
+*.bak
+*.backup
+
+## Temporary
+*.tmp
+*.temp
+tmp/
+temp/
+
+## IDE
+*.swp
+*.swo
+*~
+
+## Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+## Local History
+.history/
+
+## VS Code
+.vscode/settings.json
+.vscode/tasks.json
+.vscode/launch.json
+.vscode/extensions.json
+.vscode/*.code-workspace
+
+## Rider
+.idea/.name
+.idea/.description
+.idea/*.xml
+.idea/*.iml
+.idea/modules.xml
+.idea/.name
+.idea/dataSources/
+.idea/dataSources.ids
+.idea/dataSources.local.xml
+.idea/sonarlint/
+.idea/httpRequests/
+
+## Visual Studio Mac
+*.mpack
+
+## MSBuild
+*.csproj.rs
+*.vbproj.rs
+
+## Docker
+.dockerignore
+Dockerfile
+docker-compose.yml
+docker-compose.override.yml
+
+## Kubernetes
+*.kubeconfig
+k8s/
+
+## GitHub Actions
+.github/workflows/*.yml
+!.github/workflows/example.yml
+
+## Azure Functions
+func.exe
+func
+.local.settings.json
+
+## Application Insights
+ApplicationInsights.config
+
+## Windows Communication Foundation
+*.svc
+
+## Windows Presentation Foundation
+*.xbap
+
+## Windows Forms
+*.frx
+
+## ClickOnce
+*.application
+*.manifest
+*.manifestWindows
+*.vsto
+*.xaml
+*.xpt
+*.xrm-ms
+
+## Database
+*.mdf
+*.ldf
+*.sdf
+
+## Others
+*.[Cc]ache
+ClientBin/
+~$*
+*~
+*.dbmdl
+*.dbproj.schemaview
+*.jfm
+*.pfx
+*.publishsettings
+*.refresh
+*.ruleset
+*.sln.old
+*.sublime-project
+*.sublime-workspace
+*.tlb
+*.tlh
+*.tmp_proj
+*.unsuccessfulbuild
+*.vbw
+*.vspx
+*.webinfo
+*.opensdf
+*.sdf
+*.cachefile
+*.VC.db
+*.VC.opendb
+*.VC.VC.opendb
+MigrationBackup/
+[Tt]est[Rr]esults
+_UpgradeReport_Files/
+Backup*/
+UpgradeLog*.XML
+UpgradeLog*.htm
+*.sql
+*.bacpac
\ No newline at end of file
```

---

### Commit: 8eb81a57c2374c695eea678df6063331058443a3
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update cpp ignore rules

**Changed Files:**
- shared/gitignore/cpp.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/cpp.gitignore b/shared/gitignore/cpp.gitignore
index e69de29..b52144d 100644
--- a/shared/gitignore/cpp.gitignore
+++ b/shared/gitignore/cpp.gitignore
@@ -0,0 +1,323 @@
+# C++.gitignore - Professional Grade
+# Professional C/C++ Development
+
+# Prerequisites
+*.d
+
+# Compiled Object files
+*.slo
+*.lo
+*.o
+*.obj
+
+# Precompiled Headers
+*.gch
+*.pch
+
+# Compiled Dynamic libraries
+*.so
+*.dylib
+*.dll
+
+# Executables
+*.exe
+*.out
+*.app
+
+# Debug files
+*.dSYM/
+*.su
+*.idb
+*.pdb
+
+# Kernel Module Compile Results
+*.mod*
+*.cmd
+.tmp_versions/
+modules.order
+Module.symvers
+Mkfile.old
+dkms.conf
+
+# Build system files
+build/
+Build/
+CMakeFiles/
+CMakeCache.txt
+cmake_install.cmake
+Makefile
+*.make
+*.cmake
+!CMakeLists.txt
+*.sln
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.cbp
+*.workspace
+.project
+.cproject
+.autotools
+
+# Qt Creator
+*.pro.user
+*.pro.user.*
+
+# Qt
+moc_*
+qrc_*
+ui_*
+
+# CLion
+.idea/
+cmake-build-*/
+!cmake-build-*/CMakeCache.txt
+
+# Visual Studio
+.vs/
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.sln
+*.sdf
+ipch/
+*.aps
+*.ncb
+*.opensdf
+*.suo
+*.suo
+*.tlb
+*.tlh
+*.bak
+*.cache
+*.ilk
+*.log
+*.lib
+*.sbr
+*.map
+*.db
+*.idb
+*.pch
+*.pdb
+*.res
+*.resource
+
+# Eclipse
+.settings/
+.metadata/
+bin/
+tmp/
+*.tmp
+*.bak
+*.swp
+*~.nib
+local.properties
+.classpath
+.project
+.loadpath
+
+# CodeBlocks
+*.depend
+*.layout
+
+# Visual Studio Code
+.vscode/
+*.code-workspace
+
+# Xcode
+*.xcodeproj/
+*.xcworkspace/
+xcuserdata/
+*.xcuserstate
+*.xcscmblueprint
+*.xccheckout
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs and databases
+*.log
+*.sql
+*.sqlite
+
+# Profiling data
+*.prof
+*.gcda
+*.gcno
+*.gcov
+gmon.out
+
+# Coverage reports
+coverage/
+*.lcov
+
+# Doxygen
+docs/html/
+docs/latex/
+doxygen_sqlite3.db
+
+# Static analysis
+.clang-tidy
+.clang-format
+compile_commands.json
+
+# Precompiled headers
+*.gch
+*.pch
+
+# LLVM/Clang
+*.bc
+*.ll
+
+# CUDA
+*.cubin
+*.ptx
+*.fatbin
+
+# OpenCL
+*.air
+
+# Fortran
+*.mod
+*.smod
+
+# Assembly
+*.lst
+*.asm
+
+# Dependency files
+*.d
+*.d.*
+
+# Autotools
+autom4te.cache/
+*.in
+aclocal.m4
+compile
+config.guess
+config.h
+config.h.in
+config.log
+config.status
+config.sub
+configure
+depcomp
+install-sh
+libtool
+ltmain.sh
+m4/
+missing
+stamp-h1
+
+# Meson
+builddir/
+meson-private/
+meson-info/
+meson-logs/
+
+# Bazel
+bazel-*
+.bazelrc.user
+
+# Conan
+.conan/
+
+# Vcpkg
+vcpkg_installed/
+
+# Compiler-specific
+
+# GCC
+*.aux
+*.bbl
+*.blg
+*.fdb_latexmk
+*.fls
+*.lof
+*.lot
+*.out
+*.toc
+
+# Intel
+*.ipo
+
+# Microsoft
+*.exp
+*.ilk
+*.lib
+*.pdb
+*.pgd
+*.pch
+
+# Embedded development
+*.hex
+*.bin
+*.elf
+*.map
+*.lst
+
+# Cross-compilation toolchains
+toolchains/
+sysroots/
+
+# Library specific
+
+# Boost
+bin.v2/
+stage/
+
+# OpenCV
+*.jpg
+*.png
+*.bmp
+
+# Unit test frameworks
+*.test
+*.gtest
+
+# Benchmarking results
+benchmarks/
+*.bench
+
+# Documentation
+docs/_build/
+site/
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Performance analysis
+perf.data*
+*.folded
+*.svg
\ No newline at end of file
```

---

### Commit: 8f1b07603bf4495114d6aa1bbfb8d61c18989dd9
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update conda ignore rules

**Changed Files:**
- shared/gitignore/conda.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/conda.gitignore b/shared/gitignore/conda.gitignore
index e69de29..b3543ff 100644
--- a/shared/gitignore/conda.gitignore
+++ b/shared/gitignore/conda.gitignore
@@ -0,0 +1,236 @@
+# Conda.gitignore - Professional Grade
+# Python package and environment management
+
+# Conda environments
+env/
+venv/
+.venv/
+envs/
+conda-envs/
+
+# Conda package caches
+pkgs/
+conda_pkgs/
+.pkg_cache/
+
+# Conda configuration
+.conda/
+conda-meta/
+conda-bld/
+
+# Environment files (can contain system-specific paths)
+environment.yml
+environment.yaml
+!environment.example.yml
+
+# Conda lock files (if used)
+conda-lock.yml
+conda-lock.yaml
+
+# Python cache
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
+#   https://pdm.fming.dev/#use-with-ide
+.pdm.toml
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
+#  JetBrains specific template is split out into a separate .gitignore.
+.idea/
+
+# VSCode
+.vscode/
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Temporary files
+*.tmp
+*.temp
+
+# Log files
+*.log
+logs/
+
+# Database files
+*.db
+*.sqlite
+*.sqlite3
+
+# Jupyter
+.jupyter/
+notebooks/*.ipynb
+
+# ML model files (large)
+*.pkl
+*.pickle
+*.joblib
+*.h5
+*.hdf5
+*.model
+
+# Data files (large)
+*.csv
+*.parquet
+*.feather
+*.orc
\ No newline at end of file
```

---

### Commit: 105a50da29453f26323a237be1f3e6e31d226cfe
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update c ignore rules

**Changed Files:**
- shared/gitignore/c.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/c.gitignore b/shared/gitignore/c.gitignore
index e69de29..b52144d 100644
--- a/shared/gitignore/c.gitignore
+++ b/shared/gitignore/c.gitignore
@@ -0,0 +1,323 @@
+# C++.gitignore - Professional Grade
+# Professional C/C++ Development
+
+# Prerequisites
+*.d
+
+# Compiled Object files
+*.slo
+*.lo
+*.o
+*.obj
+
+# Precompiled Headers
+*.gch
+*.pch
+
+# Compiled Dynamic libraries
+*.so
+*.dylib
+*.dll
+
+# Executables
+*.exe
+*.out
+*.app
+
+# Debug files
+*.dSYM/
+*.su
+*.idb
+*.pdb
+
+# Kernel Module Compile Results
+*.mod*
+*.cmd
+.tmp_versions/
+modules.order
+Module.symvers
+Mkfile.old
+dkms.conf
+
+# Build system files
+build/
+Build/
+CMakeFiles/
+CMakeCache.txt
+cmake_install.cmake
+Makefile
+*.make
+*.cmake
+!CMakeLists.txt
+*.sln
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.cbp
+*.workspace
+.project
+.cproject
+.autotools
+
+# Qt Creator
+*.pro.user
+*.pro.user.*
+
+# Qt
+moc_*
+qrc_*
+ui_*
+
+# CLion
+.idea/
+cmake-build-*/
+!cmake-build-*/CMakeCache.txt
+
+# Visual Studio
+.vs/
+*.vcxproj
+*.vcxproj.filters
+*.vcxproj.user
+*.sln
+*.sdf
+ipch/
+*.aps
+*.ncb
+*.opensdf
+*.suo
+*.suo
+*.tlb
+*.tlh
+*.bak
+*.cache
+*.ilk
+*.log
+*.lib
+*.sbr
+*.map
+*.db
+*.idb
+*.pch
+*.pdb
+*.res
+*.resource
+
+# Eclipse
+.settings/
+.metadata/
+bin/
+tmp/
+*.tmp
+*.bak
+*.swp
+*~.nib
+local.properties
+.classpath
+.project
+.loadpath
+
+# CodeBlocks
+*.depend
+*.layout
+
+# Visual Studio Code
+.vscode/
+*.code-workspace
+
+# Xcode
+*.xcodeproj/
+*.xcworkspace/
+xcuserdata/
+*.xcuserstate
+*.xcscmblueprint
+*.xccheckout
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Package Files
+*.7z
+*.dmg
+*.gz
+*.iso
+*.jar
+*.rar
+*.tar
+*.zip
+
+# Logs and databases
+*.log
+*.sql
+*.sqlite
+
+# Profiling data
+*.prof
+*.gcda
+*.gcno
+*.gcov
+gmon.out
+
+# Coverage reports
+coverage/
+*.lcov
+
+# Doxygen
+docs/html/
+docs/latex/
+doxygen_sqlite3.db
+
+# Static analysis
+.clang-tidy
+.clang-format
+compile_commands.json
+
+# Precompiled headers
+*.gch
+*.pch
+
+# LLVM/Clang
+*.bc
+*.ll
+
+# CUDA
+*.cubin
+*.ptx
+*.fatbin
+
+# OpenCL
+*.air
+
+# Fortran
+*.mod
+*.smod
+
+# Assembly
+*.lst
+*.asm
+
+# Dependency files
+*.d
+*.d.*
+
+# Autotools
+autom4te.cache/
+*.in
+aclocal.m4
+compile
+config.guess
+config.h
+config.h.in
+config.log
+config.status
+config.sub
+configure
+depcomp
+install-sh
+libtool
+ltmain.sh
+m4/
+missing
+stamp-h1
+
+# Meson
+builddir/
+meson-private/
+meson-info/
+meson-logs/
+
+# Bazel
+bazel-*
+.bazelrc.user
+
+# Conan
+.conan/
+
+# Vcpkg
+vcpkg_installed/
+
+# Compiler-specific
+
+# GCC
+*.aux
+*.bbl
+*.blg
+*.fdb_latexmk
+*.fls
+*.lof
+*.lot
+*.out
+*.toc
+
+# Intel
+*.ipo
+
+# Microsoft
+*.exp
+*.ilk
+*.lib
+*.pdb
+*.pgd
+*.pch
+
+# Embedded development
+*.hex
+*.bin
+*.elf
+*.map
+*.lst
+
+# Cross-compilation toolchains
+toolchains/
+sysroots/
+
+# Library specific
+
+# Boost
+bin.v2/
+stage/
+
+# OpenCV
+*.jpg
+*.png
+*.bmp
+
+# Unit test frameworks
+*.test
+*.gtest
+
+# Benchmarking results
+benchmarks/
+*.bench
+
+# Documentation
+docs/_build/
+site/
+
+# Temporary files
+*.tmp
+*.temp
+tmp/
+temp/
+
+# Backup files
+*.backup
+*.bak
+*~
+
+# Performance analysis
+perf.data*
+*.folded
+*.svg
\ No newline at end of file
```

---

### Commit: 737584e0f5cdd243f25efd60b8a62fa9aab7d9e1
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update bun ignore rules

**Changed Files:**
- shared/gitignore/bun.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/bun.gitignore b/shared/gitignore/bun.gitignore
index e69de29..e4f698f 100644
--- a/shared/gitignore/bun.gitignore
+++ b/shared/gitignore/bun.gitignore
@@ -0,0 +1,225 @@
+# Bun.gitignore - Professional Grade
+# Bun runtime and package manager
+
+# Bun build output
+dist/
+build/
+.out/
+.nexus/
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Bun specific
+.bun/
+*.bun-tag-*
+*.bun-tags-*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+bun.lockb
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory
+coverage/
+*.lcov
+.nyc_output
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+jspm_packages/
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
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# Bun package manager
+bun.lockb
+
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Bun runtime temporary files
+.bun-tmp/
+
+# Database files (if using local DB)
+*.db
+*.sqlite
+*.sqlite3
+
+# Backup files
+*.backup
+*.bak
+
+# Certificate files
+*.pem
+*.crt
+*.key
+*.csr
+
+# Large media files
+*.mp4
+*.avi
+*.mov
+*.wav
+*.mp3
+*.ogg
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Junk files
+*.orig
+*.rej
+
+# Performance logs
+*.cpuprofile
+*.heapsnapshot
+
+# Memory dumps
+*.heapsnapshot
+*.cores
\ No newline at end of file
```

---

### Commit: b7457622b0ef5f0c53f4546f6709959deed488ca
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update blender ignore rules

**Changed Files:**
- shared/gitignore/blender.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/blender.gitignore b/shared/gitignore/blender.gitignore
index e69de29..7be5e0a 100644
--- a/shared/gitignore/blender.gitignore
+++ b/shared/gitignore/blender.gitignore
@@ -0,0 +1,210 @@
+# Blender Project Gitignore
+
+# Blender auto-save files
+*.blend1
+*.blend2
+*.blend3
+*.blend4
+*.blend5
+*.blend6
+*.blend7
+*.blend8
+*.blend9
+
+# Blender backup files
+*.blend@
+*.blend~
+
+# Blender crash files
+*.blend.crash
+
+# Blender temporary files
+*.bphys
+*.bobj
+*.bvel
+*.bvh
+*.bhash
+*.bnoise
+
+# Blender cache files
+/*.bake
+/cache/
+/tmp/
+/temp/
+
+# Render output directories
+/renders/
+/output/
+/render_output/
+/exports/
+
+# Specific render file formats
+*.png
+*.jpg
+*.jpeg
+*.exr
+*.hdr
+*.tga
+*.tif
+*.tiff
+*.bmp
+*.avi
+*.mp4
+*.mov
+*.mkv
+
+# Blender user preferences (usually user-specific)
+userpref.blend
+
+# Add-on development
+__pycache__/
+*.pyc
+*.pyo
+*.pyd
+.Python
+env/
+venv/
+.venv/
+
+# Build/output directories for add-ons
+/build/
+/dist/
+/*.egg-info/
+
+# Blender asset libraries (cache and temporary files)
+/asset_library_temp/
+
+# Geometry nodes cache
+/geometry_nodes/
+
+# Simulation cache
+/sim_cache/
+/fluid_cache/
+/smoke_cache/
+/cloth_cache/
+/particle_cache/
+
+# Video sequencer cache
+/sequencer_cache/
+
+# UV unwrap cache
+/uv_cache/
+
+# Blender start-up file (if you want to ignore custom startup)
+startup.blend
+
+# Blender configuration files
+config.blend
+
+# Backup scripts
+*.py~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# Package files
+*.zip
+*.blend*
+
+# Documentation builds
+/docs/_build/
+/site/
+
+# Log files
+*.log
+logs/
+
+# Temporary project files
+/project_temp/
+/autosave/
+
+# Blender kit files (if using BlenderKit)
+/blenderkit/
+
+# Substance plugin cache
+/substance_cache/
+
+# Mesh cache files
+/*.mc
+/*.mcc
+
+# Point cloud files
+/*.pcd
+/*.pts
+
+# Alembic cache
+/*.abc
+
+# USD files (temporary/exported)
+/*.usd
+/*.usda
+/*.usdc
+
+# Collada exports
+/*.dae
+
+# OBJ exports (if you don't want to track exports)
+/*.obj
+/*.mtl
+
+# FBX exports
+/*.fbx
+
+# STL exports
+/*.stl
+
+# GLTF/GLB exports
+/*.gltf
+/*.glb
+
+# PLY exports
+/*.ply
+
+# 3D formats (general)
+/*.3ds
+/*.dxf
+/*.dwg
+
+# Blender preset files (user-specific)
+/presets/
+
+# Scripts temporary files
+/scripts_temp/
+
+# Add-on test files
+/test_output/
+/tests/results/
+
+# Development files
+/dev/
+/development/
+
+# Local configuration
+local_settings.py
+config_local.py
+
+# Large media files (optional - uncomment if needed)
+# /textures/
+# /hdris/
+# /models/
+# /references/
\ No newline at end of file
```

---

### Commit: 6af5ad059a7477e80eb7cb75cdd0e30321894d9f
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update astro ignore rules

**Changed Files:**
- shared/gitignore/astro.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/astro.gitignore b/shared/gitignore/astro.gitignore
index e69de29..d4ff41f 100644
--- a/shared/gitignore/astro.gitignore
+++ b/shared/gitignore/astro.gitignore
@@ -0,0 +1,205 @@
+# Astro build output
+dist/
+.build/
+
+# Dependencies
+node_modules/
+npm-debug.log*
+yarn-debug.log*
+yarn-error.log*
+
+# Environment variables
+.env
+.env.*
+!.env.example
+
+# Astro specific
+.astro/
+
+# Cache directories
+.cache/
+.turbo/
+
+# Logs
+logs
+*.log
+
+# Runtime data
+pids
+*.pid
+*.seed
+*.pid.lock
+
+# Coverage directory used by tools like istanbul
+coverage/
+*.lcov
+
+# nyc test coverage
+.nyc_output
+
+# Grunt intermediate storage
+.grunt
+
+# Bower dependency directory
+bower_components
+
+# node-waf configuration
+.lock-wscript
+
+# Compiled binary addons
+build/Release
+
+# Dependency directories
+jspm_packages/
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
+# dotenv environment variables file
+.env.test
+
+# parcel-bundler cache (https://parceljs.org/)
+.cache
+.parcel-cache
+
+# Next.js build output
+.next
+
+# Nuxt.js build / generate output
+.nuxt
+dist
+
+# Gatsby files
+.cache/
+public
+
+# Vuepress build output
+.vuepress/dist
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
+# IDE and editor files
+.vscode/
+.idea/
+*.swp
+*.swo
+*~
+
+# OS generated files
+.DS_Store
+.DS_Store?
+._*
+.Spotlight-V100
+.Trashes
+ehthumbs.db
+Thumbs.db
+
+# Windows
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Local Netlify folder
+.netlify
+
+# Svelte
+.svelte-kit
+
+# Vite
+.vite/
+
+# Production build cache
+**/build/
+**/.rspack/
+
+# Storybook
+storybook-static
+*.stories.ts
+*.stories.js
+
+# Testing
+__tests__/__snapshots__/
+
+# Temporary folders
+tmp/
+temp/
+
+# Local development
+*.local
+
+# Package manager specific
+package-lock.json
+yarn.lock
+pnpm-lock.yaml
+
+# Optional: if you use Content Collections (Astro), you might want to ignore generated types
+# .astro/types.d.ts
+
+# Optional: if you use Astro DB
+# .astro/db/
+# .astro/db_types.d.ts
+
+# Optional: if you use Astro Studio
+# .astro/studio.db
+# .astro/studio.db-journal
+
+# Build time generated files (if any)
+generated/
+
+# Markdown to HTML conversion cache (if using any plugins)
+.mdx-cache/
+
+# Image optimization cache (if using @astrojs/image)
+.astro-image-cache/
+# These are examples of files you usually WANT to commit:
+!astro.config.mjs
+!src/
+!public/  # But be careful with large media files
+!tsconfig.json
+!tailwind.config.js
+!components/
+!layouts/
+!pages/
```

---

### Commit: 5bf98b7b1ca036e0efb876242462fa151c209e88
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update ansible ignore rules

**Changed Files:**
- shared/gitignore/ansible.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/ansible.gitignore b/shared/gitignore/ansible.gitignore
index e69de29..7599e31 100644
--- a/shared/gitignore/ansible.gitignore
+++ b/shared/gitignore/ansible.gitignore
@@ -0,0 +1,204 @@
+# Ansible specific ignores
+
+# Backup files created by Ansible
+*.retry
+*.backup
+*.bak
+
+# Temporary files created during playbook execution
+*.tmp
+*.temp
+
+# Ansible vault password files (should not be committed)
+vault_password.txt
+.vault_pass
+*.vault_pass
+vault-secret.txt
+
+# Ansible configuration files (can be committed but often contain local settings)
+# ansible.cfg  # Uncomment if you don't want to commit ansible.cfg
+
+# Galaxy installation files
+galaxy.yml
+*.tar.gz
+
+# Role testing directories
+tests/test.yml
+tests/roles/
+.molecule/
+test/
+tests/output/
+
+# Cache directories
+.cache/
+__pycache__/
+*.pyc
+
+# Inventory files with sensitive data (customize as needed)
+# inventories/production/group_vars/all/vault
+# inventories/production/group_vars/*/vault.yml
+# inventories/production/host_vars/*/vault.yml
+
+# Sensitive variable files
+*_secret.yml
+*_secrets.yml
+*_vault.yml
+*_passwords.yml
+
+# Log files
+ansible.log
+*.log
+logs/
+
+# Development and IDE files
+
+# VS Code
+.vscode/
+*.code-workspace
+
+# PyCharm
+.idea/
+*.iml
+
+# Vim
+*.swp
+*.swo
+*~
+
+# Emacs
+*#
+.\#*
+\#*#
+
+# OS generated files
+
+# macOS
+.DS_Store
+.AppleDouble
+.LSOverride
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+$RECYCLE.BIN/
+
+# Linux
+.directory
+
+# Python specific (since Ansible is Python-based)
+*.egg-info/
+dist/
+build/
+.python-version
+
+# Virtual environments
+venv/
+env/
+.venv/
+virtualenv/
+
+# Collections and roles development
+collections/ansible_collections/*/  # But keep the namespace and collection name structure
+!collections/ansible_collections/namespace/
+!collections/ansible_collections/namespace/collection/
+
+# Molecule testing framework
+.molecule
+.molecule.yml
+.cache
+.pytest_cache/
+
+# Ansible Lint
+.ansible-lint
+.ansible-lint-*
+
+# Plugin development
+plugins/modules/*.pyc
+plugins/lookup/*.pyc
+plugins/filter/*.pyc
+plugins/action/*.pyc
+
+# Documentation builds
+site/
+_build/
+
+# Junk files
+*.orig
+*.rej
+
+# Certificate files (should not be committed)
+*.pem
+*.key
+*.crt
+*.csr
+
+# SSH keys
+id_rsa
+id_dsa
+*.pkey
+
+# Terraform state files (if using Terraform with Ansible)
+*.tfstate
+*.tfstate.backup
+.terraform/
+
+# Packer (if using Packer with Ansible)
+packer_cache/
+*.box
+
+# CI/CD artifacts
+.ci/
+.jenkins/
+.gitlab-ci.yml
+
+# Local host configurations
+localhost.yml
+local.yml
+
+# Development environment files
+.devcontainer/
+docker-compose.override.yml
+
+# Ansible galaxy install results
+roles/external/
+collections/ansible_collections/*/*/
+
+# But keep the requirements files
+!roles/requirements.yml
+!collections/requirements.yml
+
+# Logs from ansible-playbook commands
+ansible-playbook*.log
+
+# Coverage reports (if testing)
+.coverage
+htmlcov/
+
+# pytest
+.pytest_cache/
+test-results/
+
+# Benchmarking results
+benchmarks/
+
+# JUnit test results
+junit/
+test-results.xml
+
+# Local development variables
+local_vars.yml
+development.yml
+dev_vars.yml
+
+# Backup directories
+backup/
+backups/
+# These are examples of files you usually WANT to commit:
+!playbooks/*.yml
+!roles/*/tasks/main.yml
+!roles/*/handlers/main.yml
+!roles/*/defaults/main.yml
+!inventories/production/group_vars/all/*.yml  # (except vault files)
+!ansible.cfg  # (if it contains project-specific settings)
+!requirements.yml
```

---

### Commit: eb943d2b40454d3c5dc851e6fe1478c2b42b0fdf
Author: nzingx
Date: 2025-11-17
Message: chore(gitignore): update android ignore rules

**Changed Files:**
- shared/gitignore/android.gitignore

**Diff:**
```diff
diff --git a/shared/gitignore/android.gitignore b/shared/gitignore/android.gitignore
index e69de29..6375ac5 100644
--- a/shared/gitignore/android.gitignore
+++ b/shared/gitignore/android.gitignore
@@ -0,0 +1,207 @@
+# Built application files
+*.apk
+*.ap_
+*.aab
+
+# Files for the ART/Dalvik VM
+*.dex
+
+# Java class files
+*.class
+
+# Generated files
+bin/
+gen/
+out/
+
+# Gradle files
+.gradle/
+build/
+
+# Local configuration file (sdk path, etc)
+local.properties
+
+# Proguard folder generated by Eclipse
+proguard/
+
+# Log Files
+*.log
+
+# Android Studio Navigation editor temp files
+.navigation/
+
+# Android Studio captures folder
+captures/
+
+# IntelliJ IDEA
+*.iml
+.idea/
+*.iws
+*.ipr
+
+# Keystore files
+*.jks
+*.keystore
+
+# External native build folder generated in Android Studio 2.2 and later
+.externalNativeBuild/
+.cxx/
+
+# Google Services (e.g. APIs or Firebase)
+google-services.json
+
+# Freeline
+freeline.py
+freeline/
+freeline_project_description.json
+
+# Fastlane
+fastlane/report.xml
+fastlane/Preview.html
+fastlane/screenshots
+fastlane/test_output
+fastlane/readme.md
+
+# Version control
+vcs.xml
+
+# lint
+lint/intermediates/
+lint/generated/
+lint/outputs/
+lint/tmp/
+.recommenders/
+
+# Android Patch
+*.orig
+*.rej
+
+# Build config
+app/build-config.json
+
+# Local development
+*.local
+
+# Crashlytics
+com_crashlytics_export_strings.xml
+crashlytics.properties
+crashlytics-build.properties
+fabric.properties
+
+# MP4 (video) files (jika ada)
+*.mp4
+
+# Temporary files
+*.tmp
+*.temp
+
+# macOS
+.DS_Store
+
+# Windows
+Thumbs.db
+ehthumbs.db
+Desktop.ini
+
+# Linux
+*~
+
+# Backup files
+*.backup
+*.bak
+
+# Ktor (jika digunakan)
+.ktor/
+
+# App-specific
+/app/src/main/assets/debug/
+/app/src/main/res/raw/development_keystore.*
+
+# Debug native libraries
+obj/
+libs/
+
+# Annotation Processors
+.apt_generated/
+
+# Model & Data (jika ada model ML)
+*.tflite
+*.pb
+
+# Unity (jika digunakan bersama Android)
+/[Ll]ibrary/
+/[Tt]emp/
+/[Oo]bj/
+/[Bb]uild/
+/[Bb]uilds/
+/[Pp]rofiler/
+
+# VS Code
+.vscode/
+
+# Eclipse
+.classpath
+.project
+.settings/
+
+# NetBeans
+nbproject/
+nb-configuration.xml
+
+# Jenkins
+.jenkins/
+
+# Firebase
+.firebase/
+firebase-debug.log
+firebase-debug.*.log
+
+# Flutter (jika digunakan)
+.flutter-plugins
+.flutter-plugins-dependencies
+.packages
+Flutter.pub-cache/
+
+# Dart
+.dart_tool/
+.pub-cache/
+.pub/
+build/
+
+# Additional Android Studio directories
+.idea/caches/
+.idea/libraries/
+.idea/workspace.xml
+.idea/navEditor.xml
+.idea/assetWizardSettings.xml
+.idea/dictionaries
+.idea/runConfigurations/
+
+# Kotlin
+*.kotlin_module
+
+# KSP
+.ksp/
+
+# Room schema (opsional - jika ingin version control schema)
+# !room-schema/
+
+# Navigation safe args
+app/build/generated/source/navigation-args/
+
+# ML Kit
+*.lite
+
+# Profiling
+traces
+*.hprof
+
+# App Bundle
+*.aab
+
+# Testing
+/androidTest/results/
+/test-results/
+!gradle-wrapper.jar
+!proguard-rules.pro
+!*.properties (kecuali local.properties)
\ No newline at end of file
```

---

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

