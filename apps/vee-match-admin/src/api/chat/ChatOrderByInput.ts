import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  matchId?: SortOrder;
  updatedAt?: SortOrder;
};
