import Home from "../page";
import { articlesMock } from "@/utils";
import { ListFilter } from "@/components/article";
import { ArticleList } from "@/components/article";

interface ICategoryProps {
  params: { category: string };
  searchParams: {
    filter: string;
    [key: string]: string | string[] | undefined;
  };
}

export default function Category({ params, searchParams }: ICategoryProps) {
  const filter = [
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
      <div className="">{params.category}</div>
      <ListFilter
        items={filter}
        selectedItem={(searchParams.filter) || filter[0].key}
      />
      <ArticleList articles={articlesMock} />
    </div>
  );
}
