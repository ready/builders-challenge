import React from 'react'
import { Link } from 'react-router-dom'

import titleCase from 'utils/titleCase'
import ProjectPage from 'components/App/ProjectPages'

import styles from './Error.module.css'

/**
 * Renders a generic 404 error component explaining to the subscriber that the
 * URL is invalid. Offers the subscriber a button back to the `/landing` route
 */
const PageNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {titleCase('You look a little lost...')}
      </p>
      <p className={styles.subTitle}>
        {titleCase("It's best to stay safe on the internet")}
      </p>
      <p className={styles.message}>
        We're not sure how you got here, but let's help you find home.
      </p>
      <Link to={ProjectPage.Root}>
        <button className={styles.message}>
          Back to Safety
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
