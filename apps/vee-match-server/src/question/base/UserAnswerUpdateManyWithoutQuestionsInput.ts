/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAnswerWhereUniqueInput } from "../../userAnswer/base/UserAnswerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAnswerUpdateManyWithoutQuestionsInput {
  @Field(() => [UserAnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAnswerWhereUniqueInput],
  })
  connect?: Array<UserAnswerWhereUniqueInput>;

  @Field(() => [UserAnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAnswerWhereUniqueInput],
  })
  disconnect?: Array<UserAnswerWhereUniqueInput>;

  @Field(() => [UserAnswerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAnswerWhereUniqueInput],
  })
  set?: Array<UserAnswerWhereUniqueInput>;
}

export { UserAnswerUpdateManyWithoutQuestionsInput as UserAnswerUpdateManyWithoutQuestionsInput };