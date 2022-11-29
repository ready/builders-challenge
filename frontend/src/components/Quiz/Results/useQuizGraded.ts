import { useQuizResultsContext } from 'context/QuizResultsContext'

/**
 * Custom hook to determine if the quiz has already been graded or not
 * @returns true if the quiz was already graded and the results are in the context
 */
export const useQuizGraded = (): boolean => {
  const { answers, grades } = useQuizResultsContext()

  const isMissingAnswers = Object.keys(answers).some(a => (answers as any)[a] === undefined)
  const isMissingGrades = Object.keys(grades).some(a => (grades as any)[a] === undefined)

  return !isMissingAnswers && !isMissingGrades
}
