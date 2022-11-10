/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  ...require('./src/test/jest.common'),
  clearMocks: true,
  testTimeout: 15000,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', 
    '!src/**/*.test.{ts,tsx}',
    '!src/test/**/*', 
    '!src/global.d.ts',
    '!src/**/*.types.ts',
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json-summary", "lcov"],
  coverageThreshold: {
    global: {
      statements: 48,
      branches: 67,
      functions: 42,
      lines: 48,
    }
  },
  projects: ['./src/test/jest.react.ts', './src/test/jest.utils.ts']
}
