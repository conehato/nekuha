import { IArticlePreview } from "@/interfaces";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import PreviewPlaceholder from '@/../public/images/article/placeholder_view.png'

interface IArticleViewPreviewProps {
  article: IArticlePreview;
}

export function ArticleViewPreview({ article }: IArticleViewPreviewProps) {
  const timeDiff = formatDistanceToNow(new Date(article.createdAt), {
    addSuffix: true,
    locale: ja,
  });

  const renderImage = (article: IArticlePreview) => {
    return article.previewImageUrl ? (
      <Image
        className="h-full w-20 object-cover"
        src={article.previewImageUrl}
        alt={article.title}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
    ) : (
      <Image
        className="h-full w-20 object-cover"
        src={PreviewPlaceholder}
        alt={"No Image"}
      />
    );
  };

  return (
    <div className="flex h-14 w-full flex-row items-center bg-white py-1">
      <div className="flex h-12 w-20 shrink-0 items-center pl-2">
        {renderImage(article)}
      </div>
      <div className="flex h-full w-full flex-col justify-between pl-2">
        <div className="-mt-0.5 flex w-full flex-row">
          <p className="line-clamp-1 w-fit text-base/[1.25rem] text-sky-600">
            {`${article.title}`}
          </p>
          <p className="line-clamp-1 px-2 text-base/[1.25rem] text-sky-700">{` [${article.commentCount}]`}</p>
        </div>
        <div>
          <p className="mb-1 line-clamp-1 text-xs text-stone-700">
            {"article.category"}
          </p>
          <p className="mb-0.5 line-clamp-1 text-xs text-stone-500">
            {`${"article.author.name"} | ${timeDiff} | 추천 ${"article.likeCount"}`}
          </p>
        </div>
      </div>
    </div>
  );
}
