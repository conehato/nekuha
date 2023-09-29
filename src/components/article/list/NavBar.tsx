import Link from "next/link";

export type TnavItem = {
  name: string;
  key: string;
}[];

export interface IProps {
  items: TnavItem;
  selectedItem: string;
}

export function ArticleListNavBar({ items, selectedItem }: IProps) {
  const renderItems = () =>
    items.map((item) => (
      <Link href={"/" + item.key} className="p-1">
        <div
          className={`flex px-2 py-1 rounded-md shadow-md ${selectedItem == item.key ? "bg-main-blue" : ""}`}
        >
          {item.name}
        </div>
      </Link>
    ));

  return (
    <div className="w-fill flex flex-row bg-white p-2">{renderItems()}</div>
  );
}
