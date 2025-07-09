import gql from "graphql-tag";

export const GET_POSTS = gql`
  query posts($skip: Float, $take: Float) {
    posts(skip: $skip, take: $take) {
      id
      slug
      title
      content
      createdAt
      thumbnail
    }
    postCount
  }
`;

export const GET_POST_BY_ID = gql`
  query getPostById($id: String!) {
    getPostById(id: $id) {
      id
      title
      content
      thumbnail
      createdAt
      author {
        name
      }
      tags {
        id
        name
      }
    }
  }
`;
