"use client";

import { DEFAULT_PAGE_SIZE } from "@/utils/constant";
import { getPostComments } from "@/lib/commentAction";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import CommentPagination from "./CommentPagination";
import CommentCard from "./CommentCard";

type Props = {
  postId: string;
};

const PostComments = ({ postId }: Props) => {
  // ============ State =============
  const [page, setPage] = useState(1);

  // ============ Query =============
  const { data, isLoading } = useQuery({
    queryKey: ["GET_POST_COMMENTS", postId, page],
    queryFn: () =>
      getPostComments({
        postId,
        skip: (page - 1) * DEFAULT_PAGE_SIZE,
        take: DEFAULT_PAGE_SIZE,
      }),
    enabled: !!postId,
  });
  const totalCount = data?.totalCount || 0;

  // ============ Rendering =============
  return (
    <section className="container max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Comments</h2>

      <div className="space-y-6 mb-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex gap-4 items-start animate-pulse border border-gray-200 p-4 rounded-xl bg-white shadow-sm"
              >
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))
          : data?.comments.map((comment, index) => (
              <CommentCard key={comment.id} comment={comment} index={index} />
            ))}
      </div>

      {/* Pagination Controls */}
      <CommentPagination
        page={page}
        totalCount={totalCount}
        onPageChange={setPage}
      />
    </section>
  );
};

export default PostComments;
