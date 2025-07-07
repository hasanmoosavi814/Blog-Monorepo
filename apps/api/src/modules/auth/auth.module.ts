import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { AuthResolver } from "./resolvers/auth.resolver";
import { AuthService } from "./services/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configureService: ConfigService) => ({
        secret: configureService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configureService.get<string>("JWT_EXPIRES_IN"),
        },
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}
