import { InputJsonValue } from "../../types";
import { UserAnswerUpdateManyWithoutUsersInput } from "./UserAnswerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userAnswers?: UserAnswerUpdateManyWithoutUsersInput;
  username?: string;
};
