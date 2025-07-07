import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { CreateUserInput } from "../dto/user.input";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }
}
