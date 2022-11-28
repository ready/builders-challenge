import React from 'react'
import { Link } from 'react-router-dom'

import ProjectPage from 'components/App/ProjectPages'

import styles from './HomeLogo.module.css'

/**
 * Renders Ready Logo
 */
const HomeLogo: React.FC = () => {
  return (
    <Link to={ProjectPage.Root}>
      <img alt='Ready Logo' src='https://avatars.githubusercontent.com/u/63874247?s=200&v=4' className={styles.logo} />
    </Link>
  )
}

export default HomeLogo
