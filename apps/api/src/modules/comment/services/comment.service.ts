import { DEFAULT_PAGE_SIZE } from "src/common/utils/constantPage";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  async getCommentsByPostId(postId: string, take?: number, skip?: number) {
    return this.prismaService.comment.findMany({
      where: { postId },
      include: { author: true },
      orderBy: { createdAt: "desc" },
      skip: skip ?? 0,
      take: take ?? DEFAULT_PAGE_SIZE,
    });
  }

  async count(postId: string): Promise<number> {
    return this.prismaService.comment.count({
      where: { postId },
    });
  }
}
