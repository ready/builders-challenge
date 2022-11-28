import React from 'react'

import { Button } from 'antd'

import { useQuizContext } from './QuizContext'

const QuizIntro: React.FC = () => {
  const { stepper } = useQuizContext()

  return (
    <>
      <h1>Video Game Quiz</h1>
      <p>
        Come one! Come all! Test your video game knowledge on a carefully curated selection of questions.
        Only the most knowledgable people will get 100% on this difficult quiz!
      </p>
      <Button type='primary' onClick={() => stepper.forward()}>
        Take Quiz
      </Button>
    </>
  )
}

export default QuizIntro
