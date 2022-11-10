/**
 * Mocked `window` methods that:
 * - we use
 * - jsdom isn't already mocking
 */

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn()
})
