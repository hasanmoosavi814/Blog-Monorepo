import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CommentEntity } from "src/modules/comment/entities/comment.entity";
import { Tag } from "src/modules/tag/entities/tag.entity";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field()
  content: string;

  @Field(() => Boolean)
  published: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User)
  author: User;

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [CommentEntity])
  comments: CommentEntity[];
}
