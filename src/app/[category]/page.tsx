import { ListFilter } from "@/components/article";
import { List, TextBlockNavBar } from "@/components/common";
import { APICategoryById } from "../api/category/[id]";
import { ArticleViewPreview } from "@/components/article/view/Preview";
import { APIArticle } from "../api/article";

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

export default async function Category({
  params,
  searchParams,
}: ICategoryProps) {
  const {
    data: { name, subCategories },
  } = await APICategoryById().get(
    `http://localhost:3000/api/category/${params.category}`
  );
  const { data: articlesInfo } = await APIArticle().get(
    "http://localhost:3000/api/article"
  );

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
      <div className="text-7xl">{name}</div>
      {!!subCategories?.length && <TextBlockNavBar items={subCategories} />}
      <ListFilter
        items={filter}
        selectedItem={searchParams.filter || filter[0].key}
      />
      <List data={articlesInfo.rows}>
        {({ item }) => <ArticleViewPreview article={item} />}
      </List>
    </div>
  );
}
