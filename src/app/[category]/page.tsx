import { articlesMock } from "@/utils";
import { ListFilter } from "@/components/article";
import { ArticleList } from "@/components/article";
import { getCategoryDetail } from "@/utils/apiMock";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPropsContext } from 'next'

interface ICategoryParamsProps {
   category: string;
   detail: {
    name: string
    key: string
  } 
}

interface ICategoryProps {
    params: ICategoryParamsProps
    searchParams: {
    filter: string;
    [key: string]: string | string[] | undefined;
  };
}
// export async function getStaticProps(context: GetStaticPropsContext<{ category: string }>) {
//   if (context.params?.category) {
//     const detail = getCategoryDetail(context.params?.category)
//     return {
//       props: { detail }
//     }
//   }
// }
// export const getStaticProps = (async (context: GetStaticPropsContext<{category: string}>) => {
//   if (context.params?.category) {
//         const detail = getCategoryDetail(context.params?.category as string)
//         return {
//           props: { detail }
//         }
//       }
// })


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
      <div className="text-7xl">{params.detail.name}</div>
      <ListFilter
        items={filter}
        selectedItem={(searchParams.filter) || filter[0].key}
      />
      <ArticleList articles={articlesMock} />
    </div>
  );
}
