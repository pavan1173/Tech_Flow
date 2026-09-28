import { VideoLecture } from './coreSubjectsData';

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
  notesUrl?: string;
  thumbnailType: string;
  lectures: VideoLecture[];
}

export const dsaPlaylistsList: DsaVideoPlaylist[] = [
  {
    slug: 'love-babbar-dsa',
    title: 'Love Babbar 140+ Days DSA Complete Placement Series',
    instructor: 'Love Babbar',
    channel: 'CodeHelp - by Babbar',
    totalVideos: 148,
    totalDuration: '120 hrs',
    rating: 4.9,
    badge: 'Most Popular',
    description: 'Complete Data Structures & Algorithms course in C++ by Love Babbar. From basics of programming to advanced dynamic programming, graphs, tries, and segment trees.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA',
    thumbnailType: 'love-babbar',
    lectures: [
      {
        id: 1,
        title: 'Lecture 1: Flowcharts & Pseudocode in Programming',
        duration: '35:20',
        youtubeId: 'WQoB2z67hvY',
        videoUrl: 'https://www.youtube.com/watch?v=WQoB2z67hvY',
        tags: ['Flowcharts', 'Basics']
      },
      {
        id: 2,
        title: 'Lecture 2: Write Your First C++ Program & Data Types',
        duration: '42:15',
        youtubeId: 't6zLkgp4HmA',
        videoUrl: 'https://www.youtube.com/watch?v=t6zLkgp4HmA',
        tags: ['C++', 'Data Types']
      },
      {
        id: 3,
        title: 'Lecture 3: If-Else, While Loop & Patterns (Part 1)',
        duration: '48:30',
        youtubeId: 'wr49p_61Q98',
        videoUrl: 'https://www.youtube.com/watch?v=wr49p_61Q98',
        tags: ['Loops', 'Patterns']
      }
    ]
  },
  {
    slug: 'shradha-khapra-dsa',
    title: 'Shradha Khapra Complete Java DSA Placement Series (Apna College)',
    instructor: 'Shradha Khapra',
    channel: 'Apna College',
    totalVideos: 65,
    totalDuration: '55 hrs',
    rating: 4.9,
    badge: 'Java DSA',
    description: 'Complete Data Structures & Algorithms in Java for product companies and FAANG interviews by Shradha Khapra.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvWPqTkUSlB32kJop',
    thumbnailType: 'shradha-khapra',
    lectures: [
      {
        id: 1,
        title: 'Lecture 1: Introduction to Java & Flowcharts',
        duration: '38:15',
        youtubeId: 'yRpLlJmRo2w',
        videoUrl: 'https://www.youtube.com/watch?v=yRpLlJmRo2w',
        tags: ['Java', 'Basics']
      },
      {
        id: 2,
        title: 'Lecture 2: Variables & Data Types in Java',
        duration: '41:20',
        youtubeId: 'lus5yUqR158',
        videoUrl: 'https://www.youtube.com/watch?v=lus5yUqR158',
        tags: ['Variables', 'Java']
      }
    ]
  },
  {
    slug: 'rohit-negi-dsa',
    title: 'Rohit Negi Coder Army Complete C++ DSA Course',
    instructor: 'Rohit Negi',
    channel: 'Coder Army',
    totalVideos: 180,
    totalDuration: '140 hrs',
    rating: 4.9,
    badge: 'Comprehensive',
    description: 'Deep conceptual and hands-on DSA mastery course by Rohit Negi (Ex-Uber, Gate AIR 202) covering memory models, pointers, recursion, trees, graphs, and DP.',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklEEbOXGyxvm',
    thumbnailType: 'rohit-negi',
    lectures: [
      {
        id: 1,
        title: 'Lecture 1: Introduction to Programming & Computer Architecture',
        duration: '45:10',
        youtubeId: 'z9bZufPHFLU',
        videoUrl: 'https://www.youtube.com/watch?v=z9bZufPHFLU',
        tags: ['Architecture', 'C++']
      },
      {
        id: 2,
        title: 'Lecture 2: Memory Management & Pointers Deep Dive',
        duration: '52:40',
        youtubeId: 'K_57j3bQ18k',
        videoUrl: 'https://www.youtube.com/watch?v=K_57j3bQ18k',
        tags: ['Memory', 'Pointers']
      }
    ]
  }
];
