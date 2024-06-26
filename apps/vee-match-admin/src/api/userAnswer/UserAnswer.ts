import { AnswerChoice } from "../answerChoice/AnswerChoice";
import { Question } from "../question/Question";
import { User } from "../user/User";

export type UserAnswer = {
  answerChoice?: AnswerChoice | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
  user?: User | null;
};
