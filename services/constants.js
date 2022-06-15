import { gql } from "graphql-request";
import disneyLogo from "../public/disney.png";
import marvelLogo from "../public/marvel-button.png";
import natGeoLogo from "../public/natgeo-button.png";
import pixarLogo from "../public/pixar.png";
import starWarsLogo from "../public/star-wars-button.png";

export const franchises = [
  {
    link: "#disney",
    logo: disneyLogo,
    id: "disney",
  },
  {
    link: "#marvel",
    logo: marvelLogo,
    id: "marvel",
  },
  {
    link: "#starwars",
    logo: starWarsLogo,
    id: "starwars",
  },
  {
    link: "#natgeo",
    logo: natGeoLogo,
    id: "natgeo",
  },
  {
    link: "#pixar",
    logo: pixarLogo,
    id: "pixar",
  },
];

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

export const slugQuery = gql`
  query ($pageSlug: String!) {
    video(where: { slug: $pageSlug }) {
      createdAt
      id
      title
      description
      tags
      seen
      slug
      thumbnail {
        url
      }
      mp4 {
        url
      }
    }
  }
`;

export const updateSeenMutation = gql`
  mutation ($slug: String!) {
    updateVideo(where: { slug: $slug }, data: { seen: true }) {
      id
      title
      seen
    }
  }
`;

export const publishMutation = gql`
  mutation publishVideo($slug: String) {
    publishVideo(where: { slug: $slug }, to: PUBLISHED) {
      slug
    }
  }
`;
