import { InputType, Field } from "@nestjs/graphql";
import { PartialType } from "@nestjs/swagger";

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field()
  content: string;

  @Field({ defaultValue: false })
  published: boolean;
}

export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field()
  id: string;
}
