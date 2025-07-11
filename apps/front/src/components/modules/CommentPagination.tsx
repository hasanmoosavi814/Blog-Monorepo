"use client";

import { DEFAULT_PAGE_SIZE } from "@/utils/constant";
import { Button } from "@/components/ui/button";

type Props = {
  page: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

const CommentPagination = ({ page, totalCount, onPageChange }: Props) => {
  const totalPages = Math.ceil(totalCount / DEFAULT_PAGE_SIZE);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ← Previous
      </Button>

      <span className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="outline"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next →
      </Button>
    </div>
  );
};

export default CommentPagination;
