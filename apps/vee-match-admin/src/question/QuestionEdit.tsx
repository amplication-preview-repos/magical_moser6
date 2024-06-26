import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AnswerChoiceTitle } from "../answerChoice/AnswerChoiceTitle";
import { UserAnswerTitle } from "../userAnswer/UserAnswerTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answerChoices"
          reference="AnswerChoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerChoiceTitle} />
        </ReferenceArrayInput>
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
    </Edit>
  );
};
