import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
}
