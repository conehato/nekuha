"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface IListFilterProps {
  items: { name: string; key: string }[];
  selectedItem: string;
}
export function ListFilter({ items, selectedItem }: IListFilterProps) {
  const pathname = usePathname();

  const renderFilterItem = () => {
    const getFilteredUrlWithQuery = (query: string) => (`${pathname}?filter=${query}`)
    // Each item navigates to (current url + query named 'filter')
    // ex) /game?filter=hot
    // Every page.tsx which has ListFilter component as children can get 'filter' from prop named 'searchParams'
    // and must pass the 'filter' to 'selectedItem' to be in sync
    
    return items.map((item) => (
      <Link
        key={item.key}
        href={getFilteredUrlWithQuery(item.key)}
        className="p-1"
        replace
      >
        <div
          className={`flex px-2 py-1 rounded-md ${
            selectedItem == item.key
              ? "bg-white text-black shadow-md"
              : "text-black/50"
          }`}
        >
          {item.name}
        </div>
      </Link>
    ));
  };
  
  return (
    <div className="w-fill flex flex-row bg-main-blue/30 px-2 py-1">
      {renderFilterItem()}
    </div>
  );
}
