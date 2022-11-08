import MenuWrap from 'components/Menu/MenuWrap'
import React from 'react'
import titleCase from 'utils/titleCase'

import styles from './LandingPage.module.css'

/**
 * renders the landing page, a welcoming page that introduces the repositiory
 * to the viewer
 */
const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {titleCase("Welcome the the builder's challenge!")}
      </p>
      <p className={styles.subTitle}>
        {titleCase('for prospective frontend engineers')}
      </p>
      <p className={styles.message}>
        This is a sample repo (and task) that allows us to gauge your mastery of the tools we use to build our frontend
        projects. Additionally, you'll notice that we have specific styles that our repos strictly enforce - you'll
        pick up on them quickly enough! They may seem silly for such small tasks like these, but trust us: it makes a
        HUGE difference at scale!
      </p>
    </div>
  )
}

/**
 * wraps the `LandingPage` in our menu, assigning it the `Home` tab
 */
const LandingPageWrapper: React.FC = () => {
  return <MenuWrap active='Home'><LandingPage /></MenuWrap>
}

export default LandingPageWrapper
