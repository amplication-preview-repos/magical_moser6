/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnswerChoiceUpdateManyWithoutQuestionsInput } from "./AnswerChoiceUpdateManyWithoutQuestionsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { UserAnswerUpdateManyWithoutQuestionsInput } from "./UserAnswerUpdateManyWithoutQuestionsInput";

@InputType()
class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerChoiceUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerChoiceUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerChoiceUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  answerChoices?: AnswerChoiceUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserAnswerUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => UserAnswerUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => UserAnswerUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  userAnswers?: UserAnswerUpdateManyWithoutQuestionsInput;
}

export { QuestionUpdateInput as QuestionUpdateInput };