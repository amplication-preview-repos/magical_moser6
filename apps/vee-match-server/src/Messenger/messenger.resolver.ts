import * as graphql from "@nestjs/graphql";
import { MessengerService } from "./messenger.service";

export class MessengerResolver {
  constructor(protected readonly service: MessengerService) {}
}
