import { SortOrder } from "../../util/SortOrder";

export type UserAnswerOrderByInput = {
  answerChoiceId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
