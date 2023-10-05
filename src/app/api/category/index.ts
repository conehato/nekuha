import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IGetRootCategoriesRes } from "./route";

export function APICategory() {
  return {
    get: apiHandler<IGetRootCategoriesRes>("GET"),
    post: apiHandler("POST"),
  };
}
