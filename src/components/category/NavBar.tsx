import Link from "next/link";

interface ICategoryNavBarProps {
  items: { name: string; key: string }[];
}

export function CategoryNavBar({ items }: ICategoryNavBarProps) {

  return (
    <div className="flex flex-row w-full flex-wrap bg-main-blue/50 p-2">
      {items.map((item) => (
        <Link key={item.key} href={"/" + item.key} className="mx-1 my-1">
          <div className="flex px-2 py-0.5 rounded-md text-white bg-sky-600 font-semibold text-lg">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
