import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnswerChoiceModuleBase } from "./base/answerChoice.module.base";
import { AnswerChoiceService } from "./answerChoice.service";
import { AnswerChoiceController } from "./answerChoice.controller";
import { AnswerChoiceResolver } from "./answerChoice.resolver";

@Module({
  imports: [AnswerChoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnswerChoiceController],
  providers: [AnswerChoiceService, AnswerChoiceResolver],
  exports: [AnswerChoiceService],
})
export class AnswerChoiceModule {}
