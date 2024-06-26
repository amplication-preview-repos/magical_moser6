import { AnswerChoiceWhereUniqueInput } from "../answerChoice/AnswerChoiceWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAnswerUpdateInput = {
  answerChoice?: AnswerChoiceWhereUniqueInput | null;
  question?: QuestionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
