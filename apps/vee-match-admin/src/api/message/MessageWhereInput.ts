import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
};
