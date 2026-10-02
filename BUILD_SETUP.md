# Build setup

This project is configured for TypeScript + Vite + React.

Required type packages are declared in `devDependencies`:
- `vite` provides `vite/client` typings.
- `@types/node` provides Node.js typings.

`tsconfig.app.json` includes `types: ["vite/client"]` and `tsconfig.node.json` includes `types: ["node"]`.

For a clean deployment, use Node 24.x and run `npm ci` before `npm run build`.

For the included Capacitor Android project, run `npx cap sync android` after the web build and before invoking Gradle.

Build command: `npm run build`
Publish directory: `dist`
