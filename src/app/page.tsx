import { ArticleList } from "@/components/article";
import { ListFilter } from "@/components/category";
import { articlesMock } from "@/utils";

export default function Home({ category }: { category: string | null }) {
  const mainCategory = [
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
      <ListFilter
        items={mainCategory}
        selectedItem={category || mainCategory[0].key}
      />
      <ArticleList articles={articlesMock} />
    </div>
  );
}
