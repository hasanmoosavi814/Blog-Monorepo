import { DEFAULT_PAGE_SIZE } from "src/common/utils/constantPage";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}
  async findAll({
    skip = 0,
    take = DEFAULT_PAGE_SIZE,
  }: {
    skip?: number;
    take?: number;
  }) {
    return await this.prismaService.post.findMany({ skip, take });
  }

  async count() {
    return await this.prismaService.post.count();
  }
}
