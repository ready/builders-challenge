import React, { useEffect } from 'react'

import { useQuizResultsContext } from 'context/QuizResultsContext'

import { useQuizContext } from 'components/Quiz/QuizContext'

/**
 * Thanks the user for playing the quiz
 */
const ThankYou: React.FC = () => {
  const { answers } = useQuizContext()
  const { gradeQuizCall } = useQuizResultsContext()

  // Once the component is mounted, grade the quiz
  useEffect(() => {
    void gradeQuizCall({ variables: { quiz: answers.getAnswers() } })
  }, [])

  return (
    <p>
      Thank you for playing our little quiz!
      Click the button below to see your results!
    </p>
  )
}

export default ThankYou
