import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserAnswerUpdateManyWithoutAnswerChoicesInput } from "./UserAnswerUpdateManyWithoutAnswerChoicesInput";

export type AnswerChoiceUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
  userAnswers?: UserAnswerUpdateManyWithoutAnswerChoicesInput;
};
