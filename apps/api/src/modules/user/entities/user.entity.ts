import { ObjectType, Field, ID } from "@nestjs/graphql";
import { CommentEntity } from "src/modules/comment/entities/comment.entity";
import { Post } from "src/modules/post/entities/post.entity";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => [CommentEntity], { nullable: true })
  comments?: CommentEntity[];
}
