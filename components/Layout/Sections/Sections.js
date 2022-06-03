import React from "react";
import Section from "./Section";
import {
  getUnseenVideos,
  filterVideosBasedOnGenre,
} from "../../../Services/utils";

const Sections = ({ videos }) => {
  return (
    <>
      <Section genre="Recommended for you" videos={getUnseenVideos(videos)} />
      <Section
        genre="Action"
        videos={filterVideosBasedOnGenre("action", videos)}
      />
      <Section
        genre="Adventure"
        videos={filterVideosBasedOnGenre("adventure", videos)}
      />
      <Section
        genre="Feel good"
        videos={filterVideosBasedOnGenre("feel good", videos)}
      />
      <Section
        genre="Disney"
        videos={filterVideosBasedOnGenre("disney", videos)}
      />
      <Section genre="Teen" videos={filterVideosBasedOnGenre("teen", videos)} />
      <Section
        genre="Family"
        videos={filterVideosBasedOnGenre("family", videos)}
      />
    </>
  );
};

export default Sections;
