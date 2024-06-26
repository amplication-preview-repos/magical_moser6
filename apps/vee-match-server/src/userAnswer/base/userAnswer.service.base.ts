/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserAnswer as PrismaUserAnswer,
  AnswerChoice as PrismaAnswerChoice,
  Question as PrismaQuestion,
  User as PrismaUser,
} from "@prisma/client";

export class UserAnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserAnswerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userAnswer.count(args);
  }

  async userAnswers(
    args: Prisma.UserAnswerFindManyArgs
  ): Promise<PrismaUserAnswer[]> {
    return this.prisma.userAnswer.findMany(args);
  }
  async userAnswer(
    args: Prisma.UserAnswerFindUniqueArgs
  ): Promise<PrismaUserAnswer | null> {
    return this.prisma.userAnswer.findUnique(args);
  }
  async createUserAnswer(
    args: Prisma.UserAnswerCreateArgs
  ): Promise<PrismaUserAnswer> {
    return this.prisma.userAnswer.create(args);
  }
  async updateUserAnswer(
    args: Prisma.UserAnswerUpdateArgs
  ): Promise<PrismaUserAnswer> {
    return this.prisma.userAnswer.update(args);
  }
  async deleteUserAnswer(
    args: Prisma.UserAnswerDeleteArgs
  ): Promise<PrismaUserAnswer> {
    return this.prisma.userAnswer.delete(args);
  }

  async getAnswerChoice(parentId: string): Promise<PrismaAnswerChoice | null> {
    return this.prisma.userAnswer
      .findUnique({
        where: { id: parentId },
      })
      .answerChoice();
  }

  async getQuestion(parentId: string): Promise<PrismaQuestion | null> {
    return this.prisma.userAnswer
      .findUnique({
        where: { id: parentId },
      })
      .question();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userAnswer
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
