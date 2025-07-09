import { fetchPostById } from "@/lib/postAction";
import PostDetail from "@/components/modules/PostDetails";

type Props = {
  params: {
    id: string;
  };
};

const GetPost = async ({ params }: Props) => {
  const paramsId = await params;
  const postId = paramsId.id;
  const post = await fetchPostById(postId);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-500 via-white to-indigo-100">
      <div className="container max-w-4xl mx-auto px-4 py-10">
        <PostDetail post={post} />
      </div>
    </main>
  );
};

export default GetPost;
