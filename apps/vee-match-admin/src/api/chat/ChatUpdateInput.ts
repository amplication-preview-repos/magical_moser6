import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  match?: MatchWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutChatsInput;
};
