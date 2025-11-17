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

