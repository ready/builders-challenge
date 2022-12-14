import React from 'react'
import { Menu as AntdMenu } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  DashboardOutlined,
  PlayCircleOutlined,
  SwapRightOutlined,
  EditOutlined
} from '@ant-design/icons'

import styles from './Menu.module.css'
import ProjectPage from 'components/App/ProjectPages'

/**
 * The various types of pages that are linked to the main navigation menu
 * subscribers use to navigate the portal:
 * - `Home` - name to be used when referencing the `/` route
 * - `Button` - name to be used when referencing the `/button` route
 * - `Samples` - name to be used to house the submenus `Page 01` and `Page 02`
 * - `Page 01` - name to be used when referencing the `/01` route
 * - `Page 02` - name to be used when referencing the `/02` route
 * - `none` - name to be used as default. Never actually intended to be given
 * as a valid menu option
 */
export type MenuTabName = 'Home' | 'Quiz' | 'Button' | 'Samples' | 'Page 01' | 'Page 02' | 'none'

interface MenuProps {
  active: MenuTabName
  isMobile: boolean
}

/**
 * Renders the menu allowing the user to efficiently navigate the site
 * @prop `active` - the `menuTabName` of the user's active tab
 * @prop `isMobile` - true iff the user is on mobile
 */
const Menu: React.FC<MenuProps> = props => {
  const topMenuRoutes = useTopMenuRoutes()
  const activeTab = props.active === 'none' ? [] : [props.active]

  return (
    <div className={styles.contain}>
      <AntdMenu
        className={styles.menu}
        defaultSelectedKeys={activeTab}
        defaultOpenKeys={activeTab}
        mode='inline'
        selectable={false}
      >
        {topMenuRoutes.map(tab => renderMenuTab(tab))}
        {!props.isMobile}
      </AntdMenu>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

interface MenuTab {
  name: MenuTabName
  onClick: () => void
  icon: JSX.Element
  subTabs?: MenuTab[]
}

/**
 * Given a `MenuTab`, turns it into a `JSX.Element`.
 * This needs to be a function instead of a React component because
 * the AntdMenu must have nothing between the menu and menu items
 * @param tab - the data about the tab be rendered
 * @param isFirst - true iff this is the first tab
 * @returns a `JSX.Element` containing the tab to be included in the menu
 */
const renderMenuTab = (tab: MenuTab, isFirst?: boolean): JSX.Element => {
  const first = isFirst ?? false
  if (tab.subTabs !== undefined && tab.subTabs.length > 0) {
    return (
      <AntdMenu.SubMenu
        key={tab.name}
        icon={tab.icon}
        className={styles.SubMenuItem}
        title={tab.name}
      >
        {tab.subTabs.map(subtab => renderMenuTab(subtab))}
      </AntdMenu.SubMenu>
    )
  } else {
    return (
      <AntdMenu.Item
        key={tab.name}
        className={styles.MenuItem}
        onClick={() => tab.onClick()}
        style={
          first ? { marginTop: 'auto' } : {}
        }
      >
        <div className={styles.menuItemContent}>
          <span>{tab.icon}</span>
          <span className={styles.routeName}> {tab.name} </span>
        </div>
      </AntdMenu.Item>
    )
  }
}

/**
 * Produces the top menu tabs shown in the menu
 * @returns The top menu tabs
 */
function useTopMenuRoutes (): MenuTab[] {
  const navigate = useNavigate()
  const items: MenuTab[] = [
    {
      name: 'Home',
      onClick: () => navigate(ProjectPage.Root),
      icon: <DashboardOutlined style={{ fontSize: 22 }} />
    }, {
      name: 'Quiz',
      onClick: () => navigate(ProjectPage.Quiz),
      icon: <EditOutlined style={{ fontSize: 22 }} />
    }, {
      name: 'Button',
      onClick: () => navigate(ProjectPage.Button),
      icon: <PlayCircleOutlined style={{ fontSize: 22 }} />
    }, {
      name: 'Samples',
      onClick: () => {},
      icon: <SwapRightOutlined style={{ fontSize: 22 }} />,
      subTabs: [
        {
          name: 'Page 01',
          onClick: () => navigate(ProjectPage.Sample01),
          icon: <SwapRightOutlined style={{ fontSize: 22 }} />
        }, {
          name: 'Page 02',
          onClick: () => navigate(ProjectPage.Sample02),
          icon: <SwapRightOutlined style={{ fontSize: 22 }} />
        }
      ]
    }
  ]

  return items
}

export default Menu
