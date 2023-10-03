import mongoose from "mongoose";

export interface ISubComments extends mongoose.Document {
  contents: string;
  subComments: ISubComments[];
}

/* SubCommentSchema will correspond to a collection in your MongoDB database. */
const SubCommentSchema = new mongoose.Schema<ISubComments>(
  {
    contents: {
      /* The contents of this SubComment */

      type: String,
      required: [true, "댓글 내용이 제공되지 없습니다."],
    },
  },
  { timestamps: true }
);

export const SubComment =
  (mongoose.models.SubComment as any as false) ||
  mongoose.model<ISubComments>("SubComment", SubCommentSchema);
