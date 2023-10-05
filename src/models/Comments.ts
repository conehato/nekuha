import mongoose from "mongoose";
import { IArticles } from "./Articles";

export interface IComments extends mongoose.Document {
  contents: string;
  sub_comments: IComments[];
  article_id: IArticles;
}

/* CommentSchema will correspond to a collection in your MongoDB database. */
const CommentSchema = new mongoose.Schema<IComments>(
  {
    contents: {
      /* The contents of this Article */

      type: String,
      required: [true, "댓글 내용이 제공되지 없습니다."],
    },
    sub_comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    article_id: { type: String, ref: "Article" },
  },
  { timestamps: true }
);

export const Comment =
  (mongoose.models.Comment as any as false) ||
  mongoose.model<IComments>("Comment", CommentSchema);
