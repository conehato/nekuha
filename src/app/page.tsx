import { ListFilter } from "@/components/article";
import { List, TextBlockNavBar, Pagination } from "@/components/common";
import { APICategory } from "./api/category";
import { APIArticle } from "./api/article";
import { ArticleViewPreview } from "@/components/article/view/Preview";

interface ICategoryProps {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
    [key: string]: string | string[] | undefined;
  };
}

const getArticles = async (page: string | undefined = "1") => {
  const articlesInfo = await APIArticle().get(
    `http://localhost:3000/api/article?page=${page}&limit=${25}`,
  );
  
  if (articlesInfo.ok) {
    return articlesInfo.data;
  } else {
    return {
      rows: [],
      count: 0,
    };
  }
};

export default async function Home({ searchParams }: ICategoryProps) {
  const { data } = await APICategory().get(
    `http://localhost:3000/api/category`,
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

  const articles = await getArticles(searchParams.page);
  return (
    <div className="bg-background-green flex flex-col first-letter:h-full">
      <TextBlockNavBar items={data.rows} />
      <ListFilter
        items={filters}
        selectedItem={searchParams.filter || filters[0].key}
      />
      <List data={articles.rows} itemKey={(item) => item._id}>
        {({ item }) => <ArticleViewPreview article={item} />}
      </List>
      <Pagination
        currentPage={Number(searchParams.page) || 1}
        count={articles.count}
        limit={25}
        baseUrl="/"
      />
    </div>
  );
}
