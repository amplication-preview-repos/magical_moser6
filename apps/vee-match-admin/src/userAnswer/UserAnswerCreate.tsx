import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AnswerChoiceTitle } from "../answerChoice/AnswerChoiceTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { UserTitle } from "../user/UserTitle";

export const UserAnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="answerChoice.id"
          reference="AnswerChoice"
          label="AnswerChoice"
        >
          <SelectInput optionText={AnswerChoiceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
