import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  matchScore?: IntNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
