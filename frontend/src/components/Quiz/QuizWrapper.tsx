import React from 'react'

import HomeLogo from 'components/Menu/HomeLogo'
import MenuWrap from 'components/Menu/MenuWrap'

import Quiz from './Quiz'
import QuizProvider, { useQuizContext } from './QuizContext'
import Results from './Results/Results'
import QuizIntro from './QuizIntro'
import { useQuizGraded } from './Results/useQuizGraded'
import styles from './QuizWrapper.module.css'

/**
 * Wraps the entire quiz in the context
 */
const QuizWrapper: React.FC = () => (
  <QuizProvider>
    <QuizPage />
  </QuizProvider>
)

/**
 * Determines based on the current step if we should show
 * the intro, the quiz, or the results
 */
const QuizPage: React.FC = () => {
  const isQuizGraded = useQuizGraded()
  const { stepper } = useQuizContext()
  const step = stepper.getStep()

  if (step === stepper.getEndStep() || isQuizGraded) {
    return (
      <MenuWrap active='Quiz'>
        <div className={styles.menuContain}>
          <Results />
        </div>
      </MenuWrap>
    )
  }

  if (step === -1) {
    return (
      <MenuWrap active='Quiz'>
        <div className={styles.menuContain}>
          <QuizIntro />
        </div>
      </MenuWrap>
    )
  }

  return (
    <div className={styles.contain}>
      <div className={styles.navbarContain}>
        <div className={styles.navbar}>
          <HomeLogo />
        </div>
      </div>
      <div className={styles.content}>
        <h1>Video Game Quiz</h1>
        <Quiz />
      </div>
    </div>
  )
}

export default QuizWrapper
