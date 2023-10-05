import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IPostCommentRes, IPostCommentReq } from "./route";

export function APIArticle() {
  return {
    post: apiHandler<IPostCommentRes, IPostCommentReq>("GET"),
  };
}
