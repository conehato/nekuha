export interface ArticleList extends Omit<Article, "contents" | "comments"> {
  summary: string;
  commentCount: number;
}

export interface Article {
  title: string;
  author: User;
  contents: string;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  contents: string;
  author: User;
  createdAt: string;
}

export interface User {
  name: string;
  profileImage?: string;
}
