import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chats"
          reference="Chat"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="matchScore" source="matchScore" />
        <TextInput label="User1" source="user1" />
        <TextInput label="User2" source="user2" />
      </SimpleForm>
    </Edit>
  );
};
