import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import NavBar from "../../components/Layout/NavBar/NavBar";
import playButton from "../../public/play-button.png";
import Button from "../../components/UI/Button";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const gqlClient = new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT, {
    headers: {
      authorization: process.env.GRAPHQL_API_TOKEN,
    },
  });
  const query = gql`
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
  const variables = {
    pageSlug,
  };
  const data = await gqlClient.request(query, variables);
  const video = data.video;
  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }) => {
  const [watching, setWatching] = useState(false);
  return (
    <>
      <NavBar />
      <div className="video-page">
        {!watching ? (
          <>
            <div
              className="video-image-container"
              onClick={() => setWatching(true)}
            >
              <img
                className="video-image"
                src={video.thumbnail.url}
                alt={video.title}
              />
            </div>

            <div className="play-button" onClick={() => setWatching(true)}>
              <Image
                src={playButton}
                alt="play button"
                width={100}
                height={100}
              />
            </div>
          </>
        ) : (
          <div className="video-image-container">
            <video className="video-image video-div" controls autoPlay>
              <source src={video.mp4.url} type="video/mp4" />
            </video>
          </div>
        )}

        <div className="video-info">
          <h3>{video.title}</h3>
          <p className="video-tags">
            {video.tags
              .map(
                (tag) => tag.charAt(0).toLocaleUpperCase() + tag.substring(1)
              )
              .join(" • ")}
          </p>
          <p className="video-description">{video.description}</p>
          <Button>
            <Link href="/">Back</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Video;
