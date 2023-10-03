import mongoose from "mongoose";
import { ISubComments } from "./SubComments";

export interface IComments extends mongoose.Document {
  contents: string;
  sub_comments: ISubComments[];
}

/* CommentSchema will correspond to a collection in your MongoDB database. */
const CommentSchema = new mongoose.Schema<IComments>(
  {
    contents: {
      /* The contents of this Comment */

      type: String,
      required: [true, "댓글 내용이 제공되지 없습니다."],
    },
    sub_comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubComment" }],
  },
  { timestamps: true }
);

export const Comment =
  (mongoose.models.Comment as any as false) ||
  mongoose.model<IComments>("Comment", CommentSchema);
