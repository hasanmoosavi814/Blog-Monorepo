import { CommentService } from "../services/comment.service";
import { CommentEntity } from "../entities/comment.entity";
import { Resolver } from "@nestjs/graphql";

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
}
