import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Post } from "src/modules/post/entities/post.entity";

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Post])
  posts: Post[];
}
