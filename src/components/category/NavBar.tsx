import Link from "next/link";

interface ICategoryNavBarProps {
  items: { name: string; key: string }[];
  selectedItem: string;
}
export function CategoryNavBar({ items, selectedItem }: ICategoryNavBarProps) {
  return (
    <div className="w-fill flex flex-row bg-white p-2">
      {items.map((item) => (
        <Link key={item.key} href={"/" + item.key} className="p-1">
          <div
            className={`flex px-2 py-1 rounded-md shadow-md ${
              selectedItem == item.key ? "bg-main-blue" : ""
            }`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
