import Link from "next/link";

interface Tab {
  id: number;
  name: string;
  href: string;
}
interface TabListProps {
  tabList: Tab[];
}
export function TabList({ tabList }: TabListProps) {
  return (
    <div>
      {tabList.map((tab) => (
        <Link key={tab.id} href={tab.href}>
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
