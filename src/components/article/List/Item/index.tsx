import styles from './style'
import Image from 'next/image';

export function ArticleListItem() {
    const dummyImgInfo = {
        src: "https://cdn.9oodnews.com/news/photo/202304/22827_32619_5156.jpg",
        alt: "안유진"
    }

    return <div className={styles.container}>
        <Image src={dummyImgInfo.src} alt={dummyImgInfo.alt}/>
        <div className={styles.content}>
            <div className={styles.title}></div>
            <div className={styles.subTitle}></div>
            <div className={styles.footer}></div>
        </div>
    </div>;
  }
  