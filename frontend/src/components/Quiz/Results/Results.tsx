import React, { ReactNode } from 'react'

import { CheckCircleTwoTone, CloseCircleFilled } from '@ant-design/icons'

import truthy from 'utils/truthy'
import { useQuizResultsContext } from 'context/QuizResultsContext'

/**
 * Renders the results from the quiz on screen
 */
const Results: React.FC = () => {
  const { answers, grades } = useQuizResultsContext()

  const emptyVillans = answers.villans === undefined || answers.villans.length === 0
  const villansAnswer = emptyVillans ? 'None' : answers.villans?.reduce((sum, cur) => `${cur}, ${sum}`)

  return (
    <>
      <h1>Quiz Results</h1>
      <p>
        Let's see how you did on our super difficult video game quiz!
      </p>
      <Result correct={grades.marioBrothersName} answer={answers.marioBrothersName}>
        Mario's Brother's Name
      </Result>
      <Result correct={grades.pikachuType} answer={answers.pikachuType}>
        Pikachu's Type
      </Result>
      <Result correct={grades.minecraftStack} answer={answers.minecraftStack}>
        Minecraft's Max Stack Size
      </Result>
      <Result correct={grades.villans} answer={villansAnswer}>
        Nintendo Villans
      </Result>
    </>
  )
}

interface ResultProps {
  children: ReactNode
  correct?: boolean
  answer?: string
}

/**
 * Renders a single result
 * @prop `correct` - true if the answer was correct
 * @prop `answer` - the answer given by the user
 * @prop `children` - the label to display next to the answer
 */
const Result: React.FC<ResultProps> = props => (
  <p>
    <b>{props.children}:</b> {(props.answer ?? '') + ' '}
    {
      truthy(props.correct)
        ? <CheckCircleTwoTone style={{ color: 'blue' }} />
        : <CloseCircleFilled style={{ color: 'red' }} />
    }
  </p>
)

export default Results
