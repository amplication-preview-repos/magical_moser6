import { AnswerChoiceWhereUniqueInput } from "../answerChoice/AnswerChoiceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAnswerWhereInput = {
  answerChoice?: AnswerChoiceWhereUniqueInput;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
