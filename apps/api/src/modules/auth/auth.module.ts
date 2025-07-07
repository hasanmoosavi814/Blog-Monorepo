import { PrismaService } from "../prisma/prisma.service";
import { AuthResolver } from "./resolvers/auth.resolver";
import { AuthService } from "./services/auth.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [AuthResolver, AuthService, PrismaService],
})
export class AuthModule {}
