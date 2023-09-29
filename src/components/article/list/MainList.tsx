import { ArticleViewNews } from "../view/News";

export function ArticleListMainList() {
    
    const articles = [0, 1, 2, 3, 4, 5, 6, 7]
    const renderArticles = () => articles.map((item) => 
    <ArticleViewNews key={item}/>)

    return (
    <div className="w-full">
        <ul className="divide-y divide-solid divide-main-blue">
            {renderArticles()}
        </ul>
    </div>
    )
  }