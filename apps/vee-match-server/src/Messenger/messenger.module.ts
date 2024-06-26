import { Module } from "@nestjs/common";
import { MessengerService } from "./messenger.service";
import { MessengerController } from "./messenger.controller";
import { MessengerResolver } from "./messenger.resolver";

@Module({
  controllers: [MessengerController],
  providers: [MessengerService, MessengerResolver],
  exports: [MessengerService],
})
export class MessengerModule {}
