import { CreateCommentInput } from "../dto/comment.input";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
  create(createCommentInput: CreateCommentInput) {
    return "This action adds a new comment";
  }
}
