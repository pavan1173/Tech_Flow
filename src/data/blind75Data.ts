export interface Blind75Problem {
  id: string;
  title: string;
  tag?: 'Basic' | 'Core' | 'Advanced';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  leetcodeUrl: string;
  gfgUrl?: string;
  tufUrl?: string;
  youtubeUrl?: string;
  articleUrl?: string;
}

export interface Blind75Topic {
  topicName: string;
  problems: Blind75Problem[];
}

export const blind75Topics: Blind75Topic[] = [
  {
    topicName: "Array",
    problems: [
      {
        id: "b75-1",
        title: "Two Sum",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/two-sum/",
        gfgUrl: "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/",
        tufUrl: "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=UXDSeD9mN-k",
        articleUrl: "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/"
      },
      {
        id: "b75-2",
        title: "Best time to buy and sell stock",
        tag: "Core",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        gfgUrl: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
        tufUrl: "https://takeuforward.org/data-structure/stock-buy-and-sell/",
        youtubeUrl: "https://www.youtube.com/watch?v=excAOvwF_Wk",
        articleUrl: "https://takeuforward.org/data-structure/stock-buy-and-sell/"
      },
      {
        id: "b75-3",
        title: "Contains Duplicate",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
        gfgUrl: "https://www.geeksforgeeks.org/check-given-array-contains-duplicate-elements-within-k-distance/",
        tufUrl: "https://takeuforward.org/data-structure/contains-duplicate/",
        youtubeUrl: "https://www.youtube.com/watch?v=3OamzN90kPg",
        articleUrl: "https://takeuforward.org/data-structure/contains-duplicate/"
      },
      {
        id: "b75-4",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/",
        gfgUrl: "https://www.geeksforgeeks.org/a-product-array-puzzle/",
        tufUrl: "https://takeuforward.org/arrays/product-of-array-except-self/",
        youtubeUrl: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
        articleUrl: "https://takeuforward.org/arrays/product-of-array-except-self/"
      },
      {
        id: "b75-5",
        title: "Maximum Product Subarray in an Array",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/maximum-product-subarray/",
        gfgUrl: "https://www.geeksforgeeks.org/maximum-product-subarray/",
        tufUrl: "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=hnswaLJvr6g",
        articleUrl: "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/"
      },
      {
        id: "b75-6",
        title: "Find minimum in Rotated Sorted Array",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        gfgUrl: "https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/",
        tufUrl: "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=nhEMDKMB44g",
        articleUrl: "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/"
      },
      {
        id: "b75-7",
        title: "Search in rotated sorted array-I",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        gfgUrl: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
        tufUrl: "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=r3pMQ8-Ad5s",
        articleUrl: "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/"
      },
      {
        id: "b75-8",
        title: "3 Sum",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/3sum/",
        gfgUrl: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/",
        tufUrl: "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
        youtubeUrl: "https://www.youtube.com/watch?v=DhFh8Kw7ymk",
        articleUrl: "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/"
      },
      {
        id: "b75-9",
        title: "Container with most water",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
        gfgUrl: "https://www.geeksforgeeks.org/container-with-most-water/",
        tufUrl: "https://takeuforward.org/data-structure/container-with-most-water/",
        youtubeUrl: "https://www.youtube.com/watch?v=UuiTKBwPgAo",
        articleUrl: "https://takeuforward.org/data-structure/container-with-most-water/"
      }
    ]
  },
  {
    topicName: "Binary",
    problems: [
      {
        id: "b75-10",
        title: "Sum of Two Integers",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/sum-of-two-integers/",
        gfgUrl: "https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/",
        tufUrl: "https://takeuforward.org/data-structure/sum-of-two-integers/",
        youtubeUrl: "https://www.youtube.com/watch?v=gVUrDV4tZfY",
        articleUrl: "https://takeuforward.org/data-structure/sum-of-two-integers/"
      },
      {
        id: "b75-11",
        title: "Number of 1 Bits",
        tag: "Core",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/number-of-1-bits/",
        gfgUrl: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
        tufUrl: "https://takeuforward.org/data-structure/count-set-bits-in-an-integer/",
        youtubeUrl: "https://www.youtube.com/watch?v=5Km3utixwZs",
        articleUrl: "https://takeuforward.org/data-structure/count-set-bits-in-an-integer/"
      },
      {
        id: "b75-12",
        title: "Counting Bits",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/counting-bits/",
        gfgUrl: "https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/",
        tufUrl: "https://takeuforward.org/data-structure/counting-bits/",
        youtubeUrl: "https://www.youtube.com/watch?v=RyBM56P6Rr8",
        articleUrl: "https://takeuforward.org/data-structure/counting-bits/"
      },
      {
        id: "b75-13",
        title: "Missing Number",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/missing-number/",
        gfgUrl: "https://www.geeksforgeeks.org/find-the-missing-number/",
        tufUrl: "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=bYWLJb3vCWY",
        articleUrl: "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/"
      },
      {
        id: "b75-14",
        title: "Reverse Bits",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/reverse-bits/",
        gfgUrl: "https://www.geeksforgeeks.org/write-an-efficient-c-program-to-reverse-bits-of-a-number/",
        tufUrl: "https://takeuforward.org/data-structure/reverse-bits/",
        youtubeUrl: "https://www.youtube.com/watch?v=UcoN6UjAI64",
        articleUrl: "https://takeuforward.org/data-structure/reverse-bits/"
      }
    ]
  },
  {
    topicName: "Dynamic Programming",
    problems: [
      {
        id: "b75-15",
        title: "Climbing Stairs",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
        gfgUrl: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
        tufUrl: "https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/",
        youtubeUrl: "https://www.youtube.com/watch?v=mLfjzJsN8us",
        articleUrl: "https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/"
      },
      {
        id: "b75-16",
        title: "Coin Change",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/coin-change/",
        gfgUrl: "https://www.geeksforgeeks.org/coin-change-dp-7/",
        tufUrl: "https://takeuforward.org/data-structure/coin-change-2-dp-22/",
        youtubeUrl: "https://www.youtube.com/watch?v=myPeWb3Y68A",
        articleUrl: "https://takeuforward.org/data-structure/coin-change-2-dp-22/"
      },
      {
        id: "b75-17",
        title: "Longest Increasing Subsequence",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
        gfgUrl: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
        tufUrl: "https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/",
        youtubeUrl: "https://www.youtube.com/watch?v=ekcwMsSIzVc",
        articleUrl: "https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/"
      },
      {
        id: "b75-18",
        title: "Longest Common Subsequence",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/",
        gfgUrl: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
        tufUrl: "https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/",
        youtubeUrl: "https://www.youtube.com/watch?v=NPZn9jBrX8U",
        articleUrl: "https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/"
      },
      {
        id: "b75-19",
        title: "Word Break",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/word-break/",
        gfgUrl: "https://www.geeksforgeeks.org/word-break-problem-dp-32/",
        tufUrl: "https://takeuforward.org/data-structure/word-break/",
        youtubeUrl: "https://www.youtube.com/watch?v=Sx9NNgInc3A",
        articleUrl: "https://takeuforward.org/data-structure/word-break/"
      },
      {
        id: "b75-20",
        title: "Combination Sum IV",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/combination-sum-iv/",
        gfgUrl: "https://www.geeksforgeeks.org/combination-sum/",
        tufUrl: "https://takeuforward.org/data-structure/combination-sum-iv/",
        youtubeUrl: "https://www.youtube.com/watch?v=dw2nMCxG0fY",
        articleUrl: "https://takeuforward.org/data-structure/combination-sum-iv/"
      },
      {
        id: "b75-21",
        title: "House Robber",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/house-robber/",
        gfgUrl: "https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/",
        tufUrl: "https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/",
        youtubeUrl: "https://www.youtube.com/watch?v=GrMBfJNk_NY",
        articleUrl: "https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/"
      },
      {
        id: "b75-22",
        title: "House Robber II",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/",
        gfgUrl: "https://www.geeksforgeeks.org/maximum-sum-in-circular-array-such-that-no-two-elements-are-adjacent/",
        tufUrl: "https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/",
        youtubeUrl: "https://www.youtube.com/watch?v=3WaxQMELSkw",
        articleUrl: "https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/"
      },
      {
        id: "b75-23",
        title: "Decode Ways",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/decode-ways/",
        gfgUrl: "https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/",
        tufUrl: "https://takeuforward.org/data-structure/decode-ways/",
        youtubeUrl: "https://www.youtube.com/watch?v=6aEyTjOwlJU",
        articleUrl: "https://takeuforward.org/data-structure/decode-ways/"
      },
      {
        id: "b75-24",
        title: "Unique Paths",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/unique-paths/",
        gfgUrl: "https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/",
        tufUrl: "https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/",
        youtubeUrl: "https://www.youtube.com/watch?v=t_f0nwwdg5c",
        articleUrl: "https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/"
      },
      {
        id: "b75-25",
        title: "Jump Game",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/jump-game/",
        gfgUrl: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/",
        tufUrl: "https://takeuforward.org/greedy-algorithm/jump-game-i/",
        youtubeUrl: "https://www.youtube.com/watch?v=tZAa_jJ3SwQ",
        articleUrl: "https://takeuforward.org/greedy-algorithm/jump-game-i/"
      }
    ]
  },
  {
    topicName: "Graph",
    problems: [
      {
        id: "b75-26",
        title: "Clone Graph",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/clone-graph/",
        gfgUrl: "https://www.geeksforgeeks.org/clone-an-undirected-graph/",
        tufUrl: "https://takeuforward.org/data-structure/clone-graph/",
        youtubeUrl: "https://www.youtube.com/watch?v=mQeF6bN8hMk",
        articleUrl: "https://takeuforward.org/data-structure/clone-graph/"
      },
      {
        id: "b75-27",
        title: "Course Schedule",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/course-schedule/",
        gfgUrl: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
        tufUrl: "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/",
        youtubeUrl: "https://www.youtube.com/watch?v=WAOfKpxYHR8",
        articleUrl: "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/"
      },
      {
        id: "b75-28",
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        gfgUrl: "https://www.geeksforgeeks.org/pacific-atlantic-water-flow/",
        tufUrl: "https://takeuforward.org/data-structure/pacific-atlantic-water-flow/",
        youtubeUrl: "https://www.youtube.com/watch?v=s-VkcjHqkGI",
        articleUrl: "https://takeuforward.org/data-structure/pacific-atlantic-water-flow/"
      },
      {
        id: "b75-29",
        title: "Number of Islands",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
        gfgUrl: "https://www.geeksforgeeks.org/find-number-of-islands/",
        tufUrl: "https://takeuforward.org/data-structure/number-of-islands/",
        youtubeUrl: "https://www.youtube.com/watch?v=muncqlKJrH0",
        articleUrl: "https://takeuforward.org/data-structure/number-of-islands/"
      },
      {
        id: "b75-30",
        title: "Longest Consecutive Sequence",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
        gfgUrl: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/",
        tufUrl: "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/",
        youtubeUrl: "https://www.youtube.com/watch?v=oO5uLE7EUlM",
        articleUrl: "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/"
      },
      {
        id: "b75-31",
        title: "Alien Dictionary",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/alien-dictionary/",
        gfgUrl: "https://www.geeksforgeeks.org/given-a-sorted-dictionary-of-an-alien-language-find-order-of-characters/",
        tufUrl: "https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26/",
        youtubeUrl: "https://www.youtube.com/watch?v=U3N_je7tWAs",
        articleUrl: "https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26/"
      },
      {
        id: "b75-32",
        title: "Graph Valid Tree",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/graph-valid-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/check-given-graph-tree/",
        tufUrl: "https://takeuforward.org/data-structure/graph-valid-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=bXsUuownnoQ",
        articleUrl: "https://takeuforward.org/data-structure/graph-valid-tree/"
      }
    ]
  },
  {
    topicName: "Interval",
    problems: [
      {
        id: "b75-33",
        title: "Insert Interval",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/insert-interval/",
        gfgUrl: "https://www.geeksforgeeks.org/insert-in-sorted-and-non-overlapping-interval-array/",
        tufUrl: "https://takeuforward.org/arrays/insert-interval/",
        youtubeUrl: "https://www.youtube.com/watch?v=xxRE-4orche",
        articleUrl: "https://takeuforward.org/arrays/insert-interval/"
      },
      {
        id: "b75-34",
        title: "Merge Intervals",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/merge-intervals/",
        gfgUrl: "https://www.geeksforgeeks.org/merging-intervals/",
        tufUrl: "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/",
        youtubeUrl: "https://www.youtube.com/watch?v=IexN60k62jo",
        articleUrl: "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/"
      },
      {
        id: "b75-35",
        title: "Non-overlapping Intervals",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/non-overlapping-intervals/",
        gfgUrl: "https://www.geeksforgeeks.org/minimum-number-of-intervals-to-remove-to-make-the-rest-non-overlapping/",
        tufUrl: "https://takeuforward.org/greedy-algorithm/non-overlapping-intervals-greedy-algorithm/",
        youtubeUrl: "https://www.youtube.com/watch?v=nONCGxWoUfM",
        articleUrl: "https://takeuforward.org/greedy-algorithm/non-overlapping-intervals-greedy-algorithm/"
      },
      {
        id: "b75-36",
        title: "Meeting Rooms",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/meeting-rooms/",
        gfgUrl: "https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/",
        tufUrl: "https://takeuforward.org/data-structure/meeting-rooms/",
        youtubeUrl: "https://www.youtube.com/watch?v=PaJxqte9610",
        articleUrl: "https://takeuforward.org/data-structure/meeting-rooms/"
      },
      {
        id: "b75-37",
        title: "Meeting Rooms II",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/meeting-rooms-ii/",
        gfgUrl: "https://www.geeksforgeeks.org/minimum-halls-required-for-class-scheduling/",
        tufUrl: "https://takeuforward.org/data-structure/meeting-rooms-ii/",
        youtubeUrl: "https://www.youtube.com/watch?v=FdzJmTCVyJU",
        articleUrl: "https://takeuforward.org/data-structure/meeting-rooms-ii/"
      },
      {
        id: "b75-38",
        title: "Erase Overlap Intervals",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/non-overlapping-intervals/",
        gfgUrl: "https://www.geeksforgeeks.org/non-overlapping-intervals/",
        tufUrl: "https://takeuforward.org/data-structure/erase-overlap-intervals/",
        youtubeUrl: "https://www.youtube.com/watch?v=2J33n3n5J_4",
        articleUrl: "https://takeuforward.org/data-structure/erase-overlap-intervals/"
      }
    ]
  },
  {
    topicName: "Linked List",
    problems: [
      {
        id: "b75-39",
        title: "Reverse a Linked List",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
        gfgUrl: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
        tufUrl: "https://takeuforward.org/data-structure/reverse-a-linked-list/",
        youtubeUrl: "https://www.youtube.com/watch?v=D2t4DRtA7Xw",
        articleUrl: "https://takeuforward.org/data-structure/reverse-a-linked-list/"
      },
      {
        id: "b75-40",
        title: "Detect Loop in Linked List",
        tag: "Core",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
        gfgUrl: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
        tufUrl: "https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/",
        youtubeUrl: "https://www.youtube.com/watch?v=wiOo4DC5GGA",
        articleUrl: "https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/"
      },
      {
        id: "b75-41",
        title: "Merge Two Sorted Lists",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
        gfgUrl: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
        tufUrl: "https://takeuforward.org/data-structure/merge-two-sorted-linked-lists/",
        youtubeUrl: "https://www.youtube.com/watch?v=Xb4slcp1U38",
        articleUrl: "https://takeuforward.org/data-structure/merge-two-sorted-linked-lists/"
      },
      {
        id: "b75-42",
        title: "Merge K Sorted Lists",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
        gfgUrl: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
        tufUrl: "https://takeuforward.org/data-structure/merge-k-sorted-linked-lists/",
        youtubeUrl: "https://www.youtube.com/watch?v=q5a5OiGbT6Q",
        articleUrl: "https://takeuforward.org/data-structure/merge-k-sorted-linked-lists/"
      },
      {
        id: "b75-43",
        title: "Remove Nth Node From End of List",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        gfgUrl: "https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/",
        tufUrl: "https://takeuforward.org/data-structure/remove-nth-node-from-the-back-of-the-linked-list/",
        youtubeUrl: "https://www.youtube.com/watch?v=3kMKYQ2wNiU",
        articleUrl: "https://takeuforward.org/data-structure/remove-nth-node-from-the-back-of-the-linked-list/"
      },
      {
        id: "b75-44",
        title: "Reorder List",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/reorder-list/",
        gfgUrl: "https://www.geeksforgeeks.org/reorder-a-given-linked-list-in-place/",
        tufUrl: "https://takeuforward.org/data-structure/reorder-list/",
        youtubeUrl: "https://www.youtube.com/watch?v=S5bfdUTrKLM",
        articleUrl: "https://takeuforward.org/data-structure/reorder-list/"
      }
    ]
  },
  {
    topicName: "Matrix",
    problems: [
      {
        id: "b75-45",
        title: "Set Matrix Zeroes",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/set-matrix-zeroes/",
        gfgUrl: "https://www.geeksforgeeks.org/a-boolean-matrix-question/",
        tufUrl: "https://takeuforward.org/data-structure/set-matrix-zero/",
        youtubeUrl: "https://www.youtube.com/watch?v=N0MgLvLKf7I",
        articleUrl: "https://takeuforward.org/data-structure/set-matrix-zero/"
      },
      {
        id: "b75-46",
        title: "Spiral Matrix",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/spiral-matrix/",
        gfgUrl: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/",
        tufUrl: "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/",
        youtubeUrl: "https://www.youtube.com/watch?v=3Zv-s9UUrTE",
        articleUrl: "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/"
      },
      {
        id: "b75-47",
        title: "Rotate Image",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/rotate-image/",
        gfgUrl: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
        tufUrl: "https://takeuforward.org/data-structure/rotate-image-by-90-degree/",
        youtubeUrl: "https://www.youtube.com/watch?v=Z0w2ojloZgo",
        articleUrl: "https://takeuforward.org/data-structure/rotate-image-by-90-degree/"
      },
      {
        id: "b75-48",
        title: "Word Search",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/word-search/",
        gfgUrl: "https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/",
        tufUrl: "https://takeuforward.org/data-structure/word-search-leetcode/",
        youtubeUrl: "https://www.youtube.com/watch?v=pfiQ_PS1g8E",
        articleUrl: "https://takeuforward.org/data-structure/word-search-leetcode/"
      }
    ]
  },
  {
    topicName: "String",
    problems: [
      {
        id: "b75-49",
        title: "Longest Substring Without Repeating Characters",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        gfgUrl: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
        tufUrl: "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
        youtubeUrl: "https://www.youtube.com/watch?v=-zSxTJkcdAo",
        articleUrl: "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/"
      },
      {
        id: "b75-50",
        title: "Longest Repeating Character Replacement",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        gfgUrl: "https://www.geeksforgeeks.org/maximum-length-of-substring-with-same-character-after-k-changes/",
        tufUrl: "https://takeuforward.org/data-structure/longest-repeating-character-replacement/",
        youtubeUrl: "https://www.youtube.com/watch?v=_eNhaDCr6P0",
        articleUrl: "https://takeuforward.org/data-structure/longest-repeating-character-replacement/"
      },
      {
        id: "b75-51",
        title: "Minimum Window Substring",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/",
        gfgUrl: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
        tufUrl: "https://takeuforward.org/data-structure/minimum-window-substring/",
        youtubeUrl: "https://www.youtube.com/watch?v=WJaij9ffOIY",
        articleUrl: "https://takeuforward.org/data-structure/minimum-window-substring/"
      },
      {
        id: "b75-52",
        title: "Valid Anagram",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
        gfgUrl: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
        tufUrl: "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/",
        youtubeUrl: "https://www.youtube.com/watch?v=9UtInBqnCgA",
        articleUrl: "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/"
      },
      {
        id: "b75-53",
        title: "Group Anagrams",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
        gfgUrl: "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/",
        tufUrl: "https://takeuforward.org/data-structure/group-anagrams/",
        youtubeUrl: "https://www.youtube.com/watch?v=vzdNOK2oDA4",
        articleUrl: "https://takeuforward.org/data-structure/group-anagrams/"
      },
      {
        id: "b75-54",
        title: "Valid Parentheses",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
        gfgUrl: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
        tufUrl: "https://takeuforward.org/data-structure/check-for-balanced-parentheses/",
        youtubeUrl: "https://www.youtube.com/watch?v=wkDfsKijrZ8",
        articleUrl: "https://takeuforward.org/data-structure/check-for-balanced-parentheses/"
      },
      {
        id: "b75-55",
        title: "Valid Palindrome",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
        gfgUrl: "https://www.geeksforgeeks.org/sentence-palindrome-palindrome-removing-spaces-dots-etc/",
        tufUrl: "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
        youtubeUrl: "https://www.youtube.com/watch?v=0k_eXXB-_sQ",
        articleUrl: "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/"
      },
      {
        id: "b75-56",
        title: "Longest Palindromic Substring",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
        gfgUrl: "https://www.geeksforgeeks.org/longest-palindromic-substring/",
        tufUrl: "https://takeuforward.org/data-structure/longest-palindromic-substring/",
        youtubeUrl: "https://www.youtube.com/watch?v=XYQecbcd6fY",
        articleUrl: "https://takeuforward.org/data-structure/longest-palindromic-substring/"
      }
    ]
  },
  {
    topicName: "Tree",
    problems: [
      {
        id: "b75-57",
        title: "Maximum Depth of Binary Tree",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/",
        tufUrl: "https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=eD3tm246goI",
        articleUrl: "https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/"
      },
      {
        id: "b75-58",
        title: "Same Tree",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/same-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/",
        tufUrl: "https://takeuforward.org/data-structure/check-if-two-trees-are-identical/",
        youtubeUrl: "https://www.youtube.com/watch?v=BhuvF_-PWS0",
        articleUrl: "https://takeuforward.org/data-structure/check-if-two-trees-are-identical/"
      },
      {
        id: "b75-59",
        title: "Invert Binary Tree",
        tag: "Basic",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/mirror-of-a-tree-mirror-tree-in-c/",
        tufUrl: "https://takeuforward.org/data-structure/invert-binary-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=fKgZiCXb6zs",
        articleUrl: "https://takeuforward.org/data-structure/invert-binary-tree/"
      },
      {
        id: "b75-60",
        title: "Binary Tree Maximum Path Sum",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        gfgUrl: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/",
        tufUrl: "https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=WszrfSwMz58",
        articleUrl: "https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/"
      },
      {
        id: "b75-61",
        title: "Binary Tree Level Order Traversal",
        tag: "Basic",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        gfgUrl: "https://www.geeksforgeeks.org/level-order-tree-traversal/",
        tufUrl: "https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=EoAsWbO7sqg",
        articleUrl: "https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/"
      },
      {
        id: "b75-62",
        title: "Serialize and Deserialize Binary Tree",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
        tufUrl: "https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=-YbXySKJsX8",
        articleUrl: "https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/"
      },
      {
        id: "b75-63",
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/subtree-of-another-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/",
        tufUrl: "https://takeuforward.org/data-structure/subtree-of-another-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=E36O5SWp-LE",
        articleUrl: "https://takeuforward.org/data-structure/subtree-of-another-tree/"
      },
      {
        id: "b75-64",
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        gfgUrl: "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/",
        tufUrl: "https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/",
        youtubeUrl: "https://www.youtube.com/watch?v=aZNaLrVebKQ",
        articleUrl: "https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/"
      },
      {
        id: "b75-65",
        title: "Validate Binary Search Tree",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
        tufUrl: "https://takeuforward.org/data-structure/check-if-a-tree-is-a-bst-or-bt-practice/",
        youtubeUrl: "https://www.youtube.com/watch?v=f-sj7I5oXEI",
        articleUrl: "https://takeuforward.org/data-structure/check-if-a-tree-is-a-bst-or-bt-practice/"
      },
      {
        id: "b75-66",
        title: "Kth Smallest Element in a BST",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        gfgUrl: "https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/",
        tufUrl: "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-binary-search-tree/",
        youtubeUrl: "https://www.youtube.com/watch?v=9TJYWh0adfk",
        articleUrl: "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-binary-search-tree/"
      },
      {
        id: "b75-67",
        title: "Lowest Common Ancestor of a Binary Search Tree",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        gfgUrl: "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/",
        tufUrl: "https://takeuforward.org/data-structure/lowest-common-ancestor-in-binary-search-tree-lca-in-bst/",
        youtubeUrl: "https://www.youtube.com/watch?v=cODZw3EwPpw",
        articleUrl: "https://takeuforward.org/data-structure/lowest-common-ancestor-in-binary-search-tree-lca-in-bst/"
      }
    ]
  },
  {
    topicName: "Heap",
    problems: [
      {
        id: "b75-68",
        title: "Top K Frequent Elements",
        tag: "Core",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
        gfgUrl: "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/",
        tufUrl: "https://takeuforward.org/data-structure/k-most-frequent-elements/",
        youtubeUrl: "https://www.youtube.com/watch?v=7VoistPCVHs",
        articleUrl: "https://takeuforward.org/data-structure/k-most-frequent-elements/"
      },
      {
        id: "b75-69",
        title: "Find Median from Data Stream",
        tag: "Core",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
        gfgUrl: "https://www.geeksforgeeks.org/median-of-stream-of-running-integers-using-stl/",
        tufUrl: "https://takeuforward.org/data-structure/find-median-from-data-stream/",
        youtubeUrl: "https://www.youtube.com/watch?v=1LkOrc-Le-Y",
        articleUrl: "https://takeuforward.org/data-structure/find-median-from-data-stream/"
      }
    ]
  }
];

export const blind75SheetData = {
  title: "Blind 75 DSA Sheet",
  slug: "blind-75",
  creatorName: "Take U Forward / Raj Vikramaditya (Striver)",
  totalProblems: 75,
  description: "The definitive collection of 75 most essential Data Structures & Algorithms coding interview questions. Curated by TakeUForward, covering Array, Binary, Dynamic Programming, Graph, Intervals, Linked List, Matrix, String, Tree, and Heap.",
  sections: blind75Topics.map((t) => ({
    topic: t.topicName,
    subTopic: t.topicName,
    problems: t.problems.map((p) => ({
      _id: p.id,
      title: p.title,
      problem_name: p.title,
      tag: p.tag,
      difficulty: p.difficulty,
      platform: "leetcode",
      problemUrl: p.leetcodeUrl,
      tufUrl: p.tufUrl || p.articleUrl,
      docUrl: p.articleUrl || p.tufUrl,
      video_link: p.youtubeUrl,
      tags: [t.topicName, p.tag || 'Standard']
    }))
  }))
};

