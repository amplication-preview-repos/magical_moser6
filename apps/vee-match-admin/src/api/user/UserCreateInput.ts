import { InputJsonValue } from "../../types";
import { UserAnswerCreateNestedManyWithoutUsersInput } from "./UserAnswerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userAnswers?: UserAnswerCreateNestedManyWithoutUsersInput;
  username: string;
};
