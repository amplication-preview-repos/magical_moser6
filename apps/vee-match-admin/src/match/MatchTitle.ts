import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "user1";

export const MatchTitle = (record: TMatch): string => {
  return record.user1?.toString() || String(record.id);
};
