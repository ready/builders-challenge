/**
 * Function to convert a sentence to title case
 * @param sentence - string to convert to title case
 * @returns sentence after having been converted into title case
 */
const titleCase = (sentence: string): string => (
  sentence.toLowerCase().trim().split(' ').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
)

export default titleCase
