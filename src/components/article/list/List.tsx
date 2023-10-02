import { IArticlePreview } from "@/interfaces";
import { ArticleListItem } from "./Item";

interface IArticleListProps {
  articles: IArticlePreview[];
}

export function ArticleList({ articles }: IArticleListProps) {
  return (
    <div className="w-full">
      <ul className="divide-y divide-solid divide-main-blue">
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
