/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AnswerChoice } from "./AnswerChoice";
import { AnswerChoiceCountArgs } from "./AnswerChoiceCountArgs";
import { AnswerChoiceFindManyArgs } from "./AnswerChoiceFindManyArgs";
import { AnswerChoiceFindUniqueArgs } from "./AnswerChoiceFindUniqueArgs";
import { CreateAnswerChoiceArgs } from "./CreateAnswerChoiceArgs";
import { UpdateAnswerChoiceArgs } from "./UpdateAnswerChoiceArgs";
import { DeleteAnswerChoiceArgs } from "./DeleteAnswerChoiceArgs";
import { UserAnswerFindManyArgs } from "../../userAnswer/base/UserAnswerFindManyArgs";
import { UserAnswer } from "../../userAnswer/base/UserAnswer";
import { Question } from "../../question/base/Question";
import { AnswerChoiceService } from "../answerChoice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnswerChoice)
export class AnswerChoiceResolverBase {
  constructor(
    protected readonly service: AnswerChoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "read",
    possession: "any",
  })
  async _answerChoicesMeta(
    @graphql.Args() args: AnswerChoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AnswerChoice])
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "read",
    possession: "any",
  })
  async answerChoices(
    @graphql.Args() args: AnswerChoiceFindManyArgs
  ): Promise<AnswerChoice[]> {
    return this.service.answerChoices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AnswerChoice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "read",
    possession: "own",
  })
  async answerChoice(
    @graphql.Args() args: AnswerChoiceFindUniqueArgs
  ): Promise<AnswerChoice | null> {
    const result = await this.service.answerChoice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AnswerChoice)
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "create",
    possession: "any",
  })
  async createAnswerChoice(
    @graphql.Args() args: CreateAnswerChoiceArgs
  ): Promise<AnswerChoice> {
    return await this.service.createAnswerChoice({
      ...args,
      data: {
        ...args.data,

        question: args.data.question
          ? {
              connect: args.data.question,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AnswerChoice)
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "update",
    possession: "any",
  })
  async updateAnswerChoice(
    @graphql.Args() args: UpdateAnswerChoiceArgs
  ): Promise<AnswerChoice | null> {
    try {
      return await this.service.updateAnswerChoice({
        ...args,
        data: {
          ...args.data,

          question: args.data.question
            ? {
                connect: args.data.question,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AnswerChoice)
  @nestAccessControl.UseRoles({
    resource: "AnswerChoice",
    action: "delete",
    possession: "any",
  })
  async deleteAnswerChoice(
    @graphql.Args() args: DeleteAnswerChoiceArgs
  ): Promise<AnswerChoice | null> {
    try {
      return await this.service.deleteAnswerChoice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserAnswer], { name: "userAnswers" })
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "read",
    possession: "any",
  })
  async findUserAnswers(
    @graphql.Parent() parent: AnswerChoice,
    @graphql.Args() args: UserAnswerFindManyArgs
  ): Promise<UserAnswer[]> {
    const results = await this.service.findUserAnswers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Question, {
    nullable: true,
    name: "question",
  })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async getQuestion(
    @graphql.Parent() parent: AnswerChoice
  ): Promise<Question | null> {
    const result = await this.service.getQuestion(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
