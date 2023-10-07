import { Article, IArticles, Comment } from "@/models";

import dbConnect from "../dbConnect";
import { IArticlePreview } from "@/interfaces";
import { NextRequest } from "next/server";

export interface IGetArticlesRes {
  count: number;
  rows: IArticlePreview[];
}

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const count = await Article.countDocuments();
    const searchParams = req.nextUrl.searchParams
    console.log(req.nextUrl)
    const page = Number(searchParams.get("page")) - 1;
    const limit = Number(searchParams.get("limit"));
    const skip = page * limit;

    const articles = await Article.aggregate([
      { $addFields: { articleId: { $toString: "$_id" } } },
      {
        $lookup: {
          from: Comment.collection.name,
          localField: "articleId",
          foreignField: "article_id",
          as: "_comments",
        },
      },
      { $addFields: { commentCount: { $size: "$_comments" } } },
    ])
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return Response.json({ count, rows: articles }, { status: 200 });
  } catch (e) {
    console.log(e)
    return Response.json(e, { status: 401 });
  }
}

export interface IPostArticleReq {
  title: string;
  contents: string;
  category: string;
}

export interface IPostArticleRes extends IArticles {}
export async function POST(req: Request) {
  await dbConnect();

  try {
    const data = await req.json();
    const article = await Article.create(data);

    return Response.json(article, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}
