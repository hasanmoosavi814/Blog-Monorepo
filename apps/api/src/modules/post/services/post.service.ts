import { PrismaService } from "src/modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.post.findMany();
  }
}
