import { IArticlePreview } from "@/interfaces";
import Image from "next/image";
import { formatDistanceToNow } from 'date-fns'

interface IArticleListItemProps {
  article: IArticlePreview;
}
export function ArticleListItem({ article }: IArticleListItemProps) {
  const timeDiff = 0
  return (
    <div className="flex flex-row w-full bg-white items-center">
      <Image
        className="w-20 h-20 object-cover"
        src="https://i1.sndcdn.com/avatars-yHA8nds2mqg4uYtr-kyxTzw-t500x500.jpg"
        alt="안유진"
        width={80}
        height={80}
      />
      <div className="flex flex-col px-2 py-1 h-20 justify-between">
        <p className="text-base/[1.25rem] line-clamp-2 text-sky-600">
          {
            "僕たちが めぐり会えた事に マジで感謝!!僕たちが めぐり会えた事に マジで感謝!!僕たちが めぐり会えた事に マジで感謝!!"
          }
        </p>
        <div>
          <p className="text-sm/[0.75rem] line-clamp-1 text-stone-700">
            {"ユーモア"}
          </p>
          <p className="text-xs line-clamp-1 text-stone-500">
            {"イナズマイレブン | " + timeDiff + " | コメント 3"}
          </p>
        </div>
      </div>
    </div>
  );
}
