import { Chat } from "../chat/Chat";

export type Message = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  updatedAt: Date;
};
