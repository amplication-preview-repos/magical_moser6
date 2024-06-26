import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  chats?: ChatListRelationFilter;
  id?: StringFilter;
  matchScore?: IntNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
