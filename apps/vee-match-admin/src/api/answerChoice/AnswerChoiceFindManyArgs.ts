import { AnswerChoiceWhereInput } from "./AnswerChoiceWhereInput";
import { AnswerChoiceOrderByInput } from "./AnswerChoiceOrderByInput";

export type AnswerChoiceFindManyArgs = {
  where?: AnswerChoiceWhereInput;
  orderBy?: Array<AnswerChoiceOrderByInput>;
  skip?: number;
  take?: number;
};
