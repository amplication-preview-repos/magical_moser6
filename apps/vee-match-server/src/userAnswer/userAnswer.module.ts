import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAnswerModuleBase } from "./base/userAnswer.module.base";
import { UserAnswerService } from "./userAnswer.service";
import { UserAnswerController } from "./userAnswer.controller";
import { UserAnswerResolver } from "./userAnswer.resolver";

@Module({
  imports: [UserAnswerModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAnswerController],
  providers: [UserAnswerService, UserAnswerResolver],
  exports: [UserAnswerService],
})
export class UserAnswerModule {}
