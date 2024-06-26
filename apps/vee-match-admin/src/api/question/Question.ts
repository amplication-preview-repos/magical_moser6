import { AnswerChoice } from "../answerChoice/AnswerChoice";
import { UserAnswer } from "../userAnswer/UserAnswer";

export type Question = {
  answerChoices?: Array<AnswerChoice>;
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
  userAnswers?: Array<UserAnswer>;
};
