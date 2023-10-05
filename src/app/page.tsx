import { ListFilter } from "@/components/article";
import { List, TextBlockNavBar, Pagination } from "@/components/common";
import { APICategory } from "./api/category";
import { APIArticle } from "./api/article";
import { ArticleViewPreview } from "@/components/article/view/Preview";
import { articlesMock, mainCategory } from "@/utils";

interface ICategoryProps {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
    [key: string]: string | string[] | undefined;
  };
}

const getArticles = async (page?: string) => {
  const articlesInfo = await APIArticle().get("http://localhost:3000/api/article")
  return articlesInfo.data
}

export default async function Home({ searchParams }: ICategoryProps) {
  const { data } = await APICategory().get(
    `http://localhost:3000/api/category`
  );

  const { data: articlesInfo } = await APIArticle().get(
    "http://localhost:3000/api/article"
  );

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
      <TextBlockNavBar items={data.rows} />
      <ListFilter
        items={filters}
        selectedItem={searchParams.filter || filters[0].key}
      />
      <List data={articles.rows}>
        {({item}) => <ArticleViewPreview article={item}/>}
      </List>
      <Pagination currentPage={Number(searchParams.page)} count={articles.count} limit={25} baseUrl="/"/>
    </div>
  );
}
