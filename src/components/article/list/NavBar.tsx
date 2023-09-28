import Link from 'next/link'

export type TnavItem = {
    name: string
    key: string
}[]

export interface IProps {
    items: TnavItem
    selectedItem: string
}

export function ArticleListNavBar({ items, selectedItem }: IProps) {
    const renderItems = () => items.map(item => (
        <Link href={"/"+item.key} className={`p-2 ${selectedItem == item.key ? "bg-slate-600" : ""}`}>{item.name}</Link>
    ))

    return (
        <div className="w-fill flex flex-row bg-white px-2">
            {renderItems()}
        </div>
    )
}