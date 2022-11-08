import ProjectPage from 'components/App/ProjectPages'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Error.module.css'

/**
 * Renders a generic 404 error component explaining to the subscriber that the
 * URL is invalid. Offers the subscriber a button back to the `/landing` route
 */
const PageNotFound: React.FC = () => {
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
      <Link to={ProjectPage.Root}>
        <button className={styles.message}>
          Back to Safety
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
