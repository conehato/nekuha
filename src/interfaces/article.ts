export interface IArticlePreview
  extends Omit<IArticle, "contents" | "comments"> {
  commentCount: number;
}

export interface IArticle {
  id: number;
  title: string;
  author: IUser;
  contents: string;
  comments: IComment[];
  createdAt: string;
}

export interface IComment {
  id: number;
  contents: string;
  author: IUser;
  createdAt: string;
}

export interface IUser {
  id: number;
  name: string;
  profileImage?: string;
}
