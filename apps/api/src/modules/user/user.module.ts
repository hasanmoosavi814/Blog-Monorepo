import { UserResolver } from "./resolvers/user.resolver";
import { UserService } from "./services/user.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
