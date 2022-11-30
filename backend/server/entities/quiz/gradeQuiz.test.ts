import { gradeQuiz as gradeQuizResolver, QuizAnswers, QuizGrade } from './gradeQuiz'

// Alias to handle the formatting of the resolver
const gradeQuiz = (answers: QuizAnswers): QuizGrade => gradeQuizResolver({ args: { quiz: answers } })

describe('Test quiz grading resolver correctly grades', () => {
  describe('Mario', () => {
    test('Correct', () => {
      const grade = gradeQuiz({ marioBrothersName: 'Luigi' })
      expect(grade.marioBrothersName).toBe(true)
    })

    test('Incorrect', () => {
      const grade = gradeQuiz({ marioBrothersName: 'Waluigi' })
      expect(grade.marioBrothersName).toBe(false)
    })

    test('Undefined', () => {
      const grade = gradeQuiz({})
      expect(grade.marioBrothersName).toBe(false)
    })
  })

  describe('Pikachu', () => {
    test('Correct', () => {
      const grade = gradeQuiz({ pikachuType: 'Electric' })
      expect(grade.pikachuType).toBe(true)
    })

    test('Incorrect', () => {
      const grade = gradeQuiz({ pikachuType: 'Water' })
      expect(grade.pikachuType).toBe(false)
    })

    test('Undefined', () => {
      const grade = gradeQuiz({})
      expect(grade.pikachuType).toBe(false)
    })
  })

  describe('Minecraft', () => {
    test('Correct', () => {
      const grade = gradeQuiz({ minecraftStack: '64' })
      expect(grade.minecraftStack).toBe(true)
    })

    test('Incorrect', () => {
      const grade = gradeQuiz({ minecraftStack: '32' })
      expect(grade.minecraftStack).toBe(false)
    })

    test('Undefined', () => {
      const grade = gradeQuiz({})
      expect(grade.minecraftStack).toBe(false)
    })
  })

  describe('Villans', () => {
    test('Correct', () => {
      const grade = gradeQuiz({ villans: ['Bowser', 'Ganondorf'] })
      expect(grade.villans).toBe(true)
    })

    test('Swapped order', () => {
      const grade = gradeQuiz({ villans: ['Ganondorf', 'Bowser'] })
      expect(grade.villans).toBe(true)
    })

    test('Complete wrong answers', () => {
      const grade = gradeQuiz({ villans: ['Kirby', 'Zelda'] })
      expect(grade.villans).toBe(false)
    })

    test('Partial wrong answers', () => {
      const grade = gradeQuiz({ villans: ['Kirby', 'Bowser'] })
      expect(grade.villans).toBe(false)
    })

    test('Partial correct answers', () => {
      const grade = gradeQuiz({ villans: ['Bowser'] })
      expect(grade.villans).toBe(false)
    })

    test('Overincluded correct answers', () => {
      const grade = gradeQuiz({ villans: ['Bowser', 'Ganondorf', 'Metaknight'] })
      expect(grade.villans).toBe(false)
    })

    test('Empty array', () => {
      const grade = gradeQuiz({ villans: [] })
      expect(grade.villans).toBe(false)
    })

    test('Undefined', () => {
      const grade = gradeQuiz({})
      expect(grade.villans).toBe(false)
    })
  })
})
