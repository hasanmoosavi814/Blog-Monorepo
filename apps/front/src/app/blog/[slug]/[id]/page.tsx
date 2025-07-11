import { fetchPostById } from "@/lib/postAction";

import PostComments from "@/components/modules/PostComments";
import PostDetail from "@/components/modules/PostDetails";

type Props = {
  params: {
    id: string;
  };
};

const GetPost = async ({ params }: Props) => {
  // ============= Params =================
  const paramsId = await params;
  const postId = paramsId.id;

  // ============= Fetch Data =================
  const post = await fetchPostById(postId);

  // ============= Rendering =================
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-500 via-white to-indigo-100">
      <div className="container max-w-4xl mx-auto px-4 py-10">
        <PostDetail post={post} />
      </div>
      {/* TODO: PUT the Post Comment Here*/}
      <PostComments postId={post.id} />
    </main>
  );
};

export default GetPost;
