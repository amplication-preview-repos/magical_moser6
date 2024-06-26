import { Chat } from "../chat/Chat";

export type Match = {
  chats?: Array<Chat>;
  createdAt: Date;
  id: string;
  matchScore: number | null;
  updatedAt: Date;
  user1: string | null;
  user2: string | null;
};
