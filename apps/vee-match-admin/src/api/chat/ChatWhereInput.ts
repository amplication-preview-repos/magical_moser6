import { StringFilter } from "../../util/StringFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  match?: MatchWhereUniqueInput;
  messages?: MessageListRelationFilter;
};
