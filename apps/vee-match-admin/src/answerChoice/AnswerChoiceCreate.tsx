import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";
import { UserAnswerTitle } from "../userAnswer/UserAnswerTitle";

export const AnswerChoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <TextInput label="text" source="text" />
        <ReferenceArrayInput
          source="userAnswers"
          reference="UserAnswer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAnswerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
