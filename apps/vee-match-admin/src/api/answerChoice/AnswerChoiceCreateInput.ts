import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserAnswerCreateNestedManyWithoutAnswerChoicesInput } from "./UserAnswerCreateNestedManyWithoutAnswerChoicesInput";

export type AnswerChoiceCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
  userAnswers?: UserAnswerCreateNestedManyWithoutAnswerChoicesInput;
};
