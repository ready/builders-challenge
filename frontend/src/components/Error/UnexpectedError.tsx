import React from 'react'

import Explainer from 'components/Common/Explainer'

/**
 * An error page that's rendered by the RouteErrorBoundary. This error page signifies
 * that a Javascript error has been thrown, hence why it's an `UnexpectedError`
 * @prop `reset` - a function to run to allow the user to recover from the error.
 * If no `reset` prop is passed, we just reload the page, which must be the web
 * app equivalent of `Have you tried turning your computer off and then on?`
 */
const UnexpectedError: React.FC<{ reset?: () => void }> = (props) => {
  const refreshPage = (): void => window.location.reload()
  const reset = props.reset ?? refreshPage
  return (
    <Explainer
      title='an unexpected error occured'
      subtitle="We're working hard to fix it"
      button={{
        title: 'Refresh',
        handleOnClick: reset
      }}
    >
      Click the button below to refresh the page!
    </Explainer>
  )
}

export default UnexpectedError
