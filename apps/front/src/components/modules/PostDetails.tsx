"use client";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { post } from "@/types/modelType";

import Image from "next/image";

type Props = {
  post: post;
};

const PostDetail = ({ post }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white mt-15 shadow-xl rounded-2xl overflow-hidden border"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden">
        <Image
          priority
          unoptimized
          width={1200}
          height={500}
          alt={post.title}
          src={post.thumbnail ?? "/default-thumbnail.jpg"}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>
            By <span className="font-medium">{post.author.name}</span>
          </span>
          <span>·</span>
          <span>{format(new Date(post.createdAt), "PPP")}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags?.map((tag) => (
            <Badge key={tag.id} variant="secondary" className="text-sm">
              {tag.name}
            </Badge>
          ))}
        </div>

        {/* Article Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {post.content}
        </p>

        {/* Button */}
        <div className="pt-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            ← Back
          </Button>
        </div>
      </div>
      {/* TODO Post Comments Here */}
    </motion.div>
  );
};

export default PostDetail;
