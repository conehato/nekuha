import { Comment, Article } from "@/models";
import { IArticle } from "@/interfaces";

import dbConnect from "../../../dbConnect";

export async function POST(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data = await req.json();

    const comment = await Comment.create(data);

    await Article.findByIdAndUpdate<IArticle>(id, {
      $push: { comments: comment._id },
    });

    return Response.json(comment, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
