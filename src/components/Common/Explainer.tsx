import React from 'react'

import titleCase from 'utils/titleCase'

import styles from './Explainer.module.css'

interface ExplainerProps {
  title: string
  subtitle?: string
  children: string
  button?: {
    title: string
    handleOnClick?: () => void
  }
}

/**
 * renders a generic, formatted set of information to explain a circumstance
 * to the user
 * @prop `title` - of the explainer
 * @prop `subtitle` - of the explainer
 * @prop `message` - the explanation behind the explainer
 * @prop `button` - object with the following fields:
 * - `title` - button's visible label
 * - `onClick` - to be called when user clicks the button
 */
const Explainer: React.FC<ExplainerProps> = props => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {titleCase(props.title)}
      </p>
      {props.subtitle !== undefined &&
        <p className={styles.subtitle}>
          {titleCase(props.subtitle)}
        </p>}
      <p className={styles.message}>
        {props.children}
      </p>
      {props.button !== undefined && typeof props.button === 'object' &&
        <button
          className={styles.button}
          onClick={props.button.handleOnClick}
        >
          {props.button.title}
        </button>}
    </div>
  )
}

export default Explainer
