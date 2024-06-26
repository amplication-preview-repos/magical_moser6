import { AnswerChoiceUpdateManyWithoutQuestionsInput } from "./AnswerChoiceUpdateManyWithoutQuestionsInput";
import { UserAnswerUpdateManyWithoutQuestionsInput } from "./UserAnswerUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  answerChoices?: AnswerChoiceUpdateManyWithoutQuestionsInput;
  text?: string | null;
  userAnswers?: UserAnswerUpdateManyWithoutQuestionsInput;
};
