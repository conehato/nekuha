import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IGetArticlesRes, IPostArticleRes, IPostArticleReq } from "./route";

export function APIArticle() {
  return {
    get: apiHandler<IGetArticlesRes>("GET"),
    post: apiHandler<IPostArticleRes, IPostArticleReq>("GET"),
  };
}
