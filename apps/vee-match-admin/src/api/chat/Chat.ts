import { Match } from "../match/Match";
import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  id: string;
  match?: Match | null;
  messages?: Array<Message>;
  updatedAt: Date;
};
