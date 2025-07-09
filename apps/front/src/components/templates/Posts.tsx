import { post } from "@/types/modelType";

import Pagination from "../modules/Pagination";
import PostCard from "../modules/PostCard";

type Props = {
  posts: post[];
  totalPages: number;
  currentPage: number;
};

const Posts = (props: Props) => {
  return (
    <section className="container m-8 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-gray-600 leading-tight">
        Latest Posts
      </h2>
      <div className="h-1 mt-5 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-96 mb-9 rounded-t-md"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <Pagination
        className="mt-4"
        totalPages={props.totalPages}
        currentPage={props.currentPage}
      />
    </section>
  );
};

export default Posts;
