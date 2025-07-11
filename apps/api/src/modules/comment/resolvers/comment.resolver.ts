import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { DEFAULT_PAGE_SIZE } from "src/common/utils/constantPage";
import { CommentService } from "../services/comment.service";
import { CommentEntity } from "../entities/comment.entity";

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query(() => [CommentEntity], { name: "getPostComment" })
  async getPostComment(
    @Args("postId", { type: () => String }) postId: string,
    @Args("take", {
      nullable: true,
      type: () => Int,
      defaultValue: DEFAULT_PAGE_SIZE,
    })
    take: number,
    @Args("skip", { type: () => Int, nullable: true, defaultValue: 0 })
    skip: number
  ) {
    return this.commentService.getCommentsByPostId(postId, take, skip);
  }

  @Query(() => Int)
  postCommentCount(@Args("postId", { type: () => String }) postId: string) {
    return this.commentService.count(postId);
  }
}
