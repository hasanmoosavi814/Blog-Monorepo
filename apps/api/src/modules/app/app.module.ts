import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { CommentModule } from "../comment/comment.module";
import { PrismaModule } from "../prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { PostModule } from "../post/post.module";
import { AuthModule } from "../auth/auth.module";
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
    ConfigModule.forRoot({ isGlobal: true }),
    TagModule,
    AuthModule,
    PostModule,
    LikeModule,
    UserModule,
    PrismaModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
