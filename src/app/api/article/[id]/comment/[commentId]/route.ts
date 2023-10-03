import { SubComment, Comment } from "@/models";
import { IComment } from "@/interfaces";

import dbConnect from "../../../../dbConnect";

export async function POST(
  req: Request,
  { params: { commentId } }: { params: { commentId: string } }
) {
  await dbConnect();

  try {
    const data = await req.json();

    const subComment = await SubComment.create(data);

    await Comment.findByIdAndUpdate<IComment>(commentId, {
      $push: { sub_comments: subComment._id },
    });

    return Response.json(subComment, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
