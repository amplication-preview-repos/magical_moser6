import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserAnswerListRelationFilter } from "../userAnswer/UserAnswerListRelationFilter";

export type AnswerChoiceWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  text?: StringNullableFilter;
  userAnswers?: UserAnswerListRelationFilter;
};
