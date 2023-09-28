import Home from '../page'
import { ArticleListMainList } from '@/components/article/list/MainList'

export default function Category({ params }: { params: {category: string}}) {
    return <Home category={params.category}/>
}
