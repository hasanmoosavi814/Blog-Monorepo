import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { CommentModule } from "../comment/comment.module";
import { PrismaModle } from "../prisma/prisma.module";
import { PostModule } from "../post/post.module";
import { LikeModule } from "../like/like.module";
import { UserModule } from "../user/user.module";
import { TagModule } from "../tag/tag.module";
import { Module } from "@nestjs/common";
import { join } from "path";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
    }),
    TagModule,
    PostModule,
    LikeModule,
    UserModule,
    PrismaModle,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
