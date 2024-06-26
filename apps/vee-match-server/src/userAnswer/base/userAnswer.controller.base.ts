/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserAnswerService } from "../userAnswer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserAnswerCreateInput } from "./UserAnswerCreateInput";
import { UserAnswer } from "./UserAnswer";
import { UserAnswerFindManyArgs } from "./UserAnswerFindManyArgs";
import { UserAnswerWhereUniqueInput } from "./UserAnswerWhereUniqueInput";
import { UserAnswerUpdateInput } from "./UserAnswerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserAnswerControllerBase {
  constructor(
    protected readonly service: UserAnswerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserAnswer })
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserAnswer(
    @common.Body() data: UserAnswerCreateInput
  ): Promise<UserAnswer> {
    return await this.service.createUserAnswer({
      data: {
        ...data,

        answerChoice: data.answerChoice
          ? {
              connect: data.answerChoice,
            }
          : undefined,

        question: data.question
          ? {
              connect: data.question,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        answerChoice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserAnswer] })
  @ApiNestedQuery(UserAnswerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAnswers(@common.Req() request: Request): Promise<UserAnswer[]> {
    const args = plainToClass(UserAnswerFindManyArgs, request.query);
    return this.service.userAnswers({
      ...args,
      select: {
        answerChoice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput
  ): Promise<UserAnswer | null> {
    const result = await this.service.userAnswer({
      where: params,
      select: {
        answerChoice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput,
    @common.Body() data: UserAnswerUpdateInput
  ): Promise<UserAnswer | null> {
    try {
      return await this.service.updateUserAnswer({
        where: params,
        data: {
          ...data,

          answerChoice: data.answerChoice
            ? {
                connect: data.answerChoice,
              }
            : undefined,

          question: data.question
            ? {
                connect: data.question,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          answerChoice: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          question: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAnswer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput
  ): Promise<UserAnswer | null> {
    try {
      return await this.service.deleteUserAnswer({
        where: params,
        select: {
          answerChoice: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          question: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}