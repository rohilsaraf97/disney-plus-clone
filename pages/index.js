import React from "react";
import { GraphQLClient } from "graphql-request";
import Sections from "../components/Layout/Sections/Sections";
import NavBar from "../components/Layout/NavBar/NavBar";
import MainVideo from "../components/Layout/MainVideo";
import { accountQuery, videoQuery } from "../Services/constants";

export const getStaticProps = async () => {
  const gqlClient = new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT, {
    headers: {
      authorization: process.env.GRAPHQL_API_TOKEN,
    },
  });
  const data = await gqlClient.request(videoQuery);
  const accountData = await gqlClient.request(accountQuery);
  const videos = data.videos;
  const accountDetails = accountData.account;
  return {
    props: {
      videos,
      accountDetails,
    },
  };
};

const Home = ({ videos, accountDetails }) => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  return (
    <div className="app">
      <NavBar account={accountDetails} />
      <MainVideo randomVideo={randomVideo} />
      <Sections videos={videos} />
    </div>
  );
};

export default Home;
