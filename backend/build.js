require('esbuild').build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  external: ['pg-native', 'better-sqlite3', 'mysql2', 'oracledb', 'sqlite3', 'tedious', 'mysql', 'pg-query-stream', 'assert', 'fs', 'os', 'https', 'http', 'stream', 'tty', 'zlib', 'timers', 'path', 'crypto', 'dns', 'module', 'process', 'http2', 'child_process'],
  outfile: 'build/index.js'
}).catch(() => process.exit(1))
