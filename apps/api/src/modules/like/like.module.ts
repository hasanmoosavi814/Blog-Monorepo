import { LikeResolver } from "./resolvers/like.resolver";
import { LikeService } from "./services/like.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [LikeResolver, LikeService],
})
export class LikeModule {}
