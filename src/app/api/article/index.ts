import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IGetArticlesRes } from "./route";

export function useAPIArticle() {
  return {
    get: apiHandler<IGetArticlesRes>("GET"),
    get: apiHandler<IArticleRes>("GET"),
  };
}
