import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { SignInInput } from "../dto/signin.input";
import { verify } from "argon2";
import { JwtService } from "@nestjs/jwt";
import { AuthJwtPayload } from "src/common/types/auth-jwtPayload";
import { User } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}
  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException("User Not Found");
    if (!user.password) throw new UnauthorizedException("Invalid credentials");
    const passwordMatched = await verify(user.password, password);
    if (!passwordMatched)
      throw new UnauthorizedException("Invalid credentials");
    return user;
  }

  async generateToken(userId: string) {
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);
    return { id: user.id, name: user.name, avatar: user.avatar, accessToken };
  }
}
