import { AnswerChoiceCreateNestedManyWithoutQuestionsInput } from "./AnswerChoiceCreateNestedManyWithoutQuestionsInput";
import { UserAnswerCreateNestedManyWithoutQuestionsInput } from "./UserAnswerCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  answerChoices?: AnswerChoiceCreateNestedManyWithoutQuestionsInput;
  text?: string | null;
  userAnswers?: UserAnswerCreateNestedManyWithoutQuestionsInput;
};
