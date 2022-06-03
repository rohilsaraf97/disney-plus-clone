import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";
import NavBar from "../../components/Layout/NavBar/NavBar";
import playButton from "../../public/play-button.png";
import Button from "../../components/UI/Button";
import { slugQuery } from "../../Services/constants";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const gqlClient = new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT, {
    headers: {
      authorization: process.env.GRAPHQL_API_TOKEN,
    },
  });
  const variables = {
    pageSlug,
  };
  const data = await gqlClient.request(slugQuery, variables);
  const video = data.video;
  return {
    props: {
      video,
    },
  };
};

const changeToSeen = async (slug) => {
  await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
};

const Video = ({ video }) => {
  const [watching, setWatching] = useState(false);

  const videoPlayHandler = () => {
    changeToSeen(video.slug);
    setWatching(true);
  };
  return (
    <>
      {/* <NavBar /> */}
      <div className="video-page">
        {!watching ? (
          <>
            <div className="video-image-container" onClick={videoPlayHandler}>
              <img
                className="video-image"
                src={video.thumbnail.url}
                alt={video.title}
              />
            </div>

            <div className="play-button" onClick={videoPlayHandler}>
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
          <a href="/">
            <Button>Back</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Video;
