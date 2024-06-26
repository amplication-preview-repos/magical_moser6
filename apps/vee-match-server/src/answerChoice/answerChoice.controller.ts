import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnswerChoiceService } from "./answerChoice.service";
import { AnswerChoiceControllerBase } from "./base/answerChoice.controller.base";

@swagger.ApiTags("answerChoices")
@common.Controller("answerChoices")
export class AnswerChoiceController extends AnswerChoiceControllerBase {
  constructor(
    protected readonly service: AnswerChoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
