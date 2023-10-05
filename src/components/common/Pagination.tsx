import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface IPaginationProps {
  currentPage: number;
  count: number;
  limit: number;
  baseUrl: string;
}

export function Pagination({
  currentPage,
  count,
  limit,
  baseUrl,
}: IPaginationProps) {
  const renderPageButton = (index: number) => (
    <Link
      href={{
        pathname: baseUrl,
        query: { page: index },
      }}
    >
      <p
        className={`text-lg w-[30px] text-center ${
          currentPage === index
            ? "bg-sky-600 text-white rounded-md"
            : "text-slate-500"
        }`}
      >
        {index}
      </p>
    </Link>
  );

  const renderPagination = () => {
    const lastPageIndex = Math.ceil(count / limit);
    const pageCount = 5;
    const indexs = Array(Math.min(pageCount, lastPageIndex))
      .fill(0)
      .map(
        (_, index) =>
          index +
          1 +
          Math.min( // 6 5
            Math.max(lastPageIndex - currentPage, lastPageIndex - 5),
            Math.max(currentPage - 3, 0)
          )
      );
    return indexs.map(renderPageButton);
  };

  return (
    <div className="flex flex-row w-full py-1 justify-between px-4 py-2">
      <Link href="">
        <div className="flex flex-row justify-between items-center border border-slate-500 rounded-md py-0.5 pl-1 pr-2">
          <ChevronLeftIcon className="w-4 h-6 fill-slate-500" />
          <p className="flex text-sm/[0.875rem] text-slate-500 mb-0.5">
            {"이전"}
          </p>
        </div>
      </Link>
      <div className="flex flex-row gap-x-2">{renderPagination()}</div>
      <Link href="">
        <div className="flex flex-row justify-between items-center border border-slate-500 rounded-md py-0.5 pl-2 pr-1">
          <p className="flex text-sm/[0.875rem] text-slate-500 mb-0.5">
            {"다음"}
          </p>
          <ChevronRightIcon className="w-4 h-6 fill-slate-500" />
        </div>
      </Link>
    </div>
  );
}
