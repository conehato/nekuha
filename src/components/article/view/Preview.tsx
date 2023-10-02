import { IArticlePreview } from "@/interfaces";

import Image from "next/image";
import { formatDistanceToNow } from 'date-fns'
import {ja} from "date-fns/locale"

interface IArticleViewPreviewProps {
  article: IArticlePreview;
}

export function ArticleViewPreview({ article }: IArticleViewPreviewProps) {
  const timeDiff =  formatDistanceToNow(new Date(article.createdAt), {addSuffix: true, locale: ja})
  
  return (
    <div className="flex flex-row w-full bg-white items-center">
      <Image
        className="w-20 h-20 object-cover"
        src={article.previewImage.src}
        alt={article.previewImage.alt}
        width={80}
        height={80}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
      <div className="flex flex-col px-2 py-1 h-20 justify-between">
        <p className="text-base/[1.25rem] line-clamp-2 text-sky-600">
          {article.title}
        </p>
        <div>
          <p className="text-sm/[0.75rem] line-clamp-1 text-stone-700">
            {article.category}
          </p>
          <p className="text-xs line-clamp-1 text-stone-500">
            {`${article.author.name} | ${timeDiff} | コメント ${article.commentCount}`}
          </p>
        </div>
      </div>
    </div>
  );
}
