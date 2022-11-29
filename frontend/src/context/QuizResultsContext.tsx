import React from 'react'

export interface QuizResultsContext {
  answers: {
    marioBrothersName?: string
    pikachuType?: string
    minecraftStack?: string
    villans?: string[]
  }
  grades: {
    marioBrothersName?: boolean
    pikachuType?: boolean
    minecraftStack?: boolean
    villans?: boolean
  }
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
  const value = {
    answers: {},
    grades: {}
  }

  return (
    <quizResultsContext.Provider value={value}>
      {props.children}
    </quizResultsContext.Provider>
  )
}

export default QuizResultsProvider
