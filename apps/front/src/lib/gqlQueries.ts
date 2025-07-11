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

export const CREATE_USER_MUTATION = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      id
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation signIn($input: SignInInput!) {
    signIn(signInInput: $input) {
      id
      name
      avatar
      accessToken
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: String!, $take: Int, $skip: Int) {
    getPostComment(postId: $postId, take: $take, skip: $skip) {
      id
      content
      createdAt
      author {
        name
        avatar
      }
    }
    postCommentCount(postId: $postId)
  }
`;
