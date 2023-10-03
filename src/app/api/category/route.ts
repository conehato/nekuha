import { Category } from "@/models";
import { ICategory } from "@/interfaces";
import dbConnect from "@/app/api/dbConnect";

export interface IGetRootCategoriesRes {
  count: number;
  rows: ICategory[];
}
export async function GET(req: Request) {
  await dbConnect();

  try {
    const category = await Category.find({ parent_id: { $exists: false } });

    return Response.json(
      { count: category.length, rows: category },
      { status: 200 }
    );
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const data = await req.json();
    const category = await Category.create(data);

    return Response.json(category, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
