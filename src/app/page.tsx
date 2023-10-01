import { ArticleList } from "@/components/article";
import { ListFilter } from "@/components/article";
import { CategoryNavBar } from "@/components/category";
import { articlesMock, mainCategory } from "@/utils";

interface ICategoryProps {
  searchParams: {
    filter: string;
    [key: string]: string | string[] | undefined;
  };
}

export default function Home({ searchParams }: ICategoryProps) {
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

  return (
    <div className="flex flex-col first-letter:h-full bg-background-green">
      <CategoryNavBar items={mainCategory} />
      <ListFilter
        items={filters}
        selectedItem={searchParams.filter || filters[0].key}
      />
      <ArticleList articles={articlesMock} />
    </div>
  );
}
