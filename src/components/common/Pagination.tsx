import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

interface IPaginationProps {
    currentPage: number;
    count: number;
    limit: number;
}
export function Pagination ({ currentPage, count, limit }: IPaginationProps) {

    const renderPageButton = (index: number) => {
        <p className={`text-lg w-[30px] text-center ${currentPage === index ? "bg-sky-600 text-white rounded-md" : "text-slate-500"}`}>
          {index}
        </p>
    }

    const renderPagination = () => {
        const lastPageIndex = Math.round(count / limit);
        const countOfButton = Array(3 + Math.min(lastPageIndex-currentPage, 2))
        return countOfButton.map(num => {
            
        })
    }

    return (
        <div className="flex flex-row w-full py-1 justify-between">
        <Link href="">
          <div className="flex flex-row justify-between items-center border border-slate-500 rounded-md py-0.5 pl-1 pr-2">
            <ChevronLeftIcon className="w-4 h-6 fill-slate-500"/>
            <p className="flex text-sm/[0.875rem] text-slate-500 mb-0.5">{"이전"}</p>
          </div>
          
        </Link>
        <div className="flex flex-row gap-x-2">
       
        </div>
        <Link href="">
          <div className="flex flex-row justify-between items-center border border-slate-500 rounded-md py-0.5 pl-2 pr-1">            
            <p className="flex text-sm/[0.875rem] text-slate-500 mb-0.5">{"다음"}</p>
            <ChevronRightIcon className="w-4 h-6 fill-slate-500"/>
          </div>
          
        </Link>
      </div>
    )
}