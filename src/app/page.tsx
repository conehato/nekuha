import { List } from "@/components/common/List";
import { ListFilter } from "@/components/article";
import { ArticleViewPreview } from "@/components/article/view/Preview";
import { TextBlockNavBar } from "@/components/common";
import { articlesMock, mainCategory } from "@/utils";
import { useAPIArticle } from "./api/article";

interface ICategoryProps {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
    [key: string]: string | string[] | undefined;
  };
}

const getArticles = async (page?: string) => {
  const articlesInfo = await useAPIArticle().get("http://localhost:3000/api/article")
  return articlesInfo.data
}

export default async function Home({ searchParams }: ICategoryProps) {
  const filters = [
    {
      name: "화제",
      key: "hot",
    },
    {
      name: "최신",
      key: "new",
    },
  ];

  const articles = await getArticles(searchParams.page)

  return (
    <div className="flex flex-col first-letter:h-full bg-background-green">
      <TextBlockNavBar items={mainCategory} />
      <ListFilter
        items={filters}
        selectedItem={searchParams.filter || filters[0].key}
      />
      <List data={articles.rows}>
        {({item}) => <ArticleViewPreview article={item}/>}
      </List>
    </div>
  );
}
