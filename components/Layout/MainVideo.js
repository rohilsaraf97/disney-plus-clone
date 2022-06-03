import React from "react";

const MainVideo = ({ randomVideo }) => {
  return (
    <div className="main-video">
      <a href={`/video/${randomVideo.slug}`}>
        <img src={randomVideo.thumbnail.url} alt={randomVideo.title} />
      </a>
    </div>
  );
};

export default MainVideo;
