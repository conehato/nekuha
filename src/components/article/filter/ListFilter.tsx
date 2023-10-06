"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

interface IListFilterProps {
  items: { name: string; key: string }[];
  selectedItem: string;
}

export function ListFilter({ items, selectedItem }: IListFilterProps) {
  const pathname = usePathname();

  const renderFilterItem = () => {
    const getFilteredUrlWithQuery = (query: string) =>
      `${pathname}?filter=${query}`;
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
          className={`flex px-2 py-1 rounded-md text-sm ${
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
    <div className="w-fill flex flex-row justify-between items-center bg-main-blue/30 px-2 py-1">
      <div className="flex flex-row">{renderFilterItem()}</div>
      <Link href={"/write"} className="p-1">
        <PencilSquareIcon className="w-8 h-8" />
      </Link>
    </div>
  );
}
