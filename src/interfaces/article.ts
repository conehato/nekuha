export interface IArticlePreview extends Omit<IArticle, "contents" | "comments"> {
  commentCount: number;
}

export interface IArticle {
  title: string;
  author: IUser;
  contents: string;
  comments: IComment[];
  createdAt: string;
}

export interface IComment {
  contents: string;
  author: IUser;
  createdAt: string;
}

export interface IUser {
  name: string;
  profileImage?: string;
}
