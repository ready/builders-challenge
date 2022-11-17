/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  ...require('./jest.common'),
  displayName: 'Utils',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/src/**/*.test.ts']
}
