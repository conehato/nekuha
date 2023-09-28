import Image from 'next/image'
import { ArticleListMainList } from '@/components/article/list/MainList'
export default function Home() {
  return (
    <div className='flex h-full bg-gray-300'>
      <ArticleListMainList/>
    </div>
  )
}
