import { ArticleViewNews } from "../view/News";

export function ArticleListMainList() {
    
    const articles = [0, 1, 2, 3, 4, 5, 6, 7]
    const renderArticles = () => articles.map((item) => <ArticleViewNews/>)

    return (
    <div className="w-full">
        <ul>
            {renderArticles()}
        </ul>
    </div>
    )
  }