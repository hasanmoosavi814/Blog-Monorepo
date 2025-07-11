import { CommentResolver } from "./resolvers/comment.resolver";
import { CommentService } from "./services/comment.service";
import { PrismaModule } from "../prisma/prisma.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [PrismaModule],
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
