/**
 * A function to mock out the console log, warning, and error functions, so
 * that they don't clutter the jest watch mode interface. Usage: Call at the
 * start of each test file
 */
const silenceConsoleFunctions = (): void => {
  let consoleLogMock: jest.SpyInstance
  let consoleWarnMock: jest.SpyInstance
  let consoleErrorMock: jest.SpyInstance

  beforeAll(() => {
    consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => { })
    consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => { })
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  afterAll(() => {
    consoleLogMock.mockRestore()
    consoleWarnMock.mockRestore()
    consoleErrorMock.mockRestore()
  })
}

export default silenceConsoleFunctions
