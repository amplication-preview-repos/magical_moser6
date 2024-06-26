import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnswerChoiceServiceBase } from "./base/answerChoice.service.base";

@Injectable()
export class AnswerChoiceService extends AnswerChoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
