import { PrismaService } from "src/modules/prisma/prisma.service";
import { SignInInput } from "../dto/signin.input";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { verify } from "argon2";

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException("User Not Found");
    if (!user.password) throw new UnauthorizedException("Invalid credentials");
    const passwordMatched = await verify(user.password, password);
    if (!passwordMatched)
      throw new UnauthorizedException("Invalid credentials");
    return user;
  }
}
