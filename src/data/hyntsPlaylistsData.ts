// Authentic playlists data scraped and parsed from hynts.in
export interface PlaylistVideo {
  id: number;
  index: number;
  title: string;
  duration: string;
  youtubeId: string;
  videoUrl: string;
  sectionTitle: string;
  tags?: string[];
  problemUrl?: string | null;
  notesUrl?: string | null;
}

export interface PlaylistSection {
  title: string;
  videosCount: number;
  videos: PlaylistVideo[];
}

export interface HyntsPlaylist {
  slug: string;
  title: string;
  category: 'dsa' | 'dbms' | 'os' | 'oops' | 'system-design';
  instructor: string;
  channel: string;
  totalVideos: number;
  totalDuration: string;
  rating: number;
  badge: string;
  description: string;
  playlistUrl: string;
  thumbnailType: string;
  notesUrl?: string | null;
  sections: PlaylistSection[];
  lectures: PlaylistVideo[];
}

export const hyntsPlaylists: HyntsPlaylist[] = [
  {
    "slug": "love-babbar-dsa-playlist",
    "title": "Love Babbar DSA Interview Preparation Playlist",
    "category": "dsa",
    "instructor": "Love Babbar",
    "channel": "CodeHelp - by Babbar",
    "totalVideos": 141,
    "totalDuration": "125+ hrs",
    "rating": 4.9,
    "badge": "Most Popular \u2022 C++",
    "description": "The Complete C++ Placement DSA Course by Love Babbar is your comprehensive guide to cracking coding interviews. It covers fundamental C++ concepts, including arrays, searching, and sorting, before diving deep into advanced Data Structures like Linked Lists, Stacks, Queues, Binary Trees, Binary Search Trees, Heaps, Hashmaps, and Tries. The course culminates with essential algorithms in Recursion, Backtracking, Graphs, and Dynamic Programming, ensuring you're fully prepared for technical roles.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    "thumbnailType": "love-babbar",
    "sections": [
      {
        "title": "C++ Basics, Flowcharts & Core Concepts",
        "videosCount": 10,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Intro to Programming & Flowcharts",
            "duration": "35-60 min",
            "youtubeId": "WQoB2z67hvY",
            "videoUrl": "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=1",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Write Your First Program in C++",
            "duration": "35-60 min",
            "youtubeId": "t6zLJOCVqD0",
            "videoUrl": "https://www.youtube.com/watch?v=t6zLJOCVqD0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=2",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "If-Else, While loop & Lots of Patterns (Part-1)",
            "duration": "35-60 min",
            "youtubeId": "WR31ByTzAVQ",
            "videoUrl": "https://www.youtube.com/watch?v=WR31ByTzAVQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=3",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "Solving Pattern Questions (Part-2)",
            "duration": "35-60 min",
            "youtubeId": "dr-pLeJBr38",
            "videoUrl": "https://www.youtube.com/watch?v=dr-pLeJBr38&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=4",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solving-pattern-questions-part-2"
          },
          {
            "id": 5,
            "index": 5,
            "title": "Bitwise Operators, For Loops, Operator Precedence & Variable Scoping",
            "duration": "35-60 min",
            "youtubeId": "yjdQHb2elqI",
            "videoUrl": "https://www.youtube.com/watch?v=yjdQHb2elqI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=5",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Binary & Decimal Number System",
            "duration": "35-60 min",
            "youtubeId": "bWrsk0QizEk",
            "videoUrl": "https://www.youtube.com/watch?v=bWrsk0QizEk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=6",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 8,
            "title": "Switch Statement & Functions",
            "duration": "35-60 min",
            "youtubeId": "8nNqk2NPbRA",
            "videoUrl": "https://www.youtube.com/watch?v=8nNqk2NPbRA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=8",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 19,
            "title": "C++ STL in 1 Video (Re-Uploaded)",
            "duration": "35-60 min",
            "youtubeId": "WgMPrLX-zsA",
            "videoUrl": "https://www.youtube.com/watch?v=WgMPrLX-zsA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=20",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 26,
            "title": "Basic Maths for DSA || Sieve || Modular Arithmetics || Euclid\u2019s Algorithm",
            "duration": "35-60 min",
            "youtubeId": "KdePjukNs98",
            "videoUrl": "https://www.youtube.com/watch?v=KdePjukNs98&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=26",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 33,
            "title": "Macros, Global Variables, Inline Functions & Default Args",
            "duration": "35-60 min",
            "youtubeId": "0TEvaAiqo8Y",
            "videoUrl": "https://www.youtube.com/watch?v=0TEvaAiqo8Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=33",
            "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
            "tags": [
              "C++",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Arrays & Searching/Sorting",
        "videosCount": 15,
        "videos": [
          {
            "id": 11,
            "index": 7,
            "title": "LeetCode Problem Solving Session",
            "duration": "35-60 min",
            "youtubeId": "0fwrMYPcGQ0",
            "videoUrl": "https://www.youtube.com/watch?v=0fwrMYPcGQ0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=7",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=leetcode-problem-solving-session"
          },
          {
            "id": 12,
            "index": 9,
            "title": "Introduction to Arrays in C++",
            "duration": "35-60 min",
            "youtubeId": "sNrLlmOIn-c",
            "videoUrl": "https://www.youtube.com/watch?v=sNrLlmOIn-c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=9",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 10,
            "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
            "duration": "35-60 min",
            "youtubeId": "oVa8DfUDKTw",
            "videoUrl": "https://www.youtube.com/watch?v=oVa8DfUDKTw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=10",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
          },
          {
            "id": 14,
            "index": 11,
            "title": "Time & Space Complexity || How to avoid Time Limit Exceeded [TLE]",
            "duration": "35-60 min",
            "youtubeId": "QovOdd80A4s",
            "videoUrl": "https://www.youtube.com/watch?v=QovOdd80A4s&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=11",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 12,
            "title": "Binary Search Explained in 1 Video [Theory + Code]",
            "duration": "35-60 min",
            "youtubeId": "YJeoQBevNVo",
            "videoUrl": "https://www.youtube.com/watch?v=YJeoQBevNVo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=12",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 13,
            "title": "Binary Search Interview Questions [Google, Amazon, Microsoft] || ProblemSet - 1",
            "duration": "35-60 min",
            "youtubeId": "zD2Jg3alZV8",
            "videoUrl": "https://www.youtube.com/watch?v=zD2Jg3alZV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=13",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-interview-questions-google-amazon-microsoft-problemset-1"
          },
          {
            "id": 17,
            "index": 14,
            "title": "Binary Search Interview Questions [Google, Amazon, Microsoft] || ProblemSet - 2",
            "duration": "35-60 min",
            "youtubeId": "6z2HK4o8qcU",
            "videoUrl": "https://www.youtube.com/watch?v=6z2HK4o8qcU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=14",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-interview-questions-google-amazon-microsoft-problemset-2"
          },
          {
            "id": 18,
            "index": 15,
            "title": "Book Allocation Problem || Aggressive Cows Problem || Binary Search Advanced Problems",
            "duration": "35-60 min",
            "youtubeId": "YTTdLgyqOLY",
            "videoUrl": "https://www.youtube.com/watch?v=YTTdLgyqOLY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=15",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=book-allocation-problem-aggressive-cows-problem-binary-search-advanced-problems"
          },
          {
            "id": 19,
            "index": 16,
            "title": "Selection Sort [Theory + Code] || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "UdO2NeHB46c",
            "videoUrl": "https://www.youtube.com/watch?v=UdO2NeHB46c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=16",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 18,
            "title": "BUBBLE SORT in 1 Video [Theory + Optimised Code] || Best/Worst Case Complexity",
            "duration": "35-60 min",
            "youtubeId": "zOhUavxlzw4",
            "videoUrl": "https://www.youtube.com/watch?v=zOhUavxlzw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=18",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 19,
            "title": "INSERTION SORT in 1 Video [Theory + Code] || Best/Worst Case Complexity",
            "duration": "35-60 min",
            "youtubeId": "7kIVfVY6Axk",
            "videoUrl": "https://www.youtube.com/watch?v=7kIVfVY6Axk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=19",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 21,
            "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
            "duration": "35-60 min",
            "youtubeId": "MPvr-LmaZmA",
            "videoUrl": "https://www.youtube.com/watch?v=MPvr-LmaZmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=21",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
          },
          {
            "id": 23,
            "index": 22,
            "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
            "duration": "35-60 min",
            "youtubeId": "Z7_nMTHROZo",
            "videoUrl": "https://www.youtube.com/watch?v=Z7_nMTHROZo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=22",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
          },
          {
            "id": 24,
            "index": 24,
            "title": "All about Char Arrays, Strings & solving LeetCode Questions",
            "duration": "35-60 min",
            "youtubeId": "Wdjr6uoZ0e0",
            "videoUrl": "https://www.youtube.com/watch?v=Wdjr6uoZ0e0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=24",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=all-about-char-arrays-strings-solving-leetcode-questions"
          },
          {
            "id": 25,
            "index": 25,
            "title": "Introduction to 2D Arrays in C++ || LeetCode Questions",
            "duration": "35-60 min",
            "youtubeId": "1CdolnvxLs0",
            "videoUrl": "https://www.youtube.com/watch?v=1CdolnvxLs0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=25",
            "sectionTitle": "Arrays & Searching/Sorting",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=introduction-to-2d-arrays-in-c-leetcode-questions"
          }
        ]
      },
      {
        "title": "Pointers & Dynamic Memory Allocation",
        "videosCount": 5,
        "videos": [
          {
            "id": 26,
            "index": 28,
            "title": "Pointers in C++ || Part-1 || DSA Placement Course - Love Babbar",
            "duration": "35-60 min",
            "youtubeId": "YHwEIfrXZgE",
            "videoUrl": "https://www.youtube.com/watch?v=YHwEIfrXZgE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=28",
            "sectionTitle": "Pointers & Dynamic Memory Allocation",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 29,
            "title": "Pointers in C++ || Part-2 || DSA Placement Course - Love Babbar",
            "duration": "35-60 min",
            "youtubeId": "rlpw7oi-bpE",
            "videoUrl": "https://www.youtube.com/watch?v=rlpw7oi-bpE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=29",
            "sectionTitle": "Pointers & Dynamic Memory Allocation",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 30,
            "title": "Double Pointers in C++ || Pointers Practice MCQs",
            "duration": "35-60 min",
            "youtubeId": "P0UsAxtXq2Y",
            "videoUrl": "https://www.youtube.com/watch?v=P0UsAxtXq2Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=30",
            "sectionTitle": "Pointers & Dynamic Memory Allocation",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 31,
            "title": "Reference Variable | Static vs Dynamic Memory | Part-1",
            "duration": "35-60 min",
            "youtubeId": "MMO2c57XHzM",
            "videoUrl": "https://www.youtube.com/watch?v=MMO2c57XHzM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=31",
            "sectionTitle": "Pointers & Dynamic Memory Allocation",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 32,
            "title": "Dynamic Memory Allocation of 2D Arrays",
            "duration": "35-60 min",
            "youtubeId": "LlqgWQgm58g",
            "videoUrl": "https://www.youtube.com/watch?v=LlqgWQgm58g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=32",
            "sectionTitle": "Pointers & Dynamic Memory Allocation",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Recursion & Backtracking",
        "videosCount": 11,
        "videos": [
          {
            "id": 31,
            "index": 34,
            "title": "Learning Recursion the Best Way! | 10 Day Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "_-2u4EPHD88",
            "videoUrl": "https://www.youtube.com/watch?v=_-2u4EPHD88&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=34",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 35,
            "title": "Understanding Recursion the easiest way || Day-2 || 10 Day Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "zg8Y1oE4qYQ",
            "videoUrl": "https://www.youtube.com/watch?v=zg8Y1oE4qYQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=35",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 36,
            "title": "Recursion and Binary Search | Day-3 | 10 Days Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "UntSI7G5h20",
            "videoUrl": "https://www.youtube.com/watch?v=UntSI7G5h20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=36",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 37,
            "title": "Recursion with Strings | Day-4 | 10 Day Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "WyY2Af3k1xI",
            "videoUrl": "https://www.youtube.com/watch?v=WyY2Af3k1xI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=37",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 35,
            "index": 38,
            "title": "Merge Sort using Recursion | Day-5 | 10 Day Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "cdHEpbBVjRM",
            "videoUrl": "https://www.youtube.com/watch?v=cdHEpbBVjRM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=38",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 40,
            "title": "Quick Sort using Recursion | Day-6 | 10 Day Recursion Challenge",
            "duration": "35-60 min",
            "youtubeId": "sNaHN4tZmRk",
            "videoUrl": "https://www.youtube.com/watch?v=sNaHN4tZmRk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=40",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 41,
            "title": "Recursion - Subsets / Subsequences of String [Theory + Code]",
            "duration": "35-60 min",
            "youtubeId": "V0IgCltYgg4",
            "videoUrl": "https://www.youtube.com/watch?v=V0IgCltYgg4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=41",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 38,
            "index": 42,
            "title": "Phone Keypad Problem Recursion || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "tWnHbSHwNmA",
            "videoUrl": "https://www.youtube.com/watch?v=tWnHbSHwNmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=42",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=phone-keypad-problem-recursion-c-placement-course"
          },
          {
            "id": 39,
            "index": 43,
            "title": "Permutations of a String || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "va3NEycUxsg",
            "videoUrl": "https://www.youtube.com/watch?v=va3NEycUxsg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=43",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 40,
            "index": 44,
            "title": "Rat in a Maze Problem || C++ Placement Course 2022",
            "duration": "35-60 min",
            "youtubeId": "GqtyVD-x_jY",
            "videoUrl": "https://www.youtube.com/watch?v=GqtyVD-x_jY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=44",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=rat-in-a-maze-problem-c-placement-course-2022"
          },
          {
            "id": 41,
            "index": 45,
            "title": "Time & Space Complexity of Recursive Algorithms || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "BYCeh76OASc",
            "videoUrl": "https://www.youtube.com/watch?v=BYCeh76OASc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=45",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Object-Oriented Programming (OOPs)",
        "videosCount": 2,
        "videos": [
          {
            "id": 42,
            "index": 46,
            "title": "OOPs Concepts in C++ || Part-1",
            "duration": "35-60 min",
            "youtubeId": "i_5pvt7ag7E",
            "videoUrl": "https://www.youtube.com/watch?v=i_5pvt7ag7E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=46",
            "sectionTitle": "Object-Oriented Programming (OOPs)",
            "tags": [
              "Object-Oriented",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 43,
            "index": 47,
            "title": "4 Pillars of OOPs Concept -Inheritance, Polymorphism, Encapsulation & Abstraction",
            "duration": "35-60 min",
            "youtubeId": "b3GccK5_KSQ",
            "videoUrl": "https://www.youtube.com/watch?v=b3GccK5_KSQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=47",
            "sectionTitle": "Object-Oriented Programming (OOPs)",
            "tags": [
              "Object-Oriented",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Linked Lists",
        "videosCount": 10,
        "videos": [
          {
            "id": 44,
            "index": 48,
            "title": "Linked List & its types - Singly, Doubly, Circular etc.",
            "duration": "35-60 min",
            "youtubeId": "q8gdBn9RPeI",
            "videoUrl": "https://www.youtube.com/watch?v=q8gdBn9RPeI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=48",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 45,
            "index": 49,
            "title": "Linked List Questions: Reverse LL and find Middle of LL",
            "duration": "35-60 min",
            "youtubeId": "vqS1nVQdCJM",
            "videoUrl": "https://www.youtube.com/watch?v=vqS1nVQdCJM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=49",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-questions-reverse-ll-and-find-middle-of-ll"
          },
          {
            "id": 46,
            "index": 51,
            "title": "Linked List Questions: Reverse LL in \"K group\" && Check LL is Circular or not",
            "duration": "35-60 min",
            "youtubeId": "fi2vh0nQLi0",
            "videoUrl": "https://www.youtube.com/watch?v=fi2vh0nQLi0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=51",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-questions-reverse-ll-in-k-group-check-ll-is-circular-or-not"
          },
          {
            "id": 47,
            "index": 52,
            "title": "Detect & Remove Loop in Linked List [Approach Discussion + Optimised Implementation]",
            "duration": "35-60 min",
            "youtubeId": "VxOFflTXlXo",
            "videoUrl": "https://www.youtube.com/watch?v=VxOFflTXlXo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=52",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 48,
            "index": 53,
            "title": "Remove Duplicates from a Sorted/UnSorted Linked List",
            "duration": "35-60 min",
            "youtubeId": "7pgs-wT5d4c",
            "videoUrl": "https://www.youtube.com/watch?v=7pgs-wT5d4c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=53",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 49,
            "index": 54,
            "title": "Merge 2 Sorted Linked Lists || Sort 0s, 1s and 2s in Linked List",
            "duration": "35-60 min",
            "youtubeId": "ogmBt6f9hw8",
            "videoUrl": "https://www.youtube.com/watch?v=ogmBt6f9hw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=54",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 50,
            "index": 55,
            "title": "Check Palindrome in Linked List || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "aD7mBVnKFEU",
            "videoUrl": "https://www.youtube.com/watch?v=aD7mBVnKFEU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=55",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 51,
            "index": 56,
            "title": "Add 2 Numbers represented by Linked Lists || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "HiRlTPf9aCg",
            "videoUrl": "https://www.youtube.com/watch?v=HiRlTPf9aCg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=56",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 52,
            "index": 57,
            "title": "Clone a Linked List with Random Pointers || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "83mPr0i56Gg",
            "videoUrl": "https://www.youtube.com/watch?v=83mPr0i56Gg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=57",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 53,
            "index": 58,
            "title": "Merge Sort in Linked List [ Theory + Implementation ]",
            "duration": "35-60 min",
            "youtubeId": "rM5EEA_rbNY",
            "videoUrl": "https://www.youtube.com/watch?v=rM5EEA_rbNY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=58",
            "sectionTitle": "Linked Lists",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Stacks & Queues",
        "videosCount": 8,
        "videos": [
          {
            "id": 54,
            "index": 59,
            "title": "Introduction to Stacks [Theory + Implementation] || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "_6COl6V6mng",
            "videoUrl": "https://www.youtube.com/watch?v=_6COl6V6mng&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=59",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 55,
            "index": 60,
            "title": "Stack Interview Questions || Placement Series by Love Babbar",
            "duration": "35-60 min",
            "youtubeId": "BmZnJehDzyU",
            "videoUrl": "https://www.youtube.com/watch?v=BmZnJehDzyU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=60",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-interview-questions-placement-series-by-love-babbar"
          },
          {
            "id": 56,
            "index": 61,
            "title": "Largest Rectangular Area in Histogram [Optimised Approach]",
            "duration": "35-60 min",
            "youtubeId": "lJLcqDsmYfg",
            "videoUrl": "https://www.youtube.com/watch?v=lJLcqDsmYfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=61",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 57,
            "index": 62,
            "title": "Stack - Celebrity Problem && Max Rectangle in Binary Matrix with all 1's",
            "duration": "35-60 min",
            "youtubeId": "9u2BJfmWNEg",
            "videoUrl": "https://www.youtube.com/watch?v=9u2BJfmWNEg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=62",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-celebrity-problem-max-rectangle-in-binary-matrix-with-all-1-s"
          },
          {
            "id": 58,
            "index": 63,
            "title": "\"N\" Stacks in an Array || Stack Hard Question",
            "duration": "35-60 min",
            "youtubeId": "lrSXKLmnMV8",
            "videoUrl": "https://www.youtube.com/watch?v=lrSXKLmnMV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=63",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=n-stacks-in-an-array-stack-hard-question"
          },
          {
            "id": 59,
            "index": 64,
            "title": "Design Special Stack Problem || C++ Placement Course",
            "duration": "35-60 min",
            "youtubeId": "OpwYmEBcPh0",
            "videoUrl": "https://www.youtube.com/watch?v=OpwYmEBcPh0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=64",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=design-special-stack-problem-c-placement-course"
          },
          {
            "id": 60,
            "index": 65,
            "title": "Queues in C++ [STL + Implementation + Types of Queues ]",
            "duration": "35-60 min",
            "youtubeId": "W7uB9-TKfTg",
            "videoUrl": "https://www.youtube.com/watch?v=W7uB9-TKfTg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=65",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 61,
            "index": 66,
            "title": "Queue FAANG Interview Questions || Placement Series by Love Babbar",
            "duration": "35-60 min",
            "youtubeId": "_gJ3to4RyeQ",
            "videoUrl": "https://www.youtube.com/watch?v=_gJ3to4RyeQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=66",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=queue-faang-interview-questions-placement-series-by-love-babbar"
          }
        ]
      },
      {
        "title": "Binary Trees, BST & Heaps",
        "videosCount": 16,
        "videos": [
          {
            "id": 62,
            "index": 67,
            "title": "Binary Trees & its Representation || Different types of Traversals",
            "duration": "35-60 min",
            "youtubeId": "5NiXlPrLslg",
            "videoUrl": "https://www.youtube.com/watch?v=5NiXlPrLslg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=67",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 63,
            "index": 69,
            "title": "Binary Tree FAANG Interview Questions || Part-1",
            "duration": "35-60 min",
            "youtubeId": "nHMQ33LZ6oA",
            "videoUrl": "https://www.youtube.com/watch?v=nHMQ33LZ6oA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=69",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-1"
          },
          {
            "id": 64,
            "index": 70,
            "title": "Binary Tree FAANG Interview Questions || Part-2",
            "duration": "35-60 min",
            "youtubeId": "s1d8UGDCCN8",
            "videoUrl": "https://www.youtube.com/watch?v=s1d8UGDCCN8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=70",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-2"
          },
          {
            "id": 65,
            "index": 71,
            "title": "Binary Tree FAANG Interview Questions || Part-3",
            "duration": "35-60 min",
            "youtubeId": "QG0hE0R_ng4",
            "videoUrl": "https://www.youtube.com/watch?v=QG0hE0R_ng4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=71",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-3"
          },
          {
            "id": 66,
            "index": 72,
            "title": "Construct a Binary Tree from InOrder/PreOrder/PostOrder Traversal",
            "duration": "35-60 min",
            "youtubeId": "ffE1xj51EBQ",
            "videoUrl": "https://www.youtube.com/watch?v=ffE1xj51EBQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=72",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 67,
            "index": 73,
            "title": "Minimum Time to BURN the Entire Binary Tree || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "XLdpy0_6MR4",
            "videoUrl": "https://www.youtube.com/watch?v=XLdpy0_6MR4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=73",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 68,
            "index": 74,
            "title": "Morris Traversal || Flatten a Binary tree to Linked List || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "2BdY9fixMrM",
            "videoUrl": "https://www.youtube.com/watch?v=2BdY9fixMrM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=74",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 69,
            "index": 75,
            "title": "Binary Search Tree & its Implementation || Insertion, Deletion & Searching a Node",
            "duration": "35-60 min",
            "youtubeId": "UeRUKRJvPa4",
            "videoUrl": "https://www.youtube.com/watch?v=UeRUKRJvPa4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=75",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 70,
            "index": 76,
            "title": "Binary SearchTree FAANG Interview Questions || Part-1",
            "duration": "35-60 min",
            "youtubeId": "pDURIj98e0I",
            "videoUrl": "https://www.youtube.com/watch?v=pDURIj98e0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=76",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-searchtree-faang-interview-questions-part-1"
          },
          {
            "id": 71,
            "index": 77,
            "title": "Binary SearchTree FAANG Interview Questions || Part-2",
            "duration": "35-60 min",
            "youtubeId": "IGHyX15fLI8",
            "videoUrl": "https://www.youtube.com/watch?v=IGHyX15fLI8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=77",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-searchtree-faang-interview-questions-part-2"
          },
          {
            "id": 72,
            "index": 78,
            "title": "Merge 2 Binary Search Trees || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "18w8VduomfI",
            "videoUrl": "https://www.youtube.com/watch?v=18w8VduomfI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=78",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 73,
            "index": 79,
            "title": "Largest BST in a Binary Tree || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "fqx8z3VepMA",
            "videoUrl": "https://www.youtube.com/watch?v=fqx8z3VepMA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=79",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 74,
            "index": 80,
            "title": "Heaps in C++ || Heap Sort || Insertion/Deletion in Heap || Priority Queue STL",
            "duration": "35-60 min",
            "youtubeId": "NKJnHewiGdc",
            "videoUrl": "https://www.youtube.com/watch?v=NKJnHewiGdc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=80",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 75,
            "index": 81,
            "title": "Heaps in C++ || Interview Questions || Part - 1",
            "duration": "35-60 min",
            "youtubeId": "_9F2VgZcvdw",
            "videoUrl": "https://www.youtube.com/watch?v=_9F2VgZcvdw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=81",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-in-c-interview-questions-part-1"
          },
          {
            "id": 76,
            "index": 83,
            "title": "Heaps in C++ || Interview Questions || Part - 2",
            "duration": "35-60 min",
            "youtubeId": "eccAKrmffh8",
            "videoUrl": "https://www.youtube.com/watch?v=eccAKrmffh8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=83",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-in-c-interview-questions-part-2"
          },
          {
            "id": 77,
            "index": 84,
            "title": "Heaps Hard Interview Questions || Part - 3",
            "duration": "35-60 min",
            "youtubeId": "RrxpTWqj97A",
            "videoUrl": "https://www.youtube.com/watch?v=RrxpTWqj97A&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=84",
            "sectionTitle": "Binary Trees, BST & Heaps",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-hard-interview-questions-part-3"
          }
        ]
      },
      {
        "title": "Hashmaps & Tries",
        "videosCount": 4,
        "videos": [
          {
            "id": 78,
            "index": 85,
            "title": "Hashmaps in C++ || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "7mUKGHznpfg",
            "videoUrl": "https://www.youtube.com/watch?v=7mUKGHznpfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=85",
            "sectionTitle": "Hashmaps & Tries",
            "tags": [
              "Hashmaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 79,
            "index": 87,
            "title": "Trie & its Implementation || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "Y6dOuGjwsxU",
            "videoUrl": "https://www.youtube.com/watch?v=Y6dOuGjwsxU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=87",
            "sectionTitle": "Hashmaps & Tries",
            "tags": [
              "Hashmaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 80,
            "index": 88,
            "title": "Longest Common Prefix Problem || Tries || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "VTr3Nh7BadI",
            "videoUrl": "https://www.youtube.com/watch?v=VTr3Nh7BadI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=88",
            "sectionTitle": "Hashmaps & Tries",
            "tags": [
              "Hashmaps",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=longest-common-prefix-problem-tries-c-placement-series"
          },
          {
            "id": 81,
            "index": 89,
            "title": "Implement a Phone Directory Using Trie || C++ Placement Series",
            "duration": "35-60 min",
            "youtubeId": "SK2S5lQegVg",
            "videoUrl": "https://www.youtube.com/watch?v=SK2S5lQegVg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=89",
            "sectionTitle": "Hashmaps & Tries",
            "tags": [
              "Hashmaps",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Graphs",
        "videosCount": 17,
        "videos": [
          {
            "id": 82,
            "index": 90,
            "title": "Graphs in C++ [Introduction + Representation of Graph] || Love Babbar DSA Sheet",
            "duration": "35-60 min",
            "youtubeId": "wjqSZy4pMT4",
            "videoUrl": "https://www.youtube.com/watch?v=wjqSZy4pMT4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=90",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 83,
            "index": 91,
            "title": "Graph Traversal - BFS and DFS in C++",
            "duration": "35-60 min",
            "youtubeId": "V6qjYyCq87U",
            "videoUrl": "https://www.youtube.com/watch?v=V6qjYyCq87U&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=91",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 84,
            "index": 92,
            "title": "Graph Questions - Cycle Detection in Undirected Graph (BFS & DFS)",
            "duration": "35-60 min",
            "youtubeId": "A8fgK_G_uZs",
            "videoUrl": "https://www.youtube.com/watch?v=A8fgK_G_uZs&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=92",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-undirected-graph-bfs-dfs"
          },
          {
            "id": 85,
            "index": 93,
            "title": "Graph Questions - Cycle Detection in Directed Graph (DFS)",
            "duration": "35-60 min",
            "youtubeId": "tl6Dk0WpGyk",
            "videoUrl": "https://www.youtube.com/watch?v=tl6Dk0WpGyk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=93",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-directed-graph-dfs"
          },
          {
            "id": 86,
            "index": 94,
            "title": "Graph Questions - Topological Sort (DFS)",
            "duration": "35-60 min",
            "youtubeId": "YvYVj8V2c-I",
            "videoUrl": "https://www.youtube.com/watch?v=YvYVj8V2c-I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=94",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-topological-sort-dfs"
          },
          {
            "id": 87,
            "index": 95,
            "title": "Graph Questions - Topological Sort (Kahn's Algorithm - BFS)",
            "duration": "35-60 min",
            "youtubeId": "TOzK7bN8t_E",
            "videoUrl": "https://www.youtube.com/watch?v=TOzK7bN8t_E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=95",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-topological-sort-kahn-s-algorithm-bfs"
          },
          {
            "id": 88,
            "index": 96,
            "title": "Graph Questions - Cycle Detection in Directed Graph (BFS - Kahn's Algorithm)",
            "duration": "35-60 min",
            "youtubeId": "TLHThc7A_0I",
            "videoUrl": "https://www.youtube.com/watch?v=TLHThc7A_0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=96",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-directed-graph-bfs-kahn-s-algorithm"
          },
          {
            "id": 89,
            "index": 97,
            "title": "Graph Questions - Shortest Path in Undirected Graph (Unit Weight)",
            "duration": "35-60 min",
            "youtubeId": "yKR200YgU00",
            "videoUrl": "https://www.youtube.com/watch?v=yKR200YgU00&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=97",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-shortest-path-in-undirected-graph-unit-weight"
          },
          {
            "id": 90,
            "index": 98,
            "title": "Graph Questions - Shortest Path in DAG (Directed Acyclic Graph)",
            "duration": "35-60 min",
            "youtubeId": "ZfJ3O-5G_iQ",
            "videoUrl": "https://www.youtube.com/watch?v=ZfJ3O-5G_iQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=98",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-shortest-path-in-dag-directed-acyclic-graph"
          },
          {
            "id": 91,
            "index": 99,
            "title": "Graph Questions - Dijkstra's Algorithm (Shortest Path)",
            "duration": "35-60 min",
            "youtubeId": "dRz_qjA-0hM",
            "videoUrl": "https://www.youtube.com/watch?v=dRz_qjA-0hM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=99",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-dijkstra-s-algorithm-shortest-path"
          },
          {
            "id": 92,
            "index": 100,
            "title": "Graph Questions - Prim's Algorithm (Minimum Spanning Tree)",
            "duration": "35-60 min",
            "youtubeId": "ySp2EOLN_20",
            "videoUrl": "https://www.youtube.com/watch?v=ySp2EOLN_20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=100",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-prim-s-algorithm-minimum-spanning-tree"
          },
          {
            "id": 93,
            "index": 101,
            "title": "Graph Questions - Kruskal's Algorithm (Minimum Spanning Tree)",
            "duration": "35-60 min",
            "youtubeId": "E-y1n5E_S4w",
            "videoUrl": "https://www.youtube.com/watch?v=E-y1n5E_S4w&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=101",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-kruskal-s-algorithm-minimum-spanning-tree"
          },
          {
            "id": 94,
            "index": 102,
            "title": "Graph Questions - Bellman Ford Algorithm (Shortest Path for Negative Weights)",
            "duration": "35-60 min",
            "youtubeId": "JgtHZhGgDPE",
            "videoUrl": "https://www.youtube.com/watch?v=JgtHZhGgDPE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=102",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-bellman-ford-algorithm-shortest-path-for-negative-weights"
          },
          {
            "id": 95,
            "index": 103,
            "title": "Graph Questions - Floyd Warshall Algorithm (All-Pairs Shortest Path)",
            "duration": "35-60 min",
            "youtubeId": "L2GzV2C3_Gk",
            "videoUrl": "https://www.youtube.com/watch?v=L2GzV2C3_Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=103",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-floyd-warshall-algorithm-all-pairs-shortest-path"
          },
          {
            "id": 96,
            "index": 104,
            "title": "Graph Questions - Bridges in Graph (Tarjan's Algorithm/DFS)",
            "duration": "35-60 min",
            "youtubeId": "qrKbCgQy548",
            "videoUrl": "https://www.youtube.com/watch?v=qrKbCgQy548&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=104",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-bridges-in-graph-tarjan-s-algorithm-dfs"
          },
          {
            "id": 97,
            "index": 105,
            "title": "Graph Questions - Articulation Point in Graph (Tarjan's Algorithm/DFS)",
            "duration": "35-60 min",
            "youtubeId": "qrKbCgQy548",
            "videoUrl": "https://www.youtube.com/watch?v=qrKbCgQy548&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=105",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-articulation-point-in-graph-tarjan-s-algorithm-dfs"
          },
          {
            "id": 98,
            "index": 106,
            "title": "Graph Questions - Strongly Connected Components (Kosaraju's Algorithm)",
            "duration": "35-60 min",
            "youtubeId": "Vd0-g2_y-FM",
            "videoUrl": "https://www.youtube.com/watch?v=Vd0-g2_y-FM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=106",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-strongly-connected-components-kosaraju-s-algorithm"
          }
        ]
      },
      {
        "title": "Dynamic Programming (DP)",
        "videosCount": 14,
        "videos": [
          {
            "id": 99,
            "index": 107,
            "title": "Dynamic Programming [Introduction + Memoization + Tabulation]",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=107",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 100,
            "index": 108,
            "title": "Dynamic Programming Questions (Fibonacci, Climbing Stairs)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=108",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dynamic-programming-questions-fibonacci-climbing-stairs"
          },
          {
            "id": 101,
            "index": 109,
            "title": "DP Questions - House Robber Problem",
            "duration": "35-60 min",
            "youtubeId": "3gZ5Oq-B5bE",
            "videoUrl": "https://www.youtube.com/watch?v=3gZ5Oq-B5bE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=109",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-house-robber-problem"
          },
          {
            "id": 102,
            "index": 110,
            "title": "DP Questions - Minimum Cost to Climb Stairs",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=110",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-minimum-cost-to-climb-stairs"
          },
          {
            "id": 103,
            "index": 111,
            "title": "DP Questions - Maximum sum of non-adjacent elements",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=111",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-maximum-sum-of-non-adjacent-elements"
          },
          {
            "id": 104,
            "index": 112,
            "title": "DP Questions - Min Cost of Tickets",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=112",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-min-cost-of-tickets"
          },
          {
            "id": 105,
            "index": 113,
            "title": "DP Questions - Subset Sum Problem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=113",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-subset-sum-problem"
          },
          {
            "id": 106,
            "index": 114,
            "title": "DP Questions - Knapsack Problem (0/1 Knapsack)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=114",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-knapsack-problem-0-1-knapsack"
          },
          {
            "id": 107,
            "index": 115,
            "title": "DP Questions - Unbounded Knapsack Problem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=115",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-unbounded-knapsack-problem"
          },
          {
            "id": 108,
            "index": 116,
            "title": "DP Questions - Rod Cutting Problem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=116",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-rod-cutting-problem"
          },
          {
            "id": 109,
            "index": 117,
            "title": "DP Questions - Longest Common Subsequence (LCS)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=117",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-common-subsequence-lcs"
          },
          {
            "id": 110,
            "index": 118,
            "title": "DP Questions - Edit Distance (Minimum Operations to convert String A to B)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=118",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-edit-distance-minimum-operations-to-convert-string-a-to-b"
          },
          {
            "id": 111,
            "index": 119,
            "title": "DP Questions - Longest Palindromic Subsequence",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=119",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-palindromic-subsequence"
          },
          {
            "id": 112,
            "index": 120,
            "title": "DP Questions - Longest Increasing Subsequence (LIS)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=120",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-increasing-subsequence-lis"
          }
        ]
      },
      {
        "title": "Greedy Algorithms",
        "videosCount": 3,
        "videos": [
          {
            "id": 113,
            "index": 121,
            "title": "Greedy Algorithms [Introduction & Theory]",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=121",
            "sectionTitle": "Greedy Algorithms",
            "tags": [
              "Greedy",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 114,
            "index": 122,
            "title": "Greedy Questions - Activity Selection Problem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=122",
            "sectionTitle": "Greedy Algorithms",
            "tags": [
              "Greedy",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=greedy-questions-activity-selection-problem"
          },
          {
            "id": 115,
            "index": 123,
            "title": "Greedy Questions - Fractional Knapsack Problem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=123",
            "sectionTitle": "Greedy Algorithms",
            "tags": [
              "Greedy",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=greedy-questions-fractional-knapsack-problem"
          }
        ]
      },
      {
        "title": "Tries (Continuation) & Other Advanced Topics",
        "videosCount": 2,
        "videos": [
          {
            "id": 116,
            "index": 124,
            "title": "Trie Problems - Max XOR Pair in an Array",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=124",
            "sectionTitle": "Tries (Continuation) & Other Advanced Topics",
            "tags": [
              "Tries",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=trie-problems-max-xor-pair-in-an-array"
          },
          {
            "id": 117,
            "index": 125,
            "title": "Advanced Topics (Bit Manipulation, Sliding Window, Two Pointers etc.)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=125",
            "sectionTitle": "Tries (Continuation) & Other Advanced Topics",
            "tags": [
              "Tries",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Advanced Topics",
        "videosCount": 24,
        "videos": [
          {
            "id": 118,
            "index": 126,
            "title": "String Matching Algorithms (Rabin Karp, KMP)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=126",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 119,
            "index": 127,
            "title": "Segment Trees (Introduction)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=127",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 120,
            "index": 128,
            "title": "Fenwick Tree/Binary Indexed Tree (BIT)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=128",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 121,
            "index": 129,
            "title": "Suffix Array/Suffix Tree",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=129",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 122,
            "index": 130,
            "title": "Max Flow Min Cut Theorem",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=130",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 123,
            "index": 131,
            "title": "Hashing & Collision Resolution",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=131",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 124,
            "index": 132,
            "title": "Disjoint Set Union (DSU) / Union Find",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=132",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 125,
            "index": 133,
            "title": "Fenwick Tree Applications",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=133",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 126,
            "index": 134,
            "title": "Segment Tree Advanced Problems",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=134",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=segment-tree-advanced-problems"
          },
          {
            "id": 127,
            "index": 135,
            "title": "Mo's Algorithm",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=135",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 128,
            "index": 136,
            "title": "DP on Grids",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=136",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 129,
            "index": 137,
            "title": "DP on Trees",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=137",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 130,
            "index": 138,
            "title": "DP on Strings",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=138",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 131,
            "index": 139,
            "title": "Game Theory DP",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=139",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 132,
            "index": 140,
            "title": "Maximum Bipartite Matching",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=140",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 133,
            "index": 141,
            "title": "Advanced DP with Bitmasking",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=141",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 134,
            "index": 142,
            "title": "DP on Trees (Advanced)",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=142",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 135,
            "index": 143,
            "title": "DP on Graphs",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=143",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 136,
            "index": 144,
            "title": "DP - LIS Advanced Problems",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=144",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=dp-lis-advanced-problems"
          },
          {
            "id": 137,
            "index": 145,
            "title": "Dynamic Programming Conclusion",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=145",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 138,
            "index": 146,
            "title": "Competitive Programming Tips & Tricks",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 139,
            "index": 147,
            "title": "Interview Preparation Strategy",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 140,
            "index": 148,
            "title": "How to Get Better at DSA & CP",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 141,
            "index": 149,
            "title": "Final Thoughts & Roadmap",
            "duration": "35-60 min",
            "youtubeId": "NNZqK-Wb0Gk",
            "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=149",
            "sectionTitle": "Advanced Topics",
            "tags": [
              "Advanced",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Intro to Programming & Flowcharts",
        "duration": "35-60 min",
        "youtubeId": "WQoB2z67hvY",
        "videoUrl": "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=1",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Write Your First Program in C++",
        "duration": "35-60 min",
        "youtubeId": "t6zLJOCVqD0",
        "videoUrl": "https://www.youtube.com/watch?v=t6zLJOCVqD0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=2",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "If-Else, While loop & Lots of Patterns (Part-1)",
        "duration": "35-60 min",
        "youtubeId": "WR31ByTzAVQ",
        "videoUrl": "https://www.youtube.com/watch?v=WR31ByTzAVQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=3",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Solving Pattern Questions (Part-2)",
        "duration": "35-60 min",
        "youtubeId": "dr-pLeJBr38",
        "videoUrl": "https://www.youtube.com/watch?v=dr-pLeJBr38&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=4",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solving-pattern-questions-part-2"
      },
      {
        "id": 5,
        "index": 5,
        "title": "Bitwise Operators, For Loops, Operator Precedence & Variable Scoping",
        "duration": "35-60 min",
        "youtubeId": "yjdQHb2elqI",
        "videoUrl": "https://www.youtube.com/watch?v=yjdQHb2elqI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=5",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Binary & Decimal Number System",
        "duration": "35-60 min",
        "youtubeId": "bWrsk0QizEk",
        "videoUrl": "https://www.youtube.com/watch?v=bWrsk0QizEk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=6",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 8,
        "title": "Switch Statement & Functions",
        "duration": "35-60 min",
        "youtubeId": "8nNqk2NPbRA",
        "videoUrl": "https://www.youtube.com/watch?v=8nNqk2NPbRA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=8",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 19,
        "title": "C++ STL in 1 Video (Re-Uploaded)",
        "duration": "35-60 min",
        "youtubeId": "WgMPrLX-zsA",
        "videoUrl": "https://www.youtube.com/watch?v=WgMPrLX-zsA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=20",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 26,
        "title": "Basic Maths for DSA || Sieve || Modular Arithmetics || Euclid\u2019s Algorithm",
        "duration": "35-60 min",
        "youtubeId": "KdePjukNs98",
        "videoUrl": "https://www.youtube.com/watch?v=KdePjukNs98&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=26",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 33,
        "title": "Macros, Global Variables, Inline Functions & Default Args",
        "duration": "35-60 min",
        "youtubeId": "0TEvaAiqo8Y",
        "videoUrl": "https://www.youtube.com/watch?v=0TEvaAiqo8Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=33",
        "sectionTitle": "C++ Basics, Flowcharts & Core Concepts",
        "tags": [
          "C++",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 7,
        "title": "LeetCode Problem Solving Session",
        "duration": "35-60 min",
        "youtubeId": "0fwrMYPcGQ0",
        "videoUrl": "https://www.youtube.com/watch?v=0fwrMYPcGQ0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=7",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=leetcode-problem-solving-session"
      },
      {
        "id": 12,
        "index": 9,
        "title": "Introduction to Arrays in C++",
        "duration": "35-60 min",
        "youtubeId": "sNrLlmOIn-c",
        "videoUrl": "https://www.youtube.com/watch?v=sNrLlmOIn-c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=9",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 10,
        "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
        "duration": "35-60 min",
        "youtubeId": "oVa8DfUDKTw",
        "videoUrl": "https://www.youtube.com/watch?v=oVa8DfUDKTw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=10",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
      },
      {
        "id": 14,
        "index": 11,
        "title": "Time & Space Complexity || How to avoid Time Limit Exceeded [TLE]",
        "duration": "35-60 min",
        "youtubeId": "QovOdd80A4s",
        "videoUrl": "https://www.youtube.com/watch?v=QovOdd80A4s&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=11",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 12,
        "title": "Binary Search Explained in 1 Video [Theory + Code]",
        "duration": "35-60 min",
        "youtubeId": "YJeoQBevNVo",
        "videoUrl": "https://www.youtube.com/watch?v=YJeoQBevNVo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=12",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 13,
        "title": "Binary Search Interview Questions [Google, Amazon, Microsoft] || ProblemSet - 1",
        "duration": "35-60 min",
        "youtubeId": "zD2Jg3alZV8",
        "videoUrl": "https://www.youtube.com/watch?v=zD2Jg3alZV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=13",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-interview-questions-google-amazon-microsoft-problemset-1"
      },
      {
        "id": 17,
        "index": 14,
        "title": "Binary Search Interview Questions [Google, Amazon, Microsoft] || ProblemSet - 2",
        "duration": "35-60 min",
        "youtubeId": "6z2HK4o8qcU",
        "videoUrl": "https://www.youtube.com/watch?v=6z2HK4o8qcU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=14",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-interview-questions-google-amazon-microsoft-problemset-2"
      },
      {
        "id": 18,
        "index": 15,
        "title": "Book Allocation Problem || Aggressive Cows Problem || Binary Search Advanced Problems",
        "duration": "35-60 min",
        "youtubeId": "YTTdLgyqOLY",
        "videoUrl": "https://www.youtube.com/watch?v=YTTdLgyqOLY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=15",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=book-allocation-problem-aggressive-cows-problem-binary-search-advanced-problems"
      },
      {
        "id": 19,
        "index": 16,
        "title": "Selection Sort [Theory + Code] || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "UdO2NeHB46c",
        "videoUrl": "https://www.youtube.com/watch?v=UdO2NeHB46c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=16",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 18,
        "title": "BUBBLE SORT in 1 Video [Theory + Optimised Code] || Best/Worst Case Complexity",
        "duration": "35-60 min",
        "youtubeId": "zOhUavxlzw4",
        "videoUrl": "https://www.youtube.com/watch?v=zOhUavxlzw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=18",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 19,
        "title": "INSERTION SORT in 1 Video [Theory + Code] || Best/Worst Case Complexity",
        "duration": "35-60 min",
        "youtubeId": "7kIVfVY6Axk",
        "videoUrl": "https://www.youtube.com/watch?v=7kIVfVY6Axk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=19",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 21,
        "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
        "duration": "35-60 min",
        "youtubeId": "MPvr-LmaZmA",
        "videoUrl": "https://www.youtube.com/watch?v=MPvr-LmaZmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=21",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
      },
      {
        "id": 23,
        "index": 22,
        "title": "Solving LeetCode/CodeStudio Questions [Arrays]",
        "duration": "35-60 min",
        "youtubeId": "Z7_nMTHROZo",
        "videoUrl": "https://www.youtube.com/watch?v=Z7_nMTHROZo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=22",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-codestudio-questions-arrays"
      },
      {
        "id": 24,
        "index": 24,
        "title": "All about Char Arrays, Strings & solving LeetCode Questions",
        "duration": "35-60 min",
        "youtubeId": "Wdjr6uoZ0e0",
        "videoUrl": "https://www.youtube.com/watch?v=Wdjr6uoZ0e0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=24",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=all-about-char-arrays-strings-solving-leetcode-questions"
      },
      {
        "id": 25,
        "index": 25,
        "title": "Introduction to 2D Arrays in C++ || LeetCode Questions",
        "duration": "35-60 min",
        "youtubeId": "1CdolnvxLs0",
        "videoUrl": "https://www.youtube.com/watch?v=1CdolnvxLs0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=25",
        "sectionTitle": "Arrays & Searching/Sorting",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=introduction-to-2d-arrays-in-c-leetcode-questions"
      },
      {
        "id": 26,
        "index": 28,
        "title": "Pointers in C++ || Part-1 || DSA Placement Course - Love Babbar",
        "duration": "35-60 min",
        "youtubeId": "YHwEIfrXZgE",
        "videoUrl": "https://www.youtube.com/watch?v=YHwEIfrXZgE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=28",
        "sectionTitle": "Pointers & Dynamic Memory Allocation",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 29,
        "title": "Pointers in C++ || Part-2 || DSA Placement Course - Love Babbar",
        "duration": "35-60 min",
        "youtubeId": "rlpw7oi-bpE",
        "videoUrl": "https://www.youtube.com/watch?v=rlpw7oi-bpE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=29",
        "sectionTitle": "Pointers & Dynamic Memory Allocation",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 30,
        "title": "Double Pointers in C++ || Pointers Practice MCQs",
        "duration": "35-60 min",
        "youtubeId": "P0UsAxtXq2Y",
        "videoUrl": "https://www.youtube.com/watch?v=P0UsAxtXq2Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=30",
        "sectionTitle": "Pointers & Dynamic Memory Allocation",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 31,
        "title": "Reference Variable | Static vs Dynamic Memory | Part-1",
        "duration": "35-60 min",
        "youtubeId": "MMO2c57XHzM",
        "videoUrl": "https://www.youtube.com/watch?v=MMO2c57XHzM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=31",
        "sectionTitle": "Pointers & Dynamic Memory Allocation",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 32,
        "title": "Dynamic Memory Allocation of 2D Arrays",
        "duration": "35-60 min",
        "youtubeId": "LlqgWQgm58g",
        "videoUrl": "https://www.youtube.com/watch?v=LlqgWQgm58g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=32",
        "sectionTitle": "Pointers & Dynamic Memory Allocation",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 34,
        "title": "Learning Recursion the Best Way! | 10 Day Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "_-2u4EPHD88",
        "videoUrl": "https://www.youtube.com/watch?v=_-2u4EPHD88&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=34",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 35,
        "title": "Understanding Recursion the easiest way || Day-2 || 10 Day Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "zg8Y1oE4qYQ",
        "videoUrl": "https://www.youtube.com/watch?v=zg8Y1oE4qYQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=35",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 36,
        "title": "Recursion and Binary Search | Day-3 | 10 Days Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "UntSI7G5h20",
        "videoUrl": "https://www.youtube.com/watch?v=UntSI7G5h20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=36",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 37,
        "title": "Recursion with Strings | Day-4 | 10 Day Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "WyY2Af3k1xI",
        "videoUrl": "https://www.youtube.com/watch?v=WyY2Af3k1xI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=37",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 38,
        "title": "Merge Sort using Recursion | Day-5 | 10 Day Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "cdHEpbBVjRM",
        "videoUrl": "https://www.youtube.com/watch?v=cdHEpbBVjRM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=38",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 40,
        "title": "Quick Sort using Recursion | Day-6 | 10 Day Recursion Challenge",
        "duration": "35-60 min",
        "youtubeId": "sNaHN4tZmRk",
        "videoUrl": "https://www.youtube.com/watch?v=sNaHN4tZmRk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=40",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 41,
        "title": "Recursion - Subsets / Subsequences of String [Theory + Code]",
        "duration": "35-60 min",
        "youtubeId": "V0IgCltYgg4",
        "videoUrl": "https://www.youtube.com/watch?v=V0IgCltYgg4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=41",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 38,
        "index": 42,
        "title": "Phone Keypad Problem Recursion || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "tWnHbSHwNmA",
        "videoUrl": "https://www.youtube.com/watch?v=tWnHbSHwNmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=42",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=phone-keypad-problem-recursion-c-placement-course"
      },
      {
        "id": 39,
        "index": 43,
        "title": "Permutations of a String || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "va3NEycUxsg",
        "videoUrl": "https://www.youtube.com/watch?v=va3NEycUxsg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=43",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 40,
        "index": 44,
        "title": "Rat in a Maze Problem || C++ Placement Course 2022",
        "duration": "35-60 min",
        "youtubeId": "GqtyVD-x_jY",
        "videoUrl": "https://www.youtube.com/watch?v=GqtyVD-x_jY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=44",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=rat-in-a-maze-problem-c-placement-course-2022"
      },
      {
        "id": 41,
        "index": 45,
        "title": "Time & Space Complexity of Recursive Algorithms || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "BYCeh76OASc",
        "videoUrl": "https://www.youtube.com/watch?v=BYCeh76OASc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=45",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 42,
        "index": 46,
        "title": "OOPs Concepts in C++ || Part-1",
        "duration": "35-60 min",
        "youtubeId": "i_5pvt7ag7E",
        "videoUrl": "https://www.youtube.com/watch?v=i_5pvt7ag7E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=46",
        "sectionTitle": "Object-Oriented Programming (OOPs)",
        "tags": [
          "Object-Oriented",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 43,
        "index": 47,
        "title": "4 Pillars of OOPs Concept -Inheritance, Polymorphism, Encapsulation & Abstraction",
        "duration": "35-60 min",
        "youtubeId": "b3GccK5_KSQ",
        "videoUrl": "https://www.youtube.com/watch?v=b3GccK5_KSQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=47",
        "sectionTitle": "Object-Oriented Programming (OOPs)",
        "tags": [
          "Object-Oriented",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 48,
        "title": "Linked List & its types - Singly, Doubly, Circular etc.",
        "duration": "35-60 min",
        "youtubeId": "q8gdBn9RPeI",
        "videoUrl": "https://www.youtube.com/watch?v=q8gdBn9RPeI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=48",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 45,
        "index": 49,
        "title": "Linked List Questions: Reverse LL and find Middle of LL",
        "duration": "35-60 min",
        "youtubeId": "vqS1nVQdCJM",
        "videoUrl": "https://www.youtube.com/watch?v=vqS1nVQdCJM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=49",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-questions-reverse-ll-and-find-middle-of-ll"
      },
      {
        "id": 46,
        "index": 51,
        "title": "Linked List Questions: Reverse LL in \"K group\" && Check LL is Circular or not",
        "duration": "35-60 min",
        "youtubeId": "fi2vh0nQLi0",
        "videoUrl": "https://www.youtube.com/watch?v=fi2vh0nQLi0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=51",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-questions-reverse-ll-in-k-group-check-ll-is-circular-or-not"
      },
      {
        "id": 47,
        "index": 52,
        "title": "Detect & Remove Loop in Linked List [Approach Discussion + Optimised Implementation]",
        "duration": "35-60 min",
        "youtubeId": "VxOFflTXlXo",
        "videoUrl": "https://www.youtube.com/watch?v=VxOFflTXlXo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=52",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 48,
        "index": 53,
        "title": "Remove Duplicates from a Sorted/UnSorted Linked List",
        "duration": "35-60 min",
        "youtubeId": "7pgs-wT5d4c",
        "videoUrl": "https://www.youtube.com/watch?v=7pgs-wT5d4c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=53",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 49,
        "index": 54,
        "title": "Merge 2 Sorted Linked Lists || Sort 0s, 1s and 2s in Linked List",
        "duration": "35-60 min",
        "youtubeId": "ogmBt6f9hw8",
        "videoUrl": "https://www.youtube.com/watch?v=ogmBt6f9hw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=54",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 50,
        "index": 55,
        "title": "Check Palindrome in Linked List || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "aD7mBVnKFEU",
        "videoUrl": "https://www.youtube.com/watch?v=aD7mBVnKFEU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=55",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 51,
        "index": 56,
        "title": "Add 2 Numbers represented by Linked Lists || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "HiRlTPf9aCg",
        "videoUrl": "https://www.youtube.com/watch?v=HiRlTPf9aCg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=56",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 52,
        "index": 57,
        "title": "Clone a Linked List with Random Pointers || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "83mPr0i56Gg",
        "videoUrl": "https://www.youtube.com/watch?v=83mPr0i56Gg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=57",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 53,
        "index": 58,
        "title": "Merge Sort in Linked List [ Theory + Implementation ]",
        "duration": "35-60 min",
        "youtubeId": "rM5EEA_rbNY",
        "videoUrl": "https://www.youtube.com/watch?v=rM5EEA_rbNY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=58",
        "sectionTitle": "Linked Lists",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 54,
        "index": 59,
        "title": "Introduction to Stacks [Theory + Implementation] || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "_6COl6V6mng",
        "videoUrl": "https://www.youtube.com/watch?v=_6COl6V6mng&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=59",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 55,
        "index": 60,
        "title": "Stack Interview Questions || Placement Series by Love Babbar",
        "duration": "35-60 min",
        "youtubeId": "BmZnJehDzyU",
        "videoUrl": "https://www.youtube.com/watch?v=BmZnJehDzyU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=60",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-interview-questions-placement-series-by-love-babbar"
      },
      {
        "id": 56,
        "index": 61,
        "title": "Largest Rectangular Area in Histogram [Optimised Approach]",
        "duration": "35-60 min",
        "youtubeId": "lJLcqDsmYfg",
        "videoUrl": "https://www.youtube.com/watch?v=lJLcqDsmYfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=61",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 57,
        "index": 62,
        "title": "Stack - Celebrity Problem && Max Rectangle in Binary Matrix with all 1's",
        "duration": "35-60 min",
        "youtubeId": "9u2BJfmWNEg",
        "videoUrl": "https://www.youtube.com/watch?v=9u2BJfmWNEg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=62",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-celebrity-problem-max-rectangle-in-binary-matrix-with-all-1-s"
      },
      {
        "id": 58,
        "index": 63,
        "title": "\"N\" Stacks in an Array || Stack Hard Question",
        "duration": "35-60 min",
        "youtubeId": "lrSXKLmnMV8",
        "videoUrl": "https://www.youtube.com/watch?v=lrSXKLmnMV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=63",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=n-stacks-in-an-array-stack-hard-question"
      },
      {
        "id": 59,
        "index": 64,
        "title": "Design Special Stack Problem || C++ Placement Course",
        "duration": "35-60 min",
        "youtubeId": "OpwYmEBcPh0",
        "videoUrl": "https://www.youtube.com/watch?v=OpwYmEBcPh0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=64",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=design-special-stack-problem-c-placement-course"
      },
      {
        "id": 60,
        "index": 65,
        "title": "Queues in C++ [STL + Implementation + Types of Queues ]",
        "duration": "35-60 min",
        "youtubeId": "W7uB9-TKfTg",
        "videoUrl": "https://www.youtube.com/watch?v=W7uB9-TKfTg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=65",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 61,
        "index": 66,
        "title": "Queue FAANG Interview Questions || Placement Series by Love Babbar",
        "duration": "35-60 min",
        "youtubeId": "_gJ3to4RyeQ",
        "videoUrl": "https://www.youtube.com/watch?v=_gJ3to4RyeQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=66",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=queue-faang-interview-questions-placement-series-by-love-babbar"
      },
      {
        "id": 62,
        "index": 67,
        "title": "Binary Trees & its Representation || Different types of Traversals",
        "duration": "35-60 min",
        "youtubeId": "5NiXlPrLslg",
        "videoUrl": "https://www.youtube.com/watch?v=5NiXlPrLslg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=67",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 63,
        "index": 69,
        "title": "Binary Tree FAANG Interview Questions || Part-1",
        "duration": "35-60 min",
        "youtubeId": "nHMQ33LZ6oA",
        "videoUrl": "https://www.youtube.com/watch?v=nHMQ33LZ6oA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=69",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-1"
      },
      {
        "id": 64,
        "index": 70,
        "title": "Binary Tree FAANG Interview Questions || Part-2",
        "duration": "35-60 min",
        "youtubeId": "s1d8UGDCCN8",
        "videoUrl": "https://www.youtube.com/watch?v=s1d8UGDCCN8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=70",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-2"
      },
      {
        "id": 65,
        "index": 71,
        "title": "Binary Tree FAANG Interview Questions || Part-3",
        "duration": "35-60 min",
        "youtubeId": "QG0hE0R_ng4",
        "videoUrl": "https://www.youtube.com/watch?v=QG0hE0R_ng4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=71",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-faang-interview-questions-part-3"
      },
      {
        "id": 66,
        "index": 72,
        "title": "Construct a Binary Tree from InOrder/PreOrder/PostOrder Traversal",
        "duration": "35-60 min",
        "youtubeId": "ffE1xj51EBQ",
        "videoUrl": "https://www.youtube.com/watch?v=ffE1xj51EBQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=72",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 67,
        "index": 73,
        "title": "Minimum Time to BURN the Entire Binary Tree || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "XLdpy0_6MR4",
        "videoUrl": "https://www.youtube.com/watch?v=XLdpy0_6MR4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=73",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 68,
        "index": 74,
        "title": "Morris Traversal || Flatten a Binary tree to Linked List || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "2BdY9fixMrM",
        "videoUrl": "https://www.youtube.com/watch?v=2BdY9fixMrM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=74",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 69,
        "index": 75,
        "title": "Binary Search Tree & its Implementation || Insertion, Deletion & Searching a Node",
        "duration": "35-60 min",
        "youtubeId": "UeRUKRJvPa4",
        "videoUrl": "https://www.youtube.com/watch?v=UeRUKRJvPa4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=75",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 70,
        "index": 76,
        "title": "Binary SearchTree FAANG Interview Questions || Part-1",
        "duration": "35-60 min",
        "youtubeId": "pDURIj98e0I",
        "videoUrl": "https://www.youtube.com/watch?v=pDURIj98e0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=76",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-searchtree-faang-interview-questions-part-1"
      },
      {
        "id": 71,
        "index": 77,
        "title": "Binary SearchTree FAANG Interview Questions || Part-2",
        "duration": "35-60 min",
        "youtubeId": "IGHyX15fLI8",
        "videoUrl": "https://www.youtube.com/watch?v=IGHyX15fLI8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=77",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-searchtree-faang-interview-questions-part-2"
      },
      {
        "id": 72,
        "index": 78,
        "title": "Merge 2 Binary Search Trees || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "18w8VduomfI",
        "videoUrl": "https://www.youtube.com/watch?v=18w8VduomfI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=78",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 73,
        "index": 79,
        "title": "Largest BST in a Binary Tree || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "fqx8z3VepMA",
        "videoUrl": "https://www.youtube.com/watch?v=fqx8z3VepMA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=79",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 74,
        "index": 80,
        "title": "Heaps in C++ || Heap Sort || Insertion/Deletion in Heap || Priority Queue STL",
        "duration": "35-60 min",
        "youtubeId": "NKJnHewiGdc",
        "videoUrl": "https://www.youtube.com/watch?v=NKJnHewiGdc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=80",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 75,
        "index": 81,
        "title": "Heaps in C++ || Interview Questions || Part - 1",
        "duration": "35-60 min",
        "youtubeId": "_9F2VgZcvdw",
        "videoUrl": "https://www.youtube.com/watch?v=_9F2VgZcvdw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=81",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-in-c-interview-questions-part-1"
      },
      {
        "id": 76,
        "index": 83,
        "title": "Heaps in C++ || Interview Questions || Part - 2",
        "duration": "35-60 min",
        "youtubeId": "eccAKrmffh8",
        "videoUrl": "https://www.youtube.com/watch?v=eccAKrmffh8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=83",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-in-c-interview-questions-part-2"
      },
      {
        "id": 77,
        "index": 84,
        "title": "Heaps Hard Interview Questions || Part - 3",
        "duration": "35-60 min",
        "youtubeId": "RrxpTWqj97A",
        "videoUrl": "https://www.youtube.com/watch?v=RrxpTWqj97A&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=84",
        "sectionTitle": "Binary Trees, BST & Heaps",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=heaps-hard-interview-questions-part-3"
      },
      {
        "id": 78,
        "index": 85,
        "title": "Hashmaps in C++ || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "7mUKGHznpfg",
        "videoUrl": "https://www.youtube.com/watch?v=7mUKGHznpfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=85",
        "sectionTitle": "Hashmaps & Tries",
        "tags": [
          "Hashmaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 79,
        "index": 87,
        "title": "Trie & its Implementation || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "Y6dOuGjwsxU",
        "videoUrl": "https://www.youtube.com/watch?v=Y6dOuGjwsxU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=87",
        "sectionTitle": "Hashmaps & Tries",
        "tags": [
          "Hashmaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 80,
        "index": 88,
        "title": "Longest Common Prefix Problem || Tries || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "VTr3Nh7BadI",
        "videoUrl": "https://www.youtube.com/watch?v=VTr3Nh7BadI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=88",
        "sectionTitle": "Hashmaps & Tries",
        "tags": [
          "Hashmaps",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=longest-common-prefix-problem-tries-c-placement-series"
      },
      {
        "id": 81,
        "index": 89,
        "title": "Implement a Phone Directory Using Trie || C++ Placement Series",
        "duration": "35-60 min",
        "youtubeId": "SK2S5lQegVg",
        "videoUrl": "https://www.youtube.com/watch?v=SK2S5lQegVg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=89",
        "sectionTitle": "Hashmaps & Tries",
        "tags": [
          "Hashmaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 82,
        "index": 90,
        "title": "Graphs in C++ [Introduction + Representation of Graph] || Love Babbar DSA Sheet",
        "duration": "35-60 min",
        "youtubeId": "wjqSZy4pMT4",
        "videoUrl": "https://www.youtube.com/watch?v=wjqSZy4pMT4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=90",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 83,
        "index": 91,
        "title": "Graph Traversal - BFS and DFS in C++",
        "duration": "35-60 min",
        "youtubeId": "V6qjYyCq87U",
        "videoUrl": "https://www.youtube.com/watch?v=V6qjYyCq87U&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=91",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 84,
        "index": 92,
        "title": "Graph Questions - Cycle Detection in Undirected Graph (BFS & DFS)",
        "duration": "35-60 min",
        "youtubeId": "A8fgK_G_uZs",
        "videoUrl": "https://www.youtube.com/watch?v=A8fgK_G_uZs&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=92",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-undirected-graph-bfs-dfs"
      },
      {
        "id": 85,
        "index": 93,
        "title": "Graph Questions - Cycle Detection in Directed Graph (DFS)",
        "duration": "35-60 min",
        "youtubeId": "tl6Dk0WpGyk",
        "videoUrl": "https://www.youtube.com/watch?v=tl6Dk0WpGyk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=93",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-directed-graph-dfs"
      },
      {
        "id": 86,
        "index": 94,
        "title": "Graph Questions - Topological Sort (DFS)",
        "duration": "35-60 min",
        "youtubeId": "YvYVj8V2c-I",
        "videoUrl": "https://www.youtube.com/watch?v=YvYVj8V2c-I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=94",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-topological-sort-dfs"
      },
      {
        "id": 87,
        "index": 95,
        "title": "Graph Questions - Topological Sort (Kahn's Algorithm - BFS)",
        "duration": "35-60 min",
        "youtubeId": "TOzK7bN8t_E",
        "videoUrl": "https://www.youtube.com/watch?v=TOzK7bN8t_E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=95",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-topological-sort-kahn-s-algorithm-bfs"
      },
      {
        "id": 88,
        "index": 96,
        "title": "Graph Questions - Cycle Detection in Directed Graph (BFS - Kahn's Algorithm)",
        "duration": "35-60 min",
        "youtubeId": "TLHThc7A_0I",
        "videoUrl": "https://www.youtube.com/watch?v=TLHThc7A_0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=96",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-cycle-detection-in-directed-graph-bfs-kahn-s-algorithm"
      },
      {
        "id": 89,
        "index": 97,
        "title": "Graph Questions - Shortest Path in Undirected Graph (Unit Weight)",
        "duration": "35-60 min",
        "youtubeId": "yKR200YgU00",
        "videoUrl": "https://www.youtube.com/watch?v=yKR200YgU00&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=97",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-shortest-path-in-undirected-graph-unit-weight"
      },
      {
        "id": 90,
        "index": 98,
        "title": "Graph Questions - Shortest Path in DAG (Directed Acyclic Graph)",
        "duration": "35-60 min",
        "youtubeId": "ZfJ3O-5G_iQ",
        "videoUrl": "https://www.youtube.com/watch?v=ZfJ3O-5G_iQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=98",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-shortest-path-in-dag-directed-acyclic-graph"
      },
      {
        "id": 91,
        "index": 99,
        "title": "Graph Questions - Dijkstra's Algorithm (Shortest Path)",
        "duration": "35-60 min",
        "youtubeId": "dRz_qjA-0hM",
        "videoUrl": "https://www.youtube.com/watch?v=dRz_qjA-0hM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=99",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-dijkstra-s-algorithm-shortest-path"
      },
      {
        "id": 92,
        "index": 100,
        "title": "Graph Questions - Prim's Algorithm (Minimum Spanning Tree)",
        "duration": "35-60 min",
        "youtubeId": "ySp2EOLN_20",
        "videoUrl": "https://www.youtube.com/watch?v=ySp2EOLN_20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=100",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-prim-s-algorithm-minimum-spanning-tree"
      },
      {
        "id": 93,
        "index": 101,
        "title": "Graph Questions - Kruskal's Algorithm (Minimum Spanning Tree)",
        "duration": "35-60 min",
        "youtubeId": "E-y1n5E_S4w",
        "videoUrl": "https://www.youtube.com/watch?v=E-y1n5E_S4w&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=101",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-kruskal-s-algorithm-minimum-spanning-tree"
      },
      {
        "id": 94,
        "index": 102,
        "title": "Graph Questions - Bellman Ford Algorithm (Shortest Path for Negative Weights)",
        "duration": "35-60 min",
        "youtubeId": "JgtHZhGgDPE",
        "videoUrl": "https://www.youtube.com/watch?v=JgtHZhGgDPE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=102",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-bellman-ford-algorithm-shortest-path-for-negative-weights"
      },
      {
        "id": 95,
        "index": 103,
        "title": "Graph Questions - Floyd Warshall Algorithm (All-Pairs Shortest Path)",
        "duration": "35-60 min",
        "youtubeId": "L2GzV2C3_Gk",
        "videoUrl": "https://www.youtube.com/watch?v=L2GzV2C3_Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=103",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-floyd-warshall-algorithm-all-pairs-shortest-path"
      },
      {
        "id": 96,
        "index": 104,
        "title": "Graph Questions - Bridges in Graph (Tarjan's Algorithm/DFS)",
        "duration": "35-60 min",
        "youtubeId": "qrKbCgQy548",
        "videoUrl": "https://www.youtube.com/watch?v=qrKbCgQy548&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=104",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-bridges-in-graph-tarjan-s-algorithm-dfs"
      },
      {
        "id": 97,
        "index": 105,
        "title": "Graph Questions - Articulation Point in Graph (Tarjan's Algorithm/DFS)",
        "duration": "35-60 min",
        "youtubeId": "qrKbCgQy548",
        "videoUrl": "https://www.youtube.com/watch?v=qrKbCgQy548&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=105",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-articulation-point-in-graph-tarjan-s-algorithm-dfs"
      },
      {
        "id": 98,
        "index": 106,
        "title": "Graph Questions - Strongly Connected Components (Kosaraju's Algorithm)",
        "duration": "35-60 min",
        "youtubeId": "Vd0-g2_y-FM",
        "videoUrl": "https://www.youtube.com/watch?v=Vd0-g2_y-FM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=106",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=graph-questions-strongly-connected-components-kosaraju-s-algorithm"
      },
      {
        "id": 99,
        "index": 107,
        "title": "Dynamic Programming [Introduction + Memoization + Tabulation]",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=107",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 100,
        "index": 108,
        "title": "Dynamic Programming Questions (Fibonacci, Climbing Stairs)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=108",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dynamic-programming-questions-fibonacci-climbing-stairs"
      },
      {
        "id": 101,
        "index": 109,
        "title": "DP Questions - House Robber Problem",
        "duration": "35-60 min",
        "youtubeId": "3gZ5Oq-B5bE",
        "videoUrl": "https://www.youtube.com/watch?v=3gZ5Oq-B5bE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=109",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-house-robber-problem"
      },
      {
        "id": 102,
        "index": 110,
        "title": "DP Questions - Minimum Cost to Climb Stairs",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=110",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-minimum-cost-to-climb-stairs"
      },
      {
        "id": 103,
        "index": 111,
        "title": "DP Questions - Maximum sum of non-adjacent elements",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=111",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-maximum-sum-of-non-adjacent-elements"
      },
      {
        "id": 104,
        "index": 112,
        "title": "DP Questions - Min Cost of Tickets",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=112",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-min-cost-of-tickets"
      },
      {
        "id": 105,
        "index": 113,
        "title": "DP Questions - Subset Sum Problem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=113",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-subset-sum-problem"
      },
      {
        "id": 106,
        "index": 114,
        "title": "DP Questions - Knapsack Problem (0/1 Knapsack)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=114",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-knapsack-problem-0-1-knapsack"
      },
      {
        "id": 107,
        "index": 115,
        "title": "DP Questions - Unbounded Knapsack Problem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=115",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-unbounded-knapsack-problem"
      },
      {
        "id": 108,
        "index": 116,
        "title": "DP Questions - Rod Cutting Problem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=116",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-rod-cutting-problem"
      },
      {
        "id": 109,
        "index": 117,
        "title": "DP Questions - Longest Common Subsequence (LCS)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=117",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-common-subsequence-lcs"
      },
      {
        "id": 110,
        "index": 118,
        "title": "DP Questions - Edit Distance (Minimum Operations to convert String A to B)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=118",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-edit-distance-minimum-operations-to-convert-string-a-to-b"
      },
      {
        "id": 111,
        "index": 119,
        "title": "DP Questions - Longest Palindromic Subsequence",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=119",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-palindromic-subsequence"
      },
      {
        "id": 112,
        "index": 120,
        "title": "DP Questions - Longest Increasing Subsequence (LIS)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=120",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-questions-longest-increasing-subsequence-lis"
      },
      {
        "id": 113,
        "index": 121,
        "title": "Greedy Algorithms [Introduction & Theory]",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=121",
        "sectionTitle": "Greedy Algorithms",
        "tags": [
          "Greedy",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 114,
        "index": 122,
        "title": "Greedy Questions - Activity Selection Problem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=122",
        "sectionTitle": "Greedy Algorithms",
        "tags": [
          "Greedy",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=greedy-questions-activity-selection-problem"
      },
      {
        "id": 115,
        "index": 123,
        "title": "Greedy Questions - Fractional Knapsack Problem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=123",
        "sectionTitle": "Greedy Algorithms",
        "tags": [
          "Greedy",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=greedy-questions-fractional-knapsack-problem"
      },
      {
        "id": 116,
        "index": 124,
        "title": "Trie Problems - Max XOR Pair in an Array",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=124",
        "sectionTitle": "Tries (Continuation) & Other Advanced Topics",
        "tags": [
          "Tries",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=trie-problems-max-xor-pair-in-an-array"
      },
      {
        "id": 117,
        "index": 125,
        "title": "Advanced Topics (Bit Manipulation, Sliding Window, Two Pointers etc.)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=125",
        "sectionTitle": "Tries (Continuation) & Other Advanced Topics",
        "tags": [
          "Tries",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 118,
        "index": 126,
        "title": "String Matching Algorithms (Rabin Karp, KMP)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=126",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 119,
        "index": 127,
        "title": "Segment Trees (Introduction)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=127",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 120,
        "index": 128,
        "title": "Fenwick Tree/Binary Indexed Tree (BIT)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=128",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 121,
        "index": 129,
        "title": "Suffix Array/Suffix Tree",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=129",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 122,
        "index": 130,
        "title": "Max Flow Min Cut Theorem",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=130",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 123,
        "index": 131,
        "title": "Hashing & Collision Resolution",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=131",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 124,
        "index": 132,
        "title": "Disjoint Set Union (DSU) / Union Find",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=132",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 125,
        "index": 133,
        "title": "Fenwick Tree Applications",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=133",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 126,
        "index": 134,
        "title": "Segment Tree Advanced Problems",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=134",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=segment-tree-advanced-problems"
      },
      {
        "id": 127,
        "index": 135,
        "title": "Mo's Algorithm",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=135",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 128,
        "index": 136,
        "title": "DP on Grids",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=136",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 129,
        "index": 137,
        "title": "DP on Trees",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=137",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 130,
        "index": 138,
        "title": "DP on Strings",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=138",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 131,
        "index": 139,
        "title": "Game Theory DP",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=139",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 132,
        "index": 140,
        "title": "Maximum Bipartite Matching",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=140",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 133,
        "index": 141,
        "title": "Advanced DP with Bitmasking",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=141",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 134,
        "index": 142,
        "title": "DP on Trees (Advanced)",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=142",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 135,
        "index": 143,
        "title": "DP on Graphs",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=143",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 136,
        "index": 144,
        "title": "DP - LIS Advanced Problems",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=144",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=dp-lis-advanced-problems"
      },
      {
        "id": 137,
        "index": 145,
        "title": "Dynamic Programming Conclusion",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=145",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 138,
        "index": 146,
        "title": "Competitive Programming Tips & Tricks",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 139,
        "index": 147,
        "title": "Interview Preparation Strategy",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 140,
        "index": 148,
        "title": "How to Get Better at DSA & CP",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 141,
        "index": 149,
        "title": "Final Thoughts & Roadmap",
        "duration": "35-60 min",
        "youtubeId": "NNZqK-Wb0Gk",
        "videoUrl": "https://www.youtube.com/watch?v=NNZqK-Wb0Gk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=149",
        "sectionTitle": "Advanced Topics",
        "tags": [
          "Advanced",
          "DSA"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "shradha-khapra-dsa-playlist",
    "title": "Shradha Khapra DSA Interview Preparation Playlist",
    "category": "dsa",
    "instructor": "Shradha Khapra",
    "channel": "Apna College",
    "totalVideos": 122,
    "totalDuration": "95+ hrs",
    "rating": 4.9,
    "badge": "Java & C++ \u2022 FAANG Prep",
    "description": "Comprehensive C++ DSA Series by Shradha Khapra Ma'am covering from basics to advanced data structures and algorithms.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvWPqTkUSlB32kJop",
    "thumbnailType": "shradha-khapra",
    "sections": [
      {
        "title": "Fundamentals & Basics",
        "videosCount": 8,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Flowchart & Pseudocode + Installation",
            "duration": "35-60 min",
            "youtubeId": "VTLCoHnyACE",
            "videoUrl": "https://www.youtube.com/watch?v=VTLCoHnyACE",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Variable, Data Types & Operators",
            "duration": "35-60 min",
            "youtubeId": "Dxu7GKtdbnA",
            "videoUrl": "https://www.youtube.com/watch?v=Dxu7GKtdbnA",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Conditional Statements & Loops",
            "duration": "35-60 min",
            "youtubeId": "qR9U6bKxJ7g",
            "videoUrl": "https://www.youtube.com/watch?v=qR9U6bKxJ7g",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "Patterns",
            "duration": "35-60 min",
            "youtubeId": "rga_q2N7vU8",
            "videoUrl": "https://www.youtube.com/watch?v=rga_q2N7vU8",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Functions",
            "duration": "35-60 min",
            "youtubeId": "P08Z_NC8GuY",
            "videoUrl": "https://www.youtube.com/watch?v=P08Z_NC8GuY",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Binary Number System",
            "duration": "35-60 min",
            "youtubeId": "xpy5NXiBFvA",
            "videoUrl": "https://www.youtube.com/watch?v=xpy5NXiBFvA",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Bitwise Operators, Data Type Modifiers & more",
            "duration": "35-60 min",
            "youtubeId": "r-u4uh3QvsQ",
            "videoUrl": "https://www.youtube.com/watch?v=r-u4uh3QvsQ",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 28,
            "title": "How to setup C++ compiler on Mac ?",
            "duration": "35-60 min",
            "youtubeId": "varXreLWPRo",
            "videoUrl": "https://www.youtube.com/watch?v=varXreLWPRo",
            "sectionTitle": "Fundamentals & Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Arrays & Vectors",
        "videosCount": 12,
        "videos": [
          {
            "id": 9,
            "index": 8,
            "title": "Array Data Structure - Part1",
            "duration": "35-60 min",
            "youtubeId": "8wmn7k1TTcI",
            "videoUrl": "https://www.youtube.com/watch?v=8wmn7k1TTcI",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 9,
            "title": "Vectors in C++ | Arrays Part 2",
            "duration": "35-60 min",
            "youtubeId": "NWg38xWYzEg",
            "videoUrl": "https://www.youtube.com/watch?v=NWg38xWYzEg",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 10,
            "title": "Kadane's Algorithm | Maximum Subarray Sum",
            "duration": "35-60 min",
            "youtubeId": "9IZYqostl2M",
            "videoUrl": "https://www.youtube.com/watch?v=9IZYqostl2M",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 11,
            "title": "Majority Element | Moore's Voting Algorithm | Pair Sum",
            "duration": "35-60 min",
            "youtubeId": "_xqIp2rj8bo",
            "videoUrl": "https://www.youtube.com/watch?v=_xqIp2rj8bo",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 12,
            "title": "Time & Space Complexity",
            "duration": "35-60 min",
            "youtubeId": "PwKv8fOcriM",
            "videoUrl": "https://www.youtube.com/watch?v=PwKv8fOcriM",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 13,
            "title": "Buy and Sell Stock Problem and Pow(X,N) Power exponential Problem",
            "duration": "35-60 min",
            "youtubeId": "WBzZCm46mFo",
            "videoUrl": "https://www.youtube.com/watch?v=WBzZCm46mFo",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=buy-and-sell-stock-problem-and-pow-x-n-power-exponential-problem"
          },
          {
            "id": 15,
            "index": 14,
            "title": "Container with Most Water Problem | Two Pointer Approach",
            "duration": "35-60 min",
            "youtubeId": "EbkMABpP52U",
            "videoUrl": "https://www.youtube.com/watch?v=EbkMABpP52U",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=container-with-most-water-problem-two-pointer-approach"
          },
          {
            "id": 16,
            "index": 15,
            "title": "Product of Array Except Self | Leetcode 238",
            "duration": "35-60 min",
            "youtubeId": "TW2m8m_FNJE",
            "videoUrl": "https://www.youtube.com/watch?v=TW2m8m_FNJE",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=product-of-array-except-self-leetcode-238"
          },
          {
            "id": 17,
            "index": 34,
            "title": "Maths for DSA - One Shot | Euclid's Algorithm | Sieve of Eratosthenes",
            "duration": "35-60 min",
            "youtubeId": "Y4KdgqV1IqA",
            "videoUrl": "https://www.youtube.com/watch?v=Y4KdgqV1IqA",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 35,
            "title": "2D Arrays in C++ | Part 1",
            "duration": "35-60 min",
            "youtubeId": "lBL8327gq8I",
            "videoUrl": "https://www.youtube.com/watch?v=lBL8327gq8I",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 36,
            "title": "Search a 2D Matrix - Variation I & II | 2D Arrays - Part 2",
            "duration": "35-60 min",
            "youtubeId": "LEFFjgt5i6w",
            "videoUrl": "https://www.youtube.com/watch?v=LEFFjgt5i6w",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 37,
            "title": "Spiral Matrix | 2D Arrays - Part 3 | Leetcode 54",
            "duration": "35-60 min",
            "youtubeId": "XMpdvwUObho",
            "videoUrl": "https://www.youtube.com/watch?v=XMpdvwUObho",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=spiral-matrix-2d-arrays-part-3-leetcode-54"
          }
        ]
      },
      {
        "title": "Searching & Sorting",
        "videosCount": 12,
        "videos": [
          {
            "id": 21,
            "index": 17,
            "title": "Binary Search Algorithm - Iterative and Recursive",
            "duration": "35-60 min",
            "youtubeId": "TbbSJrY5GqQ",
            "videoUrl": "https://www.youtube.com/watch?v=TbbSJrY5GqQ",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 18,
            "title": "Search in Rotated Sorted Array | Leetcode 33",
            "duration": "35-60 min",
            "youtubeId": "6WNZQBHWQJs",
            "videoUrl": "https://www.youtube.com/watch?v=6WNZQBHWQJs",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=search-in-rotated-sorted-array-leetcode-33"
          },
          {
            "id": 23,
            "index": 19,
            "title": "Peak Index in Mountain Array | Leetcode 852",
            "duration": "35-60 min",
            "youtubeId": "RjxD6UXGlhc",
            "videoUrl": "https://www.youtube.com/watch?v=RjxD6UXGlhc",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=peak-index-in-mountain-array-leetcode-852"
          },
          {
            "id": 24,
            "index": 20,
            "title": "Single Element in Sorted Array | Leetcode 540",
            "duration": "35-60 min",
            "youtubeId": "qsbCBduIs40",
            "videoUrl": "https://www.youtube.com/watch?v=qsbCBduIs40",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=single-element-in-sorted-array-leetcode-540"
          },
          {
            "id": 25,
            "index": 21,
            "title": "Book Allocation or Allocate Books Problem",
            "duration": "35-60 min",
            "youtubeId": "JRAByolWqhw",
            "videoUrl": "https://www.youtube.com/watch?v=JRAByolWqhw",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=book-allocation-or-allocate-books-problem"
          },
          {
            "id": 26,
            "index": 22,
            "title": "Painter's Partition Problem",
            "duration": "35-60 min",
            "youtubeId": "srsFN5OHBgw",
            "videoUrl": "https://www.youtube.com/watch?v=srsFN5OHBgw",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=painter-s-partition-problem"
          },
          {
            "id": 27,
            "index": 23,
            "title": "Aggressive Cows Problem",
            "duration": "35-60 min",
            "youtubeId": "7wOzDqsfXy0",
            "videoUrl": "https://www.youtube.com/watch?v=7wOzDqsfXy0",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=aggressive-cows-problem"
          },
          {
            "id": 28,
            "index": 24,
            "title": "Sorting Algorithms | Bubble Sort, Selection Sort & Insertion Sort",
            "duration": "35-60 min",
            "youtubeId": "1jCFUv-Xlqo",
            "videoUrl": "https://www.youtube.com/watch?v=1jCFUv-Xlqo",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 25,
            "title": "Sort an Array of 0s, 1s & 2s | DNF Sorting Algorithm",
            "duration": "35-60 min",
            "youtubeId": "J48aGjfjYTI",
            "videoUrl": "https://www.youtube.com/watch?v=J48aGjfjYTI",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 26,
            "title": "Merge Sorted Arrays Problem and Next Permutation Problem",
            "duration": "35-60 min",
            "youtubeId": "-1cLK6PaLsQ",
            "videoUrl": "https://www.youtube.com/watch?v=-1cLK6PaLsQ",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=merge-sorted-arrays-problem-and-next-permutation-problem"
          },
          {
            "id": 31,
            "index": 51,
            "title": "Merge Sort Algorithm | Recursion & Backtracking",
            "duration": "35-60 min",
            "youtubeId": "cQDtOBTy7_Y",
            "videoUrl": "https://www.youtube.com/watch?v=cQDtOBTy7_Y",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 53,
            "title": "Quick Sort Algorithm",
            "duration": "35-60 min",
            "youtubeId": "8MNB0Mba_Dc",
            "videoUrl": "https://www.youtube.com/watch?v=8MNB0Mba_Dc",
            "sectionTitle": "Searching & Sorting",
            "tags": [
              "Searching",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Pointers & STL",
        "videosCount": 2,
        "videos": [
          {
            "id": 33,
            "index": 16,
            "title": "Pointers in C++ | In Detail",
            "duration": "35-60 min",
            "youtubeId": "qYEjR6M0wSk",
            "videoUrl": "https://www.youtube.com/watch?v=qYEjR6M0wSk",
            "sectionTitle": "Pointers & STL",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 27,
            "title": "C++ STL Complete Tutorial | Standard Template Library - One Shot",
            "duration": "35-60 min",
            "youtubeId": "okhdtEk1iKk",
            "videoUrl": "https://www.youtube.com/watch?v=okhdtEk1iKk",
            "sectionTitle": "Pointers & STL",
            "tags": [
              "Pointers",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Strings & Hashing",
        "videosCount": 9,
        "videos": [
          {
            "id": 35,
            "index": 29,
            "title": "Strings & Character Arrays in C++ - Part 1",
            "duration": "35-60 min",
            "youtubeId": "MOSjYaVymcU",
            "videoUrl": "https://www.youtube.com/watch?v=MOSjYaVymcU",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 30,
            "title": "Valid Palindrome & Remove all Occurrences | Part 2",
            "duration": "35-60 min",
            "youtubeId": "dSRFgEs3a6A",
            "videoUrl": "https://www.youtube.com/watch?v=dSRFgEs3a6A",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 31,
            "title": "Strings - Part 3 | Permutation in String",
            "duration": "35-60 min",
            "youtubeId": "VXewy91P0S4",
            "videoUrl": "https://www.youtube.com/watch?v=VXewy91P0S4",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 38,
            "index": 32,
            "title": "Strings - Part 4 | Reverse Words in String",
            "duration": "35-60 min",
            "youtubeId": "RitppzIdMCo",
            "videoUrl": "https://www.youtube.com/watch?v=RitppzIdMCo",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 39,
            "index": 33,
            "title": "String Compression problem | Leetcode 443",
            "duration": "35-60 min",
            "youtubeId": "cAB15h6-sWA",
            "videoUrl": "https://www.youtube.com/watch?v=cAB15h6-sWA",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=string-compression-problem-leetcode-443"
          },
          {
            "id": 40,
            "index": 38,
            "title": "Two Sum | Find Duplicate | Find Repeating & Missing Values | Hashing",
            "duration": "35-60 min",
            "youtubeId": "0Fxc_jKj2vo",
            "videoUrl": "https://www.youtube.com/watch?v=0Fxc_jKj2vo",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 41,
            "index": 39,
            "title": "3 Sum | Brute, Better & Optimized Approach",
            "duration": "35-60 min",
            "youtubeId": "K-RsltkN63w",
            "videoUrl": "https://www.youtube.com/watch?v=K-RsltkN63w",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 42,
            "index": 40,
            "title": "4 Sum Problem | Optimal Approach",
            "duration": "35-60 min",
            "youtubeId": "X6sL8JTROLY",
            "videoUrl": "https://www.youtube.com/watch?v=X6sL8JTROLY",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=4-sum-problem-optimal-approach"
          },
          {
            "id": 43,
            "index": 41,
            "title": "Subarray Sum Equals K | Brute-Better-Optimal",
            "duration": "35-60 min",
            "youtubeId": "KDH4mhFVvHw",
            "videoUrl": "https://www.youtube.com/watch?v=KDH4mhFVvHw",
            "sectionTitle": "Strings & Hashing",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Recursion & Backtracking",
        "videosCount": 10,
        "videos": [
          {
            "id": 44,
            "index": 42,
            "title": "Recursion Tutorial - Basics to Advanced | Part 1",
            "duration": "35-60 min",
            "youtubeId": "9OsMG4fI4OY",
            "videoUrl": "https://www.youtube.com/watch?v=9OsMG4fI4OY",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 45,
            "index": 43,
            "title": "Recursion Part 2 : Fibonacci, Binary search, Find if array sorted",
            "duration": "35-60 min",
            "youtubeId": "4iT-GhvSKzc",
            "videoUrl": "https://www.youtube.com/watch?v=4iT-GhvSKzc",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 46,
            "index": 44,
            "title": "Recursion Part 3 : Backtracking | Print all Subsets | Subsets II",
            "duration": "35-60 min",
            "youtubeId": "pNzljlzDCiI",
            "videoUrl": "https://www.youtube.com/watch?v=pNzljlzDCiI",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 47,
            "index": 45,
            "title": "Permutations of an Array/String | Recursion & Backtracking",
            "duration": "35-60 min",
            "youtubeId": "N4gJDGdhpLw",
            "videoUrl": "https://www.youtube.com/watch?v=N4gJDGdhpLw",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 48,
            "index": 46,
            "title": "N-Queens Problem | using Backtracking | Leetcode Hard",
            "duration": "35-60 min",
            "youtubeId": "BdSJnIdR-4s",
            "videoUrl": "https://www.youtube.com/watch?v=BdSJnIdR-4s",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=n-queens-problem-using-backtracking-leetcode-hard"
          },
          {
            "id": 49,
            "index": 47,
            "title": "Sudoku Solver Problem | using Backtracking | Leetcode Hard",
            "duration": "35-60 min",
            "youtubeId": "70cP3qtJp-s",
            "videoUrl": "https://www.youtube.com/watch?v=70cP3qtJp-s",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=sudoku-solver-problem-using-backtracking-leetcode-hard"
          },
          {
            "id": 50,
            "index": 48,
            "title": "Rat in a Maze Problem | Backtracking",
            "duration": "35-60 min",
            "youtubeId": "D8Yze9CDDAw",
            "videoUrl": "https://www.youtube.com/watch?v=D8Yze9CDDAw",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=rat-in-a-maze-problem-backtracking"
          },
          {
            "id": 51,
            "index": 49,
            "title": "Combination Sum Problem | Recursion & Backtracking",
            "duration": "35-60 min",
            "youtubeId": "jkgZw2WEaqA",
            "videoUrl": "https://www.youtube.com/watch?v=jkgZw2WEaqA",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=combination-sum-problem-recursion-backtracking"
          },
          {
            "id": 52,
            "index": 50,
            "title": "Palindrome Partitioning Problem | Recursion & Backtracking",
            "duration": "35-60 min",
            "youtubeId": "aZ0B1eWkSVU",
            "videoUrl": "https://www.youtube.com/watch?v=aZ0B1eWkSVU",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=palindrome-partitioning-problem-recursion-backtracking"
          },
          {
            "id": 53,
            "index": 54,
            "title": "Count Inversions Problem | Brute and Optimal",
            "duration": "35-60 min",
            "youtubeId": "ynnWDBTdVi0",
            "videoUrl": "https://www.youtube.com/watch?v=ynnWDBTdVi0",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=count-inversions-problem-brute-and-optimal"
          }
        ]
      },
      {
        "title": "Object Oriented Programming (OOPs)",
        "videosCount": 1,
        "videos": [
          {
            "id": 54,
            "index": 56,
            "title": "OOPs Tutorial in One Shot | Object Oriented Programming | in C++",
            "duration": "35-60 min",
            "youtubeId": "mlIUKyZIUUU",
            "videoUrl": "https://www.youtube.com/watch?v=mlIUKyZIUUU",
            "sectionTitle": "Object Oriented Programming (OOPs)",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Linked List",
        "videosCount": 12,
        "videos": [
          {
            "id": 55,
            "index": 57,
            "title": "Introduction to Linked List | Data Structures & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "LyuuqCVkP5I",
            "videoUrl": "https://www.youtube.com/watch?v=LyuuqCVkP5I",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 56,
            "index": 58,
            "title": "Reverse a Linked List",
            "duration": "35-60 min",
            "youtubeId": "R-CKBYnOv1U",
            "videoUrl": "https://www.youtube.com/watch?v=R-CKBYnOv1U",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 57,
            "index": 59,
            "title": "Middle of a Linked List",
            "duration": "35-60 min",
            "youtubeId": "nzaHG0dme4g",
            "videoUrl": "https://www.youtube.com/watch?v=nzaHG0dme4g",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 58,
            "index": 60,
            "title": "Detect & Remove Cycle in Linked List",
            "duration": "35-60 min",
            "youtubeId": "-1E8ZMS0gSs",
            "videoUrl": "https://www.youtube.com/watch?v=-1E8ZMS0gSs",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 59,
            "index": 61,
            "title": "Merge Two Sorted Lists",
            "duration": "35-60 min",
            "youtubeId": "f8RPIb-0DDE",
            "videoUrl": "https://www.youtube.com/watch?v=f8RPIb-0DDE",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 60,
            "index": 63,
            "title": "Doubly Linked List Tutorial",
            "duration": "35-60 min",
            "youtubeId": "bO5DasTsaRQ",
            "videoUrl": "https://www.youtube.com/watch?v=bO5DasTsaRQ",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 61,
            "index": 64,
            "title": "Circular Linked List in Data Structures",
            "duration": "35-60 min",
            "youtubeId": "e6lZY5Yha8U",
            "videoUrl": "https://www.youtube.com/watch?v=e6lZY5Yha8U",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 62,
            "index": 65,
            "title": "Flatten a Doubly Linked List | Leetcode 430",
            "duration": "35-60 min",
            "youtubeId": "I8b0rff5F9M",
            "videoUrl": "https://www.youtube.com/watch?v=I8b0rff5F9M",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=flatten-a-doubly-linked-list-leetcode-430"
          },
          {
            "id": 63,
            "index": 66,
            "title": "Reverse Nodes in K-Group | Linked List",
            "duration": "35-60 min",
            "youtubeId": "-swgIiMIlJo",
            "videoUrl": "https://www.youtube.com/watch?v=-swgIiMIlJo",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 64,
            "index": 67,
            "title": "Swap Nodes in Pairs | Linked List",
            "duration": "35-60 min",
            "youtubeId": "wwbTMNVlFHQ",
            "videoUrl": "https://www.youtube.com/watch?v=wwbTMNVlFHQ",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 65,
            "index": 76,
            "title": "Implement LRU Cache | Linked List",
            "duration": "35-60 min",
            "youtubeId": "GsY6y0iPaHw",
            "videoUrl": "https://www.youtube.com/watch?v=GsY6y0iPaHw",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 66,
            "index": 77,
            "title": "Copy List with Random Pointer",
            "duration": "35-60 min",
            "youtubeId": "8ze7Zopdsaw",
            "videoUrl": "https://www.youtube.com/watch?v=8ze7Zopdsaw",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Stacks & Queues",
        "videosCount": 16,
        "videos": [
          {
            "id": 67,
            "index": 68,
            "title": "Introduction to STACKS | Data Structures & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "0X-fV-1ir9c",
            "videoUrl": "https://www.youtube.com/watch?v=0X-fV-1ir9c",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 68,
            "index": 69,
            "title": "Valid Parentheses | Stack",
            "duration": "35-60 min",
            "youtubeId": "NlHupEeDXzY",
            "videoUrl": "https://www.youtube.com/watch?v=NlHupEeDXzY",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 69,
            "index": 70,
            "title": "Stock Span Problem | Optimal Solution",
            "duration": "35-60 min",
            "youtubeId": "01vBuZyMfqk",
            "videoUrl": "https://www.youtube.com/watch?v=01vBuZyMfqk",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stock-span-problem-optimal-solution"
          },
          {
            "id": 70,
            "index": 71,
            "title": "Next Greater Element | Optimal Solution & Code",
            "duration": "35-60 min",
            "youtubeId": "NKbExYwvjb0",
            "videoUrl": "https://www.youtube.com/watch?v=NKbExYwvjb0",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 71,
            "index": 72,
            "title": "Previous Smaller Element | Optimal Solution & Code",
            "duration": "35-60 min",
            "youtubeId": "WnjUfBn9nZM",
            "videoUrl": "https://www.youtube.com/watch?v=WnjUfBn9nZM",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 72,
            "index": 73,
            "title": "Design a Min Stack | Optimal Solution & Code",
            "duration": "35-60 min",
            "youtubeId": "wHDm-N2m2XY",
            "videoUrl": "https://www.youtube.com/watch?v=wHDm-N2m2XY",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 73,
            "index": 74,
            "title": "Largest Rectangle in Histogram | Best Solution & Code",
            "duration": "35-60 min",
            "youtubeId": "ysy1o-QEj3k",
            "videoUrl": "https://www.youtube.com/watch?v=ysy1o-QEj3k",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 74,
            "index": 75,
            "title": "Next Greater Element - II | Stack & Queue",
            "duration": "35-60 min",
            "youtubeId": "If--3pm9K3U",
            "videoUrl": "https://www.youtube.com/watch?v=If--3pm9K3U",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 75,
            "index": 76,
            "title": "The Celebrity Problem | Stack & Queue",
            "duration": "35-60 min",
            "youtubeId": "OZPmEA_8FM8",
            "videoUrl": "https://www.youtube.com/watch?v=OZPmEA_8FM8",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-celebrity-problem-stack-queue"
          },
          {
            "id": 76,
            "index": 77,
            "title": "Trapping Rainwater Problem | Optimal Solution & Code",
            "duration": "35-60 min",
            "youtubeId": "UHHp8USwx4M",
            "videoUrl": "https://www.youtube.com/watch?v=UHHp8USwx4M",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=trapping-rainwater-problem-optimal-solution-code"
          },
          {
            "id": 77,
            "index": 79,
            "title": "New Chapter : Queue Data Structure",
            "duration": "35-60 min",
            "youtubeId": "Khf9v67Ya30",
            "videoUrl": "https://www.youtube.com/watch?v=Khf9v67Ya30",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 78,
            "index": 80,
            "title": "Circular Queue in Data Structure",
            "duration": "35-60 min",
            "youtubeId": "4mKKolshFD0",
            "videoUrl": "https://www.youtube.com/watch?v=4mKKolshFD0",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 79,
            "index": 81,
            "title": "Implement Queue using Stack & Stack using Queue",
            "duration": "35-60 min",
            "youtubeId": "sFvP5Ois0CE",
            "videoUrl": "https://www.youtube.com/watch?v=sFvP5Ois0CE",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 80,
            "index": 82,
            "title": "First Unique Character in String | Leetcode 387",
            "duration": "35-60 min",
            "youtubeId": "sqyCBvEQN9c",
            "videoUrl": "https://www.youtube.com/watch?v=sqyCBvEQN9c",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=first-unique-character-in-string-leetcode-387"
          },
          {
            "id": 81,
            "index": 83,
            "title": "Sliding Window Maximum | Queue",
            "duration": "35-60 min",
            "youtubeId": "XwG5cozqfaM",
            "videoUrl": "https://www.youtube.com/watch?v=XwG5cozqfaM",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 82,
            "index": 84,
            "title": "Gas Station | Greedy Approach | Leetcode 134",
            "duration": "35-60 min",
            "youtubeId": "SmTow5Ht4iU",
            "videoUrl": "https://www.youtube.com/watch?v=SmTow5Ht4iU",
            "sectionTitle": "Stacks & Queues",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=gas-station-greedy-approach-leetcode-134"
          }
        ]
      },
      {
        "title": "Binary Trees",
        "videosCount": 10,
        "videos": [
          {
            "id": 83,
            "index": 85,
            "title": "Binary Trees in Data Structures | Tree Traversal | DSA Placement Series",
            "duration": "35-60 min",
            "youtubeId": "eKJrXBCRuNQ",
            "videoUrl": "https://www.youtube.com/watch?v=eKJrXBCRuNQ",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 84,
            "index": 86,
            "title": "L.84 Height of a Binary Tree | Count of Nodes in a Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "7tzHzN_Ehus",
            "videoUrl": "https://www.youtube.com/watch?v=7tzHzN_Ehus",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 85,
            "index": 87,
            "title": "L.85 Identical Tree (same tree) | Subtree of another Tree",
            "duration": "35-60 min",
            "youtubeId": "tumW7jsjv68",
            "videoUrl": "https://www.youtube.com/watch?v=tumW7jsjv68",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 86,
            "index": 88,
            "title": "L.86 Diameter of Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "aPyDPImR5UM",
            "videoUrl": "https://www.youtube.com/watch?v=aPyDPImR5UM",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 87,
            "index": 89,
            "title": "Top View of a Binary Tree | DSA Series : L.87",
            "duration": "35-60 min",
            "youtubeId": "FGr-syrhvOA",
            "videoUrl": "https://www.youtube.com/watch?v=FGr-syrhvOA",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 88,
            "index": 90,
            "title": "Kth Level of a Binary Tree | DSA Series : L.88",
            "duration": "35-60 min",
            "youtubeId": "ze4JO_ODl3w",
            "videoUrl": "https://www.youtube.com/watch?v=ze4JO_ODl3w",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 89,
            "index": 91,
            "title": "Lowest Common Ancestor in Binary Tree | DSA Series : L.89",
            "duration": "35-60 min",
            "youtubeId": "oX5D0uKOMck",
            "videoUrl": "https://www.youtube.com/watch?v=oX5D0uKOMck",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 90,
            "index": 92,
            "title": "Binary Tree Paths | DSA Series : L. 92",
            "duration": "35-60 min",
            "youtubeId": "AWJD__CfM6A",
            "videoUrl": "https://www.youtube.com/watch?v=AWJD__CfM6A",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 91,
            "index": 93,
            "title": "Maximum Width of Binary Tree | DSA Series : L.93",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 92,
            "index": 94,
            "title": "Flatten Binary Tree to Linked List | DSA Series : L.95",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Binary Search Trees (BST)",
        "videosCount": 9,
        "videos": [
          {
            "id": 93,
            "index": 95,
            "title": "Binary Search Trees (BSTs) | DSA Series : L.96",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 94,
            "index": 96,
            "title": "Delete a Node in BST | Case Analysis | DSA Series : L.97",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 95,
            "index": 97,
            "title": "Sorted Array to Balanced BST | DSA Series : L.97",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 96,
            "index": 98,
            "title": "Validate BST | BST Mirror | BST to Sorted Array",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 97,
            "index": 99,
            "title": "Min Distance between BST Nodes | DSA Series : L.99",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 98,
            "index": 100,
            "title": "Lowest Common Ancestor in BST | DSA Series : L.101",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 99,
            "index": 101,
            "title": "Merge Two Binary Search Trees | DSA Series : L.103",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 100,
            "index": 102,
            "title": "Largest BST in Binary Tree | DSA Series : L.105",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 101,
            "index": 103,
            "title": "BST Iterator | DSA Series : L.107",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Heaps & Hashing",
        "videosCount": 5,
        "videos": [
          {
            "id": 102,
            "index": 104,
            "title": "Introduction to Heaps | Max Heap & Min Heap",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Heaps & Hashing",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 103,
            "index": 105,
            "title": "Heap Implementation | Insert, Get, Remove (Heapify)",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Heaps & Hashing",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 104,
            "index": 106,
            "title": "Heap Sort Algorithm | In-place Sorting",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Heaps & Hashing",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 105,
            "index": 107,
            "title": "Priority Queue in STL | Sorting Custom Objects",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Heaps & Hashing",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 106,
            "index": 108,
            "title": "Nearby Cars Problem | Connect Ropes with Minimum Cost",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Heaps & Hashing",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=nearby-cars-problem-connect-ropes-with-minimum-cost"
          }
        ]
      },
      {
        "title": "Graphs",
        "videosCount": 16,
        "videos": [
          {
            "id": 107,
            "index": 109,
            "title": "Introduction to Graphs | Data Structure & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 108,
            "index": 110,
            "title": "BFS Traversal in Graphs | Data Structure & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 109,
            "index": 111,
            "title": "DFS Traversal in Graphs | Data Structure & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 110,
            "index": 112,
            "title": "Has Path Problem | Graph Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=has-path-problem-graph-algorithms"
          },
          {
            "id": 111,
            "index": 113,
            "title": "Connected Components in Graph",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 112,
            "index": 114,
            "title": "Detect a Cycle in Undirected Graph using BFS | Data Structure & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 113,
            "index": 115,
            "title": "Detect a Cycle in Undirected Graph using DFS | Data Structure & Algorithms",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 114,
            "index": 116,
            "title": "Flood Fill Algorithm | Leetcode 733",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=flood-fill-algorithm-leetcode-733"
          },
          {
            "id": 115,
            "index": 117,
            "title": "Number of Islands | Leetcode 200",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=number-of-islands-leetcode-200"
          },
          {
            "id": 116,
            "index": 118,
            "title": "Cycle Detection in Directed Graph using DFS",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 117,
            "index": 119,
            "title": "Bipartite Graph Problem",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bipartite-graph-problem"
          },
          {
            "id": 118,
            "index": 120,
            "title": "Topological Sort using DFS",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 119,
            "index": 121,
            "title": "Topological Sort using BFS (Kahn's Algorithm)",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 120,
            "index": 122,
            "title": "Course Schedule I | Leetcode 207",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=course-schedule-i-leetcode-207"
          },
          {
            "id": 121,
            "index": 123,
            "title": "Course Schedule II | Leetcode 210",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=course-schedule-ii-leetcode-210"
          },
          {
            "id": 122,
            "index": 124,
            "title": "Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method",
            "duration": "35-60 min",
            "youtubeId": "RpgyCJBbl5E",
            "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Flowchart & Pseudocode + Installation",
        "duration": "35-60 min",
        "youtubeId": "VTLCoHnyACE",
        "videoUrl": "https://www.youtube.com/watch?v=VTLCoHnyACE",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Variable, Data Types & Operators",
        "duration": "35-60 min",
        "youtubeId": "Dxu7GKtdbnA",
        "videoUrl": "https://www.youtube.com/watch?v=Dxu7GKtdbnA",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Conditional Statements & Loops",
        "duration": "35-60 min",
        "youtubeId": "qR9U6bKxJ7g",
        "videoUrl": "https://www.youtube.com/watch?v=qR9U6bKxJ7g",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Patterns",
        "duration": "35-60 min",
        "youtubeId": "rga_q2N7vU8",
        "videoUrl": "https://www.youtube.com/watch?v=rga_q2N7vU8",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Functions",
        "duration": "35-60 min",
        "youtubeId": "P08Z_NC8GuY",
        "videoUrl": "https://www.youtube.com/watch?v=P08Z_NC8GuY",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Binary Number System",
        "duration": "35-60 min",
        "youtubeId": "xpy5NXiBFvA",
        "videoUrl": "https://www.youtube.com/watch?v=xpy5NXiBFvA",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Bitwise Operators, Data Type Modifiers & more",
        "duration": "35-60 min",
        "youtubeId": "r-u4uh3QvsQ",
        "videoUrl": "https://www.youtube.com/watch?v=r-u4uh3QvsQ",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 28,
        "title": "How to setup C++ compiler on Mac ?",
        "duration": "35-60 min",
        "youtubeId": "varXreLWPRo",
        "videoUrl": "https://www.youtube.com/watch?v=varXreLWPRo",
        "sectionTitle": "Fundamentals & Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 8,
        "title": "Array Data Structure - Part1",
        "duration": "35-60 min",
        "youtubeId": "8wmn7k1TTcI",
        "videoUrl": "https://www.youtube.com/watch?v=8wmn7k1TTcI",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 9,
        "title": "Vectors in C++ | Arrays Part 2",
        "duration": "35-60 min",
        "youtubeId": "NWg38xWYzEg",
        "videoUrl": "https://www.youtube.com/watch?v=NWg38xWYzEg",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 10,
        "title": "Kadane's Algorithm | Maximum Subarray Sum",
        "duration": "35-60 min",
        "youtubeId": "9IZYqostl2M",
        "videoUrl": "https://www.youtube.com/watch?v=9IZYqostl2M",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 11,
        "title": "Majority Element | Moore's Voting Algorithm | Pair Sum",
        "duration": "35-60 min",
        "youtubeId": "_xqIp2rj8bo",
        "videoUrl": "https://www.youtube.com/watch?v=_xqIp2rj8bo",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 12,
        "title": "Time & Space Complexity",
        "duration": "35-60 min",
        "youtubeId": "PwKv8fOcriM",
        "videoUrl": "https://www.youtube.com/watch?v=PwKv8fOcriM",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 13,
        "title": "Buy and Sell Stock Problem and Pow(X,N) Power exponential Problem",
        "duration": "35-60 min",
        "youtubeId": "WBzZCm46mFo",
        "videoUrl": "https://www.youtube.com/watch?v=WBzZCm46mFo",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=buy-and-sell-stock-problem-and-pow-x-n-power-exponential-problem"
      },
      {
        "id": 15,
        "index": 14,
        "title": "Container with Most Water Problem | Two Pointer Approach",
        "duration": "35-60 min",
        "youtubeId": "EbkMABpP52U",
        "videoUrl": "https://www.youtube.com/watch?v=EbkMABpP52U",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=container-with-most-water-problem-two-pointer-approach"
      },
      {
        "id": 16,
        "index": 15,
        "title": "Product of Array Except Self | Leetcode 238",
        "duration": "35-60 min",
        "youtubeId": "TW2m8m_FNJE",
        "videoUrl": "https://www.youtube.com/watch?v=TW2m8m_FNJE",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=product-of-array-except-self-leetcode-238"
      },
      {
        "id": 17,
        "index": 34,
        "title": "Maths for DSA - One Shot | Euclid's Algorithm | Sieve of Eratosthenes",
        "duration": "35-60 min",
        "youtubeId": "Y4KdgqV1IqA",
        "videoUrl": "https://www.youtube.com/watch?v=Y4KdgqV1IqA",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 35,
        "title": "2D Arrays in C++ | Part 1",
        "duration": "35-60 min",
        "youtubeId": "lBL8327gq8I",
        "videoUrl": "https://www.youtube.com/watch?v=lBL8327gq8I",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 36,
        "title": "Search a 2D Matrix - Variation I & II | 2D Arrays - Part 2",
        "duration": "35-60 min",
        "youtubeId": "LEFFjgt5i6w",
        "videoUrl": "https://www.youtube.com/watch?v=LEFFjgt5i6w",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 37,
        "title": "Spiral Matrix | 2D Arrays - Part 3 | Leetcode 54",
        "duration": "35-60 min",
        "youtubeId": "XMpdvwUObho",
        "videoUrl": "https://www.youtube.com/watch?v=XMpdvwUObho",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=spiral-matrix-2d-arrays-part-3-leetcode-54"
      },
      {
        "id": 21,
        "index": 17,
        "title": "Binary Search Algorithm - Iterative and Recursive",
        "duration": "35-60 min",
        "youtubeId": "TbbSJrY5GqQ",
        "videoUrl": "https://www.youtube.com/watch?v=TbbSJrY5GqQ",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 18,
        "title": "Search in Rotated Sorted Array | Leetcode 33",
        "duration": "35-60 min",
        "youtubeId": "6WNZQBHWQJs",
        "videoUrl": "https://www.youtube.com/watch?v=6WNZQBHWQJs",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=search-in-rotated-sorted-array-leetcode-33"
      },
      {
        "id": 23,
        "index": 19,
        "title": "Peak Index in Mountain Array | Leetcode 852",
        "duration": "35-60 min",
        "youtubeId": "RjxD6UXGlhc",
        "videoUrl": "https://www.youtube.com/watch?v=RjxD6UXGlhc",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=peak-index-in-mountain-array-leetcode-852"
      },
      {
        "id": 24,
        "index": 20,
        "title": "Single Element in Sorted Array | Leetcode 540",
        "duration": "35-60 min",
        "youtubeId": "qsbCBduIs40",
        "videoUrl": "https://www.youtube.com/watch?v=qsbCBduIs40",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=single-element-in-sorted-array-leetcode-540"
      },
      {
        "id": 25,
        "index": 21,
        "title": "Book Allocation or Allocate Books Problem",
        "duration": "35-60 min",
        "youtubeId": "JRAByolWqhw",
        "videoUrl": "https://www.youtube.com/watch?v=JRAByolWqhw",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=book-allocation-or-allocate-books-problem"
      },
      {
        "id": 26,
        "index": 22,
        "title": "Painter's Partition Problem",
        "duration": "35-60 min",
        "youtubeId": "srsFN5OHBgw",
        "videoUrl": "https://www.youtube.com/watch?v=srsFN5OHBgw",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=painter-s-partition-problem"
      },
      {
        "id": 27,
        "index": 23,
        "title": "Aggressive Cows Problem",
        "duration": "35-60 min",
        "youtubeId": "7wOzDqsfXy0",
        "videoUrl": "https://www.youtube.com/watch?v=7wOzDqsfXy0",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=aggressive-cows-problem"
      },
      {
        "id": 28,
        "index": 24,
        "title": "Sorting Algorithms | Bubble Sort, Selection Sort & Insertion Sort",
        "duration": "35-60 min",
        "youtubeId": "1jCFUv-Xlqo",
        "videoUrl": "https://www.youtube.com/watch?v=1jCFUv-Xlqo",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 25,
        "title": "Sort an Array of 0s, 1s & 2s | DNF Sorting Algorithm",
        "duration": "35-60 min",
        "youtubeId": "J48aGjfjYTI",
        "videoUrl": "https://www.youtube.com/watch?v=J48aGjfjYTI",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 26,
        "title": "Merge Sorted Arrays Problem and Next Permutation Problem",
        "duration": "35-60 min",
        "youtubeId": "-1cLK6PaLsQ",
        "videoUrl": "https://www.youtube.com/watch?v=-1cLK6PaLsQ",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=merge-sorted-arrays-problem-and-next-permutation-problem"
      },
      {
        "id": 31,
        "index": 51,
        "title": "Merge Sort Algorithm | Recursion & Backtracking",
        "duration": "35-60 min",
        "youtubeId": "cQDtOBTy7_Y",
        "videoUrl": "https://www.youtube.com/watch?v=cQDtOBTy7_Y",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 53,
        "title": "Quick Sort Algorithm",
        "duration": "35-60 min",
        "youtubeId": "8MNB0Mba_Dc",
        "videoUrl": "https://www.youtube.com/watch?v=8MNB0Mba_Dc",
        "sectionTitle": "Searching & Sorting",
        "tags": [
          "Searching",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 16,
        "title": "Pointers in C++ | In Detail",
        "duration": "35-60 min",
        "youtubeId": "qYEjR6M0wSk",
        "videoUrl": "https://www.youtube.com/watch?v=qYEjR6M0wSk",
        "sectionTitle": "Pointers & STL",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 27,
        "title": "C++ STL Complete Tutorial | Standard Template Library - One Shot",
        "duration": "35-60 min",
        "youtubeId": "okhdtEk1iKk",
        "videoUrl": "https://www.youtube.com/watch?v=okhdtEk1iKk",
        "sectionTitle": "Pointers & STL",
        "tags": [
          "Pointers",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 29,
        "title": "Strings & Character Arrays in C++ - Part 1",
        "duration": "35-60 min",
        "youtubeId": "MOSjYaVymcU",
        "videoUrl": "https://www.youtube.com/watch?v=MOSjYaVymcU",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 30,
        "title": "Valid Palindrome & Remove all Occurrences | Part 2",
        "duration": "35-60 min",
        "youtubeId": "dSRFgEs3a6A",
        "videoUrl": "https://www.youtube.com/watch?v=dSRFgEs3a6A",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 31,
        "title": "Strings - Part 3 | Permutation in String",
        "duration": "35-60 min",
        "youtubeId": "VXewy91P0S4",
        "videoUrl": "https://www.youtube.com/watch?v=VXewy91P0S4",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 38,
        "index": 32,
        "title": "Strings - Part 4 | Reverse Words in String",
        "duration": "35-60 min",
        "youtubeId": "RitppzIdMCo",
        "videoUrl": "https://www.youtube.com/watch?v=RitppzIdMCo",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 39,
        "index": 33,
        "title": "String Compression problem | Leetcode 443",
        "duration": "35-60 min",
        "youtubeId": "cAB15h6-sWA",
        "videoUrl": "https://www.youtube.com/watch?v=cAB15h6-sWA",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=string-compression-problem-leetcode-443"
      },
      {
        "id": 40,
        "index": 38,
        "title": "Two Sum | Find Duplicate | Find Repeating & Missing Values | Hashing",
        "duration": "35-60 min",
        "youtubeId": "0Fxc_jKj2vo",
        "videoUrl": "https://www.youtube.com/watch?v=0Fxc_jKj2vo",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 41,
        "index": 39,
        "title": "3 Sum | Brute, Better & Optimized Approach",
        "duration": "35-60 min",
        "youtubeId": "K-RsltkN63w",
        "videoUrl": "https://www.youtube.com/watch?v=K-RsltkN63w",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 42,
        "index": 40,
        "title": "4 Sum Problem | Optimal Approach",
        "duration": "35-60 min",
        "youtubeId": "X6sL8JTROLY",
        "videoUrl": "https://www.youtube.com/watch?v=X6sL8JTROLY",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=4-sum-problem-optimal-approach"
      },
      {
        "id": 43,
        "index": 41,
        "title": "Subarray Sum Equals K | Brute-Better-Optimal",
        "duration": "35-60 min",
        "youtubeId": "KDH4mhFVvHw",
        "videoUrl": "https://www.youtube.com/watch?v=KDH4mhFVvHw",
        "sectionTitle": "Strings & Hashing",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 42,
        "title": "Recursion Tutorial - Basics to Advanced | Part 1",
        "duration": "35-60 min",
        "youtubeId": "9OsMG4fI4OY",
        "videoUrl": "https://www.youtube.com/watch?v=9OsMG4fI4OY",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 45,
        "index": 43,
        "title": "Recursion Part 2 : Fibonacci, Binary search, Find if array sorted",
        "duration": "35-60 min",
        "youtubeId": "4iT-GhvSKzc",
        "videoUrl": "https://www.youtube.com/watch?v=4iT-GhvSKzc",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 46,
        "index": 44,
        "title": "Recursion Part 3 : Backtracking | Print all Subsets | Subsets II",
        "duration": "35-60 min",
        "youtubeId": "pNzljlzDCiI",
        "videoUrl": "https://www.youtube.com/watch?v=pNzljlzDCiI",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 47,
        "index": 45,
        "title": "Permutations of an Array/String | Recursion & Backtracking",
        "duration": "35-60 min",
        "youtubeId": "N4gJDGdhpLw",
        "videoUrl": "https://www.youtube.com/watch?v=N4gJDGdhpLw",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 48,
        "index": 46,
        "title": "N-Queens Problem | using Backtracking | Leetcode Hard",
        "duration": "35-60 min",
        "youtubeId": "BdSJnIdR-4s",
        "videoUrl": "https://www.youtube.com/watch?v=BdSJnIdR-4s",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=n-queens-problem-using-backtracking-leetcode-hard"
      },
      {
        "id": 49,
        "index": 47,
        "title": "Sudoku Solver Problem | using Backtracking | Leetcode Hard",
        "duration": "35-60 min",
        "youtubeId": "70cP3qtJp-s",
        "videoUrl": "https://www.youtube.com/watch?v=70cP3qtJp-s",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=sudoku-solver-problem-using-backtracking-leetcode-hard"
      },
      {
        "id": 50,
        "index": 48,
        "title": "Rat in a Maze Problem | Backtracking",
        "duration": "35-60 min",
        "youtubeId": "D8Yze9CDDAw",
        "videoUrl": "https://www.youtube.com/watch?v=D8Yze9CDDAw",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=rat-in-a-maze-problem-backtracking"
      },
      {
        "id": 51,
        "index": 49,
        "title": "Combination Sum Problem | Recursion & Backtracking",
        "duration": "35-60 min",
        "youtubeId": "jkgZw2WEaqA",
        "videoUrl": "https://www.youtube.com/watch?v=jkgZw2WEaqA",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=combination-sum-problem-recursion-backtracking"
      },
      {
        "id": 52,
        "index": 50,
        "title": "Palindrome Partitioning Problem | Recursion & Backtracking",
        "duration": "35-60 min",
        "youtubeId": "aZ0B1eWkSVU",
        "videoUrl": "https://www.youtube.com/watch?v=aZ0B1eWkSVU",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=palindrome-partitioning-problem-recursion-backtracking"
      },
      {
        "id": 53,
        "index": 54,
        "title": "Count Inversions Problem | Brute and Optimal",
        "duration": "35-60 min",
        "youtubeId": "ynnWDBTdVi0",
        "videoUrl": "https://www.youtube.com/watch?v=ynnWDBTdVi0",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=count-inversions-problem-brute-and-optimal"
      },
      {
        "id": 54,
        "index": 56,
        "title": "OOPs Tutorial in One Shot | Object Oriented Programming | in C++",
        "duration": "35-60 min",
        "youtubeId": "mlIUKyZIUUU",
        "videoUrl": "https://www.youtube.com/watch?v=mlIUKyZIUUU",
        "sectionTitle": "Object Oriented Programming (OOPs)",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 55,
        "index": 57,
        "title": "Introduction to Linked List | Data Structures & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "LyuuqCVkP5I",
        "videoUrl": "https://www.youtube.com/watch?v=LyuuqCVkP5I",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 56,
        "index": 58,
        "title": "Reverse a Linked List",
        "duration": "35-60 min",
        "youtubeId": "R-CKBYnOv1U",
        "videoUrl": "https://www.youtube.com/watch?v=R-CKBYnOv1U",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 57,
        "index": 59,
        "title": "Middle of a Linked List",
        "duration": "35-60 min",
        "youtubeId": "nzaHG0dme4g",
        "videoUrl": "https://www.youtube.com/watch?v=nzaHG0dme4g",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 58,
        "index": 60,
        "title": "Detect & Remove Cycle in Linked List",
        "duration": "35-60 min",
        "youtubeId": "-1E8ZMS0gSs",
        "videoUrl": "https://www.youtube.com/watch?v=-1E8ZMS0gSs",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 59,
        "index": 61,
        "title": "Merge Two Sorted Lists",
        "duration": "35-60 min",
        "youtubeId": "f8RPIb-0DDE",
        "videoUrl": "https://www.youtube.com/watch?v=f8RPIb-0DDE",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 60,
        "index": 63,
        "title": "Doubly Linked List Tutorial",
        "duration": "35-60 min",
        "youtubeId": "bO5DasTsaRQ",
        "videoUrl": "https://www.youtube.com/watch?v=bO5DasTsaRQ",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 61,
        "index": 64,
        "title": "Circular Linked List in Data Structures",
        "duration": "35-60 min",
        "youtubeId": "e6lZY5Yha8U",
        "videoUrl": "https://www.youtube.com/watch?v=e6lZY5Yha8U",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 62,
        "index": 65,
        "title": "Flatten a Doubly Linked List | Leetcode 430",
        "duration": "35-60 min",
        "youtubeId": "I8b0rff5F9M",
        "videoUrl": "https://www.youtube.com/watch?v=I8b0rff5F9M",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=flatten-a-doubly-linked-list-leetcode-430"
      },
      {
        "id": 63,
        "index": 66,
        "title": "Reverse Nodes in K-Group | Linked List",
        "duration": "35-60 min",
        "youtubeId": "-swgIiMIlJo",
        "videoUrl": "https://www.youtube.com/watch?v=-swgIiMIlJo",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 64,
        "index": 67,
        "title": "Swap Nodes in Pairs | Linked List",
        "duration": "35-60 min",
        "youtubeId": "wwbTMNVlFHQ",
        "videoUrl": "https://www.youtube.com/watch?v=wwbTMNVlFHQ",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 65,
        "index": 76,
        "title": "Implement LRU Cache | Linked List",
        "duration": "35-60 min",
        "youtubeId": "GsY6y0iPaHw",
        "videoUrl": "https://www.youtube.com/watch?v=GsY6y0iPaHw",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 66,
        "index": 77,
        "title": "Copy List with Random Pointer",
        "duration": "35-60 min",
        "youtubeId": "8ze7Zopdsaw",
        "videoUrl": "https://www.youtube.com/watch?v=8ze7Zopdsaw",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 67,
        "index": 68,
        "title": "Introduction to STACKS | Data Structures & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "0X-fV-1ir9c",
        "videoUrl": "https://www.youtube.com/watch?v=0X-fV-1ir9c",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 68,
        "index": 69,
        "title": "Valid Parentheses | Stack",
        "duration": "35-60 min",
        "youtubeId": "NlHupEeDXzY",
        "videoUrl": "https://www.youtube.com/watch?v=NlHupEeDXzY",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 69,
        "index": 70,
        "title": "Stock Span Problem | Optimal Solution",
        "duration": "35-60 min",
        "youtubeId": "01vBuZyMfqk",
        "videoUrl": "https://www.youtube.com/watch?v=01vBuZyMfqk",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stock-span-problem-optimal-solution"
      },
      {
        "id": 70,
        "index": 71,
        "title": "Next Greater Element | Optimal Solution & Code",
        "duration": "35-60 min",
        "youtubeId": "NKbExYwvjb0",
        "videoUrl": "https://www.youtube.com/watch?v=NKbExYwvjb0",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 71,
        "index": 72,
        "title": "Previous Smaller Element | Optimal Solution & Code",
        "duration": "35-60 min",
        "youtubeId": "WnjUfBn9nZM",
        "videoUrl": "https://www.youtube.com/watch?v=WnjUfBn9nZM",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 72,
        "index": 73,
        "title": "Design a Min Stack | Optimal Solution & Code",
        "duration": "35-60 min",
        "youtubeId": "wHDm-N2m2XY",
        "videoUrl": "https://www.youtube.com/watch?v=wHDm-N2m2XY",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 73,
        "index": 74,
        "title": "Largest Rectangle in Histogram | Best Solution & Code",
        "duration": "35-60 min",
        "youtubeId": "ysy1o-QEj3k",
        "videoUrl": "https://www.youtube.com/watch?v=ysy1o-QEj3k",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 74,
        "index": 75,
        "title": "Next Greater Element - II | Stack & Queue",
        "duration": "35-60 min",
        "youtubeId": "If--3pm9K3U",
        "videoUrl": "https://www.youtube.com/watch?v=If--3pm9K3U",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 75,
        "index": 76,
        "title": "The Celebrity Problem | Stack & Queue",
        "duration": "35-60 min",
        "youtubeId": "OZPmEA_8FM8",
        "videoUrl": "https://www.youtube.com/watch?v=OZPmEA_8FM8",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-celebrity-problem-stack-queue"
      },
      {
        "id": 76,
        "index": 77,
        "title": "Trapping Rainwater Problem | Optimal Solution & Code",
        "duration": "35-60 min",
        "youtubeId": "UHHp8USwx4M",
        "videoUrl": "https://www.youtube.com/watch?v=UHHp8USwx4M",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=trapping-rainwater-problem-optimal-solution-code"
      },
      {
        "id": 77,
        "index": 79,
        "title": "New Chapter : Queue Data Structure",
        "duration": "35-60 min",
        "youtubeId": "Khf9v67Ya30",
        "videoUrl": "https://www.youtube.com/watch?v=Khf9v67Ya30",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 78,
        "index": 80,
        "title": "Circular Queue in Data Structure",
        "duration": "35-60 min",
        "youtubeId": "4mKKolshFD0",
        "videoUrl": "https://www.youtube.com/watch?v=4mKKolshFD0",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 79,
        "index": 81,
        "title": "Implement Queue using Stack & Stack using Queue",
        "duration": "35-60 min",
        "youtubeId": "sFvP5Ois0CE",
        "videoUrl": "https://www.youtube.com/watch?v=sFvP5Ois0CE",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 80,
        "index": 82,
        "title": "First Unique Character in String | Leetcode 387",
        "duration": "35-60 min",
        "youtubeId": "sqyCBvEQN9c",
        "videoUrl": "https://www.youtube.com/watch?v=sqyCBvEQN9c",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=first-unique-character-in-string-leetcode-387"
      },
      {
        "id": 81,
        "index": 83,
        "title": "Sliding Window Maximum | Queue",
        "duration": "35-60 min",
        "youtubeId": "XwG5cozqfaM",
        "videoUrl": "https://www.youtube.com/watch?v=XwG5cozqfaM",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 82,
        "index": 84,
        "title": "Gas Station | Greedy Approach | Leetcode 134",
        "duration": "35-60 min",
        "youtubeId": "SmTow5Ht4iU",
        "videoUrl": "https://www.youtube.com/watch?v=SmTow5Ht4iU",
        "sectionTitle": "Stacks & Queues",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=gas-station-greedy-approach-leetcode-134"
      },
      {
        "id": 83,
        "index": 85,
        "title": "Binary Trees in Data Structures | Tree Traversal | DSA Placement Series",
        "duration": "35-60 min",
        "youtubeId": "eKJrXBCRuNQ",
        "videoUrl": "https://www.youtube.com/watch?v=eKJrXBCRuNQ",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 84,
        "index": 86,
        "title": "L.84 Height of a Binary Tree | Count of Nodes in a Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "7tzHzN_Ehus",
        "videoUrl": "https://www.youtube.com/watch?v=7tzHzN_Ehus",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 85,
        "index": 87,
        "title": "L.85 Identical Tree (same tree) | Subtree of another Tree",
        "duration": "35-60 min",
        "youtubeId": "tumW7jsjv68",
        "videoUrl": "https://www.youtube.com/watch?v=tumW7jsjv68",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 86,
        "index": 88,
        "title": "L.86 Diameter of Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "aPyDPImR5UM",
        "videoUrl": "https://www.youtube.com/watch?v=aPyDPImR5UM",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 87,
        "index": 89,
        "title": "Top View of a Binary Tree | DSA Series : L.87",
        "duration": "35-60 min",
        "youtubeId": "FGr-syrhvOA",
        "videoUrl": "https://www.youtube.com/watch?v=FGr-syrhvOA",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 88,
        "index": 90,
        "title": "Kth Level of a Binary Tree | DSA Series : L.88",
        "duration": "35-60 min",
        "youtubeId": "ze4JO_ODl3w",
        "videoUrl": "https://www.youtube.com/watch?v=ze4JO_ODl3w",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 89,
        "index": 91,
        "title": "Lowest Common Ancestor in Binary Tree | DSA Series : L.89",
        "duration": "35-60 min",
        "youtubeId": "oX5D0uKOMck",
        "videoUrl": "https://www.youtube.com/watch?v=oX5D0uKOMck",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 90,
        "index": 92,
        "title": "Binary Tree Paths | DSA Series : L. 92",
        "duration": "35-60 min",
        "youtubeId": "AWJD__CfM6A",
        "videoUrl": "https://www.youtube.com/watch?v=AWJD__CfM6A",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 91,
        "index": 93,
        "title": "Maximum Width of Binary Tree | DSA Series : L.93",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 92,
        "index": 94,
        "title": "Flatten Binary Tree to Linked List | DSA Series : L.95",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 93,
        "index": 95,
        "title": "Binary Search Trees (BSTs) | DSA Series : L.96",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 94,
        "index": 96,
        "title": "Delete a Node in BST | Case Analysis | DSA Series : L.97",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 95,
        "index": 97,
        "title": "Sorted Array to Balanced BST | DSA Series : L.97",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 96,
        "index": 98,
        "title": "Validate BST | BST Mirror | BST to Sorted Array",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 97,
        "index": 99,
        "title": "Min Distance between BST Nodes | DSA Series : L.99",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 98,
        "index": 100,
        "title": "Lowest Common Ancestor in BST | DSA Series : L.101",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 99,
        "index": 101,
        "title": "Merge Two Binary Search Trees | DSA Series : L.103",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 100,
        "index": 102,
        "title": "Largest BST in Binary Tree | DSA Series : L.105",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 101,
        "index": 103,
        "title": "BST Iterator | DSA Series : L.107",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 102,
        "index": 104,
        "title": "Introduction to Heaps | Max Heap & Min Heap",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Heaps & Hashing",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 103,
        "index": 105,
        "title": "Heap Implementation | Insert, Get, Remove (Heapify)",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Heaps & Hashing",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 104,
        "index": 106,
        "title": "Heap Sort Algorithm | In-place Sorting",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Heaps & Hashing",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 105,
        "index": 107,
        "title": "Priority Queue in STL | Sorting Custom Objects",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Heaps & Hashing",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 106,
        "index": 108,
        "title": "Nearby Cars Problem | Connect Ropes with Minimum Cost",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Heaps & Hashing",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=nearby-cars-problem-connect-ropes-with-minimum-cost"
      },
      {
        "id": 107,
        "index": 109,
        "title": "Introduction to Graphs | Data Structure & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 108,
        "index": 110,
        "title": "BFS Traversal in Graphs | Data Structure & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 109,
        "index": 111,
        "title": "DFS Traversal in Graphs | Data Structure & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 110,
        "index": 112,
        "title": "Has Path Problem | Graph Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=has-path-problem-graph-algorithms"
      },
      {
        "id": 111,
        "index": 113,
        "title": "Connected Components in Graph",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 112,
        "index": 114,
        "title": "Detect a Cycle in Undirected Graph using BFS | Data Structure & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 113,
        "index": 115,
        "title": "Detect a Cycle in Undirected Graph using DFS | Data Structure & Algorithms",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 114,
        "index": 116,
        "title": "Flood Fill Algorithm | Leetcode 733",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=flood-fill-algorithm-leetcode-733"
      },
      {
        "id": 115,
        "index": 117,
        "title": "Number of Islands | Leetcode 200",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=number-of-islands-leetcode-200"
      },
      {
        "id": 116,
        "index": 118,
        "title": "Cycle Detection in Directed Graph using DFS",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 117,
        "index": 119,
        "title": "Bipartite Graph Problem",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bipartite-graph-problem"
      },
      {
        "id": 118,
        "index": 120,
        "title": "Topological Sort using DFS",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 119,
        "index": 121,
        "title": "Topological Sort using BFS (Kahn's Algorithm)",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 120,
        "index": 122,
        "title": "Course Schedule I | Leetcode 207",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=course-schedule-i-leetcode-207"
      },
      {
        "id": 121,
        "index": 123,
        "title": "Course Schedule II | Leetcode 210",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=course-schedule-ii-leetcode-210"
      },
      {
        "id": 122,
        "index": 124,
        "title": "Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method",
        "duration": "35-60 min",
        "youtubeId": "RpgyCJBbl5E",
        "videoUrl": "https://www.youtube.com/watch?v=RpgyCJBbl5E",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "rohit-negi-dsa-playlist",
    "title": "Rohit Negi DSA Interview Preparation Playlist",
    "category": "dsa",
    "instructor": "Rohit Negi",
    "channel": "Coder Army",
    "totalVideos": 148,
    "totalDuration": "145+ hrs",
    "rating": 4.9,
    "badge": "Coder Army \u2022 180 Days DSA",
    "description": "The Complete C++ Placement DSA Course by Rohit Negi is your comprehensive guide to cracking coding interviews. It covers fundamental C++ concepts, including arrays, searching, and sorting, before diving deep into advanced Data Structures like Linked Lists, Stacks, Queues, Binary Trees, Binary Search Trees, Heaps, Hashmaps, and Tries. The course culminates with essential algorithms in Recursion, Backtracking, Graphs, and Dynamic Programming, ensuring you're fully prepared for technical roles.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklEEbOXGyxvm",
    "thumbnailType": "rohit-negi",
    "sections": [
      {
        "title": "Fundamentals & Programming Basics",
        "videosCount": 9,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Introduction To Programming for Beginners",
            "duration": "35-60 min",
            "youtubeId": "y3OOaXrFy-Q",
            "videoUrl": "https://www.youtube.com/watch?v=y3OOaXrFy-Q",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Introduction to FlowCharts and PseudoCode in Programming",
            "duration": "35-60 min",
            "youtubeId": "H_9MSvTL74g",
            "videoUrl": "https://www.youtube.com/watch?v=H_9MSvTL74g",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Start C++ from Zero and Write Your First Program",
            "duration": "35-60 min",
            "youtubeId": "2Gexv2eld4Y",
            "videoUrl": "https://www.youtube.com/watch?v=2Gexv2eld4Y",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "If Else Statement in c++ || Loop in C++",
            "duration": "35-60 min",
            "youtubeId": "gGaJJovz-4k",
            "videoUrl": "https://www.youtube.com/watch?v=gGaJJovz-4k",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "For Loop in c++ Advance || Prime Number || Factorial || Fibonacci",
            "duration": "35-60 min",
            "youtubeId": "7qINbIQK_J8",
            "videoUrl": "https://www.youtube.com/watch?v=7qINbIQK_J8",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 10,
            "title": "Operators in C++ with implementation",
            "duration": "35-60 min",
            "youtubeId": "HI0mNthclGE",
            "videoUrl": "https://www.youtube.com/watch?v=HI0mNthclGE",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 11,
            "title": "While and Do while Loop || Switch || break || Continue",
            "duration": "35-60 min",
            "youtubeId": "kYbTxu1_H-o",
            "videoUrl": "https://www.youtube.com/watch?v=kYbTxu1_H-o",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 12,
            "title": "Binary To Decimal || Decimal To Binary || Conversion",
            "duration": "35-60 min",
            "youtubeId": "iGRXq30nx6g",
            "videoUrl": "https://www.youtube.com/watch?v=iGRXq30nx6g",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 14,
            "title": "Functions in C++ || Pass by Value || Pass by Reference",
            "duration": "35-60 min",
            "youtubeId": "PnSgN5WOUC0",
            "videoUrl": "https://www.youtube.com/watch?v=PnSgN5WOUC0",
            "sectionTitle": "Fundamentals & Programming Basics",
            "tags": [
              "Fundamentals",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Pattern Printing",
        "videosCount": 4,
        "videos": [
          {
            "id": 10,
            "index": 6,
            "title": "Solve Any Pattern Problem With Simple Trick Part-1",
            "duration": "35-60 min",
            "youtubeId": "0LawAwK5OaI",
            "videoUrl": "https://www.youtube.com/watch?v=0LawAwK5OaI",
            "sectionTitle": "Pattern Printing",
            "tags": [
              "Pattern",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solve-any-pattern-problem-with-simple-trick-part-1"
          },
          {
            "id": 11,
            "index": 7,
            "title": "Solve Any Pattern Problem with Simple Trick Part-2",
            "duration": "35-60 min",
            "youtubeId": "-o6MPFfGipU",
            "videoUrl": "https://www.youtube.com/watch?v=-o6MPFfGipU",
            "sectionTitle": "Pattern Printing",
            "tags": [
              "Pattern",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solve-any-pattern-problem-with-simple-trick-part-2"
          },
          {
            "id": 12,
            "index": 8,
            "title": "Solve HARD Pattern Print Problem with Simple Trick",
            "duration": "35-60 min",
            "youtubeId": "mtQwWAxWbDY",
            "videoUrl": "https://www.youtube.com/watch?v=mtQwWAxWbDY",
            "sectionTitle": "Pattern Printing",
            "tags": [
              "Pattern",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solve-hard-pattern-print-problem-with-simple-trick"
          },
          {
            "id": 13,
            "index": 9,
            "title": "Top 5 Advance Pattern Print Problems",
            "duration": "35-60 min",
            "youtubeId": "CaLtCuji8z0",
            "videoUrl": "https://www.youtube.com/watch?v=CaLtCuji8z0",
            "sectionTitle": "Pattern Printing",
            "tags": [
              "Pattern",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=top-5-advance-pattern-print-problems"
          }
        ]
      },
      {
        "title": "Arrays & Vectors",
        "videosCount": 11,
        "videos": [
          {
            "id": 14,
            "index": 13,
            "title": "Write Your First Program On LeetCode",
            "duration": "35-60 min",
            "youtubeId": "0j7879JOgIU",
            "videoUrl": "https://www.youtube.com/watch?v=0j7879JOgIU",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=write-your-first-program-on-leetcode"
          },
          {
            "id": 15,
            "index": 15,
            "title": "C++ Series Problem Solving",
            "duration": "35-60 min",
            "youtubeId": "KNtyCUH-2oM",
            "videoUrl": "https://www.youtube.com/watch?v=KNtyCUH-2oM",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=c-series-problem-solving"
          },
          {
            "id": 16,
            "index": 16,
            "title": "Introduction To Arrays in C++",
            "duration": "35-60 min",
            "youtubeId": "moZNKL37w-s",
            "videoUrl": "https://www.youtube.com/watch?v=moZNKL37w-s",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Master Arrays By Solving Problems",
            "duration": "35-60 min",
            "youtubeId": "567332frcF0",
            "videoUrl": "https://www.youtube.com/watch?v=567332frcF0",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=master-arrays-by-solving-problems"
          },
          {
            "id": 18,
            "index": 18,
            "title": "Time and Space Complexity From Zero To Advance",
            "duration": "35-60 min",
            "youtubeId": "hUdqNPhXOh4",
            "videoUrl": "https://www.youtube.com/watch?v=hUdqNPhXOh4",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 28,
            "title": "Two Pointer in C++ | TWO SUM | Pair Sum | Move 0 to end",
            "duration": "35-60 min",
            "youtubeId": "KKPjlsLSs5w",
            "videoUrl": "https://www.youtube.com/watch?v=KKPjlsLSs5w",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 29,
            "title": "Kadane's Algorithm || Prefix and Suffix Sum",
            "duration": "35-60 min",
            "youtubeId": "2YksXVZitrE",
            "videoUrl": "https://www.youtube.com/watch?v=2YksXVZitrE",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 31,
            "title": "Introduction To 2D Arrays in C++",
            "duration": "35-60 min",
            "youtubeId": "kP5EoGyTHbA",
            "videoUrl": "https://www.youtube.com/watch?v=kP5EoGyTHbA",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 32,
            "title": "2D Arrays Interview Problems || Wave || Spiral || Transpose",
            "duration": "35-60 min",
            "youtubeId": "Iow9P1QsjhE",
            "videoUrl": "https://www.youtube.com/watch?v=Iow9P1QsjhE",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=2d-arrays-interview-problems-wave-spiral-transpose"
          },
          {
            "id": 23,
            "index": 34,
            "title": "Binary Search in 2D Arrays || Search in sorted Matrix",
            "duration": "35-60 min",
            "youtubeId": "BA1ppstdJi8",
            "videoUrl": "https://www.youtube.com/watch?v=BA1ppstdJi8",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 35,
            "title": "Majority Elements || Count Frequency || Missing & Repeating",
            "duration": "35-60 min",
            "youtubeId": "ncvJHz_gffI",
            "videoUrl": "https://www.youtube.com/watch?v=ncvJHz_gffI",
            "sectionTitle": "Arrays & Vectors",
            "tags": [
              "Arrays",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Sorting & Binary Search",
        "videosCount": 10,
        "videos": [
          {
            "id": 25,
            "index": 19,
            "title": "SELECTION SORT Algorithm with Theory and Code",
            "duration": "35-60 min",
            "youtubeId": "9_B6TmAHveU",
            "videoUrl": "https://www.youtube.com/watch?v=9_B6TmAHveU",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 20,
            "title": "Bubble Sort with Theory and Code",
            "duration": "35-60 min",
            "youtubeId": "V3vM_m2iFtk",
            "videoUrl": "https://www.youtube.com/watch?v=V3vM_m2iFtk",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 21,
            "title": "Insertion Sort with Theory and Code",
            "duration": "35-60 min",
            "youtubeId": "YpZUgiT1N94",
            "videoUrl": "https://www.youtube.com/watch?v=YpZUgiT1N94",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 22,
            "title": "Binary Search with Theory and Code",
            "duration": "35-60 min",
            "youtubeId": "0Hwpzd-bSck",
            "videoUrl": "https://www.youtube.com/watch?v=0Hwpzd-bSck",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 23,
            "title": "Binary Search Problems || Search Insert || Sqrt(x)",
            "duration": "35-60 min",
            "youtubeId": "740PMblqK6o",
            "videoUrl": "https://www.youtube.com/watch?v=740PMblqK6o",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-problems-search-insert-sqrt-x"
          },
          {
            "id": 30,
            "index": 24,
            "title": "Search in Rotated Array || Peak index || Kth Missing",
            "duration": "35-60 min",
            "youtubeId": "w2HOAYymS3A",
            "videoUrl": "https://www.youtube.com/watch?v=w2HOAYymS3A",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 31,
            "index": 25,
            "title": "Binary Search Top Problem | Book Allocation | Painter Partition",
            "duration": "35-60 min",
            "youtubeId": "znIFTUyOQvI",
            "videoUrl": "https://www.youtube.com/watch?v=znIFTUyOQvI",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-top-problem-book-allocation-painter-partition"
          },
          {
            "id": 32,
            "index": 26,
            "title": "Binary Search Hard Problem || Aggressive Cow || KOKO Eating",
            "duration": "35-60 min",
            "youtubeId": "ThCyc5GcuRQ",
            "videoUrl": "https://www.youtube.com/watch?v=ThCyc5GcuRQ",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-hard-problem-aggressive-cow-koko-eating"
          },
          {
            "id": 33,
            "index": 59,
            "title": "Merge Sort Algorithm",
            "duration": "35-60 min",
            "youtubeId": "86HOPLCgc00",
            "videoUrl": "https://www.youtube.com/watch?v=86HOPLCgc00",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 60,
            "title": "Quick Sort Algorithm",
            "duration": "35-60 min",
            "youtubeId": "iVj8uyd50f4",
            "videoUrl": "https://www.youtube.com/watch?v=iVj8uyd50f4",
            "sectionTitle": "Sorting & Binary Search",
            "tags": [
              "Sorting",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Strings & Advanced STL",
        "videosCount": 9,
        "videos": [
          {
            "id": 35,
            "index": 27,
            "title": "What is STL || Vector in C++",
            "duration": "35-60 min",
            "youtubeId": "-tDAAOYFehc",
            "videoUrl": "https://www.youtube.com/watch?v=-tDAAOYFehc",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 36,
            "title": "Introductions To STRINGS in C++",
            "duration": "35-60 min",
            "youtubeId": "FkaIZAQKmWU",
            "videoUrl": "https://www.youtube.com/watch?v=FkaIZAQKmWU",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 37,
            "title": "String Interviews Problem Solving || Sort a String",
            "duration": "35-60 min",
            "youtubeId": "BCHJ9YizW7w",
            "videoUrl": "https://www.youtube.com/watch?v=BCHJ9YizW7w",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=string-interviews-problem-solving-sort-a-string"
          },
          {
            "id": 38,
            "index": 38,
            "title": "Longest Palindrome || Sorting the Sentence",
            "duration": "35-60 min",
            "youtubeId": "U1OZQl1fU7g",
            "videoUrl": "https://www.youtube.com/watch?v=U1OZQl1fU7g",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 39,
            "index": 39,
            "title": "Strings Problems || Add Strings || Sort Vowels",
            "duration": "35-60 min",
            "youtubeId": "iw9CK0ssgDU",
            "videoUrl": "https://www.youtube.com/watch?v=iw9CK0ssgDU",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=strings-problems-add-strings-sort-vowels"
          },
          {
            "id": 40,
            "index": 40,
            "title": "Factorial of Large Number || Integer to Roman",
            "duration": "35-60 min",
            "youtubeId": "BXocVkXthOE",
            "videoUrl": "https://www.youtube.com/watch?v=BXocVkXthOE",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 41,
            "index": 41,
            "title": "Sliding Window Protocol on Strings",
            "duration": "35-60 min",
            "youtubeId": "swBjx46TSP4",
            "videoUrl": "https://www.youtube.com/watch?v=swBjx46TSP4",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 42,
            "index": 42,
            "title": "KMP Algorithm || Longest Prefix Suffix",
            "duration": "35-60 min",
            "youtubeId": "sODA1BzFvsE",
            "videoUrl": "https://www.youtube.com/watch?v=sODA1BzFvsE",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 43,
            "index": 43,
            "title": "String Matching || KMP Algorithm",
            "duration": "35-60 min",
            "youtubeId": "6gQR8TaFXMw",
            "videoUrl": "https://www.youtube.com/watch?v=6gQR8TaFXMw",
            "sectionTitle": "Strings & Advanced STL",
            "tags": [
              "Strings",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Recursion & Backtracking",
        "videosCount": 17,
        "videos": [
          {
            "id": 44,
            "index": 51,
            "title": "Introduction To Recursion From Basic To Advance",
            "duration": "35-60 min",
            "youtubeId": "j_n1W5YgN_4",
            "videoUrl": "https://www.youtube.com/watch?v=j_n1W5YgN_4",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 45,
            "index": 52,
            "title": "How To Solve Recursion Problem from 4 different Method",
            "duration": "35-60 min",
            "youtubeId": "2OQ46x0Zka8",
            "videoUrl": "https://www.youtube.com/watch?v=2OQ46x0Zka8",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=how-to-solve-recursion-problem-from-4-different-method"
          },
          {
            "id": 46,
            "index": 53,
            "title": "Recursion: Factorial | Sum of N | Power | Sum of Square",
            "duration": "35-60 min",
            "youtubeId": "LLsIA8U3z18",
            "videoUrl": "https://www.youtube.com/watch?v=LLsIA8U3z18",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 47,
            "index": 54,
            "title": "Recursion Problems on Leetcode",
            "duration": "35-60 min",
            "youtubeId": "LK0XSDoN62Y",
            "videoUrl": "https://www.youtube.com/watch?v=LK0XSDoN62Y",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-problems-on-leetcode"
          },
          {
            "id": 48,
            "index": 55,
            "title": "Recursion in Arrays",
            "duration": "35-60 min",
            "youtubeId": "OxXS1m7afIQ",
            "videoUrl": "https://www.youtube.com/watch?v=OxXS1m7afIQ",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 49,
            "index": 56,
            "title": "Recursion in Strings",
            "duration": "35-60 min",
            "youtubeId": "HsrNq_14GhY",
            "videoUrl": "https://www.youtube.com/watch?v=HsrNq_14GhY",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 50,
            "index": 57,
            "title": "Recursion in Binary Search",
            "duration": "35-60 min",
            "youtubeId": "OnrJK8DcD2M",
            "videoUrl": "https://www.youtube.com/watch?v=OnrJK8DcD2M",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 51,
            "index": 58,
            "title": "Time Complexity and Space Complexity in Recursion",
            "duration": "35-60 min",
            "youtubeId": "2Ekun-ocGnQ",
            "videoUrl": "https://www.youtube.com/watch?v=2Ekun-ocGnQ",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 52,
            "index": 61,
            "title": "Recursion on Subsequence || Print All || Generate Parentheses",
            "duration": "35-60 min",
            "youtubeId": "VxFM14y1-v4",
            "videoUrl": "https://www.youtube.com/watch?v=VxFM14y1-v4",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 53,
            "index": 62,
            "title": "Recursion on Subset Sum || Target Sum",
            "duration": "35-60 min",
            "youtubeId": "73X0vvmUNHE",
            "videoUrl": "https://www.youtube.com/watch?v=73X0vvmUNHE",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 54,
            "index": 63,
            "title": "Recursion Perfect Sum Problem || Target Sum with Repetition",
            "duration": "35-60 min",
            "youtubeId": "ki9elYV2r24",
            "videoUrl": "https://www.youtube.com/watch?v=ki9elYV2r24",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-perfect-sum-problem-target-sum-with-repetition"
          },
          {
            "id": 55,
            "index": 64,
            "title": "Permutation of Arrays and Strings",
            "duration": "35-60 min",
            "youtubeId": "i7ev3Rb6dEo",
            "videoUrl": "https://www.youtube.com/watch?v=i7ev3Rb6dEo",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 56,
            "index": 65,
            "title": "Permutation with repetition || Ways to Sum N",
            "duration": "35-60 min",
            "youtubeId": "CQOUIxwQmec",
            "videoUrl": "https://www.youtube.com/watch?v=CQOUIxwQmec",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 57,
            "index": 66,
            "title": "Tower of Hanoi || Code part and Dry Run",
            "duration": "35-60 min",
            "youtubeId": "V5vNq2WOPGE",
            "videoUrl": "https://www.youtube.com/watch?v=V5vNq2WOPGE",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 58,
            "index": 67,
            "title": "Josephus Problem || Predict the winner",
            "duration": "35-60 min",
            "youtubeId": "WoLrGKbxR-M",
            "videoUrl": "https://www.youtube.com/watch?v=WoLrGKbxR-M",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=josephus-problem-predict-the-winner"
          },
          {
            "id": 59,
            "index": 68,
            "title": "Recursion Rat in a Maze Problem",
            "duration": "35-60 min",
            "youtubeId": "r6I99L8E410",
            "videoUrl": "https://www.youtube.com/watch?v=r6I99L8E410",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-rat-in-a-maze-problem"
          },
          {
            "id": 60,
            "index": 69,
            "title": "Print N-bit binary numbers having more 1s than 0s",
            "duration": "35-60 min",
            "youtubeId": "Rsz-P47fy4c",
            "videoUrl": "https://www.youtube.com/watch?v=Rsz-P47fy4c",
            "sectionTitle": "Recursion & Backtracking",
            "tags": [
              "Recursion",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Object Oriented Programming (OOPs) & More",
        "videosCount": 15,
        "videos": [
          {
            "id": 61,
            "index": 44,
            "title": "Strings HARD Problems For Coding Round",
            "duration": "35-60 min",
            "youtubeId": "VB-tDA9TOq0",
            "videoUrl": "https://www.youtube.com/watch?v=VB-tDA9TOq0",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=strings-hard-problems-for-coding-round"
          },
          {
            "id": 62,
            "index": 45,
            "title": "Pointers in C++ || Introduction to Pointers in C+",
            "duration": "35-60 min",
            "youtubeId": "EUPirt55uY4",
            "videoUrl": "https://www.youtube.com/watch?v=EUPirt55uY4",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 63,
            "index": 46,
            "title": "Pointers Relationship with array || Arithmetic Pointers",
            "duration": "35-60 min",
            "youtubeId": "KA3XnH6eYpY",
            "videoUrl": "https://www.youtube.com/watch?v=KA3XnH6eYpY",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 64,
            "index": 47,
            "title": "Pointers with Character Arrays and Functions",
            "duration": "35-60 min",
            "youtubeId": "FfNA_g0Quh0",
            "videoUrl": "https://www.youtube.com/watch?v=FfNA_g0Quh0",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 65,
            "index": 48,
            "title": "Double Pointer and Multiple Pointers in C++",
            "duration": "35-60 min",
            "youtubeId": "j2GInxA3HpI",
            "videoUrl": "https://www.youtube.com/watch?v=j2GInxA3HpI",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 66,
            "index": 49,
            "title": "Memory Management || Static vs Dynamic Memory Allocation",
            "duration": "35-60 min",
            "youtubeId": "bLYuiCD0Sr4",
            "videoUrl": "https://www.youtube.com/watch?v=bLYuiCD0Sr4",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 67,
            "index": 50,
            "title": "Dynamic Memory Allocation of 2D and 3D Arrays in C++",
            "duration": "35-60 min",
            "youtubeId": "tFCc2ESnG4w",
            "videoUrl": "https://www.youtube.com/watch?v=tFCc2ESnG4w",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 68,
            "index": 70,
            "title": "Object Oriented Programming in C++",
            "duration": "35-60 min",
            "youtubeId": "iw1Xf_33YM0",
            "videoUrl": "https://www.youtube.com/watch?v=iw1Xf_33YM0",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 69,
            "index": 71,
            "title": "Constructor and Destructor in C++",
            "duration": "35-60 min",
            "youtubeId": "sNiiJ16dLz0",
            "videoUrl": "https://www.youtube.com/watch?v=sNiiJ16dLz0",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 70,
            "index": 72,
            "title": "OOPs: Static data Member and Function | Encapsulation",
            "duration": "35-60 min",
            "youtubeId": "ZIL8t5AoGmQ",
            "videoUrl": "https://www.youtube.com/watch?v=ZIL8t5AoGmQ",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 71,
            "index": 73,
            "title": "Inheritance | Access Modifier | Real Life Example",
            "duration": "35-60 min",
            "youtubeId": "qq3BY4viEB4",
            "videoUrl": "https://www.youtube.com/watch?v=qq3BY4viEB4",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 72,
            "index": 74,
            "title": "Type of Inheritance in C++ | Single | Multiple | Hybrid",
            "duration": "35-60 min",
            "youtubeId": "ww02EpE4DZo",
            "videoUrl": "https://www.youtube.com/watch?v=ww02EpE4DZo",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 73,
            "index": 75,
            "title": "Polymorphism and Virtual Function in C++",
            "duration": "35-60 min",
            "youtubeId": "p2h8rGnkD0o",
            "videoUrl": "https://www.youtube.com/watch?v=p2h8rGnkD0o",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 74,
            "index": 76,
            "title": "Exception Handling in C++",
            "duration": "35-60 min",
            "youtubeId": "essQiHKRmrc",
            "videoUrl": "https://www.youtube.com/watch?v=essQiHKRmrc",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 75,
            "index": 77,
            "title": "File Handling in C++",
            "duration": "35-60 min",
            "youtubeId": "NBsmPHXjLfg",
            "videoUrl": "https://www.youtube.com/watch?v=NBsmPHXjLfg",
            "sectionTitle": "Object Oriented Programming (OOPs) & More",
            "tags": [
              "Object",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Linked List",
        "videosCount": 11,
        "videos": [
          {
            "id": 76,
            "index": 78,
            "title": "Introduction To Linked List | Traversal and Insertion in a Linked List",
            "duration": "35-60 min",
            "youtubeId": "CE150x4w0bo",
            "videoUrl": "https://www.youtube.com/watch?v=CE150x4w0bo",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 77,
            "index": 79,
            "title": "Deletion in a Singly Linked List | Deletion in Constant Time",
            "duration": "35-60 min",
            "youtubeId": "tLeSDFqch3I",
            "videoUrl": "https://www.youtube.com/watch?v=tLeSDFqch3I",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 78,
            "index": 80,
            "title": "Reverse a Linked List | Middle of Linked List | Rotate Linked List",
            "duration": "35-60 min",
            "youtubeId": "xcm3srdOQ0w",
            "videoUrl": "https://www.youtube.com/watch?v=xcm3srdOQ0w",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 79,
            "index": 81,
            "title": "Linked List LeetCode Problem: Remove Every Kth Node | Rotate List | Palindrome List",
            "duration": "35-60 min",
            "youtubeId": "qEJrlcc-hAY",
            "videoUrl": "https://www.youtube.com/watch?v=qEJrlcc-hAY",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-leetcode-problem-remove-every-kth-node-rotate-list-palindrome-list"
          },
          {
            "id": 80,
            "index": 82,
            "title": "Introduction to Doubly Linked List || Insertion and Deletion in Doubly Linked List",
            "duration": "35-60 min",
            "youtubeId": "KHvYGAzFKqA",
            "videoUrl": "https://www.youtube.com/watch?v=KHvYGAzFKqA",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 81,
            "index": 83,
            "title": "LinkedList Problems: Remove Duplicates | Merge 2 Sorted LinkedList | Sort a LinkedList",
            "duration": "35-60 min",
            "youtubeId": "XlwYGxlUQAA",
            "videoUrl": "https://www.youtube.com/watch?v=XlwYGxlUQAA",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=linkedlist-problems-remove-duplicates-merge-2-sorted-linkedlist-sort-a-linkedlist"
          },
          {
            "id": 82,
            "index": 84,
            "title": "Circular Linked List: Detect Loop in Linked List || Find Length of Loop",
            "duration": "35-60 min",
            "youtubeId": "BA1ppstdJi8",
            "videoUrl": "https://www.youtube.com/watch?v=BA1ppstdJi8",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 83,
            "index": 85,
            "title": "Hard Problem: Detect and Remove Loop in LinkedList",
            "duration": "35-60 min",
            "youtubeId": "RrmDZv1i9W8",
            "videoUrl": "https://www.youtube.com/watch?v=RrmDZv1i9W8",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=hard-problem-detect-and-remove-loop-in-linkedlist"
          },
          {
            "id": 84,
            "index": 86,
            "title": "Add two numbers represented by linked lists | Reverse a Linked List in groups",
            "duration": "35-60 min",
            "youtubeId": "qiS7-e2OXDc",
            "videoUrl": "https://www.youtube.com/watch?v=qiS7-e2OXDc",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 85,
            "index": 87,
            "title": "Hard Problem on Linked List: Flattening a Linked List | Merge K Sorted Linked List",
            "duration": "35-60 min",
            "youtubeId": "2DQJvLq-rm8",
            "videoUrl": "https://www.youtube.com/watch?v=2DQJvLq-rm8",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=hard-problem-on-linked-list-flattening-a-linked-list-merge-k-sorted-linked-list"
          },
          {
            "id": 86,
            "index": 88,
            "title": "LinkedList Series End Here: Clone a linked list with next and random pointer",
            "duration": "35-60 min",
            "youtubeId": "pReLgYYYHJo",
            "videoUrl": "https://www.youtube.com/watch?v=pReLgYYYHJo",
            "sectionTitle": "Linked List",
            "tags": [
              "Linked",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Stacks",
        "videosCount": 8,
        "videos": [
          {
            "id": 87,
            "index": 89,
            "title": "Introduction To STACK || Implement Stack Using Arrays and LinkedList",
            "duration": "35-60 min",
            "youtubeId": "ZOS1fKa_WUY",
            "videoUrl": "https://www.youtube.com/watch?v=ZOS1fKa_WUY",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 88,
            "index": 90,
            "title": "Implement Stack using STL | Implementation of Stack using Single Queue",
            "duration": "35-60 min",
            "youtubeId": "abQZotIl70g",
            "videoUrl": "https://www.youtube.com/watch?v=abQZotIl70g",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 89,
            "index": 91,
            "title": "Stack Problem: Next Greater Element | Next Smaller Element | Stock Span Problem",
            "duration": "35-60 min",
            "youtubeId": "8dwjKE9GM30",
            "videoUrl": "https://www.youtube.com/watch?v=8dwjKE9GM30",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problem-next-greater-element-next-smaller-element-stock-span-problem"
          },
          {
            "id": 90,
            "index": 92,
            "title": "Stack Problems: Largest Rectangular Area in Histogram | Maximal Rectangle",
            "duration": "35-60 min",
            "youtubeId": "VhQ9U_0uF-o",
            "videoUrl": "https://www.youtube.com/watch?v=VhQ9U_0uF-o",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-largest-rectangular-area-in-histogram-maximal-rectangle"
          },
          {
            "id": 91,
            "index": 93,
            "title": "Stack Problems: Get Min in O(1) Time and O(1) Space | Min Stack",
            "duration": "35-60 min",
            "youtubeId": "asf9Z6_mO9M",
            "videoUrl": "https://www.youtube.com/watch?v=asf9Z6_mO9M",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-get-min-in-o-1-time-and-o-1-space-min-stack"
          },
          {
            "id": 92,
            "index": 94,
            "title": "Stack Problems: Infix, Prefix and Postfix Conversions",
            "duration": "35-60 min",
            "youtubeId": "mD_LhYhS_mE",
            "videoUrl": "https://www.youtube.com/watch?v=mD_LhYhS_mE",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-infix-prefix-and-postfix-conversions"
          },
          {
            "id": 93,
            "index": 95,
            "title": "Celebrity Problem | LRU Cache Implementation using Stack/Queue",
            "duration": "35-60 min",
            "youtubeId": "RuF7dPfj27Q",
            "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=celebrity-problem-lru-cache-implementation-using-stack-queue"
          },
          {
            "id": 94,
            "index": 96,
            "title": "Sliding Window Maximum | Stack & Queue Mix Problems",
            "duration": "35-60 min",
            "youtubeId": "6WNZQBHWQJs",
            "videoUrl": "https://www.youtube.com/watch?v=6WNZQBHWQJs",
            "sectionTitle": "Stacks",
            "tags": [
              "Stacks",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=sliding-window-maximum-stack-queue-mix-problems"
          }
        ]
      },
      {
        "title": "Queues",
        "videosCount": 4,
        "videos": [
          {
            "id": 95,
            "index": 96,
            "title": "Introduction To Queue || Implement Queue with Array and LinkedList || Circular Queue",
            "duration": "35-60 min",
            "youtubeId": "Ah-ZDJf9QW0",
            "videoUrl": "https://www.youtube.com/watch?v=Ah-ZDJf9QW0",
            "sectionTitle": "Queues",
            "tags": [
              "Queues",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 96,
            "index": 97,
            "title": "Print all Elements in Queue | Implement Queue using Stack | Implement Stack using Queue",
            "duration": "35-60 min",
            "youtubeId": "MuDF9Yh8y4w",
            "videoUrl": "https://www.youtube.com/watch?v=MuDF9Yh8y4w",
            "sectionTitle": "Queues",
            "tags": [
              "Queues",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 97,
            "index": 98,
            "title": "Queues with Sliding Window Problems",
            "duration": "35-60 min",
            "youtubeId": "pe-q_7EfFPk",
            "videoUrl": "https://www.youtube.com/watch?v=pe-q_7EfFPk",
            "sectionTitle": "Queues",
            "tags": [
              "Queues",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=queues-with-sliding-window-problems"
          },
          {
            "id": 98,
            "index": 99,
            "title": "Deque Implementation and Interview Problems",
            "duration": "35-60 min",
            "youtubeId": "W7uA9S8T70A",
            "videoUrl": "https://www.youtube.com/watch?v=W7uA9S8T70A",
            "sectionTitle": "Queues",
            "tags": [
              "Queues",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=deque-implementation-and-interview-problems"
          }
        ]
      },
      {
        "title": "Binary Trees",
        "videosCount": 15,
        "videos": [
          {
            "id": 99,
            "index": 100,
            "title": "Introduction to Binary Tree | Traversal: PreOrder, InOrder, PostOrder",
            "duration": "35-60 min",
            "youtubeId": "nHMQnJ2N3Xc",
            "videoUrl": "https://www.youtube.com/watch?v=nHMQnJ2N3Xc",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 100,
            "index": 101,
            "title": "Binary Tree Implementation | Level Order Traversal",
            "duration": "35-60 min",
            "youtubeId": "869C0m9S50A",
            "videoUrl": "https://www.youtube.com/watch?v=869C0m9S50A",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 101,
            "index": 102,
            "title": "Height of Tree | Count Nodes | Sum of Nodes",
            "duration": "35-60 min",
            "youtubeId": "zGoG0V5Z2E0",
            "videoUrl": "https://www.youtube.com/watch?v=zGoG0V5Z2E0",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 102,
            "index": 103,
            "title": "Diameter of Binary Tree | Balanced Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "nDe8Iu0D5L0",
            "videoUrl": "https://www.youtube.com/watch?v=nDe8Iu0D5L0",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 103,
            "index": 104,
            "title": "Identical Trees | Mirror Tree | Symmetry in Trees",
            "duration": "35-60 min",
            "youtubeId": "KzE_y0X_VpY",
            "videoUrl": "https://www.youtube.com/watch?v=KzE_y0X_VpY",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 104,
            "index": 105,
            "title": "Spiral Traversal | Boundary Traversal | Vertical Traversal",
            "duration": "35-60 min",
            "youtubeId": "s1d8_P4MXtM",
            "videoUrl": "https://www.youtube.com/watch?v=s1d8_P4MXtM",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 105,
            "index": 106,
            "title": "Top View | Bottom View | Left and Right View of Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "fV0X2VfU6G0",
            "videoUrl": "https://www.youtube.com/watch?v=fV0X2VfU6G0",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 106,
            "index": 107,
            "title": "Path Sum Problems in Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "H7mJ_x6X1m4",
            "videoUrl": "https://www.youtube.com/watch?v=H7mJ_x6X1m4",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=path-sum-problems-in-binary-tree"
          },
          {
            "id": 107,
            "index": 108,
            "title": "Lowest Common Ancestor (LCA) | Minimum Distance between Two Nodes",
            "duration": "35-60 min",
            "youtubeId": "_-QHfMDde90",
            "videoUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 108,
            "index": 109,
            "title": "Construct Binary Tree from String with Bracket Representation",
            "duration": "35-60 min",
            "youtubeId": "pW_p3R7qRyo",
            "videoUrl": "https://www.youtube.com/watch?v=pW_p3R7qRyo",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 109,
            "index": 110,
            "title": "Construct Tree from Inorder and Preorder/Postorder Traversal",
            "duration": "35-60 min",
            "youtubeId": "ffE3699V-Xk",
            "videoUrl": "https://www.youtube.com/watch?v=ffE3699V-Xk",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 110,
            "index": 111,
            "title": "Burning Tree Problem | Tree Serialization and Deserialization",
            "duration": "35-60 min",
            "youtubeId": "L8M0nZpA3_w",
            "videoUrl": "https://www.youtube.com/watch?v=L8M0nZpA3_w",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=burning-tree-problem-tree-serialization-and-deserialization"
          },
          {
            "id": 111,
            "index": 112,
            "title": "Flatten Binary Tree to Linked List | Morris Traversal",
            "duration": "35-60 min",
            "youtubeId": "80Zug6D1_r4",
            "videoUrl": "https://www.youtube.com/watch?v=80Zug6D1_r4",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 112,
            "index": 113,
            "title": "Binary Tree Interview Problem: Construct Tree from Parent Array",
            "duration": "35-60 min",
            "youtubeId": "E_tM-v7G1H0",
            "videoUrl": "https://www.youtube.com/watch?v=E_tM-v7G1H0",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-interview-problem-construct-tree-from-parent-array"
          },
          {
            "id": 113,
            "index": 114,
            "title": "Binary Tree Interview Problem: Maximum Path Sum",
            "duration": "35-60 min",
            "youtubeId": "7M_059f8v8I",
            "videoUrl": "https://www.youtube.com/watch?v=7M_059f8v8I",
            "sectionTitle": "Binary Trees",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-interview-problem-maximum-path-sum"
          }
        ]
      },
      {
        "title": "Binary Search Trees (BST)",
        "videosCount": 10,
        "videos": [
          {
            "id": 114,
            "index": 115,
            "title": "Introduction to Binary Search Tree | Search, Insert and Delete",
            "duration": "35-60 min",
            "youtubeId": "quv0Z_Xp_O8",
            "videoUrl": "https://www.youtube.com/watch?v=quv0Z_Xp_O8",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 115,
            "index": 116,
            "title": "BST Interview Problems: LCA | Inorder Successor | Predecessor",
            "duration": "35-60 min",
            "youtubeId": "P_I_K-8_W2Q",
            "videoUrl": "https://www.youtube.com/watch?v=P_I_K-8_W2Q",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bst-interview-problems-lca-inorder-successor-predecessor"
          },
          {
            "id": 116,
            "index": 117,
            "title": "Construct BST from PostOrder | Valid BST Check",
            "duration": "35-60 min",
            "youtubeId": "fHmxH0P9W5s",
            "videoUrl": "https://www.youtube.com/watch?v=fHmxH0P9W5s",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 117,
            "index": 118,
            "title": "Convert Binary Tree to BST | Sorted DLL to BST",
            "duration": "35-60 min",
            "youtubeId": "kYI9_fG_YI8",
            "videoUrl": "https://www.youtube.com/watch?v=kYI9_fG_YI8",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 118,
            "index": 119,
            "title": "Kth Smallest Element in BST | BST Iterator",
            "duration": "35-60 min",
            "youtubeId": "5_W6mZ_GZ-c",
            "videoUrl": "https://www.youtube.com/watch?v=5_W6mZ_GZ-c",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 119,
            "index": 120,
            "title": "Merge Two BSTs | Largest BST in a Binary Tree",
            "duration": "35-60 min",
            "youtubeId": "p8SREp_wXyA",
            "videoUrl": "https://www.youtube.com/watch?v=p8SREp_wXyA",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 120,
            "index": 121,
            "title": "BST Problem: Recover Binary Search Tree",
            "duration": "35-60 min",
            "youtubeId": "7Xf7f8-M7E8",
            "videoUrl": "https://www.youtube.com/watch?v=7Xf7f8-M7E8",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-recover-binary-search-tree"
          },
          {
            "id": 121,
            "index": 122,
            "title": "BST Problem: Count BST Nodes that lie in a given range",
            "duration": "35-60 min",
            "youtubeId": "q6gC-J8E_68",
            "videoUrl": "https://www.youtube.com/watch?v=q6gC-J8E_68",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-count-bst-nodes-that-lie-in-a-given-range"
          },
          {
            "id": 122,
            "index": 123,
            "title": "BST Problem: Predecessor and Successor in BST",
            "duration": "35-60 min",
            "youtubeId": "lQ0_yGfX99s",
            "videoUrl": "https://www.youtube.com/watch?v=lQ0_yGfX99s",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-predecessor-and-successor-in-bst"
          },
          {
            "id": 123,
            "index": 124,
            "title": "BST Problem: Brothers From Different Roots",
            "duration": "35-60 min",
            "youtubeId": "E-vS3X6M5jA",
            "videoUrl": "https://www.youtube.com/watch?v=E-vS3X6M5jA",
            "sectionTitle": "Binary Search Trees (BST)",
            "tags": [
              "Binary",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-brothers-from-different-roots"
          }
        ]
      },
      {
        "title": "Heaps",
        "videosCount": 7,
        "videos": [
          {
            "id": 124,
            "index": 125,
            "title": "Introduction to Heap | Max Heap and Min Heap Implementation",
            "duration": "35-60 min",
            "youtubeId": "HqPJF2L5h9U",
            "videoUrl": "https://www.youtube.com/watch?v=HqPJF2L5h9U",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 125,
            "index": 126,
            "title": "Heap Sort Algorithm | Priority Queue in STL",
            "duration": "35-60 min",
            "youtubeId": "UVW0NfG_Ono",
            "videoUrl": "https://www.youtube.com/watch?v=UVW0NfG_Ono",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 126,
            "index": 127,
            "title": "Kth Smallest/Largest Element | Merge K Sorted Arrays",
            "duration": "35-60 min",
            "youtubeId": "amDOn7_qfS8",
            "videoUrl": "https://www.youtube.com/watch?v=amDOn7_qfS8",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 127,
            "index": 128,
            "title": "Median in a Stream | Smallest Range Covering Elements from K Lists",
            "duration": "35-60 min",
            "youtubeId": "vVjZ8S_BqOQ",
            "videoUrl": "https://www.youtube.com/watch?v=vVjZ8S_BqOQ",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 128,
            "index": 129,
            "title": "Reorganize String | Longest Happy String",
            "duration": "35-60 min",
            "youtubeId": "wXf6P1hFp_o",
            "videoUrl": "https://www.youtube.com/watch?v=wXf6P1hFp_o",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 129,
            "index": 130,
            "title": "Heap Problem: Minimum Cost of ropes",
            "duration": "35-60 min",
            "youtubeId": "_u_X6J0Z4M0",
            "videoUrl": "https://www.youtube.com/watch?v=_u_X6J0Z4M0",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=heap-problem-minimum-cost-of-ropes"
          },
          {
            "id": 130,
            "index": 131,
            "title": "Heap Problem: Check if Binary Tree is Heap",
            "duration": "35-60 min",
            "youtubeId": "7YpI6YpU8w8",
            "videoUrl": "https://www.youtube.com/watch?v=7YpI6YpU8w8",
            "sectionTitle": "Heaps",
            "tags": [
              "Heaps",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=heap-problem-check-if-binary-tree-is-heap"
          }
        ]
      },
      {
        "title": "Hashing & Tries",
        "videosCount": 3,
        "videos": [
          {
            "id": 131,
            "index": 132,
            "title": "Introduction to Hashing | Collision Handling | Unordered Map",
            "duration": "35-60 min",
            "youtubeId": "2_WstSInVvE",
            "videoUrl": "https://www.youtube.com/watch?v=2_WstSInVvE",
            "sectionTitle": "Hashing & Tries",
            "tags": [
              "Hashing",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 132,
            "index": 133,
            "title": "Introduction to Trie | Insert, Search and StartWith",
            "duration": "35-60 min",
            "youtubeId": "GIU8_X9vE_4",
            "videoUrl": "https://www.youtube.com/watch?v=GIU8_X9vE_4",
            "sectionTitle": "Hashing & Tries",
            "tags": [
              "Hashing",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 133,
            "index": 134,
            "title": "Trie Interview Problems: Longest Common Prefix | Phone Directory",
            "duration": "35-60 min",
            "youtubeId": "Xv6OAs5Oxy0",
            "videoUrl": "https://www.youtube.com/watch?v=Xv6OAs5Oxy0",
            "sectionTitle": "Hashing & Tries",
            "tags": [
              "Hashing",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=trie-interview-problems-longest-common-prefix-phone-directory"
          }
        ]
      },
      {
        "title": "Graphs",
        "videosCount": 10,
        "videos": [
          {
            "id": 134,
            "index": 135,
            "title": "Introduction to Graph | Adjacency Matrix and List",
            "duration": "35-60 min",
            "youtubeId": "IsT9P64t6zE",
            "videoUrl": "https://www.youtube.com/watch?v=IsT9P64t6zE",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 135,
            "index": 136,
            "title": "Graph Traversal: BFS and DFS",
            "duration": "35-60 min",
            "youtubeId": "uD9X0n6-T9Y",
            "videoUrl": "https://www.youtube.com/watch?v=uD9X0n6-T9Y",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 136,
            "index": 137,
            "title": "Cycle Detection in Undirected Graph using BFS/DFS",
            "duration": "35-60 min",
            "youtubeId": "zV2i7-7Z-zI",
            "videoUrl": "https://www.youtube.com/watch?v=zV2i7-7Z-zI",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 137,
            "index": 138,
            "title": "Cycle Detection in Directed Graph | Topological Sort (Kahn's Algo)",
            "duration": "35-60 min",
            "youtubeId": "X2_tYvA3M_A",
            "videoUrl": "https://www.youtube.com/watch?v=X2_tYvA3M_A",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 138,
            "index": 139,
            "title": "Shortest Path in Undirected and Directed Acyclic Graph",
            "duration": "35-60 min",
            "youtubeId": "Z_p7YVzXpSg",
            "videoUrl": "https://www.youtube.com/watch?v=Z_p7YVzXpSg",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 139,
            "index": 140,
            "title": "Dijkstra's Algorithm | Shortest Path in Weighted Graph",
            "duration": "35-60 min",
            "youtubeId": "V6H1qAeB-l4",
            "videoUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 140,
            "index": 141,
            "title": "Bellman Ford Algorithm | Floyd Warshall Algorithm",
            "duration": "35-60 min",
            "youtubeId": "Aa_LshX07O0",
            "videoUrl": "https://www.youtube.com/watch?v=Aa_LshX07O0",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 141,
            "index": 142,
            "title": "Prim's Algorithm | Kruskal's Algorithm | Minimum Spanning Tree",
            "duration": "35-60 min",
            "youtubeId": "K_m9fU0N234",
            "videoUrl": "https://www.youtube.com/watch?v=K_m9fU0N234",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 142,
            "index": 143,
            "title": "Disjoint Set Union (DSU) | Path Compression | Union by Rank",
            "duration": "35-60 min",
            "youtubeId": "P_Vn9O-_N6M",
            "videoUrl": "https://www.youtube.com/watch?v=P_Vn9O-_N6M",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 143,
            "index": 144,
            "title": "Bridges in Graph | Tarjan's Algorithm | Articulation Points",
            "duration": "35-60 min",
            "youtubeId": "Rh6pXAsS0_4",
            "videoUrl": "https://www.youtube.com/watch?v=Rh6pXAsS0_4",
            "sectionTitle": "Graphs",
            "tags": [
              "Graphs",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Dynamic Programming (DP)",
        "videosCount": 5,
        "videos": [
          {
            "id": 144,
            "index": 145,
            "title": "Introduction to DP | Top Down vs Bottom Up | Fibonacci",
            "duration": "35-60 min",
            "youtubeId": "TYITB29V9L8",
            "videoUrl": "https://www.youtube.com/watch?v=TYITB29V9L8",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 145,
            "index": 146,
            "title": "0/1 Knapsack Problem | Subset Sum Problem",
            "duration": "35-60 min",
            "youtubeId": "nLe9fL9f8fI",
            "videoUrl": "https://www.youtube.com/watch?v=nLe9fL9f8fI",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=0-1-knapsack-problem-subset-sum-problem"
          },
          {
            "id": 146,
            "index": 147,
            "title": "Longest Common Subsequence | Longest Palindromic Subsequence",
            "duration": "35-60 min",
            "youtubeId": "v_R9H_v1h2U",
            "videoUrl": "https://www.youtube.com/watch?v=v_R9H_v1h2U",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 147,
            "index": 148,
            "title": "Edit Distance | Matrix Chain Multiplication",
            "duration": "35-60 min",
            "youtubeId": "fS_A_uS8_I8",
            "videoUrl": "https://www.youtube.com/watch?v=fS_A_uS8_I8",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": null
          },
          {
            "id": 148,
            "index": 149,
            "title": "DP on Trees | DP on Grids | Final DSA Guidance",
            "duration": "35-60 min",
            "youtubeId": "AsH_L6_Q-oM",
            "videoUrl": "https://www.youtube.com/watch?v=AsH_L6_Q-oM",
            "sectionTitle": "Dynamic Programming (DP)",
            "tags": [
              "Dynamic",
              "DSA"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Introduction To Programming for Beginners",
        "duration": "35-60 min",
        "youtubeId": "y3OOaXrFy-Q",
        "videoUrl": "https://www.youtube.com/watch?v=y3OOaXrFy-Q",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Introduction to FlowCharts and PseudoCode in Programming",
        "duration": "35-60 min",
        "youtubeId": "H_9MSvTL74g",
        "videoUrl": "https://www.youtube.com/watch?v=H_9MSvTL74g",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Start C++ from Zero and Write Your First Program",
        "duration": "35-60 min",
        "youtubeId": "2Gexv2eld4Y",
        "videoUrl": "https://www.youtube.com/watch?v=2Gexv2eld4Y",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "If Else Statement in c++ || Loop in C++",
        "duration": "35-60 min",
        "youtubeId": "gGaJJovz-4k",
        "videoUrl": "https://www.youtube.com/watch?v=gGaJJovz-4k",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "For Loop in c++ Advance || Prime Number || Factorial || Fibonacci",
        "duration": "35-60 min",
        "youtubeId": "7qINbIQK_J8",
        "videoUrl": "https://www.youtube.com/watch?v=7qINbIQK_J8",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 10,
        "title": "Operators in C++ with implementation",
        "duration": "35-60 min",
        "youtubeId": "HI0mNthclGE",
        "videoUrl": "https://www.youtube.com/watch?v=HI0mNthclGE",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 11,
        "title": "While and Do while Loop || Switch || break || Continue",
        "duration": "35-60 min",
        "youtubeId": "kYbTxu1_H-o",
        "videoUrl": "https://www.youtube.com/watch?v=kYbTxu1_H-o",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 12,
        "title": "Binary To Decimal || Decimal To Binary || Conversion",
        "duration": "35-60 min",
        "youtubeId": "iGRXq30nx6g",
        "videoUrl": "https://www.youtube.com/watch?v=iGRXq30nx6g",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 14,
        "title": "Functions in C++ || Pass by Value || Pass by Reference",
        "duration": "35-60 min",
        "youtubeId": "PnSgN5WOUC0",
        "videoUrl": "https://www.youtube.com/watch?v=PnSgN5WOUC0",
        "sectionTitle": "Fundamentals & Programming Basics",
        "tags": [
          "Fundamentals",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 6,
        "title": "Solve Any Pattern Problem With Simple Trick Part-1",
        "duration": "35-60 min",
        "youtubeId": "0LawAwK5OaI",
        "videoUrl": "https://www.youtube.com/watch?v=0LawAwK5OaI",
        "sectionTitle": "Pattern Printing",
        "tags": [
          "Pattern",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solve-any-pattern-problem-with-simple-trick-part-1"
      },
      {
        "id": 11,
        "index": 7,
        "title": "Solve Any Pattern Problem with Simple Trick Part-2",
        "duration": "35-60 min",
        "youtubeId": "-o6MPFfGipU",
        "videoUrl": "https://www.youtube.com/watch?v=-o6MPFfGipU",
        "sectionTitle": "Pattern Printing",
        "tags": [
          "Pattern",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solve-any-pattern-problem-with-simple-trick-part-2"
      },
      {
        "id": 12,
        "index": 8,
        "title": "Solve HARD Pattern Print Problem with Simple Trick",
        "duration": "35-60 min",
        "youtubeId": "mtQwWAxWbDY",
        "videoUrl": "https://www.youtube.com/watch?v=mtQwWAxWbDY",
        "sectionTitle": "Pattern Printing",
        "tags": [
          "Pattern",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solve-hard-pattern-print-problem-with-simple-trick"
      },
      {
        "id": 13,
        "index": 9,
        "title": "Top 5 Advance Pattern Print Problems",
        "duration": "35-60 min",
        "youtubeId": "CaLtCuji8z0",
        "videoUrl": "https://www.youtube.com/watch?v=CaLtCuji8z0",
        "sectionTitle": "Pattern Printing",
        "tags": [
          "Pattern",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=top-5-advance-pattern-print-problems"
      },
      {
        "id": 14,
        "index": 13,
        "title": "Write Your First Program On LeetCode",
        "duration": "35-60 min",
        "youtubeId": "0j7879JOgIU",
        "videoUrl": "https://www.youtube.com/watch?v=0j7879JOgIU",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=write-your-first-program-on-leetcode"
      },
      {
        "id": 15,
        "index": 15,
        "title": "C++ Series Problem Solving",
        "duration": "35-60 min",
        "youtubeId": "KNtyCUH-2oM",
        "videoUrl": "https://www.youtube.com/watch?v=KNtyCUH-2oM",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=c-series-problem-solving"
      },
      {
        "id": 16,
        "index": 16,
        "title": "Introduction To Arrays in C++",
        "duration": "35-60 min",
        "youtubeId": "moZNKL37w-s",
        "videoUrl": "https://www.youtube.com/watch?v=moZNKL37w-s",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Master Arrays By Solving Problems",
        "duration": "35-60 min",
        "youtubeId": "567332frcF0",
        "videoUrl": "https://www.youtube.com/watch?v=567332frcF0",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=master-arrays-by-solving-problems"
      },
      {
        "id": 18,
        "index": 18,
        "title": "Time and Space Complexity From Zero To Advance",
        "duration": "35-60 min",
        "youtubeId": "hUdqNPhXOh4",
        "videoUrl": "https://www.youtube.com/watch?v=hUdqNPhXOh4",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 28,
        "title": "Two Pointer in C++ | TWO SUM | Pair Sum | Move 0 to end",
        "duration": "35-60 min",
        "youtubeId": "KKPjlsLSs5w",
        "videoUrl": "https://www.youtube.com/watch?v=KKPjlsLSs5w",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 29,
        "title": "Kadane's Algorithm || Prefix and Suffix Sum",
        "duration": "35-60 min",
        "youtubeId": "2YksXVZitrE",
        "videoUrl": "https://www.youtube.com/watch?v=2YksXVZitrE",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 31,
        "title": "Introduction To 2D Arrays in C++",
        "duration": "35-60 min",
        "youtubeId": "kP5EoGyTHbA",
        "videoUrl": "https://www.youtube.com/watch?v=kP5EoGyTHbA",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 32,
        "title": "2D Arrays Interview Problems || Wave || Spiral || Transpose",
        "duration": "35-60 min",
        "youtubeId": "Iow9P1QsjhE",
        "videoUrl": "https://www.youtube.com/watch?v=Iow9P1QsjhE",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=2d-arrays-interview-problems-wave-spiral-transpose"
      },
      {
        "id": 23,
        "index": 34,
        "title": "Binary Search in 2D Arrays || Search in sorted Matrix",
        "duration": "35-60 min",
        "youtubeId": "BA1ppstdJi8",
        "videoUrl": "https://www.youtube.com/watch?v=BA1ppstdJi8",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 35,
        "title": "Majority Elements || Count Frequency || Missing & Repeating",
        "duration": "35-60 min",
        "youtubeId": "ncvJHz_gffI",
        "videoUrl": "https://www.youtube.com/watch?v=ncvJHz_gffI",
        "sectionTitle": "Arrays & Vectors",
        "tags": [
          "Arrays",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 19,
        "title": "SELECTION SORT Algorithm with Theory and Code",
        "duration": "35-60 min",
        "youtubeId": "9_B6TmAHveU",
        "videoUrl": "https://www.youtube.com/watch?v=9_B6TmAHveU",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 20,
        "title": "Bubble Sort with Theory and Code",
        "duration": "35-60 min",
        "youtubeId": "V3vM_m2iFtk",
        "videoUrl": "https://www.youtube.com/watch?v=V3vM_m2iFtk",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 21,
        "title": "Insertion Sort with Theory and Code",
        "duration": "35-60 min",
        "youtubeId": "YpZUgiT1N94",
        "videoUrl": "https://www.youtube.com/watch?v=YpZUgiT1N94",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 22,
        "title": "Binary Search with Theory and Code",
        "duration": "35-60 min",
        "youtubeId": "0Hwpzd-bSck",
        "videoUrl": "https://www.youtube.com/watch?v=0Hwpzd-bSck",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 23,
        "title": "Binary Search Problems || Search Insert || Sqrt(x)",
        "duration": "35-60 min",
        "youtubeId": "740PMblqK6o",
        "videoUrl": "https://www.youtube.com/watch?v=740PMblqK6o",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-problems-search-insert-sqrt-x"
      },
      {
        "id": 30,
        "index": 24,
        "title": "Search in Rotated Array || Peak index || Kth Missing",
        "duration": "35-60 min",
        "youtubeId": "w2HOAYymS3A",
        "videoUrl": "https://www.youtube.com/watch?v=w2HOAYymS3A",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 25,
        "title": "Binary Search Top Problem | Book Allocation | Painter Partition",
        "duration": "35-60 min",
        "youtubeId": "znIFTUyOQvI",
        "videoUrl": "https://www.youtube.com/watch?v=znIFTUyOQvI",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-top-problem-book-allocation-painter-partition"
      },
      {
        "id": 32,
        "index": 26,
        "title": "Binary Search Hard Problem || Aggressive Cow || KOKO Eating",
        "duration": "35-60 min",
        "youtubeId": "ThCyc5GcuRQ",
        "videoUrl": "https://www.youtube.com/watch?v=ThCyc5GcuRQ",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-search-hard-problem-aggressive-cow-koko-eating"
      },
      {
        "id": 33,
        "index": 59,
        "title": "Merge Sort Algorithm",
        "duration": "35-60 min",
        "youtubeId": "86HOPLCgc00",
        "videoUrl": "https://www.youtube.com/watch?v=86HOPLCgc00",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 60,
        "title": "Quick Sort Algorithm",
        "duration": "35-60 min",
        "youtubeId": "iVj8uyd50f4",
        "videoUrl": "https://www.youtube.com/watch?v=iVj8uyd50f4",
        "sectionTitle": "Sorting & Binary Search",
        "tags": [
          "Sorting",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 27,
        "title": "What is STL || Vector in C++",
        "duration": "35-60 min",
        "youtubeId": "-tDAAOYFehc",
        "videoUrl": "https://www.youtube.com/watch?v=-tDAAOYFehc",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 36,
        "title": "Introductions To STRINGS in C++",
        "duration": "35-60 min",
        "youtubeId": "FkaIZAQKmWU",
        "videoUrl": "https://www.youtube.com/watch?v=FkaIZAQKmWU",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 37,
        "title": "String Interviews Problem Solving || Sort a String",
        "duration": "35-60 min",
        "youtubeId": "BCHJ9YizW7w",
        "videoUrl": "https://www.youtube.com/watch?v=BCHJ9YizW7w",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=string-interviews-problem-solving-sort-a-string"
      },
      {
        "id": 38,
        "index": 38,
        "title": "Longest Palindrome || Sorting the Sentence",
        "duration": "35-60 min",
        "youtubeId": "U1OZQl1fU7g",
        "videoUrl": "https://www.youtube.com/watch?v=U1OZQl1fU7g",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 39,
        "index": 39,
        "title": "Strings Problems || Add Strings || Sort Vowels",
        "duration": "35-60 min",
        "youtubeId": "iw9CK0ssgDU",
        "videoUrl": "https://www.youtube.com/watch?v=iw9CK0ssgDU",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=strings-problems-add-strings-sort-vowels"
      },
      {
        "id": 40,
        "index": 40,
        "title": "Factorial of Large Number || Integer to Roman",
        "duration": "35-60 min",
        "youtubeId": "BXocVkXthOE",
        "videoUrl": "https://www.youtube.com/watch?v=BXocVkXthOE",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 41,
        "index": 41,
        "title": "Sliding Window Protocol on Strings",
        "duration": "35-60 min",
        "youtubeId": "swBjx46TSP4",
        "videoUrl": "https://www.youtube.com/watch?v=swBjx46TSP4",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 42,
        "index": 42,
        "title": "KMP Algorithm || Longest Prefix Suffix",
        "duration": "35-60 min",
        "youtubeId": "sODA1BzFvsE",
        "videoUrl": "https://www.youtube.com/watch?v=sODA1BzFvsE",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 43,
        "index": 43,
        "title": "String Matching || KMP Algorithm",
        "duration": "35-60 min",
        "youtubeId": "6gQR8TaFXMw",
        "videoUrl": "https://www.youtube.com/watch?v=6gQR8TaFXMw",
        "sectionTitle": "Strings & Advanced STL",
        "tags": [
          "Strings",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 51,
        "title": "Introduction To Recursion From Basic To Advance",
        "duration": "35-60 min",
        "youtubeId": "j_n1W5YgN_4",
        "videoUrl": "https://www.youtube.com/watch?v=j_n1W5YgN_4",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 45,
        "index": 52,
        "title": "How To Solve Recursion Problem from 4 different Method",
        "duration": "35-60 min",
        "youtubeId": "2OQ46x0Zka8",
        "videoUrl": "https://www.youtube.com/watch?v=2OQ46x0Zka8",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=how-to-solve-recursion-problem-from-4-different-method"
      },
      {
        "id": 46,
        "index": 53,
        "title": "Recursion: Factorial | Sum of N | Power | Sum of Square",
        "duration": "35-60 min",
        "youtubeId": "LLsIA8U3z18",
        "videoUrl": "https://www.youtube.com/watch?v=LLsIA8U3z18",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 47,
        "index": 54,
        "title": "Recursion Problems on Leetcode",
        "duration": "35-60 min",
        "youtubeId": "LK0XSDoN62Y",
        "videoUrl": "https://www.youtube.com/watch?v=LK0XSDoN62Y",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-problems-on-leetcode"
      },
      {
        "id": 48,
        "index": 55,
        "title": "Recursion in Arrays",
        "duration": "35-60 min",
        "youtubeId": "OxXS1m7afIQ",
        "videoUrl": "https://www.youtube.com/watch?v=OxXS1m7afIQ",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 49,
        "index": 56,
        "title": "Recursion in Strings",
        "duration": "35-60 min",
        "youtubeId": "HsrNq_14GhY",
        "videoUrl": "https://www.youtube.com/watch?v=HsrNq_14GhY",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 50,
        "index": 57,
        "title": "Recursion in Binary Search",
        "duration": "35-60 min",
        "youtubeId": "OnrJK8DcD2M",
        "videoUrl": "https://www.youtube.com/watch?v=OnrJK8DcD2M",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 51,
        "index": 58,
        "title": "Time Complexity and Space Complexity in Recursion",
        "duration": "35-60 min",
        "youtubeId": "2Ekun-ocGnQ",
        "videoUrl": "https://www.youtube.com/watch?v=2Ekun-ocGnQ",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 52,
        "index": 61,
        "title": "Recursion on Subsequence || Print All || Generate Parentheses",
        "duration": "35-60 min",
        "youtubeId": "VxFM14y1-v4",
        "videoUrl": "https://www.youtube.com/watch?v=VxFM14y1-v4",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 53,
        "index": 62,
        "title": "Recursion on Subset Sum || Target Sum",
        "duration": "35-60 min",
        "youtubeId": "73X0vvmUNHE",
        "videoUrl": "https://www.youtube.com/watch?v=73X0vvmUNHE",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 54,
        "index": 63,
        "title": "Recursion Perfect Sum Problem || Target Sum with Repetition",
        "duration": "35-60 min",
        "youtubeId": "ki9elYV2r24",
        "videoUrl": "https://www.youtube.com/watch?v=ki9elYV2r24",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-perfect-sum-problem-target-sum-with-repetition"
      },
      {
        "id": 55,
        "index": 64,
        "title": "Permutation of Arrays and Strings",
        "duration": "35-60 min",
        "youtubeId": "i7ev3Rb6dEo",
        "videoUrl": "https://www.youtube.com/watch?v=i7ev3Rb6dEo",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 56,
        "index": 65,
        "title": "Permutation with repetition || Ways to Sum N",
        "duration": "35-60 min",
        "youtubeId": "CQOUIxwQmec",
        "videoUrl": "https://www.youtube.com/watch?v=CQOUIxwQmec",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 57,
        "index": 66,
        "title": "Tower of Hanoi || Code part and Dry Run",
        "duration": "35-60 min",
        "youtubeId": "V5vNq2WOPGE",
        "videoUrl": "https://www.youtube.com/watch?v=V5vNq2WOPGE",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 58,
        "index": 67,
        "title": "Josephus Problem || Predict the winner",
        "duration": "35-60 min",
        "youtubeId": "WoLrGKbxR-M",
        "videoUrl": "https://www.youtube.com/watch?v=WoLrGKbxR-M",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=josephus-problem-predict-the-winner"
      },
      {
        "id": 59,
        "index": 68,
        "title": "Recursion Rat in a Maze Problem",
        "duration": "35-60 min",
        "youtubeId": "r6I99L8E410",
        "videoUrl": "https://www.youtube.com/watch?v=r6I99L8E410",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=recursion-rat-in-a-maze-problem"
      },
      {
        "id": 60,
        "index": 69,
        "title": "Print N-bit binary numbers having more 1s than 0s",
        "duration": "35-60 min",
        "youtubeId": "Rsz-P47fy4c",
        "videoUrl": "https://www.youtube.com/watch?v=Rsz-P47fy4c",
        "sectionTitle": "Recursion & Backtracking",
        "tags": [
          "Recursion",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 61,
        "index": 44,
        "title": "Strings HARD Problems For Coding Round",
        "duration": "35-60 min",
        "youtubeId": "VB-tDA9TOq0",
        "videoUrl": "https://www.youtube.com/watch?v=VB-tDA9TOq0",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=strings-hard-problems-for-coding-round"
      },
      {
        "id": 62,
        "index": 45,
        "title": "Pointers in C++ || Introduction to Pointers in C+",
        "duration": "35-60 min",
        "youtubeId": "EUPirt55uY4",
        "videoUrl": "https://www.youtube.com/watch?v=EUPirt55uY4",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 63,
        "index": 46,
        "title": "Pointers Relationship with array || Arithmetic Pointers",
        "duration": "35-60 min",
        "youtubeId": "KA3XnH6eYpY",
        "videoUrl": "https://www.youtube.com/watch?v=KA3XnH6eYpY",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 64,
        "index": 47,
        "title": "Pointers with Character Arrays and Functions",
        "duration": "35-60 min",
        "youtubeId": "FfNA_g0Quh0",
        "videoUrl": "https://www.youtube.com/watch?v=FfNA_g0Quh0",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 65,
        "index": 48,
        "title": "Double Pointer and Multiple Pointers in C++",
        "duration": "35-60 min",
        "youtubeId": "j2GInxA3HpI",
        "videoUrl": "https://www.youtube.com/watch?v=j2GInxA3HpI",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 66,
        "index": 49,
        "title": "Memory Management || Static vs Dynamic Memory Allocation",
        "duration": "35-60 min",
        "youtubeId": "bLYuiCD0Sr4",
        "videoUrl": "https://www.youtube.com/watch?v=bLYuiCD0Sr4",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 67,
        "index": 50,
        "title": "Dynamic Memory Allocation of 2D and 3D Arrays in C++",
        "duration": "35-60 min",
        "youtubeId": "tFCc2ESnG4w",
        "videoUrl": "https://www.youtube.com/watch?v=tFCc2ESnG4w",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 68,
        "index": 70,
        "title": "Object Oriented Programming in C++",
        "duration": "35-60 min",
        "youtubeId": "iw1Xf_33YM0",
        "videoUrl": "https://www.youtube.com/watch?v=iw1Xf_33YM0",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 69,
        "index": 71,
        "title": "Constructor and Destructor in C++",
        "duration": "35-60 min",
        "youtubeId": "sNiiJ16dLz0",
        "videoUrl": "https://www.youtube.com/watch?v=sNiiJ16dLz0",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 70,
        "index": 72,
        "title": "OOPs: Static data Member and Function | Encapsulation",
        "duration": "35-60 min",
        "youtubeId": "ZIL8t5AoGmQ",
        "videoUrl": "https://www.youtube.com/watch?v=ZIL8t5AoGmQ",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 71,
        "index": 73,
        "title": "Inheritance | Access Modifier | Real Life Example",
        "duration": "35-60 min",
        "youtubeId": "qq3BY4viEB4",
        "videoUrl": "https://www.youtube.com/watch?v=qq3BY4viEB4",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 72,
        "index": 74,
        "title": "Type of Inheritance in C++ | Single | Multiple | Hybrid",
        "duration": "35-60 min",
        "youtubeId": "ww02EpE4DZo",
        "videoUrl": "https://www.youtube.com/watch?v=ww02EpE4DZo",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 73,
        "index": 75,
        "title": "Polymorphism and Virtual Function in C++",
        "duration": "35-60 min",
        "youtubeId": "p2h8rGnkD0o",
        "videoUrl": "https://www.youtube.com/watch?v=p2h8rGnkD0o",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 74,
        "index": 76,
        "title": "Exception Handling in C++",
        "duration": "35-60 min",
        "youtubeId": "essQiHKRmrc",
        "videoUrl": "https://www.youtube.com/watch?v=essQiHKRmrc",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 75,
        "index": 77,
        "title": "File Handling in C++",
        "duration": "35-60 min",
        "youtubeId": "NBsmPHXjLfg",
        "videoUrl": "https://www.youtube.com/watch?v=NBsmPHXjLfg",
        "sectionTitle": "Object Oriented Programming (OOPs) & More",
        "tags": [
          "Object",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 76,
        "index": 78,
        "title": "Introduction To Linked List | Traversal and Insertion in a Linked List",
        "duration": "35-60 min",
        "youtubeId": "CE150x4w0bo",
        "videoUrl": "https://www.youtube.com/watch?v=CE150x4w0bo",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 77,
        "index": 79,
        "title": "Deletion in a Singly Linked List | Deletion in Constant Time",
        "duration": "35-60 min",
        "youtubeId": "tLeSDFqch3I",
        "videoUrl": "https://www.youtube.com/watch?v=tLeSDFqch3I",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 78,
        "index": 80,
        "title": "Reverse a Linked List | Middle of Linked List | Rotate Linked List",
        "duration": "35-60 min",
        "youtubeId": "xcm3srdOQ0w",
        "videoUrl": "https://www.youtube.com/watch?v=xcm3srdOQ0w",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 79,
        "index": 81,
        "title": "Linked List LeetCode Problem: Remove Every Kth Node | Rotate List | Palindrome List",
        "duration": "35-60 min",
        "youtubeId": "qEJrlcc-hAY",
        "videoUrl": "https://www.youtube.com/watch?v=qEJrlcc-hAY",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=linked-list-leetcode-problem-remove-every-kth-node-rotate-list-palindrome-list"
      },
      {
        "id": 80,
        "index": 82,
        "title": "Introduction to Doubly Linked List || Insertion and Deletion in Doubly Linked List",
        "duration": "35-60 min",
        "youtubeId": "KHvYGAzFKqA",
        "videoUrl": "https://www.youtube.com/watch?v=KHvYGAzFKqA",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 81,
        "index": 83,
        "title": "LinkedList Problems: Remove Duplicates | Merge 2 Sorted LinkedList | Sort a LinkedList",
        "duration": "35-60 min",
        "youtubeId": "XlwYGxlUQAA",
        "videoUrl": "https://www.youtube.com/watch?v=XlwYGxlUQAA",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=linkedlist-problems-remove-duplicates-merge-2-sorted-linkedlist-sort-a-linkedlist"
      },
      {
        "id": 82,
        "index": 84,
        "title": "Circular Linked List: Detect Loop in Linked List || Find Length of Loop",
        "duration": "35-60 min",
        "youtubeId": "BA1ppstdJi8",
        "videoUrl": "https://www.youtube.com/watch?v=BA1ppstdJi8",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 83,
        "index": 85,
        "title": "Hard Problem: Detect and Remove Loop in LinkedList",
        "duration": "35-60 min",
        "youtubeId": "RrmDZv1i9W8",
        "videoUrl": "https://www.youtube.com/watch?v=RrmDZv1i9W8",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=hard-problem-detect-and-remove-loop-in-linkedlist"
      },
      {
        "id": 84,
        "index": 86,
        "title": "Add two numbers represented by linked lists | Reverse a Linked List in groups",
        "duration": "35-60 min",
        "youtubeId": "qiS7-e2OXDc",
        "videoUrl": "https://www.youtube.com/watch?v=qiS7-e2OXDc",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 85,
        "index": 87,
        "title": "Hard Problem on Linked List: Flattening a Linked List | Merge K Sorted Linked List",
        "duration": "35-60 min",
        "youtubeId": "2DQJvLq-rm8",
        "videoUrl": "https://www.youtube.com/watch?v=2DQJvLq-rm8",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=hard-problem-on-linked-list-flattening-a-linked-list-merge-k-sorted-linked-list"
      },
      {
        "id": 86,
        "index": 88,
        "title": "LinkedList Series End Here: Clone a linked list with next and random pointer",
        "duration": "35-60 min",
        "youtubeId": "pReLgYYYHJo",
        "videoUrl": "https://www.youtube.com/watch?v=pReLgYYYHJo",
        "sectionTitle": "Linked List",
        "tags": [
          "Linked",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 87,
        "index": 89,
        "title": "Introduction To STACK || Implement Stack Using Arrays and LinkedList",
        "duration": "35-60 min",
        "youtubeId": "ZOS1fKa_WUY",
        "videoUrl": "https://www.youtube.com/watch?v=ZOS1fKa_WUY",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 88,
        "index": 90,
        "title": "Implement Stack using STL | Implementation of Stack using Single Queue",
        "duration": "35-60 min",
        "youtubeId": "abQZotIl70g",
        "videoUrl": "https://www.youtube.com/watch?v=abQZotIl70g",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 89,
        "index": 91,
        "title": "Stack Problem: Next Greater Element | Next Smaller Element | Stock Span Problem",
        "duration": "35-60 min",
        "youtubeId": "8dwjKE9GM30",
        "videoUrl": "https://www.youtube.com/watch?v=8dwjKE9GM30",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problem-next-greater-element-next-smaller-element-stock-span-problem"
      },
      {
        "id": 90,
        "index": 92,
        "title": "Stack Problems: Largest Rectangular Area in Histogram | Maximal Rectangle",
        "duration": "35-60 min",
        "youtubeId": "VhQ9U_0uF-o",
        "videoUrl": "https://www.youtube.com/watch?v=VhQ9U_0uF-o",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-largest-rectangular-area-in-histogram-maximal-rectangle"
      },
      {
        "id": 91,
        "index": 93,
        "title": "Stack Problems: Get Min in O(1) Time and O(1) Space | Min Stack",
        "duration": "35-60 min",
        "youtubeId": "asf9Z6_mO9M",
        "videoUrl": "https://www.youtube.com/watch?v=asf9Z6_mO9M",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-get-min-in-o-1-time-and-o-1-space-min-stack"
      },
      {
        "id": 92,
        "index": 94,
        "title": "Stack Problems: Infix, Prefix and Postfix Conversions",
        "duration": "35-60 min",
        "youtubeId": "mD_LhYhS_mE",
        "videoUrl": "https://www.youtube.com/watch?v=mD_LhYhS_mE",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=stack-problems-infix-prefix-and-postfix-conversions"
      },
      {
        "id": 93,
        "index": 95,
        "title": "Celebrity Problem | LRU Cache Implementation using Stack/Queue",
        "duration": "35-60 min",
        "youtubeId": "RuF7dPfj27Q",
        "videoUrl": "https://www.youtube.com/watch?v=RuF7dPfj27Q",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=celebrity-problem-lru-cache-implementation-using-stack-queue"
      },
      {
        "id": 94,
        "index": 96,
        "title": "Sliding Window Maximum | Stack & Queue Mix Problems",
        "duration": "35-60 min",
        "youtubeId": "6WNZQBHWQJs",
        "videoUrl": "https://www.youtube.com/watch?v=6WNZQBHWQJs",
        "sectionTitle": "Stacks",
        "tags": [
          "Stacks",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=sliding-window-maximum-stack-queue-mix-problems"
      },
      {
        "id": 95,
        "index": 96,
        "title": "Introduction To Queue || Implement Queue with Array and LinkedList || Circular Queue",
        "duration": "35-60 min",
        "youtubeId": "Ah-ZDJf9QW0",
        "videoUrl": "https://www.youtube.com/watch?v=Ah-ZDJf9QW0",
        "sectionTitle": "Queues",
        "tags": [
          "Queues",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 96,
        "index": 97,
        "title": "Print all Elements in Queue | Implement Queue using Stack | Implement Stack using Queue",
        "duration": "35-60 min",
        "youtubeId": "MuDF9Yh8y4w",
        "videoUrl": "https://www.youtube.com/watch?v=MuDF9Yh8y4w",
        "sectionTitle": "Queues",
        "tags": [
          "Queues",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 97,
        "index": 98,
        "title": "Queues with Sliding Window Problems",
        "duration": "35-60 min",
        "youtubeId": "pe-q_7EfFPk",
        "videoUrl": "https://www.youtube.com/watch?v=pe-q_7EfFPk",
        "sectionTitle": "Queues",
        "tags": [
          "Queues",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=queues-with-sliding-window-problems"
      },
      {
        "id": 98,
        "index": 99,
        "title": "Deque Implementation and Interview Problems",
        "duration": "35-60 min",
        "youtubeId": "W7uA9S8T70A",
        "videoUrl": "https://www.youtube.com/watch?v=W7uA9S8T70A",
        "sectionTitle": "Queues",
        "tags": [
          "Queues",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=deque-implementation-and-interview-problems"
      },
      {
        "id": 99,
        "index": 100,
        "title": "Introduction to Binary Tree | Traversal: PreOrder, InOrder, PostOrder",
        "duration": "35-60 min",
        "youtubeId": "nHMQnJ2N3Xc",
        "videoUrl": "https://www.youtube.com/watch?v=nHMQnJ2N3Xc",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 100,
        "index": 101,
        "title": "Binary Tree Implementation | Level Order Traversal",
        "duration": "35-60 min",
        "youtubeId": "869C0m9S50A",
        "videoUrl": "https://www.youtube.com/watch?v=869C0m9S50A",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 101,
        "index": 102,
        "title": "Height of Tree | Count Nodes | Sum of Nodes",
        "duration": "35-60 min",
        "youtubeId": "zGoG0V5Z2E0",
        "videoUrl": "https://www.youtube.com/watch?v=zGoG0V5Z2E0",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 102,
        "index": 103,
        "title": "Diameter of Binary Tree | Balanced Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "nDe8Iu0D5L0",
        "videoUrl": "https://www.youtube.com/watch?v=nDe8Iu0D5L0",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 103,
        "index": 104,
        "title": "Identical Trees | Mirror Tree | Symmetry in Trees",
        "duration": "35-60 min",
        "youtubeId": "KzE_y0X_VpY",
        "videoUrl": "https://www.youtube.com/watch?v=KzE_y0X_VpY",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 104,
        "index": 105,
        "title": "Spiral Traversal | Boundary Traversal | Vertical Traversal",
        "duration": "35-60 min",
        "youtubeId": "s1d8_P4MXtM",
        "videoUrl": "https://www.youtube.com/watch?v=s1d8_P4MXtM",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 105,
        "index": 106,
        "title": "Top View | Bottom View | Left and Right View of Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "fV0X2VfU6G0",
        "videoUrl": "https://www.youtube.com/watch?v=fV0X2VfU6G0",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 106,
        "index": 107,
        "title": "Path Sum Problems in Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "H7mJ_x6X1m4",
        "videoUrl": "https://www.youtube.com/watch?v=H7mJ_x6X1m4",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=path-sum-problems-in-binary-tree"
      },
      {
        "id": 107,
        "index": 108,
        "title": "Lowest Common Ancestor (LCA) | Minimum Distance between Two Nodes",
        "duration": "35-60 min",
        "youtubeId": "_-QHfMDde90",
        "videoUrl": "https://www.youtube.com/watch?v=_-QHfMDde90",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 108,
        "index": 109,
        "title": "Construct Binary Tree from String with Bracket Representation",
        "duration": "35-60 min",
        "youtubeId": "pW_p3R7qRyo",
        "videoUrl": "https://www.youtube.com/watch?v=pW_p3R7qRyo",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 109,
        "index": 110,
        "title": "Construct Tree from Inorder and Preorder/Postorder Traversal",
        "duration": "35-60 min",
        "youtubeId": "ffE3699V-Xk",
        "videoUrl": "https://www.youtube.com/watch?v=ffE3699V-Xk",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 110,
        "index": 111,
        "title": "Burning Tree Problem | Tree Serialization and Deserialization",
        "duration": "35-60 min",
        "youtubeId": "L8M0nZpA3_w",
        "videoUrl": "https://www.youtube.com/watch?v=L8M0nZpA3_w",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=burning-tree-problem-tree-serialization-and-deserialization"
      },
      {
        "id": 111,
        "index": 112,
        "title": "Flatten Binary Tree to Linked List | Morris Traversal",
        "duration": "35-60 min",
        "youtubeId": "80Zug6D1_r4",
        "videoUrl": "https://www.youtube.com/watch?v=80Zug6D1_r4",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 112,
        "index": 113,
        "title": "Binary Tree Interview Problem: Construct Tree from Parent Array",
        "duration": "35-60 min",
        "youtubeId": "E_tM-v7G1H0",
        "videoUrl": "https://www.youtube.com/watch?v=E_tM-v7G1H0",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-interview-problem-construct-tree-from-parent-array"
      },
      {
        "id": 113,
        "index": 114,
        "title": "Binary Tree Interview Problem: Maximum Path Sum",
        "duration": "35-60 min",
        "youtubeId": "7M_059f8v8I",
        "videoUrl": "https://www.youtube.com/watch?v=7M_059f8v8I",
        "sectionTitle": "Binary Trees",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=binary-tree-interview-problem-maximum-path-sum"
      },
      {
        "id": 114,
        "index": 115,
        "title": "Introduction to Binary Search Tree | Search, Insert and Delete",
        "duration": "35-60 min",
        "youtubeId": "quv0Z_Xp_O8",
        "videoUrl": "https://www.youtube.com/watch?v=quv0Z_Xp_O8",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 115,
        "index": 116,
        "title": "BST Interview Problems: LCA | Inorder Successor | Predecessor",
        "duration": "35-60 min",
        "youtubeId": "P_I_K-8_W2Q",
        "videoUrl": "https://www.youtube.com/watch?v=P_I_K-8_W2Q",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bst-interview-problems-lca-inorder-successor-predecessor"
      },
      {
        "id": 116,
        "index": 117,
        "title": "Construct BST from PostOrder | Valid BST Check",
        "duration": "35-60 min",
        "youtubeId": "fHmxH0P9W5s",
        "videoUrl": "https://www.youtube.com/watch?v=fHmxH0P9W5s",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 117,
        "index": 118,
        "title": "Convert Binary Tree to BST | Sorted DLL to BST",
        "duration": "35-60 min",
        "youtubeId": "kYI9_fG_YI8",
        "videoUrl": "https://www.youtube.com/watch?v=kYI9_fG_YI8",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 118,
        "index": 119,
        "title": "Kth Smallest Element in BST | BST Iterator",
        "duration": "35-60 min",
        "youtubeId": "5_W6mZ_GZ-c",
        "videoUrl": "https://www.youtube.com/watch?v=5_W6mZ_GZ-c",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 119,
        "index": 120,
        "title": "Merge Two BSTs | Largest BST in a Binary Tree",
        "duration": "35-60 min",
        "youtubeId": "p8SREp_wXyA",
        "videoUrl": "https://www.youtube.com/watch?v=p8SREp_wXyA",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 120,
        "index": 121,
        "title": "BST Problem: Recover Binary Search Tree",
        "duration": "35-60 min",
        "youtubeId": "7Xf7f8-M7E8",
        "videoUrl": "https://www.youtube.com/watch?v=7Xf7f8-M7E8",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-recover-binary-search-tree"
      },
      {
        "id": 121,
        "index": 122,
        "title": "BST Problem: Count BST Nodes that lie in a given range",
        "duration": "35-60 min",
        "youtubeId": "q6gC-J8E_68",
        "videoUrl": "https://www.youtube.com/watch?v=q6gC-J8E_68",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-count-bst-nodes-that-lie-in-a-given-range"
      },
      {
        "id": 122,
        "index": 123,
        "title": "BST Problem: Predecessor and Successor in BST",
        "duration": "35-60 min",
        "youtubeId": "lQ0_yGfX99s",
        "videoUrl": "https://www.youtube.com/watch?v=lQ0_yGfX99s",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-predecessor-and-successor-in-bst"
      },
      {
        "id": 123,
        "index": 124,
        "title": "BST Problem: Brothers From Different Roots",
        "duration": "35-60 min",
        "youtubeId": "E-vS3X6M5jA",
        "videoUrl": "https://www.youtube.com/watch?v=E-vS3X6M5jA",
        "sectionTitle": "Binary Search Trees (BST)",
        "tags": [
          "Binary",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bst-problem-brothers-from-different-roots"
      },
      {
        "id": 124,
        "index": 125,
        "title": "Introduction to Heap | Max Heap and Min Heap Implementation",
        "duration": "35-60 min",
        "youtubeId": "HqPJF2L5h9U",
        "videoUrl": "https://www.youtube.com/watch?v=HqPJF2L5h9U",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 125,
        "index": 126,
        "title": "Heap Sort Algorithm | Priority Queue in STL",
        "duration": "35-60 min",
        "youtubeId": "UVW0NfG_Ono",
        "videoUrl": "https://www.youtube.com/watch?v=UVW0NfG_Ono",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 126,
        "index": 127,
        "title": "Kth Smallest/Largest Element | Merge K Sorted Arrays",
        "duration": "35-60 min",
        "youtubeId": "amDOn7_qfS8",
        "videoUrl": "https://www.youtube.com/watch?v=amDOn7_qfS8",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 127,
        "index": 128,
        "title": "Median in a Stream | Smallest Range Covering Elements from K Lists",
        "duration": "35-60 min",
        "youtubeId": "vVjZ8S_BqOQ",
        "videoUrl": "https://www.youtube.com/watch?v=vVjZ8S_BqOQ",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 128,
        "index": 129,
        "title": "Reorganize String | Longest Happy String",
        "duration": "35-60 min",
        "youtubeId": "wXf6P1hFp_o",
        "videoUrl": "https://www.youtube.com/watch?v=wXf6P1hFp_o",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 129,
        "index": 130,
        "title": "Heap Problem: Minimum Cost of ropes",
        "duration": "35-60 min",
        "youtubeId": "_u_X6J0Z4M0",
        "videoUrl": "https://www.youtube.com/watch?v=_u_X6J0Z4M0",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=heap-problem-minimum-cost-of-ropes"
      },
      {
        "id": 130,
        "index": 131,
        "title": "Heap Problem: Check if Binary Tree is Heap",
        "duration": "35-60 min",
        "youtubeId": "7YpI6YpU8w8",
        "videoUrl": "https://www.youtube.com/watch?v=7YpI6YpU8w8",
        "sectionTitle": "Heaps",
        "tags": [
          "Heaps",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=heap-problem-check-if-binary-tree-is-heap"
      },
      {
        "id": 131,
        "index": 132,
        "title": "Introduction to Hashing | Collision Handling | Unordered Map",
        "duration": "35-60 min",
        "youtubeId": "2_WstSInVvE",
        "videoUrl": "https://www.youtube.com/watch?v=2_WstSInVvE",
        "sectionTitle": "Hashing & Tries",
        "tags": [
          "Hashing",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 132,
        "index": 133,
        "title": "Introduction to Trie | Insert, Search and StartWith",
        "duration": "35-60 min",
        "youtubeId": "GIU8_X9vE_4",
        "videoUrl": "https://www.youtube.com/watch?v=GIU8_X9vE_4",
        "sectionTitle": "Hashing & Tries",
        "tags": [
          "Hashing",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 133,
        "index": 134,
        "title": "Trie Interview Problems: Longest Common Prefix | Phone Directory",
        "duration": "35-60 min",
        "youtubeId": "Xv6OAs5Oxy0",
        "videoUrl": "https://www.youtube.com/watch?v=Xv6OAs5Oxy0",
        "sectionTitle": "Hashing & Tries",
        "tags": [
          "Hashing",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=trie-interview-problems-longest-common-prefix-phone-directory"
      },
      {
        "id": 134,
        "index": 135,
        "title": "Introduction to Graph | Adjacency Matrix and List",
        "duration": "35-60 min",
        "youtubeId": "IsT9P64t6zE",
        "videoUrl": "https://www.youtube.com/watch?v=IsT9P64t6zE",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 135,
        "index": 136,
        "title": "Graph Traversal: BFS and DFS",
        "duration": "35-60 min",
        "youtubeId": "uD9X0n6-T9Y",
        "videoUrl": "https://www.youtube.com/watch?v=uD9X0n6-T9Y",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 136,
        "index": 137,
        "title": "Cycle Detection in Undirected Graph using BFS/DFS",
        "duration": "35-60 min",
        "youtubeId": "zV2i7-7Z-zI",
        "videoUrl": "https://www.youtube.com/watch?v=zV2i7-7Z-zI",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 137,
        "index": 138,
        "title": "Cycle Detection in Directed Graph | Topological Sort (Kahn's Algo)",
        "duration": "35-60 min",
        "youtubeId": "X2_tYvA3M_A",
        "videoUrl": "https://www.youtube.com/watch?v=X2_tYvA3M_A",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 138,
        "index": 139,
        "title": "Shortest Path in Undirected and Directed Acyclic Graph",
        "duration": "35-60 min",
        "youtubeId": "Z_p7YVzXpSg",
        "videoUrl": "https://www.youtube.com/watch?v=Z_p7YVzXpSg",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 139,
        "index": 140,
        "title": "Dijkstra's Algorithm | Shortest Path in Weighted Graph",
        "duration": "35-60 min",
        "youtubeId": "V6H1qAeB-l4",
        "videoUrl": "https://www.youtube.com/watch?v=V6H1qAeB-l4",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 140,
        "index": 141,
        "title": "Bellman Ford Algorithm | Floyd Warshall Algorithm",
        "duration": "35-60 min",
        "youtubeId": "Aa_LshX07O0",
        "videoUrl": "https://www.youtube.com/watch?v=Aa_LshX07O0",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 141,
        "index": 142,
        "title": "Prim's Algorithm | Kruskal's Algorithm | Minimum Spanning Tree",
        "duration": "35-60 min",
        "youtubeId": "K_m9fU0N234",
        "videoUrl": "https://www.youtube.com/watch?v=K_m9fU0N234",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 142,
        "index": 143,
        "title": "Disjoint Set Union (DSU) | Path Compression | Union by Rank",
        "duration": "35-60 min",
        "youtubeId": "P_Vn9O-_N6M",
        "videoUrl": "https://www.youtube.com/watch?v=P_Vn9O-_N6M",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 143,
        "index": 144,
        "title": "Bridges in Graph | Tarjan's Algorithm | Articulation Points",
        "duration": "35-60 min",
        "youtubeId": "Rh6pXAsS0_4",
        "videoUrl": "https://www.youtube.com/watch?v=Rh6pXAsS0_4",
        "sectionTitle": "Graphs",
        "tags": [
          "Graphs",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 144,
        "index": 145,
        "title": "Introduction to DP | Top Down vs Bottom Up | Fibonacci",
        "duration": "35-60 min",
        "youtubeId": "TYITB29V9L8",
        "videoUrl": "https://www.youtube.com/watch?v=TYITB29V9L8",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 145,
        "index": 146,
        "title": "0/1 Knapsack Problem | Subset Sum Problem",
        "duration": "35-60 min",
        "youtubeId": "nLe9fL9f8fI",
        "videoUrl": "https://www.youtube.com/watch?v=nLe9fL9f8fI",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=0-1-knapsack-problem-subset-sum-problem"
      },
      {
        "id": 146,
        "index": 147,
        "title": "Longest Common Subsequence | Longest Palindromic Subsequence",
        "duration": "35-60 min",
        "youtubeId": "v_R9H_v1h2U",
        "videoUrl": "https://www.youtube.com/watch?v=v_R9H_v1h2U",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 147,
        "index": 148,
        "title": "Edit Distance | Matrix Chain Multiplication",
        "duration": "35-60 min",
        "youtubeId": "fS_A_uS8_I8",
        "videoUrl": "https://www.youtube.com/watch?v=fS_A_uS8_I8",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": null
      },
      {
        "id": 148,
        "index": 149,
        "title": "DP on Trees | DP on Grids | Final DSA Guidance",
        "duration": "35-60 min",
        "youtubeId": "AsH_L6_Q-oM",
        "videoUrl": "https://www.youtube.com/watch?v=AsH_L6_Q-oM",
        "sectionTitle": "Dynamic Programming (DP)",
        "tags": [
          "Dynamic",
          "DSA"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "love-babbar-dbms-playlist",
    "title": "Love Babbar Dbms Interview Preparation Playlist",
    "category": "dbms",
    "instructor": "Love Babbar",
    "channel": "CodeHelp - by Babbar",
    "totalVideos": 22,
    "totalDuration": "28+ hrs",
    "rating": 4.9,
    "badge": "Complete DBMS \u2022 Placement",
    "description": "This DBMS interview preparation playlist by Love Babbar (CodeHelp) is designed specifically for placement and technical interviews. It covers all core DBMS concepts including ER modeling, relational models, SQL queries, normalization, ACID properties, indexing, and database scaling. The playlist also dives into advanced topics like NoSQL databases, CAP theorem, sharding, replication, and distributed database architectures. Ideal for computer science students, software engineering interviews, and backend-focused roles.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU",
    "thumbnailType": "dbms",
    "sections": [
      {
        "title": "Introduction & Basics",
        "videosCount": 3,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Introduction to DBMS Placements Course 2022",
            "duration": "35-60 min",
            "youtubeId": "eYpXCdvKwEQ",
            "videoUrl": "https://www.youtube.com/watch?v=eYpXCdvKwEQ",
            "sectionTitle": "Introduction & Basics",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "What is Database Management System (DBMS)?",
            "duration": "35-60 min",
            "youtubeId": "TYo_CUnIWP8",
            "videoUrl": "https://www.youtube.com/watch?v=TYo_CUnIWP8",
            "sectionTitle": "Introduction & Basics",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "DBMS Architecture and Role of DBA",
            "duration": "35-60 min",
            "youtubeId": "mYI2nopkQJE",
            "videoUrl": "https://www.youtube.com/watch?v=mYI2nopkQJE",
            "sectionTitle": "Introduction & Basics",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "ER Model & Database Design",
        "videosCount": 6,
        "videos": [
          {
            "id": 4,
            "index": 4,
            "title": "ER Model Explained and ER Diagram Notations",
            "duration": "35-60 min",
            "youtubeId": "kMHJhhIx5k4",
            "videoUrl": "https://www.youtube.com/watch?v=kMHJhhIx5k4",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Extended ER Features and Abstraction",
            "duration": "35-60 min",
            "youtubeId": "8_dMPX6_qiY",
            "videoUrl": "https://www.youtube.com/watch?v=8_dMPX6_qiY",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "How to Formulate ER Diagram (Banking System)",
            "duration": "35-60 min",
            "youtubeId": "w-VfTUvxETQ",
            "videoUrl": "https://www.youtube.com/watch?v=w-VfTUvxETQ",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Designing ER Model of Facebook Database",
            "duration": "35-60 min",
            "youtubeId": "sQ1AcVYP18c",
            "videoUrl": "https://www.youtube.com/watch?v=sQ1AcVYP18c",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Relational Model Explained",
            "duration": "35-60 min",
            "youtubeId": "kUk8PgORTzo",
            "videoUrl": "https://www.youtube.com/watch?v=kUk8PgORTzo",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "Convert ER Diagram to Relational Tables",
            "duration": "35-60 min",
            "youtubeId": "_xHl2gpoXqI",
            "videoUrl": "https://www.youtube.com/watch?v=_xHl2gpoXqI",
            "sectionTitle": "ER Model & Database Design",
            "tags": [
              "ER",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "SQL",
        "videosCount": 2,
        "videos": [
          {
            "id": 10,
            "index": 10,
            "title": "Complete SQL in One Video",
            "duration": "35-60 min",
            "youtubeId": "D_wNQR3LeeM",
            "videoUrl": "https://www.youtube.com/watch?v=D_wNQR3LeeM",
            "sectionTitle": "SQL",
            "tags": [
              "SQL",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Common SQL Queries for Interviews",
            "duration": "35-60 min",
            "youtubeId": "vIq9zkpGWc8",
            "videoUrl": "https://www.youtube.com/watch?v=vIq9zkpGWc8",
            "sectionTitle": "SQL",
            "tags": [
              "SQL",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Normalization",
        "videosCount": 1,
        "videos": [
          {
            "id": 12,
            "index": 12,
            "title": "Why We Need Normalisation",
            "duration": "35-60 min",
            "youtubeId": "nweGaymEwGM",
            "videoUrl": "https://www.youtube.com/watch?v=nweGaymEwGM",
            "sectionTitle": "Normalization",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Transactions & ACID Properties",
        "videosCount": 2,
        "videos": [
          {
            "id": 13,
            "index": 13,
            "title": "ACID Properties and Transactions in DBMS",
            "duration": "35-60 min",
            "youtubeId": "sS4gadQw5iM",
            "videoUrl": "https://www.youtube.com/watch?v=sS4gadQw5iM",
            "sectionTitle": "Transactions & ACID Properties",
            "tags": [
              "Transactions",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Implementing Atomicity and Durability",
            "duration": "35-60 min",
            "youtubeId": "iNAaZNC7prE",
            "videoUrl": "https://www.youtube.com/watch?v=iNAaZNC7prE",
            "sectionTitle": "Transactions & ACID Properties",
            "tags": [
              "Transactions",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Indexing & Optimization",
        "videosCount": 1,
        "videos": [
          {
            "id": 15,
            "index": 15,
            "title": "Why Indexing is Important in Database Systems",
            "duration": "35-60 min",
            "youtubeId": "Fr-0rNhIECw",
            "videoUrl": "https://www.youtube.com/watch?v=Fr-0rNhIECw",
            "sectionTitle": "Indexing & Optimization",
            "tags": [
              "Indexing",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "NoSQL & Database Types",
        "videosCount": 2,
        "videos": [
          {
            "id": 16,
            "index": 16,
            "title": "SQL vs NoSQL Databases",
            "duration": "35-60 min",
            "youtubeId": "hl65apHxp64",
            "videoUrl": "https://www.youtube.com/watch?v=hl65apHxp64",
            "sectionTitle": "NoSQL & Database Types",
            "tags": [
              "NoSQL",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Types of Databases",
            "duration": "35-60 min",
            "youtubeId": "ItjrKq7c-h4",
            "videoUrl": "https://www.youtube.com/watch?v=ItjrKq7c-h4",
            "sectionTitle": "NoSQL & Database Types",
            "tags": [
              "NoSQL",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Clustering, Replication & Partitioning",
        "videosCount": 2,
        "videos": [
          {
            "id": 18,
            "index": 18,
            "title": "Clustering and Replication in DBMS",
            "duration": "35-60 min",
            "youtubeId": "Xt3HWe8W67Q",
            "videoUrl": "https://www.youtube.com/watch?v=Xt3HWe8W67Q",
            "sectionTitle": "Clustering, Replication & Partitioning",
            "tags": [
              "Clustering,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Partitioning and Sharding in DBMS",
            "duration": "35-60 min",
            "youtubeId": "TlIX427wKDg",
            "videoUrl": "https://www.youtube.com/watch?v=TlIX427wKDg",
            "sectionTitle": "Clustering, Replication & Partitioning",
            "tags": [
              "Clustering,",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Database Scaling & Distributed Systems",
        "videosCount": 3,
        "videos": [
          {
            "id": 20,
            "index": 20,
            "title": "Database Scaling Patterns",
            "duration": "35-60 min",
            "youtubeId": "SOrhyETsz6w",
            "videoUrl": "https://www.youtube.com/watch?v=SOrhyETsz6w",
            "sectionTitle": "Database Scaling & Distributed Systems",
            "tags": [
              "Database",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "CAP Theorem in DBMS",
            "duration": "35-60 min",
            "youtubeId": "EIl02n-FxTg",
            "videoUrl": "https://www.youtube.com/watch?v=EIl02n-FxTg",
            "sectionTitle": "Database Scaling & Distributed Systems",
            "tags": [
              "Database",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 22,
            "title": "Master-Slave Architecture",
            "duration": "35-60 min",
            "youtubeId": "_RS78xr2Dc4",
            "videoUrl": "https://www.youtube.com/watch?v=_RS78xr2Dc4",
            "sectionTitle": "Database Scaling & Distributed Systems",
            "tags": [
              "Database",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Introduction to DBMS Placements Course 2022",
        "duration": "35-60 min",
        "youtubeId": "eYpXCdvKwEQ",
        "videoUrl": "https://www.youtube.com/watch?v=eYpXCdvKwEQ",
        "sectionTitle": "Introduction & Basics",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "What is Database Management System (DBMS)?",
        "duration": "35-60 min",
        "youtubeId": "TYo_CUnIWP8",
        "videoUrl": "https://www.youtube.com/watch?v=TYo_CUnIWP8",
        "sectionTitle": "Introduction & Basics",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "DBMS Architecture and Role of DBA",
        "duration": "35-60 min",
        "youtubeId": "mYI2nopkQJE",
        "videoUrl": "https://www.youtube.com/watch?v=mYI2nopkQJE",
        "sectionTitle": "Introduction & Basics",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "ER Model Explained and ER Diagram Notations",
        "duration": "35-60 min",
        "youtubeId": "kMHJhhIx5k4",
        "videoUrl": "https://www.youtube.com/watch?v=kMHJhhIx5k4",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Extended ER Features and Abstraction",
        "duration": "35-60 min",
        "youtubeId": "8_dMPX6_qiY",
        "videoUrl": "https://www.youtube.com/watch?v=8_dMPX6_qiY",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "How to Formulate ER Diagram (Banking System)",
        "duration": "35-60 min",
        "youtubeId": "w-VfTUvxETQ",
        "videoUrl": "https://www.youtube.com/watch?v=w-VfTUvxETQ",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Designing ER Model of Facebook Database",
        "duration": "35-60 min",
        "youtubeId": "sQ1AcVYP18c",
        "videoUrl": "https://www.youtube.com/watch?v=sQ1AcVYP18c",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Relational Model Explained",
        "duration": "35-60 min",
        "youtubeId": "kUk8PgORTzo",
        "videoUrl": "https://www.youtube.com/watch?v=kUk8PgORTzo",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "Convert ER Diagram to Relational Tables",
        "duration": "35-60 min",
        "youtubeId": "_xHl2gpoXqI",
        "videoUrl": "https://www.youtube.com/watch?v=_xHl2gpoXqI",
        "sectionTitle": "ER Model & Database Design",
        "tags": [
          "ER",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Complete SQL in One Video",
        "duration": "35-60 min",
        "youtubeId": "D_wNQR3LeeM",
        "videoUrl": "https://www.youtube.com/watch?v=D_wNQR3LeeM",
        "sectionTitle": "SQL",
        "tags": [
          "SQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Common SQL Queries for Interviews",
        "duration": "35-60 min",
        "youtubeId": "vIq9zkpGWc8",
        "videoUrl": "https://www.youtube.com/watch?v=vIq9zkpGWc8",
        "sectionTitle": "SQL",
        "tags": [
          "SQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "Why We Need Normalisation",
        "duration": "35-60 min",
        "youtubeId": "nweGaymEwGM",
        "videoUrl": "https://www.youtube.com/watch?v=nweGaymEwGM",
        "sectionTitle": "Normalization",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "ACID Properties and Transactions in DBMS",
        "duration": "35-60 min",
        "youtubeId": "sS4gadQw5iM",
        "videoUrl": "https://www.youtube.com/watch?v=sS4gadQw5iM",
        "sectionTitle": "Transactions & ACID Properties",
        "tags": [
          "Transactions",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Implementing Atomicity and Durability",
        "duration": "35-60 min",
        "youtubeId": "iNAaZNC7prE",
        "videoUrl": "https://www.youtube.com/watch?v=iNAaZNC7prE",
        "sectionTitle": "Transactions & ACID Properties",
        "tags": [
          "Transactions",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Why Indexing is Important in Database Systems",
        "duration": "35-60 min",
        "youtubeId": "Fr-0rNhIECw",
        "videoUrl": "https://www.youtube.com/watch?v=Fr-0rNhIECw",
        "sectionTitle": "Indexing & Optimization",
        "tags": [
          "Indexing",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "SQL vs NoSQL Databases",
        "duration": "35-60 min",
        "youtubeId": "hl65apHxp64",
        "videoUrl": "https://www.youtube.com/watch?v=hl65apHxp64",
        "sectionTitle": "NoSQL & Database Types",
        "tags": [
          "NoSQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Types of Databases",
        "duration": "35-60 min",
        "youtubeId": "ItjrKq7c-h4",
        "videoUrl": "https://www.youtube.com/watch?v=ItjrKq7c-h4",
        "sectionTitle": "NoSQL & Database Types",
        "tags": [
          "NoSQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Clustering and Replication in DBMS",
        "duration": "35-60 min",
        "youtubeId": "Xt3HWe8W67Q",
        "videoUrl": "https://www.youtube.com/watch?v=Xt3HWe8W67Q",
        "sectionTitle": "Clustering, Replication & Partitioning",
        "tags": [
          "Clustering,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Partitioning and Sharding in DBMS",
        "duration": "35-60 min",
        "youtubeId": "TlIX427wKDg",
        "videoUrl": "https://www.youtube.com/watch?v=TlIX427wKDg",
        "sectionTitle": "Clustering, Replication & Partitioning",
        "tags": [
          "Clustering,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "Database Scaling Patterns",
        "duration": "35-60 min",
        "youtubeId": "SOrhyETsz6w",
        "videoUrl": "https://www.youtube.com/watch?v=SOrhyETsz6w",
        "sectionTitle": "Database Scaling & Distributed Systems",
        "tags": [
          "Database",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "CAP Theorem in DBMS",
        "duration": "35-60 min",
        "youtubeId": "EIl02n-FxTg",
        "videoUrl": "https://www.youtube.com/watch?v=EIl02n-FxTg",
        "sectionTitle": "Database Scaling & Distributed Systems",
        "tags": [
          "Database",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 22,
        "title": "Master-Slave Architecture",
        "duration": "35-60 min",
        "youtubeId": "_RS78xr2Dc4",
        "videoUrl": "https://www.youtube.com/watch?v=_RS78xr2Dc4",
        "sectionTitle": "Database Scaling & Distributed Systems",
        "tags": [
          "Database",
          "DBMS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "riti-kumari-dbms-playlist",
    "title": "Riti Kumari Dbms Interview Preparation Playlist",
    "category": "dbms",
    "instructor": "Riti Kumari",
    "channel": "Riti Kumari",
    "totalVideos": 76,
    "totalDuration": "45+ hrs",
    "rating": 4.8,
    "badge": "Comprehensive DBMS Course",
    "description": "A complete Database Management System (DBMS) course by Riti Kumari, meticulously designed to cover all topics essential for university semester exams, technical placements, and job interviews. The curriculum ranges from fundamental concepts like database architecture, ER modeling, and Relational Algebra to advanced topics such as normalization, functional dependencies, transaction management, concurrency control, indexing (B/B+ Trees), and database security (RBAC, Encryption, Data Masking).",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL3eWd59j9o0Y5bF44-yqH8b9l3wQnJ6eA",
    "thumbnailType": "dbms",
    "sections": [
      {
        "title": "Introduction & Foundational Concepts",
        "videosCount": 9,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Launching DBMS Course \ud83d\udd25\ufe0f | Placements | Semester Exams | 2024",
            "duration": "35-60 min",
            "youtubeId": "eylFMNSJCQo",
            "videoUrl": "https://www.youtube.com/watch?v=eylFMNSJCQo",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Data and Information",
            "duration": "35-60 min",
            "youtubeId": "FMfYhRaoZZM",
            "videoUrl": "https://www.youtube.com/watch?v=FMfYhRaoZZM",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Database and File System",
            "duration": "35-60 min",
            "youtubeId": "7TcBnuk7lYc",
            "videoUrl": "https://www.youtube.com/watch?v=7TcBnuk7lYc",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "What is DBMS and its Applications",
            "duration": "35-60 min",
            "youtubeId": "wulV-eIu9dM",
            "videoUrl": "https://www.youtube.com/watch?v=wulV-eIu9dM",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "to L4 : Data, Database and FileSystem | English",
            "duration": "35-60 min",
            "youtubeId": "OdkJK6P4TCA",
            "videoUrl": "https://www.youtube.com/watch?v=OdkJK6P4TCA",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Types of Database",
            "duration": "35-60 min",
            "youtubeId": "ln-JWRw_hFs",
            "videoUrl": "https://www.youtube.com/watch?v=ln-JWRw_hFs",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Need, Advantages & Disadvantages Of DBMS",
            "duration": "35-60 min",
            "youtubeId": "T3at61GvUo0",
            "videoUrl": "https://www.youtube.com/watch?v=T3at61GvUo0",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Intension and Extension in Database",
            "duration": "35-60 min",
            "youtubeId": "VFdvu6dkGVE",
            "videoUrl": "https://www.youtube.com/watch?v=VFdvu6dkGVE",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "What is RDBMS",
            "duration": "35-60 min",
            "youtubeId": "MFae6MaGetI",
            "videoUrl": "https://www.youtube.com/watch?v=MFae6MaGetI",
            "sectionTitle": "Introduction & Foundational Concepts",
            "tags": [
              "Introduction",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "DBMS Architecture & Data Models",
        "videosCount": 8,
        "videos": [
          {
            "id": 10,
            "index": 10,
            "title": "Data Abstraction & Its level",
            "duration": "35-60 min",
            "youtubeId": "WYBdtOQwmSc",
            "videoUrl": "https://www.youtube.com/watch?v=WYBdtOQwmSc",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Schema, Its Types & Instance in DBMS",
            "duration": "35-60 min",
            "youtubeId": "6FVjbN-Bd1Q",
            "videoUrl": "https://www.youtube.com/watch?v=6FVjbN-Bd1Q",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 12,
            "title": "DBMS Architecture & Its Types",
            "duration": "35-60 min",
            "youtubeId": "g-2xEyo9TQg",
            "videoUrl": "https://www.youtube.com/watch?v=g-2xEyo9TQg",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "3-Tier Architecture",
            "duration": "35-60 min",
            "youtubeId": "UOyA8TSE7l4",
            "videoUrl": "https://www.youtube.com/watch?v=UOyA8TSE7l4",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Data Models and Its Type",
            "duration": "35-60 min",
            "youtubeId": "RNl9ZIDzDG0",
            "videoUrl": "https://www.youtube.com/watch?v=RNl9ZIDzDG0",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Data Independence and Its Type",
            "duration": "35-60 min",
            "youtubeId": "QK1l_wtBRIw",
            "videoUrl": "https://www.youtube.com/watch?v=QK1l_wtBRIw",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Essential Components of table",
            "duration": "35-60 min",
            "youtubeId": "tzcK1wWQKlU",
            "videoUrl": "https://www.youtube.com/watch?v=tzcK1wWQKlU",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Views in DBMS",
            "duration": "35-60 min",
            "youtubeId": "HlkPTVJ27SQ",
            "videoUrl": "https://www.youtube.com/watch?v=HlkPTVJ27SQ",
            "sectionTitle": "DBMS Architecture & Data Models",
            "tags": [
              "DBMS",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Entity-Relationship (ER) Model",
        "videosCount": 17,
        "videos": [
          {
            "id": 18,
            "index": 18,
            "title": "ER Model in DBMS",
            "duration": "35-60 min",
            "youtubeId": "iejgUcZpaq8",
            "videoUrl": "https://www.youtube.com/watch?v=iejgUcZpaq8",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Entity and its Types | ER model",
            "duration": "35-60 min",
            "youtubeId": "Dfjsu6yVn80",
            "videoUrl": "https://www.youtube.com/watch?v=Dfjsu6yVn80",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 20,
            "title": "Attribute and its Types | ER model",
            "duration": "35-60 min",
            "youtubeId": "Y-nPMQG9Nyc",
            "videoUrl": "https://www.youtube.com/watch?v=Y-nPMQG9Nyc",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "Relationship and Degree in ER model",
            "duration": "35-60 min",
            "youtubeId": "DhOhst8FBKE",
            "videoUrl": "https://www.youtube.com/watch?v=DhOhst8FBKE",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 22,
            "title": "1-1 Relationship | ER model",
            "duration": "35-60 min",
            "youtubeId": "yXhiZFBwyIk",
            "videoUrl": "https://www.youtube.com/watch?v=yXhiZFBwyIk",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 23,
            "title": "1-MANY Relationship | ER model",
            "duration": "35-60 min",
            "youtubeId": "2shjI2XauHM",
            "videoUrl": "https://www.youtube.com/watch?v=2shjI2XauHM",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 24,
            "title": "MANY-1 Relationship | ER model",
            "duration": "35-60 min",
            "youtubeId": "2bGXPbxC63Y",
            "videoUrl": "https://www.youtube.com/watch?v=2bGXPbxC63Y",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 25,
            "title": "MANY-MANY Relationship | ER model",
            "duration": "35-60 min",
            "youtubeId": "XsWub7hcV_c",
            "videoUrl": "https://www.youtube.com/watch?v=XsWub7hcV_c",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 26,
            "title": "Participation Constraint | ER model",
            "duration": "35-60 min",
            "youtubeId": "Y6mcrB_z0WQ",
            "videoUrl": "https://www.youtube.com/watch?v=Y6mcrB_z0WQ",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 27,
            "title": "Extended ER Features | ER model",
            "duration": "35-60 min",
            "youtubeId": "cSibHgsiw54",
            "videoUrl": "https://www.youtube.com/watch?v=cSibHgsiw54",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 28,
            "title": "Specialization in DBMS | ER model",
            "duration": "35-60 min",
            "youtubeId": "OZrc1jQ7NfQ",
            "videoUrl": "https://www.youtube.com/watch?v=OZrc1jQ7NfQ",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 29,
            "title": "Generalization in DBMS | ER model",
            "duration": "35-60 min",
            "youtubeId": "qCGv9l-HCXg",
            "videoUrl": "https://www.youtube.com/watch?v=qCGv9l-HCXg",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 30,
            "title": "Aggregation in DBMS | ER model",
            "duration": "35-60 min",
            "youtubeId": "9-sA5Zm8b78",
            "videoUrl": "https://www.youtube.com/watch?v=9-sA5Zm8b78",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 31,
            "index": 31,
            "title": "Steps to draw an ER Model in DBMS | ER model",
            "duration": "35-60 min",
            "youtubeId": "EMd3cSW8Z68",
            "videoUrl": "https://www.youtube.com/watch?v=EMd3cSW8Z68",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 32,
            "title": "ER Model of Instagram | ER model",
            "duration": "35-60 min",
            "youtubeId": "uxVzFV0x7YI",
            "videoUrl": "https://www.youtube.com/watch?v=uxVzFV0x7YI",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 33,
            "title": "Relational Model | ER model",
            "duration": "35-60 min",
            "youtubeId": "ZxRQRxe16ko",
            "videoUrl": "https://www.youtube.com/watch?v=ZxRQRxe16ko",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 34,
            "title": "Convert ER Model to Relational Model | ER model",
            "duration": "35-60 min",
            "youtubeId": "iKKvAN-CIPA",
            "videoUrl": "https://www.youtube.com/watch?v=iKKvAN-CIPA",
            "sectionTitle": "Entity-Relationship (ER) Model",
            "tags": [
              "Entity-Relationship",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Relational Model & Keys",
        "videosCount": 12,
        "videos": [
          {
            "id": 35,
            "index": 35,
            "title": "Keys and Its Type in DBMS",
            "duration": "35-60 min",
            "youtubeId": "Os8ODF7wFC0",
            "videoUrl": "https://www.youtube.com/watch?v=Os8ODF7wFC0",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 36,
            "title": "Referential integrity in DBMS",
            "duration": "35-60 min",
            "youtubeId": "aek361JzYv0",
            "videoUrl": "https://www.youtube.com/watch?v=aek361JzYv0",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 37,
            "title": "Insert, Update, Delete from Referenced table DBMS",
            "duration": "35-60 min",
            "youtubeId": "NBNFf_NjMHk",
            "videoUrl": "https://www.youtube.com/watch?v=NBNFf_NjMHk",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 38,
            "index": 38,
            "title": "Insert, Update, Delete from Referencing table DBMS",
            "duration": "35-60 min",
            "youtubeId": "rheuSfqgnqo",
            "videoUrl": "https://www.youtube.com/watch?v=rheuSfqgnqo",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 39,
            "index": 39,
            "title": "Integrity Constraints & its types in DBMS",
            "duration": "35-60 min",
            "youtubeId": "gQkzvkmt4Jw",
            "videoUrl": "https://www.youtube.com/watch?v=gQkzvkmt4Jw",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 40,
            "index": 40,
            "title": "Super key in DBMS",
            "duration": "35-60 min",
            "youtubeId": "hGt1qDaTVfY",
            "videoUrl": "https://www.youtube.com/watch?v=hGt1qDaTVfY",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 41,
            "index": 41,
            "title": "Functional Dependency and its type",
            "duration": "35-60 min",
            "youtubeId": "vO-DLOYpJVk",
            "videoUrl": "https://www.youtube.com/watch?v=vO-DLOYpJVk",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 42,
            "index": 42,
            "title": "Attribute Closure",
            "duration": "35-60 min",
            "youtubeId": "QfEasgZu-kA",
            "videoUrl": "https://www.youtube.com/watch?v=QfEasgZu-kA",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 43,
            "index": 43,
            "title": "Finding Super key using Attribute closure",
            "duration": "35-60 min",
            "youtubeId": "5SSwIryL-XE",
            "videoUrl": "https://www.youtube.com/watch?v=5SSwIryL-XE",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 44,
            "index": 44,
            "title": "Finding Candidate key using Attribute closure",
            "duration": "35-60 min",
            "youtubeId": "8nsgbxnevHg",
            "videoUrl": "https://www.youtube.com/watch?v=8nsgbxnevHg",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 45,
            "index": 45,
            "title": "Equivalence of Functional Dependency",
            "duration": "35-60 min",
            "youtubeId": "fJmVbpml26Y",
            "videoUrl": "https://www.youtube.com/watch?v=fJmVbpml26Y",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 46,
            "index": 46,
            "title": "Minimal Set of Functional Dependency",
            "duration": "35-60 min",
            "youtubeId": "hPVcgn9IbyE",
            "videoUrl": "https://www.youtube.com/watch?v=hPVcgn9IbyE",
            "sectionTitle": "Relational Model & Keys",
            "tags": [
              "Relational",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Normalization & Functional Dependencies",
        "videosCount": 11,
        "videos": [
          {
            "id": 47,
            "index": 47,
            "title": "Normalisation",
            "duration": "35-60 min",
            "youtubeId": "BA9gB2xp9bg",
            "videoUrl": "https://www.youtube.com/watch?v=BA9gB2xp9bg",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 48,
            "index": 48,
            "title": "Denormalisation",
            "duration": "35-60 min",
            "youtubeId": "ialGGDGxQVc",
            "videoUrl": "https://www.youtube.com/watch?v=ialGGDGxQVc",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 49,
            "index": 49,
            "title": "First Normal Form(1NF)",
            "duration": "35-60 min",
            "youtubeId": "polASaSENwE",
            "videoUrl": "https://www.youtube.com/watch?v=polASaSENwE",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 50,
            "index": 50,
            "title": "Second Normal Form(2NF)",
            "duration": "35-60 min",
            "youtubeId": "pxyM120Kpis",
            "videoUrl": "https://www.youtube.com/watch?v=pxyM120Kpis",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 51,
            "index": 51,
            "title": "Third Normal Form(3NF)",
            "duration": "35-60 min",
            "youtubeId": "32mxcU7CCCY",
            "videoUrl": "https://www.youtube.com/watch?v=32mxcU7CCCY",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 52,
            "index": 52,
            "title": "Boyce Codd Normal Form(BCNF)",
            "duration": "35-60 min",
            "youtubeId": "IovYHatk34c",
            "videoUrl": "https://www.youtube.com/watch?v=IovYHatk34c",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 53,
            "index": 53,
            "title": "Lossy and Lossless Decomposition",
            "duration": "35-60 min",
            "youtubeId": "5Lsx6uNGnEg",
            "videoUrl": "https://www.youtube.com/watch?v=5Lsx6uNGnEg",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 54,
            "index": 54,
            "title": "Fourth Normal Form(4NF)",
            "duration": "35-60 min",
            "youtubeId": "uaqGSy-lhX4",
            "videoUrl": "https://www.youtube.com/watch?v=uaqGSy-lhX4",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 55,
            "index": 55,
            "title": "Fifth Normal Form(4NF)",
            "duration": "35-60 min",
            "youtubeId": "lHzdUY1xFyk",
            "videoUrl": "https://www.youtube.com/watch?v=lHzdUY1xFyk",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 56,
            "index": 56,
            "title": "How to find the highest Normal Form",
            "duration": "35-60 min",
            "youtubeId": "YLZQRf5vtC8",
            "videoUrl": "https://www.youtube.com/watch?v=YLZQRf5vtC8",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 57,
            "index": 57,
            "title": "How to normalize a table",
            "duration": "35-60 min",
            "youtubeId": "-59LdeL22uk",
            "videoUrl": "https://www.youtube.com/watch?v=-59LdeL22uk",
            "sectionTitle": "Normalization & Functional Dependencies",
            "tags": [
              "Normalization",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "SQL & Interview Preparation",
        "videosCount": 3,
        "videos": [
          {
            "id": 58,
            "index": 58,
            "title": "Complete SQL Course for Beginners | Full Tutorial in One Video",
            "duration": "35-60 min",
            "youtubeId": "RQPpP2ywA9k",
            "videoUrl": "https://www.youtube.com/watch?v=RQPpP2ywA9k",
            "sectionTitle": "SQL & Interview Preparation",
            "tags": [
              "SQL",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 59,
            "index": 59,
            "title": "Top SQL Interview Questions and Answers | LeetCode | Ace Your SQL Job Interview | Placements | Jobs",
            "duration": "35-60 min",
            "youtubeId": "pN0Hx9kz-mQ",
            "videoUrl": "https://www.youtube.com/watch?v=pN0Hx9kz-mQ",
            "sectionTitle": "SQL & Interview Preparation",
            "tags": [
              "SQL",
              "DBMS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=top-sql-interview-questions-and-answers-leetcode-ace-your-sql-job-interview-placements-jobs"
          },
          {
            "id": 60,
            "index": 60,
            "title": "Techniques for optimizing SQL queries and File organization | Jobs",
            "duration": "35-60 min",
            "youtubeId": "p5jGmXbYcQA",
            "videoUrl": "https://www.youtube.com/watch?v=p5jGmXbYcQA",
            "sectionTitle": "SQL & Interview Preparation",
            "tags": [
              "SQL",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Concurrency Control & Transactions",
        "videosCount": 8,
        "videos": [
          {
            "id": 61,
            "index": 61,
            "title": "Transaction and Concurrency Control",
            "duration": "35-60 min",
            "youtubeId": "jj0wNVZFrjc",
            "videoUrl": "https://www.youtube.com/watch?v=jj0wNVZFrjc",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 62,
            "index": 62,
            "title": "ACID Properties in DBMS",
            "duration": "35-60 min",
            "youtubeId": "V-1lY1JWhcY",
            "videoUrl": "https://www.youtube.com/watch?v=V-1lY1JWhcY",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 63,
            "index": 63,
            "title": "Schedule and its types | Jobs | Placement",
            "duration": "35-60 min",
            "youtubeId": "upPtgE9UkB8",
            "videoUrl": "https://www.youtube.com/watch?v=upPtgE9UkB8",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 64,
            "index": 64,
            "title": "Concurrent VS Parallel Schedule",
            "duration": "35-60 min",
            "youtubeId": "hHW5Gq94H3I",
            "videoUrl": "https://www.youtube.com/watch?v=hHW5Gq94H3I",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 65,
            "index": 65,
            "title": "Conflict-Serializability in DBMS",
            "duration": "35-60 min",
            "youtubeId": "H0Y_QvALiLs",
            "videoUrl": "https://www.youtube.com/watch?v=H0Y_QvALiLs",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 66,
            "index": 66,
            "title": "View-Serializability in DBMS",
            "duration": "35-60 min",
            "youtubeId": "_EdfR-Hy89k",
            "videoUrl": "https://www.youtube.com/watch?v=_EdfR-Hy89k",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 67,
            "index": 67,
            "title": "Why do we need Concurrency Control mechanisms | Jobs | Placement",
            "duration": "35-60 min",
            "youtubeId": "jvv1kvnDemA",
            "videoUrl": "https://www.youtube.com/watch?v=jvv1kvnDemA",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 68,
            "index": 68,
            "title": "Concurrency control mechanisms | 2PL | Lock-based | Timestamp Based",
            "duration": "35-60 min",
            "youtubeId": "msXIZz5UFXo",
            "videoUrl": "https://www.youtube.com/watch?v=msXIZz5UFXo",
            "sectionTitle": "Concurrency Control & Transactions",
            "tags": [
              "Concurrency",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Indexing, Recovery & Advanced Topics",
        "videosCount": 8,
        "videos": [
          {
            "id": 69,
            "index": 69,
            "title": "Database Recovery management | Jobs | Placement",
            "duration": "35-60 min",
            "youtubeId": "1pSxXwy0qiE",
            "videoUrl": "https://www.youtube.com/watch?v=1pSxXwy0qiE",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 70,
            "index": 70,
            "title": "Indexing and its types | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "A2hEyCc2QUY",
            "videoUrl": "https://www.youtube.com/watch?v=A2hEyCc2QUY",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 71,
            "index": 71,
            "title": "B and B+ Trees | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "spTiUaTSh-4",
            "videoUrl": "https://www.youtube.com/watch?v=spTiUaTSh-4",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 72,
            "index": 72,
            "title": "Difference between B and B+ Trees | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "xmCqrt4zLTk",
            "videoUrl": "https://www.youtube.com/watch?v=xmCqrt4zLTk",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 73,
            "index": 73,
            "title": "Scaling in Databases | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "NjfvoTiWwoo",
            "videoUrl": "https://www.youtube.com/watch?v=NjfvoTiWwoo",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 74,
            "index": 74,
            "title": "RBAC(Role-based access control ) | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "1-QvahOQAgo",
            "videoUrl": "https://www.youtube.com/watch?v=1-QvahOQAgo",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 75,
            "index": 75,
            "title": "Encryption | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "j0Q7CMK2kHw",
            "videoUrl": "https://www.youtube.com/watch?v=j0Q7CMK2kHw",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          },
          {
            "id": 76,
            "index": 76,
            "title": "Data Masking Techniques | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "r3BZLgjKoyQ",
            "videoUrl": "https://www.youtube.com/watch?v=r3BZLgjKoyQ",
            "sectionTitle": "Indexing, Recovery & Advanced Topics",
            "tags": [
              "Indexing,",
              "DBMS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Launching DBMS Course \ud83d\udd25\ufe0f | Placements | Semester Exams | 2024",
        "duration": "35-60 min",
        "youtubeId": "eylFMNSJCQo",
        "videoUrl": "https://www.youtube.com/watch?v=eylFMNSJCQo",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Data and Information",
        "duration": "35-60 min",
        "youtubeId": "FMfYhRaoZZM",
        "videoUrl": "https://www.youtube.com/watch?v=FMfYhRaoZZM",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Database and File System",
        "duration": "35-60 min",
        "youtubeId": "7TcBnuk7lYc",
        "videoUrl": "https://www.youtube.com/watch?v=7TcBnuk7lYc",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "What is DBMS and its Applications",
        "duration": "35-60 min",
        "youtubeId": "wulV-eIu9dM",
        "videoUrl": "https://www.youtube.com/watch?v=wulV-eIu9dM",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "to L4 : Data, Database and FileSystem | English",
        "duration": "35-60 min",
        "youtubeId": "OdkJK6P4TCA",
        "videoUrl": "https://www.youtube.com/watch?v=OdkJK6P4TCA",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Types of Database",
        "duration": "35-60 min",
        "youtubeId": "ln-JWRw_hFs",
        "videoUrl": "https://www.youtube.com/watch?v=ln-JWRw_hFs",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Need, Advantages & Disadvantages Of DBMS",
        "duration": "35-60 min",
        "youtubeId": "T3at61GvUo0",
        "videoUrl": "https://www.youtube.com/watch?v=T3at61GvUo0",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Intension and Extension in Database",
        "duration": "35-60 min",
        "youtubeId": "VFdvu6dkGVE",
        "videoUrl": "https://www.youtube.com/watch?v=VFdvu6dkGVE",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "What is RDBMS",
        "duration": "35-60 min",
        "youtubeId": "MFae6MaGetI",
        "videoUrl": "https://www.youtube.com/watch?v=MFae6MaGetI",
        "sectionTitle": "Introduction & Foundational Concepts",
        "tags": [
          "Introduction",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Data Abstraction & Its level",
        "duration": "35-60 min",
        "youtubeId": "WYBdtOQwmSc",
        "videoUrl": "https://www.youtube.com/watch?v=WYBdtOQwmSc",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Schema, Its Types & Instance in DBMS",
        "duration": "35-60 min",
        "youtubeId": "6FVjbN-Bd1Q",
        "videoUrl": "https://www.youtube.com/watch?v=6FVjbN-Bd1Q",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "DBMS Architecture & Its Types",
        "duration": "35-60 min",
        "youtubeId": "g-2xEyo9TQg",
        "videoUrl": "https://www.youtube.com/watch?v=g-2xEyo9TQg",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "3-Tier Architecture",
        "duration": "35-60 min",
        "youtubeId": "UOyA8TSE7l4",
        "videoUrl": "https://www.youtube.com/watch?v=UOyA8TSE7l4",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Data Models and Its Type",
        "duration": "35-60 min",
        "youtubeId": "RNl9ZIDzDG0",
        "videoUrl": "https://www.youtube.com/watch?v=RNl9ZIDzDG0",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Data Independence and Its Type",
        "duration": "35-60 min",
        "youtubeId": "QK1l_wtBRIw",
        "videoUrl": "https://www.youtube.com/watch?v=QK1l_wtBRIw",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Essential Components of table",
        "duration": "35-60 min",
        "youtubeId": "tzcK1wWQKlU",
        "videoUrl": "https://www.youtube.com/watch?v=tzcK1wWQKlU",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Views in DBMS",
        "duration": "35-60 min",
        "youtubeId": "HlkPTVJ27SQ",
        "videoUrl": "https://www.youtube.com/watch?v=HlkPTVJ27SQ",
        "sectionTitle": "DBMS Architecture & Data Models",
        "tags": [
          "DBMS",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "ER Model in DBMS",
        "duration": "35-60 min",
        "youtubeId": "iejgUcZpaq8",
        "videoUrl": "https://www.youtube.com/watch?v=iejgUcZpaq8",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Entity and its Types | ER model",
        "duration": "35-60 min",
        "youtubeId": "Dfjsu6yVn80",
        "videoUrl": "https://www.youtube.com/watch?v=Dfjsu6yVn80",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "Attribute and its Types | ER model",
        "duration": "35-60 min",
        "youtubeId": "Y-nPMQG9Nyc",
        "videoUrl": "https://www.youtube.com/watch?v=Y-nPMQG9Nyc",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "Relationship and Degree in ER model",
        "duration": "35-60 min",
        "youtubeId": "DhOhst8FBKE",
        "videoUrl": "https://www.youtube.com/watch?v=DhOhst8FBKE",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 22,
        "title": "1-1 Relationship | ER model",
        "duration": "35-60 min",
        "youtubeId": "yXhiZFBwyIk",
        "videoUrl": "https://www.youtube.com/watch?v=yXhiZFBwyIk",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 23,
        "title": "1-MANY Relationship | ER model",
        "duration": "35-60 min",
        "youtubeId": "2shjI2XauHM",
        "videoUrl": "https://www.youtube.com/watch?v=2shjI2XauHM",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 24,
        "title": "MANY-1 Relationship | ER model",
        "duration": "35-60 min",
        "youtubeId": "2bGXPbxC63Y",
        "videoUrl": "https://www.youtube.com/watch?v=2bGXPbxC63Y",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 25,
        "title": "MANY-MANY Relationship | ER model",
        "duration": "35-60 min",
        "youtubeId": "XsWub7hcV_c",
        "videoUrl": "https://www.youtube.com/watch?v=XsWub7hcV_c",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 26,
        "title": "Participation Constraint | ER model",
        "duration": "35-60 min",
        "youtubeId": "Y6mcrB_z0WQ",
        "videoUrl": "https://www.youtube.com/watch?v=Y6mcrB_z0WQ",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 27,
        "title": "Extended ER Features | ER model",
        "duration": "35-60 min",
        "youtubeId": "cSibHgsiw54",
        "videoUrl": "https://www.youtube.com/watch?v=cSibHgsiw54",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 28,
        "title": "Specialization in DBMS | ER model",
        "duration": "35-60 min",
        "youtubeId": "OZrc1jQ7NfQ",
        "videoUrl": "https://www.youtube.com/watch?v=OZrc1jQ7NfQ",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 29,
        "title": "Generalization in DBMS | ER model",
        "duration": "35-60 min",
        "youtubeId": "qCGv9l-HCXg",
        "videoUrl": "https://www.youtube.com/watch?v=qCGv9l-HCXg",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 30,
        "title": "Aggregation in DBMS | ER model",
        "duration": "35-60 min",
        "youtubeId": "9-sA5Zm8b78",
        "videoUrl": "https://www.youtube.com/watch?v=9-sA5Zm8b78",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 31,
        "title": "Steps to draw an ER Model in DBMS | ER model",
        "duration": "35-60 min",
        "youtubeId": "EMd3cSW8Z68",
        "videoUrl": "https://www.youtube.com/watch?v=EMd3cSW8Z68",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 32,
        "title": "ER Model of Instagram | ER model",
        "duration": "35-60 min",
        "youtubeId": "uxVzFV0x7YI",
        "videoUrl": "https://www.youtube.com/watch?v=uxVzFV0x7YI",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 33,
        "title": "Relational Model | ER model",
        "duration": "35-60 min",
        "youtubeId": "ZxRQRxe16ko",
        "videoUrl": "https://www.youtube.com/watch?v=ZxRQRxe16ko",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 34,
        "title": "Convert ER Model to Relational Model | ER model",
        "duration": "35-60 min",
        "youtubeId": "iKKvAN-CIPA",
        "videoUrl": "https://www.youtube.com/watch?v=iKKvAN-CIPA",
        "sectionTitle": "Entity-Relationship (ER) Model",
        "tags": [
          "Entity-Relationship",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 35,
        "title": "Keys and Its Type in DBMS",
        "duration": "35-60 min",
        "youtubeId": "Os8ODF7wFC0",
        "videoUrl": "https://www.youtube.com/watch?v=Os8ODF7wFC0",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 36,
        "title": "Referential integrity in DBMS",
        "duration": "35-60 min",
        "youtubeId": "aek361JzYv0",
        "videoUrl": "https://www.youtube.com/watch?v=aek361JzYv0",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 37,
        "title": "Insert, Update, Delete from Referenced table DBMS",
        "duration": "35-60 min",
        "youtubeId": "NBNFf_NjMHk",
        "videoUrl": "https://www.youtube.com/watch?v=NBNFf_NjMHk",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 38,
        "index": 38,
        "title": "Insert, Update, Delete from Referencing table DBMS",
        "duration": "35-60 min",
        "youtubeId": "rheuSfqgnqo",
        "videoUrl": "https://www.youtube.com/watch?v=rheuSfqgnqo",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 39,
        "index": 39,
        "title": "Integrity Constraints & its types in DBMS",
        "duration": "35-60 min",
        "youtubeId": "gQkzvkmt4Jw",
        "videoUrl": "https://www.youtube.com/watch?v=gQkzvkmt4Jw",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 40,
        "index": 40,
        "title": "Super key in DBMS",
        "duration": "35-60 min",
        "youtubeId": "hGt1qDaTVfY",
        "videoUrl": "https://www.youtube.com/watch?v=hGt1qDaTVfY",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 41,
        "index": 41,
        "title": "Functional Dependency and its type",
        "duration": "35-60 min",
        "youtubeId": "vO-DLOYpJVk",
        "videoUrl": "https://www.youtube.com/watch?v=vO-DLOYpJVk",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 42,
        "index": 42,
        "title": "Attribute Closure",
        "duration": "35-60 min",
        "youtubeId": "QfEasgZu-kA",
        "videoUrl": "https://www.youtube.com/watch?v=QfEasgZu-kA",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 43,
        "index": 43,
        "title": "Finding Super key using Attribute closure",
        "duration": "35-60 min",
        "youtubeId": "5SSwIryL-XE",
        "videoUrl": "https://www.youtube.com/watch?v=5SSwIryL-XE",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 44,
        "title": "Finding Candidate key using Attribute closure",
        "duration": "35-60 min",
        "youtubeId": "8nsgbxnevHg",
        "videoUrl": "https://www.youtube.com/watch?v=8nsgbxnevHg",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 45,
        "index": 45,
        "title": "Equivalence of Functional Dependency",
        "duration": "35-60 min",
        "youtubeId": "fJmVbpml26Y",
        "videoUrl": "https://www.youtube.com/watch?v=fJmVbpml26Y",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 46,
        "index": 46,
        "title": "Minimal Set of Functional Dependency",
        "duration": "35-60 min",
        "youtubeId": "hPVcgn9IbyE",
        "videoUrl": "https://www.youtube.com/watch?v=hPVcgn9IbyE",
        "sectionTitle": "Relational Model & Keys",
        "tags": [
          "Relational",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 47,
        "index": 47,
        "title": "Normalisation",
        "duration": "35-60 min",
        "youtubeId": "BA9gB2xp9bg",
        "videoUrl": "https://www.youtube.com/watch?v=BA9gB2xp9bg",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 48,
        "index": 48,
        "title": "Denormalisation",
        "duration": "35-60 min",
        "youtubeId": "ialGGDGxQVc",
        "videoUrl": "https://www.youtube.com/watch?v=ialGGDGxQVc",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 49,
        "index": 49,
        "title": "First Normal Form(1NF)",
        "duration": "35-60 min",
        "youtubeId": "polASaSENwE",
        "videoUrl": "https://www.youtube.com/watch?v=polASaSENwE",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 50,
        "index": 50,
        "title": "Second Normal Form(2NF)",
        "duration": "35-60 min",
        "youtubeId": "pxyM120Kpis",
        "videoUrl": "https://www.youtube.com/watch?v=pxyM120Kpis",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 51,
        "index": 51,
        "title": "Third Normal Form(3NF)",
        "duration": "35-60 min",
        "youtubeId": "32mxcU7CCCY",
        "videoUrl": "https://www.youtube.com/watch?v=32mxcU7CCCY",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 52,
        "index": 52,
        "title": "Boyce Codd Normal Form(BCNF)",
        "duration": "35-60 min",
        "youtubeId": "IovYHatk34c",
        "videoUrl": "https://www.youtube.com/watch?v=IovYHatk34c",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 53,
        "index": 53,
        "title": "Lossy and Lossless Decomposition",
        "duration": "35-60 min",
        "youtubeId": "5Lsx6uNGnEg",
        "videoUrl": "https://www.youtube.com/watch?v=5Lsx6uNGnEg",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 54,
        "index": 54,
        "title": "Fourth Normal Form(4NF)",
        "duration": "35-60 min",
        "youtubeId": "uaqGSy-lhX4",
        "videoUrl": "https://www.youtube.com/watch?v=uaqGSy-lhX4",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 55,
        "index": 55,
        "title": "Fifth Normal Form(4NF)",
        "duration": "35-60 min",
        "youtubeId": "lHzdUY1xFyk",
        "videoUrl": "https://www.youtube.com/watch?v=lHzdUY1xFyk",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 56,
        "index": 56,
        "title": "How to find the highest Normal Form",
        "duration": "35-60 min",
        "youtubeId": "YLZQRf5vtC8",
        "videoUrl": "https://www.youtube.com/watch?v=YLZQRf5vtC8",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 57,
        "index": 57,
        "title": "How to normalize a table",
        "duration": "35-60 min",
        "youtubeId": "-59LdeL22uk",
        "videoUrl": "https://www.youtube.com/watch?v=-59LdeL22uk",
        "sectionTitle": "Normalization & Functional Dependencies",
        "tags": [
          "Normalization",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 58,
        "index": 58,
        "title": "Complete SQL Course for Beginners | Full Tutorial in One Video",
        "duration": "35-60 min",
        "youtubeId": "RQPpP2ywA9k",
        "videoUrl": "https://www.youtube.com/watch?v=RQPpP2ywA9k",
        "sectionTitle": "SQL & Interview Preparation",
        "tags": [
          "SQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 59,
        "index": 59,
        "title": "Top SQL Interview Questions and Answers | LeetCode | Ace Your SQL Job Interview | Placements | Jobs",
        "duration": "35-60 min",
        "youtubeId": "pN0Hx9kz-mQ",
        "videoUrl": "https://www.youtube.com/watch?v=pN0Hx9kz-mQ",
        "sectionTitle": "SQL & Interview Preparation",
        "tags": [
          "SQL",
          "DBMS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=top-sql-interview-questions-and-answers-leetcode-ace-your-sql-job-interview-placements-jobs"
      },
      {
        "id": 60,
        "index": 60,
        "title": "Techniques for optimizing SQL queries and File organization | Jobs",
        "duration": "35-60 min",
        "youtubeId": "p5jGmXbYcQA",
        "videoUrl": "https://www.youtube.com/watch?v=p5jGmXbYcQA",
        "sectionTitle": "SQL & Interview Preparation",
        "tags": [
          "SQL",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 61,
        "index": 61,
        "title": "Transaction and Concurrency Control",
        "duration": "35-60 min",
        "youtubeId": "jj0wNVZFrjc",
        "videoUrl": "https://www.youtube.com/watch?v=jj0wNVZFrjc",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 62,
        "index": 62,
        "title": "ACID Properties in DBMS",
        "duration": "35-60 min",
        "youtubeId": "V-1lY1JWhcY",
        "videoUrl": "https://www.youtube.com/watch?v=V-1lY1JWhcY",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 63,
        "index": 63,
        "title": "Schedule and its types | Jobs | Placement",
        "duration": "35-60 min",
        "youtubeId": "upPtgE9UkB8",
        "videoUrl": "https://www.youtube.com/watch?v=upPtgE9UkB8",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 64,
        "index": 64,
        "title": "Concurrent VS Parallel Schedule",
        "duration": "35-60 min",
        "youtubeId": "hHW5Gq94H3I",
        "videoUrl": "https://www.youtube.com/watch?v=hHW5Gq94H3I",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 65,
        "index": 65,
        "title": "Conflict-Serializability in DBMS",
        "duration": "35-60 min",
        "youtubeId": "H0Y_QvALiLs",
        "videoUrl": "https://www.youtube.com/watch?v=H0Y_QvALiLs",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 66,
        "index": 66,
        "title": "View-Serializability in DBMS",
        "duration": "35-60 min",
        "youtubeId": "_EdfR-Hy89k",
        "videoUrl": "https://www.youtube.com/watch?v=_EdfR-Hy89k",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 67,
        "index": 67,
        "title": "Why do we need Concurrency Control mechanisms | Jobs | Placement",
        "duration": "35-60 min",
        "youtubeId": "jvv1kvnDemA",
        "videoUrl": "https://www.youtube.com/watch?v=jvv1kvnDemA",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 68,
        "index": 68,
        "title": "Concurrency control mechanisms | 2PL | Lock-based | Timestamp Based",
        "duration": "35-60 min",
        "youtubeId": "msXIZz5UFXo",
        "videoUrl": "https://www.youtube.com/watch?v=msXIZz5UFXo",
        "sectionTitle": "Concurrency Control & Transactions",
        "tags": [
          "Concurrency",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 69,
        "index": 69,
        "title": "Database Recovery management | Jobs | Placement",
        "duration": "35-60 min",
        "youtubeId": "1pSxXwy0qiE",
        "videoUrl": "https://www.youtube.com/watch?v=1pSxXwy0qiE",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 70,
        "index": 70,
        "title": "Indexing and its types | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "A2hEyCc2QUY",
        "videoUrl": "https://www.youtube.com/watch?v=A2hEyCc2QUY",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 71,
        "index": 71,
        "title": "B and B+ Trees | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "spTiUaTSh-4",
        "videoUrl": "https://www.youtube.com/watch?v=spTiUaTSh-4",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 72,
        "index": 72,
        "title": "Difference between B and B+ Trees | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "xmCqrt4zLTk",
        "videoUrl": "https://www.youtube.com/watch?v=xmCqrt4zLTk",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 73,
        "index": 73,
        "title": "Scaling in Databases | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "NjfvoTiWwoo",
        "videoUrl": "https://www.youtube.com/watch?v=NjfvoTiWwoo",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 74,
        "index": 74,
        "title": "RBAC(Role-based access control ) | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "1-QvahOQAgo",
        "videoUrl": "https://www.youtube.com/watch?v=1-QvahOQAgo",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 75,
        "index": 75,
        "title": "Encryption | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "j0Q7CMK2kHw",
        "videoUrl": "https://www.youtube.com/watch?v=j0Q7CMK2kHw",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      },
      {
        "id": 76,
        "index": 76,
        "title": "Data Masking Techniques | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "r3BZLgjKoyQ",
        "videoUrl": "https://www.youtube.com/watch?v=r3BZLgjKoyQ",
        "sectionTitle": "Indexing, Recovery & Advanced Topics",
        "tags": [
          "Indexing,",
          "DBMS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "love-babbar-os-playlist",
    "title": "Love Babbar OS Interview Preparation Playlist",
    "category": "os",
    "instructor": "Love Babbar",
    "channel": "CodeHelp - by Babbar",
    "totalVideos": 30,
    "totalDuration": "24+ hrs",
    "rating": 4.9,
    "badge": "OS for Placements",
    "description": "This Operating Systems course, part of the Placement Series by CodeHelp, covers core OS concepts essential for technical interviews and competitive exams. Topics include fundamental OS operations, process management, CPU scheduling algorithms (FCFS, SJF, Round Robin, MLFQ), process synchronization problems (Critical Section, Producer-Consumer, Dining Philosophers), deadlock handling, and memory management (Contiguous Allocation, Paging, Segmentation, Virtual Memory, Page Replacement).",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTprw0A2m8J8s-0tQ7g8_f5f",
    "thumbnailType": "os",
    "sections": [
      {
        "title": "Introduction and Core Concepts",
        "videosCount": 8,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Introduction to Operating Systems Placements Course 2022",
            "duration": "35-60 min",
            "youtubeId": "_TpOHMCODXo",
            "videoUrl": "https://www.youtube.com/watch?v=_TpOHMCODXo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "What is an Operating System ?",
            "duration": "35-60 min",
            "youtubeId": "a1l4MceYHaQ",
            "videoUrl": "https://www.youtube.com/watch?v=a1l4MceYHaQ&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Types of Operating Systems",
            "duration": "35-60 min",
            "youtubeId": "LBqNWOqSzBA",
            "videoUrl": "https://www.youtube.com/watch?v=LBqNWOqSzBA&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "Components of Operating System",
            "duration": "35-60 min",
            "youtubeId": "kHMXP_i6zew",
            "videoUrl": "https://www.youtube.com/watch?v=kHMXP_i6zew&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "System Calls in Operating System [Theory + Example + Hands-on Terminal]",
            "duration": "35-60 min",
            "youtubeId": "lo8Z61qCDqQ",
            "videoUrl": "https://www.youtube.com/watch?v=lo8Z61qCDqQ&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "How Operating System Boots up?",
            "duration": "35-60 min",
            "youtubeId": "nAr2sLiLDWw",
            "videoUrl": "https://www.youtube.com/watch?v=nAr2sLiLDWw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Difference between 32-bit & 64-bit Operating System",
            "duration": "35-60 min",
            "youtubeId": "cE6WoaUnpAM",
            "videoUrl": "https://www.youtube.com/watch?v=cE6WoaUnpAM&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Comparison between different STORAGES used in Computer",
            "duration": "35-60 min",
            "youtubeId": "KFIStTj2DFw",
            "videoUrl": "https://www.youtube.com/watch?v=KFIStTj2DFw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Introduction and Core Concepts",
            "tags": [
              "Introduction",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Process Management and CPU Scheduling",
        "videosCount": 6,
        "videos": [
          {
            "id": 9,
            "index": 9,
            "title": "How OS creates a PROCESS || Introduction to Process",
            "duration": "35-60 min",
            "youtubeId": "ev4PrTlTKzE",
            "videoUrl": "https://www.youtube.com/watch?v=ev4PrTlTKzE&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 10,
            "title": "What are different Process States in Operating System ?",
            "duration": "35-60 min",
            "youtubeId": "BoH-yzA2nj8",
            "videoUrl": "https://www.youtube.com/watch?v=BoH-yzA2nj8&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Context Switching in OS | Medium Term Scheduler | Orphan/Zombie Process",
            "duration": "35-60 min",
            "youtubeId": "arlIBez-W_I",
            "videoUrl": "https://www.youtube.com/watch?v=arlIBez-W_I&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 12,
            "title": "What is Convoy Effect | FCFS CPU Scheduling Algorithm",
            "duration": "35-60 min",
            "youtubeId": "lLmqbQnLM4A",
            "videoUrl": "https://www.youtube.com/watch?v=lLmqbQnLM4A&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "Shortest Job First Algorithm | Priority Scheduling | Round Robin CPU Scheduling",
            "duration": "35-60 min",
            "youtubeId": "AXrF0AmMYlc",
            "videoUrl": "https://www.youtube.com/watch?v=AXrF0AmMYlc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Multi Level Queue Scheduling || MLFQ || Comparison btw CPU Scheduling Algorithms",
            "duration": "35-60 min",
            "youtubeId": "ly5Ume_Crsk",
            "videoUrl": "https://www.youtube.com/watch?v=ly5Ume_Crsk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Management and CPU Scheduling",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Process Synchronization and Concurrency Problems",
        "videosCount": 8,
        "videos": [
          {
            "id": 15,
            "index": 15,
            "title": "What is Concurrency ? || Multi-Threading in C++ || Operating Systems Placement Series",
            "duration": "35-60 min",
            "youtubeId": "S7Aym-4-iUc",
            "videoUrl": "https://www.youtube.com/watch?v=S7Aym-4-iUc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Critical Section Problem || Race condition in OS",
            "duration": "35-60 min",
            "youtubeId": "6NEJ3-nOQek",
            "videoUrl": "https://www.youtube.com/watch?v=6NEJ3-nOQek&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=critical-section-problem-race-condition-in-os"
          },
          {
            "id": 17,
            "index": 17,
            "title": "Conditional Variables & Semaphores to Synchronise Threads",
            "duration": "35-60 min",
            "youtubeId": "AeDvGSbnoBE",
            "videoUrl": "https://www.youtube.com/watch?v=AeDvGSbnoBE&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 18,
            "title": "Producer Consumer Problem and its Solution || OS Placement Series",
            "duration": "35-60 min",
            "youtubeId": "lY64CSlnjpg",
            "videoUrl": "https://www.youtube.com/watch?v=lY64CSlnjpg&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=producer-consumer-problem-and-its-solution-os-placement-series"
          },
          {
            "id": 19,
            "index": 19,
            "title": "Reader-Writer Problem and its Solution || OS Placement Series",
            "duration": "35-60 min",
            "youtubeId": "TyJ3as7haIU",
            "videoUrl": "https://www.youtube.com/watch?v=TyJ3as7haIU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=reader-writer-problem-and-its-solution-os-placement-series"
          },
          {
            "id": 20,
            "index": 20,
            "title": "The Dining Philosophers Problem & its Solution",
            "duration": "35-60 min",
            "youtubeId": "PIaIJCUZbf4",
            "videoUrl": "https://www.youtube.com/watch?v=PIaIJCUZbf4&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-dining-philosophers-problem-its-solution"
          },
          {
            "id": 21,
            "index": 21,
            "title": "Solving LeetCode Problems on Concurrency || OS Placement Series",
            "duration": "35-60 min",
            "youtubeId": "pOfDCjYm6Kk",
            "videoUrl": "https://www.youtube.com/watch?v=pOfDCjYm6Kk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-problems-on-concurrency-os-placement-series"
          },
          {
            "id": 22,
            "index": 22,
            "title": "Bonus Session: Solving LeetCode Problems on Concurrency || Operating Systems Placement Series",
            "duration": "35-60 min",
            "youtubeId": "9xS77QBL8W0",
            "videoUrl": "https://www.youtube.com/watch?v=9xS77QBL8W0&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Process Synchronization and Concurrency Problems",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=bonus-session-solving-leetcode-problems-on-concurrency-operating-systems-placement-series"
          }
        ]
      },
      {
        "title": "Deadlock",
        "videosCount": 2,
        "videos": [
          {
            "id": 23,
            "index": 23,
            "title": "What is Deadlock | Necessary Conditions | Handling Methods | Part - 1",
            "duration": "35-60 min",
            "youtubeId": "pkTekFvauhU",
            "videoUrl": "https://www.youtube.com/watch?v=pkTekFvauhU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Deadlock",
            "tags": [
              "Deadlock",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 24,
            "title": "Deadlock Avoidance | Deadlock Detection and Recovery | Part - 2",
            "duration": "35-60 min",
            "youtubeId": "dupdUhx1fns",
            "videoUrl": "https://www.youtube.com/watch?v=dupdUhx1fns&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Deadlock",
            "tags": [
              "Deadlock",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Memory Management",
        "videosCount": 6,
        "videos": [
          {
            "id": 25,
            "index": 25,
            "title": "Memory Management in OS || Contiguous Memory Allocation",
            "duration": "35-60 min",
            "youtubeId": "ZNcArN7ODrw",
            "videoUrl": "https://www.youtube.com/watch?v=ZNcArN7ODrw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 26,
            "title": "How OS manages Free Space? || Memory Management",
            "duration": "35-60 min",
            "youtubeId": "_hrKEA1sEUo",
            "videoUrl": "https://www.youtube.com/watch?v=_hrKEA1sEUo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 27,
            "title": "What is Segmentation || Non-Contiguous Memory Allocation",
            "duration": "35-60 min",
            "youtubeId": "fRPz3dQ2LZc",
            "videoUrl": "https://www.youtube.com/watch?v=fRPz3dQ2LZc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 28,
            "title": "What is Virtual Memory? || Page fault in OS",
            "duration": "35-60 min",
            "youtubeId": "U7wsluje5lU",
            "videoUrl": "https://www.youtube.com/watch?v=U7wsluje5lU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 29,
            "title": "Page Replacement Algorithms || How to implement LRU algorithm?",
            "duration": "35-60 min",
            "youtubeId": "S727dgU0pU8",
            "videoUrl": "https://www.youtube.com/watch?v=S727dgU0pU8&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 30,
            "title": "What is Thrashing? || Important Interview Question",
            "duration": "35-60 min",
            "youtubeId": "gA34TuSHAHk",
            "videoUrl": "https://www.youtube.com/watch?v=gA34TuSHAHk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
            "sectionTitle": "Memory Management",
            "tags": [
              "Memory",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=what-is-thrashing-important-interview-question"
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Introduction to Operating Systems Placements Course 2022",
        "duration": "35-60 min",
        "youtubeId": "_TpOHMCODXo",
        "videoUrl": "https://www.youtube.com/watch?v=_TpOHMCODXo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "What is an Operating System ?",
        "duration": "35-60 min",
        "youtubeId": "a1l4MceYHaQ",
        "videoUrl": "https://www.youtube.com/watch?v=a1l4MceYHaQ&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Types of Operating Systems",
        "duration": "35-60 min",
        "youtubeId": "LBqNWOqSzBA",
        "videoUrl": "https://www.youtube.com/watch?v=LBqNWOqSzBA&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Components of Operating System",
        "duration": "35-60 min",
        "youtubeId": "kHMXP_i6zew",
        "videoUrl": "https://www.youtube.com/watch?v=kHMXP_i6zew&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "System Calls in Operating System [Theory + Example + Hands-on Terminal]",
        "duration": "35-60 min",
        "youtubeId": "lo8Z61qCDqQ",
        "videoUrl": "https://www.youtube.com/watch?v=lo8Z61qCDqQ&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "How Operating System Boots up?",
        "duration": "35-60 min",
        "youtubeId": "nAr2sLiLDWw",
        "videoUrl": "https://www.youtube.com/watch?v=nAr2sLiLDWw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Difference between 32-bit & 64-bit Operating System",
        "duration": "35-60 min",
        "youtubeId": "cE6WoaUnpAM",
        "videoUrl": "https://www.youtube.com/watch?v=cE6WoaUnpAM&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Comparison between different STORAGES used in Computer",
        "duration": "35-60 min",
        "youtubeId": "KFIStTj2DFw",
        "videoUrl": "https://www.youtube.com/watch?v=KFIStTj2DFw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Introduction and Core Concepts",
        "tags": [
          "Introduction",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "How OS creates a PROCESS || Introduction to Process",
        "duration": "35-60 min",
        "youtubeId": "ev4PrTlTKzE",
        "videoUrl": "https://www.youtube.com/watch?v=ev4PrTlTKzE&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "What are different Process States in Operating System ?",
        "duration": "35-60 min",
        "youtubeId": "BoH-yzA2nj8",
        "videoUrl": "https://www.youtube.com/watch?v=BoH-yzA2nj8&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Context Switching in OS | Medium Term Scheduler | Orphan/Zombie Process",
        "duration": "35-60 min",
        "youtubeId": "arlIBez-W_I",
        "videoUrl": "https://www.youtube.com/watch?v=arlIBez-W_I&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "What is Convoy Effect | FCFS CPU Scheduling Algorithm",
        "duration": "35-60 min",
        "youtubeId": "lLmqbQnLM4A",
        "videoUrl": "https://www.youtube.com/watch?v=lLmqbQnLM4A&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "Shortest Job First Algorithm | Priority Scheduling | Round Robin CPU Scheduling",
        "duration": "35-60 min",
        "youtubeId": "AXrF0AmMYlc",
        "videoUrl": "https://www.youtube.com/watch?v=AXrF0AmMYlc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Multi Level Queue Scheduling || MLFQ || Comparison btw CPU Scheduling Algorithms",
        "duration": "35-60 min",
        "youtubeId": "ly5Ume_Crsk",
        "videoUrl": "https://www.youtube.com/watch?v=ly5Ume_Crsk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Management and CPU Scheduling",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "What is Concurrency ? || Multi-Threading in C++ || Operating Systems Placement Series",
        "duration": "35-60 min",
        "youtubeId": "S7Aym-4-iUc",
        "videoUrl": "https://www.youtube.com/watch?v=S7Aym-4-iUc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Critical Section Problem || Race condition in OS",
        "duration": "35-60 min",
        "youtubeId": "6NEJ3-nOQek",
        "videoUrl": "https://www.youtube.com/watch?v=6NEJ3-nOQek&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=critical-section-problem-race-condition-in-os"
      },
      {
        "id": 17,
        "index": 17,
        "title": "Conditional Variables & Semaphores to Synchronise Threads",
        "duration": "35-60 min",
        "youtubeId": "AeDvGSbnoBE",
        "videoUrl": "https://www.youtube.com/watch?v=AeDvGSbnoBE&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Producer Consumer Problem and its Solution || OS Placement Series",
        "duration": "35-60 min",
        "youtubeId": "lY64CSlnjpg",
        "videoUrl": "https://www.youtube.com/watch?v=lY64CSlnjpg&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=producer-consumer-problem-and-its-solution-os-placement-series"
      },
      {
        "id": 19,
        "index": 19,
        "title": "Reader-Writer Problem and its Solution || OS Placement Series",
        "duration": "35-60 min",
        "youtubeId": "TyJ3as7haIU",
        "videoUrl": "https://www.youtube.com/watch?v=TyJ3as7haIU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=reader-writer-problem-and-its-solution-os-placement-series"
      },
      {
        "id": 20,
        "index": 20,
        "title": "The Dining Philosophers Problem & its Solution",
        "duration": "35-60 min",
        "youtubeId": "PIaIJCUZbf4",
        "videoUrl": "https://www.youtube.com/watch?v=PIaIJCUZbf4&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-dining-philosophers-problem-its-solution"
      },
      {
        "id": 21,
        "index": 21,
        "title": "Solving LeetCode Problems on Concurrency || OS Placement Series",
        "duration": "35-60 min",
        "youtubeId": "pOfDCjYm6Kk",
        "videoUrl": "https://www.youtube.com/watch?v=pOfDCjYm6Kk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=solving-leetcode-problems-on-concurrency-os-placement-series"
      },
      {
        "id": 22,
        "index": 22,
        "title": "Bonus Session: Solving LeetCode Problems on Concurrency || Operating Systems Placement Series",
        "duration": "35-60 min",
        "youtubeId": "9xS77QBL8W0",
        "videoUrl": "https://www.youtube.com/watch?v=9xS77QBL8W0&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Process Synchronization and Concurrency Problems",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=bonus-session-solving-leetcode-problems-on-concurrency-operating-systems-placement-series"
      },
      {
        "id": 23,
        "index": 23,
        "title": "What is Deadlock | Necessary Conditions | Handling Methods | Part - 1",
        "duration": "35-60 min",
        "youtubeId": "pkTekFvauhU",
        "videoUrl": "https://www.youtube.com/watch?v=pkTekFvauhU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Deadlock",
        "tags": [
          "Deadlock",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 24,
        "title": "Deadlock Avoidance | Deadlock Detection and Recovery | Part - 2",
        "duration": "35-60 min",
        "youtubeId": "dupdUhx1fns",
        "videoUrl": "https://www.youtube.com/watch?v=dupdUhx1fns&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Deadlock",
        "tags": [
          "Deadlock",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 25,
        "title": "Memory Management in OS || Contiguous Memory Allocation",
        "duration": "35-60 min",
        "youtubeId": "ZNcArN7ODrw",
        "videoUrl": "https://www.youtube.com/watch?v=ZNcArN7ODrw&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 26,
        "title": "How OS manages Free Space? || Memory Management",
        "duration": "35-60 min",
        "youtubeId": "_hrKEA1sEUo",
        "videoUrl": "https://www.youtube.com/watch?v=_hrKEA1sEUo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 27,
        "title": "What is Segmentation || Non-Contiguous Memory Allocation",
        "duration": "35-60 min",
        "youtubeId": "fRPz3dQ2LZc",
        "videoUrl": "https://www.youtube.com/watch?v=fRPz3dQ2LZc&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 28,
        "title": "What is Virtual Memory? || Page fault in OS",
        "duration": "35-60 min",
        "youtubeId": "U7wsluje5lU",
        "videoUrl": "https://www.youtube.com/watch?v=U7wsluje5lU&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 29,
        "title": "Page Replacement Algorithms || How to implement LRU algorithm?",
        "duration": "35-60 min",
        "youtubeId": "S727dgU0pU8",
        "videoUrl": "https://www.youtube.com/watch?v=S727dgU0pU8&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 30,
        "title": "What is Thrashing? || Important Interview Question",
        "duration": "35-60 min",
        "youtubeId": "gA34TuSHAHk",
        "videoUrl": "https://www.youtube.com/watch?v=gA34TuSHAHk&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        "sectionTitle": "Memory Management",
        "tags": [
          "Memory",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=what-is-thrashing-important-interview-question"
      }
    ]
  },
  {
    "slug": "neso-academy-os-playlist",
    "title": "Neso Academy OS Interview Preparation Playlist",
    "category": "os",
    "instructor": "Neso Academy",
    "channel": "Neso Academy",
    "totalVideos": 69,
    "totalDuration": "60+ hrs",
    "rating": 4.9,
    "badge": "Operating Systems Theory",
    "description": "A comprehensive Operating System course by Neso Academy, covering fundamentals, system architecture, process management, CPU scheduling, concurrent programming, deadlocks, and memory management. This playlist features in-depth theoretical explanations, system calls, multi-threading models, classical synchronization problems (like Dining Philosophers), and detailed analyses of scheduling and resource management algorithms.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRitWSE_AyyyHKEl4VJbVNQk",
    "thumbnailType": "os",
    "sections": [
      {
        "title": "Introduction, Concepts & System Structure",
        "videosCount": 11,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Introduction to Operating Systems",
            "duration": "35-60 min",
            "youtubeId": "vBURTt97EkA",
            "videoUrl": "https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=1",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Basics of OS (Computer System Operation)",
            "duration": "35-60 min",
            "youtubeId": "VjPgYcQqqN0",
            "videoUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=2",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Basics of OS (Storage Structure)",
            "duration": "35-60 min",
            "youtubeId": "YcRd3WMbXnE",
            "videoUrl": "https://www.youtube.com/watch?v=YcRd3WMbXnE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=3",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "Basics of OS (I/O Structure)",
            "duration": "35-60 min",
            "youtubeId": "F18RiREDkwE",
            "videoUrl": "https://www.youtube.com/watch?v=F18RiREDkwE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=4",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Operating System Services",
            "duration": "35-60 min",
            "youtubeId": "TQWERtMoKbI",
            "videoUrl": "https://www.youtube.com/watch?v=TQWERtMoKbI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=7",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "System Calls",
            "duration": "35-60 min",
            "youtubeId": "lhToWeuWWfw",
            "videoUrl": "https://www.youtube.com/watch?v=lhToWeuWWfw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=9",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Types of System Calls",
            "duration": "35-60 min",
            "youtubeId": "EavqupVh8ls",
            "videoUrl": "https://www.youtube.com/watch?v=EavqupVh8ls&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=10",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "System Programs",
            "duration": "35-60 min",
            "youtubeId": "UWDzhz8MVqc",
            "videoUrl": "https://www.youtube.com/watch?v=UWDzhz8MVqc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=11",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "Operating System Design & Implementation",
            "duration": "35-60 min",
            "youtubeId": "t_McsJ1RGQg",
            "videoUrl": "https://www.youtube.com/watch?v=t_McsJ1RGQg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=12",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 10,
            "title": "Structures of Operating System",
            "duration": "35-60 min",
            "youtubeId": "XXPBl20J22w",
            "videoUrl": "https://www.youtube.com/watch?v=XXPBl20J22w&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=13",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Virtual Machines",
            "duration": "35-60 min",
            "youtubeId": "daDbY2iDmU0",
            "videoUrl": "https://www.youtube.com/watch?v=daDbY2iDmU0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=14",
            "sectionTitle": "Introduction, Concepts & System Structure",
            "tags": [
              "Introduction,",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Process & Thread Management",
        "videosCount": 19,
        "videos": [
          {
            "id": 12,
            "index": 12,
            "title": "Process Management (Processes and Threads)",
            "duration": "35-60 min",
            "youtubeId": "OrM7nZcxXZU",
            "videoUrl": "https://www.youtube.com/watch?v=OrM7nZcxXZU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=16",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "Process State",
            "duration": "35-60 min",
            "youtubeId": "jZ_6PXoaoxo",
            "videoUrl": "https://www.youtube.com/watch?v=jZ_6PXoaoxo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=17",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Process Control Block",
            "duration": "35-60 min",
            "youtubeId": "4s2MKuVYKV8",
            "videoUrl": "https://www.youtube.com/watch?v=4s2MKuVYKV8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=18",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Process Scheduling",
            "duration": "35-60 min",
            "youtubeId": "2h3eWaPx8SA",
            "videoUrl": "https://www.youtube.com/watch?v=2h3eWaPx8SA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=19",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Context Switch",
            "duration": "35-60 min",
            "youtubeId": "vTgccrbYHYs",
            "videoUrl": "https://www.youtube.com/watch?v=vTgccrbYHYs&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=20",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Operation on Processes \u2013 Process Creation",
            "duration": "35-60 min",
            "youtubeId": "pSW9d3Oaie8",
            "videoUrl": "https://www.youtube.com/watch?v=pSW9d3Oaie8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=21",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 18,
            "title": "Operation on Processes \u2013 Process Termination",
            "duration": "35-60 min",
            "youtubeId": "SFc3jt8t5rU",
            "videoUrl": "https://www.youtube.com/watch?v=SFc3jt8t5rU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=22",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Interprocess Communication",
            "duration": "35-60 min",
            "youtubeId": "dJuYKfR8vec",
            "videoUrl": "https://www.youtube.com/watch?v=dJuYKfR8vec&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=23",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 20,
            "title": "Shared Memory Systems",
            "duration": "35-60 min",
            "youtubeId": "uHtzOFwgD74",
            "videoUrl": "https://www.youtube.com/watch?v=uHtzOFwgD74&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=24",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "Message Passing Systems (Part 1)",
            "duration": "35-60 min",
            "youtubeId": "LuuSXWkDJOo",
            "videoUrl": "https://www.youtube.com/watch?v=LuuSXWkDJOo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=25",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 22,
            "title": "Message Passing Systems (Part 2)",
            "duration": "35-60 min",
            "youtubeId": "S3mS8MR7bUY",
            "videoUrl": "https://www.youtube.com/watch?v=S3mS8MR7bUY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=26",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 23,
            "title": "Message Passing Systems (Part 3)",
            "duration": "35-60 min",
            "youtubeId": "fViAyFLOYxU",
            "videoUrl": "https://www.youtube.com/watch?v=fViAyFLOYxU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=27",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 24,
            "title": "Sockets in Operating System",
            "duration": "35-60 min",
            "youtubeId": "uagKTbohimU",
            "videoUrl": "https://www.youtube.com/watch?v=uagKTbohimU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=28",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 25,
            "title": "Remote Procedure Calls (RPC)",
            "duration": "35-60 min",
            "youtubeId": "QmhTjsOOrlw",
            "videoUrl": "https://www.youtube.com/watch?v=QmhTjsOOrlw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=29",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 26,
            "title": "Issues in RPC & How They're Resolved",
            "duration": "35-60 min",
            "youtubeId": "jH3RezOHROU",
            "videoUrl": "https://www.youtube.com/watch?v=jH3RezOHROU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=30",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 27,
            "title": "Introduction to Threads",
            "duration": "35-60 min",
            "youtubeId": "LOfGJcVnvAk",
            "videoUrl": "https://www.youtube.com/watch?v=LOfGJcVnvAk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=31",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 28,
            "title": "Multithreading Models & Hyperthreading",
            "duration": "35-60 min",
            "youtubeId": "HW2Wcx-ktsc",
            "videoUrl": "https://www.youtube.com/watch?v=HW2Wcx-ktsc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=32",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 29,
            "title": "Threading Issues [fork() & exec() System Calls]",
            "duration": "35-60 min",
            "youtubeId": "IFEFVXvjiHY",
            "videoUrl": "https://www.youtube.com/watch?v=IFEFVXvjiHY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=33",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 30,
            "title": "Threading Issues (Thread Cancellation)",
            "duration": "35-60 min",
            "youtubeId": "wNns0kIDC68",
            "videoUrl": "https://www.youtube.com/watch?v=wNns0kIDC68&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=35",
            "sectionTitle": "Process & Thread Management",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "CPU Scheduling Algorithms",
        "videosCount": 19,
        "videos": [
          {
            "id": 31,
            "index": 31,
            "title": "CPU and I/O Burst Cycles",
            "duration": "35-60 min",
            "youtubeId": "pVzb3TUcDLo",
            "videoUrl": "https://www.youtube.com/watch?v=pVzb3TUcDLo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=37",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 32,
            "title": "Preemptive and Non-Preemptive Scheduling",
            "duration": "35-60 min",
            "youtubeId": "4DhFmL-6SDA",
            "videoUrl": "https://www.youtube.com/watch?v=4DhFmL-6SDA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=38",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 33,
            "title": "Scheduling Criteria",
            "duration": "35-60 min",
            "youtubeId": "bWHFY8-rL5I",
            "videoUrl": "https://www.youtube.com/watch?v=bWHFY8-rL5I&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=39",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 34,
            "title": "Scheduling Algorithms - First Come First Served (FCFS)",
            "duration": "35-60 min",
            "youtubeId": "7DoP1L9nAAs",
            "videoUrl": "https://www.youtube.com/watch?v=7DoP1L9nAAs&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=40",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 35,
            "index": 35,
            "title": "First Come First Served Scheduling (Solved Problem 1)",
            "duration": "35-60 min",
            "youtubeId": "VSMAjMfJ6KQ",
            "videoUrl": "https://www.youtube.com/watch?v=VSMAjMfJ6KQ&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=41",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=first-come-first-served-scheduling-solved-problem-1"
          },
          {
            "id": 36,
            "index": 36,
            "title": "First Come First Served Scheduling (Solved Problem 2)",
            "duration": "35-60 min",
            "youtubeId": "8-BUGte27sk",
            "videoUrl": "https://www.youtube.com/watch?v=8-BUGte27sk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=42",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=first-come-first-served-scheduling-solved-problem-2"
          },
          {
            "id": 37,
            "index": 37,
            "title": "Scheduling Algorithms - Shortest Job First (SJF)",
            "duration": "35-60 min",
            "youtubeId": "t0g9b3SJECg",
            "videoUrl": "https://www.youtube.com/watch?v=t0g9b3SJECg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=43",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 38,
            "index": 38,
            "title": "Shortest Job First Scheduling (Solved Problem 1)",
            "duration": "35-60 min",
            "youtubeId": "lpM14aWgl3Q",
            "videoUrl": "https://www.youtube.com/watch?v=lpM14aWgl3Q&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=44",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=shortest-job-first-scheduling-solved-problem-1"
          },
          {
            "id": 39,
            "index": 39,
            "title": "Shortest Job First Scheduling (Solved Problem 2)",
            "duration": "35-60 min",
            "youtubeId": "ypOnf9mnFYg",
            "videoUrl": "https://www.youtube.com/watch?v=ypOnf9mnFYg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=45",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=shortest-job-first-scheduling-solved-problem-2"
          },
          {
            "id": 40,
            "index": 40,
            "title": "Scheduling Algorithms - Priority Scheduling",
            "duration": "35-60 min",
            "youtubeId": "yKD3pcFvGmY",
            "videoUrl": "https://www.youtube.com/watch?v=yKD3pcFvGmY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=46",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 41,
            "index": 41,
            "title": "Priority Scheduling (Solved Problem 1)",
            "duration": "35-60 min",
            "youtubeId": "Z2KsfhEJOFA",
            "videoUrl": "https://www.youtube.com/watch?v=Z2KsfhEJOFA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=47",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=priority-scheduling-solved-problem-1"
          },
          {
            "id": 42,
            "index": 42,
            "title": "Priority Scheduling (Solved Problem 2)",
            "duration": "35-60 min",
            "youtubeId": "gHKSmz-W0x0",
            "videoUrl": "https://www.youtube.com/watch?v=gHKSmz-W0x0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=48",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=priority-scheduling-solved-problem-2"
          },
          {
            "id": 43,
            "index": 43,
            "title": "Scheduling Algorithms - Round Robin Scheduling",
            "duration": "35-60 min",
            "youtubeId": "YzBBJYfwdi8",
            "videoUrl": "https://www.youtube.com/watch?v=YzBBJYfwdi8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=49",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 44,
            "index": 44,
            "title": "Round Robin Scheduling (Turnaround Time & Waiting Time)",
            "duration": "35-60 min",
            "youtubeId": "7TpxxTNrcTg",
            "videoUrl": "https://www.youtube.com/watch?v=7TpxxTNrcTg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=50",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 45,
            "index": 45,
            "title": "Round Robin Scheduling - Solved Problem (Part 1)",
            "duration": "35-60 min",
            "youtubeId": "QlCmgBOMjlI",
            "videoUrl": "https://www.youtube.com/watch?v=QlCmgBOMjlI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=51",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=round-robin-scheduling-solved-problem-part-1"
          },
          {
            "id": 46,
            "index": 46,
            "title": "Round Robin Scheduling - Solved Problem (Part 2)",
            "duration": "35-60 min",
            "youtubeId": "wioTortHb_g",
            "videoUrl": "https://www.youtube.com/watch?v=wioTortHb_g&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=52",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=round-robin-scheduling-solved-problem-part-2"
          },
          {
            "id": 47,
            "index": 47,
            "title": "Multilevel Queue Scheduling Algorithm",
            "duration": "35-60 min",
            "youtubeId": "fvkSXMZaBNY",
            "videoUrl": "https://www.youtube.com/watch?v=fvkSXMZaBNY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=53",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 48,
            "index": 48,
            "title": "Multilevel Feedback-Queue Scheduling Algorithm",
            "duration": "35-60 min",
            "youtubeId": "1KLuC0knvs8",
            "videoUrl": "https://www.youtube.com/watch?v=1KLuC0knvs8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=54",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 49,
            "index": 49,
            "title": "Scheduling Algorithms \u2013 Solved Problems",
            "duration": "35-60 min",
            "youtubeId": "g6QjVDyGgSE",
            "videoUrl": "https://www.youtube.com/watch?v=g6QjVDyGgSE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=55",
            "sectionTitle": "CPU Scheduling Algorithms",
            "tags": [
              "CPU",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=scheduling-algorithms-solved-problems"
          }
        ]
      },
      {
        "title": "Process Synchronization & Deadlocks",
        "videosCount": 15,
        "videos": [
          {
            "id": 50,
            "index": 50,
            "title": "Process Synchronization",
            "duration": "35-60 min",
            "youtubeId": "ph2awKa8r5Y",
            "videoUrl": "https://www.youtube.com/watch?v=ph2awKa8r5Y&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=56",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 51,
            "index": 51,
            "title": "The Critical-Section Problem",
            "duration": "35-60 min",
            "youtubeId": "UtEORPakw5Y",
            "videoUrl": "https://www.youtube.com/watch?v=UtEORPakw5Y&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=57",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-critical-section-problem"
          },
          {
            "id": 52,
            "index": 52,
            "title": "Peterson\u2019s Solution",
            "duration": "35-60 min",
            "youtubeId": "gYCiTtgGR5Q",
            "videoUrl": "https://www.youtube.com/watch?v=gYCiTtgGR5Q&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=58",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 53,
            "index": 53,
            "title": "Test and Set Lock",
            "duration": "35-60 min",
            "youtubeId": "5oZYS5dTrmk",
            "videoUrl": "https://www.youtube.com/watch?v=5oZYS5dTrmk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=59",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 54,
            "index": 54,
            "title": "Semaphores",
            "duration": "35-60 min",
            "youtubeId": "XDIOC2EY5JE",
            "videoUrl": "https://www.youtube.com/watch?v=XDIOC2EY5JE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=60",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 55,
            "index": 55,
            "title": "Disadvantages of Semaphores",
            "duration": "35-60 min",
            "youtubeId": "2cGo2HdA0dM",
            "videoUrl": "https://www.youtube.com/watch?v=2cGo2HdA0dM&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=61",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 56,
            "index": 56,
            "title": "The Bounded Buffer Problem",
            "duration": "35-60 min",
            "youtubeId": "Qx3P2wazwI0",
            "videoUrl": "https://www.youtube.com/watch?v=Qx3P2wazwI0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=62",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-bounded-buffer-problem"
          },
          {
            "id": 57,
            "index": 57,
            "title": "The Readers Writers Problem",
            "duration": "35-60 min",
            "youtubeId": "p2XDhW5INOo",
            "videoUrl": "https://www.youtube.com/watch?v=p2XDhW5INOo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=63",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-readers-writers-problem"
          },
          {
            "id": 58,
            "index": 58,
            "title": "The Dining Philosophers Problem",
            "duration": "35-60 min",
            "youtubeId": "FYUi-u7UWgw",
            "videoUrl": "https://www.youtube.com/watch?v=FYUi-u7UWgw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=64",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=the-dining-philosophers-problem"
          },
          {
            "id": 59,
            "index": 59,
            "title": "Dining Philosophers Solution using Monitors",
            "duration": "35-60 min",
            "youtubeId": "K52NiClfvyE",
            "videoUrl": "https://www.youtube.com/watch?v=K52NiClfvyE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=66",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 60,
            "index": 60,
            "title": "Process Synchronization - Problem 1",
            "duration": "35-60 min",
            "youtubeId": "WIj06NCxkWE",
            "videoUrl": "https://www.youtube.com/watch?v=WIj06NCxkWE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=67",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-1"
          },
          {
            "id": 61,
            "index": 61,
            "title": "Process Synchronization - Problem 2",
            "duration": "35-60 min",
            "youtubeId": "_yl0qAnsa_8",
            "videoUrl": "https://www.youtube.com/watch?v=_yl0qAnsa_8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=68",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-2"
          },
          {
            "id": 62,
            "index": 62,
            "title": "Process Synchronization - Problem 3",
            "duration": "35-60 min",
            "youtubeId": "A41_0uRnb2A",
            "videoUrl": "https://www.youtube.com/watch?v=A41_0uRnb2A&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=69",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-3"
          },
          {
            "id": 63,
            "index": 63,
            "title": "Process Synchronization - Problem 4",
            "duration": "35-60 min",
            "youtubeId": "fWL8HAIrgMw",
            "videoUrl": "https://www.youtube.com/watch?v=fWL8HAIrgMw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=70",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-4"
          },
          {
            "id": 64,
            "index": 64,
            "title": "Process Synchronization - Problem 5",
            "duration": "35-60 min",
            "youtubeId": "LlnBI2yjvlg",
            "videoUrl": "https://www.youtube.com/watch?v=LlnBI2yjvlg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=71",
            "sectionTitle": "Process Synchronization & Deadlocks",
            "tags": [
              "Process",
              "OS"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-5"
          }
        ]
      },
      {
        "title": "Deadlocks, Memory & File Systems",
        "videosCount": 5,
        "videos": [
          {
            "id": 65,
            "index": 65,
            "title": "Deadlocks | Chapter-7 | Operating System | nesoacademy.org",
            "duration": "35-60 min",
            "youtubeId": "7bnpFpYZtVk",
            "videoUrl": "https://www.youtube.com/watch?v=7bnpFpYZtVk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=72",
            "sectionTitle": "Deadlocks, Memory & File Systems",
            "tags": [
              "Deadlocks,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 66,
            "index": 66,
            "title": "Main Memory | Chapter-8 | Operating System | nesoacademy.org",
            "duration": "35-60 min",
            "youtubeId": "d9WyerblWQc",
            "videoUrl": "https://www.youtube.com/watch?v=d9WyerblWQc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=73",
            "sectionTitle": "Deadlocks, Memory & File Systems",
            "tags": [
              "Deadlocks,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 67,
            "index": 67,
            "title": "Virtual Memory | Chapter-9 | Operating System | nesoacademy.org",
            "duration": "35-60 min",
            "youtubeId": "puobwv1xjqc",
            "videoUrl": "https://www.youtube.com/watch?v=puobwv1xjqc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=74",
            "sectionTitle": "Deadlocks, Memory & File Systems",
            "tags": [
              "Deadlocks,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 68,
            "index": 68,
            "title": "File Systems | Chapter-10 | Operating System | nesoacademy.org",
            "duration": "35-60 min",
            "youtubeId": "pQ2coSLQvX4",
            "videoUrl": "https://www.youtube.com/watch?v=pQ2coSLQvX4&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=75",
            "sectionTitle": "Deadlocks, Memory & File Systems",
            "tags": [
              "Deadlocks,",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 69,
            "index": 69,
            "title": "Mass Storage Structure | Chapter-12 | Operating System | nesoacademy.org",
            "duration": "35-60 min",
            "youtubeId": "syq56cLrWdI",
            "videoUrl": "https://www.youtube.com/watch?v=syq56cLrWdI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=77",
            "sectionTitle": "Deadlocks, Memory & File Systems",
            "tags": [
              "Deadlocks,",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Introduction to Operating Systems",
        "duration": "35-60 min",
        "youtubeId": "vBURTt97EkA",
        "videoUrl": "https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=1",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Basics of OS (Computer System Operation)",
        "duration": "35-60 min",
        "youtubeId": "VjPgYcQqqN0",
        "videoUrl": "https://www.youtube.com/watch?v=VjPgYcQqqN0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=2",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Basics of OS (Storage Structure)",
        "duration": "35-60 min",
        "youtubeId": "YcRd3WMbXnE",
        "videoUrl": "https://www.youtube.com/watch?v=YcRd3WMbXnE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=3",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Basics of OS (I/O Structure)",
        "duration": "35-60 min",
        "youtubeId": "F18RiREDkwE",
        "videoUrl": "https://www.youtube.com/watch?v=F18RiREDkwE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=4",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Operating System Services",
        "duration": "35-60 min",
        "youtubeId": "TQWERtMoKbI",
        "videoUrl": "https://www.youtube.com/watch?v=TQWERtMoKbI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=7",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "System Calls",
        "duration": "35-60 min",
        "youtubeId": "lhToWeuWWfw",
        "videoUrl": "https://www.youtube.com/watch?v=lhToWeuWWfw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=9",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Types of System Calls",
        "duration": "35-60 min",
        "youtubeId": "EavqupVh8ls",
        "videoUrl": "https://www.youtube.com/watch?v=EavqupVh8ls&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=10",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "System Programs",
        "duration": "35-60 min",
        "youtubeId": "UWDzhz8MVqc",
        "videoUrl": "https://www.youtube.com/watch?v=UWDzhz8MVqc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=11",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "Operating System Design & Implementation",
        "duration": "35-60 min",
        "youtubeId": "t_McsJ1RGQg",
        "videoUrl": "https://www.youtube.com/watch?v=t_McsJ1RGQg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=12",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Structures of Operating System",
        "duration": "35-60 min",
        "youtubeId": "XXPBl20J22w",
        "videoUrl": "https://www.youtube.com/watch?v=XXPBl20J22w&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=13",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Virtual Machines",
        "duration": "35-60 min",
        "youtubeId": "daDbY2iDmU0",
        "videoUrl": "https://www.youtube.com/watch?v=daDbY2iDmU0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=14",
        "sectionTitle": "Introduction, Concepts & System Structure",
        "tags": [
          "Introduction,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "Process Management (Processes and Threads)",
        "duration": "35-60 min",
        "youtubeId": "OrM7nZcxXZU",
        "videoUrl": "https://www.youtube.com/watch?v=OrM7nZcxXZU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=16",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "Process State",
        "duration": "35-60 min",
        "youtubeId": "jZ_6PXoaoxo",
        "videoUrl": "https://www.youtube.com/watch?v=jZ_6PXoaoxo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=17",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Process Control Block",
        "duration": "35-60 min",
        "youtubeId": "4s2MKuVYKV8",
        "videoUrl": "https://www.youtube.com/watch?v=4s2MKuVYKV8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=18",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Process Scheduling",
        "duration": "35-60 min",
        "youtubeId": "2h3eWaPx8SA",
        "videoUrl": "https://www.youtube.com/watch?v=2h3eWaPx8SA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=19",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Context Switch",
        "duration": "35-60 min",
        "youtubeId": "vTgccrbYHYs",
        "videoUrl": "https://www.youtube.com/watch?v=vTgccrbYHYs&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=20",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Operation on Processes \u2013 Process Creation",
        "duration": "35-60 min",
        "youtubeId": "pSW9d3Oaie8",
        "videoUrl": "https://www.youtube.com/watch?v=pSW9d3Oaie8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=21",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Operation on Processes \u2013 Process Termination",
        "duration": "35-60 min",
        "youtubeId": "SFc3jt8t5rU",
        "videoUrl": "https://www.youtube.com/watch?v=SFc3jt8t5rU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=22",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Interprocess Communication",
        "duration": "35-60 min",
        "youtubeId": "dJuYKfR8vec",
        "videoUrl": "https://www.youtube.com/watch?v=dJuYKfR8vec&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=23",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "Shared Memory Systems",
        "duration": "35-60 min",
        "youtubeId": "uHtzOFwgD74",
        "videoUrl": "https://www.youtube.com/watch?v=uHtzOFwgD74&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=24",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "Message Passing Systems (Part 1)",
        "duration": "35-60 min",
        "youtubeId": "LuuSXWkDJOo",
        "videoUrl": "https://www.youtube.com/watch?v=LuuSXWkDJOo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=25",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 22,
        "title": "Message Passing Systems (Part 2)",
        "duration": "35-60 min",
        "youtubeId": "S3mS8MR7bUY",
        "videoUrl": "https://www.youtube.com/watch?v=S3mS8MR7bUY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=26",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 23,
        "title": "Message Passing Systems (Part 3)",
        "duration": "35-60 min",
        "youtubeId": "fViAyFLOYxU",
        "videoUrl": "https://www.youtube.com/watch?v=fViAyFLOYxU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=27",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 24,
        "title": "Sockets in Operating System",
        "duration": "35-60 min",
        "youtubeId": "uagKTbohimU",
        "videoUrl": "https://www.youtube.com/watch?v=uagKTbohimU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=28",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 25,
        "title": "Remote Procedure Calls (RPC)",
        "duration": "35-60 min",
        "youtubeId": "QmhTjsOOrlw",
        "videoUrl": "https://www.youtube.com/watch?v=QmhTjsOOrlw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=29",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 26,
        "title": "Issues in RPC & How They're Resolved",
        "duration": "35-60 min",
        "youtubeId": "jH3RezOHROU",
        "videoUrl": "https://www.youtube.com/watch?v=jH3RezOHROU&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=30",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 27,
        "title": "Introduction to Threads",
        "duration": "35-60 min",
        "youtubeId": "LOfGJcVnvAk",
        "videoUrl": "https://www.youtube.com/watch?v=LOfGJcVnvAk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=31",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 28,
        "title": "Multithreading Models & Hyperthreading",
        "duration": "35-60 min",
        "youtubeId": "HW2Wcx-ktsc",
        "videoUrl": "https://www.youtube.com/watch?v=HW2Wcx-ktsc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=32",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 29,
        "title": "Threading Issues [fork() & exec() System Calls]",
        "duration": "35-60 min",
        "youtubeId": "IFEFVXvjiHY",
        "videoUrl": "https://www.youtube.com/watch?v=IFEFVXvjiHY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=33",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 30,
        "title": "Threading Issues (Thread Cancellation)",
        "duration": "35-60 min",
        "youtubeId": "wNns0kIDC68",
        "videoUrl": "https://www.youtube.com/watch?v=wNns0kIDC68&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=35",
        "sectionTitle": "Process & Thread Management",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 31,
        "title": "CPU and I/O Burst Cycles",
        "duration": "35-60 min",
        "youtubeId": "pVzb3TUcDLo",
        "videoUrl": "https://www.youtube.com/watch?v=pVzb3TUcDLo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=37",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 32,
        "title": "Preemptive and Non-Preemptive Scheduling",
        "duration": "35-60 min",
        "youtubeId": "4DhFmL-6SDA",
        "videoUrl": "https://www.youtube.com/watch?v=4DhFmL-6SDA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=38",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 33,
        "title": "Scheduling Criteria",
        "duration": "35-60 min",
        "youtubeId": "bWHFY8-rL5I",
        "videoUrl": "https://www.youtube.com/watch?v=bWHFY8-rL5I&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=39",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 34,
        "title": "Scheduling Algorithms - First Come First Served (FCFS)",
        "duration": "35-60 min",
        "youtubeId": "7DoP1L9nAAs",
        "videoUrl": "https://www.youtube.com/watch?v=7DoP1L9nAAs&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=40",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 35,
        "title": "First Come First Served Scheduling (Solved Problem 1)",
        "duration": "35-60 min",
        "youtubeId": "VSMAjMfJ6KQ",
        "videoUrl": "https://www.youtube.com/watch?v=VSMAjMfJ6KQ&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=41",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=first-come-first-served-scheduling-solved-problem-1"
      },
      {
        "id": 36,
        "index": 36,
        "title": "First Come First Served Scheduling (Solved Problem 2)",
        "duration": "35-60 min",
        "youtubeId": "8-BUGte27sk",
        "videoUrl": "https://www.youtube.com/watch?v=8-BUGte27sk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=42",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=first-come-first-served-scheduling-solved-problem-2"
      },
      {
        "id": 37,
        "index": 37,
        "title": "Scheduling Algorithms - Shortest Job First (SJF)",
        "duration": "35-60 min",
        "youtubeId": "t0g9b3SJECg",
        "videoUrl": "https://www.youtube.com/watch?v=t0g9b3SJECg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=43",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 38,
        "index": 38,
        "title": "Shortest Job First Scheduling (Solved Problem 1)",
        "duration": "35-60 min",
        "youtubeId": "lpM14aWgl3Q",
        "videoUrl": "https://www.youtube.com/watch?v=lpM14aWgl3Q&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=44",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=shortest-job-first-scheduling-solved-problem-1"
      },
      {
        "id": 39,
        "index": 39,
        "title": "Shortest Job First Scheduling (Solved Problem 2)",
        "duration": "35-60 min",
        "youtubeId": "ypOnf9mnFYg",
        "videoUrl": "https://www.youtube.com/watch?v=ypOnf9mnFYg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=45",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=shortest-job-first-scheduling-solved-problem-2"
      },
      {
        "id": 40,
        "index": 40,
        "title": "Scheduling Algorithms - Priority Scheduling",
        "duration": "35-60 min",
        "youtubeId": "yKD3pcFvGmY",
        "videoUrl": "https://www.youtube.com/watch?v=yKD3pcFvGmY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=46",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 41,
        "index": 41,
        "title": "Priority Scheduling (Solved Problem 1)",
        "duration": "35-60 min",
        "youtubeId": "Z2KsfhEJOFA",
        "videoUrl": "https://www.youtube.com/watch?v=Z2KsfhEJOFA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=47",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=priority-scheduling-solved-problem-1"
      },
      {
        "id": 42,
        "index": 42,
        "title": "Priority Scheduling (Solved Problem 2)",
        "duration": "35-60 min",
        "youtubeId": "gHKSmz-W0x0",
        "videoUrl": "https://www.youtube.com/watch?v=gHKSmz-W0x0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=48",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=priority-scheduling-solved-problem-2"
      },
      {
        "id": 43,
        "index": 43,
        "title": "Scheduling Algorithms - Round Robin Scheduling",
        "duration": "35-60 min",
        "youtubeId": "YzBBJYfwdi8",
        "videoUrl": "https://www.youtube.com/watch?v=YzBBJYfwdi8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=49",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 44,
        "title": "Round Robin Scheduling (Turnaround Time & Waiting Time)",
        "duration": "35-60 min",
        "youtubeId": "7TpxxTNrcTg",
        "videoUrl": "https://www.youtube.com/watch?v=7TpxxTNrcTg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=50",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 45,
        "index": 45,
        "title": "Round Robin Scheduling - Solved Problem (Part 1)",
        "duration": "35-60 min",
        "youtubeId": "QlCmgBOMjlI",
        "videoUrl": "https://www.youtube.com/watch?v=QlCmgBOMjlI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=51",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=round-robin-scheduling-solved-problem-part-1"
      },
      {
        "id": 46,
        "index": 46,
        "title": "Round Robin Scheduling - Solved Problem (Part 2)",
        "duration": "35-60 min",
        "youtubeId": "wioTortHb_g",
        "videoUrl": "https://www.youtube.com/watch?v=wioTortHb_g&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=52",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=round-robin-scheduling-solved-problem-part-2"
      },
      {
        "id": 47,
        "index": 47,
        "title": "Multilevel Queue Scheduling Algorithm",
        "duration": "35-60 min",
        "youtubeId": "fvkSXMZaBNY",
        "videoUrl": "https://www.youtube.com/watch?v=fvkSXMZaBNY&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=53",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 48,
        "index": 48,
        "title": "Multilevel Feedback-Queue Scheduling Algorithm",
        "duration": "35-60 min",
        "youtubeId": "1KLuC0knvs8",
        "videoUrl": "https://www.youtube.com/watch?v=1KLuC0knvs8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=54",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 49,
        "index": 49,
        "title": "Scheduling Algorithms \u2013 Solved Problems",
        "duration": "35-60 min",
        "youtubeId": "g6QjVDyGgSE",
        "videoUrl": "https://www.youtube.com/watch?v=g6QjVDyGgSE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=55",
        "sectionTitle": "CPU Scheduling Algorithms",
        "tags": [
          "CPU",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=scheduling-algorithms-solved-problems"
      },
      {
        "id": 50,
        "index": 50,
        "title": "Process Synchronization",
        "duration": "35-60 min",
        "youtubeId": "ph2awKa8r5Y",
        "videoUrl": "https://www.youtube.com/watch?v=ph2awKa8r5Y&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=56",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 51,
        "index": 51,
        "title": "The Critical-Section Problem",
        "duration": "35-60 min",
        "youtubeId": "UtEORPakw5Y",
        "videoUrl": "https://www.youtube.com/watch?v=UtEORPakw5Y&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=57",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-critical-section-problem"
      },
      {
        "id": 52,
        "index": 52,
        "title": "Peterson\u2019s Solution",
        "duration": "35-60 min",
        "youtubeId": "gYCiTtgGR5Q",
        "videoUrl": "https://www.youtube.com/watch?v=gYCiTtgGR5Q&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=58",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 53,
        "index": 53,
        "title": "Test and Set Lock",
        "duration": "35-60 min",
        "youtubeId": "5oZYS5dTrmk",
        "videoUrl": "https://www.youtube.com/watch?v=5oZYS5dTrmk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=59",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 54,
        "index": 54,
        "title": "Semaphores",
        "duration": "35-60 min",
        "youtubeId": "XDIOC2EY5JE",
        "videoUrl": "https://www.youtube.com/watch?v=XDIOC2EY5JE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=60",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 55,
        "index": 55,
        "title": "Disadvantages of Semaphores",
        "duration": "35-60 min",
        "youtubeId": "2cGo2HdA0dM",
        "videoUrl": "https://www.youtube.com/watch?v=2cGo2HdA0dM&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=61",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 56,
        "index": 56,
        "title": "The Bounded Buffer Problem",
        "duration": "35-60 min",
        "youtubeId": "Qx3P2wazwI0",
        "videoUrl": "https://www.youtube.com/watch?v=Qx3P2wazwI0&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=62",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-bounded-buffer-problem"
      },
      {
        "id": 57,
        "index": 57,
        "title": "The Readers Writers Problem",
        "duration": "35-60 min",
        "youtubeId": "p2XDhW5INOo",
        "videoUrl": "https://www.youtube.com/watch?v=p2XDhW5INOo&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=63",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-readers-writers-problem"
      },
      {
        "id": 58,
        "index": 58,
        "title": "The Dining Philosophers Problem",
        "duration": "35-60 min",
        "youtubeId": "FYUi-u7UWgw",
        "videoUrl": "https://www.youtube.com/watch?v=FYUi-u7UWgw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=64",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=the-dining-philosophers-problem"
      },
      {
        "id": 59,
        "index": 59,
        "title": "Dining Philosophers Solution using Monitors",
        "duration": "35-60 min",
        "youtubeId": "K52NiClfvyE",
        "videoUrl": "https://www.youtube.com/watch?v=K52NiClfvyE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=66",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 60,
        "index": 60,
        "title": "Process Synchronization - Problem 1",
        "duration": "35-60 min",
        "youtubeId": "WIj06NCxkWE",
        "videoUrl": "https://www.youtube.com/watch?v=WIj06NCxkWE&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=67",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-1"
      },
      {
        "id": 61,
        "index": 61,
        "title": "Process Synchronization - Problem 2",
        "duration": "35-60 min",
        "youtubeId": "_yl0qAnsa_8",
        "videoUrl": "https://www.youtube.com/watch?v=_yl0qAnsa_8&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=68",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-2"
      },
      {
        "id": 62,
        "index": 62,
        "title": "Process Synchronization - Problem 3",
        "duration": "35-60 min",
        "youtubeId": "A41_0uRnb2A",
        "videoUrl": "https://www.youtube.com/watch?v=A41_0uRnb2A&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=69",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-3"
      },
      {
        "id": 63,
        "index": 63,
        "title": "Process Synchronization - Problem 4",
        "duration": "35-60 min",
        "youtubeId": "fWL8HAIrgMw",
        "videoUrl": "https://www.youtube.com/watch?v=fWL8HAIrgMw&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=70",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-4"
      },
      {
        "id": 64,
        "index": 64,
        "title": "Process Synchronization - Problem 5",
        "duration": "35-60 min",
        "youtubeId": "LlnBI2yjvlg",
        "videoUrl": "https://www.youtube.com/watch?v=LlnBI2yjvlg&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=71",
        "sectionTitle": "Process Synchronization & Deadlocks",
        "tags": [
          "Process",
          "OS"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=process-synchronization-problem-5"
      },
      {
        "id": 65,
        "index": 65,
        "title": "Deadlocks | Chapter-7 | Operating System | nesoacademy.org",
        "duration": "35-60 min",
        "youtubeId": "7bnpFpYZtVk",
        "videoUrl": "https://www.youtube.com/watch?v=7bnpFpYZtVk&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=72",
        "sectionTitle": "Deadlocks, Memory & File Systems",
        "tags": [
          "Deadlocks,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 66,
        "index": 66,
        "title": "Main Memory | Chapter-8 | Operating System | nesoacademy.org",
        "duration": "35-60 min",
        "youtubeId": "d9WyerblWQc",
        "videoUrl": "https://www.youtube.com/watch?v=d9WyerblWQc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=73",
        "sectionTitle": "Deadlocks, Memory & File Systems",
        "tags": [
          "Deadlocks,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 67,
        "index": 67,
        "title": "Virtual Memory | Chapter-9 | Operating System | nesoacademy.org",
        "duration": "35-60 min",
        "youtubeId": "puobwv1xjqc",
        "videoUrl": "https://www.youtube.com/watch?v=puobwv1xjqc&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=74",
        "sectionTitle": "Deadlocks, Memory & File Systems",
        "tags": [
          "Deadlocks,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 68,
        "index": 68,
        "title": "File Systems | Chapter-10 | Operating System | nesoacademy.org",
        "duration": "35-60 min",
        "youtubeId": "pQ2coSLQvX4",
        "videoUrl": "https://www.youtube.com/watch?v=pQ2coSLQvX4&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=75",
        "sectionTitle": "Deadlocks, Memory & File Systems",
        "tags": [
          "Deadlocks,",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 69,
        "index": 69,
        "title": "Mass Storage Structure | Chapter-12 | Operating System | nesoacademy.org",
        "duration": "35-60 min",
        "youtubeId": "syq56cLrWdI",
        "videoUrl": "https://www.youtube.com/watch?v=syq56cLrWdI&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&index=77",
        "sectionTitle": "Deadlocks, Memory & File Systems",
        "tags": [
          "Deadlocks,",
          "OS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "riti-kumari-os-playlist",
    "title": "Riti Kumari OS Interview Preparation Playlist",
    "category": "os",
    "instructor": "Riti Kumari",
    "channel": "Riti Kumari",
    "totalVideos": 17,
    "totalDuration": "32+ hrs",
    "rating": 4.8,
    "badge": "OS Quick Revision & In-Depth",
    "description": "Complete Operating Systems Course for Placements, Semester Exams and Jobs covering all essential OS concepts. Topics include Introduction to Operating Systems, Goals and Components, Computer System Architecture, Program/Process/Thread concepts, Batch Operating System and Spooling, Multiprogramming and Multitasking, Real Time OS, Distributed and Clustered OS, Embedded OS, Multiprocessing, OS Structure, User Communication, System Calls, Fork System Call, User Mode and Kernel Mode, and Thread Types.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL3eWd59j9o0YvA0zD7HwQd98N21l9xP",
    "thumbnailType": "os",
    "sections": [
      {
        "title": "Operating System Fundamentals",
        "videosCount": 5,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Launching OS Course",
            "duration": "35-60 min",
            "youtubeId": "Q_OU-aKC_Gk",
            "videoUrl": "https://www.youtube.com/watch?v=Q_OU-aKC_Gk&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=1",
            "sectionTitle": "Operating System Fundamentals",
            "tags": [
              "Operating",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Introduction to Operating System",
            "duration": "35-60 min",
            "youtubeId": "6wkwT65Zkr4",
            "videoUrl": "https://www.youtube.com/watch?v=6wkwT65Zkr4&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=2",
            "sectionTitle": "Operating System Fundamentals",
            "tags": [
              "Operating",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Goals, Components & Functions of Operating System",
            "duration": "35-60 min",
            "youtubeId": "3oAwVHjb6Uw",
            "videoUrl": "https://www.youtube.com/watch?v=3oAwVHjb6Uw&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=3",
            "sectionTitle": "Operating System Fundamentals",
            "tags": [
              "Operating",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "How Computer System works and Data is stored",
            "duration": "35-60 min",
            "youtubeId": "mVkQggaKhRU",
            "videoUrl": "https://www.youtube.com/watch?v=mVkQggaKhRU&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=4",
            "sectionTitle": "Operating System Fundamentals",
            "tags": [
              "Operating",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Program, Process and Thread",
            "duration": "35-60 min",
            "youtubeId": "DUlgdZVgCNI",
            "videoUrl": "https://www.youtube.com/watch?v=DUlgdZVgCNI&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=5",
            "sectionTitle": "Operating System Fundamentals",
            "tags": [
              "Operating",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Types of Operating Systems",
        "videosCount": 6,
        "videos": [
          {
            "id": 6,
            "index": 6,
            "title": "Batch Operating System and Spooling",
            "duration": "35-60 min",
            "youtubeId": "rphayBa3g5U",
            "videoUrl": "https://www.youtube.com/watch?v=rphayBa3g5U&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=6",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Multiprogramming and Multitasking Operating System",
            "duration": "35-60 min",
            "youtubeId": "GoKZo9Inc9Q",
            "videoUrl": "https://www.youtube.com/watch?v=GoKZo9Inc9Q&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=7",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Real Time Operating System",
            "duration": "35-60 min",
            "youtubeId": "nrqgUMiVhbc",
            "videoUrl": "https://www.youtube.com/watch?v=nrqgUMiVhbc&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=8",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "Distributed and Clustered Operating System",
            "duration": "35-60 min",
            "youtubeId": "zGN6BpeRxps",
            "videoUrl": "https://www.youtube.com/watch?v=zGN6BpeRxps&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=9",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 10,
            "title": "Embedded Operating System",
            "duration": "35-60 min",
            "youtubeId": "QZyKfFIub90",
            "videoUrl": "https://www.youtube.com/watch?v=QZyKfFIub90&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=10",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Multiprocessing Operating System",
            "duration": "35-60 min",
            "youtubeId": "a5wfvjkbdj0",
            "videoUrl": "https://www.youtube.com/watch?v=a5wfvjkbdj0&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=11",
            "sectionTitle": "Types of Operating Systems",
            "tags": [
              "Types",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "OS Structure and System Calls",
        "videosCount": 6,
        "videos": [
          {
            "id": 12,
            "index": 12,
            "title": "Structure of Operating System",
            "duration": "35-60 min",
            "youtubeId": "03x9oV-4gDU",
            "videoUrl": "https://www.youtube.com/watch?v=03x9oV-4gDU&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=12",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "How User Communicates with Operating System",
            "duration": "35-60 min",
            "youtubeId": "kj3QRpJQAjs",
            "videoUrl": "https://www.youtube.com/watch?v=kj3QRpJQAjs&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=13",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "System Calls in Operating System",
            "duration": "35-60 min",
            "youtubeId": "gEGMphclBvY",
            "videoUrl": "https://www.youtube.com/watch?v=gEGMphclBvY&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=14",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Fork System Call in Operating System",
            "duration": "35-60 min",
            "youtubeId": "AkiewPWgoLE",
            "videoUrl": "https://www.youtube.com/watch?v=AkiewPWgoLE&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=15",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "User Mode And Kernel Mode in Operating System",
            "duration": "35-60 min",
            "youtubeId": "fc0QZdYYkI4",
            "videoUrl": "https://www.youtube.com/watch?v=fc0QZdYYkI4&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=16",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Thread and its Types in Operating System | Complete OS Course 2025 | Jobs | Placements",
            "duration": "35-60 min",
            "youtubeId": "_BgmuT-2gU0",
            "videoUrl": "https://www.youtube.com/watch?v=_BgmuT-2gU0&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=17",
            "sectionTitle": "OS Structure and System Calls",
            "tags": [
              "OS",
              "OS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Launching OS Course",
        "duration": "35-60 min",
        "youtubeId": "Q_OU-aKC_Gk",
        "videoUrl": "https://www.youtube.com/watch?v=Q_OU-aKC_Gk&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=1",
        "sectionTitle": "Operating System Fundamentals",
        "tags": [
          "Operating",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Introduction to Operating System",
        "duration": "35-60 min",
        "youtubeId": "6wkwT65Zkr4",
        "videoUrl": "https://www.youtube.com/watch?v=6wkwT65Zkr4&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=2",
        "sectionTitle": "Operating System Fundamentals",
        "tags": [
          "Operating",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Goals, Components & Functions of Operating System",
        "duration": "35-60 min",
        "youtubeId": "3oAwVHjb6Uw",
        "videoUrl": "https://www.youtube.com/watch?v=3oAwVHjb6Uw&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=3",
        "sectionTitle": "Operating System Fundamentals",
        "tags": [
          "Operating",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "How Computer System works and Data is stored",
        "duration": "35-60 min",
        "youtubeId": "mVkQggaKhRU",
        "videoUrl": "https://www.youtube.com/watch?v=mVkQggaKhRU&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=4",
        "sectionTitle": "Operating System Fundamentals",
        "tags": [
          "Operating",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Program, Process and Thread",
        "duration": "35-60 min",
        "youtubeId": "DUlgdZVgCNI",
        "videoUrl": "https://www.youtube.com/watch?v=DUlgdZVgCNI&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=5",
        "sectionTitle": "Operating System Fundamentals",
        "tags": [
          "Operating",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Batch Operating System and Spooling",
        "duration": "35-60 min",
        "youtubeId": "rphayBa3g5U",
        "videoUrl": "https://www.youtube.com/watch?v=rphayBa3g5U&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=6",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Multiprogramming and Multitasking Operating System",
        "duration": "35-60 min",
        "youtubeId": "GoKZo9Inc9Q",
        "videoUrl": "https://www.youtube.com/watch?v=GoKZo9Inc9Q&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=7",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Real Time Operating System",
        "duration": "35-60 min",
        "youtubeId": "nrqgUMiVhbc",
        "videoUrl": "https://www.youtube.com/watch?v=nrqgUMiVhbc&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=8",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "Distributed and Clustered Operating System",
        "duration": "35-60 min",
        "youtubeId": "zGN6BpeRxps",
        "videoUrl": "https://www.youtube.com/watch?v=zGN6BpeRxps&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=9",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Embedded Operating System",
        "duration": "35-60 min",
        "youtubeId": "QZyKfFIub90",
        "videoUrl": "https://www.youtube.com/watch?v=QZyKfFIub90&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=10",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Multiprocessing Operating System",
        "duration": "35-60 min",
        "youtubeId": "a5wfvjkbdj0",
        "videoUrl": "https://www.youtube.com/watch?v=a5wfvjkbdj0&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=11",
        "sectionTitle": "Types of Operating Systems",
        "tags": [
          "Types",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "Structure of Operating System",
        "duration": "35-60 min",
        "youtubeId": "03x9oV-4gDU",
        "videoUrl": "https://www.youtube.com/watch?v=03x9oV-4gDU&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=12",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "How User Communicates with Operating System",
        "duration": "35-60 min",
        "youtubeId": "kj3QRpJQAjs",
        "videoUrl": "https://www.youtube.com/watch?v=kj3QRpJQAjs&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=13",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "System Calls in Operating System",
        "duration": "35-60 min",
        "youtubeId": "gEGMphclBvY",
        "videoUrl": "https://www.youtube.com/watch?v=gEGMphclBvY&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=14",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Fork System Call in Operating System",
        "duration": "35-60 min",
        "youtubeId": "AkiewPWgoLE",
        "videoUrl": "https://www.youtube.com/watch?v=AkiewPWgoLE&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=15",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "User Mode And Kernel Mode in Operating System",
        "duration": "35-60 min",
        "youtubeId": "fc0QZdYYkI4",
        "videoUrl": "https://www.youtube.com/watch?v=fc0QZdYYkI4&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=16",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Thread and its Types in Operating System | Complete OS Course 2025 | Jobs | Placements",
        "duration": "35-60 min",
        "youtubeId": "_BgmuT-2gU0",
        "videoUrl": "https://www.youtube.com/watch?v=_BgmuT-2gU0&list=PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI&index=17",
        "sectionTitle": "OS Structure and System Calls",
        "tags": [
          "OS",
          "OS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "code-with-harry-oops-playlist",
    "title": "Code With Harry OOP Interview Preparation Playlist",
    "category": "oops",
    "instructor": "CodeWithHarry",
    "channel": "CodeWithHarry",
    "totalVideos": 37,
    "totalDuration": "18+ hrs",
    "rating": 4.9,
    "badge": "C++ OOPs Mastery",
    "description": "Complete Object-Oriented Programming (OOP) playlist in C++ by CodeWithHarry. This comprehensive course covers all fundamental and advanced OOP concepts including Classes and Objects, Public and Private Access Modifiers, Nesting of Member Functions, Memory Allocation, Static Data Members & Methods, Arrays in Classes, Friend Functions and Classes, Constructors (Default, Parameterized, Copy), Destructors, Inheritance (Single, Multiple, Multilevel, Hierarchical), Virtual Base Classes, Ambiguity Resolution, Constructors in Derived Classes, Initialization Lists, Pointers (new/delete, Arrow Operator), Polymorphism, Virtual Functions, Abstract Base Classes, and Pure Virtual Functions. Perfect for mastering C++ OOP with practical examples and in-depth explanations.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
    "thumbnailType": "oops",
    "sections": [
      {
        "title": "Object Oriented Programming in C++",
        "videosCount": 37,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Object Oriented Programming in C++",
            "duration": "35-60 min",
            "youtubeId": "nGJTWaaFdjc",
            "videoUrl": "https://www.youtube.com/watch?v=nGJTWaaFdjc&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=1",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Classes, Public and Private access modifiers in C++",
            "duration": "35-60 min",
            "youtubeId": "tL8vnfFFzVQ",
            "videoUrl": "https://www.youtube.com/watch?v=tL8vnfFFzVQ&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=2",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "OOPs Recap & Nesting of Member Functions in C++",
            "duration": "35-60 min",
            "youtubeId": "d363dW0AeS8",
            "videoUrl": "https://www.youtube.com/watch?v=d363dW0AeS8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=3",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "C++ Objects Memory Allocation & using Arrays in Classes",
            "duration": "35-60 min",
            "youtubeId": "qq05D2yFIHA",
            "videoUrl": "https://www.youtube.com/watch?v=qq05D2yFIHA&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=4",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Static Data Members & Methods in C++ OOPS",
            "duration": "35-60 min",
            "youtubeId": "QcLI2zGVYFo",
            "videoUrl": "https://www.youtube.com/watch?v=QcLI2zGVYFo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=5",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Array of Objects & Passing Objects as Function Arguments in C++",
            "duration": "35-60 min",
            "youtubeId": "aKnc1A5NOKo",
            "videoUrl": "https://www.youtube.com/watch?v=aKnc1A5NOKo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=6",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Friend Functions in C++",
            "duration": "35-60 min",
            "youtubeId": "HK6gnkQIgqI",
            "videoUrl": "https://www.youtube.com/watch?v=HK6gnkQIgqI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=7",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Friend Classes & Member Friend Functions in C++",
            "duration": "35-60 min",
            "youtubeId": "Tk-4KUoatg8",
            "videoUrl": "https://www.youtube.com/watch?v=Tk-4KUoatg8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=8",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "More on C++ Friend Functions (Examples & Explanation)",
            "duration": "35-60 min",
            "youtubeId": "GTJTsMR_fro",
            "videoUrl": "https://www.youtube.com/watch?v=GTJTsMR_fro&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=9",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 10,
            "title": "Constructors In C++",
            "duration": "35-60 min",
            "youtubeId": "EEJUPXFKe8Q",
            "videoUrl": "https://www.youtube.com/watch?v=EEJUPXFKe8Q&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=10",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Parameterized and Default Constructors In C++",
            "duration": "35-60 min",
            "youtubeId": "CYXIlh5DURI",
            "videoUrl": "https://www.youtube.com/watch?v=CYXIlh5DURI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=11",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 12,
            "title": "Constructor Overloading In C++",
            "duration": "35-60 min",
            "youtubeId": "7BmtA-7r1Fg",
            "videoUrl": "https://www.youtube.com/watch?v=7BmtA-7r1Fg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=12",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "Constructors With Default Arguments In C++",
            "duration": "35-60 min",
            "youtubeId": "Ok-5YqcGl6c",
            "videoUrl": "https://www.youtube.com/watch?v=Ok-5YqcGl6c&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=13",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Dynamic Initialization of Objects Using Constructors",
            "duration": "35-60 min",
            "youtubeId": "c_9oCs-9fvg",
            "videoUrl": "https://www.youtube.com/watch?v=c_9oCs-9fvg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=14",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Copy Constructor in C++",
            "duration": "35-60 min",
            "youtubeId": "jhZjyaNO4Wo",
            "videoUrl": "https://www.youtube.com/watch?v=jhZjyaNO4Wo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=15",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Destructor in C++",
            "duration": "35-60 min",
            "youtubeId": "rm4tGxWBkqs",
            "videoUrl": "https://www.youtube.com/watch?v=rm4tGxWBkqs&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=16",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Inheritance & Its Different Types with Examples in C++",
            "duration": "35-60 min",
            "youtubeId": "RO1ZYW9NAzg",
            "videoUrl": "https://www.youtube.com/watch?v=RO1ZYW9NAzg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=17",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 18,
            "title": "Inheritance Syntax & Visibility Mode in C++",
            "duration": "35-60 min",
            "youtubeId": "Dmrc82dL7E8",
            "videoUrl": "https://www.youtube.com/watch?v=Dmrc82dL7E8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=18",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Single Inheritance Deep Dive: Examples + Code",
            "duration": "35-60 min",
            "youtubeId": "S1BR0xDdsyM",
            "videoUrl": "https://www.youtube.com/watch?v=S1BR0xDdsyM&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=19",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 20,
            "title": "Protected Access Modifier in C++",
            "duration": "35-60 min",
            "youtubeId": "uHkIhwUspdI",
            "videoUrl": "https://www.youtube.com/watch?v=uHkIhwUspdI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=20",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "Multilevel Inheritance Deep Dive with Code Example in C++",
            "duration": "35-60 min",
            "youtubeId": "BLb6-ZgxqHg",
            "videoUrl": "https://www.youtube.com/watch?v=BLb6-ZgxqHg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=21",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 22,
            "title": "Multiple Inheritance Deep Dive with Code Example in C++",
            "duration": "35-60 min",
            "youtubeId": "h3INeRqf2vU",
            "videoUrl": "https://www.youtube.com/watch?v=h3INeRqf2vU&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=22",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 23,
            "title": "Ambiguity Resolution in Inheritance in C++",
            "duration": "35-60 min",
            "youtubeId": "ZqfArYoV9Lg",
            "videoUrl": "https://www.youtube.com/watch?v=ZqfArYoV9Lg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=23",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 24,
            "title": "Virtual Base Class in C++",
            "duration": "35-60 min",
            "youtubeId": "kzMQpPX7TUY",
            "videoUrl": "https://www.youtube.com/watch?v=kzMQpPX7TUY&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=24",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 25,
            "title": "Code Example Demonstrating Virtual Base Class in C++",
            "duration": "35-60 min",
            "youtubeId": "eYV-TohBaa0",
            "videoUrl": "https://www.youtube.com/watch?v=eYV-TohBaa0&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=25",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 26,
            "title": "Constructors in Derived Class in C++",
            "duration": "35-60 min",
            "youtubeId": "gvOO4H7j_qI",
            "videoUrl": "https://www.youtube.com/watch?v=gvOO4H7j_qI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=26",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 27,
            "title": "Code Example: Constructors in Derived Class in Cpp",
            "duration": "35-60 min",
            "youtubeId": "qHrnTf5DOeI",
            "videoUrl": "https://www.youtube.com/watch?v=qHrnTf5DOeI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=27",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 28,
            "title": "Initialization list in Constructors in Cpp",
            "duration": "35-60 min",
            "youtubeId": "-Re7K7mHtv4",
            "videoUrl": "https://www.youtube.com/watch?v=-Re7K7mHtv4&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=28",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 29,
            "title": "Revisiting Pointers: new and delete Keywords in CPP",
            "duration": "35-60 min",
            "youtubeId": "2Y0b9nFA9s8",
            "videoUrl": "https://www.youtube.com/watch?v=2Y0b9nFA9s8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=29",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 30,
            "title": "Pointers to Objects and Arrow Operator in CPP",
            "duration": "35-60 min",
            "youtubeId": "ANpUQgyRPKk",
            "videoUrl": "https://www.youtube.com/watch?v=ANpUQgyRPKk&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=30",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 31,
            "index": 31,
            "title": "Array of Objects Using Pointers in C++",
            "duration": "35-60 min",
            "youtubeId": "OCmCyYxSi2I",
            "videoUrl": "https://www.youtube.com/watch?v=OCmCyYxSi2I&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=31",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 32,
            "title": "this Pointer in C++",
            "duration": "35-60 min",
            "youtubeId": "cEOfK_L4gGA",
            "videoUrl": "https://www.youtube.com/watch?v=cEOfK_L4gGA&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=32",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 33,
            "title": "Polymorphism in C++",
            "duration": "35-60 min",
            "youtubeId": "B-WWdC-H0zw",
            "videoUrl": "https://www.youtube.com/watch?v=B-WWdC-H0zw&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=33",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 34,
            "title": "Pointers to Derived Classes in C++",
            "duration": "35-60 min",
            "youtubeId": "0YQ_yhX46uk",
            "videoUrl": "https://www.youtube.com/watch?v=0YQ_yhX46uk&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=34",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 35,
            "index": 35,
            "title": "Virtual Functions in C++",
            "duration": "35-60 min",
            "youtubeId": "fB3JHNnlRfI",
            "videoUrl": "https://www.youtube.com/watch?v=fB3JHNnlRfI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=35",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 36,
            "title": "Virtual Functions Example + Creation Rules in C++",
            "duration": "35-60 min",
            "youtubeId": "-noYyWtdXSI",
            "videoUrl": "https://www.youtube.com/watch?v=-noYyWtdXSI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=36",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 37,
            "title": "Abstract Base Class & Pure Virtual Functions in C++",
            "duration": "35-60 min",
            "youtubeId": "RBAWWutf0fY",
            "videoUrl": "https://www.youtube.com/watch?v=RBAWWutf0fY&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=37",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Object Oriented Programming in C++",
        "duration": "35-60 min",
        "youtubeId": "nGJTWaaFdjc",
        "videoUrl": "https://www.youtube.com/watch?v=nGJTWaaFdjc&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=1",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Classes, Public and Private access modifiers in C++",
        "duration": "35-60 min",
        "youtubeId": "tL8vnfFFzVQ",
        "videoUrl": "https://www.youtube.com/watch?v=tL8vnfFFzVQ&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=2",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "OOPs Recap & Nesting of Member Functions in C++",
        "duration": "35-60 min",
        "youtubeId": "d363dW0AeS8",
        "videoUrl": "https://www.youtube.com/watch?v=d363dW0AeS8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=3",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "C++ Objects Memory Allocation & using Arrays in Classes",
        "duration": "35-60 min",
        "youtubeId": "qq05D2yFIHA",
        "videoUrl": "https://www.youtube.com/watch?v=qq05D2yFIHA&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=4",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Static Data Members & Methods in C++ OOPS",
        "duration": "35-60 min",
        "youtubeId": "QcLI2zGVYFo",
        "videoUrl": "https://www.youtube.com/watch?v=QcLI2zGVYFo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=5",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Array of Objects & Passing Objects as Function Arguments in C++",
        "duration": "35-60 min",
        "youtubeId": "aKnc1A5NOKo",
        "videoUrl": "https://www.youtube.com/watch?v=aKnc1A5NOKo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=6",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Friend Functions in C++",
        "duration": "35-60 min",
        "youtubeId": "HK6gnkQIgqI",
        "videoUrl": "https://www.youtube.com/watch?v=HK6gnkQIgqI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=7",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Friend Classes & Member Friend Functions in C++",
        "duration": "35-60 min",
        "youtubeId": "Tk-4KUoatg8",
        "videoUrl": "https://www.youtube.com/watch?v=Tk-4KUoatg8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=8",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "More on C++ Friend Functions (Examples & Explanation)",
        "duration": "35-60 min",
        "youtubeId": "GTJTsMR_fro",
        "videoUrl": "https://www.youtube.com/watch?v=GTJTsMR_fro&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=9",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Constructors In C++",
        "duration": "35-60 min",
        "youtubeId": "EEJUPXFKe8Q",
        "videoUrl": "https://www.youtube.com/watch?v=EEJUPXFKe8Q&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=10",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Parameterized and Default Constructors In C++",
        "duration": "35-60 min",
        "youtubeId": "CYXIlh5DURI",
        "videoUrl": "https://www.youtube.com/watch?v=CYXIlh5DURI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=11",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "Constructor Overloading In C++",
        "duration": "35-60 min",
        "youtubeId": "7BmtA-7r1Fg",
        "videoUrl": "https://www.youtube.com/watch?v=7BmtA-7r1Fg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=12",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "Constructors With Default Arguments In C++",
        "duration": "35-60 min",
        "youtubeId": "Ok-5YqcGl6c",
        "videoUrl": "https://www.youtube.com/watch?v=Ok-5YqcGl6c&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=13",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Dynamic Initialization of Objects Using Constructors",
        "duration": "35-60 min",
        "youtubeId": "c_9oCs-9fvg",
        "videoUrl": "https://www.youtube.com/watch?v=c_9oCs-9fvg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=14",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Copy Constructor in C++",
        "duration": "35-60 min",
        "youtubeId": "jhZjyaNO4Wo",
        "videoUrl": "https://www.youtube.com/watch?v=jhZjyaNO4Wo&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=15",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Destructor in C++",
        "duration": "35-60 min",
        "youtubeId": "rm4tGxWBkqs",
        "videoUrl": "https://www.youtube.com/watch?v=rm4tGxWBkqs&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=16",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Inheritance & Its Different Types with Examples in C++",
        "duration": "35-60 min",
        "youtubeId": "RO1ZYW9NAzg",
        "videoUrl": "https://www.youtube.com/watch?v=RO1ZYW9NAzg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=17",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Inheritance Syntax & Visibility Mode in C++",
        "duration": "35-60 min",
        "youtubeId": "Dmrc82dL7E8",
        "videoUrl": "https://www.youtube.com/watch?v=Dmrc82dL7E8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=18",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Single Inheritance Deep Dive: Examples + Code",
        "duration": "35-60 min",
        "youtubeId": "S1BR0xDdsyM",
        "videoUrl": "https://www.youtube.com/watch?v=S1BR0xDdsyM&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=19",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "Protected Access Modifier in C++",
        "duration": "35-60 min",
        "youtubeId": "uHkIhwUspdI",
        "videoUrl": "https://www.youtube.com/watch?v=uHkIhwUspdI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=20",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "Multilevel Inheritance Deep Dive with Code Example in C++",
        "duration": "35-60 min",
        "youtubeId": "BLb6-ZgxqHg",
        "videoUrl": "https://www.youtube.com/watch?v=BLb6-ZgxqHg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=21",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 22,
        "title": "Multiple Inheritance Deep Dive with Code Example in C++",
        "duration": "35-60 min",
        "youtubeId": "h3INeRqf2vU",
        "videoUrl": "https://www.youtube.com/watch?v=h3INeRqf2vU&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=22",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 23,
        "title": "Ambiguity Resolution in Inheritance in C++",
        "duration": "35-60 min",
        "youtubeId": "ZqfArYoV9Lg",
        "videoUrl": "https://www.youtube.com/watch?v=ZqfArYoV9Lg&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=23",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 24,
        "title": "Virtual Base Class in C++",
        "duration": "35-60 min",
        "youtubeId": "kzMQpPX7TUY",
        "videoUrl": "https://www.youtube.com/watch?v=kzMQpPX7TUY&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=24",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 25,
        "title": "Code Example Demonstrating Virtual Base Class in C++",
        "duration": "35-60 min",
        "youtubeId": "eYV-TohBaa0",
        "videoUrl": "https://www.youtube.com/watch?v=eYV-TohBaa0&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=25",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 26,
        "title": "Constructors in Derived Class in C++",
        "duration": "35-60 min",
        "youtubeId": "gvOO4H7j_qI",
        "videoUrl": "https://www.youtube.com/watch?v=gvOO4H7j_qI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=26",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 27,
        "title": "Code Example: Constructors in Derived Class in Cpp",
        "duration": "35-60 min",
        "youtubeId": "qHrnTf5DOeI",
        "videoUrl": "https://www.youtube.com/watch?v=qHrnTf5DOeI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=27",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 28,
        "title": "Initialization list in Constructors in Cpp",
        "duration": "35-60 min",
        "youtubeId": "-Re7K7mHtv4",
        "videoUrl": "https://www.youtube.com/watch?v=-Re7K7mHtv4&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=28",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 29,
        "title": "Revisiting Pointers: new and delete Keywords in CPP",
        "duration": "35-60 min",
        "youtubeId": "2Y0b9nFA9s8",
        "videoUrl": "https://www.youtube.com/watch?v=2Y0b9nFA9s8&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=29",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 30,
        "title": "Pointers to Objects and Arrow Operator in CPP",
        "duration": "35-60 min",
        "youtubeId": "ANpUQgyRPKk",
        "videoUrl": "https://www.youtube.com/watch?v=ANpUQgyRPKk&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=30",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 31,
        "title": "Array of Objects Using Pointers in C++",
        "duration": "35-60 min",
        "youtubeId": "OCmCyYxSi2I",
        "videoUrl": "https://www.youtube.com/watch?v=OCmCyYxSi2I&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=31",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 32,
        "title": "this Pointer in C++",
        "duration": "35-60 min",
        "youtubeId": "cEOfK_L4gGA",
        "videoUrl": "https://www.youtube.com/watch?v=cEOfK_L4gGA&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=32",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 33,
        "title": "Polymorphism in C++",
        "duration": "35-60 min",
        "youtubeId": "B-WWdC-H0zw",
        "videoUrl": "https://www.youtube.com/watch?v=B-WWdC-H0zw&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=33",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 34,
        "title": "Pointers to Derived Classes in C++",
        "duration": "35-60 min",
        "youtubeId": "0YQ_yhX46uk",
        "videoUrl": "https://www.youtube.com/watch?v=0YQ_yhX46uk&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=34",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 35,
        "title": "Virtual Functions in C++",
        "duration": "35-60 min",
        "youtubeId": "fB3JHNnlRfI",
        "videoUrl": "https://www.youtube.com/watch?v=fB3JHNnlRfI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=35",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 36,
        "title": "Virtual Functions Example + Creation Rules in C++",
        "duration": "35-60 min",
        "youtubeId": "-noYyWtdXSI",
        "videoUrl": "https://www.youtube.com/watch?v=-noYyWtdXSI&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=36",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 37,
        "title": "Abstract Base Class & Pure Virtual Functions in C++",
        "duration": "35-60 min",
        "youtubeId": "RBAWWutf0fY",
        "videoUrl": "https://www.youtube.com/watch?v=RBAWWutf0fY&list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&index=37",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "rohit-negi-oops-playlist",
    "title": "Rohit Negi OOP Interview Preparation Playlist",
    "category": "oops",
    "instructor": "Rohit Negi",
    "channel": "Coder Army",
    "totalVideos": 8,
    "totalDuration": "22+ hrs",
    "rating": 4.9,
    "badge": "OOPs from Scratch to Advance",
    "description": "Master Object-Oriented Programming in C++ with this comprehensive playlist by Coder Army. This course covers all fundamental OOP concepts including Classes and Objects, Constructors and Destructors, Static Members, Encapsulation, Inheritance (Single, Multiple, Hybrid, Multipath), Access Modifiers, Polymorphism, Virtual Functions, Exception Handling, and File Handling. Perfect for students and developers looking to strengthen their C++ OOP foundations.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklEEbOXGyxvm",
    "thumbnailType": "oops",
    "sections": [
      {
        "title": "Object Oriented Programming in C++",
        "videosCount": 8,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Object Oriented Programming in C++",
            "duration": "35-60 min",
            "youtubeId": "iw1Xf_33YM0",
            "videoUrl": "https://www.youtube.com/watch?v=iw1Xf_33YM0&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=1",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Constructor and Destructor in C++",
            "duration": "35-60 min",
            "youtubeId": "sNiiJ16dLz0",
            "videoUrl": "https://www.youtube.com/watch?v=sNiiJ16dLz0&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=2",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Object Oriented Programming: Static data Member and Function | Encapsulation",
            "duration": "35-60 min",
            "youtubeId": "ZIL8t5AoGmQ",
            "videoUrl": "https://www.youtube.com/watch?v=ZIL8t5AoGmQ&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=3",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "Inheritance | Access Modifier | Real Life Example",
            "duration": "35-60 min",
            "youtubeId": "qq3BY4viEB4",
            "videoUrl": "https://www.youtube.com/watch?v=qq3BY4viEB4&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=4",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Type of Inheritance in C++ | Single Inheritance | Multiple | Hybrid | Multipath",
            "duration": "35-60 min",
            "youtubeId": "ww02EpE4DZo",
            "videoUrl": "https://www.youtube.com/watch?v=ww02EpE4DZo&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=5",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Polymorphism and Virtual Function in C++",
            "duration": "35-60 min",
            "youtubeId": "p2h8rGnkD0o",
            "videoUrl": "https://www.youtube.com/watch?v=p2h8rGnkD0o&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=6",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Exception Handling in C++",
            "duration": "35-60 min",
            "youtubeId": "essQiHKRmrc",
            "videoUrl": "https://www.youtube.com/watch?v=essQiHKRmrc&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=7",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "File Handling in C++",
            "duration": "35-60 min",
            "youtubeId": "NBsmPHXjLfg",
            "videoUrl": "https://www.youtube.com/watch?v=NBsmPHXjLfg&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=8",
            "sectionTitle": "Object Oriented Programming in C++",
            "tags": [
              "Object",
              "OOPS"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Object Oriented Programming in C++",
        "duration": "35-60 min",
        "youtubeId": "iw1Xf_33YM0",
        "videoUrl": "https://www.youtube.com/watch?v=iw1Xf_33YM0&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=1",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Constructor and Destructor in C++",
        "duration": "35-60 min",
        "youtubeId": "sNiiJ16dLz0",
        "videoUrl": "https://www.youtube.com/watch?v=sNiiJ16dLz0&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=2",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Object Oriented Programming: Static data Member and Function | Encapsulation",
        "duration": "35-60 min",
        "youtubeId": "ZIL8t5AoGmQ",
        "videoUrl": "https://www.youtube.com/watch?v=ZIL8t5AoGmQ&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=3",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Inheritance | Access Modifier | Real Life Example",
        "duration": "35-60 min",
        "youtubeId": "qq3BY4viEB4",
        "videoUrl": "https://www.youtube.com/watch?v=qq3BY4viEB4&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=4",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Type of Inheritance in C++ | Single Inheritance | Multiple | Hybrid | Multipath",
        "duration": "35-60 min",
        "youtubeId": "ww02EpE4DZo",
        "videoUrl": "https://www.youtube.com/watch?v=ww02EpE4DZo&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=5",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Polymorphism and Virtual Function in C++",
        "duration": "35-60 min",
        "youtubeId": "p2h8rGnkD0o",
        "videoUrl": "https://www.youtube.com/watch?v=p2h8rGnkD0o&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=6",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Exception Handling in C++",
        "duration": "35-60 min",
        "youtubeId": "essQiHKRmrc",
        "videoUrl": "https://www.youtube.com/watch?v=essQiHKRmrc&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=7",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "File Handling in C++",
        "duration": "35-60 min",
        "youtubeId": "NBsmPHXjLfg",
        "videoUrl": "https://www.youtube.com/watch?v=NBsmPHXjLfg&list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&index=8",
        "sectionTitle": "Object Oriented Programming in C++",
        "tags": [
          "Object",
          "OOPS"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "hello-interview-system-design-playlist",
    "title": "System Design Walkthroughs & Deep Dives HLD System Design Interview Preparation",
    "category": "system-design",
    "instructor": "Hello Interview",
    "channel": "Hello Interview",
    "totalVideos": 29,
    "totalDuration": "26+ hrs",
    "rating": 4.9,
    "badge": "HLD Deep Dives & FAANG Cases",
    "description": "Comprehensive system design interview preparation featuring ex-Meta Staff Engineers and Senior Managers walking through real-world problems and deep architectural dives into core technologies.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PLkQ6tYwW7y9bV5Zc37qD44eZ86m1A",
    "thumbnailType": "system-design",
    "sections": [
      {
        "title": "System Design Interviews",
        "videosCount": 17,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "System Design Interview: Design Ticketmaster w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "fhdPyoO6aXI",
            "videoUrl": "https://www.youtube.com/watch?v=fhdPyoO6aXI",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Design Uber w/ a Ex-Meta Staff Engineer: System Design Interview breakdown",
            "duration": "35-60 min",
            "youtubeId": "lsKU38RKQSo",
            "videoUrl": "https://www.youtube.com/watch?v=lsKU38RKQSo",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "Design Dropbox or Google Drive w/ a Ex-Meta Staff Engineer System Design Interview",
            "duration": "35-60 min",
            "youtubeId": "_UZ1ngy-kOI",
            "videoUrl": "https://www.youtube.com/watch?v=_UZ1ngy-kOI",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "System Design Interview Walkthrough: Design Twitter",
            "duration": "35-60 min",
            "youtubeId": "Nfa-uUHuFHg",
            "videoUrl": "https://www.youtube.com/watch?v=Nfa-uUHuFHg",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Beginner System Design Interview: Design Bitly w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "iUU4O1sWtJA",
            "videoUrl": "https://www.youtube.com/watch?v=iUU4O1sWtJA",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Design an Ad Click Aggregator w/ a Ex-Meta Staff Engineer System Design Interview",
            "duration": "35-60 min",
            "youtubeId": "Zcv_899yqhI",
            "videoUrl": "https://www.youtube.com/watch?v=Zcv_899yqhI",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Design Whatsapp: System Design Interview w/ a Ex-Meta Senior Manager",
            "duration": "35-60 min",
            "youtubeId": "cr6p0n0N-VA",
            "videoUrl": "https://www.youtube.com/watch?v=cr6p0n0N-VA",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Design a Web Crawler System Design Interview w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "krsuaUp__pM",
            "videoUrl": "https://www.youtube.com/watch?v=krsuaUp__pM",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "System Design Interview: Design YouTube w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "IUrQ5_g3XKs",
            "videoUrl": "https://www.youtube.com/watch?v=IUrQ5_g3XKs",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 10,
            "title": "System Design Interview: Design LeetCode (Online Judge) w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "1xHADtekTNg",
            "videoUrl": "https://www.youtube.com/watch?v=1xHADtekTNg",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=system-design-interview-design-leetcode-online-judge-w-a-ex-meta-staff-engineer"
          },
          {
            "id": 11,
            "index": 11,
            "title": "System Design Interview: Design Tinder w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "18Fg5Akhkqw",
            "videoUrl": "https://www.youtube.com/watch?v=18Fg5Akhkqw",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 12,
            "title": "System Design Interview: Design Live Comments w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "LjLx0fCd1k8",
            "videoUrl": "https://www.youtube.com/watch?v=LjLx0fCd1k8",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "Design a Distributed Rate Limiter w/ a Ex-Meta Staff Engineer: System Design Breakdown",
            "duration": "35-60 min",
            "youtubeId": "MIJFyUPG4Z4",
            "videoUrl": "https://www.youtube.com/watch?v=MIJFyUPG4Z4",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Design FB News Feed System Design Interview w/ ex: Meta Senior Manager",
            "duration": "35-60 min",
            "youtubeId": "Qj4-GruzyDU",
            "videoUrl": "https://www.youtube.com/watch?v=Qj4-GruzyDU",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Design FB Post Search: System Design Interview breakdown w/ ex Meta Interviewer",
            "duration": "35-60 min",
            "youtubeId": "l38XL9914fs",
            "videoUrl": "https://www.youtube.com/watch?v=l38XL9914fs",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Top-K System Design Interview Breakdown w/ Ex-Meta Senior Manager",
            "duration": "35-60 min",
            "youtubeId": "y-tA2NW4LNY",
            "videoUrl": "https://www.youtube.com/watch?v=y-tA2NW4LNY",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "System Design Interview: Design an Ad Click Aggregator w/ a Ex-Meta Staff Engineer (old)",
            "duration": "35-60 min",
            "youtubeId": "1oFVUT4_Yy0",
            "videoUrl": "https://www.youtube.com/watch?v=1oFVUT4_Yy0",
            "sectionTitle": "System Design Interviews",
            "tags": [
              "System",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Deep Dives",
        "videosCount": 12,
        "videos": [
          {
            "id": 18,
            "index": 18,
            "title": "Kafka System Design Deep Dive w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "DU8o-OTeoCc",
            "videoUrl": "https://www.youtube.com/watch?v=DU8o-OTeoCc",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Redis Deep Dive w/ a Ex-Meta Senior Manager",
            "duration": "35-60 min",
            "youtubeId": "fmT5nlEkl3U",
            "videoUrl": "https://www.youtube.com/watch?v=fmT5nlEkl3U",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 20,
            "title": "API Gateways in System Design Interviews w/ Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "7-6F3b14baA",
            "videoUrl": "https://www.youtube.com/watch?v=7-6F3b14baA",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "DB Indexing in System Design Interviews - B-tree, Geospatial, Inverted Index, and more!",
            "duration": "35-60 min",
            "youtubeId": "BHCSL_ZifI0",
            "videoUrl": "https://www.youtube.com/watch?v=BHCSL_ZifI0",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 22,
            "title": "Networking Essentials for System Design Interviews w/ Ex Meta Senior Manager",
            "duration": "35-60 min",
            "youtubeId": "SHkbPm1Wrno",
            "videoUrl": "https://www.youtube.com/watch?v=SHkbPm1Wrno",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 23,
            "title": "Elasticsearch Deep Dive w/ a Ex-Meta Senior Manager for System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "PuZvF2EyfBM",
            "videoUrl": "https://www.youtube.com/watch?v=PuZvF2EyfBM",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 24,
            "title": "CAP Theorem in System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "VdrEq0cODu4",
            "videoUrl": "https://www.youtube.com/watch?v=VdrEq0cODu4",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 25,
            "title": "DynamoDB Deep Dive w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "2X2SO3Y-af8",
            "videoUrl": "https://www.youtube.com/watch?v=2X2SO3Y-af8",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 26,
            "title": "Consistent Hashing: Easy Explanation for System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "vccwdhfqIrI",
            "videoUrl": "https://www.youtube.com/watch?v=vccwdhfqIrI",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 27,
            "title": "Data Structures for Big Data in Interviews - Bloom Filters, Count-Min Sketch, HyperLogLog",
            "duration": "35-60 min",
            "youtubeId": "IgyU0iFIoqM",
            "videoUrl": "https://www.youtube.com/watch?v=IgyU0iFIoqM",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 28,
            "title": "Cassandra Deep Dive w/ a Ex-Meta Staff Engineer",
            "duration": "35-60 min",
            "youtubeId": "TD3-INhm60Q",
            "videoUrl": "https://www.youtube.com/watch?v=TD3-INhm60Q",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 29,
            "title": "How do Time Series Databases Work?",
            "duration": "35-60 min",
            "youtubeId": "Qd76ZmfRs_Q",
            "videoUrl": "https://www.youtube.com/watch?v=Qd76ZmfRs_Q",
            "sectionTitle": "Deep Dives",
            "tags": [
              "Deep",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "System Design Interview: Design Ticketmaster w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "fhdPyoO6aXI",
        "videoUrl": "https://www.youtube.com/watch?v=fhdPyoO6aXI",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Design Uber w/ a Ex-Meta Staff Engineer: System Design Interview breakdown",
        "duration": "35-60 min",
        "youtubeId": "lsKU38RKQSo",
        "videoUrl": "https://www.youtube.com/watch?v=lsKU38RKQSo",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "Design Dropbox or Google Drive w/ a Ex-Meta Staff Engineer System Design Interview",
        "duration": "35-60 min",
        "youtubeId": "_UZ1ngy-kOI",
        "videoUrl": "https://www.youtube.com/watch?v=_UZ1ngy-kOI",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "System Design Interview Walkthrough: Design Twitter",
        "duration": "35-60 min",
        "youtubeId": "Nfa-uUHuFHg",
        "videoUrl": "https://www.youtube.com/watch?v=Nfa-uUHuFHg",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Beginner System Design Interview: Design Bitly w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "iUU4O1sWtJA",
        "videoUrl": "https://www.youtube.com/watch?v=iUU4O1sWtJA",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Design an Ad Click Aggregator w/ a Ex-Meta Staff Engineer System Design Interview",
        "duration": "35-60 min",
        "youtubeId": "Zcv_899yqhI",
        "videoUrl": "https://www.youtube.com/watch?v=Zcv_899yqhI",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Design Whatsapp: System Design Interview w/ a Ex-Meta Senior Manager",
        "duration": "35-60 min",
        "youtubeId": "cr6p0n0N-VA",
        "videoUrl": "https://www.youtube.com/watch?v=cr6p0n0N-VA",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Design a Web Crawler System Design Interview w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "krsuaUp__pM",
        "videoUrl": "https://www.youtube.com/watch?v=krsuaUp__pM",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "System Design Interview: Design YouTube w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "IUrQ5_g3XKs",
        "videoUrl": "https://www.youtube.com/watch?v=IUrQ5_g3XKs",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "System Design Interview: Design LeetCode (Online Judge) w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "1xHADtekTNg",
        "videoUrl": "https://www.youtube.com/watch?v=1xHADtekTNg",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=system-design-interview-design-leetcode-online-judge-w-a-ex-meta-staff-engineer"
      },
      {
        "id": 11,
        "index": 11,
        "title": "System Design Interview: Design Tinder w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "18Fg5Akhkqw",
        "videoUrl": "https://www.youtube.com/watch?v=18Fg5Akhkqw",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "System Design Interview: Design Live Comments w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "LjLx0fCd1k8",
        "videoUrl": "https://www.youtube.com/watch?v=LjLx0fCd1k8",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "Design a Distributed Rate Limiter w/ a Ex-Meta Staff Engineer: System Design Breakdown",
        "duration": "35-60 min",
        "youtubeId": "MIJFyUPG4Z4",
        "videoUrl": "https://www.youtube.com/watch?v=MIJFyUPG4Z4",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Design FB News Feed System Design Interview w/ ex: Meta Senior Manager",
        "duration": "35-60 min",
        "youtubeId": "Qj4-GruzyDU",
        "videoUrl": "https://www.youtube.com/watch?v=Qj4-GruzyDU",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Design FB Post Search: System Design Interview breakdown w/ ex Meta Interviewer",
        "duration": "35-60 min",
        "youtubeId": "l38XL9914fs",
        "videoUrl": "https://www.youtube.com/watch?v=l38XL9914fs",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Top-K System Design Interview Breakdown w/ Ex-Meta Senior Manager",
        "duration": "35-60 min",
        "youtubeId": "y-tA2NW4LNY",
        "videoUrl": "https://www.youtube.com/watch?v=y-tA2NW4LNY",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "System Design Interview: Design an Ad Click Aggregator w/ a Ex-Meta Staff Engineer (old)",
        "duration": "35-60 min",
        "youtubeId": "1oFVUT4_Yy0",
        "videoUrl": "https://www.youtube.com/watch?v=1oFVUT4_Yy0",
        "sectionTitle": "System Design Interviews",
        "tags": [
          "System",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Kafka System Design Deep Dive w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "DU8o-OTeoCc",
        "videoUrl": "https://www.youtube.com/watch?v=DU8o-OTeoCc",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Redis Deep Dive w/ a Ex-Meta Senior Manager",
        "duration": "35-60 min",
        "youtubeId": "fmT5nlEkl3U",
        "videoUrl": "https://www.youtube.com/watch?v=fmT5nlEkl3U",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "API Gateways in System Design Interviews w/ Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "7-6F3b14baA",
        "videoUrl": "https://www.youtube.com/watch?v=7-6F3b14baA",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "DB Indexing in System Design Interviews - B-tree, Geospatial, Inverted Index, and more!",
        "duration": "35-60 min",
        "youtubeId": "BHCSL_ZifI0",
        "videoUrl": "https://www.youtube.com/watch?v=BHCSL_ZifI0",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 22,
        "title": "Networking Essentials for System Design Interviews w/ Ex Meta Senior Manager",
        "duration": "35-60 min",
        "youtubeId": "SHkbPm1Wrno",
        "videoUrl": "https://www.youtube.com/watch?v=SHkbPm1Wrno",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 23,
        "title": "Elasticsearch Deep Dive w/ a Ex-Meta Senior Manager for System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "PuZvF2EyfBM",
        "videoUrl": "https://www.youtube.com/watch?v=PuZvF2EyfBM",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 24,
        "title": "CAP Theorem in System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "VdrEq0cODu4",
        "videoUrl": "https://www.youtube.com/watch?v=VdrEq0cODu4",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 25,
        "title": "DynamoDB Deep Dive w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "2X2SO3Y-af8",
        "videoUrl": "https://www.youtube.com/watch?v=2X2SO3Y-af8",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 26,
        "title": "Consistent Hashing: Easy Explanation for System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "vccwdhfqIrI",
        "videoUrl": "https://www.youtube.com/watch?v=vccwdhfqIrI",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 27,
        "title": "Data Structures for Big Data in Interviews - Bloom Filters, Count-Min Sketch, HyperLogLog",
        "duration": "35-60 min",
        "youtubeId": "IgyU0iFIoqM",
        "videoUrl": "https://www.youtube.com/watch?v=IgyU0iFIoqM",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 28,
        "title": "Cassandra Deep Dive w/ a Ex-Meta Staff Engineer",
        "duration": "35-60 min",
        "youtubeId": "TD3-INhm60Q",
        "videoUrl": "https://www.youtube.com/watch?v=TD3-INhm60Q",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 29,
        "title": "How do Time Series Databases Work?",
        "duration": "35-60 min",
        "youtubeId": "Qd76ZmfRs_Q",
        "videoUrl": "https://www.youtube.com/watch?v=Qd76ZmfRs_Q",
        "sectionTitle": "Deep Dives",
        "tags": [
          "Deep",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      }
    ]
  },
  {
    "slug": "exponent-system-design-playlist",
    "title": "Exponent HLD System Design Interview Preparation",
    "category": "system-design",
    "instructor": "Exponent",
    "channel": "Exponent",
    "totalVideos": 44,
    "totalDuration": "35+ hrs",
    "rating": 4.9,
    "badge": "Real Mock System Design",
    "description": "Comprehensive guide to mastering System Design Interviews with mock interviews and architectural concepts.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL2e9WqE8jV81Cq1Z44g6eF8w4fP5xQ7o",
    "thumbnailType": "system-design",
    "sections": [
      {
        "title": "Full Mock Interviews",
        "videosCount": 29,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Design Google Docs | System Design Interview (with Amazon Engineer, ex-Microsoft)",
            "duration": "35-60 min",
            "youtubeId": "cL9If4X7aaE",
            "videoUrl": "https://www.youtube.com/watch?v=cL9If4X7aaE",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 2,
            "index": 2,
            "title": "Design Uber Eats | System Design Interview (with Senior Netflix Engineer, Ex-Microsoft)",
            "duration": "35-60 min",
            "youtubeId": "dgawYAH0pO4",
            "videoUrl": "https://www.youtube.com/watch?v=dgawYAH0pO4",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 3,
            "index": 3,
            "title": "System Design Interview - Design a Distributed LRU Cache (Full mock interview with Sr. MAANG SWE)",
            "duration": "35-60 min",
            "youtubeId": "lZ5QuFLCVn0",
            "videoUrl": "https://www.youtube.com/watch?v=lZ5QuFLCVn0",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 4,
            "index": 4,
            "title": "System Design Interview - Design a Web Crawler (Full mock interview with Sr. MAANG SWE)",
            "duration": "35-60 min",
            "youtubeId": "MAuLYRcJEr8",
            "videoUrl": "https://www.youtube.com/watch?v=MAuLYRcJEr8",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Design a Key-Value Store - System Design Mock Interview (with Microsoft Software Engineer)",
            "duration": "35-60 min",
            "youtubeId": "6fOoXT1HYxk",
            "videoUrl": "https://www.youtube.com/watch?v=6fOoXT1HYxk",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Design Ticketmaster - System Design Interview (with Senior Amazon TPM)",
            "duration": "35-60 min",
            "youtubeId": "dUSVIAGxlUw",
            "videoUrl": "https://www.youtube.com/watch?v=dUSVIAGxlUw",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Design Tinder - System Design Interview (with TikTok Senior Engineer)",
            "duration": "35-60 min",
            "youtubeId": "iyLqwyFL0Zc",
            "videoUrl": "https://www.youtube.com/watch?v=iyLqwyFL0Zc",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 9,
            "title": "System Design Interview - Downloading User Data (with Reforge EM)",
            "duration": "35-60 min",
            "youtubeId": "6erP70R_NGs",
            "videoUrl": "https://www.youtube.com/watch?v=6erP70R_NGs",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 11,
            "title": "Design a Distributed Message Queue - System Design Mock Interview",
            "duration": "35-60 min",
            "youtubeId": "ZwwYgiT9GH0",
            "videoUrl": "https://www.youtube.com/watch?v=ZwwYgiT9GH0",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 10,
            "index": 14,
            "title": "Design ChatGPT - System Design Mock Interview (with eBay EM)",
            "duration": "35-60 min",
            "youtubeId": "I9-PUPYZyiw",
            "videoUrl": "https://www.youtube.com/watch?v=I9-PUPYZyiw",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 15,
            "title": "Design a Hotel Booking Service - System Design Mock Interview (with eBay EM)",
            "duration": "35-60 min",
            "youtubeId": "kO0EQNfE2x4",
            "videoUrl": "https://www.youtube.com/watch?v=kO0EQNfE2x4",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 19,
            "title": "System Design Mock Interview: Design Uber Eats (with eBay EM)",
            "duration": "35-60 min",
            "youtubeId": "_aybyMlU7-E",
            "videoUrl": "https://www.youtube.com/watch?v=_aybyMlU7-E",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 24,
            "title": "System Design Mock Interview: Design a Rate Limiter (with Meta Engineering Manager)",
            "duration": "35-60 min",
            "youtubeId": "SgWb6tWx3S8",
            "videoUrl": "https://www.youtube.com/watch?v=SgWb6tWx3S8",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 27,
            "title": "System Design Interview: Design Amazon Kindle Payments",
            "duration": "35-60 min",
            "youtubeId": "til92X5hYAY",
            "videoUrl": "https://www.youtube.com/watch?v=til92X5hYAY",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 28,
            "title": "System Design Interview: Design Amazon Prime Video",
            "duration": "35-60 min",
            "youtubeId": "PuU_0esYyhg",
            "videoUrl": "https://www.youtube.com/watch?v=PuU_0esYyhg",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 30,
            "title": "System Design Mock Interview: Design a Vending Machine",
            "duration": "35-60 min",
            "youtubeId": "D0kDMUgo27c",
            "videoUrl": "https://www.youtube.com/watch?v=D0kDMUgo27c",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 31,
            "title": "Amazon System Design Mock Interview: Design Amazon Prime Video (with Uber Software Engineer)",
            "duration": "35-60 min",
            "youtubeId": "jMRo9QQKja8",
            "videoUrl": "https://www.youtube.com/watch?v=jMRo9QQKja8",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 34,
            "title": "System Design Mock Interview: Design WhatsApp",
            "duration": "35-60 min",
            "youtubeId": "0iyLURrWIgQ",
            "videoUrl": "https://www.youtube.com/watch?v=0iyLURrWIgQ",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 35,
            "title": "Facebook System Design Interview: Design an Analytics Platform (Metrics & Logging)",
            "duration": "35-60 min",
            "youtubeId": "kIcq1_pBQSY",
            "videoUrl": "https://www.youtube.com/watch?v=kIcq1_pBQSY",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 36,
            "title": "Facebook System Design Interview: Design Twitter",
            "duration": "35-60 min",
            "youtubeId": "QF8JNSoJD8E",
            "videoUrl": "https://www.youtube.com/watch?v=QF8JNSoJD8E",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 37,
            "title": "System Design Interview: Design Netflix",
            "duration": "35-60 min",
            "youtubeId": "VvZf7lISfgs",
            "videoUrl": "https://www.youtube.com/watch?v=VvZf7lISfgs",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 22,
            "index": 38,
            "title": "System Design Interview: Design Calendar Application",
            "duration": "35-60 min",
            "youtubeId": "39eAITqeu7g",
            "videoUrl": "https://www.youtube.com/watch?v=39eAITqeu7g",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 39,
            "title": "Engineering Manager System Design Interview (Wealthfront EM): Design YouTube",
            "duration": "35-60 min",
            "youtubeId": "1xV5WI0OFkg",
            "videoUrl": "https://www.youtube.com/watch?v=1xV5WI0OFkg",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 40,
            "title": "Design Reddit: System Design Mock Interview",
            "duration": "35-60 min",
            "youtubeId": "KYExYE_9nIY",
            "videoUrl": "https://www.youtube.com/watch?v=KYExYE_9nIY",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 41,
            "title": "Amazon System Design Interview: Design Parking Garage",
            "duration": "35-60 min",
            "youtubeId": "NtMvNh0WFVM",
            "videoUrl": "https://www.youtube.com/watch?v=NtMvNh0WFVM",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 42,
            "title": "System Design Mock Interview: Design TikTok ft. Google TPM",
            "duration": "35-60 min",
            "youtubeId": "Z-0g_aJL5Fw",
            "videoUrl": "https://www.youtube.com/watch?v=Z-0g_aJL5Fw",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 43,
            "title": "System Design Mock Interview: Design Facebook Messenger",
            "duration": "35-60 min",
            "youtubeId": "uzeJb7ZjoQ4",
            "videoUrl": "https://www.youtube.com/watch?v=uzeJb7ZjoQ4",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 44,
            "title": "System Design Mock Interview: Design Instagram",
            "duration": "35-60 min",
            "youtubeId": "VJpfO6KdyWE",
            "videoUrl": "https://www.youtube.com/watch?v=VJpfO6KdyWE",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 45,
            "title": "System Design (TPM) Mock Interview: Twitter API",
            "duration": "35-60 min",
            "youtubeId": "k-E4YdEs8qM",
            "videoUrl": "https://www.youtube.com/watch?v=k-E4YdEs8qM",
            "sectionTitle": "Full Mock Interviews",
            "tags": [
              "Full",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Core Concepts & Architecture",
        "videosCount": 12,
        "videos": [
          {
            "id": 30,
            "index": 8,
            "title": "Database Replication Explained (in 5 Minutes)",
            "duration": "35-60 min",
            "youtubeId": "bI8Ry6GhMSE",
            "videoUrl": "https://www.youtube.com/watch?v=bI8Ry6GhMSE",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 31,
            "index": 10,
            "title": "SQL vs. NoSQL Explained (in 4 Minutes)",
            "duration": "35-60 min",
            "youtubeId": "_Ss42Vb1SU4",
            "videoUrl": "https://www.youtube.com/watch?v=_Ss42Vb1SU4",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 12,
            "title": "APIs Explained (in 4 Minutes)",
            "duration": "35-60 min",
            "youtubeId": "bxuYDT-BWaI",
            "videoUrl": "https://www.youtube.com/watch?v=bxuYDT-BWaI",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 16,
            "title": "The Basics of Cloud Architecture",
            "duration": "35-60 min",
            "youtubeId": "IG3fsRmujqA",
            "videoUrl": "https://www.youtube.com/watch?v=IG3fsRmujqA",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 17,
            "title": "The Basics of Database Sharding and Partitioning in System Design",
            "duration": "35-60 min",
            "youtubeId": "be6PLMKKSto",
            "videoUrl": "https://www.youtube.com/watch?v=be6PLMKKSto",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 35,
            "index": 18,
            "title": "Load Balancers for System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "chyZRNT7eEo",
            "videoUrl": "https://www.youtube.com/watch?v=chyZRNT7eEo",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 36,
            "index": 20,
            "title": "How Does Encryption Work?",
            "duration": "35-60 min",
            "youtubeId": "sPJmIeHpWd4",
            "videoUrl": "https://www.youtube.com/watch?v=sPJmIeHpWd4",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 37,
            "index": 21,
            "title": "CDNs in High-Performance System Design",
            "duration": "35-60 min",
            "youtubeId": "rwBv7FqZ77g",
            "videoUrl": "https://www.youtube.com/watch?v=rwBv7FqZ77g",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 38,
            "index": 22,
            "title": "Database Caching for System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "6GY1akbxyEo",
            "videoUrl": "https://www.youtube.com/watch?v=6GY1akbxyEo",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 39,
            "index": 23,
            "title": "How Do Computers Handle Memory Management?",
            "duration": "35-60 min",
            "youtubeId": "FLZc4xH4E8U",
            "videoUrl": "https://www.youtube.com/watch?v=FLZc4xH4E8U",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 40,
            "index": 25,
            "title": "CAP Theorem for System Design Interviews",
            "duration": "35-60 min",
            "youtubeId": "BTKBS_GdSms",
            "videoUrl": "https://www.youtube.com/watch?v=BTKBS_GdSms",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 41,
            "index": 26,
            "title": "Cloud Engineering Interview Questions and Concepts",
            "duration": "35-60 min",
            "youtubeId": "dZ1nb1Temoo",
            "videoUrl": "https://www.youtube.com/watch?v=dZ1nb1Temoo",
            "sectionTitle": "Core Concepts & Architecture",
            "tags": [
              "Core",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=cloud-engineering-interview-questions-and-concepts"
          }
        ]
      },
      {
        "title": "Interview Preparation Guides",
        "videosCount": 3,
        "videos": [
          {
            "id": 42,
            "index": 13,
            "title": "How to Answer System Design Interview Questions (Complete Guide)",
            "duration": "35-60 min",
            "youtubeId": "L9TfZdODuFQ",
            "videoUrl": "https://www.youtube.com/watch?v=L9TfZdODuFQ",
            "sectionTitle": "Interview Preparation Guides",
            "tags": [
              "Interview",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=how-to-answer-system-design-interview-questions-complete-guide"
          },
          {
            "id": 43,
            "index": 29,
            "title": "How to Whiteboard for System Design Interviews | Tips & Tricks",
            "duration": "35-60 min",
            "youtubeId": "Qo5990LViI4",
            "videoUrl": "https://www.youtube.com/watch?v=Qo5990LViI4",
            "sectionTitle": "Interview Preparation Guides",
            "tags": [
              "Interview",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 44,
            "index": 33,
            "title": "10 System Design Interview Questions You're Likely to be Asked (and How to Answer Them)",
            "duration": "35-60 min",
            "youtubeId": "gGpbLAGzSLA",
            "videoUrl": "https://www.youtube.com/watch?v=gGpbLAGzSLA",
            "sectionTitle": "Interview Preparation Guides",
            "tags": [
              "Interview",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=10-system-design-interview-questions-you-re-likely-to-be-asked-and-how-to-answer-them"
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Design Google Docs | System Design Interview (with Amazon Engineer, ex-Microsoft)",
        "duration": "35-60 min",
        "youtubeId": "cL9If4X7aaE",
        "videoUrl": "https://www.youtube.com/watch?v=cL9If4X7aaE",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 2,
        "index": 2,
        "title": "Design Uber Eats | System Design Interview (with Senior Netflix Engineer, Ex-Microsoft)",
        "duration": "35-60 min",
        "youtubeId": "dgawYAH0pO4",
        "videoUrl": "https://www.youtube.com/watch?v=dgawYAH0pO4",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 3,
        "index": 3,
        "title": "System Design Interview - Design a Distributed LRU Cache (Full mock interview with Sr. MAANG SWE)",
        "duration": "35-60 min",
        "youtubeId": "lZ5QuFLCVn0",
        "videoUrl": "https://www.youtube.com/watch?v=lZ5QuFLCVn0",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "System Design Interview - Design a Web Crawler (Full mock interview with Sr. MAANG SWE)",
        "duration": "35-60 min",
        "youtubeId": "MAuLYRcJEr8",
        "videoUrl": "https://www.youtube.com/watch?v=MAuLYRcJEr8",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Design a Key-Value Store - System Design Mock Interview (with Microsoft Software Engineer)",
        "duration": "35-60 min",
        "youtubeId": "6fOoXT1HYxk",
        "videoUrl": "https://www.youtube.com/watch?v=6fOoXT1HYxk",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Design Ticketmaster - System Design Interview (with Senior Amazon TPM)",
        "duration": "35-60 min",
        "youtubeId": "dUSVIAGxlUw",
        "videoUrl": "https://www.youtube.com/watch?v=dUSVIAGxlUw",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Design Tinder - System Design Interview (with TikTok Senior Engineer)",
        "duration": "35-60 min",
        "youtubeId": "iyLqwyFL0Zc",
        "videoUrl": "https://www.youtube.com/watch?v=iyLqwyFL0Zc",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 9,
        "title": "System Design Interview - Downloading User Data (with Reforge EM)",
        "duration": "35-60 min",
        "youtubeId": "6erP70R_NGs",
        "videoUrl": "https://www.youtube.com/watch?v=6erP70R_NGs",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 11,
        "title": "Design a Distributed Message Queue - System Design Mock Interview",
        "duration": "35-60 min",
        "youtubeId": "ZwwYgiT9GH0",
        "videoUrl": "https://www.youtube.com/watch?v=ZwwYgiT9GH0",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 14,
        "title": "Design ChatGPT - System Design Mock Interview (with eBay EM)",
        "duration": "35-60 min",
        "youtubeId": "I9-PUPYZyiw",
        "videoUrl": "https://www.youtube.com/watch?v=I9-PUPYZyiw",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 15,
        "title": "Design a Hotel Booking Service - System Design Mock Interview (with eBay EM)",
        "duration": "35-60 min",
        "youtubeId": "kO0EQNfE2x4",
        "videoUrl": "https://www.youtube.com/watch?v=kO0EQNfE2x4",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 19,
        "title": "System Design Mock Interview: Design Uber Eats (with eBay EM)",
        "duration": "35-60 min",
        "youtubeId": "_aybyMlU7-E",
        "videoUrl": "https://www.youtube.com/watch?v=_aybyMlU7-E",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 24,
        "title": "System Design Mock Interview: Design a Rate Limiter (with Meta Engineering Manager)",
        "duration": "35-60 min",
        "youtubeId": "SgWb6tWx3S8",
        "videoUrl": "https://www.youtube.com/watch?v=SgWb6tWx3S8",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 27,
        "title": "System Design Interview: Design Amazon Kindle Payments",
        "duration": "35-60 min",
        "youtubeId": "til92X5hYAY",
        "videoUrl": "https://www.youtube.com/watch?v=til92X5hYAY",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 28,
        "title": "System Design Interview: Design Amazon Prime Video",
        "duration": "35-60 min",
        "youtubeId": "PuU_0esYyhg",
        "videoUrl": "https://www.youtube.com/watch?v=PuU_0esYyhg",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 30,
        "title": "System Design Mock Interview: Design a Vending Machine",
        "duration": "35-60 min",
        "youtubeId": "D0kDMUgo27c",
        "videoUrl": "https://www.youtube.com/watch?v=D0kDMUgo27c",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 31,
        "title": "Amazon System Design Mock Interview: Design Amazon Prime Video (with Uber Software Engineer)",
        "duration": "35-60 min",
        "youtubeId": "jMRo9QQKja8",
        "videoUrl": "https://www.youtube.com/watch?v=jMRo9QQKja8",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 34,
        "title": "System Design Mock Interview: Design WhatsApp",
        "duration": "35-60 min",
        "youtubeId": "0iyLURrWIgQ",
        "videoUrl": "https://www.youtube.com/watch?v=0iyLURrWIgQ",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 35,
        "title": "Facebook System Design Interview: Design an Analytics Platform (Metrics & Logging)",
        "duration": "35-60 min",
        "youtubeId": "kIcq1_pBQSY",
        "videoUrl": "https://www.youtube.com/watch?v=kIcq1_pBQSY",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 36,
        "title": "Facebook System Design Interview: Design Twitter",
        "duration": "35-60 min",
        "youtubeId": "QF8JNSoJD8E",
        "videoUrl": "https://www.youtube.com/watch?v=QF8JNSoJD8E",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 37,
        "title": "System Design Interview: Design Netflix",
        "duration": "35-60 min",
        "youtubeId": "VvZf7lISfgs",
        "videoUrl": "https://www.youtube.com/watch?v=VvZf7lISfgs",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 38,
        "title": "System Design Interview: Design Calendar Application",
        "duration": "35-60 min",
        "youtubeId": "39eAITqeu7g",
        "videoUrl": "https://www.youtube.com/watch?v=39eAITqeu7g",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 39,
        "title": "Engineering Manager System Design Interview (Wealthfront EM): Design YouTube",
        "duration": "35-60 min",
        "youtubeId": "1xV5WI0OFkg",
        "videoUrl": "https://www.youtube.com/watch?v=1xV5WI0OFkg",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 40,
        "title": "Design Reddit: System Design Mock Interview",
        "duration": "35-60 min",
        "youtubeId": "KYExYE_9nIY",
        "videoUrl": "https://www.youtube.com/watch?v=KYExYE_9nIY",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 41,
        "title": "Amazon System Design Interview: Design Parking Garage",
        "duration": "35-60 min",
        "youtubeId": "NtMvNh0WFVM",
        "videoUrl": "https://www.youtube.com/watch?v=NtMvNh0WFVM",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 42,
        "title": "System Design Mock Interview: Design TikTok ft. Google TPM",
        "duration": "35-60 min",
        "youtubeId": "Z-0g_aJL5Fw",
        "videoUrl": "https://www.youtube.com/watch?v=Z-0g_aJL5Fw",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 43,
        "title": "System Design Mock Interview: Design Facebook Messenger",
        "duration": "35-60 min",
        "youtubeId": "uzeJb7ZjoQ4",
        "videoUrl": "https://www.youtube.com/watch?v=uzeJb7ZjoQ4",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 44,
        "title": "System Design Mock Interview: Design Instagram",
        "duration": "35-60 min",
        "youtubeId": "VJpfO6KdyWE",
        "videoUrl": "https://www.youtube.com/watch?v=VJpfO6KdyWE",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 45,
        "title": "System Design (TPM) Mock Interview: Twitter API",
        "duration": "35-60 min",
        "youtubeId": "k-E4YdEs8qM",
        "videoUrl": "https://www.youtube.com/watch?v=k-E4YdEs8qM",
        "sectionTitle": "Full Mock Interviews",
        "tags": [
          "Full",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 8,
        "title": "Database Replication Explained (in 5 Minutes)",
        "duration": "35-60 min",
        "youtubeId": "bI8Ry6GhMSE",
        "videoUrl": "https://www.youtube.com/watch?v=bI8Ry6GhMSE",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 10,
        "title": "SQL vs. NoSQL Explained (in 4 Minutes)",
        "duration": "35-60 min",
        "youtubeId": "_Ss42Vb1SU4",
        "videoUrl": "https://www.youtube.com/watch?v=_Ss42Vb1SU4",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 12,
        "title": "APIs Explained (in 4 Minutes)",
        "duration": "35-60 min",
        "youtubeId": "bxuYDT-BWaI",
        "videoUrl": "https://www.youtube.com/watch?v=bxuYDT-BWaI",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 16,
        "title": "The Basics of Cloud Architecture",
        "duration": "35-60 min",
        "youtubeId": "IG3fsRmujqA",
        "videoUrl": "https://www.youtube.com/watch?v=IG3fsRmujqA",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 17,
        "title": "The Basics of Database Sharding and Partitioning in System Design",
        "duration": "35-60 min",
        "youtubeId": "be6PLMKKSto",
        "videoUrl": "https://www.youtube.com/watch?v=be6PLMKKSto",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 18,
        "title": "Load Balancers for System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "chyZRNT7eEo",
        "videoUrl": "https://www.youtube.com/watch?v=chyZRNT7eEo",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 20,
        "title": "How Does Encryption Work?",
        "duration": "35-60 min",
        "youtubeId": "sPJmIeHpWd4",
        "videoUrl": "https://www.youtube.com/watch?v=sPJmIeHpWd4",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 37,
        "index": 21,
        "title": "CDNs in High-Performance System Design",
        "duration": "35-60 min",
        "youtubeId": "rwBv7FqZ77g",
        "videoUrl": "https://www.youtube.com/watch?v=rwBv7FqZ77g",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 38,
        "index": 22,
        "title": "Database Caching for System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "6GY1akbxyEo",
        "videoUrl": "https://www.youtube.com/watch?v=6GY1akbxyEo",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 39,
        "index": 23,
        "title": "How Do Computers Handle Memory Management?",
        "duration": "35-60 min",
        "youtubeId": "FLZc4xH4E8U",
        "videoUrl": "https://www.youtube.com/watch?v=FLZc4xH4E8U",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 40,
        "index": 25,
        "title": "CAP Theorem for System Design Interviews",
        "duration": "35-60 min",
        "youtubeId": "BTKBS_GdSms",
        "videoUrl": "https://www.youtube.com/watch?v=BTKBS_GdSms",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 41,
        "index": 26,
        "title": "Cloud Engineering Interview Questions and Concepts",
        "duration": "35-60 min",
        "youtubeId": "dZ1nb1Temoo",
        "videoUrl": "https://www.youtube.com/watch?v=dZ1nb1Temoo",
        "sectionTitle": "Core Concepts & Architecture",
        "tags": [
          "Core",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=cloud-engineering-interview-questions-and-concepts"
      },
      {
        "id": 42,
        "index": 13,
        "title": "How to Answer System Design Interview Questions (Complete Guide)",
        "duration": "35-60 min",
        "youtubeId": "L9TfZdODuFQ",
        "videoUrl": "https://www.youtube.com/watch?v=L9TfZdODuFQ",
        "sectionTitle": "Interview Preparation Guides",
        "tags": [
          "Interview",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=how-to-answer-system-design-interview-questions-complete-guide"
      },
      {
        "id": 43,
        "index": 29,
        "title": "How to Whiteboard for System Design Interviews | Tips & Tricks",
        "duration": "35-60 min",
        "youtubeId": "Qo5990LViI4",
        "videoUrl": "https://www.youtube.com/watch?v=Qo5990LViI4",
        "sectionTitle": "Interview Preparation Guides",
        "tags": [
          "Interview",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 44,
        "index": 33,
        "title": "10 System Design Interview Questions You're Likely to be Asked (and How to Answer Them)",
        "duration": "35-60 min",
        "youtubeId": "gGpbLAGzSLA",
        "videoUrl": "https://www.youtube.com/watch?v=gGpbLAGzSLA",
        "sectionTitle": "Interview Preparation Guides",
        "tags": [
          "Interview",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=10-system-design-interview-questions-you-re-likely-to-be-asked-and-how-to-answer-them"
      }
    ]
  },
  {
    "slug": "code-with-aryan-system-design-playlist",
    "title": "codeWithAryan Low Level Design + MultiThreading System Design Interview Preparation",
    "category": "system-design",
    "instructor": "codeWithAryan",
    "channel": "codeWithAryan",
    "totalVideos": 36,
    "totalDuration": "30+ hrs",
    "rating": 4.9,
    "badge": "LLD & Design Patterns",
    "description": "A comprehensive course focusing on Low-Level Design (LLD) principles, common design patterns, and deep dives into Multithreading and Concurrency in Java.",
    "playlistUrl": "https://www.youtube.com/playlist?list=PL6W8uoQQ2c61X_mt44-6554E-A_7i8S",
    "thumbnailType": "system-design",
    "sections": [
      {
        "title": "LLD Fundamentals & Principles",
        "videosCount": 3,
        "videos": [
          {
            "id": 1,
            "index": 1,
            "title": "Introduction to LLD | How to Approach LLD Problems in an Interview \ud83d\udd25",
            "duration": "35-60 min",
            "youtubeId": "xMNSTBGoGbU",
            "videoUrl": "https://www.youtube.com/watch?v=xMNSTBGoGbU",
            "sectionTitle": "LLD Fundamentals & Principles",
            "tags": [
              "LLD",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=introduction-to-lld-how-to-approach-lld-problems-in-an-interview"
          },
          {
            "id": 2,
            "index": 2,
            "title": "Master OOPS in Record Time \ud83d\udd70\ufe0f | OOPS Interview Questions \ud83d\udd25",
            "duration": "35-60 min",
            "youtubeId": "XPCG24lEGTo",
            "videoUrl": "https://www.youtube.com/watch?v=XPCG24lEGTo",
            "sectionTitle": "LLD Fundamentals & Principles",
            "tags": [
              "LLD",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": "https://leetcode.com/problemset/all/?search=master-oops-in-record-time-oops-interview-questions"
          },
          {
            "id": 3,
            "index": 3,
            "title": "Design Principles | SOLID | DRY | KISS | YAGNI \ud83d\udd25",
            "duration": "35-60 min",
            "youtubeId": "uxe_0RFgT7A",
            "videoUrl": "https://www.youtube.com/watch?v=uxe_0RFgT7A",
            "sectionTitle": "LLD Fundamentals & Principles",
            "tags": [
              "LLD",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Creational Design Patterns",
        "videosCount": 6,
        "videos": [
          {
            "id": 4,
            "index": 4,
            "title": "Become a MASTER Developer by using Creational Design Pattern \ud83e\udd1d",
            "duration": "35-60 min",
            "youtubeId": "GDWg5yvWlu4",
            "videoUrl": "https://www.youtube.com/watch?v=GDWg5yvWlu4",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 5,
            "index": 5,
            "title": "Factory Design Pattern in Java \ud83c\udfed | Simplify Object Creation with a Centralized Factory Method\ud83d\ude80",
            "duration": "35-60 min",
            "youtubeId": "qP-0MQOSxrc",
            "videoUrl": "https://www.youtube.com/watch?v=qP-0MQOSxrc",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 6,
            "index": 6,
            "title": "Abstract Factory Pattern in Java \ud83c\udfed | Scalable & Flexible Object Creation Explained! \ud83d\ude80",
            "duration": "35-60 min",
            "youtubeId": "or1wpvH2Yps",
            "videoUrl": "https://www.youtube.com/watch?v=or1wpvH2Yps",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 7,
            "index": 7,
            "title": "Builder Design Pattern in Java \ud83d\udd28 | Create Flexible & Scalable Objects | Step-by-Step Guide with Code",
            "duration": "35-60 min",
            "youtubeId": "j-U1xJ_PaDs",
            "videoUrl": "https://www.youtube.com/watch?v=j-U1xJ_PaDs",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 8,
            "index": 8,
            "title": "Singleton Design Pattern in Java \ud83d\udd01 | Efficient & Thread-Safe Object Creation Explained\ud83d\ude80",
            "duration": "35-60 min",
            "youtubeId": "1HCUDQTQrC0",
            "videoUrl": "https://www.youtube.com/watch?v=1HCUDQTQrC0",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 9,
            "index": 9,
            "title": "Prototype Design Pattern in Java \ud83c\udfad | Efficient Object Cloning Explained | Shallow vs Deep Copy \ud83d\ude80",
            "duration": "35-60 min",
            "youtubeId": "ECPEWMIvRKQ",
            "videoUrl": "https://www.youtube.com/watch?v=ECPEWMIvRKQ",
            "sectionTitle": "Creational Design Patterns",
            "tags": [
              "Creational",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Behavioral & Structural Design Patterns",
        "videosCount": 12,
        "videos": [
          {
            "id": 10,
            "index": 10,
            "title": "Master Behavioral Design Patterns | \ud83d\udd0d Overview for System Design Interviews \ud83c\udfaf",
            "duration": "35-60 min",
            "youtubeId": "J43PRo7VVnc",
            "videoUrl": "https://www.youtube.com/watch?v=J43PRo7VVnc",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 11,
            "index": 11,
            "title": "Strategy Pattern Guide \u2699\ufe0f| Pick the Best Algorithm Dynamically \ud83d\ude80",
            "duration": "35-60 min",
            "youtubeId": "AcY2GWHCe7k",
            "videoUrl": "https://www.youtube.com/watch?v=AcY2GWHCe7k",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 12,
            "index": 12,
            "title": "Observer Pattern Simplified \ud83d\udc40 | Real-World Examples + Best Practices \ud83d\udcda",
            "duration": "35-60 min",
            "youtubeId": "oCKv6jE62-o",
            "videoUrl": "https://www.youtube.com/watch?v=oCKv6jE62-o",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 13,
            "index": 13,
            "title": "Iterator Pattern Tutorial \ud83d\udd04 | Iterate Collections Like a Pro \u2b50",
            "duration": "35-60 min",
            "youtubeId": "UrxdNL94Xfc",
            "videoUrl": "https://www.youtube.com/watch?v=UrxdNL94Xfc",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 14,
            "index": 14,
            "title": "Command Pattern Explained \ud83e\udde0 | Structure Actions for Cleaner Code \u2705",
            "duration": "35-60 min",
            "youtubeId": "yrD80SnWm5o",
            "videoUrl": "https://www.youtube.com/watch?v=yrD80SnWm5o",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 15,
            "index": 15,
            "title": "Mediator Design Pattern: \ud83c\udfd7\ufe0f Reduce Complexity & \ud83d\udd04 Improve Communication Between Objects \ud83e\udde9",
            "duration": "35-60 min",
            "youtubeId": "hq0bTdBfc84",
            "videoUrl": "https://www.youtube.com/watch?v=hq0bTdBfc84",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 16,
            "index": 16,
            "title": "Structural Design Patterns: \ud83c\udfd7\ufe0f Everything You Need to Know \ud83d\udcd6",
            "duration": "35-60 min",
            "youtubeId": "uQMiEP52YIg",
            "videoUrl": "https://www.youtube.com/watch?v=uQMiEP52YIg",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 17,
            "index": 17,
            "title": "Facade Design Pattern: \ud83c\udfe0 Easy Guide for Beginners \ud83d\udcd6 with Examples \ud83d\udca1",
            "duration": "35-60 min",
            "youtubeId": "MjqEq0-v3KF",
            "videoUrl": "https://www.youtube.com/watch?v=MjqEq0-v3KFo",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 18,
            "index": 18,
            "title": "Chain of Responsibility Pattern: \ud83d\udd17 Improve Code Flexibility \u267b\ufe0f & Maintainability \ud83d\udee0\ufe0f",
            "duration": "35-60 min",
            "youtubeId": "SYulyXp5zKs",
            "videoUrl": "https://www.youtube.com/watch?v=SYulyXp5zKs",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 19,
            "index": 19,
            "title": "Visitor Design Pattern Explained: \ud83d\udc68\u200d\ud83c\udfeb Best Practices \u2705 & Real-World Examples \ud83c\udf0d",
            "duration": "35-60 min",
            "youtubeId": "MvwkgjHe5Ic",
            "videoUrl": "https://www.youtube.com/watch?v=MvwkgjHe5Ic",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 20,
            "index": 20,
            "title": "Memento Design Pattern Explained: \ud83d\udcdd Preserve Object State \ud83d\udcbe & Undo Changes \ud83d\udd04",
            "duration": "35-60 min",
            "youtubeId": "WxKrJFYPK-A",
            "videoUrl": "https://www.youtube.com/watch?v=WxKrJFYPK-A",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 21,
            "index": 21,
            "title": "Bridge Design Pattern in Software Development: \ud83c\udf09 A Complete Guide \ud83d\udcd6",
            "duration": "35-60 min",
            "youtubeId": "ahrT6J_faX8",
            "videoUrl": "https://www.youtube.com/watch?v=ahrT6J_faX8",
            "sectionTitle": "Behavioral & Structural Design Patterns",
            "tags": [
              "Behavioral",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Real-World LLD Implementation Projects",
        "videosCount": 14,
        "videos": [
          {
            "id": 22,
            "index": 25,
            "title": "Decorator Design Pattern Simplified: \ud83c\udfa8 How & When to Use It \u2705",
            "duration": "35-60 min",
            "youtubeId": "dgww0AiHAY0",
            "videoUrl": "https://www.youtube.com/watch?v=dgww0AiHAY0",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 23,
            "index": 29,
            "title": "\u2705 Complete Tic-Tac-Toe System Design & Low Level Design | Full Explanation + Code",
            "duration": "35-60 min",
            "youtubeId": "0-TIqvK6sh8",
            "videoUrl": "https://www.youtube.com/watch?v=0-TIqvK6sh8",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 24,
            "index": 31,
            "title": "Build Splitwise Clone | Expense Splitting App | System Design",
            "duration": "35-60 min",
            "youtubeId": "cWtBZUAQpcc",
            "videoUrl": "https://www.youtube.com/watch?v=cWtBZUAQpcc",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 25,
            "index": 32,
            "title": "State Design Pattern | Build Vending Machine (UML & Code) | System Design",
            "duration": "35-60 min",
            "youtubeId": "bJPmvie_p4w",
            "videoUrl": "https://www.youtube.com/watch?v=bJPmvie_p4w",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 26,
            "index": 33,
            "title": "Build Tic Tac Toe Game | UML + Code | System Design",
            "duration": "35-60 min",
            "youtubeId": "BGFzYjGtRP4",
            "videoUrl": "https://www.youtube.com/watch?v=BGFzYjGtRP4",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 27,
            "index": 34,
            "title": "Build Snake and Ladder Game | UML + Code | System Design",
            "duration": "35-60 min",
            "youtubeId": "1NJB54UB8nE",
            "videoUrl": "https://www.youtube.com/watch?v=1NJB54UB8nE",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 28,
            "index": 35,
            "title": "\ud83d\udc0d Snake and Food Game System Design + Low Level Design | Full Explanation + Code",
            "duration": "35-60 min",
            "youtubeId": "3lGIICzgyQQ",
            "videoUrl": "https://www.youtube.com/watch?v=3lGIICzgyQQ",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 29,
            "index": 36,
            "title": "\ud83d\ude80 Vending Machine System Design \u2013 LLD for Interviews & Projects \ud83e\uddd1\u200d\ud83d\udcbb",
            "duration": "35-60 min",
            "youtubeId": "cMVSM4_2f0Y",
            "videoUrl": "https://www.youtube.com/watch?v=cMVSM4_2f0Y",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 30,
            "index": 37,
            "title": "Build Chess Game | UML + Code | System Design",
            "duration": "35-60 min",
            "youtubeId": "eULHvaMZUks",
            "videoUrl": "https://www.youtube.com/watch?v=eULHvaMZUks",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 31,
            "index": 38,
            "title": "Visitor Design Pattern | UML + Code | System Design",
            "duration": "35-60 min",
            "youtubeId": "DnmsxnlCyl0",
            "videoUrl": "https://www.youtube.com/watch?v=DnmsxnlCyl0",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 32,
            "index": 39,
            "title": "Memento Design Pattern | UML + Code | System Design",
            "duration": "35-60 min",
            "youtubeId": "p8-ile_nWnY",
            "videoUrl": "https://www.youtube.com/watch?v=p8-ile_nWnY",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 33,
            "index": 42,
            "title": "Design [ANY] Booking System \ud83c\udf9f\ufe0f | LLD + Multithreading \ud83e\uddf5 | Movie Ticket Booking System \ud83c\udfac",
            "duration": "35-60 min",
            "youtubeId": "dX5iHM2jlZw",
            "videoUrl": "https://www.youtube.com/watch?v=dX5iHM2jlZw",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 34,
            "index": 43,
            "title": "Low Level design of Cache \ud83d\udcbf | LLD + Multithreading | Write Policies + Eviction Policies ...\ud83d\udd25",
            "duration": "35-60 min",
            "youtubeId": "8qcxn7eJdw4",
            "videoUrl": "https://www.youtube.com/watch?v=8qcxn7eJdw4",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          },
          {
            "id": 35,
            "index": 44,
            "title": "Design Pub-Sub Model like Kafka \ud83e\ude88 | LLD + Multithreading \ud83e\uddf5 | Concurrent Subscription",
            "duration": "35-60 min",
            "youtubeId": "_7Ft2GzR2tY",
            "videoUrl": "https://www.youtube.com/watch?v=_7Ft2GzR2tY",
            "sectionTitle": "Real-World LLD Implementation Projects",
            "tags": [
              "Real-World",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      },
      {
        "title": "Concurrency & Multithreading",
        "videosCount": 1,
        "videos": [
          {
            "id": 36,
            "index": 41,
            "title": "\ud83e\uddf5 Concurrency & Multithreading COMPLETE Crash Course | All you need to know for any LLD Rounds \u203c\ufe0f",
            "duration": "35-60 min",
            "youtubeId": "Rot2QnaUqBU",
            "videoUrl": "https://www.youtube.com/watch?v=Rot2QnaUqBU",
            "sectionTitle": "Concurrency & Multithreading",
            "tags": [
              "Concurrency",
              "SYSTEM-DESIGN"
            ],
            "problemUrl": null
          }
        ]
      }
    ],
    "lectures": [
      {
        "id": 1,
        "index": 1,
        "title": "Introduction to LLD | How to Approach LLD Problems in an Interview \ud83d\udd25",
        "duration": "35-60 min",
        "youtubeId": "xMNSTBGoGbU",
        "videoUrl": "https://www.youtube.com/watch?v=xMNSTBGoGbU",
        "sectionTitle": "LLD Fundamentals & Principles",
        "tags": [
          "LLD",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=introduction-to-lld-how-to-approach-lld-problems-in-an-interview"
      },
      {
        "id": 2,
        "index": 2,
        "title": "Master OOPS in Record Time \ud83d\udd70\ufe0f | OOPS Interview Questions \ud83d\udd25",
        "duration": "35-60 min",
        "youtubeId": "XPCG24lEGTo",
        "videoUrl": "https://www.youtube.com/watch?v=XPCG24lEGTo",
        "sectionTitle": "LLD Fundamentals & Principles",
        "tags": [
          "LLD",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": "https://leetcode.com/problemset/all/?search=master-oops-in-record-time-oops-interview-questions"
      },
      {
        "id": 3,
        "index": 3,
        "title": "Design Principles | SOLID | DRY | KISS | YAGNI \ud83d\udd25",
        "duration": "35-60 min",
        "youtubeId": "uxe_0RFgT7A",
        "videoUrl": "https://www.youtube.com/watch?v=uxe_0RFgT7A",
        "sectionTitle": "LLD Fundamentals & Principles",
        "tags": [
          "LLD",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 4,
        "index": 4,
        "title": "Become a MASTER Developer by using Creational Design Pattern \ud83e\udd1d",
        "duration": "35-60 min",
        "youtubeId": "GDWg5yvWlu4",
        "videoUrl": "https://www.youtube.com/watch?v=GDWg5yvWlu4",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 5,
        "index": 5,
        "title": "Factory Design Pattern in Java \ud83c\udfed | Simplify Object Creation with a Centralized Factory Method\ud83d\ude80",
        "duration": "35-60 min",
        "youtubeId": "qP-0MQOSxrc",
        "videoUrl": "https://www.youtube.com/watch?v=qP-0MQOSxrc",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 6,
        "index": 6,
        "title": "Abstract Factory Pattern in Java \ud83c\udfed | Scalable & Flexible Object Creation Explained! \ud83d\ude80",
        "duration": "35-60 min",
        "youtubeId": "or1wpvH2Yps",
        "videoUrl": "https://www.youtube.com/watch?v=or1wpvH2Yps",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 7,
        "index": 7,
        "title": "Builder Design Pattern in Java \ud83d\udd28 | Create Flexible & Scalable Objects | Step-by-Step Guide with Code",
        "duration": "35-60 min",
        "youtubeId": "j-U1xJ_PaDs",
        "videoUrl": "https://www.youtube.com/watch?v=j-U1xJ_PaDs",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 8,
        "index": 8,
        "title": "Singleton Design Pattern in Java \ud83d\udd01 | Efficient & Thread-Safe Object Creation Explained\ud83d\ude80",
        "duration": "35-60 min",
        "youtubeId": "1HCUDQTQrC0",
        "videoUrl": "https://www.youtube.com/watch?v=1HCUDQTQrC0",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 9,
        "index": 9,
        "title": "Prototype Design Pattern in Java \ud83c\udfad | Efficient Object Cloning Explained | Shallow vs Deep Copy \ud83d\ude80",
        "duration": "35-60 min",
        "youtubeId": "ECPEWMIvRKQ",
        "videoUrl": "https://www.youtube.com/watch?v=ECPEWMIvRKQ",
        "sectionTitle": "Creational Design Patterns",
        "tags": [
          "Creational",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 10,
        "index": 10,
        "title": "Master Behavioral Design Patterns | \ud83d\udd0d Overview for System Design Interviews \ud83c\udfaf",
        "duration": "35-60 min",
        "youtubeId": "J43PRo7VVnc",
        "videoUrl": "https://www.youtube.com/watch?v=J43PRo7VVnc",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 11,
        "index": 11,
        "title": "Strategy Pattern Guide \u2699\ufe0f| Pick the Best Algorithm Dynamically \ud83d\ude80",
        "duration": "35-60 min",
        "youtubeId": "AcY2GWHCe7k",
        "videoUrl": "https://www.youtube.com/watch?v=AcY2GWHCe7k",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 12,
        "index": 12,
        "title": "Observer Pattern Simplified \ud83d\udc40 | Real-World Examples + Best Practices \ud83d\udcda",
        "duration": "35-60 min",
        "youtubeId": "oCKv6jE62-o",
        "videoUrl": "https://www.youtube.com/watch?v=oCKv6jE62-o",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 13,
        "index": 13,
        "title": "Iterator Pattern Tutorial \ud83d\udd04 | Iterate Collections Like a Pro \u2b50",
        "duration": "35-60 min",
        "youtubeId": "UrxdNL94Xfc",
        "videoUrl": "https://www.youtube.com/watch?v=UrxdNL94Xfc",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 14,
        "index": 14,
        "title": "Command Pattern Explained \ud83e\udde0 | Structure Actions for Cleaner Code \u2705",
        "duration": "35-60 min",
        "youtubeId": "yrD80SnWm5o",
        "videoUrl": "https://www.youtube.com/watch?v=yrD80SnWm5o",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 15,
        "index": 15,
        "title": "Mediator Design Pattern: \ud83c\udfd7\ufe0f Reduce Complexity & \ud83d\udd04 Improve Communication Between Objects \ud83e\udde9",
        "duration": "35-60 min",
        "youtubeId": "hq0bTdBfc84",
        "videoUrl": "https://www.youtube.com/watch?v=hq0bTdBfc84",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 16,
        "index": 16,
        "title": "Structural Design Patterns: \ud83c\udfd7\ufe0f Everything You Need to Know \ud83d\udcd6",
        "duration": "35-60 min",
        "youtubeId": "uQMiEP52YIg",
        "videoUrl": "https://www.youtube.com/watch?v=uQMiEP52YIg",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 17,
        "index": 17,
        "title": "Facade Design Pattern: \ud83c\udfe0 Easy Guide for Beginners \ud83d\udcd6 with Examples \ud83d\udca1",
        "duration": "35-60 min",
        "youtubeId": "MjqEq0-v3KF",
        "videoUrl": "https://www.youtube.com/watch?v=MjqEq0-v3KFo",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 18,
        "index": 18,
        "title": "Chain of Responsibility Pattern: \ud83d\udd17 Improve Code Flexibility \u267b\ufe0f & Maintainability \ud83d\udee0\ufe0f",
        "duration": "35-60 min",
        "youtubeId": "SYulyXp5zKs",
        "videoUrl": "https://www.youtube.com/watch?v=SYulyXp5zKs",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 19,
        "index": 19,
        "title": "Visitor Design Pattern Explained: \ud83d\udc68\u200d\ud83c\udfeb Best Practices \u2705 & Real-World Examples \ud83c\udf0d",
        "duration": "35-60 min",
        "youtubeId": "MvwkgjHe5Ic",
        "videoUrl": "https://www.youtube.com/watch?v=MvwkgjHe5Ic",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 20,
        "index": 20,
        "title": "Memento Design Pattern Explained: \ud83d\udcdd Preserve Object State \ud83d\udcbe & Undo Changes \ud83d\udd04",
        "duration": "35-60 min",
        "youtubeId": "WxKrJFYPK-A",
        "videoUrl": "https://www.youtube.com/watch?v=WxKrJFYPK-A",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 21,
        "index": 21,
        "title": "Bridge Design Pattern in Software Development: \ud83c\udf09 A Complete Guide \ud83d\udcd6",
        "duration": "35-60 min",
        "youtubeId": "ahrT6J_faX8",
        "videoUrl": "https://www.youtube.com/watch?v=ahrT6J_faX8",
        "sectionTitle": "Behavioral & Structural Design Patterns",
        "tags": [
          "Behavioral",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 22,
        "index": 25,
        "title": "Decorator Design Pattern Simplified: \ud83c\udfa8 How & When to Use It \u2705",
        "duration": "35-60 min",
        "youtubeId": "dgww0AiHAY0",
        "videoUrl": "https://www.youtube.com/watch?v=dgww0AiHAY0",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 23,
        "index": 29,
        "title": "\u2705 Complete Tic-Tac-Toe System Design & Low Level Design | Full Explanation + Code",
        "duration": "35-60 min",
        "youtubeId": "0-TIqvK6sh8",
        "videoUrl": "https://www.youtube.com/watch?v=0-TIqvK6sh8",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 24,
        "index": 31,
        "title": "Build Splitwise Clone | Expense Splitting App | System Design",
        "duration": "35-60 min",
        "youtubeId": "cWtBZUAQpcc",
        "videoUrl": "https://www.youtube.com/watch?v=cWtBZUAQpcc",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 25,
        "index": 32,
        "title": "State Design Pattern | Build Vending Machine (UML & Code) | System Design",
        "duration": "35-60 min",
        "youtubeId": "bJPmvie_p4w",
        "videoUrl": "https://www.youtube.com/watch?v=bJPmvie_p4w",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 26,
        "index": 33,
        "title": "Build Tic Tac Toe Game | UML + Code | System Design",
        "duration": "35-60 min",
        "youtubeId": "BGFzYjGtRP4",
        "videoUrl": "https://www.youtube.com/watch?v=BGFzYjGtRP4",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 27,
        "index": 34,
        "title": "Build Snake and Ladder Game | UML + Code | System Design",
        "duration": "35-60 min",
        "youtubeId": "1NJB54UB8nE",
        "videoUrl": "https://www.youtube.com/watch?v=1NJB54UB8nE",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 28,
        "index": 35,
        "title": "\ud83d\udc0d Snake and Food Game System Design + Low Level Design | Full Explanation + Code",
        "duration": "35-60 min",
        "youtubeId": "3lGIICzgyQQ",
        "videoUrl": "https://www.youtube.com/watch?v=3lGIICzgyQQ",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 29,
        "index": 36,
        "title": "\ud83d\ude80 Vending Machine System Design \u2013 LLD for Interviews & Projects \ud83e\uddd1\u200d\ud83d\udcbb",
        "duration": "35-60 min",
        "youtubeId": "cMVSM4_2f0Y",
        "videoUrl": "https://www.youtube.com/watch?v=cMVSM4_2f0Y",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 30,
        "index": 37,
        "title": "Build Chess Game | UML + Code | System Design",
        "duration": "35-60 min",
        "youtubeId": "eULHvaMZUks",
        "videoUrl": "https://www.youtube.com/watch?v=eULHvaMZUks",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 31,
        "index": 38,
        "title": "Visitor Design Pattern | UML + Code | System Design",
        "duration": "35-60 min",
        "youtubeId": "DnmsxnlCyl0",
        "videoUrl": "https://www.youtube.com/watch?v=DnmsxnlCyl0",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 32,
        "index": 39,
        "title": "Memento Design Pattern | UML + Code | System Design",
        "duration": "35-60 min",
        "youtubeId": "p8-ile_nWnY",
        "videoUrl": "https://www.youtube.com/watch?v=p8-ile_nWnY",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 33,
        "index": 42,
        "title": "Design [ANY] Booking System \ud83c\udf9f\ufe0f | LLD + Multithreading \ud83e\uddf5 | Movie Ticket Booking System \ud83c\udfac",
        "duration": "35-60 min",
        "youtubeId": "dX5iHM2jlZw",
        "videoUrl": "https://www.youtube.com/watch?v=dX5iHM2jlZw",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 34,
        "index": 43,
        "title": "Low Level design of Cache \ud83d\udcbf | LLD + Multithreading | Write Policies + Eviction Policies ...\ud83d\udd25",
        "duration": "35-60 min",
        "youtubeId": "8qcxn7eJdw4",
        "videoUrl": "https://www.youtube.com/watch?v=8qcxn7eJdw4",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 35,
        "index": 44,
        "title": "Design Pub-Sub Model like Kafka \ud83e\ude88 | LLD + Multithreading \ud83e\uddf5 | Concurrent Subscription",
        "duration": "35-60 min",
        "youtubeId": "_7Ft2GzR2tY",
        "videoUrl": "https://www.youtube.com/watch?v=_7Ft2GzR2tY",
        "sectionTitle": "Real-World LLD Implementation Projects",
        "tags": [
          "Real-World",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      },
      {
        "id": 36,
        "index": 41,
        "title": "\ud83e\uddf5 Concurrency & Multithreading COMPLETE Crash Course | All you need to know for any LLD Rounds \u203c\ufe0f",
        "duration": "35-60 min",
        "youtubeId": "Rot2QnaUqBU",
        "videoUrl": "https://www.youtube.com/watch?v=Rot2QnaUqBU",
        "sectionTitle": "Concurrency & Multithreading",
        "tags": [
          "Concurrency",
          "SYSTEM-DESIGN"
        ],
        "problemUrl": null
      }
    ]
  }
];


// Helper to find a playlist by slug (supporting both with or without -playlist, -oop, -oops suffix)
export const findHyntsPlaylist = (slug: string): HyntsPlaylist | undefined => {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim().replace(/[/]/g, '');
  const withoutSuffix = normalized.replace(/-(playlist|playlists)$/, '');
  const withSuffix = withoutSuffix + '-playlist';

  // 1. Direct exact or with/without playlist suffix
  const exact = hyntsPlaylists.find(
    (p) =>
      p.slug.toLowerCase() === normalized ||
      p.slug.toLowerCase() === withoutSuffix ||
      p.slug.toLowerCase() === withSuffix ||
      p.slug.toLowerCase().replace(/-playlist$/, '') === withoutSuffix
  );
  if (exact) return exact;

  // 2. Normalize oops / oop variants
  const cleanedQuery = withoutSuffix.replace(/-oops?$/, '');
  const variant = hyntsPlaylists.find((p) => {
    const pClean = p.slug.toLowerCase().replace(/-playlist$/, '').replace(/-oops?$/, '');
    return pClean === cleanedQuery || pClean.includes(cleanedQuery) || cleanedQuery.includes(pClean);
  });
  if (variant) return variant;

  // 3. Keyword matching (e.g. 'love-babbar' + 'dsa', 'rohit-negi' + 'dsa')
  return hyntsPlaylists.find((p) => {
    const pSlug = p.slug.toLowerCase();
    if (normalized.includes('love-babbar') && normalized.includes('dsa') && pSlug.includes('love-babbar') && pSlug.includes('dsa')) return true;
    if (normalized.includes('shradha-khapra') && pSlug.includes('shradha-khapra')) return true;
    if (normalized.includes('rohit-negi') && normalized.includes('dsa') && pSlug.includes('rohit-negi') && pSlug.includes('dsa')) return true;
    if (normalized.includes('love-babbar') && normalized.includes('dbms') && pSlug.includes('love-babbar') && pSlug.includes('dbms')) return true;
    if (normalized.includes('riti-kumari') && normalized.includes('dbms') && pSlug.includes('riti-kumari') && pSlug.includes('dbms')) return true;
    if (normalized.includes('love-babbar') && normalized.includes('os') && pSlug.includes('love-babbar') && pSlug.includes('os')) return true;
    if (normalized.includes('neso-academy') && pSlug.includes('neso-academy')) return true;
    if (normalized.includes('code-with-harry') && pSlug.includes('code-with-harry')) return true;
    if (normalized.includes('hello-interview') && pSlug.includes('hello-interview')) return true;
    if (normalized.includes('exponent') && pSlug.includes('exponent')) return true;
    if (normalized.includes('code-with-aryan') && pSlug.includes('code-with-aryan')) return true;
    return false;
  });
};
