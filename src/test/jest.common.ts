/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path'

module.exports = {
  rootDir: path.join(__dirname, '../..'),
  moduleDirectories: [
    'node_modules',
    path.join(__dirname),
    path.join(__dirname, '..')
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
    '\\.(css|svg)$': require.resolve('./globalMocks/emptyObjectExport.ts'),
    'utils/getEnvVariables': require.resolve('./globalMocks/envVariablesMock.ts')
  },
  /**
   * This plugin allows us to select what project we want to run
   * will show up as an option in jest watch mode. Hit uppercase P
   * during watch mode to select projects
   */
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
