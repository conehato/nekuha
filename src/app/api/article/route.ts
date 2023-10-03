import { NextRequest } from "next/server";
import * as Mock from "@/utils/mock";
import { IArticlePreview } from "@/interfaces";

export interface IArticleRes {
  totalArticleCount: number;
  articlePreviews: IArticlePreview[];
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("p");
  const mockData: IArticleRes = {
    totalArticleCount: Mock.articlesMock.length,
    articlePreviews: Mock.articlesMock,
  };

  
  return new Promise((resolve) => {
    if (page) {
      // request pagenation to server
      // return data
      resolve(Response.json({ ...mockData }, { status: 200 }));
    } else {
      // if not page, it is a main screen
      // request number of all articles in db and pass it to pagnation component in footer in order to calculate

      resolve(Response.json({ ...mockData }, { status: 200 }));
    }
  });
}
