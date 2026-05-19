# Avoid Cloudflare Build Errors from npm Lockfile Drift

## Scope

This rule applies to Nuxt projects developed on macOS and deployed on Linux (Cloudflare Pages).

## Problem Pattern

Cloudflare Pages runs `npm ci`, which is strict: `package.json` and `package-lock.json` must be fully in sync.

A frequent failure is:

- `Missing: @emnapi/core ... from lock file`
- `Missing: @emnapi/runtime ... from lock file`

## Why It Happens

This is usually a cross-platform lockfile drift issue, not an app-code issue.

Typical chain in Nuxt 4:

- `nuxt` -> `oxc-*` packages -> optional wasm/native runtime packages
- Optional and peer dependencies can be represented differently depending on npm version and platform
- Local dev (`npm install` on macOS) may still run fine
- Cloudflare (`npm ci` on Linux) can fail because lockfile metadata is stricter there

## Was WaveSurfer the Root Cause?

No, WaveSurfer itself is not the direct dependency causing the error.

What happened in practice:

- Installing a new package (for example `wavesurfer.js`) triggers lockfile regeneration
- During that regeneration, optional/peer dependency metadata from other packages can change
- The new lockfile can become incompatible with Cloudflare's `npm ci` strict checks

So WaveSurfer was the trigger event, not the failing package chain.

## Required Project Configuration

Use this `.npmrc` baseline:

```ini
include=optional
legacy-peer-deps=true
```

Why:

- `include=optional`: keeps optional platform packages represented in lockfile
- `legacy-peer-deps=true`: prevents strict peer auto-resolution mismatch that can break `npm ci` across environments

## Safe Workflow (macOS -> Cloudflare)

After adding/updating any npm package:

1. `npm install --ignore-scripts`
2. `npm run build`
3. `npm ci` (local verification of CI behavior)
4. Commit both `package.json` and `package-lock.json` together

If `npm ci` fails locally, do not deploy yet.

## Rebase/Merge Rule

After every `git pull --rebase` or conflict resolution involving lockfile:

1. `npm install --ignore-scripts`
2. `npm ci`
3. Re-commit `package-lock.json` if changed

## Troubleshooting Checklist

1. Confirm lockfile changed in the same commit as dependency changes
2. Run `npm ci` locally
3. Ensure `.npmrc` contains both required lines
4. Recreate lockfile with current settings:
   - `rm -rf node_modules package-lock.json`
   - `npm install --ignore-scripts`
   - `npm ci`

## Non-Negotiable Principle

In CI/CD environments, `npm ci` is source of truth. Local `npm run dev` success is not enough.

If local and CI disagree, fix lockfile determinism first, then deploy.
