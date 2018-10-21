#!/usr/bin/env bash

yarn
yarn prod:build --scope=@radic/build-tools
yarn prod:build --scope=@radic/build-tools-gulp
yarn prod:build --scope=@radic/build-tools-webpack
yarn prod:build --scope=@radic/build-tools-rollup
yarn prod:build --scope=@radic/demo-build-tools
