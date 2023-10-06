import { Comment, Article, IComments } from "@/models";
import { IArticle } from "@/interfaces";

import dbConnect from "../../../dbConnect";

export interface IPostCommentReq {
  parentId: string;
  contents: string;
}
export interface IPostCommentRes extends IComments {}
export async function POST(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data: IPostCommentReq = await req.json();

    const comment = await Comment.create({ article_id: id, ...data });

    if (data.parentId) {
      await Comment.findByIdAndUpdate(data.parentId, {
        $push: { sub_comments: comment._id },
      });
    }

    await Article.findByIdAndUpdate<IArticle>(id, {
      $push: { comments: comment._id },
    });

    return Response.json(comment, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
