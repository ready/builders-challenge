import generateResolver from '../../utils/generateResolver'
import { gradeQuiz } from './gradeQuiz'

export default {
  Query: {
    gradeQuiz: generateResolver(gradeQuiz)
  }
}
