import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IGetArticlesRes, IPostArticlesRes, IPostArticlesReq } from "./route";

export function APIArticle() {
  return {
    get: apiHandler<IGetArticlesRes>("GET"),
    post: apiHandler<IPostArticlesRes, IPostArticlesReq>("GET"),
  };
}
