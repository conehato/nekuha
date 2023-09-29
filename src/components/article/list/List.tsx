import { ArticleListItem } from "../view/Item";

interface IArticleListProps {}
export function ArticleList({}:IArticleListProps) {
    
    const articles = [0, 1, 2, 3, 4, 5, 6, 7]

    return (
        <div className="w-full">
            <ul className="divide-y divide-solid divide-main-blue">
                {articles.map((item) =>  <ArticleListItem key={item}/>)}
            </ul>
        </div>
    )
}