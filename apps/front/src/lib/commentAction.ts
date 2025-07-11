import { GET_POST_COMMENTS } from "./gqlQueries";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { commentModel } from "@/types/modelType";
import { print } from "graphql";

export const getPostComments = async ({
  postId,
  skip,
  take,
}: {
  postId: string;
  skip: number;
  take: number;
}) => {
  try {
    const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
      postId,
      take,
      skip,
    });
    return {
      comments: data.getPostComment as commentModel[],
      totalCount: data.postCommentCount as number,
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
