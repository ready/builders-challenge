import React from 'react'

import { CheckOutlined } from '@ant-design/icons'
import { Divider } from 'antd'

import truthy from 'utils/truthy'

import styles from './NumberedDivider.module.css'

interface NumberedDividerProps {
  number?: string | number
  checked?: boolean
  filled?: boolean
}

/**
 * A divider with a number or check mark in the center
 * Either the number or checked props must be passed in
 * @prop `filled` - if true, it fills the circle with the color
 * @prop `number` - a number to place in the center of the divider
 * @prop `checked` - if true, it places a check mark in the center of the divider
 */
const NumberedDivider: React.FC<NumberedDividerProps> = props => {
  if (!truthy(props.checked) && !truthy(props.number)) {
    throw new Error('NumberedDivider component must have either number or checked prop')
  }

  return (
    <div className={styles.contain}>
      <Divider style={{ minWidth: 0 }} />
      <div className={`${styles.circle} ${truthy(props.filled) ? styles.filled : ''}`}>
        {truthy(props.checked) ? <CheckOutlined /> : props.number}
      </div>
      <Divider style={{ minWidth: 0 }} />
    </div>
  )
}

export default NumberedDivider
