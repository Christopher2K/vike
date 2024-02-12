// TODO/v1-release: remove this file

export { runPrerenderFromAPI as prerender } from '../prerender/runPrerender.js'

import { assertWarning } from '../../utils/assert.js'
import pc from '@brillout/picocolors'
assertWarning(
  false,
  `${pc.cyan("import { prerender } from 'vike/cli'")} is deprecated in favor of ${pc.cyan(
    "import { prerender } from 'vike/api'"
  )}`,
  { onlyOnce: true }
)
