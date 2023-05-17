# SolidStart

This directory is a brief example of a [SolidStart](https://github.com/ryansolid/solid-start) site that can be deployed to Vercel with zero configuration.

## Deploy Your Own

Deploy your own SolidStart project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/solidstart&template=solidstart)

_Live Example: https://solid-start-template.vercel.app_

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```

## Building

This uses the [Vercel Adapter](https://github.com/solidjs/solid-start/tree/main/packages/start-vercel) for SolidStart.

```bash
yarn run build
```
