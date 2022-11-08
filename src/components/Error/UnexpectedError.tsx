import React from 'react'

import styles from './Error.module.css'

/**
 * An error page that's rendered by the RouteErrorBoundary. This error page signifies
 * that a Javascript error has been thrown, hence why it's an `UnexpectedError`
 * @param reset - a function to run to allow the user to recover from the error.
 * If no `reset` prop is passed, we just reload the page, which must be the web
 * app equivalent of `Have you tried turning your computer off and then on?`
 */
const UnexpectedError: React.FC<{ reset?: () => void }> = (props) => {
  const reset = (): void => window.location.reload()
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        An Unexpected Error Occured
      </p>
      <p className={styles.subTitle}>
        Sorry, we ran into an unexpected error. We're working hard to fix it.
      </p>
      <p className={styles.message}>
        Click the button below to refresh the page!
      </p>
      <button onClick={reset}>
        Refresh
      </button>
    </div>
  )
}

export default UnexpectedError
