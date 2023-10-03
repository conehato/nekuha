import { Category } from "@/models";
import dbConnect from "../dbConnect";

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
