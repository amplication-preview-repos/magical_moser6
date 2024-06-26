import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "text";

export const QuestionTitle = (record: TQuestion): string => {
  return record.text?.toString() || String(record.id);
};
