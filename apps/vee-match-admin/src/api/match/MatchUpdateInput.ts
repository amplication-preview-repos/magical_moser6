import { ChatUpdateManyWithoutMatchesInput } from "./ChatUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  chats?: ChatUpdateManyWithoutMatchesInput;
  matchScore?: number | null;
  user1?: string | null;
  user2?: string | null;
};
