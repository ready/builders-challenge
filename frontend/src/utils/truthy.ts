/**
 * Verbose method to quell typescript's unrelenting bombardment of linter errors
 * @param obj the arg to verify is truthy
 * @returns true iff the argument is not falsy
 */
function truthy (obj: unknown): obj is Record<string | number | symbol, unknown> {
  if (obj === undefined) return false
  if (obj === null) return false
  if (obj === 0) return false
  if (typeof obj === 'number' && isNaN(obj)) return false
  if (obj === '') return false
  if (obj === false) return false

  return true
}

/**
 * Checks if two arrays are equivalent (the contents match regardless of order)
 * Only checks for shallow equivalence
 * @param array1 - The first array to compare the second array to
 * @param array2 - The second array to compare the first array to
 * @returns true iff the two arrays are equivalent
 */
export function areMatchingArrays (array1: unknown[], array2: unknown[]): boolean {
  if (array1.length !== array2.length) return false

  // For arrays of less than around 1000 elements, Array#indexOf is the fastest
  // Shown by the benchmark here: https://stackoverflow.com/questions/31091772/javascript-es6-computational-time-complexity-of-collections
  if (array1.length < 1000) {
    return array1.every(value => array2.indexOf(value) !== -1) // eslint-disable-line @typescript-eslint/prefer-includes
  }

  // For larger datasets, Set#has is faster
  const set = new Set(array2)
  return array1.every(value => set.has(value))
}

export default truthy
