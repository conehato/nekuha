import { IArticlePreview, IUser, ICategory } from "@/interfaces";

export const usersMock: IUser[] = [
  { id: 0, name: "田中太郎", profileImage: "https://example.com/profile1.jpg" },
  { id: 1, name: "鈴木一郎", profileImage: "https://example.com/profile2.jpg" },
  { id: 2, name: "佐藤次郎", profileImage: "https://example.com/profile3.jpg" },
  { id: 3, name: "佐藤郎中", profileImage: "https://example.com/profile4.jpg" },
];

export const articlesMock: IArticlePreview[] = [
  {
    id: 0,
    title: "ネコが家の主人に!? 面白写真20選",
    author: usersMock[0],
    createdAt: "2023-09-28T09:00:00Z",
    commentCount: 45,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala",
    },
    category: "ユーモア",
    likeCount: 7
  },
  {
    id: 1,
    title: "超リアル！街中で見かけた面白いコスプレ超リアル！街中でスプレ",
    author: usersMock[1],
    createdAt: "2023-09-27T14:00:00Z",
    commentCount: 30,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 1
  },
  {
    id: 2,
    title: "笑える！電車内での変わった瞬間",
    author: usersMock[2],
    createdAt: "2023-09-26T16:00:00Z",
    commentCount: 52,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 3,
    title: "日常の「あるある」な瞬間10選",
    author: usersMock[1],
    createdAt: "2023-09-25T10:00:00Z",
    commentCount: 29,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 4,
    title: "驚き！都市伝説が実は本当だった！？",
    author: usersMock[0],
    createdAt: "2023-09-24T12:00:00Z",
    commentCount: 68,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 12
  },
  {
    id: 5,
    title: "日本の面白い看板、実は深い意味が？",
    author: usersMock[2],
    createdAt: "2023-09-23T11:00:00Z",
    commentCount: 40,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 10
  },
  {
    id: 6,
    title: "うまく行かない料理の失敗作、共感の嵐！",
    author: usersMock[0],
    createdAt: "2023-09-22T15:00:00Z",
    commentCount: 0,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 7,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 0,
    title: "ネコが家の主人に!? 面白写真20選",
    author: usersMock[0],
    createdAt: "2023-09-28T09:00:00Z",
    commentCount: 45,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala",
    },
    category: "ユーモア",
    likeCount: 7
  },
  {
    id: 1,
    title: "超リアル！街中で見かけた面白いコスプレ超リアル！街中でスプレ",
    author: usersMock[1],
    createdAt: "2023-09-27T14:00:00Z",
    commentCount: 30,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 1
  },
  {
    id: 2,
    title: "笑える！電車内での変わった瞬間",
    author: usersMock[2],
    createdAt: "2023-09-26T16:00:00Z",
    commentCount: 52,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 3,
    title: "日常の「あるある」な瞬間10選",
    author: usersMock[1],
    createdAt: "2023-09-25T10:00:00Z",
    commentCount: 29,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 4,
    title: "驚き！都市伝説が実は本当だった！？",
    author: usersMock[0],
    createdAt: "2023-09-24T12:00:00Z",
    commentCount: 68,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 12
  },
  {
    id: 5,
    title: "日本の面白い看板、実は深い意味が？",
    author: usersMock[2],
    createdAt: "2023-09-23T11:00:00Z",
    commentCount: 40,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 10
  },
  {
    id: 6,
    title: "うまく行かない料理の失敗作、共感の嵐！",
    author: usersMock[0],
    createdAt: "2023-09-22T15:00:00Z",
    commentCount: 0,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 7,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 8,
    title: "ネコが家の主人に!? 面白写真20選",
    author: usersMock[0],
    createdAt: "2023-09-28T09:00:00Z",
    commentCount: 45,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala",
    },
    category: "ユーモア",
    likeCount: 7
  },
  {
    id: 9,
    title: "超リアル！街中で見かけた面白いコスプレ超リアル！街中でスプレ",
    author: usersMock[1],
    createdAt: "2023-09-27T14:00:00Z",
    commentCount: 30,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 1
  },
  {
    id: 10,
    title: "笑える！電車内での変わった瞬間",
    author: usersMock[2],
    createdAt: "2023-09-26T16:00:00Z",
    commentCount: 52,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 11,
    title: "日常の「あるある」な瞬間10選",
    author: usersMock[1],
    createdAt: "2023-09-25T10:00:00Z",
    commentCount: 29,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 12,
    title: "驚き！都市伝説が実は本当だった！？",
    author: usersMock[0],
    createdAt: "2023-09-24T12:00:00Z",
    commentCount: 68,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 12
  },
  {
    id: 13,
    title: "日本の面白い看板、実は深い意味が？",
    author: usersMock[2],
    createdAt: "2023-09-23T11:00:00Z",
    commentCount: 40,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 10
  },
  {
    id: 14,
    title: "うまく行かない料理の失敗作、共感の嵐！",
    author: usersMock[0],
    createdAt: "2023-09-22T15:00:00Z",
    commentCount: 0,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 15,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 16,
    title: "ネコが家の主人に!? 面白写真20選",
    author: usersMock[0],
    createdAt: "2023-09-28T09:00:00Z",
    commentCount: 45,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala",
    },
    category: "ユーモア",
    likeCount: 7
  },
  {
    id: 17,
    title: "超リアル！街中で見かけた面白いコスプレ超リアル！街中でスプレ",
    author: usersMock[1],
    createdAt: "2023-09-27T14:00:00Z",
    commentCount: 30,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 1
  },
  {
    id: 18,
    title: "笑える！電車内での変わった瞬間",
    author: usersMock[2],
    createdAt: "2023-09-26T16:00:00Z",
    commentCount: 52,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 19,
    title: "日常の「あるある」な瞬間10選",
    author: usersMock[1],
    createdAt: "2023-09-25T10:00:00Z",
    commentCount: 29,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 20,
    title: "驚き！都市伝説が実は本当だった！？",
    author: usersMock[0],
    createdAt: "2023-09-24T12:00:00Z",
    commentCount: 68,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 12
  },
  {
    id: 21,
    title: "日本の面白い看板、実は深い意味が？",
    author: usersMock[2],
    createdAt: "2023-09-23T11:00:00Z",
    commentCount: 40,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 10
  },
  {
    id: 22,
    title: "うまく行かない料理の失敗作、共感の嵐！",
    author: usersMock[0],
    createdAt: "2023-09-22T15:00:00Z",
    commentCount: 0,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 23
  },
  {
    id: 23,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 24,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
  {
    id: 25,
    title: "意外と知らない？日本の変わった祭り5選",
    author: usersMock[1],
    createdAt: "2023-09-21T09:00:00Z",
    commentCount: 44,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
    likeCount: 4
  },
];

export const mainCategory: ICategory[] = [
  {
    name: "유머",
    key: "humor"
  },
  {
    name: "뉴스",
    key: "news"
  },
  {
    name: "아이돌",
    key: "idol"
  },
  {
    name: "버튜버",
    key: "vtuber"
  },
  {
    name: "주식",
    key: "stock"
  },
  {
    name: "만화",
    key: "manga"
  },
  {
    name: "국내야구",
    key: "baseball_d"
  },
  {
    name: "국내축구",
    key: "football_d"
  },
  {
    name: "해외야구",
    key: "baseball_o"
  },
  {
    name: "해외축구",
    key: "football_o"
  },
  {
    name: "포켓몬",
    key: "pokemon"
  },
  {
    name: "게임",
    key: "game"
  },
  {
    name: "취직&전직",
    key: "jobs"
  },
  {
    name: "핫딜",
    key: "hotdeal"
  },
  {
    name: "입시&대학",
    key: "academic"
  },
  {
    name: "K-POP",
    key: "kpop"
  },
]