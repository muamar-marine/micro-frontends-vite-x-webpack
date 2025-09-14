# Micro Frontends

This is a bare-minimum prototype for a proof of concept demonstrating that we can use Module Federation to combine Vite and Webpack together into one application.

## How to run

1. Run `yarn install` in every package in this repo.
2. For **new_barge**, **shared**, and **shell**, run `yarn dev`.
3. For **old_barge**, run `yarn start`.
4. Visit [localhost](http://localhost:2000).

## Description

### shell

This package acts as a `gateway` for all packages.

### new_barge

This package acts as a new module or for migrating modules.

### old_barge

This package acts as an existing module that uses Webpack 5 and needs to be migrated to Vite.

## shared

This package contains shared functions and components.