import { AnswerChoice as TAnswerChoice } from "../api/answerChoice/AnswerChoice";

export const ANSWERCHOICE_TITLE_FIELD = "text";

export const AnswerChoiceTitle = (record: TAnswerChoice): string => {
  return record.text?.toString() || String(record.id);
};
