import devtools from 'solid-devtools/vite'
import vercel from 'solid-start-vercel'
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    devtools({
      autoname: true,
      locator: {
        targetIDE: 'vscode',
        key: 'Ctrl',
        jsxLocation: true,
        componentLocation: true
      }
    }),
    {
      ...eslint(),
      apply: 'build'
    },
    solid({
      adapter: vercel({ edge: true }),
      inspect: true
    })
  ],
  build: {
    target: 'esnext'
  }
})
