import Link from "next/link";

interface ITextBlockNavBarProps {
  items: { name: string; _id: string }[];
}

export function TextBlockNavBar({ items }: ITextBlockNavBarProps) {
  return (
    <div className="flex flex-row w-full flex-wrap bg-main-blue/50 p-2">
      {items.map((item) => (
        <Link key={item._id} href={"/" + item._id} className="mx-1 my-1">
          <div className="flex px-2 py-0.5 rounded-md text-white bg-sky-600 font-semibold text-sm">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
