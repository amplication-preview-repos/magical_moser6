import { JsonValue } from "type-fest";
import { UserAnswer } from "../userAnswer/UserAnswer";

export type User = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  profilePics: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  userAnswers?: Array<UserAnswer>;
  username: string;
};
