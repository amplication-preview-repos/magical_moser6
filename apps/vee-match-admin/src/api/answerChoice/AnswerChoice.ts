import { Question } from "../question/Question";
import { UserAnswer } from "../userAnswer/UserAnswer";

export type AnswerChoice = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  text: string | null;
  updatedAt: Date;
  userAnswers?: Array<UserAnswer>;
};
