/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: [
    'node_modules',
    'frontend/src'
  ],
    /**
   * This option does 2 things to support css module imports
   * 1. Maps any *.css imports to an empty object exported in cssMock.ts. So anytime
   *     jest finds a css module import it will instead import that empty object
   *  2. Given a class name like `style.heading`, it adds `heading` to the class attribute
   *     in the test output.
   */
    moduleNameMapper: {
      '\\.module\\.css$': 'identity-obj-proxy',
      '\\.(css|svg)$': {}
    },
}
