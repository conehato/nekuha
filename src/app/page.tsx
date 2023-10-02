import { List } from "@/components/common/List";
import { ListFilter } from "@/components/article";
import { ArticleViewPreview } from "@/components/article/view/Preview";
import { TextBlockNavBar } from "@/components/common/TextBlockNavBar";
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
      <TextBlockNavBar items={mainCategory} />
      <ListFilter
        items={filters}
        selectedItem={searchParams.filter || filters[0].key}
      />
      <List data={articlesMock}>
        {({item}) => <ArticleViewPreview article={item}/>}
      </List>
    </div>
  );
}
