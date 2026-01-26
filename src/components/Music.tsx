type MusicPanelSize = 'SMALL' | 'LARGE';
type MusicPlatform = 'SPOTIFY' | 'BANDCAMP';

interface MusicEntry {
  link: string;
  size: MusicPanelSize;
  platform: MusicPlatform;
  title?: string;
  albumUrl?: string;
}

interface MusicProps {
  variant: 'bandcamp' | 'albums';
}

export default function Music({ variant }: MusicProps) {
  const bandcampMusic: MusicEntry[] = [
    {
      link: 'https://bandcamp.com/EmbeddedPlayer/album=3453182156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      size: 'LARGE',
      platform: 'BANDCAMP',
      title: 'Sunset Hills by Ice Cream Cult',
      albumUrl: 'https://icecreamcult.bandcamp.com/album/sunset-hills'
    },
  ];

  const albumMusic: MusicEntry[] = [
    {
      link: 'https://open.spotify.com/embed/album/1nzRs2GHnPgcvSRuZ8sJMM',
      size: 'SMALL',
      platform: 'SPOTIFY'
    },
    {
      link: 'https://open.spotify.com/embed/album/3DHnvogihieK47w9WZ6S22',
      size: 'LARGE',
      platform: 'SPOTIFY'
    },
    {
      link: 'https://open.spotify.com/embed/album/5jKD5PvNTnxhYYpPI3QsTK',
      size: 'LARGE',
      platform: 'SPOTIFY'
    }
  ];

  const music = variant === 'bandcamp' ? bandcampMusic : albumMusic;

  const sizeMapping: Record<MusicPlatform, Record<MusicPanelSize, number>> = {
    SPOTIFY: {
      SMALL: 152,
      LARGE: 352
    },
    BANDCAMP: {
      SMALL: 120,
      LARGE: 470
    }
  }

  return (
    <>
      {music.map((song, index) => (
        <div
          key={index}
          className="w-full flex justify-center"
        >
          {song.platform === 'BANDCAMP' ? (
            <iframe
              src={song.link}
              width="350px"
              height={sizeMapping[song.platform][song.size]}
              seamless
              style={{ border: 0 }}
              loading="lazy">
              <a href={song.albumUrl}>{song.title}</a>
            </iframe>
          ) : (
            <iframe
              src={song.link}
              width="100%"
              height={sizeMapping[song.platform][song.size]}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          )}
        </div>
      ))}
    </>
  );
}