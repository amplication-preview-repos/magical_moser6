import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserAnswerResolverBase } from "./base/userAnswer.resolver.base";
import { UserAnswer } from "./base/UserAnswer";
import { UserAnswerService } from "./userAnswer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAnswer)
export class UserAnswerResolver extends UserAnswerResolverBase {
  constructor(
    protected readonly service: UserAnswerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
