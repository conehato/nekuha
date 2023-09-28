import Image from 'next/image'
import { ArticleListMainList } from '@/components/article/list/MainList'

export default function Home({ category }: { category: string}) {
  const mainCategory = [{
    name: "화제",
    key: "hot"
  }, {
    name: "최신",
    key: "new"
  }]

  return (
    <div className='flex h-full bg-background-green'>
      <ArticleListMainList navItems={mainCategory} selectedNavItem={category}/>
    </div>
  )
}
