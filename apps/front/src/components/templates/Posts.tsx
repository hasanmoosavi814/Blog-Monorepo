import { post } from "@/types/modelType";

type Props = {
  posts: post[];
};

const Posts = (props: Props) => {
  return (
    <section>
      <h2 className="text-5xl font-bold text-center text-gray-600 leading-tight">
        Latest Posts
      </h2>
      <div className="h-1 mt-5 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-96 mb-9 rounded-t-md"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">post hear</div>
    </section>
  );
};

export default Posts;
