import Card from "../../UI/Card";

const Section = ({ genre, videos }) => {
  return (
    <div className="section">
      <h3>{genre}</h3>
      <div className="video-feed">
        {videos.map((video) => {
          return (
            <a href={`/video/${video.slug}`} key={video.id}>
              <Card thumbnail={video.thumbnail} title={video.title} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
