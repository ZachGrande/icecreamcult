type MusicPanelSize = 'SMALL' | 'LARGE';

interface MusicEntry {
  link: string;
  size: MusicPanelSize;
}

export default function Biography() {
  const music: MusicEntry[] = [
    {
      link: 'https://open.spotify.com/embed/album/1nzRs2GHnPgcvSRuZ8sJMM',
      size: 'SMALL'
    },
    {
      link: 'https://open.spotify.com/embed/album/3DHnvogihieK47w9WZ6S22',
      size: 'LARGE'
    }
  ];

  const sizeMapping: Record<MusicPanelSize, number> = {
    SMALL: 152,
    LARGE: 352
  }

  return (
    <>
      {music.map((song, index) => (
        <div
          key={index}
          className="w-full flex justify-center"
        >
          <iframe
            src={song.link}
            width="100%"
            height={sizeMapping[song.size]}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      ))}
    </>
  );
}