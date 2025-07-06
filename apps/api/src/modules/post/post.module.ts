import { PrismaService } from "../prisma/prisma.service";
import { PostResolver } from "./resolvers/post.resolver";
import { PostService } from "./services/post.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
