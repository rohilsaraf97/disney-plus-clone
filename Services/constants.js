import { gql } from "graphql-request";

export const videoQuery = gql`
  query {
    videos {
      createdAt
      id
      thumbnail {
        url
      }
      mp4 {
        url
      }
      title
      description
      tags
      slug
      seen
    }
  }
`;

export const accountQuery = gql`
  query {
    account(where: { id: "cl3x2fz4oclfu0fpebb1hru2h" }) {
      username
      avatar {
        url
      }
    }
  }
`;
