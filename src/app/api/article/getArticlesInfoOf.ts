import { IArticleRes } from "./route";

export async function getArticlesInfoOf(page: (`${number}` | string | undefined)): Promise<IArticleRes> {
  const response = await fetch(`http://localhost:3000/api/article?p=${page}`);
  
  if (!response.ok) {
    console.log(response)
    throw new Error("something went to wrong");
  }

  return response.json()
}
