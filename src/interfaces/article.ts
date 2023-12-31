export interface IArticlePreview
  extends Omit<IArticle, "contents" | "comments"> {
  commentCount: number;
  previewImageUrl: string;
}

export interface IArticle {
  _id: string;
  title: string;
  // author: IUser;
  contents: string;
  comments: IComment[];
  createdAt: string;
  // category: string;
  // likeCount: number;
}

export interface IComment {
  id: number;
  contents: string;
  createdAt: string;
  sub_comment: IComment[];
  // author: IUser;
}

export interface IUser {
  id: number;
  name: string;
  profileImage?: string;
}
