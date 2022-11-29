import { gql, LazyQueryExecFunction, LazyQueryResultTuple, useLazyQuery } from '@apollo/client'

export interface GradeQuizParams {
  marioBrothersName?: string
  pikachuType?: string
  minecraftStack?: string
  villans?: string[]
}

export interface GradeQuizResults {
  marioBrothersName?: boolean
  pikachuType?: boolean
  minecraftStack?: boolean
  villans?: boolean
}

interface ApiParams {
  quiz: GradeQuizParams
}

interface ApiResults {
  gradeQuiz: GradeQuizResults
}

export type GradeQuizExecutor = LazyQueryExecFunction<ApiResults, ApiParams>

export const useGradeQuiz = (): LazyQueryResultTuple<ApiResults, ApiParams> => {
  return useLazyQuery(GRADE_QUIZ)
}

const GRADE_QUIZ = gql`
  query gradeQuiz($quiz: QuizInput!) {
    gradeQuiz(quiz: $quiz) {
      marioBrothersName
      pikachuType
      minecraftStack
      villans
    }
  }
`
