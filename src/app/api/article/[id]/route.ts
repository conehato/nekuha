import { Article } from "@/models";
import dbConnect from "../../dbConnect";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const article = await Article.findById(id)
      .populate({ path: "comments", populate: { path: "sub_comments" } })
      .exec();

    return Response.json(article, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
