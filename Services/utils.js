export const filterVideosBasedOnGenre = (genre, videos) => {
  return videos.filter((video) => video.tags.includes(genre));
};

export const getUnseenVideos = (videos) => {
  return videos.filter((video) => {
    return video.seen !== true;
  });
};
