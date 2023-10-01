import { ICategory } from '@/interfaces'
import * as Mock from './mock'

export function getCategoryDetail(category: string): ICategory | undefined {
    return Mock.mainCategory.find((item) => item.key == category)
}