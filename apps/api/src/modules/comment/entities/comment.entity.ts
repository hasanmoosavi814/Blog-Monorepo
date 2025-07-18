import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Post } from "src/modules/post/entities/post.entity";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class CommentEntity {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field(() => Post)
  post: Post;

  @Field(() => User)
  author: User;

  @Field()
  createdAt: Date;
}
