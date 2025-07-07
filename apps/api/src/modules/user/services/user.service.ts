import { CreateUserInput } from "../dto/user.input";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { hash } from "argon2";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const { password, ...user } = createUserInput;
    const hashedPassword = await hash(password);
    return await this.prismaService.user.create({
      data: { password: hashedPassword, ...user },
    });
  }
}
