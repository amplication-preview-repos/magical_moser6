import { SortOrder } from "../../util/SortOrder";

export type AnswerChoiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
