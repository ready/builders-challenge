import truthy from './truthy'

describe('truthy of', () => {
  test('undefined', () => {
    expect(truthy(undefined)).toBe(false)
  })

  test('null', () => {
    expect(truthy(null)).toBe(false)
  })

  test('0', () => {
    expect(truthy(0)).toBe(false)
  })

  test('NaN number', () => {
    expect(truthy(NaN)).toBe(false)
  })

  test('empty string', () => {
    expect(truthy('')).toBe(false)
  })

  test('false', () => {
    expect(truthy(false)).toBe(false)
  })

  test('true', () => {
    expect(truthy(true)).toBe(true)
  })

  test('{}', () => {
    expect(truthy({})).toBe(true)
  })

  test('[]', () => {
    expect(truthy([])).toBe(true)
  })

  test('42', () => {
    expect(truthy(42)).toBe(true)
  })

  test('Date', () => {
    expect(truthy(new Date())).toBe(true)
  })

  test('-42', () => {
    expect(truthy(-42)).toBe(true)
  })

  test('12n', () => {
    expect(truthy(12n)).toBe(true)
  })

  test('3.14', () => {
    expect(truthy(3.14)).toBe(true)
  })

  test('-3.14', () => {
    expect(truthy(-3.14)).toBe(true)
  })

  test('Infinity', () => {
    expect(truthy(Infinity)).toBe(true)
  })

  test('-Infinity', () => {
    expect(truthy(-Infinity)).toBe(true)
  })

  test('string undefined', () => {
    expect(truthy('undefined')).toBe(true)
  })

  test('string null', () => {
    expect(truthy('null')).toBe(true)
  })

  test('string 0', () => {
    expect(truthy('0')).toBe(true)
  })

  test('string NaN number', () => {
    expect(truthy('NaN')).toBe(true)
  })

  test('string empty string', () => {
    expect(truthy("''")).toBe(true)
  })

  test('string false', () => {
    expect(truthy('false')).toBe(true)
  })
})
