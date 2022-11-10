import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteRestart from 'vite-plugin-restart'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'

/**
 * Reads the automated changelog updates file
 * Returns an empty array if the file is malformatted or doesn't exist
 * @returns an array of changelog updates for injecting into a global variable
 */
function readChangelogFile () {
  try {
    return JSON.parse(readFileSync('automatic_changelog.json').toString())
  } catch {
    return []
  }
}

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteRestart({
      restart: ['.viteSignal.txt']
    })
  ],
  loader: { '.js': 'jsx' },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    GIT_BRANCH: JSON.stringify(execSync('git rev-parse --abbrev-ref HEAD').toString().trimEnd()),
    UPDATES_CHANGELOG: readChangelogFile()
  },
  server: {
    port: 3000
  }
})
