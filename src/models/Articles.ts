import mongoose from "mongoose";
import { IComments } from "./Comments";

export interface IArticles extends mongoose.Document {
  title: string;
  contents: string;
  comments: IComments[];
}

/* ArticleSchema will correspond to a collection in your MongoDB database. */
const ArticleSchema = new mongoose.Schema<IArticles>(
  {
    title: {
      /* The title of this Article */

      type: String,
      required: [true, "글 제목이 제공되지 없습니다."],
    },
    contents: {
      /* The contents of this Article */

      type: String,
      required: [true, "글 내용이 제공되지 않았습니다."],
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export const Article = (mongoose.models.Article as any as false) || mongoose.model<IArticles>("Article", ArticleSchema);
