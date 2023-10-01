import Link from "next/link";

interface IListFilterProps {
  items: { name: string; key: string }[];
  selectedItem: string;
}
export function ListFilter({ items, selectedItem }: IListFilterProps) {
  return (
    <div className="w-fill flex flex-row bg-main-blue/30 px-2 py-1">
      {items.map((item) => (
        <Link key={item.key} href={"/" + item.key} className="p-1">
          <div
            className={`flex px-2 py-1 rounded-md ${
              selectedItem == item.key ? "bg-white text-black shadow-md" : "text-black/50"
            }`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
