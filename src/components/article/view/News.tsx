import Image from 'next/image';
import Yujin from '/workspaces/nekuha/public/images/yujin.jpg'

export function ArticleViewNews() {
    const dummyImgInfo = {
        src: Yujin,
        alt: "안유진",
        width: 40,
        height: 40,
        unoptimized: true
    }

    return <div className="flex flex-row w-full">
        <Image className='' {...dummyImgInfo}/>
        <div className="">
            <div className="">{"유머"}</div>
            <div className="">{"안유진입니다 [2]"}</div>
            <div className="">{"나는안유진팬 | 13시간 전"}</div>
        </div>
    </div>;
  }