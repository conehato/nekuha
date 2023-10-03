import { Article, IArticles } from "@/models";

import dbConnect from "../dbConnect";
import { IArticlePreview } from "@/interfaces";

export interface IGetArticlesRes {
  count: number;
  rows: IArticlePreview[];
}
export async function GET(req: Request) {
  await dbConnect();

  try {
    const count = await Article.countDocuments();

    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page") || "1") - 1;
    const limit = Number(url.searchParams.get("limit") || "10");
    const skip = page * limit;

    const articles = await Article.find()
      .sort({ createAt: -1 })
      .skip(skip)
      .limit(limit);

    return Response.json({ count, rows: articles }, { status: 200 });
  } catch (e) {
    return Response.json(e, { status: 401 });
  }
}

export interface IPostArticlesReq {
  title: string;
  contents: string;
  category: string;
}
export interface IPostArticlesRes extends IArticles {}
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
