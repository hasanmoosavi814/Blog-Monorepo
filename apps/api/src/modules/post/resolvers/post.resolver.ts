import { Resolver, Query, Context } from "@nestjs/graphql";
import { PostService } from "../services/post.service";
import { Post } from "../entities/post.entity";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: "posts" })
  findAll(@Context() context) {
    const user = context.req.user;
    console.log({ user });
    return this.postService.findAll();
  }
}
