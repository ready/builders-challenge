import React from 'react'

import { StepperHook, useStepper } from 'hooks/useStepper'

import { QuizAnswersHook, useQuizAnswers } from './useQuizAnswers'

export interface QuizContext {
  answers: QuizAnswersHook
  stepper: StepperHook
}

const quizContext = React.createContext<QuizContext>(undefined as unknown as QuizContext)

/**
 * A custom hook that exposes the QuizContext to the developer. It throws an error if
 * called outside of the QuizContext provider
 * @returns QuizContext instance
 */
export const useQuizContext = (): QuizContext => {
  const context = React.useContext(quizContext)
  if (context === undefined) {
    throw new Error('useQuizContext must be used within QuizContext provider')
  }

  return context
}

interface QuizProviderProps {
  children: React.ReactNode
}

/**
 * A component that wraps around the QuizContext's provider component. Any child components
 * wrapped inside of the QuizProvider can access various values of the QuizContext
 * @prop `children` - react child components that we want to wrap inside of QuizProvider
 */
const QuizProvider: React.FC<QuizProviderProps> = props => {
  const value = {
    answers: useQuizAnswers(),
    stepper: useStepper(-1, 4)
  }

  return (
    <quizContext.Provider value={value}>
      {props.children}
    </quizContext.Provider>
  )
}

export default QuizProvider
