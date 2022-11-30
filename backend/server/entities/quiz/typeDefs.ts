export default `
  type QuizResults {
    marioBrothersName: Boolean!
    pikachuType: Boolean!
    minecraftStack: Boolean!
    villans: Boolean!
  }  

  input QuizInput {
    marioBrothersName: String
    pikachuType: String
    minecraftStack: String
    villans: [String]
  }

  type Query {
    gradeQuiz(quiz: QuizInput!): QuizResults 
  }
`
