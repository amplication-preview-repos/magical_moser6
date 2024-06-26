import { AnswerChoiceListRelationFilter } from "../answerChoice/AnswerChoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserAnswerListRelationFilter } from "../userAnswer/UserAnswerListRelationFilter";

export type QuestionWhereInput = {
  answerChoices?: AnswerChoiceListRelationFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  userAnswers?: UserAnswerListRelationFilter;
};
