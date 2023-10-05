import mongoose from "mongoose";

export interface ICategories extends mongoose.Document {
  _id: string;
  name: string;
  parent_id: ICategories;
}

/* CategorySchema will correspond to a collection in your MongoDB database. */
const CategorySchema = new mongoose.Schema<ICategories>({
  _id: {
    /* The _id of this category */

    type: String,
    required: [true, "카테고리의 키가 제공되지 없습니다."],
  },
  name: {
    /* The name of this category */

    type: String,
    required: [true, "카테고리의 이름이 제공되지 없습니다."],
  },
  parent_id: { type: String, ref: "Category" },
});

export const Category =
  (mongoose.models.Category as any as false) ||
  mongoose.model<ICategories>("Category", CategorySchema);
