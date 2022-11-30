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

export default truthy
