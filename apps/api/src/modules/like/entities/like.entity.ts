import { ObjectType, Field, ID } from "@nestjs/graphql";
import { User } from "src/modules/user/entities/user.entity";
import { Post } from "src/modules/post/entities/post.entity";

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field(() => Post)
  post: Post;

  @Field()
  createdAt: Date;
}
