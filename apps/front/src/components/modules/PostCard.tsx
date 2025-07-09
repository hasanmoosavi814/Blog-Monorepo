import { post } from "@/types/modelType";
import Image from "next/image";
import Link from "next/link";

type Props = Partial<post>;

const PostCard = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}: Props) => {
  return (
    <Link
      href={`/blog/${slug}/${id}`}
      className="group block bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image section */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          fill
          unoptimized
          alt={title ?? "Post Image"}
          src={thumbnail ?? "/no-image.png"}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-center">
          {title}
        </h3>

        <p className="text-xs text-gray-400 mt-1 text-center">
          {new Date(createdAt ?? "").toLocaleDateString()}
        </p>

        <p className="mt-3 text-gray-600 text-sm line-clamp-3">
          {content?.slice(0, 150) ?? "No content available."}...
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
