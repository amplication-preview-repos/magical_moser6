import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAnswerService } from "./userAnswer.service";
import { UserAnswerControllerBase } from "./base/userAnswer.controller.base";

@swagger.ApiTags("userAnswers")
@common.Controller("userAnswers")
export class UserAnswerController extends UserAnswerControllerBase {
  constructor(
    protected readonly service: UserAnswerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
