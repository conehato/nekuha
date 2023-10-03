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
    <div className="flex flex-row w-full bg-white items-center py-1 h-14">
      <div className="w-20 h-12 pl-2 flex items-center shrink-0">
      <Image
        className="w-20 h-full object-cover"
        src={article.previewImage.src}
        alt={article.previewImage.alt}
        width={80}
        height={80}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
      </div>
      <div className="flex flex-col pl-2 w-full h-full justify-between">
        <div className="flex flex-row w-full -mt-0.5">
        <p className="text-base/[1.25rem] line-clamp-1 text-sky-600 w-fit">
          {`${article.title}`}
        </p>
        <p className="text-base/[1.25rem] line-clamp-1 text-sky-700 px-2">{` [${article.commentCount}]`}</p>
        </div>
        <div>
          <p className="text-xs line-clamp-1 text-stone-700 mb-1">
            {article.category}
          </p>
          <p className="text-xs line-clamp-1 text-stone-500 mb-0.5">
            {`${article.author.name} | ${timeDiff} | 추천 ${article.likeCount}`}
          </p>
        </div>
      </div>
    </div>
  );
}
