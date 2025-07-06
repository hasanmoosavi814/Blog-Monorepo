import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { LikeService } from "../services/like.service";
import { Like } from "../entities/like.entity";

@Resolver(() => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}
}
