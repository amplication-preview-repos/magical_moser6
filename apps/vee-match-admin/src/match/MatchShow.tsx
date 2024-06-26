import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="matchScore" source="matchScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User1" source="user1" />
        <TextField label="User2" source="user2" />
      </SimpleShowLayout>
    </Show>
  );
};
