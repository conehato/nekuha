import { IArticlePreview, IUser } from "@/interfaces";

export const usersMock: IUser[] = [
  { id: 0, name: "田中太郎", profileImage: "https://example.com/profile1.jpg" },
  { id: 1, name: "鈴木一郎", profileImage: "https://example.com/profile2.jpg" },
  { id: 2, name: "佐藤次郎", profileImage: "https://example.com/profile3.jpg" },
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
  },
  {
    id: 1,
    title: "超リアル！街中で見かけた面白いコスプレ",
    author: usersMock[1],
    createdAt: "2023-09-27T14:00:00Z",
    commentCount: 30,
    previewImage: {
      src: "https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg",
      alt: "Tame Impala"
    },
    category: "ユーモア",
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
  },
];
