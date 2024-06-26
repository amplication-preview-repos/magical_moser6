import { ChatCreateNestedManyWithoutMatchesInput } from "./ChatCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  chats?: ChatCreateNestedManyWithoutMatchesInput;
  matchScore?: number | null;
  user1?: string | null;
  user2?: string | null;
};
