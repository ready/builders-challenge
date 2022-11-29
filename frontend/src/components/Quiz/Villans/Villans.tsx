import { Checkbox, Row } from 'antd'
import React from 'react'

import { useQuizContext } from '../QuizContext'
import { VillanName } from '../useQuizAnswers.types'
import styles from './Villans.module.css'

/**
 * Renders the quiz question about villans
 */
const Villans: React.FC = () => {
  const { answers } = useQuizContext()
  const villanNames = Object.keys(VillanName).filter(key => isNaN(parseInt(key)))

  return (
    <>
      <p>
        There are many villans among Nintendo games, some are large and some are small.
      </p>
      <p>
        Select all names of villans from the list below.
      </p>
      <Checkbox.Group className={styles.box} onChange={e => answers.setVillans(e)}>
        {villanNames.map(name => (
          <Row key={name}>
            <Checkbox value={name}>{name}</Checkbox>
          </Row>
        ))}
      </Checkbox.Group>
    </>
  )
}

export default Villans
