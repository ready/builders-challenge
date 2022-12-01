import { useQuizResultsContext } from 'context/QuizResultsContext'

/**
 * Custom hook to determine if the quiz has already been graded or not
 * @returns true if the quiz was already graded and the results are in the context
 */
export const useQuizGraded = (): boolean => {
  const { grades } = useQuizResultsContext()
  const isMissingGrades = Object.keys(grades).some(a => (grades as any)[a] === undefined)
  return !isMissingGrades
}
