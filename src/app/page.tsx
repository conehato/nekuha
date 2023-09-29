import Image from 'next/image'
import { ArticleListMainList } from '@/components/article/list/MainList'
import { ArticleListNavBar } from '@/components/article/list/NavBar'

export default function Home({ category }: { category: string | null}) {
  const mainCategory = [{
    name: "화제",
    key: "hot"
  }, {
    name: "최신",
    key: "new"
  }]

  return (
    <div className='flex flex-col first-letter:h-full bg-background-green'>
      <ArticleListNavBar items={mainCategory} selectedItem={category || mainCategory[0].key}/>
      <ArticleListMainList/>
    </div>
  )
}
