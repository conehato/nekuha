import { contacts } from "@/constants/contacts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function Footer() {
  const renderFormattedEmailUrl = (url: string) => {
      return (
        <Link className="text-xs" target="_blank" href={`mailto:${url}?subject=코네하츠 문의 / 신고?body=안녕하세요 코네하츠입니다.%0D%0A문의 또는 신고 내용을 자세히 적어주세요.%0D%0A`}>
          {`문의 / 신고 : ${url}`}
        </Link>
      );
  };
  
  return (
    <div className="flex flex-col w-screen p-2 justify-center items-center bg-white border-t my-2">
      <div className="flex text-xs w-full py-3 justify-center">{renderFormattedEmailUrl(contacts.email)}</div>
    </div>
  );
}
