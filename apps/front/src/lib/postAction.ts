import { GET_POST_BY_ID, GET_POSTS } from "./gqlQueries";
import { transformTakeSkip } from "@/utils/helper";
import { fetchGraphQL } from "./fetchGraphQL";
import { print } from "graphql";
import { post } from "@/types/modelType";

export const fetchPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { skip, take } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_POSTS), { skip, take });
  return { posts: data.posts as post[], totalPosts: data.postCount };
};

export const fetchPostById = async (id: string) => {
  const data = await fetchGraphQL(print(GET_POST_BY_ID), { id });
  return data.getPostById as post;
};
