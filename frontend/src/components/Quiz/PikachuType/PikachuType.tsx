import React from 'react'
import { Select } from 'antd'

import { useQuizContext } from '../QuizContext'
import { PokemonType } from '../useQuizAnswers.types'
import styles from './PikachuType.module.css'

/**
 * Renders the quiz question about pikachu's type
 */
const PikachuType: React.FC = () => {
  const { answers } = useQuizContext()
  const pokemonTypes = Object.keys(PokemonType).filter(key => isNaN(parseInt(key)))

  return (
    <>
      <p>
        Pikachu is a beloved character from the famous Pokemon games.
        This little mouse accompanies the protagonist, Ash, in the Pokemon anime.
      </p>
      <p>
        What is the type of Pikachu in the games?
      </p>
      <Select className={styles.full} onChange={e => answers.setPikachusType(e)}>
        {pokemonTypes.map(type => (
          <Select.Option key={type}>{type}</Select.Option>
        ))}
      </Select>
    </>
  )
}

export default PikachuType
