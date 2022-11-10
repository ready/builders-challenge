export default function generateResolver (fn) {
  return async (obj, args, context) => {
    return await fn({
      obj,
      args,
      context
    })
  }
}
