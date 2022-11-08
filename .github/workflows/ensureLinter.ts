import { spawnSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'
import { exit } from 'process'

/**
 * Looks through a file to search for the specific format:
 * alt="<some alt text>" src="<the source>"[space]
 * If multiple alts with the same text are found, the first source is returned
 * If no alts are found, an empty string is returned
 * @param file - the string version of the file to search through
 * @param alt - the alt text to search for
 * @returns the source string for the matching alt, or undefined if not found
 */
const searchForAltSource = (file: string, alt: string): string | undefined => {
  const altSearchString = `<img alt="${alt}"`
  const altLocation = file.indexOf(altSearchString)
  if (altLocation === -1) return undefined

  // Once the alt location is found, we need to search for the next space
  const beginSpaceSearchIndex = altLocation + altSearchString.length + 1
  const nextSpaceLocation = file.indexOf(' ', beginSpaceSearchIndex)
  if (nextSpaceLocation === -1) return undefined

  // Verify the source is formatted as src="<source>"
  const srcPrefix = 'src="'
  const quotedSource = file.substring(beginSpaceSearchIndex, nextSpaceLocation)
  if (!quotedSource.startsWith(srcPrefix)) return undefined
  if (quotedSource.charAt(quotedSource.length - 1) !== '"') return undefined

  const beginSource = beginSpaceSearchIndex + srcPrefix.length
  const endSource = nextSpaceLocation - 1

  return file.substring(beginSource, endSource)
}

/**
 * Reads the linter badge from the readme to find the linter count
 * @param readme - the readme file in a string
 * @returns the number of linter errors, or undefined if unavailable
 */
const getOldLinterCount = (readme: string): number | undefined => {
  const linterBadge = searchForAltSource(readme, 'linter')
  if (linterBadge === undefined) return undefined

  const urlFields = linterBadge.split('?')
  if (urlFields.length < 2) return undefined

  const paramFields = urlFields[1].split('&')
  const message = paramFields.find(p => p.startsWith('message='))
  if (message === undefined) return undefined

  const messageFields = message.split('=')
  return parseInt(messageFields[1])
}

/**
 * Spawns a child process to run the linter
 * @returns a number representing how many linter errors there are
 */
const getNewLinterCount = (): number => {
  const process = spawnSync('npm', ['run', 'lint'])
  const output = process.stdout.toString()
  const lines = output.split('\n')
  const legitLines = lines.filter(l => l.trim() !== '' && !l.startsWith('>'))

  console.log('Here are the current linter errors:')
  console.log(legitLines.join('\n'))

  return legitLines.length
}

/**
 * Decides if there are more linter errors now than started with
 */
const main = (): void => {
  try {
    if (existsSync('README.md')) {
      const readme = readFileSync('README.md').toString()
      const oldLinterCount = getOldLinterCount(readme)
      if (oldLinterCount === undefined) return

      const newLinterCount = getNewLinterCount()
      if (newLinterCount > oldLinterCount) {
        console.error(`\nThere are more linter errors now (${oldLinterCount} -> ${newLinterCount})`)
        exit(1)
      }
    }
  } catch (e) {
    console.error(e)
  }
}
main()
