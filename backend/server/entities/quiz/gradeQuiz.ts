
export interface QuizAnswers {
  marioBrothersName?: string
  pikachuType?: string
  minecraftStack?: string
  villans?: string[]
}

export interface QuizGrade {
  marioBrothersName: boolean
  pikachuType: boolean
  minecraftStack: boolean
  villans: boolean
}

/**
 * The resolver that grades the video game quiz from the frontend
 * @param args - the user's answers
 * @returns a boolean for each answer if it is correct or not
 */
export const gradeQuiz = ({ args }: { args: { quiz: QuizAnswers } }): QuizGrade => {
  const answers = args.quiz
  return {
    marioBrothersName: answers.marioBrothersName === 'Luigi',
    pikachuType: answers.pikachuType === 'Electric',
    minecraftStack: answers.minecraftStack === '64',
    villans: answers.villans !== undefined && 
      answers.villans.length === 2 && 
      answers.villans.includes('Bowser') && 
      answers.villans.includes('Ganondorf')
  }
}
