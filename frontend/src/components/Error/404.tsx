import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectPage from 'components/App/ProjectPages'
import Explainer from 'components/Common/Explainer'

/**
 * renders a heartfelt message to the user, explaining that they're lost.
 * Offer the user a button back to `Root`
 */
const PageNotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Explainer
      title='You look a little lost...'
      button={{
        title: 'Back to Safety',
        handleOnClick: () => navigate(ProjectPage.Root)
      }}
    >
      We're not sure how you got here, but let's help you find home.
    </Explainer>
  )
}

export default PageNotFound
