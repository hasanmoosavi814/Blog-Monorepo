import { Resolver, Query, Context, Args, Int } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { PostService } from "../services/post.service";
import { UseGuards } from "@nestjs/common";
import { Post } from "../entities/post.entity";

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: "posts" })
  findAll(
    @Context() context,
    @Args("skip", { nullable: true }) skip?: number,
    @Args("take", { nullable: true }) take?: number
  ) {
    const user = context.req.user;
    return this.postService.findAll({ skip, take });
  }

  @Query(() => Int, { name: "postCount" })
  count() {
    return this.postService.count();
  }
}
