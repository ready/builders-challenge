import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Menu, { MenuTabName } from './Menu'
import TopMenu from './TopMenu'
import styles from './MenuWrap.module.css'

interface MenuWrapProps {
  active: MenuTabName
}

/**
 * Wrapper for the menu
 * @prop `active` - the `MenuTabName` the user is presently navigated to
 */
const MenuWrap: React.FC<MenuWrapProps> = props => {
  const isMobile = useMediaQuery({ maxWidth: 730 })

  return (
    <div className={styles.container}>
      <TopMenu />
      <Menu active={props.active} isMobile={isMobile}>
        {props.children}
      </Menu>
    </div>
  )
}

export default MenuWrap
