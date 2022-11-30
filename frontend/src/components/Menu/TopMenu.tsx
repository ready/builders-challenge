import React from 'react'

import HomeLogo from './HomeLogo'

import styles from './TopMenu.module.css'

/**
 * This is the menu perpetually at the top of each page
 */
const TopMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <HomeLogo />
    </div>
  )
}

export default TopMenu
