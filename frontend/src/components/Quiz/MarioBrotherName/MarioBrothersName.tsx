import React from 'react'
import { Input } from 'antd'

import { useQuizContext } from '../QuizContext'

/**
 * Renders the quiz question about Mario's Brother
 */
const MarioBrothersName: React.FC = () => {
  const { answers } = useQuizContext()

  return (
    <>
      <p>
        Mario is a well known character in the Nintendo franchise who has appeared in games
        of his own as well as spin off games such as MarioKart and Super Smash Bros.
      </p>
      <p>
        What is the name of Mario's brother?
      </p>
      <Input onChange={e => answers.setMarioBrothersName(e.currentTarget.value)} />
    </>
  )
}

export default MarioBrothersName
