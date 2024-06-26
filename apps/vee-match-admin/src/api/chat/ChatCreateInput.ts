import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  match?: MatchWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
};
