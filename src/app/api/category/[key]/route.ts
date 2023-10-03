import { Category } from "@/models";
import dbConnect from "@/app/api/dbConnect";

export async function GET(
  req: Request,
  { params }: { params: { key: string } }
) {
  await dbConnect();

  const category = await Category.findOne({ key: params.key });
  if (!category) {
    return Response.json(
      { message: "카테고리가 존재하지 않습니다." },
      { status: 200 }
    );
  }
  return Response.json(category, { status: 200 });
}
