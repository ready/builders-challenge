import MenuWrap from 'components/Menu/MenuWrap'
import React, { useState } from 'react'

import styles from './Button.module.css'

/**
 * Renders THE button!
 * TODO: Have the button's count persist between page refreshes.
 */
const Button: React.FC = () => {
  const [timesPressed, setTimesPressed] = useState(0)
  const refresh = (): void => window.location.reload()

  const incrementTimesPressed = (): void => {
    setTimesPressed(timesPressed + 1)
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Welcome to the Button Page!
      </p>
      <p className={styles.subTitle}>
        Home of THE Button!
      </p>
      <p className={styles.message}>
        Click the button below for no reason whatsoever!
      </p>
      <button onClick={incrementTimesPressed}>
        I'm THE Button!
      </button>
      <button onClick={refresh}>
        I'm an Imposter
      </button>
      {
      timesPressed > 0 &&
        <p>
          Wowza! You've actually pressed THE Button {timesPressed} times!
        </p>
      }
    </div>
  )
}

/**
 * wraps the `Button` in the menu; assigning it the `Button` tab
 */
const ButtonWrapper: React.FC = () => {
  return <MenuWrap active='Button'><Button /></MenuWrap>
}

export default ButtonWrapper
