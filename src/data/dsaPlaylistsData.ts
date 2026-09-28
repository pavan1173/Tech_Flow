import { VideoLecture } from './coreSubjectsData';
import { hyntsPlaylists } from './hyntsPlaylistsData';

export interface DsaVideoPlaylist {
  slug: string;
  title: string;
  instructor: string;
  channel: string;
  totalVideos: number;
  totalDuration: string;
  rating: number;
  badge: string;
  description: string;
  playlistUrl: string;
  notesUrl?: string | null;
  thumbnailType: string;
  lectures: VideoLecture[];
}

// Convert hynts DSA playlists to DsaVideoPlaylist format
const dsaFromHynts: DsaVideoPlaylist[] = hyntsPlaylists
  .filter((p) => p.category === 'dsa')
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    instructor: p.instructor,
    channel: p.channel,
    totalVideos: p.totalVideos,
    totalDuration: p.totalDuration,
    rating: p.rating,
    badge: p.badge,
    description: p.description,
    playlistUrl: p.playlistUrl,
    notesUrl: p.notesUrl || undefined,
    thumbnailType: p.thumbnailType,
    lectures: p.lectures.map((l) => ({
      id: l.id,
      title: l.title,
      duration: l.duration,
      youtubeId: l.youtubeId,
      videoUrl: l.videoUrl,
      notesUrl: l.notesUrl || undefined,
      tags: l.tags,
    })),
  }));

export const dsaPlaylistsList: DsaVideoPlaylist[] = dsaFromHynts.length > 0 ? dsaFromHynts : [
  {
    slug: 'love-babbar-dsa-playlist',
    title: 'Love Babbar DSA Interview Preparation Playlist',
    instructor: 'Love Babbar',
    channel: 'CodeHelp - by Babbar',
    totalVideos: 141,
    totalDuration: '125+ hrs',
    rating: 4.9,
    badge: 'Most Popular • C++',
    description: 'Complete Data Structures & Algorithms course in C++ by Love Babbar. Covering arrays, linked lists, binary search, trees, dynamic programming, graphs, tries, and segment trees.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
    thumbnailType: 'love-babbar',
    lectures: []
  },
  {
    slug: 'shradha-khapra-dsa-playlist',
    title: 'Shradha Khapra DSA Interview Preparation Playlist',
    instructor: 'Shradha Khapra',
    channel: 'Apna College',
    totalVideos: 122,
    totalDuration: '95+ hrs',
    rating: 4.9,
    badge: 'Java & C++ • FAANG Prep',
    description: 'Complete Data Structures & Algorithms course by Shradha Khapra (Apna College) for product companies and top tier tech roles.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvWPqTkUSlB32kJop',
    thumbnailType: 'shradha-khapra',
    lectures: []
  },
  {
    slug: 'rohit-negi-dsa-playlist',
    title: 'Rohit Negi DSA Interview Preparation Playlist',
    instructor: 'Rohit Negi',
    channel: 'Coder Army',
    totalVideos: 148,
    totalDuration: '145+ hrs',
    rating: 4.9,
    badge: 'Coder Army • 180 Days DSA',
    description: 'Deep conceptual and hands-on DSA mastery course by Rohit Negi (Ex-Uber, Gate AIR 202) covering memory models, recursion, trees, graphs, and DP.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklEEbOXGyxvm',
    thumbnailType: 'rohit-negi',
    lectures: []
  }
];
