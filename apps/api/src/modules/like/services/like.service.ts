import { CreateLikeInput } from "../dto/like.input";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LikeService {
  create(createLikeInput: CreateLikeInput) {
    return "This action adds a new like";
  }
}
