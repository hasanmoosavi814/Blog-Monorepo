import { CommentResolver } from "./resolvers/comment.resolver";
import { CommentService } from "./services/comment.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
