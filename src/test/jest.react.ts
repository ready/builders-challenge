/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  ...require('./jest.common'),
  displayName: 'React',
  /**
   * setupFilesAfterEnv resolves from rootDir, which is the project root dir
   */
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './public/globals.js',
    './src/test/globalMocks/index.ts'
  ],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/**/*.test.tsx']
}
