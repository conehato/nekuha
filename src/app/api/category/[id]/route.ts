import { Category } from "@/models";
import { ICategory } from "@/interfaces";
import dbConnect from "@/app/api/dbConnect";

export interface IGetCategoryRes extends ICategory {
  subCategories: ICategory[];
}
export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await dbConnect();

  const category = await Category.findById(id);

  if (!category) {
    return Response.json(
      { message: "카테고리가 존재하지 않습니다." },
      { status: 200 }
    );
  }

  const subCategories = await Category.find({ parent_id: category?._id });

  return Response.json(
    { ...category.toObject(), subCategories },
    { status: 200 }
  );
}
