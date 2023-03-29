import React from 'react'

import styles from './Card.module.css'

/**
 * Wraps something in a card
 * @prop `children` - the content to be wrapped
 */
const Card: React.FC = props => {
  return (
    <div className={styles.card}>
      {props.children}
    </div>
  )
}

export default Card
