import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Matches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="matchScore" source="matchScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User1" source="user1" />
        <TextField label="User2" source="user2" />
      </Datagrid>
    </List>
  );
};
