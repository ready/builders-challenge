import React, { useState } from 'react'

import Loading from 'components/Common/Loading'

import { GradeQuizExecutor, GradeQuizParams, GradeQuizResults, useGradeQuiz } from './QuizResultsContext.api'

export interface QuizResultsContext {
  answers: GradeQuizParams
  grades: GradeQuizResults
  gradeQuizCall: GradeQuizExecutor
  setQuizAnswers: (answers: GradeQuizParams) => void
}

const quizResultsContext = React.createContext<QuizResultsContext>(undefined as unknown as QuizResultsContext)

/**
 * A custom hook that exposes the QuizResultsContext to the developer. It throws an error if
 * called outside of the QuizResultsContext provider
 * @returns QuizResultsContext instance
 */
export const useQuizResultsContext = (): QuizResultsContext => {
  const context = React.useContext(quizResultsContext)
  if (context === undefined) {
    throw new Error('useQuizResultsContext must be used within QuizResultsContext provider')
  }

  return context
}

interface QuizResultsProviderProps {
  children: React.ReactNode
}

/**
 * A component that wraps around the QuizResultsContext's provider component. Any child components
 * wrapped inside of the QuizResultsProvider can access various values of the QuizResultsContext
 * @prop `children` - react child components that we want to wrap inside of QuizResultsProvider
 */
const QuizResultsProvider: React.FC<QuizResultsProviderProps> = props => {
  const gradeQuizCall = useGradeQuiz()
  const defaultAnswers: GradeQuizParams = {
    marioBrothersName: undefined,
    pikachuType: undefined,
    minecraftStack: undefined,
    villans: undefined
  }

  const [storedAnswers, setStoredAnswers] = useState(defaultAnswers)

  const value = {
    answers: storedAnswers,
    grades: gradeQuizCall[1].data?.gradeQuiz ?? {},
    gradeQuizCall: gradeQuizCall[0],
    setQuizAnswers: setStoredAnswers
  }

  // We want to show the user when the query is loading
  if (gradeQuizCall[1].loading) {
    return <Loading />
  }

  return (
    <quizResultsContext.Provider value={value}>
      {props.children}
    </quizResultsContext.Provider>
  )
}

export default QuizResultsProvider
