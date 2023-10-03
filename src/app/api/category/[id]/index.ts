import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IGetCategoryRes } from "./route";

export function APICategoryById() {
  return {
    get: apiHandler<IGetCategoryRes>("GET"),
  };
}
