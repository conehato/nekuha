import { apiHandler } from "@/app/_helpers/server/apiHandler";
import { IArticlePreview } from "@/interfaces";

export interface IArticleRes {
    totalArticleCount: number;
    articlePreviews: IArticlePreview[];
}

export function useAPIArticle() {
    return {
        get: apiHandler<IArticleRes>('GET')
    }
}
