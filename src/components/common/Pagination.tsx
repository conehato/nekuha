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
  const lastPageIndex = Math.ceil(count / limit);
  const renderPageButton = (index: number) => (
    <Link
      key={`pageButton-${index}`}
      href={{
        pathname: baseUrl,
        query: { page: index },
      }}
    >
      <p
        className={`w-[30px] text-center text-lg ${
          currentPage === index
            ? "rounded-md bg-sky-600 text-white"
            : "text-slate-500"
        }`}
      >
        {index}
      </p>
    </Link>
  );

  const renderPagination = () => {
    const pageCount = 5;
    const indexs = Array(Math.min(pageCount, lastPageIndex))
      .fill(0)
      .map(
        (_, index) =>
          index +
          1 +
          Math.min(
            Math.max(lastPageIndex - currentPage, lastPageIndex - pageCount),
            Math.max(currentPage - 3, 0),
          ),
      );
    return indexs.map(renderPageButton);
  };

  return (
    <div className="flex w-full flex-row justify-between p-4">
      <div className="flex w-[58px] justify-end">
        {currentPage !== 1 && (
          <Link href={baseUrl}>
            <div className="flex flex-row items-center justify-between rounded-md border border-slate-500 py-0.5 pl-1 pr-2">
              <ChevronLeftIcon className="h-6 w-4 fill-slate-500" />
              <p className="mb-0.5 flex text-sm/[0.875rem] text-slate-500">
                {"처음"}
              </p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-row gap-x-2">{renderPagination()}</div>
      <div className="flex w-[58px] justify-end">
        <Link
          href={{
            pathname: baseUrl,
            query: { page: currentPage + 1 },
          }}
        >
          {currentPage !== lastPageIndex && (
            <div className="flex w-fit flex-row items-center justify-between rounded-md border border-slate-500 py-0.5 pl-2 pr-1">
              <p className="mb-0.5 flex text-sm/[0.875rem] text-slate-500">
                {"다음"}
              </p>
              <ChevronRightIcon className="h-6 w-4 fill-slate-500" />
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
