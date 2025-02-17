export default function Biography() {
  const videos = [
    {
      title: 'Ice Cream Cult @ High Dive Sep 4th 2024',
      link: 'https://www.youtube.com/embed/KvFpgUYCqjk',
    },
    {
      title: 'icecreamcult @ High Dive dec 5th 2024',
      link: 'https://www.youtube.com/embed/jff9ZMwOzm8',
    },
  ];

  return (
    <>
      {videos.map((video, index) => (
        <div
          key={index}
          className="w-full flex justify-center"
        >
          <iframe
            title={video.title}
            src={video.link}
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ))}
    </>
  );
}