import { CreateUserInput } from "../dto/user.input";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput) {
    return "This action adds a new user";
  }
}
