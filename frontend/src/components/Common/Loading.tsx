import React from 'react'

import { Spin } from 'antd'

import styles from './Loading.module.css'

interface LoadingProps {
  message?: string
}

/**
 * Generic loading div with animated circle graphic
 * @prop `message` - an optional message to display under the animated icon
 * by default the message is "Loading..."
 */
const Loading: React.FC<LoadingProps> = props => (
  <div className={styles.contain}>
    <Spin size='large' />
    <i className={styles.text}>{props.message ?? 'Loading...'}</i>
  </div>
)

export default Loading
