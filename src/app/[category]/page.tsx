import { articlesMock } from "@/utils";
import { ListFilter } from "@/components/article";
import { List } from "@/components/common";
import { ArticleViewPreview } from "@/components/article/view/Preview";
import { getCategoryDetailOf } from "@/app/api/category/[key]/getCategoryDetailOf";

interface ICategoryParamsProps {
  category: string;
}

interface ICategoryProps {
  params: ICategoryParamsProps;
  searchParams: {
    filter: string;
    [key: string]: string | string[] | undefined;
  };
}


export default async function Category({ params, searchParams }: ICategoryProps) {
  const detail = await getCategoryDetailOf(params.category)
  console.log(detail)
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
      <div className="text-7xl">{detail.name}</div>
      <ListFilter
        items={filter}
        selectedItem={searchParams.filter || filter[0].key}
      />
      <List data={articlesMock}>
        {({item}) => <ArticleViewPreview article={item}/>}
      </List>
    </div>
  );
}
