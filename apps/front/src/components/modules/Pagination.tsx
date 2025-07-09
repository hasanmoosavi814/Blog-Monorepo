import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { calculatePageNumbers } from "@/utils/helper";
import { TPaginationProps } from "@/types/modules";
import { cn } from "@/lib/utils";

import Link from "next/link";

const Pagination = ({
  className,
  totalPages,
  currentPage,
  pageNeighbors = 2,
}: TPaginationProps) => {
  // =========== Function ==============
  const pageNumbers = calculatePageNumbers({
    pageNeighbors,
    currentPage,
    totalPages,
  });

  // =========== Rendering ==============
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {currentPage !== 1 && (
        <button className={cn("rounded-md bg-slate-200 py-2 px-2")}>
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeftIcon className="w-4" />
          </Link>
        </button>
      )}
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={cn("px-3 py-1 rounded-md transition hover:text-sky-600", {
            "bg-slate-200": currentPage !== page && page !== "...",
            "bg-blue-500 text-white": currentPage === page,
            "cursor-not-allowed": page === "...",
          })}
        >
          {page === "..." ? "..." : <Link href={`?page=${page}`}>{page}</Link>}
        </button>
      ))}

      {/* Next Page Btn */}
      {currentPage !== totalPages && (
        <button className="rounded-md bg-slate-200 py-2 px-2">
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRightIcon className="w-4" />
          </Link>
        </button>
      )}
    </div>
  );
};

export default Pagination;
