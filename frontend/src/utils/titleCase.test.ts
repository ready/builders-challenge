import titleCase from './titleCase'

test('Title Case single word', () => {
  expect(titleCase('hello')).toBe('Hello')
})

test('Title case already title case', () => {
  expect(titleCase('Hello Ready')).toBe('Hello Ready')
})

test('Title case lower case', () => {
  expect(titleCase('i am going to the store')).toBe('I Am Going To The Store')
})

test('Title case empty string', () => {
  expect(titleCase('')).toBe('')
})

test('Title case padded whitespace', () => {
  expect(titleCase(' Hello Ready ')).toBe('Hello Ready')
})

test('Title case whitespace', () => {
  expect(titleCase('   ')).toBe('')
})

test('Title case numbers', () => {
  expect(titleCase('1234')).toBe('1234')
})

test('Title case caps lock', () => {
  expect(titleCase('HELLO READY')).toBe('Hello Ready')
})
