"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { commentModel } from "@/types/modelType";
import { motion } from "framer-motion";
import { format } from "date-fns";

type Props = {
  comment: commentModel;
  index: number;
};

const CommentCard = ({ comment, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex gap-4 items-start border border-gray-200 p-4 rounded-xl bg-white shadow-sm"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={comment.author.avatar} />
        <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-semibold text-gray-800">{comment.author.name}</h4>
          <span className="text-xs text-gray-500">
            {format(new Date(comment.createdAt), "PPP")}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {comment.content}
        </p>
      </div>
    </motion.div>
  );
};

export default CommentCard;
