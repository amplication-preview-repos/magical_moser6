import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MessengerService } from "./messenger.service";

@swagger.ApiTags("messengers")
@common.Controller("messengers")
export class MessengerController {
  constructor(protected readonly service: MessengerService) {}
}
