import truthy, { areMatchingArrays } from './truthy'

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

describe('areMatchingArrays of', () => {
  test('small matching single-typed arrays', () => {
    expect(areMatchingArrays(['hello', 'goodbye', 'ciao'], ['hello', 'goodbye', 'ciao'])).toBe(true)
  })

  test('small matching multi-typed arrays', () => {
    expect(areMatchingArrays(['hello', 17, false], ['hello', false, 17])).toBe(true)
  })

  test('small same length unmatching single-typed arrays', () => {
    expect(areMatchingArrays(['hello', 'goodbye'], ['hello', 'ciao'])).toBe(false)
  })

  test('small same length unmatching multi-typed arrays', () => {
    expect(areMatchingArrays(['hello', false], ['hello', true])).toBe(false)
  })

  test('small different length single-typed arrays', () => {
    expect(areMatchingArrays(['hello', 'goodbye'], ['hello', 'goodbye', 'ciao'])).toBe(false)
  })

  test('small different length multi-typed arrays', () => {
    expect(areMatchingArrays(['hello', true], ['hello', 56.4, true])).toBe(false)
  })

  const arr01: number[] = [...Array(1001).keys()]
  const arr02: number[] = [...Array(1001).keys()]

  test('large matched single-typed arrays', () => {
    expect(areMatchingArrays(arr01, arr02)).toBe(true)
  })

  test('large unmatched single-typed arrays', () => {
    arr02[17] = 2
    expect(areMatchingArrays(arr01, arr02)).toBe(false)
  })

  test('large matched multi-typed arrays', () => {
    const arr03: Array<number | boolean> = [...Array(1001).keys()]
    const arr04: Array<number | boolean> = [...Array(1001).keys()]
    arr03[17] = true
    arr04[17] = true

    expect(areMatchingArrays(arr03, arr04)).toBe(true)
  })

  test('large unmatched multi-typed arrays', () => {
    const arr03: Array<number | boolean> = [...Array(1001).keys()]
    const arr04: Array<number | boolean> = [...Array(1001).keys()]
    arr03[17] = true
    arr04[17] = true
    arr03[18] = false

    expect(areMatchingArrays(arr03, arr04)).toBe(false)
  })
})
