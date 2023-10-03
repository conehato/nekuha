import mongoose from "mongoose";

export interface Categories extends mongoose.Document {
  name: string;
  key: string;
  parent_key: string[];
}

/* CategorySchema will correspond to a collection in your MongoDB database. */
const CategorySchema = new mongoose.Schema<Categories>({
  name: {
    /* The name of this category */

    type: String,
    required: [true, "카테고리의 이름이 제공되지 없습니다."],
  },
  key: {
    /* The key of this category */

    type: String,
    required: [true, "카테고리의 키가 제공되지 않았습니다."],
  },
  parent_key: {
    /* List of dietary needs, if applicable */

    type: [String],
  },
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<Categories>("Category", CategorySchema);
