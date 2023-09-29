import { ArticleViewNews } from "../view/News";
import { ArticleListNavBar, TnavItem} from "./NavBar";

interface IProps {
    navItems: TnavItem
    selectedNavItem: string
}

export function ArticleListMainList({ navItems, selectedNavItem }: IProps) {
    
    const articles = [0, 1, 2, 3, 4, 5, 6, 7]
    const renderArticles = () => articles.map((item) => 
    <ArticleViewNews key={item}/>)

    return (
    <div className="w-full">
        <ArticleListNavBar items={navItems} selectedItem={selectedNavItem}/>
        <ul className="divide-y divide-solid divide-main-blue">
            {renderArticles()}
        </ul>
    </div>
    )
  }